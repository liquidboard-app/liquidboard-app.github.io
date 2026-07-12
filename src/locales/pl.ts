import { LocaleDict } from './types';

const pl: LocaleDict = {
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
  header: {
    download: { prefix: "Pobierz\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  action: {
    download: "Pobierz LiquidBoard",
    titles: ['Utwórz grupę', 'Przypnij', 'Kopiuj i powielaj', 'Importuj i eksportuj pliki'],
    paragraphs: [
      'Twórz dodatkowe grupy i kategoryzuj teksty, obrazy i naklejki na podstawie swoich potrzeb. Płynnie przełączaj się między grupami i przypinaj ważne grupy na samej górze.',
      'Przypinaj ważne teksty, obrazy i naklejki, których często używasz, na samej górze, aby móc je szybciej wysyłać.',
      'Kopiuj i powielaj teksty, obrazy i naklejki łatwo i szybko.',
      'Eksportuj i importuj dane tekstowe jako JSON i CSV bezpośrednio przez aplikację Pliki.',
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
      line1: "Wybierz odpowiedni plan dla sposobu w jaki zapisujesz, organizujesz i udostępniasz treści każdego dnia.", 
      line2: "Każdy plan to jednorazowy zakup zapewniający dożywotni dostęp." 
    },
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Dożywotni dostęp',
        price: '0 zł',
        description: 'Plan próbny',
        features: ['25 Tekstów', '25 Obrazów', '25 Naklejek', '2 Grupy Na Typ', '2 Przypięcia Na Grupę'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Dożywotni dostęp',
        price: '14,99 zł',
        description: 'Plan podstawowy',
        features: ['100 Tekstów', '100 Obrazów', '100 Naklejek', '5 Grup Na Typ', '5 Przypięć Na Grupę'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Dożywotni dostęp',
        price: '29,99 zł',
        description: 'Plan wielozadaniowy',
        features: ['250 Tekstów', '250 Obrazów', '250 Naklejek', '15 Grup Na Typ', '15 Przypięć Na Grupę'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Dożywotni dostęp',
        price: '49,99 zł',
        description: 'Plan profesjonalny',
        features: ['500 Tekstów', '500 Obrazów', '500 Naklejek', '40 Grup Na Typ', '40 Przypięć Na Grupę'],
      },
    ],
  },
  features: {
    titles: ['Tekst', 'Obrazy', 'Naklejki'],
    paragraphs: [
      'Twórz i komponuj wiele dokumentów tekstowych, informacji wprowadzających i treści dostosowanych do Twoich potrzeb w zakresie pisania. Skonfiguruj gotowe szablony odpowiedzi do natychmiastowego wykorzystania. Wprowadzaj i szybko udostępniaj informacje kontaktowe. Przechowuj łącza do witryn internetowych, fragmenty kodu, struktury zapytań AI do wydajnego wyszukiwania i ponownego wykorzystania.',
      'Szybko udostępniaj kody QR płatności i kody QR przelewów bankowych. Uzyskaj dostęp do różnorodnej kolekcji prototypów próbek produktów, makiet projektów, infografik i instruktażowych zrzutów ekranu. Bezproblemowo organizuj i pobieraj zasoby wizualne do profesjonalnej komunikacji.',
      'Twórz i natychmiast udostępniaj naklejki, ulubione memy, wiadomości z gratulacjami i wyrażenia emocjonalne, aby łączyć się z bliskimi i klientami. Spersonalizuj swoją komunikację za pomocą elementów wizualnych, które przekazują uczucia i zwiększają zaangażowanie.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard keyboard view' },
    ],
  }
,
  
  help: {
    faqTab: 'Najczęściej zadawane pytania',
    docsTab: 'Dokumenty',
    docsPlaceholder: "Dokumentacja jest aktualizowana...",
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
