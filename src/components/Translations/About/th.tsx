import { AboutParagraph, AboutLineBreak } from './elements';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_th: React.FC = () => (
  <>
    <AboutParagraph>LiquidBoard คือแอปจัดการคลิปบอร์ดสำหรับข้อความ รูปภาพ และสติกเกอร์บน iPhone แอปช่วยให้คุณสร้างเนื้อหาที่ใช้บ่อยหรือจัดเก็บเนื้อหาที่คัดลอกจากแอปหรืออุปกรณ์อื่น พร้อมฟีเจอร์ครบถ้วนเพื่อช่วยให้การจัดการข้อมูลง่ายขึ้น</AboutParagraph>
    <AboutParagraph>LiquidBoard ผสานเข้ากับคีย์บอร์ด iPhone ของคุณ เพื่อให้ส่งข้อความ รูปภาพ และสติกเกอร์ที่บันทึกไว้ได้ง่ายขึ้น คุณสามารถใช้แอปเพื่อเก็บข้อความที่ใช้ซ้ำบ่อย รูปภาพ QR Code และสร้างสติกเกอร์โปรดของคุณได้</AboutParagraph>
    <AboutParagraph>ข้อมูลทั้งหมดจะถูกจัดเก็บไว้ในเครื่องอย่างปลอดภัยบนอุปกรณ์ของคุณหรือใน iCloud ของคุณเมื่อซิงค์ LiquidBoard ให้คำมั่นว่าจะไม่จัดเก็บ ใช้ หรืออัปโหลดข้อมูลใด ๆ ของคุณไปยังที่อื่น</AboutParagraph>
    <AboutParagraph>ฟีเจอร์สติกเกอร์ในแอปสร้างขึ้นด้วย Vision Framework ซึ่งเป็นไลบรารีคอมพิวเตอร์วิทัศน์และแมชชีนเลิร์นนิงของ Apple ที่มีอยู่ในอุปกรณ์ iOS เพื่อแยกพื้นหลังและตัดสติกเกอร์</AboutParagraph>
    <AboutParagraph>คำมั่นทั้งหมดเกี่ยวกับสิทธิ์และฟีเจอร์ถูกดำเนินการและควบคุมโดย Apple ผ่านเอกสารความปลอดภัยของข้อมูลและความเป็นส่วนตัวภายในแอป</AboutParagraph>
    <AboutParagraph>เราเผยแพร่เอกสารเหล่านี้ในแอปและบนเว็บไซต์นี้. <AboutLineBreak /><Link to="/policy/data-security">ความปลอดภัยของข้อมูล</Link><AboutLineBreak /><Link to="/policy/privacy">ความเป็นส่วนตัว</Link></AboutParagraph>
    <AboutParagraph>ในอนาคตเราจะพยายามขยายฟีเจอร์ AI บน iOS เวอร์ชันล่าสุดด้วย Siri AI รวมถึงเวอร์ชันสำหรับ macOS และ iPadOS LiquidBoard มุ่งมั่นพัฒนาฟีเจอร์ AI เฉพาะในระดับระบบเพื่อปกป้องสิทธิ์และข้อมูลสำคัญของผู้ใช้</AboutParagraph>
  </>
);

export default AboutContent_th;
