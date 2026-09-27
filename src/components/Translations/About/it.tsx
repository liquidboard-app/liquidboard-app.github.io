import { AboutParagraph, AboutLineBreak } from './elements';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_it: React.FC = () => (
  <>
    <AboutParagraph>LiquidBoard è un'app di gestione degli appunti per testo, immagini e adesivi su iPhone. L'app ti aiuta a creare contenuti usati spesso o a conservare contenuti copiati da altre app o dispositivi. Offre un set completo di funzioni per semplificare la gestione dei dati.</AboutParagraph>
    <AboutParagraph>LiquidBoard si integra con la tastiera del tuo iPhone per rendere più semplice inviare testi, immagini e adesivi salvati. Puoi usare l'app per archiviare testi ricorrenti, immagini di QR Code e creare i tuoi adesivi preferiti.</AboutParagraph>
    <AboutParagraph>Tutti i dati vengono archiviati localmente e in modo sicuro sul tuo dispositivo o nel tuo iCloud durante la sincronizzazione. LiquidBoard si impegna a non archiviare, usare o caricare i tuoi dati altrove.</AboutParagraph>
    <AboutParagraph>La funzione Adesivi dell'app è creata con Vision Framework, la libreria di computer vision e machine learning di Apple integrata nei dispositivi iOS, per separare gli sfondi e ritagliare gli adesivi.</AboutParagraph>
    <AboutParagraph>Tutti gli impegni relativi ad autorizzazioni e funzioni sono implementati e controllati da Apple tramite i documenti Sicurezza dei dati e Privacy nell'app.</AboutParagraph>
    <AboutParagraph>Pubbliciamo questi documenti nell'app e su questo sito web. <AboutLineBreak /><Link to="/policy/data-security">Sicurezza dei dati</Link><AboutLineBreak /><Link to="/policy/privacy">Privacy</Link></AboutParagraph>
    <AboutParagraph>In futuro proveremo ad ampliare le funzioni AI sulle versioni più recenti di iOS con Siri AI e sulle versioni per macOS e iPadOS. LiquidBoard si impegna a sviluppare funzioni AI solo a livello di sistema per proteggere autorizzazioni e dati sensibili degli utenti.</AboutParagraph>
  </>
);

export default AboutContent_it;
