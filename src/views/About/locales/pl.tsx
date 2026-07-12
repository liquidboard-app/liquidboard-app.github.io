import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_pl: React.FC = () => (
  <>
    <p>LiquidBoard to aplikacja do zarządzania schowkiem dla tekstu i obrazów. Aplikacja pomaga tworzyć często używane treści lub przechowywać treści skopiowane z innych aplikacji. Obsługiwane są funkcje takie jak wyszukiwanie, sortowanie, grupowanie, przypinanie ważnych treści oraz eksportowanie plików w formacie JSON lub CSV, aby ułatwić zarządzanie danymi.</p>
    <p>LiquidBoard integruje się z Twoją klawiaturą, aby ułatwić wysyłanie wcześniej zapisanych lub skopiowanych tekstów i obrazów. Możesz wykorzystać aplikację do przechowywania powtarzających się codziennie zwrotów dla klientów, treści raportów, linków do sprzedaży, numerów kont, adresów, kodów QR itp. Dodatkowo LiquidBoard posiada sekcję Naklejki, pozwalającą tworzyć naklejki z dodanych obrazów.</p>
    <p>Wszystkie dane są przechowywane lokalnie i bezpiecznie na Twoim urządzeniu oraz w iCloud (po powiązaniu z iCloud). LiquidBoard zobowiązuje się nie przechowywać ani nie przesyłać żadnych Twoich danych w inne miejsce. Wszystkie zobowiązania są egzekwowane i kontrolowane przez Apple poprzez <Link to="/policy/data-security">Bezpieczeństwo danych</Link> i <Link to="/policy/privacy">Prywatność</Link> zasady w aplikacji. Publikujemy te dokumenty publicznie w aplikacji i na naszej stronie internetowej, i możesz je łatwo znaleźć na <Link to="/policy/data-security">Bezpieczeństwo danych</Link> i <Link to="/policy/privacy">Prywatność</Link>.</p>
  </>
);
export default AboutContent_pl;
