import { LocaleDict } from './types';

const ptBR: LocaleDict = {
  nav: {
    home: "Início",
    about: "Sobre",
    pricing: "Preços",
    policy: "Política",
    help: "Ajuda",
  },
  hero: {
    line1: "Traga uma área de transferência real",
    line2: { left: "para o seu", right: "Teclado iOS" },
  },
  header: {
    download: { prefix: "Baixar\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  action: {
    download: "Baixar LiquidBoard",
    titles: ['Criar Grupo', 'Fixar', 'Copiar e Duplicar', 'Importar e Exportar Arquivos'],
    paragraphs: [
      'Crie grupos adicionais e categorize textos, imagens e adesivos com base nas suas necessidades. Alterne suavemente entre grupos e fixe os grupos essenciais no topo primeiro.',
      'Fixe textos, imagens e adesivos importantes que você usa com frequência no topo para poder enviá-los mais rápido.',
      'Copie e duplique textos, imagens e adesivos de forma fácil e rápida.',
      'Exporte e importe dados de texto como JSON e CSV diretamente pelo aplicativo Arquivos.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard groups' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard pinned items' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard copy and duplicate' },
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard import and export files' },
    ],
  },
  pricing: {
    intro: { 
      line1: "Escolha o plano certo para como você salva, organiza e compartilha conteúdo todos os dias.", 
      line2: "Cada plano é uma compra única para acesso vitalício." 
    },
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Acesso Vitalício',
        price: 'R$0',
        description: 'Plano de teste',
        features: ['25 Textos', '25 Imagens', '25 Adesivos', '2 Grupos Por Tipo', '2 Fixados Por Grupo'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Acesso Vitalício',
        price: 'R$16,90',
        description: 'Plano básico',
        features: ['100 Textos', '100 Imagens', '100 Adesivos', '5 Grupos Por Tipo', '5 Fixados Por Grupo'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Acesso Vitalício',
        price: 'R$32,90',
        description: 'Plano multitarefa',
        features: ['250 Textos', '250 Imagens', '250 Adesivos', '15 Grupos Por Tipo', '15 Fixados Por Grupo'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Acesso Vitalício',
        price: 'R$54,90',
        description: 'Plano profissional',
        features: ['500 Textos', '500 Imagens', '500 Adesivos', '40 Grupos Por Tipo', '40 Fixados Por Grupo'],
      },
    ],
  },
  features: {
    titles: ['Texto', 'Imagens', 'Adesivos'],
    paragraphs: [
      'Crie e componha múltiplos documentos de texto, informações introdutórias e conteúdo adaptado às suas necessidades de escrita. Configure modelos de resposta pré-construídos para uso imediato. Insira e compartilhe rapidamente informações de contato. Armazene links de sites, trechos de código e estruturas de prompt de IA para referência e reutilização eficientes.',
      'Compartilhe rapidamente códigos QR de pagamento e códigos QR de transferência bancária. Acesse uma coleção diversificada de protótipos de amostras de produtos, maquetes de design, infográficos e capturas de tela instrutivas. Organize e recupere ativos visuais perfeitamente para comunicação profissional.',
      'Crie e compartilhe instantaneamente adesivos, memes favoritos, mensagens de felicitações e expressões emocionais para se conectar com entes queridos e clientes. Personalize sua comunicação com elementos visuais que transmitem sentimento e aumentam o engajamento.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard keyboard view' },
    ],
  }
,
  policy: {
    dataSecurity: "Segurança de Dados",
    privacy: "Privacidade",
    terms: "Termos de Uso",
    payment: "Pagamento e Reembolso",
  },
  help: {
    faqTab: 'Perguntas Frequentes',
    docsTab: 'Docs',
    docsPlaceholder: "A documentação está sendo atualizada...",
    contactTab: 'Contato', email: 'E-mail', problem: 'Problema', problemPlaceholder: 'Conte-nos o que aconteceu…', media: 'Anexos', addMedia: 'Adicionar arquivo', mediaLimit: 'Até 20 MB por arquivo', removeMedia: 'Remover', send: 'Enviar', sending: 'Enviando…', mediaTooLarge: 'Cada anexo pode ter no máximo 20 MB.', mediaMax: 'Você pode anexar até 5 imagens ou vídeos.', sent: 'Obrigado — seu relato foi enviado.', sendFailed: 'Não foi possível enviar o relato.',
  }
};
export default ptBR;
