import { AboutParagraph, AboutLineBreak } from './elements';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_zh_CN: React.FC = () => (
  <>
    <AboutParagraph>LiquidBoard 是一款在 iPhone 上管理文本、图片和贴纸的剪贴板 App。它可以帮助你创建常用内容，或保存从其他 App 和设备复制的内容。所有功能都旨在让数据管理更简单。</AboutParagraph>
    <AboutParagraph>LiquidBoard 集成到你的 iPhone 键盘中，让发送已保存的文本、图片和贴纸更加轻松。你可以用它保存常用文本、二维码图片，并创建喜爱的贴纸。</AboutParagraph>
    <AboutParagraph>同步时，所有数据都会安全地保存在你的设备本地或个人 iCloud 中。LiquidBoard 承诺不会在其他任何地方存储、使用或上传你的数据。</AboutParagraph>
    <AboutParagraph>App 中的贴纸功能由 Vision Framework 提供支持。这是 Apple 内置于 iOS 设备的计算机视觉和机器学习框架，用于分离背景并裁切贴纸。</AboutParagraph>
    <AboutParagraph>所有关于权限和功能的承诺都由 Apple 通过 App 内的数据安全与隐私文档实施和监管。</AboutParagraph>
    <AboutParagraph>我们在 App 和本网站上公开这些文档：<AboutLineBreak /><Link to="/policy/data-security">数据安全</Link><AboutLineBreak /><Link to="/policy/privacy">隐私</Link>。</AboutParagraph>
    <AboutParagraph>未来，我们计划在最新 iOS 版本中通过 Siri AI 扩展更多 AI 功能，并推出 macOS 和 iPadOS 版本。LiquidBoard 承诺只在系统层级开发 AI 功能，以保护用户权限和敏感数据。</AboutParagraph>
  </>
);

export default AboutContent_zh_CN;
