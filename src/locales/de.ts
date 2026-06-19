import { LocaleDict } from './types';

const de: LocaleDict = {
  nav: {
    home: "Startseite",
    about: "Über",
    pricing: "Preise",
    policy: "Richtlinie",
    help: "Hilfe",
  },
  hero: {
    line1: "Bringen Sie eine echte Zwischenablage",
    line2: { left: "in Ihre", right: "Tastatur" },
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
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard groups' },
      { src: '/assets/lb-photos.PNG', alt: 'LiquidBoard pinned items' },
      { src: '/assets/lb-keyboard.PNG', alt: 'LiquidBoard copy and duplicate' },
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard import and export files' },
    ],
  },
  pricing: {
    intro: { 
      line1: "Wählen Sie den richtigen Plan für die Art und Weise, wie Sie Inhalte jeden Tag speichern, organisieren und teilen.", 
      line2: "Jeder Plan ist ein einmaliger Kauf für lebenslangen Zugriff." 
    },
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Lebenslanger Zugriff',
        price: '€0',
        description: 'Für Testbenutzer',
        features: ['25 Texte', '25 Bilder', '25 Aufkleber', '2 Gruppen Pro Typ', '2 Pins Pro Gruppe'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Lebenslanger Zugriff',
        price: '€2.99',
        description: 'Für Gelegenheitsnutzer',
        features: ['100 Texte', '100 Bilder', '100 Aufkleber', '5 Gruppen Pro Typ', '5 Pins Pro Gruppe'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Lebenslanger Zugriff',
        price: '€5.99',
        description: 'Für Multitasking-Benutzer',
        features: ['250 Texte', '250 Bilder', '250 Aufkleber', '15 Gruppen Pro Typ', '15 Pins Pro Gruppe'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Lebenslanger Zugriff',
        price: '€10.99',
        description: 'Für professionelle Benutzer',
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
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.PNG', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.PNG', alt: 'LiquidBoard keyboard view' },
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
  }
};
export default de;
