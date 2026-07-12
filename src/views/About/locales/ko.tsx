import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_ko: React.FC = () => (
  <>
    <p>LiquidBoard는 텍스트와 이미지를 위한 클립보드 관리 앱입니다. 자주 사용하는 내용을 직접 만들거나 다른 앱에서 복사한 내용을 저장할 수 있도록 도와줍니다. 검색, 정렬, 그룹화, 중요한 내용 고정, JSON 또는 CSV 형식으로 파일 내보내기 같은 기능이 모두 지원되어 데이터 관리를 더 간단하게 만들어 줍니다.</p>
    <p>LiquidBoard는 키보드에 통합되어 저장해 둔 텍스트와 이미지, 또는 이전에 복사한 텍스트와 이미지를 더 쉽게 보낼 수 있게 해줍니다. 고객과 매일 반복해서 사용하는 문구, 보고 내용, 판매 링크, 계좌번호, 주소, QR 코드 이미지 등을 저장하는 데 활용할 수 있습니다. 또한 LiquidBoard에는 스티커 섹션도 포함되어 있어 추가한 이미지로 스티커를 만들 수 있습니다.</p>
    <p>모든 데이터는 기기와 iCloud(iCloud 연동 후)에 로컬로 안전하게 저장됩니다. LiquidBoard는 사용자의 데이터를 다른 어떤 곳에도 저장하거나 업로드하지 않을 것을 약속합니다. 이러한 약속은 앱 내 <Link to="/policy/data-security">데이터 보안</Link> 및 <Link to="/policy/privacy">개인정보 보호</Link> 문서를 통해 Apple이 시행하고 관리합니다. 저희는 이 문서들을 앱과 웹사이트에 모두 공개하며, <Link to="/policy/data-security">데이터 보안</Link> 및 <Link to="/policy/privacy">개인정보 보호</Link>에서 쉽게 확인할 수 있습니다.</p>
  </>
);
export default AboutContent_ko;
