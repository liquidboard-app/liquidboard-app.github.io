import { AboutParagraph, AboutLineBreak } from './elements';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_pl: React.FC = () => (
  <>
    <AboutParagraph>LiquidBoard to aplikacja do zarządzania schowkiem dla tekstu, obrazów i naklejek na iPhone. Pomaga tworzyć często używane treści albo przechowywać treści skopiowane z innych aplikacji lub urządzeń. Pełny zestaw funkcji wspiera uproszczenie zarządzania danymi.</AboutParagraph>
    <AboutParagraph>LiquidBoard integruje się z klawiaturą iPhone, aby ułatwić wysyłanie zapisanych tekstów, obrazów i naklejek. Możesz używać aplikacji do przechowywania często powtarzanych tekstów, obrazów QR Code i tworzenia ulubionych naklejek.</AboutParagraph>
    <AboutParagraph>Wszystkie dane są przechowywane lokalnie i bezpiecznie na Twoim urządzeniu lub w Twoim iCloud podczas synchronizacji. LiquidBoard zobowiązuje się nie przechowywać, nie używać ani nie przesyłać Twoich danych nigdzie indziej.</AboutParagraph>
    <AboutParagraph>Funkcja Naklejki w aplikacji powstała z użyciem Vision Framework, wbudowanej w urządzenia iOS biblioteki Apple do widzenia komputerowego i uczenia maszynowego, która oddziela tło i przycina naklejki.</AboutParagraph>
    <AboutParagraph>Wszystkie zobowiązania dotyczące uprawnień i funkcji są wdrażane oraz kontrolowane przez Apple za pośrednictwem dokumentów Bezpieczeństwo danych i Prywatność w aplikacji.</AboutParagraph>
    <AboutParagraph>Publikujemy te dokumenty w aplikacji i na tej stronie. <AboutLineBreak /><Link to="/policy/data-security">Bezpieczeństwo danych</Link><AboutLineBreak /><Link to="/policy/privacy">Prywatność</Link></AboutParagraph>
    <AboutParagraph>W przyszłości postaramy się rozszerzyć funkcje AI w najnowszych wersjach iOS z Siri AI oraz w wersjach dla macOS i iPadOS. LiquidBoard zobowiązuje się rozwijać funkcje AI wyłącznie na poziomie systemowym, aby chronić uprawnienia i wrażliwe dane użytkowników.</AboutParagraph>
  </>
);

export default AboutContent_pl;
