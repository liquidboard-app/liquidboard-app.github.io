import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_it: React.FC = () => (
  <>
    <p>LiquidBoard è un'app per la gestione degli appunti per testo e immagini. L'app ti aiuta a creare contenuti utilizzati frequentemente o a memorizzare contenuti copiati da altre app. Sono supportate funzionalità come ricerca, ordinamento, raggruppamento, fissaggio dei contenuti essenziali ed esportazione dei file in formato JSON o CSV per semplificare la gestione dei dati.</p>
    <p>LiquidBoard si integra nella tua tastiera per rendere più facile l'invio di testi e immagini pre-memorizzati o precedentemente copiati. Puoi utilizzare l'app per memorizzare frasi ricorrenti quotidiane per i clienti, contenuti dei report, link di vendita, numeri di conto, indirizzi, codici QR, ecc. Inoltre, LiquidBoard ha una sezione Sticker, che ti permette di creare sticker dalle immagini aggiunte.</p>
    <p>Tutti i dati sono memorizzati localmente e in modo sicuro sul tuo dispositivo e su iCloud (dopo aver collegato iCloud). LiquidBoard si impegna a non memorizzare o caricare alcuno dei tuoi dati altrove. Tutti gli impegni sono applicati e controllati da Apple attraverso il <Link to="/policy/data-security">Sicurezza dei dati</Link> e <Link to="/policy/privacy">Privacy</Link> politiche all'interno dell'app. Pubblichiamo questi documenti pubblicamente nell'app e sul nostro sito web, e puoi trovarli facilmente su <Link to="/policy/data-security">Sicurezza dei dati</Link> e <Link to="/policy/privacy">Privacy</Link>.</p>
  </>
);
export default AboutContent_it;
