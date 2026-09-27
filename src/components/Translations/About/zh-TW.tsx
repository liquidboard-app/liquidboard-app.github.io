import { AboutParagraph, AboutLineBreak } from './elements';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_zh_TW: React.FC = () => (
  <>
    <AboutParagraph>LiquidBoard 是 iPhone 上用於文字、圖片與貼圖的剪貼簿管理 App。它能協助你建立常用內容或儲存你從其他 App 或裝置複製的內容。完整功能皆為簡化資料管理而設計。</AboutParagraph>
    <AboutParagraph>LiquidBoard 整合到你的 iPhone 鍵盤，讓傳送已儲存的文字、圖片與貼圖更加容易。你可以用它保存常用的重複文字、QR Code 圖片，並建立喜愛的貼圖。</AboutParagraph>
    <AboutParagraph>所有資料都會在同步時安全地儲存在你的裝置本機或你的 iCloud。LiquidBoard 承諾不會在其他任何地方儲存、使用或上傳你的任何資料。</AboutParagraph>
    <AboutParagraph>App 中的貼圖功能由 Vision Framework 建立，這是 Apple 內建於 iOS 裝置的電腦視覺與機器學習函式庫，用於分離背景並裁切貼圖。</AboutParagraph>
    <AboutParagraph>所有關於權限與功能的承諾，都由 Apple 透過 App 內的資料安全與隱私文件實作並控管。</AboutParagraph>
    <AboutParagraph>我們在 App 內與本網站公開這些文件. <AboutLineBreak /><Link to="/policy/data-security">資料安全</Link><AboutLineBreak /><Link to="/policy/privacy">隱私</Link>。</AboutParagraph>
    <AboutParagraph>未來我們會嘗試在最新 iOS 版本中透過 Siri AI，以及在 macOS、iPadOS 版本中擴充更多 AI 功能。LiquidBoard 承諾只在系統層級開發 AI 功能，以保障使用者權限與敏感資料。</AboutParagraph>
  </>
);

export default AboutContent_zh_TW;
