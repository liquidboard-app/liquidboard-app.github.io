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
  header: {
    download: { prefix: "Descargar\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  action: {
    download: "Descargar LiquidBoard",
    titles: ['Crear grupo', 'Fijar', 'Copiar y duplicar', 'Importar y exportar archivos'],
    paragraphs: [
      'Cree grupos adicionales y clasifique textos, imágenes y stickers según sus necesidades. Cambie fluidamente entre grupos y fije los grupos esenciales en la parte superior primero.',
      'Fije los textos, imágenes y stickers importantes que usa con frecuencia en la parte superior para poder enviarlos más rápido.',
      'Copie y duplique textos, imágenes y stickers de forma fácil y rápida.',
      'Exporte e importe datos de texto como JSON y CSV directamente a través de la aplicación Archivos.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard groups' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard pinned items' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard copy and duplicate' },
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard import and export files' },
    ],
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
        features: ['25 Textos', '25 Imágenes', '25 Stickers', '2 Grupos Por Tipo', '2 Fijados Por Grupo'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Acceso de por vida',
        price: '2,99 €',
        description: 'Plan básico',
        features: ['100 Textos', '100 Imágenes', '100 Stickers', '5 Grupos Por Tipo', '5 Fijados Por Grupo'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Acceso de por vida',
        price: '5,99 €',
        description: 'Plan multitarea',
        features: ['250 Textos', '250 Imágenes', '250 Stickers', '15 Grupos Por Tipo', '15 Fijados Por Grupo'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Acceso de por vida',
        price: '10,99 €',
        description: 'Plan profesional',
        features: ['500 Textos', '500 Imágenes', '500 Stickers', '40 Grupos Por Tipo', '40 Fijados Por Grupo'],
      },
    ],
  },
  features: {
    titles: ['Texto', 'Imágenes', 'Stickers'],
    paragraphs: [
      'Cree y componga múltiples documentos de texto, información introductoria y contenido adaptado a sus necesidades de escritura. Configure plantillas de respuesta predefinidas para su uso inmediato. Ingrese y comparta rápidamente información de contacto. Almacene enlaces de sitios web, fragmentos de código, estructuras de indicaciones de IA para referencia y reutilización eficientes.',
      'Comparta rápidamente códigos QR de pago y códigos QR de transferencia bancaria. Acceda a una colección diversa de prototipos de muestras de productos, maquetas de diseño, infografías y capturas de pantalla instructivas. Organice y recupere activos visuales sin problemas para la comunicación profesional.',
      'Cree y comparta instantáneamente stickers, memes favoritos, mensajes de felicitación y expresiones emocionales para conectarse con sus seres queridos y clientes. Personalice su comunicación con elementos visuales que transmitan sentimientos y mejoren la participación.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard keyboard view' },
    ],
  }
,
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
