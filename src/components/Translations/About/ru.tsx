import { AboutParagraph, AboutLineBreak } from './elements';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_ru: React.FC = () => (
  <>
    <AboutParagraph>LiquidBoard — приложение для управления буфером обмена с текстом, изображениями и стикерами на iPhone. Оно помогает создавать часто используемый контент или хранить материалы, скопированные из других приложений или с других устройств. Полный набор функций помогает упростить управление данными.</AboutParagraph>
    <AboutParagraph>LiquidBoard интегрируется с клавиатурой iPhone, чтобы вам было проще отправлять сохраненные тексты, изображения и стикеры. Вы можете хранить часто повторяющиеся тексты, изображения QR Code и создавать любимые стикеры.</AboutParagraph>
    <AboutParagraph>Все данные хранятся локально и безопасно на вашем устройстве или в вашем iCloud при синхронизации. LiquidBoard обязуется не хранить, не использовать и не загружать ваши данные куда-либо еще.</AboutParagraph>
    <AboutParagraph>Функция стикеров в приложении создана с помощью Vision Framework — встроенной в устройства iOS библиотеки Apple для компьютерного зрения и машинного обучения, которая отделяет фон и обрезает стикеры.</AboutParagraph>
    <AboutParagraph>Все обязательства по разрешениям и функциям реализуются и контролируются Apple через документы Безопасность данных и Конфиденциальность в приложении.</AboutParagraph>
    <AboutParagraph>Мы публикуем эти документы в приложении и на этом сайте. <AboutLineBreak /><Link to="/policy/data-security">Безопасность данных</Link><AboutLineBreak /><Link to="/policy/privacy">Конфиденциальность</Link></AboutParagraph>
    <AboutParagraph>В будущем мы постараемся расширить AI-функции в последних версиях iOS с Siri AI, а также в версиях для macOS и iPadOS. LiquidBoard обязуется развивать AI-функции только на системном уровне, чтобы защищать разрешения и чувствительные данные пользователей.</AboutParagraph>
  </>
);

export default AboutContent_ru;
