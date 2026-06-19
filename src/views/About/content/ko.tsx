import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_ko: React.FC = () => (
  <>
    <p>LiquidBoard is a clipboard management app for text and images. The app helps you create frequently used content or store content copied from other apps. Features like search, sorting, grouping, pinning essential content, and exporting files in JSON or CSV format are all supported to simplify data management.</p>
    <p>LiquidBoard integrates into your keyboard to make sending pre-stored or previously copied text and images easier. You can utilize the app to store recurring daily phrases for customers, report contents, sales links, account numbers, addresses, QR Codes, etc. Additionally, LiquidBoard has a Stickers section, allowing you to create stickers from added images.</p>
    <p>All data is stored locally and securely on your device and iCloud (after linking iCloud). LiquidBoard commits not to store or upload any of your data anywhere else. All commitments are enforced and controlled by Apple through the<Link to="/policy/data-security">Data Security</Link>and<Link to="/policy/privacy">Privacy</Link>policies within the app. We publish these documents publicly in the app and on our website, and you can easily find them at<Link to="/policy/data-security">Data Security</Link>and<Link to="/policy/privacy">Privacy</Link>.</p>
  </>
);
export default AboutContent_ko;
