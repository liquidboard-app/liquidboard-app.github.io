import React from 'react';
import { Link } from 'react-router-dom';

const AboutContentEn: React.FC = () => (
  <>
    <p>LiquidBoard is a clipboard management app for text, images and stickers on iPhone. The app helps you create frequently used content or store content you copy from other apps or devices. A full set of features is provided to help simplify data management.</p>
    <p>LiquidBoard integrates with your iPhone keyboard, making it easier to send saved text, images and stickers. You can use the app to store frequently repeated text, QR Code images and create your favorite stickers.</p>
    <p>All data is stored locally and securely on your device or in your iCloud when syncing. LiquidBoard commits not to store, use or upload any of your data anywhere else.</p>
    <p>The Stickers feature in the app is built with Vision Framework, Apple&apos;s built-in computer vision and machine learning library on iOS devices, to separate backgrounds and crop stickers.</p>
    <p>All commitments about permissions and features are implemented and controlled by Apple through the app&apos;s Data Security and Privacy documents.</p>
    <p>We publish these documents in the app and on this website. <br /><Link to="/policy/data-security">Data Security</Link><br /><Link to="/policy/privacy">Privacy</Link></p>
    <p>In the future, we will try to expand AI features on the latest iOS versions with Siri AI and versions for macOS and iPadOS. LiquidBoard commits to developing AI features only at the system level to protect user permissions and sensitive data.</p>
  </>
);

export default AboutContentEn;
