import { LocaleDict } from './types';

const ru: LocaleDict = {
  browserTitle: 'LiquidBoard — Копируйте и вставляйте быстро и безопасно',
  browserDescription: 'LiquidBoard упорядочивает тексты, фотографии, стикеры и ссылки, чтобы их можно было вставлять прямо с клавиатуры iPhone.',
  nav: {
    home: "Главная",
    about: "О нас",
    pricing: "Цены",
    policy: "Политика",
    help: "Помощь",
  },
  hero: {
    line1: "Перенесите настоящий буфер обмена",
    line2: { left: "в вашу", right: "iOS-клавиатуру" },
  },
  coreClipboard: { line1: 'От буфера обмена в приложении,', line2: 'до вашей клавиатуры iOS.' },
  actionClipboard: {
    sectionLabel: 'Возможности LiquidBoard',
    progressLabel: 'Прогресс функций буфера обмена',
    groupTitle: { primary: 'Название', secondary: 'группы' },
    groupDescription: 'Классифицируйте по необходимости',
    pinDescription: 'Важное — в начале',
    shareDescription: 'Отправить на все платформы',
    exportTitle: 'Импорт / экспорт',
    exportDescription: 'Сохраняйте и импортируйте в JSON или CSV',
    voiceTitle: 'Голос',
    voiceDescription: 'Из аудио в текст',
    scanTitle: 'Сканирование',
    scanDescription: 'Импортировать весь найденный текст',
    clipboardTitle: 'Системный буфер обмена',
    clipboardDescription: 'Копируйте откуда угодно',
    icloudTitle: 'iCloud',
    icloudDescription: 'Храните буфер обмена в облаке',
    featureLabels: { group: 'Группа', pin: 'Закрепить', share: 'Поделиться', export: 'Экспорт файла', voice: 'Голос', scanText: 'Сканировать текст', systemPasteboard: 'Системный буфер обмена', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "Скачать\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  pricing: {
    intro: { 
      line1: "Выберите подходящий план для того, как вы сохраняете, систематизируете и делитесь контентом каждый день.", 
      line2: "Каждый план — это разовая покупка с пожизненным доступом." 
    },
    fromPrice: 'От {price}',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Пожизненный доступ',
        price: '₽0',
        description: 'Пробный план',
        features: ['20 Текстов', '20 Изображений', '20 Стикеров', '2 Группы каждого типа', '2 Закрепления на группу'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Пожизненный доступ',
        price: '₽279',
        description: 'Базовый план',
        features: ['100 Текстов', '100 Изображений', '100 Стикеров', '5 Групп каждого типа', '5 Закреплений на группу'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Пожизненный доступ',
        price: '₽599',
        description: 'План для многозадачности',
        features: ['250 Текстов', '250 Изображений', '250 Стикеров', '15 Групп каждого типа', '15 Закреплений на группу'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Пожизненный доступ',
        price: '₽1,099',
        description: 'Профессиональный план',
        features: ['500 Текстов', '500 Изображений', '500 Стикеров', '40 Групп каждого типа', '40 Закреплений на группу'],
      },
    ],
  },
  policy: {
    dataSecurity: "Безопасность данных",
    privacy: "Конфиденциальность",
    terms: "Условия использования",
    payment: "Оплата и возврат",
  },
  help: {
    faqTab: 'ЧАВО',
    docsTab: 'Документы',
    docsPlaceholder: "Документация обновляется...",
    contactTab: 'Связаться с нами', email: 'Электронная почта', problem: 'Проблема', problemPlaceholder: 'Расскажите, что произошло…', media: 'Вложения', addMedia: 'Добавить файл', mediaLimit: 'До 20 МБ на файл', removeMedia: 'Удалить', send: 'Отправить', sending: 'Отправка…', mediaTooLarge: 'Размер каждого вложения не должен превышать 20 МБ.', mediaMax: 'Можно прикрепить до 5 изображений или видео.', sent: 'Спасибо — ваш отчёт отправлен.', sendFailed: 'Не удалось отправить отчёт.',
  }
};
export default ru;
