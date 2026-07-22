import { LocaleDict } from './types';

const ko: LocaleDict = {
  browserTitle: 'LiquidBoard — 빠르고 안전하게 복사하고 붙여넣기',
  browserDescription: 'LiquidBoard는 텍스트, 사진, 스티커와 링크를 정리해 iPhone 키보드에서 바로 붙여넣을 수 있게 합니다.',
  nav: {
    home: "홈",
    about: "소개",
    pricing: "요금제",
    policy: "정책",
    help: "도움말",
  },
  hero: {
    line1: "진정한 클립보드를",
    line2: { left: "당신의", right: "iOS 키보드에" },
  },
  header: {
    download: { prefix: "", brand: "LiquidBoard\u00A0", suffix: "다운로드" },
  },
  action: {
    download: "LiquidBoard 다운로드",
    titles: ['그룹 만들기', '고정하기', '복사 및 복제', '파일 가져오기 및 내보내기'],
    paragraphs: [
      '필요에 따라 추가 그룹을 만들고 텍스트, 이미지, 스티커를 분류하세요. 그룹 간을 원활하게 전환하고 필수 그룹을 먼저 상단에 고정하세요.',
      '자주 사용하는 중요한 텍스트, 이미지, 스티커를 상단에 고정하여 더 빠르게 보낼 수 있습니다.',
      '텍스트, 이미지, 스티커를 쉽고 빠르게 복사하고 복제하세요.',
      '파일 앱을 통해 직접 JSON 및 CSV로 텍스트 데이터를 내보내고 가져옵니다.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard groups' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard pinned items' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard copy and duplicate' },
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard import and export files' },
    ],
  },
  pricing: {
    intro: { 
      line1: "매일 콘텐츠를 저장, 구성, 공유하는 방식에 맞는 올바른 요금제를 선택하세요.", 
      line2: "모든 요금제는 평생 액세스를 위한 일회성 구매입니다." 
    },
    fromPrice: '{price}부터',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: '평생 액세스',
        price: '₩0',
        description: '체험 플랜',
        features: ['텍스트 20개', '이미지 20개', '스티커 20개', '유형당 2개 그룹', '그룹당 2개 고정'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: '평생 액세스',
        price: '₩5,500',
        description: '기본 플랜',
        features: ['텍스트 100개', '이미지 100개', '스티커 100개', '유형당 5개 그룹', '그룹당 5개 고정'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: '평생 액세스',
        price: '₩11,000',
        description: '멀티태스킹 플랜',
        features: ['텍스트 250개', '이미지 250개', '스티커 250개', '유형당 15개 그룹', '그룹당 15개 고정'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: '평생 액세스',
        price: '₩20,900',
        description: '프로 플랜',
        features: ['텍스트 500개', '이미지 500개', '스티커 500개', '유형당 40개 그룹', '그룹당 40개 고정'],
      },
    ],
  },
  features: {
    titles: ['텍스트', '이미지', '스티커'],
    paragraphs: [
      '작성 요구 사항에 맞게 여러 텍스트 문서, 소개 정보 및 콘텐츠를 만들고 구성합니다. 즉시 사용할 수 있도록 미리 작성된 응답 템플릿을 설정합니다. 연락처 정보를 입력하고 빠르게 공유합니다. 효율적인 참조 및 재사용을 위해 웹 사이트 링크, 코드 스니펫, AI 프롬프트 구조를 저장합니다.',
      '결제 QR 코드 및 계좌 이체 QR 코드를 빠르게 공유합니다. 제품 샘플 프로토타입, 디자인 모형, 인포그래픽, 교육용 스크린샷 등 다양한 컬렉션에 액세스합니다. 전문적인 커뮤니케이션을 위해 시각적 자산을 원활하게 구성하고 검색합니다.',
      '스티커, 좋아하는 밈, 축하 메시지, 감정 표현을 즉시 만들고 공유하여 사랑하는 사람과 고객과 소통하세요. 감정을 전달하고 참여를 높이는 시각적 요소로 커뮤니케이션을 개인화합니다.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard keyboard view' },
    ],
  }
,
  policy: {
    dataSecurity: "데이터 보안",
    privacy: "개인정보",
    terms: "이용 약관",
    payment: "결제 및 환불",
  },
  help: {
    faqTab: '자주 묻는 질문',
    docsTab: '문서',
    docsPlaceholder: "문서가 업데이트되고 있습니다...",
    contactTab: '문의하기', email: '이메일', problem: '문제', problemPlaceholder: '무슨 일이 있었는지 알려주세요…', media: '첨부 파일', addMedia: '파일 추가', mediaLimit: '파일당 최대 20 MB', removeMedia: '삭제', send: '보내기', sending: '보내는 중…', mediaTooLarge: '각 첨부 파일은 20 MB 이하여야 합니다.', mediaMax: '이미지 또는 동영상을 최대 5개까지 첨부할 수 있습니다.', sent: '감사합니다 — 보고서가 전송되었습니다.', sendFailed: '보고서를 전송할 수 없습니다.',
  }
};
export default ko;
