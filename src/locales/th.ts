import { LocaleDict } from './types';

const th: LocaleDict = {
  browserTitle: 'LiquidBoard — คัดลอกและวางอย่างรวดเร็วและปลอดภัย',
  browserDescription: 'LiquidBoard จัดระเบียบข้อความ รูปภาพ สติกเกอร์ และลิงก์ เพื่อให้พร้อมวางจากคีย์บอร์ด iPhone ของคุณ',
  nav: {
    home: "หน้าแรก",
    about: "เกี่ยวกับ",
    pricing: "ราคา",
    policy: "นโยบาย",
    help: "ช่วยเหลือ",
  },
  hero: {
    line1: "นำคลิปบอร์ดจริงมาไว้",
    line2: { left: "ใน", right: "คีย์บอร์ด iOS ของคุณ" },
  },
  coreClipboard: { line1: 'จากคลิปบอร์ดในแอป,', line2: 'สู่คีย์บอร์ด iOS ของคุณ' },
  actionClipboard: {
    sectionLabel: 'ฟีเจอร์ของ LiquidBoard',
    progressLabel: 'ความคืบหน้าฟีเจอร์คลิปบอร์ด',
    groupTitle: { primary: 'ชื่อ', secondary: 'กลุ่ม' },
    groupDescription: 'จัดหมวดหมู่ตามต้องการ',
    pinDescription: 'สิ่งสำคัญไว้ด้านบน',
    shareDescription: 'ส่งไปยังทุกแพลตฟอร์ม',
    exportTitle: 'นำเข้า / ส่งออก',
    exportDescription: 'จัดเก็บและนำเข้าด้วย JSON หรือ CSV',
    featureLabels: { group: 'กลุ่ม', pin: 'ปักหมุด', share: 'แชร์', export: 'ส่งออกไฟล์', voice: 'เสียง', scanText: 'สแกนข้อความ', systemPasteboard: 'คลิปบอร์ดระบบ', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "ดาวน์โหลด\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  pricing: {
    intro: { 
      line1: "เลือกแพ็กเกจที่เหมาะสมกับวิธีที่คุณบันทึก จัดระเบียบ และแชร์เนื้อหาในแต่ละวัน", 
      line2: "แต่ละแพ็กเกจเป็นการซื้อครั้งเดียวเพื่อการเข้าถึงตลอดชีพ" 
    },
    fromPrice: 'เริ่มต้นที่ {price}',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'การเข้าถึงตลอดชีพ',
        price: '฿0',
        description: 'แผนทดลอง',
        features: ['20 ข้อความ', '20 รูปภาพ', '20 สติกเกอร์', '2 กลุ่มต่อประเภท', '2 ปักหมุดต่อกลุ่ม'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'การเข้าถึงตลอดชีพ',
        price: '฿119',
        description: 'แผนพื้นฐาน',
        features: ['100 ข้อความ', '100 รูปภาพ', '100 สติกเกอร์', '5 กลุ่มต่อประเภท', '5 ปักหมุดต่อกลุ่ม'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'การเข้าถึงตลอดชีพ',
        price: '฿249',
        description: 'แผนมัลติทาสก์',
        features: ['250 ข้อความ', '250 รูปภาพ', '250 สติกเกอร์', '15 กลุ่มต่อประเภท', '15 ปักหมุดต่อกลุ่ม'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'การเข้าถึงตลอดชีพ',
        price: '฿449',
        description: 'แผนมืออาชีพ',
        features: ['500 ข้อความ', '500 รูปภาพ', '500 สติกเกอร์', '40 กลุ่มต่อประเภท', '40 ปักหมุดต่อกลุ่ม'],
      },
    ],
  },
  
  help: {
    faqTab: 'คำถามที่พบบ่อย',
    docsTab: 'เอกสาร',
    docsPlaceholder: "กำลังอัปเดตเอกสาร...",
    contactTab: 'ติดต่อเรา', email: 'อีเมล', problem: 'ปัญหา', problemPlaceholder: 'โปรดบอกเราว่าเกิดอะไรขึ้น…', media: 'ไฟล์แนบ', addMedia: 'เพิ่มไฟล์', mediaLimit: 'สูงสุด 20 MB ต่อไฟล์', removeMedia: 'ลบ', send: 'ส่ง', sending: 'กำลังส่ง…', mediaTooLarge: 'ไฟล์แนบแต่ละไฟล์ต้องมีขนาดไม่เกิน 20 MB', mediaMax: 'คุณสามารถแนบรูปภาพหรือวิดีโอได้สูงสุด 5 ไฟล์', sent: 'ขอบคุณ — ส่งรายงานของคุณแล้ว', sendFailed: 'ไม่สามารถส่งรายงานได้',
  }
,
  policy: {
    dataSecurity: "ความปลอดภัยของข้อมูล",
    privacy: "ความเป็นส่วนตัว",
    terms: "ข้อกำหนดในการใช้งาน",
    payment: "การชำระเงินและการคืนเงิน",
  },
};
export default th;
