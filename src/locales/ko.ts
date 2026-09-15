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
  coreClipboard: { line1: '앱의 클립보드에서,', line2: 'iOS 키보드까지.' },
  actionClipboard: {
    sectionLabel: 'LiquidBoard 기능',
    progressLabel: '클립보드 기능 진행률',
    headingTitle: '완벽한 맞춤 설정',
    headingDescription: '원하는 방식으로 클립보드를 만들어 보세요',
    groupTitle: { primary: '그룹', secondary: '이름' },
    groupDescription: '필요에 따라 분류',
    pinDescription: '중요한 항목을 먼저',
    shareDescription: '모든 플랫폼으로 보내기',
    exportTitle: '가져오기 / 내보내기',
    exportDescription: 'JSON 또는 CSV로 저장하고 가져오기',
    voiceTitle: '음성',
    voiceDescription: '오디오에서 텍스트로',
    scanTitle: '스캔',
    scanDescription: '찾은 모든 텍스트 가져오기',
    clipboardTitle: '시스템 클립보드',
    clipboardDescription: '어디서나 복사',
    icloudTitle: 'iCloud',
    icloudDescription: '클립보드를 클라우드에 보관',
    featureLabels: { group: '그룹', pin: '고정', share: '공유', export: '파일 내보내기', voice: '음성', scanText: '텍스트 스캔', systemPasteboard: '시스템 클립보드', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "", brand: "LiquidBoard\u00A0", suffix: "다운로드" },
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
