import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_pt: React.FC = () => (
  <>
    <p>LiquidBoard é um aplicativo de gerenciamento de área de transferência para textos e imagens. O aplicativo ajuda você a criar conteúdos usados com frequência ou armazenar conteúdos copiados de outros aplicativos. Recursos como pesquisa, classificação, agrupamento, fixação de conteúdos essenciais e exportação de arquivos nos formatos JSON ou CSV são todos suportados para simplificar o gerenciamento de dados.</p>
    <p>LiquidBoard se integra ao seu teclado para facilitar o envio de textos e imagens previamente armazenados ou copiados. Você pode utilizar o aplicativo para armazenar frases diárias recorrentes para clientes, conteúdos de relatórios, links de vendas, números de contas, endereços, códigos QR, etc. Além disso, o LiquidBoard possui uma seção de Adesivos, permitindo que você crie adesivos a partir de imagens adicionadas.</p>
    <p>Todos os dados são armazenados localmente e de forma segura em seu dispositivo e iCloud (após vincular o iCloud). A LiquidBoard se compromete a não armazenar ou enviar nenhum de seus dados para qualquer outro lugar. Todos os compromissos são aplicados e controlados pela Apple através do<Link to="/policy/data-security">Segurança de Dados</Link>e<Link to="/policy/privacy">Privacidade</Link>políticas dentro do aplicativo. Nós publicamos esses documentos publicamente no aplicativo e em nosso site, e você pode encontrá-los facilmente em<Link to="/policy/data-security">Segurança de Dados</Link>e<Link to="/policy/privacy">Privacidade</Link>.</p>
  </>
);
export default AboutContent_pt;
