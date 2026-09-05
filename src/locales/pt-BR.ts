import { LocaleDict } from './types';

const ptBR: LocaleDict = {
  browserTitle: 'LiquidBoard — Copie e cole com rapidez e segurança',
  browserDescription: 'O LiquidBoard mantém textos, fotos, stickers e links organizados e prontos para colar pelo teclado do iPhone.',
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
  coreClipboard: { line1: 'Da área de transferência no app,', line2: 'ao seu teclado do iOS.' },
  actionClipboard: {
    sectionLabel: 'Recursos do LiquidBoard',
    progressLabel: 'Progresso dos recursos da área de transferência',
    groupTitle: { primary: 'Grupo', secondary: 'Nome' },
    featureLabels: { group: 'Grupo', pin: 'Fixar', share: 'Compartilhar', export: 'Exportar', voice: 'Voz', scanText: 'Digitalizar texto', systemPasteboard: 'Área de transferência do sistema', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "Baixar\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  pricing: {
    intro: { 
      line1: "Escolha o plano certo para como você salva, organiza e compartilha conteúdo todos os dias.", 
      line2: "Cada plano é uma compra única para acesso vitalício." 
    },
    fromPrice: 'A partir de {price}',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Acesso Vitalício',
        price: 'R$0',
        description: 'Plano de teste',
        features: ['20 Textos', '20 Imagens', '20 Adesivos', '2 Grupos Por Tipo', '2 Fixados Por Grupo'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Acesso Vitalício',
        price: 'R$19,90',
        description: 'Plano básico',
        features: ['100 Textos', '100 Imagens', '100 Adesivos', '5 Grupos Por Tipo', '5 Fixados Por Grupo'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Acesso Vitalício',
        price: 'R$39,90',
        description: 'Plano multitarefa',
        features: ['250 Textos', '250 Imagens', '250 Adesivos', '15 Grupos Por Tipo', '15 Fixados Por Grupo'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Acesso Vitalício',
        price: 'R$69,90',
        description: 'Plano profissional',
        features: ['500 Textos', '500 Imagens', '500 Adesivos', '40 Grupos Por Tipo', '40 Fixados Por Grupo'],
      },
    ],
  },
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
