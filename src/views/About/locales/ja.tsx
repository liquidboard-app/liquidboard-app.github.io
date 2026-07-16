import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_ja: React.FC = () => (
  <>
    <p>LiquidBoard は、iPhone でテキスト、画像、ステッカーを管理するクリップボード管理アプリです。よく使うコンテンツを作成したり、ほかのアプリやデバイスからコピーした内容を保存したりできます。データ管理をシンプルにするための機能を幅広く備えています。</p>
    <p>LiquidBoard は iPhone のキーボードと連携し、保存済みのテキスト、画像、ステッカーを簡単に送信できるようにします。頻繁に使う定型文、QR Code 画像、お気に入りのステッカーの作成と保存に活用できます。</p>
    <p>すべてのデータは、同期時にはお使いのデバイスまたは iCloud にローカルかつ安全に保存されます。LiquidBoard は、ユーザーのデータをほかの場所に保存、使用、アップロードしないことを約束します。</p>
    <p>アプリのステッカー機能は、iOS デバイスに組み込まれている Apple のコンピュータビジョンと機械学習ライブラリである Vision Framework を使用して作られており、背景の切り抜きとステッカーのトリミングを行います。</p>
    <p>権限と機能に関するすべての約束は、アプリ内のデータセキュリティとプライバシーの文書を通じて Apple により実装および管理されます。</p>
    <p>これらの文書はアプリ内およびこのウェブサイトで公開しています. <br /><Link to="/policy/data-security">データセキュリティ</Link><br /><Link to="/policy/privacy">プライバシー</Link></p>
    <p>今後は、最新の iOS バージョンにおける Siri AI と、macOS および iPadOS 向けバージョンで AI 機能を拡張していく予定です。LiquidBoard は、ユーザーの権限と機密データを保護するため、AI 機能をシステムレベルでのみ開発することを約束します。</p>
  </>
);

export default AboutContent_ja;
