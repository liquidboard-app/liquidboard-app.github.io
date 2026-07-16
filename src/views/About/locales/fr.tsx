import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_fr: React.FC = () => (
  <>
    <p>LiquidBoard est une application de gestion du presse-papiers pour le texte, les images et les stickers sur iPhone. Elle vous aide à créer du contenu utilisé fréquemment ou à conserver le contenu copié depuis d'autres applications ou appareils. Un ensemble complet de fonctionnalités est fourni pour simplifier la gestion des données.</p>
    <p>LiquidBoard s'intègre au clavier de votre iPhone afin de faciliter l'envoi de textes, d'images et de stickers déjà enregistrés. Vous pouvez l'utiliser pour stocker des textes récurrents, des images de QR Code et créer vos stickers préférés.</p>
    <p>Toutes les données sont stockées localement et en toute sécurité sur votre appareil ou dans votre iCloud lors de la synchronisation. LiquidBoard s'engage à ne pas stocker, utiliser ni téléverser vos données ailleurs.</p>
    <p>La fonctionnalité Stickers de l'application est créée avec Vision Framework, la bibliothèque de vision par ordinateur et d'apprentissage automatique d'Apple intégrée aux appareils iOS, afin de détacher les arrière-plans et découper les stickers.</p>
    <p>Tous les engagements relatifs aux autorisations et aux fonctionnalités sont appliqués et contrôlés par Apple via les documents Sécurité des données et Confidentialité de l'application.</p>
    <p>Nous publions ces documents dans l'application et sur ce site web. <br /><Link to="/policy/data-security">Sécurité des données</Link><br /><Link to="/policy/privacy">Confidentialité</Link></p>
    <p>À l'avenir, nous essaierons d'étendre les fonctionnalités d'IA sur les dernières versions d'iOS avec Siri AI, ainsi que sur macOS et iPadOS. LiquidBoard s'engage à développer des fonctionnalités d'IA uniquement au niveau du système afin de protéger les autorisations et les données sensibles des utilisateurs.</p>
  </>
);

export default AboutContent_fr;
