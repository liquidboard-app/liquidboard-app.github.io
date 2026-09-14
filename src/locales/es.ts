import { LocaleDict } from './types';

const es: LocaleDict = {
  browserTitle: 'LiquidBoard — Copia y pega de forma rápida y segura',
  browserDescription: 'LiquidBoard mantiene organizados textos, fotos, stickers y enlaces para que estén listos para pegar desde el teclado de tu iPhone.',
  nav: {
    home: "Inicio",
    about: "Acerca de",
    pricing: "Precios",
    policy: "Política",
    help: "Ayuda",
  },
  hero: {
    line1: "Lleva un portapapeles real",
    line2: { left: "en tu", right: "Teclado iOS" },
  },
  coreClipboard: { line1: 'Desde el portapapeles de la app,', line2: 'hasta tu teclado de iOS.' },
  actionClipboard: {
    sectionLabel: 'Funciones de LiquidBoard',
    progressLabel: 'Progreso de las funciones del portapapeles',
    groupTitle: { primary: 'Nombre', secondary: 'del grupo' },
    groupDescription: 'Clasifica según tus necesidades',
    pinDescription: 'Lo importante, primero',
    shareDescription: 'Envía a todas las plataformas',
    exportTitle: 'Importar / Exportar',
    exportDescription: 'Guarda e importa con JSON o CSV',
    voiceTitle: 'Voz',
    voiceDescription: 'Del sonido al texto',
    scanTitle: 'Escanear',
    scanDescription: 'Importa todo el texto encontrado',
    clipboardTitle: 'Portapapeles del sistema',
    clipboardDescription: 'Copia desde cualquier lugar',
    icloudTitle: 'iCloud',
    icloudDescription: 'Mantén tu portapapeles en la nube',
    featureLabels: { group: 'Grupo', pin: 'Fijar', share: 'Compartir', export: 'Exportar archivo', voice: 'Voz', scanText: 'Escanear texto', systemPasteboard: 'Portapapeles del sistema', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "Descargar\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  pricing: {
    intro: { 
      line1: "Elija el plan adecuado para cómo guarda, organiza y comparte contenido todos los días.", 
      line2: "Cada plan es una compra única para acceso de por vida." 
    },
    fromPrice: 'Desde {price}',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Acceso de por vida',
        price: '0 €',
        description: 'Plan de prueba',
        features: ['20 Textos', '20 Imágenes', '20 Stickers', '2 Grupos Por Tipo', '2 Fijados Por Grupo'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Acceso de por vida',
        price: '3,49 €',
        description: 'Plan básico',
        features: ['100 Textos', '100 Imágenes', '100 Stickers', '5 Grupos Por Tipo', '5 Fijados Por Grupo'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Acceso de por vida',
        price: '6,49 €',
        description: 'Plan multitarea',
        features: ['250 Textos', '250 Imágenes', '250 Stickers', '15 Grupos Por Tipo', '15 Fijados Por Grupo'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Acceso de por vida',
        price: '11,99 €',
        description: 'Plan profesional',
        features: ['500 Textos', '500 Imágenes', '500 Stickers', '40 Grupos Por Tipo', '40 Fijados Por Grupo'],
      },
    ],
  },
  policy: {
    dataSecurity: "Seguridad de los Datos",
    privacy: "Privacidad",
    terms: "Términos de Uso",
    payment: "Pago y reembolso",
  },
  help: {
    faqTab: 'Preguntas frecuentes',
    docsTab: 'Documentos',
    docsPlaceholder: "La documentación se está actualizando...",
    contactTab: 'Contacto', email: 'Email', problem: 'Problema', problemPlaceholder: 'Cuéntanos qué ocurrió…', media: 'Archivos adjuntos', addMedia: 'Añadir archivo', mediaLimit: 'Hasta 20 MB por archivo', removeMedia: 'Eliminar', send: 'Enviar', sending: 'Enviando…', mediaTooLarge: 'Cada archivo adjunto debe ser de 20 MB o menos.', mediaMax: 'Puedes adjuntar hasta 5 imágenes o vídeos.', sent: 'Gracias — tu informe se ha enviado.', sendFailed: 'No se ha podido enviar el informe.',
  }
};
export default es;
