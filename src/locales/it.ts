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
  header: {
    download: { prefix: "Scarica\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  action: {
    download: "Scarica LiquidBoard",
    titles: ['Crea gruppo', 'Fissa', 'Copia e duplica', 'Importa ed esporta file'],
    paragraphs: [
      'Crea gruppi aggiuntivi e categorizza testi, immagini e adesivi in base alle tue esigenze. Passa senza problemi da un gruppo all\'altro e fissa prima in alto i gruppi essenziali.',
      'Fissa in alto i testi, le immagini e gli adesivi importanti che usi di frequente in modo da poterli inviare più velocemente.',
      'Copia e duplica testi, immagini e adesivi in modo facile e veloce.',
      'Esporta e importa dati di testo come JSON e CSV direttamente tramite l\'app File.',
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
        features: ['25 Testi', '25 Immagini', '25 Adesivi', '2 Gruppi Per Tipo', '2 Fissati Per Gruppo'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Accesso a vita',
        price: '2,99 €',
        description: 'Piano base',
        features: ['100 Testi', '100 Immagini', '100 Adesivi', '5 Gruppi Per Tipo', '5 Fissati Per Gruppo'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Accesso a vita',
        price: '5,99 €',
        description: 'Piano multitasking',
        features: ['250 Testi', '250 Immagini', '250 Adesivi', '15 Gruppi Per Tipo', '15 Fissati Per Gruppo'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Accesso a vita',
        price: '10,99 €',
        description: 'Piano professionale',
        features: ['500 Testi', '500 Immagini', '500 Adesivi', '40 Gruppi Per Tipo', '40 Fissati Per Gruppo'],
      },
    ],
  },
  features: {
    titles: ['Testo', 'Immagini', 'Adesivi'],
    paragraphs: [
      'Crea e componi più documenti di testo, informazioni introduttive e contenuti su misura per le tue esigenze di scrittura. Imposta modelli di risposta predefiniti per un uso immediato. Inserisci e condividi rapidamente le informazioni di contatto. Archivia collegamenti a siti Web, frammenti di codice, strutture di prompt AI per una consultazione e un riutilizzo efficienti.',
      'Condividi rapidamente codici QR di pagamento e codici QR per bonifici bancari. Accedi a una vasta raccolta di prototipi di campioni di prodotti, modelli di progettazione, infografiche e screenshot di istruzioni. Organizza e recupera le risorse visive senza problemi per la comunicazione professionale.',
      'Crea e condividi all\'istante adesivi, meme preferiti, messaggi di congratulazioni ed espressioni emotive per connetterti con i tuoi cari e i clienti. Personalizza la tua comunicazione con elementi visivi che trasmettono sentimenti e migliorano il coinvolgimento.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard keyboard view' },
    ],
  }
,
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
