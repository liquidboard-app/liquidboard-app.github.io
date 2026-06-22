import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_es: React.FC = () => (
  <>
    <p>LiquidBoard es una aplicación de gestión de portapapeles para texto e imágenes.La aplicación le ayuda a crear contenido de uso frecuente o almacenar contenido copiado de otras aplicaciones.Se admiten funciones como buscar, ordenar, agrupar, fijar contenido esencial y exportar archivos en formato JSON o CSV para simplificar la gestión de datos.</p>
    <p>LiquidBoard integrates into your keyboard to make sending pre-stored or previously copied text and images easier.Puede utilizar la aplicación para almacenar frases diarias recurrentes para clientes, contenidos de informes, enlaces de ventas, números de cuenta, direcciones, códigos QR, etc. Además, LiquidBoard tiene una sección de calcomanías, que le permite crear calcomanías a partir de imágenes agregadas.</p>
    <p>Todos los datos se almacenan localmente y de forma segura en su dispositivo y en iCloud (después de vincular iCloud).LiquidBoard se compromete a no almacenar ni cargar ninguno de sus datos en ningún otro lugar.Apple aplica y controla todos los compromisos a través de <Link to="/policy/data-security">Seguridad de datos</Link> y <Link to="/policy/privacy">Privacidad</Link> políticas dentro de la aplicación.Publicamos estos documentos públicamente en la aplicación y en nuestro sitio web, y puede encontrarlos fácilmente en <Link to="/policy/data-security">Seguridad de datos</Link> y <Link to="/policy/privacy">Privacidad</Link>.</p>
  </>
);
export default AboutContent_es;
