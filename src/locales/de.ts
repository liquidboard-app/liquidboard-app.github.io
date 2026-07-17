import { LocaleDict } from './types';

const de: LocaleDict = {
  browserTitle: 'LiquidBoard — Schnell und sicher kopieren und einfügen',
  browserDescription: 'LiquidBoard organisiert Texte, Fotos, Sticker und Links, damit sie direkt über deine iPhone-Tastatur eingefügt werden können.',
  nav: {
    home: "Startseite",
    about: "Über",
    pricing: "Preise",
    policy: "Richtlinie",
    help: "Hilfe",
  },
  hero: {
    line1: "Bringen Sie eine echte Zwischenablage",
    line2: { left: "in Ihre", right: "iOS-Tastatur" },
  },
  header: {
    download: { prefix: "Laden Sie\u00A0", brand: "LiquidBoard\u00A0", suffix: "herunter" },
  },
  action: {
    download: "Laden Sie LiquidBoard herunter",
    titles: ['Gruppe erstellen', 'Anpinnen', 'Kopieren & Duplizieren', 'Dateien importieren & exportieren'],
    paragraphs: [
      'Erstellen Sie zusätzliche Gruppen und kategorisieren Sie Texte, Bilder und Aufkleber nach Ihren Bedürfnissen. Wechseln Sie reibungslos zwischen Gruppen und pinnen Sie wichtige Gruppen zuerst oben an.',
      'Pinnen Sie wichtige Texte, Bilder und Aufkleber, die Sie häufig verwenden, ganz oben an, damit Sie sie schneller senden können.',
      'Kopieren und duplizieren Sie Texte, Bilder und Aufkleber einfach und schnell.',
      'Exportieren und importieren Sie Textdaten als JSON und CSV direkt über die Dateien-App.',
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
      line1: "Wählen Sie den richtigen Plan für die Art und Weise, wie Sie Inhalte jeden Tag speichern, organisieren und teilen.", 
      line2: "Jeder Plan ist ein einmaliger Kauf für lebenslangen Zugriff." 
    },
    fromPrice: 'Ab {price}',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Lebenslanger Zugriff',
        price: '0 €',
        description: 'Test-Tarif',
        features: ['25 Texte', '25 Bilder', '25 Aufkleber', '2 Gruppen Pro Typ', '2 Pins Pro Gruppe'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Lebenslanger Zugriff',
        price: '2,99 €',
        description: 'Basis-Tarif',
        features: ['100 Texte', '100 Bilder', '100 Aufkleber', '5 Gruppen Pro Typ', '5 Pins Pro Gruppe'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Lebenslanger Zugriff',
        price: '5,99 €',
        description: 'Multitasking-Tarif',
        features: ['250 Texte', '250 Bilder', '250 Aufkleber', '15 Gruppen Pro Typ', '15 Pins Pro Gruppe'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Lebenslanger Zugriff',
        price: '10,99 €',
        description: 'Profi-Tarif',
        features: ['500 Texte', '500 Bilder', '500 Aufkleber', '40 Gruppen Pro Typ', '40 Pins Pro Gruppe'],
      },
    ],
  },
  features: {
    titles: ['Text', 'Bilder', 'Aufkleber'],
    paragraphs: [
      'Erstellen und verfassen Sie mehrere Textdokumente, Einführungsinformationen und auf Ihre Schreibbedürfnisse zugeschnittene Inhalte. Richten Sie vorgefertigte Antwortvorlagen zur sofortigen Verwendung ein. Geben Sie Kontaktinformationen ein und teilen Sie sie schnell. Speichern Sie Website-Links, Code-Snippets und KI-Prompt-Strukturen zur effizienten Referenz und Wiederverwendung.',
      'Teilen Sie schnell Zahlungs-QR-Codes und Banküberweisungs-QR-Codes. Greifen Sie auf eine vielfältige Sammlung von Produktbeispiel-Prototypen, Design-Mockups, Infografiken und anleitenden Screenshots zu. Organisieren und rufen Sie visuelle Assets nahtlos für die professionelle Kommunikation ab.',
      'Erstellen Sie sofort Aufkleber, Lieblings-Memes, Glückwunschbotschaften und emotionale Ausdrücke und teilen Sie diese, um mit Ihren Lieben und Kunden in Kontakt zu treten. Personalisieren Sie Ihre Kommunikation mit visuellen Elementen, die Gefühle vermitteln und das Engagement steigern.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard keyboard view' },
    ],
  }
,
  policy: {
    dataSecurity: "Datensicherheit",
    privacy: "Privatsphäre",
    terms: "Nutzungsbedingungen",
    payment: "Zahlung & Rückerstattung",
  },
  help: {
    faqTab: 'Häufig gestellte Fragen',
    docsTab: 'Dokumente',
    docsPlaceholder: "Die Dokumentation wird aktualisiert...",
    contactTab: 'Kontakt', email: 'E-Mail', problem: 'Problem', problemPlaceholder: 'Erzählen Sie uns, was passiert ist…', media: 'Anhänge', addMedia: 'Datei hinzufügen', mediaLimit: 'Bis zu 20 MB pro Datei', removeMedia: 'Entfernen', send: 'Senden', sending: 'Wird gesendet…', mediaTooLarge: 'Jeder Anhang darf höchstens 20 MB groß sein.', mediaMax: 'Sie können bis zu 5 Bilder oder Videos anhängen.', sent: 'Danke — Ihr Bericht wurde gesendet.', sendFailed: 'Der Bericht konnte nicht gesendet werden.',
  }
};
export default de;
