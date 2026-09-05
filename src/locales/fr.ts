import { LocaleDict } from './types';

const fr: LocaleDict = {
  browserTitle: 'LiquidBoard — Copiez-collez rapidement et en toute sécurité',
  browserDescription: 'LiquidBoard organise vos textes, photos, stickers et liens afin qu’ils soient prêts à être collés depuis le clavier de votre iPhone.',
  nav: {
    home: "Accueil",
    about: "À propos",
    pricing: "Tarifs",
    policy: "Politique",
    help: "Aide",
  },
  hero: {
    line1: "Apportez un vrai presse-papiers",
    line2: { left: "dans votre", right: "Clavier iOS" },
  },
  coreClipboard: { line1: 'Du presse-papiers dans l’app,', line2: 'à votre clavier iOS.' },
  actionClipboard: {
    sectionLabel: 'Fonctionnalités de LiquidBoard',
    progressLabel: 'Progression des fonctionnalités du presse-papiers',
    groupTitle: { primary: 'Groupe', secondary: 'Nom' },
    featureLabels: { group: 'Groupe', pin: 'Épingler', share: 'Partager', export: 'Exporter', voice: 'Voix', scanText: 'Scanner le texte', systemPasteboard: 'Presse-papiers système', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "Télécharger\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  pricing: {
    intro: { 
      line1: "Choisissez le forfait adapté à la façon dont vous enregistrez, organisez et partagez du contenu chaque jour.", 
      line2: "Chaque forfait est un achat unique pour un accès à vie." 
    },
    fromPrice: 'À partir de {price}',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Accès à vie',
        price: '0 €',
        description: 'Formule d\'essai',
        features: ['20 Textes', '20 Images', '20 Autocollants', '2 Groupes Par Type', '2 Épingles Par Groupe'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Accès à vie',
        price: '3,49 €',
        description: 'Formule essentielle',
        features: ['100 Textos', '100 Images', '100 Autocollants', '5 Groupes Par Type', '5 Épingles Par Groupe'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Accès à vie',
        price: '6,49 €',
        description: 'Formule multitâche',
        features: ['250 Textes', '250 Images', '250 Autocollants', '15 Groupes Par Type', '15 Épingles Par Groupe'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Accès à vie',
        price: '11,99 €',
        description: 'Formule professionnelle',
        features: ['500 Textes', '500 Images', '500 Autocollants', '40 Groupes Par Type', '40 Épingles Par Groupe'],
      },
    ],
  },
  policy: {
    dataSecurity: "Sécurité des données",
    privacy: "Confidentialité",
    terms: "Conditions d'utilisation",
    payment: "Paiement et remboursement",
  },
  help: {
    faqTab: 'FAQ',
    docsTab: 'Docs',
    docsPlaceholder: "La documentation est en cours de mise à jour...",
    contactTab: 'Contact', email: 'E-mail', problem: 'Problème', problemPlaceholder: 'Dites-nous ce qui s’est passé…', media: 'Pièces jointes', addMedia: 'Ajouter un fichier', mediaLimit: 'Jusqu’à 20 Mo par fichier', removeMedia: 'Supprimer', send: 'Envoyer', sending: 'Envoi…', mediaTooLarge: 'Chaque pièce jointe doit faire 20 Mo ou moins.', mediaMax: 'Vous pouvez joindre jusqu’à 5 images ou vidéos.', sent: 'Merci — votre signalement a été envoyé.', sendFailed: 'Impossible d’envoyer le signalement.',
  }
};
export default fr;
