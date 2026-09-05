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
  coreClipboard: { line1: 'Von der Zwischenablage in der App,', line2: 'zu deiner iOS-Tastatur.' },
  actionClipboard: {
    sectionLabel: 'LiquidBoard-Funktionen',
    progressLabel: 'Fortschritt der Zwischenablage-Funktionen',
    groupTitle: { primary: 'Name', secondary: 'der Gruppe' },
    featureLabels: { group: 'Gruppe', pin: 'Anheften', share: 'Teilen', export: 'Datei exportieren', voice: 'Sprache', scanText: 'Text scannen', systemPasteboard: 'System-Zwischenablage', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "Laden Sie\u00A0", brand: "LiquidBoard\u00A0", suffix: "herunter" },
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
        features: ['20 Texte', '20 Bilder', '20 Aufkleber', '2 Gruppen Pro Typ', '2 Pins Pro Gruppe'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Lebenslanger Zugriff',
        price: '3,49 €',
        description: 'Basis-Tarif',
        features: ['100 Texte', '100 Bilder', '100 Aufkleber', '5 Gruppen Pro Typ', '5 Pins Pro Gruppe'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Lebenslanger Zugriff',
        price: '6,49 €',
        description: 'Multitasking-Tarif',
        features: ['250 Texte', '250 Bilder', '250 Aufkleber', '15 Gruppen Pro Typ', '15 Pins Pro Gruppe'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Lebenslanger Zugriff',
        price: '11,99 €',
        description: 'Profi-Tarif',
        features: ['500 Texte', '500 Bilder', '500 Aufkleber', '40 Gruppen Pro Typ', '40 Pins Pro Gruppe'],
      },
    ],
  },
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
