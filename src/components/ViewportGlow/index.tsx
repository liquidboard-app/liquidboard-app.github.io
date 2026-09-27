import styled from 'styled-components';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { ViewportGlowLayer } from './styled';

const ViewportGlowLayerCanvas = styled.canvas``;


const vertexSource = `
  attribute vec2 position;
  void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const fragmentSource = `
  precision highp float;
  uniform vec2 resolution;
  uniform float time;
  uniform float reveal;
  uniform float thickness;
  uniform vec4 cornerRadii;

  float roundedBoxDistance(vec2 point, vec2 halfSize, float radius) {
    vec2 corner = abs(point) - (halfSize - vec2(radius));
    return length(max(corner, 0.0)) + min(max(corner.x, corner.y), 0.0) - radius;
  }

  void main() {
    vec2 point = gl_FragCoord.xy - resolution * 0.5;
    vec2 fromCorner = min(gl_FragCoord.xy, resolution - gl_FragCoord.xy);
    float cornerRadius = point.x < 0.0
      ? (point.y > 0.0 ? cornerRadii.x : cornerRadii.w)
      : (point.y > 0.0 ? cornerRadii.y : cornerRadii.z);
    float sizeScale = min(resolution.x, resolution.y) / 588.0;
    float borderDistance = roundedBoxDistance(point, resolution * 0.5, cornerRadius);
    float inwardDistance = max(-borderDistance, 0.0);
    float outsideGlow = exp(-max(borderDistance, 0.0) / (12.0 * thickness * sizeScale));
    float cornerWeight = exp(-1.3 * length(fromCorner / (vec2(185.0, 160.0) * sizeScale)));
    float push = (1.0 - reveal) * 8.0 * sizeScale;
    float edgeLight = (0.50 + 0.12 * cornerWeight)
                    * exp(-(inwardDistance + push) / (mix(3.0, mix(9.0, 19.0, cornerWeight), reveal) * thickness * sizeScale))
                    + (0.17 + 0.10 * cornerWeight)
                    * exp(-(inwardDistance + push) / (mix(8.0, mix(38.0, 90.0, cornerWeight), reveal) * thickness * sizeScale));
    float cornerDistance = length(fromCorner / (vec2(110.0, 105.0) * mix(0.35, 1.0, reveal) * sizeScale));
    float cornerLight = 0.48 * exp(-2.0 * pow(cornerDistance, 1.25));
    float spreadDistance = length(fromCorner / (resolution * vec2(0.6, 0.7)));
    float ambientLight = 0.12 * reveal * exp(-1.7 * spreadDistance);

    float animatedTime = -time * 1.5;
    float angle = animatedTime * 0.95;
    vec2 field = point / length(resolution) * 1.65;
    field = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * field;
    vec2 blend = clamp(field + 0.5, 0.0, 1.0);
    vec3 warm = mix(vec3(1.0, 0.20, 0.015), vec3(1.0, 0.015, 0.65), blend.x);
    vec3 cool = mix(vec3(0.55, 1.0, 0.015), vec3(0.08, 0.38, 1.0), blend.x);
    vec3 color = mix(warm, cool, blend.y);
    float light = 0.82 + 0.18 * sin(field.x * 5.0 - field.y * 3.0 + animatedTime * 1.3);
    float flare = pow(max(0.0, sin(animatedTime * 1.65 - 0.8)), 12.0);
    float alpha = min(0.96, (edgeLight + cornerLight + ambientLight) * light * (1.0 + flare * 0.16));
    float innerFade = exp(-pow(inwardDistance / (90.0 * sizeScale), 2.0));
    alpha *= reveal * outsideGlow * innerFade;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

export default function ViewportGlow({ targetRef }: { targetRef: RefObject<HTMLDivElement> }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fallback, setFallback] = useState(false);
  const [generation, setGeneration] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { alpha: true, antialias: false, depth: false, premultipliedAlpha: true });
    if (!gl) { setFallback(true); return; }

    const shaders: WebGLShader[] = [];
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
    };
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    const buffer = gl.createBuffer();
    const dispose = () => {
      shaders.forEach((shader) => gl.deleteShader(shader));
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
    if (!vertex || !fragment || !program || !buffer) {
      setFallback(true);
      dispose();
      return;
    }
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setFallback(true);
      dispose();
      return;
    }
    setFallback(false);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const resolution = gl.getUniformLocation(program, 'resolution');
    const cornerRadii = gl.getUniformLocation(program, 'cornerRadii');
    const time = gl.getUniformLocation(program, 'time');
    const revealUniform = gl.getUniformLocation(program, 'reveal');
    const thicknessUniform = gl.getUniformLocation(program, 'thickness');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const visualViewport = window.visualViewport;
    let frame = 0;
    let scrollFrame = 0;
    let lost = false;
    let scrollReveal = 0;

    const draw = (now: number) => {
      frame = 0;
      if (lost || document.hidden) return;
      gl.uniform1f(time, reducedMotion.matches ? 0 : now / 1000);
      gl.uniform1f(revealUniform, scrollReveal);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reducedMotion.matches) frame = requestAnimationFrame(draw);
    };
    const restart = () => {
      cancelAnimationFrame(frame);
      draw(performance.now());
    };
    const updateReveal = () => {
      const target = targetRef.current;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const viewportTop = visualViewport?.offsetTop ?? 0;
      const viewportHeight = visualViewport?.height ?? window.innerHeight;
      const viewportBottom = viewportTop + viewportHeight;
      const fadeDistance = Math.min(160, viewportHeight * 0.2);
      const entering = Math.min(1, Math.max(0, (viewportBottom - rect.top) / fadeDistance));
      const leaving = Math.min(1, Math.max(0, (rect.bottom - viewportTop) / fadeDistance));
      const progress = Math.min(entering, leaving);
      scrollReveal = reducedMotion.matches
        ? Number(rect.top < viewportBottom && rect.bottom > viewportTop)
        : progress;
      wrapperRef.current?.style.setProperty('--glow-reveal', String(scrollReveal));
      if (reducedMotion.matches) restart();
    };
    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        updateReveal();
      });
    };
    const syncVisualViewport = () => {
      const layer = wrapperRef.current;
      if (!layer) return;
      layer.style.setProperty('--glow-viewport-top', `${visualViewport?.offsetTop ?? 0}px`);
      layer.style.setProperty('--glow-viewport-height', `${visualViewport?.height ?? window.innerHeight}px`);
      updateReveal();
    };
    const resize = () => {
      syncVisualViewport();
      // Soft light needs only CSS-pixel resolution, even on Retina screens.
      canvas.width = Math.max(1, Math.round(canvas.clientWidth));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      const glowThickness = parseFloat(getComputedStyle(wrapperRef.current ?? canvas).getPropertyValue('--glow-thickness')) || 1;
      gl.uniform1f(thicknessUniform, glowThickness);
      gl.uniform4f(cornerRadii, 0, 0, 0, 0);
      updateReveal();
      restart();
    };
    const onLost = (event: Event) => {
      event.preventDefault();
      lost = true;
      cancelAnimationFrame(frame);
      setFallback(true);
    };
    const onRestored = () => setGeneration((value) => value + 1);
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);
    visualViewport?.addEventListener('resize', syncVisualViewport);
    visualViewport?.addEventListener('scroll', syncVisualViewport);
    reducedMotion.addEventListener('change', updateReveal);
    document.addEventListener('visibilitychange', restart);
    canvas.addEventListener('webglcontextlost', onLost);
    canvas.addEventListener('webglcontextrestored', onRestored);
    resize();

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      visualViewport?.removeEventListener('resize', syncVisualViewport);
      visualViewport?.removeEventListener('scroll', syncVisualViewport);
      reducedMotion.removeEventListener('change', updateReveal);
      document.removeEventListener('visibilitychange', restart);
      canvas.removeEventListener('webglcontextlost', onLost);
      canvas.removeEventListener('webglcontextrestored', onRestored);
      dispose();
    };
  }, [generation, targetRef]);

  return <ViewportGlowLayer ref={wrapperRef} aria-hidden="true" data-fallback={fallback}>
    <ViewportGlowLayerCanvas ref={canvasRef} />
  </ViewportGlowLayer>;
}
