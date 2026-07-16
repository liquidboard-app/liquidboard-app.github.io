import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_ko: React.FC = () => (
  <>
    <p>LiquidBoard는 iPhone에서 텍스트, 이미지, 스티커를 관리하는 클립보드 관리 앱입니다. 자주 사용하는 콘텐츠를 만들거나 다른 앱 또는 기기에서 복사한 콘텐츠를 저장할 수 있습니다. 데이터 관리를 단순화할 수 있도록 필요한 기능을 폭넓게 제공합니다.</p>
    <p>LiquidBoard는 iPhone 키보드와 통합되어 저장해 둔 텍스트, 이미지, 스티커를 더 쉽게 보낼 수 있게 합니다. 자주 반복해서 사용하는 문구, QR Code 이미지, 좋아하는 스티커를 저장하고 만들 수 있습니다.</p>
    <p>모든 데이터는 동기화 시 사용자의 기기 또는 iCloud에 로컬로 안전하게 저장됩니다. LiquidBoard는 사용자의 데이터를 다른 곳에 저장, 사용 또는 업로드하지 않을 것을 약속합니다.</p>
    <p>앱의 스티커 기능은 iOS 기기에 내장된 Apple의 컴퓨터 비전 및 머신 러닝 라이브러리인 Vision Framework로 만들어져 배경을 분리하고 스티커를 잘라냅니다.</p>
    <p>권한과 기능에 관한 모든 약속은 앱 내 데이터 보안 및 개인정보 보호 문서를 통해 Apple이 구현하고 관리합니다.</p>
    <p>저희는 이 문서들을 앱과 이 웹사이트에 공개합니다. <br /><Link to="/policy/data-security">데이터 보안</Link><br /><Link to="/policy/privacy">개인정보 보호</Link></p>
    <p>앞으로 최신 iOS 버전의 Siri AI와 macOS, iPadOS 버전에서 AI 기능을 확장하기 위해 노력하겠습니다. LiquidBoard는 사용자의 권한과 민감한 데이터를 보호하기 위해 시스템 수준의 AI 기능만 개발할 것을 약속합니다.</p>
  </>
);

export default AboutContent_ko;
