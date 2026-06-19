import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_ja: React.FC = () => (
  <>
    <p>LiquidBoard は、テキストと画像のクリップボード管理アプリです。このアプリは、頻繁に使用するコンテンツを作成したり、他のアプリからコピーしたコンテンツを保存したりするのに役立ちます。データ管理を簡素化するために、検索、並べ替え、グループ化、重要なコンテンツの固定、JSON または CSV 形式でのファイルのエクスポートなどの機能がすべてサポートされています。</p>
    <p>LiquidBoard をキーボードに統合すると、事前に保存またはコピーしたテキストや画像を簡単に送信できるようになります。このアプリを利用して、顧客向けの毎日の繰り返しのフレーズ、レポートの内容、販売リンク、口座番号、住所、QR コードなどを保存できます。さらに、LiquidBoard にはステッカー セクションがあり、追加した画像からステッカーを作成できます。</p>
    <p>すべてのデータは、デバイスと iCloud (iCloud リンク後) にローカルかつ安全に保存されます。LiquidBoard commits not to store or upload any of your data anywhere else.すべての約束は、Apple によって強制され、管理されます。<Link to="/policy/data-security">データセキュリティ</Link>そして<Link to="/policy/privacy">プライバシー</Link>アプリ内のポリシー。これらの文書はアプリとウェブサイトで公開されており、次の場所で簡単に見つけることができます。<Link to="/policy/data-security">データセキュリティ</Link>そして<Link to="/policy/privacy">プライバシー</Link>.</p>
  </>
);
export default AboutContent_ja;
