import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_pt_BR: React.FC = () => (
  <>
    <p>LiquidBoard é um app de gerenciamento de área de transferência para textos, imagens e figurinhas no iPhone. O app ajuda você a criar conteúdos usados com frequência ou armazenar conteúdos copiados de outros apps ou dispositivos. Um conjunto completo de recursos é oferecido para simplificar o gerenciamento de dados.</p>
    <p>LiquidBoard se integra ao teclado do seu iPhone para facilitar o envio de textos, imagens e figurinhas salvos. Você pode usar o app para guardar textos repetidos com frequência, imagens de QR Code e criar suas figurinhas favoritas.</p>
    <p>Todos os dados são armazenados localmente e com segurança no seu dispositivo ou no seu iCloud durante a sincronização. LiquidBoard se compromete a não armazenar, usar ou enviar seus dados para qualquer outro lugar.</p>
    <p>O recurso de Figurinhas do app é criado com o Vision Framework, a biblioteca de visão computacional e aprendizado de máquina da Apple integrada aos dispositivos iOS, para separar fundos e recortar figurinhas.</p>
    <p>Todos os compromissos sobre permissões e recursos são implementados e controlados pela Apple por meio dos documentos de Segurança de dados e Privacidade do app.</p>
    <p>Publicamos esses documentos no app e neste site. <br /><Link to="/policy/data-security">Segurança de dados</Link><br /><Link to="/policy/privacy">Privacidade</Link></p>
    <p>No futuro, tentaremos expandir recursos de IA nas versões mais recentes do iOS com Siri AI e em versões para macOS e iPadOS. LiquidBoard se compromete a desenvolver recursos de IA apenas no nível do sistema para proteger permissões e dados sensíveis dos usuários.</p>
  </>
);

export default AboutContent_pt_BR;
