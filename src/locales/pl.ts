import { LocaleDict } from './types';

const pl: LocaleDict = {
  browserTitle: 'LiquidBoard — Kopiuj i wklejaj szybko i bezpiecznie',
  browserDescription: 'LiquidBoard porządkuje teksty, zdjęcia, naklejki i linki, aby można je było wkleić bezpośrednio z klawiatury iPhone’a.',
  nav: {
    home: "Strona główna",
    about: "O nas",
    pricing: "Cennik",
    policy: "Polityka",
    help: "Pomoc",
  },
  hero: {
    line1: "Prawdziwy schowek",
    line2: { left: "w Twojej", right: "Klawiaturze iOS" },
  },
  coreClipboard: { line1: 'Ze schowka w aplikacji,', line2: 'na klawiaturę iOS.' },
  actionClipboard: {
    sectionLabel: 'Funkcje LiquidBoard',
    progressLabel: 'Postęp funkcji schowka',
    groupTitle: { primary: 'Nazwa', secondary: 'grupy' },
    featureLabels: { group: 'Grupa', pin: 'Przypnij', share: 'Udostępnij', export: 'Eksportuj plik', voice: 'Głos', scanText: 'Skanuj tekst', systemPasteboard: 'Schowek systemowy', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "Pobierz\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  pricing: {
    intro: { 
      line1: "Wybierz odpowiedni plan dla sposobu w jaki zapisujesz, organizujesz i udostępniasz treści każdego dnia.", 
      line2: "Każdy plan to jednorazowy zakup zapewniający dożywotni dostęp." 
    },
    fromPrice: 'Od {price}',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Dożywotni dostęp',
        price: '0 zł',
        description: 'Plan próbny',
        features: ['20 Tekstów', '20 Obrazów', '20 Naklejek', '2 Grupy Na Typ', '2 Przypięcia Na Grupę'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Dożywotni dostęp',
        price: '13,99 zł',
        description: 'Plan podstawowy',
        features: ['100 Tekstów', '100 Obrazów', '100 Naklejek', '5 Grup Na Typ', '5 Przypięć Na Grupę'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Dożywotni dostęp',
        price: '27,99 zł',
        description: 'Plan wielozadaniowy',
        features: ['250 Tekstów', '250 Obrazów', '250 Naklejek', '15 Grup Na Typ', '15 Przypięć Na Grupę'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Dożywotni dostęp',
        price: '51,99 zł',
        description: 'Plan profesjonalny',
        features: ['500 Tekstów', '500 Obrazów', '500 Naklejek', '40 Grup Na Typ', '40 Przypięć Na Grupę'],
      },
    ],
  },
  
  help: {
    faqTab: 'Najczęściej zadawane pytania',
    docsTab: 'Dokumenty',
    docsPlaceholder: "Dokumentacja jest aktualizowana...",
    contactTab: 'Kontakt', email: 'E-mail', problem: 'Problem', problemPlaceholder: 'Opisz, co się stało…', media: 'Załączniki', addMedia: 'Dodaj plik', mediaLimit: 'Do 20 MB na plik', removeMedia: 'Usuń', send: 'Wyślij', sending: 'Wysyłanie…', mediaTooLarge: 'Każdy załącznik może mieć maksymalnie 20 MB.', mediaMax: 'Możesz załączyć do 5 obrazów lub filmów.', sent: 'Dziękujemy — zgłoszenie zostało wysłane.', sendFailed: 'Nie udało się wysłać zgłoszenia.',
  }
,
  policy: {
    dataSecurity: "Bezpieczeństwo danych",
    privacy: "Prywatność",
    terms: "Warunki użytkowania",
    payment: "Płatność i zwrot",
  },
};
export default pl;
