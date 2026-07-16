import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_es: React.FC = () => (
  <>
    <p>LiquidBoard es una aplicación de gestión del portapapeles para texto, imágenes y stickers en iPhone. La aplicación te ayuda a crear contenido de uso frecuente o a guardar contenido que copias desde otras apps o dispositivos. Ofrece un conjunto completo de funciones para simplificar la gestión de datos.</p>
    <p>LiquidBoard se integra con el teclado de tu iPhone para que sea más fácil enviar textos, imágenes y stickers guardados. Puedes usar la app para almacenar textos repetitivos, imágenes de códigos QR y crear tus stickers favoritos.</p>
    <p>Todos los datos se almacenan localmente y de forma segura en tu dispositivo o en tu iCloud cuando sincronizas. LiquidBoard se compromete a no almacenar, usar ni subir ninguno de tus datos a ningún otro lugar.</p>
    <p>La función de Stickers de la app se crea con Vision Framework, la biblioteca de visión por computadora y aprendizaje automático de Apple integrada en los dispositivos iOS, para separar fondos y recortar stickers.</p>
    <p>Todos los compromisos sobre permisos y funciones son implementados y controlados por Apple mediante los documentos de Seguridad de datos y Privacidad de la app.</p>
    <p>Publicamos estos documentos en la app y en este sitio web. <br /><Link to="/policy/data-security">Seguridad de datos</Link><br /><Link to="/policy/privacy">Privacidad</Link></p>
    <p>En el futuro intentaremos ampliar las funciones de IA en las versiones más recientes de iOS con Siri AI, así como en versiones para macOS y iPadOS. LiquidBoard se compromete a desarrollar funciones de IA solo a nivel del sistema para proteger los permisos y los datos sensibles de los usuarios.</p>
  </>
);

export default AboutContent_es;
