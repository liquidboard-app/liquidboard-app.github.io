import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_de: React.FC = () => (
  <>
    <p>LiquidBoard ist eine Zwischenablage-Verwaltungs-App für Text und Bilder.Mit der App können Sie häufig verwendete Inhalte erstellen oder aus anderen Apps kopierte Inhalte speichern.Funktionen wie Suchen, Sortieren, Gruppieren, Anheften wichtiger Inhalte und Exportieren von Dateien im JSON- oder CSV-Format werden alle unterstützt, um die Datenverwaltung zu vereinfachen.</p>
    <p>LiquidBoard lässt sich in Ihre Tastatur integrieren, um das Senden vorab gespeicherter oder zuvor kopierter Texte und Bilder zu erleichtern.Mit der App können Sie täglich wiederkehrende Phrasen für Kunden, Berichtsinhalte, Verkaufslinks, Kontonummern, Adressen, QR-Codes usw. speichern. Darüber hinaus verfügt LiquidBoard über einen Aufkleberbereich, in dem Sie Aufkleber aus hinzugefügten Bildern erstellen können.</p>
    <p>Alle Daten werden lokal und sicher auf Ihrem Gerät und iCloud (nach der Verknüpfung von iCloud) gespeichert.LiquidBoard verpflichtet sich, Ihre Daten nirgendwo anders zu speichern oder hochzuladen.Alle Verpflichtungen werden von Apple durchgesetzt und kontrolliert <Link to="/policy/data-security">Datensicherheit</Link> Und <Link to="/policy/privacy">Privatsphäre</Link> Richtlinien innerhalb der App.Wir veröffentlichen diese Dokumente öffentlich in der App und auf unserer Website und Sie können sie leicht finden unter <Link to="/policy/data-security">Datensicherheit</Link> Und <Link to="/policy/privacy">Privatsphäre</Link>.</p>
  </>
);
export default AboutContent_de;
