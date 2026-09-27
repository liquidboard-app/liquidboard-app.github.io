import { AboutParagraph, AboutLineBreak } from './elements';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_de: React.FC = () => (
  <>
    <AboutParagraph>LiquidBoard ist eine App zur Clipboard-Verwaltung für Text, Bilder und Sticker auf dem iPhone. Die App hilft Ihnen, häufig verwendete Inhalte zu erstellen oder Inhalte zu speichern, die Sie aus anderen Apps oder von anderen Geräten kopieren. Ein vollständiger Funktionsumfang unterstützt Sie dabei, die Datenverwaltung zu vereinfachen.</AboutParagraph>
    <AboutParagraph>LiquidBoard integriert sich in Ihre iPhone-Tastatur, damit Sie gespeicherte Texte, Bilder und Sticker einfacher senden können. Sie können die App nutzen, um häufig wiederkehrende Texte, QR-Code-Bilder und Ihre Lieblingssticker zu speichern.</AboutParagraph>
    <AboutParagraph>Alle Daten werden lokal und sicher auf Ihrem Gerät oder bei der Synchronisierung in Ihrer iCloud gespeichert. LiquidBoard verpflichtet sich, keine Ihrer Daten an anderer Stelle zu speichern, zu verwenden oder hochzuladen.</AboutParagraph>
    <AboutParagraph>Die Sticker-Funktion der App basiert auf Vision Framework, Apples integrierter Bibliothek für Computer Vision und maschinelles Lernen auf iOS-Geräten, um Hintergründe freizustellen und Sticker zuzuschneiden.</AboutParagraph>
    <AboutParagraph>Alle Zusagen zu Berechtigungen und Funktionen werden von Apple über die Dokumente Datensicherheit und Privatsphäre in der App umgesetzt und kontrolliert.</AboutParagraph>
    <AboutParagraph>Wir veröffentlichen diese Dokumente in der App und auf dieser Website. <AboutLineBreak /><Link to="/policy/data-security">Datensicherheit</Link><AboutLineBreak /><Link to="/policy/privacy">Privatsphäre</Link></AboutParagraph>
    <AboutParagraph>In Zukunft werden wir versuchen, weitere KI-Funktionen auf den neuesten iOS-Versionen mit Siri AI sowie Versionen für macOS und iPadOS auszubauen. LiquidBoard verpflichtet sich, KI-Funktionen nur auf Systemebene zu entwickeln, um Berechtigungen und sensible Nutzerdaten zu schützen.</AboutParagraph>
  </>
);

export default AboutContent_de;
