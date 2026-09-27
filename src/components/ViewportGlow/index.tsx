import styled from 'styled-components';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { createPortal } from 'react-dom';
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
  uniform float innerCornerRadius;
  uniform float spillStrength;

  float roundedBoxDistance(vec2 point, vec2 halfSize, float radius) {
    vec2 corner = abs(point) - (halfSize - vec2(radius));
    return length(max(corner, 0.0)) + min(max(corner.x, corner.y), 0.0) - radius;
  }

  vec3 glowColor(vec2 point, float angle) {
    vec2 field = point / length(resolution) * 1.65;
    field = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * field;
    vec2 blend = clamp(field + 0.5, 0.0, 1.0);
    vec3 warm = mix(vec3(1.0, 0.20, 0.015), vec3(1.0, 0.015, 0.65), blend.x);
    vec3 cool = mix(vec3(0.55, 1.0, 0.015), vec3(0.08, 0.38, 1.0), blend.x);
    return mix(warm, cool, blend.y);
  }

  vec2 edgeSource(float progress) {
    // Arc-length travel around a rounded rectangle keeps speed and tangent
    // continuous at each corner, regardless of the viewport aspect ratio.
    vec2 halfSize = resolution * 0.5;
    float radius = min(resolution.x, resolution.y) * 0.085;
    vec2 straight = resolution - 2.0 * radius;
    float arc = 1.570796327 * radius;
    float distance = fract(progress) * (2.0 * (straight.x + straight.y) + 4.0 * arc);
    vec2 center;
    float angle;
    if (distance < straight.x) return vec2(-halfSize.x + radius + distance, halfSize.y);
    distance -= straight.x;
    if (distance < arc) {
      center = vec2(halfSize.x - radius, halfSize.y - radius);
      angle = 1.570796327 - distance / radius;
    } else {
      distance -= arc;
      if (distance < straight.y) return vec2(halfSize.x, halfSize.y - radius - distance);
      distance -= straight.y;
      if (distance < arc) {
        center = vec2(halfSize.x - radius, -halfSize.y + radius);
        angle = -distance / radius;
      } else {
        distance -= arc;
        if (distance < straight.x) return vec2(halfSize.x - radius - distance, -halfSize.y);
        distance -= straight.x;
        if (distance < arc) {
          center = vec2(-halfSize.x + radius, -halfSize.y + radius);
          angle = -1.570796327 - distance / radius;
        } else {
          distance -= arc;
          if (distance < straight.y) return vec2(-halfSize.x, -halfSize.y + radius + distance);
          distance -= straight.y;
          center = vec2(-halfSize.x + radius, halfSize.y - radius);
          angle = -3.141592654 - distance / radius;
        }
      }
    }
    return center + radius * vec2(cos(angle), sin(angle));
  }

  void main() {
    vec2 point = gl_FragCoord.xy - resolution * 0.5;
    vec2 fromCorner = min(gl_FragCoord.xy, resolution - gl_FragCoord.xy);
    float sizeScale = min(resolution.x, resolution.y) / 588.0;
    float borderDistance = roundedBoxDistance(point, resolution * 0.5, 0.0);
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

    // Rotate the whole color field independently of the single travelling flare.
    // Base intensity stays steady while the colors flow clockwise around the rim.
    float angle = -time * 1.425;
    vec3 color = glowColor(point, angle);
    // One clockwise source carries its color from the rim into the content.
    // Complete one clockwise lap in 2.4 seconds at a constant path speed.
    vec2 source = edgeSource(time / 2.4);
    float shortSide = min(resolution.x, resolution.y);
    float sourceDistance = length((point - source) / shortSide);
    float pulse = 0.65 + 0.35 * pow(0.5 + 0.5 * sin(time * 2.3), 2.0);
    float hotspot = exp(-pow(sourceDistance / 0.38, 2.0));
    color = mix(color, vec3(1.0, 0.97, 0.90), hotspot * 0.28);
    float alpha = min(0.98, (edgeLight + cornerLight + ambientLight) * 0.9 * (1.0 + hotspot * 0.65));
    float innerFade = exp(-pow(inwardDistance / (90.0 * sizeScale), 2.0));
    // The dark center begins just inside the viewport edge. Keep its own
    // rounded boundary so the glow wraps around the dark area at each corner.
    vec2 innerHalfSize = max(resolution * 0.5 - vec2(24.0 * sizeScale), vec2(0.0));
    float roundedInnerDistance = roundedBoxDistance(point, innerHalfSize, innerCornerRadius * sizeScale);
    float roundedInnerFade = smoothstep(-8.0 * sizeScale, 18.0 * sizeScale, roundedInnerDistance);
    innerFade *= roundedInnerFade;
    alpha *= reveal * outsideGlow * innerFade;
    float spillAlpha = 0.17 * pulse * exp(-pow(sourceDistance / 0.80, 2.0))
                     * reveal * spillStrength;
    vec3 spill = glowColor(source, angle) * spillAlpha;
    gl_FragColor = vec4(color * alpha + spill * (1.0 - alpha), alpha + spillAlpha * (1.0 - alpha));
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
    const innerCornerRadius = gl.getUniformLocation(program, 'innerCornerRadius');
    const spillStrengthUniform = gl.getUniformLocation(program, 'spillStrength');
    const time = gl.getUniformLocation(program, 'time');
    const revealUniform = gl.getUniformLocation(program, 'reveal');
    const thicknessUniform = gl.getUniformLocation(program, 'thickness');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const visualViewport = window.visualViewport;
    let frame = 0;
    let scrollFrame = 0;
    let lost = false;
    let scrollReveal = 0;
    let revealFrom = 0;
    let revealTarget = 0;
    let revealStartedAt = 0;
    let revealDuration = 0;

    const draw = (now: number) => {
      frame = 0;
      if (lost || document.hidden) return;
      if (!reducedMotion.matches && revealDuration > 0) {
        const progress = Math.min(1, Math.max(0, (now - revealStartedAt) / revealDuration));
        const eased = progress * progress * (3 - 2 * progress);
        scrollReveal = revealFrom + (revealTarget - revealFrom) * eased;
        if (progress >= 1) {
          scrollReveal = revealTarget;
          revealDuration = 0;
        }
        wrapperRef.current?.style.setProperty('--glow-reveal', String(scrollReveal));
      }
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
      const nextTarget = Number(rect.top < viewportBottom && rect.bottom > viewportTop);
      if (reducedMotion.matches) {
        scrollReveal = nextTarget;
        revealFrom = nextTarget;
        revealTarget = nextTarget;
        revealDuration = 0;
        wrapperRef.current?.style.setProperty('--glow-reveal', String(scrollReveal));
        restart();
        return;
      }
      if (nextTarget === revealTarget) return;
      revealFrom = scrollReveal;
      revealTarget = nextTarget;
      revealStartedAt = performance.now();
      revealDuration = nextTarget > revealFrom ? 1000 : 1500;
    };
    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        updateReveal();
      });
    };
    const resize = () => {
      // Soft light needs only CSS-pixel resolution, even on Retina screens.
      canvas.width = Math.max(1, Math.round(canvas.clientWidth));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      const glowThickness = parseFloat(getComputedStyle(wrapperRef.current ?? canvas).getPropertyValue('--glow-thickness')) || 1;
      gl.uniform1f(thicknessUniform, glowThickness);
      const darkInnerCornerRadius = Math.min(72, Math.min(canvas.width, canvas.height) * 0.08);
      gl.uniform1f(innerCornerRadius, darkInnerCornerRadius);
      const isMobileOrTablet = window.matchMedia('(max-width: 1024px), (max-width: 1366px) and (pointer: coarse)').matches;
      gl.uniform1f(spillStrengthUniform, isMobileOrTablet ? 0.65 : 1);
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
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    window.addEventListener('resize', resize);
    visualViewport?.addEventListener('resize', updateReveal);
    visualViewport?.addEventListener('scroll', updateReveal);
    reducedMotion.addEventListener('change', updateReveal);
    document.addEventListener('visibilitychange', restart);
    canvas.addEventListener('webglcontextlost', onLost);
    canvas.addEventListener('webglcontextrestored', onRestored);
    resize();

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', resize);
      visualViewport?.removeEventListener('resize', updateReveal);
      visualViewport?.removeEventListener('scroll', updateReveal);
      reducedMotion.removeEventListener('change', updateReveal);
      document.removeEventListener('visibilitychange', restart);
      canvas.removeEventListener('webglcontextlost', onLost);
      canvas.removeEventListener('webglcontextrestored', onRestored);
      dispose();
    };
  }, [generation, targetRef]);

  return createPortal(
    <ViewportGlowLayer ref={wrapperRef} aria-hidden="true" data-fallback={fallback}>
      <ViewportGlowLayerCanvas ref={canvasRef} />
    </ViewportGlowLayer>,
    document.body,
  );
}
