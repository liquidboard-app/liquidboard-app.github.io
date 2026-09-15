import { LocaleDict } from './types';

const it: LocaleDict = {
  browserTitle: 'LiquidBoard — Copia e incolla in modo rapido e sicuro',
  browserDescription: 'LiquidBoard organizza testi, foto, sticker e link, così sono pronti da incollare dalla tastiera del tuo iPhone.',
  nav: {
    home: "Home",
    about: "Chi siamo",
    pricing: "Prezzi",
    policy: "Politica",
    help: "Aiuto",
  },
  hero: {
    line1: "Porta veri appunti",
    line2: { left: "nella tua", right: "Tastiera iOS" },
  },
  coreClipboard: { line1: 'Dagli appunti nell’app,', line2: 'alla tua tastiera iOS.' },
  actionClipboard: {
    sectionLabel: 'Funzionalità di LiquidBoard',
    progressLabel: 'Avanzamento delle funzionalità degli appunti',
    headingTitle: 'Personalizzazione completa',
    headingDescription: 'Crea ogni clipboard come vuoi',
    groupTitle: { primary: 'Nome', secondary: 'del gruppo' },
    groupDescription: 'Classifica secondo necessità',
    pinDescription: 'Le cose importanti prima',
    shareDescription: 'Invia a tutte le piattaforme',
    exportTitle: 'Importa / Esporta',
    exportDescription: 'Salva e importa con JSON o CSV',
    voiceTitle: 'Voce',
    voiceDescription: 'Dall’audio al testo',
    scanTitle: 'Scansiona',
    scanDescription: 'Importa tutto il testo trovato',
    clipboardTitle: 'Appunti di sistema',
    clipboardDescription: 'Copia da qualsiasi luogo',
    icloudTitle: 'iCloud',
    icloudDescription: 'Mantieni gli appunti nel cloud',
    featureLabels: { group: 'Gruppo', pin: 'Fissa', share: 'Condividi', export: 'Esporta file', voice: 'Voce', scanText: 'Scansiona testo', systemPasteboard: 'Appunti di sistema', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "Scarica\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  pricing: {
    intro: { 
      line1: "Scegli il piano giusto per come salvi, organizzi e condividi i contenuti ogni giorno.", 
      line2: "Ogni piano è un acquisto una tantum per l'accesso a vita." 
    },
    fromPrice: 'Da {price}',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Accesso a vita',
        price: '0 €',
        description: 'Piano di prova',
        features: ['20 Testi', '20 Immagini', '20 Adesivi', '2 Gruppi Per Tipo', '2 Fissati Per Gruppo'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Accesso a vita',
        price: '3,49 €',
        description: 'Piano base',
        features: ['100 Testi', '100 Immagini', '100 Adesivi', '5 Gruppi Per Tipo', '5 Fissati Per Gruppo'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Accesso a vita',
        price: '6,49 €',
        description: 'Piano multitasking',
        features: ['250 Testi', '250 Immagini', '250 Adesivi', '15 Gruppi Per Tipo', '15 Fissati Per Gruppo'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Accesso a vita',
        price: '11,99 €',
        description: 'Piano professionale',
        features: ['500 Testi', '500 Immagini', '500 Adesivi', '40 Gruppi Per Tipo', '40 Fissati Per Gruppo'],
      },
    ],
  },
  policy: {
    dataSecurity: "Sicurezza dei dati",
    privacy: "Privacy",
    terms: "Termini di utilizzo",
    payment: "Pagamento e Rimborso",
  },
  help: {
    faqTab: 'Domande frequenti',
    docsTab: 'Documenti',
    docsPlaceholder: "La documentazione è in fase di aggiornamento...",
    contactTab: 'Contatti', email: 'Email', problem: 'Problema', problemPlaceholder: 'Raccontaci cosa è successo…', media: 'Allegati', addMedia: 'Aggiungi file', mediaLimit: 'Fino a 20 MB per file', removeMedia: 'Rimuovi', send: 'Invia', sending: 'Invio in corso…', mediaTooLarge: 'Ogni allegato non può superare 20 MB.', mediaMax: 'Puoi allegare fino a 5 immagini o video.', sent: 'Grazie — la tua segnalazione è stata inviata.', sendFailed: 'Impossibile inviare la segnalazione.',
  }
};

export default it;
