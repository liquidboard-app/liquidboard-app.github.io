import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_pl: React.FC = () => (
  <>
    <p>LiquidBoard to aplikacja do zarządzania schowkiem dla tekstu, obrazów i naklejek na iPhone. Pomaga tworzyć często używane treści albo przechowywać treści skopiowane z innych aplikacji lub urządzeń. Pełny zestaw funkcji wspiera uproszczenie zarządzania danymi.</p>
    <p>LiquidBoard integruje się z klawiaturą iPhone, aby ułatwić wysyłanie zapisanych tekstów, obrazów i naklejek. Możesz używać aplikacji do przechowywania często powtarzanych tekstów, obrazów QR Code i tworzenia ulubionych naklejek.</p>
    <p>Wszystkie dane są przechowywane lokalnie i bezpiecznie na Twoim urządzeniu lub w Twoim iCloud podczas synchronizacji. LiquidBoard zobowiązuje się nie przechowywać, nie używać ani nie przesyłać Twoich danych nigdzie indziej.</p>
    <p>Funkcja Naklejki w aplikacji powstała z użyciem Vision Framework, wbudowanej w urządzenia iOS biblioteki Apple do widzenia komputerowego i uczenia maszynowego, która oddziela tło i przycina naklejki.</p>
    <p>Wszystkie zobowiązania dotyczące uprawnień i funkcji są wdrażane oraz kontrolowane przez Apple za pośrednictwem dokumentów Bezpieczeństwo danych i Prywatność w aplikacji.</p>
    <p>Publikujemy te dokumenty w aplikacji i na tej stronie. <br /><Link to="/policy/data-security">Bezpieczeństwo danych</Link><br /><Link to="/policy/privacy">Prywatność</Link></p>
    <p>W przyszłości postaramy się rozszerzyć funkcje AI w najnowszych wersjach iOS z Siri AI oraz w wersjach dla macOS i iPadOS. LiquidBoard zobowiązuje się rozwijać funkcje AI wyłącznie na poziomie systemowym, aby chronić uprawnienia i wrażliwe dane użytkowników.</p>
  </>
);

export default AboutContent_pl;
