import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_fr: React.FC = () => (
  <>
    <p>LiquidBoard est une application de gestion de presse-papiers pour le texte et les images.L'application vous aide à créer du contenu fréquemment utilisé ou à stocker du contenu copié à partir d'autres applications.Des fonctionnalités telles que la recherche, le tri, le regroupement, l'épinglage de contenu essentiel et l'exportation de fichiers au format JSON ou CSV sont toutes prises en charge pour simplifier la gestion des données.</p>
    <p>LiquidBoard s'intègre à votre clavier pour faciliter l'envoi de texte et d'images pré-stockés ou précédemment copiés.Vous pouvez utiliser l'application pour stocker des phrases quotidiennes récurrentes pour les clients, le contenu des rapports, les liens de vente, les numéros de compte, les adresses, les codes QR, etc. De plus, LiquidBoard dispose d'une section Autocollants, vous permettant de créer des autocollants à partir d'images ajoutées.</p>
    <p>Toutes les données sont stockées localement et en toute sécurité sur votre appareil et iCloud (après avoir lié iCloud).LiquidBoard s'engage à ne stocker ni télécharger aucune de vos données ailleurs.Tous les engagements sont appliqués et contrôlés par Apple via le<Link to="/policy/data-security">Sécurité des données</Link>et<Link to="/policy/privacy">Confidentialité</Link>politiques au sein de l’application.Nous publions ces documents publiquement dans l'application et sur notre site Internet, et vous pouvez facilement les retrouver sur<Link to="/policy/data-security">Sécurité des données</Link>et<Link to="/policy/privacy">Confidentialité</Link>.</p>
  </>
);
export default AboutContent_fr;
