import { LocaleDict } from './types';

const fr: LocaleDict = {
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
  header: {
    download: { prefix: "Télécharger\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  action: {
    download: "Télécharger LiquidBoard",
    titles: ['Créer un groupe', 'Épingler', 'Copier et dupliquer', 'Importer et exporter des fichiers'],
    paragraphs: [
      'Créez des groupes supplémentaires et catégorisez les textes, images et autocollants selon vos besoins. Passez d\'un groupe à l\'autre de manière fluide et épinglez d\'abord les groupes essentiels en haut.',
      'Épinglez les textes, images et autocollants importants que vous utilisez fréquemment en haut afin de pouvoir les envoyer plus rapidement.',
      'Copiez et dupliquez des textes, des images et des autocollants facilement et rapidement.',
      'Exportez et importez des données textuelles au format JSON et CSV directement via l\'application Fichiers.',
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
      line1: "Choisissez le forfait adapté à la façon dont vous enregistrez, organisez et partagez du contenu chaque jour.", 
      line2: "Chaque forfait est un achat unique pour un accès à vie." 
    },
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Accès à vie',
        price: '0 €',
        description: 'Formule d\'essai',
        features: ['25 Textes', '25 Images', '25 Autocollants', '2 Groupes Par Type', '2 Épingles Par Groupe'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Accès à vie',
        price: '2,99 €',
        description: 'Formule essentielle',
        features: ['100 Textos', '100 Images', '100 Autocollants', '5 Groupes Par Type', '5 Épingles Par Groupe'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Accès à vie',
        price: '5,99 €',
        description: 'Formule multitâche',
        features: ['250 Textes', '250 Images', '250 Autocollants', '15 Groupes Par Type', '15 Épingles Par Groupe'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Accès à vie',
        price: '10,99 €',
        description: 'Formule professionnelle',
        features: ['500 Textes', '500 Images', '500 Autocollants', '40 Groupes Par Type', '40 Épingles Par Groupe'],
      },
    ],
  },
  features: {
    titles: ['Texte', 'Images', 'Autocollants'],
    paragraphs: [
      'Créez et composez plusieurs documents textuels, informations d\'introduction et contenus adaptés à vos besoins de rédaction. Configurez des modèles de réponse prédéfinis pour une utilisation immédiate. Saisissez et partagez rapidement vos coordonnées. Stockez des liens vers des sites Web, des extraits de code, des structures d\'invite d\'IA pour une référence et une réutilisation efficaces.',
      'Partagez rapidement les codes QR de paiement et les codes QR de virement bancaire. Accédez à une collection diversifiée de prototypes d\'échantillons de produits, de maquettes de conception, d\'infographies et de captures d\'écran pédagogiques. Organisez et récupérez des ressources visuelles de manière transparente pour une communication professionnelle.',
      'Créez et partagez instantanément des autocollants, des mèmes favoris, des messages de félicitations et des expressions émotionnelles pour vous connecter avec vos proches et vos clients. Personnalisez votre communication avec des éléments visuels qui transmettent des sentiments et améliorent l\'engagement.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard keyboard view' },
    ],
  }
,
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
