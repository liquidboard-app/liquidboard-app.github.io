import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_zh_TW: React.FC = () => (
  <>
    <p>LiquidBoard 是一款用於文字和圖像的剪貼簿管理應用程式。該應用程式可協助您建立常用內容或儲存從其他應用程式複製的內容。支援搜尋、排序、分組、固定基本內容以及以 JSON 或 CSV 格式匯出文件等功能，以簡化資料管理。</p>
    <p>LiquidBoard 整合到您的鍵盤中，使發送預先儲存或先前複製的文字和圖像變得更加容易。您可以利用應用程式儲存客戶日常重複使用的短語、報告內容、銷售連結、帳號、地址、二維碼等。此外，LiquidBoard 還具有貼紙部分，可讓您從添加的圖像建立貼紙。</p>
    <p>所有資料都安全地儲存在您的裝置和 iCloud 上（連結 iCloud 後）。LiquidBoard 承諾不會在其他地方儲存或上傳您的任何資料。所有承諾均由 Apple 透過以下方式執行和控制： <Link to="/policy/data-security">資料安全</Link> 和 <Link to="/policy/privacy">隱私</Link> 應用程式內的政策。我們在應用程式和我們的網站上公開發布這些文檔，您可以在以下位置輕鬆找到它們： <Link to="/policy/data-security">資料安全</Link> 和 <Link to="/policy/privacy">隱私</Link>.</p>
  </>
);
export default AboutContent_zh_TW;
