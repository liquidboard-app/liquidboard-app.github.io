import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>นโยบายความปลอดภัยของข้อมูล</PolicyHeading>
                <PolicyParagraph>อัปเดตล่าสุด: 5 มิถุนายน 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard ถูกออกแบบด้วยแนวทางความเป็นส่วนตัวเป็นอันดับแรก ข้อมูลของคุณจะไม่ออกจากอุปกรณ์ของคุณเว้นแต่คุณจะเลือกเปิดใช้งาน iCloud Sync ด้วยตนเอง เราไม่มีเซิร์ฟเวอร์ ไม่มีบัญชีผู้ใช้ และไม่มีสิทธิ์เข้าถึงเนื้อหาของคุณ</PolicyParagraph>

                <PolicyHeading>การจัดเก็บข้อมูล</PolicyHeading>
                <PolicyParagraph>เนื้อหาทั้งหมดที่คุณสร้างใน LiquidBoard — ข้อความสั้น รูปภาพ และสติกเกอร์ — จะถูกเก็บไว้ในหนึ่งในสองที่:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>การเก็บข้อมูลบนอุปกรณ์</PolicyEmphasis>— จัดการโดย iOS และเข้าถึงได้เฉพาะ LiquidBoard แอปอื่นไม่สามารถอ่านข้อมูลของคุณได้</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (ตัวเลือก)</PolicyEmphasis>— ซิงค์ผ่าน Apple ID ส่วนตัวของคุณโดยใช้โครงสร้างพื้นฐาน CloudKit ที่เข้ารหัสของ Apple</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>ไม่มีข้อมูลใดถูกเก็บไว้บนเซิร์ฟเวอร์ของเรา เราไม่ดำเนินการโครงสร้างพื้นหลังใด ๆ</PolicyParagraph>

                <PolicyHeading>การเข้ารหัส</PolicyHeading>
                <PolicyParagraph>ข้อมูลของคุณถูกป้องกันโดย iOS และชั้นความปลอดภัยของ Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>พักผ่อน</PolicyEmphasis>— ข้อมูลที่จัดเก็บอยู่บนอุปกรณ์ของคุณถูกเข้ารหัสโดย iOS โดยใช้รหัสผ่านของอุปกรณ์และ Secure Enclave</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>ระหว่างการขนส่ง</PolicyEmphasis>— หากเปิดใช้งานการซิงค์ iCloud ข้อมูลจะถูกเข้ารหัสโดย CloudKit ของ Apple ก่อนที่จะถูกส่ง</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>สำรองข้อมูล iCloud</PolicyEmphasis>— หากอุปกรณ์ของคุณสำรองข้อมูลไปยัง iCloud ข้อมูลแอปจะถูกรวมอยู่ในระบบสำรองข้อมูลที่เข้ารหัสของ Apple</PolicyListItem>
                </PolicyList>

                <PolicyHeading>ความปลอดภัยของรูปถ่ายและภาพ</PolicyHeading>
                <PolicyParagraph>LiquidBoard เข้าถึงห้องสมุดรูปภาพของคุณก็ต่อเมื่อคุณเลือกที่จะเลือกหรือนำเข้ารูปภาพอย่างชัดเจน แอป:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>ไม่เข้าถึงคลังรูปภาพของคุณในพื้นหลัง</PolicyListItem>
                  <PolicyListItem>จะไม่อัปโหลดรูปภาพไปยังเซิร์ฟเวอร์ใดๆ</PolicyListItem>
                  <PolicyListItem>จัดเก็บภาพที่เลือกไว้ในเครื่องภายในคอนเทนเนอร์ที่แยกขอบเขตของแอป</PolicyListItem>
                  <PolicyListItem>ประมวลผลการสร้างสติกเกอร์ทั้งหมดบนอุปกรณ์</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>คุณสามารถยกเลิกการเข้าถึงภาพถ่ายได้ตลอดเวลาใน การตั้งค่า → ความเป็นส่วนตัวและความปลอดภัย → รูปภาพ</PolicyParagraph>

                <PolicyHeading>ความปลอดภัยของส่วนขยายแป้นพิมพ์</PolicyHeading>
                <PolicyParagraph>ส่วนขยายคีย์บอร์ดจะไม่เก็บ บันทึก หรือส่งข้อมูลการกดแป้นพิมพ์หรือข้อความที่คุณพิมพ์ในแอปอื่น ๆ</PolicyParagraph>
                <PolicyParagraph>การเข้าถึงแบบเต็มจำเป็นสำหรับส่วนขยายแป้นพิมพ์เพื่อวางภาพและสติกเกอร์ และเพื่อเข้าถึงการซิงค์ iCloud แม้ว่าจะเปิดใช้งานการเข้าถึงแบบเต็มแล้ว ส่วนขยายแป้นพิมพ์ก็ทำงานทั้งหมดภายในสภาพแวดล้อมที่ป้องกันของ iOS มันไม่มีความสามารถในการส่งข้อมูลไปยังเซิร์ฟเวอร์ภายนอก</PolicyParagraph>

                <PolicyHeading>ไม่มีการเข้าถึงข้อมูลโดยบุคคลที่สาม</PolicyHeading>
                <PolicyParagraph>LiquidBoard ไม่รวมการทำงานใด ๆ ดังต่อไปนี้:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>SDK สำหรับการวิเคราะห์หรือรายงานการชน เช่น Firebase หรือ Mixpanel</PolicyListItem>
                  <PolicyListItem>เครือข่ายโฆษณาหรือ SDK การติดตาม</PolicyListItem>
                  <PolicyListItem>บริการจัดเก็บหรือประมวลผลบนคลาวด์ของบุคคลที่สาม</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>เนื้อหาของคุณจะไม่เคยถูกแชร์หรือเข้าถึงโดยบุคคลที่สามใด ๆ</PolicyParagraph>

                <PolicyHeading>แซนด์บ็อกซ์ของแอป</PolicyHeading>
                <PolicyParagraph>LiquidBoard ทำงานใน sandbox แอปที่เข้มงวดของ iOS ซึ่งหมายความว่าแอปอื่น ๆ บนอุปกรณ์ของคุณไม่สามารถเข้าถึงข้อมูลของ LiquidBoard ได้ และ LiquidBoard ก็ไม่สามารถเข้าถึงข้อมูลของแอปอื่น ๆ ได้ ยกเว้นเนื้อหาที่คุณวางอย่างชัดเจนผ่านส่วนขยายคีย์บอร์ด</PolicyParagraph>

                <PolicyHeading>การควบคุมของคุณ</PolicyHeading>
                <PolicyParagraph>คุณมีการควบคุมข้อมูลของคุณอย่างเต็มที่ตลอดเวลา:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>เปิดหรือปิดการซิงค์ iCloud จากภายในแอป</PolicyListItem>
                  <PolicyListItem>เพิกถอนการเข้าถึงคลังรูปภาพในการตั้งค่า iOS</PolicyListItem>
                  <PolicyListItem>ปิดการเข้าถึงแบบเต็มสำหรับคีย์บอร์ดใน การตั้งค่า → ทั่วไป → คีย์บอร์ด → คีย์บอร์ด</PolicyListItem>
                  <PolicyListItem>ลบข้อมูลทั้งหมดโดยการลบแอป</PolicyListItem>
                </PolicyList>

                <PolicyHeading>ติดต่อ</PolicyHeading>
                <PolicyParagraph>หากคุณมีคำถามเกี่ยวกับความปลอดภัยของข้อมูล โปรดติดต่อเราที่:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>นโยบายความเป็นส่วนตัว</PolicyHeading>
                <PolicyParagraph>อัปเดตล่าสุด: 5 มิถุนายน 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard ("เรา", "ของเรา" หรือ "แอป") มุ่งมั่นที่จะปกป้องความเป็นส่วนตัวของคุณ นโยบายความเป็นส่วนตัวนี้อธิบายว่าพวกเราจัดการข้อมูลอย่างไรเมื่อคุณใช้ LiquidBoard และส่วนขยายแป้นพิมพ์ของมัน</PolicyParagraph>

                <PolicyHeading>ข้อมูลที่เรารวบรวม</PolicyHeading>
                <PolicyParagraph>LiquidBoard จะไม่เก็บ รวบรวม หรือส่งข้อมูลส่วนบุคคลใด ๆ ไปยังเซิร์ฟเวอร์ภายนอก ข้อมูลทั้งหมดที่คุณสร้างภายในแอป — รวมถึงข้อความภาพสแนป รูปภาพ สติ๊กเกอร์ หมวดหมู่ และการตั้งค่า — จะถูกเก็บไว้เฉพาะบนอุปกรณ์ของคุณหรือในบัญชี iCloud ส่วนตัวของคุณเท่านั้น</PolicyParagraph>

                <PolicyHeading>รูปภาพและภาพถ่าย</PolicyHeading>
                <PolicyParagraph>LiquidBoard อาจขอเข้าถึงห้องสมุดภาพของคุณด้วยวัตถุประสงค์ดังต่อไปนี้:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>การแทรกรูปภาพลงในสั้นของคุณ</PolicyListItem>
                  <PolicyListItem>สร้างสติกเกอร์แบบกำหนดเองจากรูปภาพของคุณ</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>รูปภาพที่คุณเลือกจะถูกเก็บไว้ในอุปกรณ์ของคุณโดยตรงและ/หรือซิงค์ไปยังบัญชี iCloud ส่วนบุคคลของคุณ เราไม่อัปโหลด ส่งต่อ หรือเข้าถึงรูปภาพของคุณในทางใด ๆ การเข้าถึงห้องสมุดรูปภาพจะใช้เฉพาะในขณะที่คุณเลือกภาพโดยตรงเท่านั้น — แอปจะไม่เข้าถึงห้องสมุดของคุณในพื้นหลัง</PolicyParagraph>

                <PolicyHeading>สติ๊กเกอร์</PolicyHeading>
                <PolicyParagraph>LiquidBoard ช่วยให้คุณสามารถ:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>สร้างสติกเกอร์แบบกำหนดเองจากภาพถ่ายของคุณเอง</PolicyListItem>
                  <PolicyListItem>แทรกสติ๊กเกอร์ผ่านการขยายคีย์บอร์ด</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>สติกเกอร์ที่คุณสร้างขึ้นจากรูปภาพของคุณจะถูกเก็บไว้บนอุปกรณ์ของคุณและ/หรือ iCloud เท่านั้น ไม่มีเนื้อหาสติกเกอร์หรือข้อมูลรูปภาพใด ๆ ถูกส่งไปยังเรา</PolicyParagraph>

                <PolicyHeading>ส่วนขยายคีย์บอร์ดและการเข้าถึงเต็มรูปแบบ</PolicyHeading>
                <PolicyParagraph>ส่วนขยายคีย์บอร์ดนี้จะไม่เก็บ บันทึก หรือส่งข้อมูลการกดแป้นพิมพ์หรือข้อความที่คุณพิมพ์ใดๆ</PolicyParagraph>
                <PolicyParagraph>ส่วนขยายแป้นพิมพ์ของ LiquidBoard จำเป็นต้องเปิดใช้งานการเข้าถึงเต็มรูปแบบเพื่อที่จะ:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>วางรูปภาพและสติกเกอร์ลงในแอปอื่น ๆ</PolicyListItem>
                  <PolicyListItem>ซิงค์สแน็ปเพ็ตและสติกเกอร์ของคุณผ่าน iCloud ข้ามอุปกรณ์ของคุณ</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>การเข้าถึงเต็มรูปแบบถูกใช้เฉพาะสำหรับฟีเจอร์เหล่านี้เท่านั้น แป้นพิมพ์จะไม่บันทึก อัด หรือส่งข้อมูลใด ๆ ที่คุณพิมพ์ในแอปอื่น ๆ ไม่มีข้อมูลใด ๆ ถูกส่งไปยังเซิร์ฟเวอร์ภายนอก</PolicyParagraph>

                <PolicyHeading>การซิงค์ iCloud</PolicyHeading>
                <PolicyParagraph>หากคุณเลือกเปิดใช้งานการซิงค์ iCloud ชิ้นส่วนข้อความ ภาพ และสติกเกอร์ของคุณจะถูกซิงค์ผ่านโครงสร้างพื้นฐาน iCloud ของ Apple โดยใช้ Apple ID ส่วนตัวของคุณ ข้อมูลนี้อยู่ภายใต้ นโยบายความเป็นส่วนตัวของ Apple เราไม่สามารถเข้าถึงข้อมูล iCloud ของคุณได้</PolicyParagraph>

                <PolicyHeading>การแบ่งปันข้อมูล</PolicyHeading>
                <PolicyParagraph>เราไม่ขาย แบ่งปัน หรือเปิดเผยข้อมูลของคุณต่อบุคคลที่สามใด ๆ เราไม่ใช้เครื่องมือวิเคราะห์ SDK โฆษณา หรือเครื่องมือติดตามใด ๆ ของบุคคลที่สาม</PolicyParagraph>

                <PolicyHeading>การเก็บรักษาและการลบข้อมูล</PolicyHeading>
                <PolicyParagraph>ข้อมูลของคุณยังคงอยู่บนอุปกรณ์ของคุณและ/หรือบัญชี iCloud ของคุณ และอยู่ภายใต้การควบคุมของคุณอย่างเต็มที่ คุณสามารถลบข้อมูลของคุณได้ทุกเมื่อโดย:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>การลบชิ้นส่วน รูปภาพ หรือสติกเกอร์แต่ละรายการภายในแอป</PolicyListItem>
                  <PolicyListItem>ยกเลิกการเข้าถึงคลังรูปภาพใน การตั้งค่า → ความเป็นส่วนตัว → รูปภาพ</PolicyListItem>
                  <PolicyListItem>การลบแอป ซึ่งจะลบข้อมูลที่เก็บไว้ในเครื่องทั้งหมด</PolicyListItem>
                  <PolicyListItem>ปิดการซิงค์ iCloud และลบข้อมูล iCloud ของแอปจาก การตั้งค่า → [ชื่อของคุณ] → iCloud → จัดการพื้นที่จัดเก็บ</PolicyListItem>
                </PolicyList>

                <PolicyHeading>ความเป็นส่วนตัวของเด็ก</PolicyHeading>
                <PolicyParagraph>LiquidBoard ไม่ได้เก็บข้อมูลจากเด็กอายุต่ำกว่า 13 ปีโดยเจตนา แอปไม่ได้เก็บข้อมูลส่วนบุคคลจากผู้ใช้ใด ๆ</PolicyParagraph>

                <PolicyHeading>การเปลี่ยนแปลงนโยบายนี้</PolicyHeading>
                <PolicyParagraph>เราสามารถปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว การเปลี่ยนแปลงใด ๆ จะถูกสะท้อนในแอปและบนเว็บไซต์ของเราพร้อมวันที่ที่อัปเดต</PolicyParagraph>

                <PolicyHeading>ติดต่อ</PolicyHeading>
                <PolicyParagraph>หากคุณมีคำถามใด ๆ เกี่ยวกับนโยบายความเป็นส่วนตัวนี้ กรุณาติดต่อเราที่:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>ข้อกำหนดในการใช้งาน</PolicyHeading>
                <PolicyParagraph>อัปเดตล่าสุด: 5 มิถุนายน 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>โดยการดาวน์โหลด ติดตั้ง หรือใช้ LiquidBoard ("แอป"), คุณตกลงที่จะผูกพันตามข้อกำหนดในการใช้งานนี้ หากคุณไม่ตกลงตามข้อกำหนดเหล่านี้ กรุณาอย่าใช้แอป</PolicyParagraph>

                <PolicyHeading>ใบอนุญาต</PolicyHeading>
                <PolicyParagraph>เราให้สิทธิ์คุณในการใช้งาน LiquidBoard ในลักษณะจำกัด ไม่เฉพาะตัว ไม่สามารถโอนต่อได้ และสามารถเพิกถอนได้ สำหรับวัตถุประสงค์ส่วนตัวที่ไม่ใช่เชิงพาณิชย์ของคุณ ภายใต้ข้อกำหนดเหล่านี้</PolicyParagraph>
                <PolicyParagraph>คุณไม่สามารถ:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>คัดลอก ปรับแก้ หรือแจกจ่ายแอปหรือเนื้อหาของมัน</PolicyListItem>
                  <PolicyListItem>ทำการวิศวกรรมย้อนกลับหรือลองแยกโค้ดต้นฉบับ</PolicyListItem>
                  <PolicyListItem>ใช้แอปเพื่อวัตถุประสงค์ที่ผิดกฎหมายหรือไม่ได้รับอนุญาตใดๆ</PolicyListItem>
                  <PolicyListItem>ขาย มอบสิทธิ์ใช้ต่อ หรือโอนการเข้าถึงแอปให้บุคคลที่สามใด ๆ</PolicyListItem>
                </PolicyList>

                <PolicyHeading>เนื้อหาของคุณ</PolicyHeading>
                <PolicyParagraph>คุณยังคงเป็นเจ้าของเต็มรูปแบบของข้อความ รูปภาพ และสติ๊กเกอร์ทั้งหมดที่คุณสร้างหรือนำเข้ามาใน LiquidBoard เราไม่อ้างสิทธิ์ใด ๆ ในเนื้อหาของคุณ</PolicyParagraph>
                <PolicyParagraph>คุณเป็นผู้รับผิดชอบแต่เพียงผู้เดียวในการรับประกันว่าคอนเทนต์ที่คุณสร้างหรือวางโดยใช้แอปจะไม่ละเมิดสิทธิของบุคคลที่สามใด ๆ รวมถึงลิขสิทธิ์ เครื่องหมายการค้า หรือสิทธิส่วนบุคคล</PolicyParagraph>

                <PolicyHeading>การใช้งานที่ยอมรับได้</PolicyHeading>
                <PolicyParagraph>คุณตกลงที่จะไม่ใช้ LiquidBoard เพื่อสร้าง เก็บ หรือเผยแพร่เนื้อหาที่:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>เป็นสิ่งผิดกฎหมาย เป็นอันตราย คุกคาม หรือก่อความรำคาญ</PolicyListItem>
                  <PolicyListItem>ละเมิดสิทธิ์ทรัพย์สินทางปัญญาของผู้อื่น</PolicyListItem>
                  <PolicyListItem>มีมัลแวร์ ไวรัส หรือโค้ดที่เป็นอันตราย</PolicyListItem>
                  <PolicyListItem>ละเมิดกฎหมายท้องถิ่น ระดับชาติ หรือระหว่างประเทศที่ใช้บังคับใด ๆ</PolicyListItem>
                </PolicyList>

                <PolicyHeading>การซื้อในแอป</PolicyHeading>
                <PolicyParagraph>LiquidBoard มีการซื้อในแอปที่เป็นตัวเลือกเพื่อปลดล็อกฟีเจอร์หรือเนื้อหาเพิ่มเติม การซื้อทั้งหมดจะดำเนินการโดย Apple ผ่าน App Store และอยู่ภายใต้ข้อกำหนดการขายของ Apple</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>การซื้อไม่สามารถขอคืนเงินได้ ยกเว้นตามที่กฎหมายที่ใช้บังคับหรือ นโยบายการคืนเงินของ Apple กำหนด</PolicyListItem>
                  <PolicyListItem>ราคาสามารถแตกต่างกันไปตามภูมิภาคและจะแสดงเป็นสกุลเงินท้องถิ่นของคุณในขณะซื้อ</PolicyListItem>
                  <PolicyListItem>ฟีเจอร์ที่ซื้อจะเชื่อมโยงกับ Apple ID ของคุณและสามารถกู้คืนบนอุปกรณ์ใดก็ได้ที่ลงชื่อเข้าใช้ด้วย Apple ID เดียวกัน</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>หากต้องการขอเงินคืน กรุณาติดต่อ Apple โดยตรงที่:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>ส่วนขยายคีย์บอร์ดและการเข้าถึงเต็มรูปแบบ</PolicyHeading>
                <PolicyParagraph>การเปิดใช้งานการเข้าถึงเต็มสำหรับส่วนขยายแป้นพิมพ์จำเป็นสำหรับการวางภาพและสติกเกอร์ลงในแอปอื่น ๆ และเพื่อเปิดใช้งานการซิงค์ iCloud การเข้าถึงเต็มไม่ได้ให้สิทธิ์เราในการเข้าถึงสิ่งที่คุณพิมพ์</PolicyParagraph>
                <PolicyParagraph>คุณรับทราบว่าการเปิดการเข้าถึงแบบเต็มบน iOS จะมีการแสดงประกาศของระบบแจ้งให้คุณทราบว่าผู้พัฒนาแป้นพิมพ์อาจเข้าถึงการพิมพ์ของคุณได้ เราต้องการชี้แจงอย่างชัดเจนว่า LiquidBoard จะไม่เก็บ บันทึก หรือส่งข้อมูลการกดแป้นพิมพ์ใดๆ</PolicyParagraph>

                <PolicyHeading>การซิงค์ iCloud</PolicyHeading>
                <PolicyParagraph>การซิงค์ iCloud เป็นคุณสมบัติที่ไม่บังคับซึ่งใช้บัญชี iCloud ส่วนตัวของคุณในการซิงค์ข้อมูลของคุณข้ามอุปกรณ์ การใช้ iCloud อยู่ภายใต้ข้อกำหนดและเงื่อนไขของ Apple เราไม่รับผิดชอบต่อการสูญหายของข้อมูลใด ๆ ที่เกิดจากการหยุดให้บริการของ iCloud</PolicyParagraph>

                <PolicyHeading>ข้อจำกัดความรับประกัน</PolicyHeading>
                <PolicyParagraph>LiquidBoard มีให้บริการ "ตามสภาพ" และ "ตามที่มี" โดยไม่มีการรับประกันใด ๆ ทั้งทางตรงหรือโดยนัย รวมถึงแต่ไม่จำกัดเพียงการรับประกันเรื่องความเหมาะสมในการขาย ความเหมาะสมสำหรับวัตถุประสงค์เฉพาะ หรือการไม่ละเมิดลิขสิทธิ์</PolicyParagraph>
                <PolicyParagraph>เราไม่รับประกันว่าแอปจะไม่มีการขัดจังหวะ ปราศจากความผิดพลาด หรือปราศจากไวรัสหรือส่วนประกอบที่เป็นอันตรายอื่น ๆ</PolicyParagraph>

                <PolicyHeading>ข้อจำกัดความรับผิด</PolicyHeading>
                <PolicyParagraph>ในขอบเขตสูงสุดที่กฎหมายที่ใช้บังคับอนุญาต เราจะไม่รับผิดชอบต่อความเสียหายทางอ้อม เหตุการณ์พิเศษ ความเสียหายเชิงต่อเนื่อง หรือความเสียหายเชิงลงโทษใด ๆ รวมถึงแต่ไม่จำกัดเฉพาะการสูญเสียข้อมูล การสูญเสียกำไร หรือการสูญเสียความเชื่อมั่น ที่เกิดจากการใช้งานหรือไม่สามารถใช้งานแอปพลิเคชันได้ของคุณ</PolicyParagraph>

                <PolicyHeading>การเลิกจ้าง</PolicyHeading>
                <PolicyParagraph>เราขอสงวนสิทธิ์ในการยุติหรือจำกัดการเข้าถึงแอปของคุณได้ทุกเมื่อโดยไม่ต้องแจ้งให้ทราบล่วงหน้า สำหรับพฤติกรรมที่เราเชื่อว่าฝ่าฝืนข้อกำหนดเหล่านี้หรือเป็นอันตรายต่อผู้ใช้คนอื่น เราเอง หรือบุคคลที่สาม</PolicyParagraph>
                <PolicyParagraph>คุณสามารถหยุดใช้แอปได้ทุกเวลาโดยการลบมันออกจากอุปกรณ์ของคุณ</PolicyParagraph>

                <PolicyHeading>การเปลี่ยนแปลงข้อกำหนดเหล่านี้</PolicyHeading>
                <PolicyParagraph>เราอาจปรับปรุงข้อกำหนดในการใช้งานเหล่านี้เป็นครั้งคราว การใช้งานแอปต่อไปหลังจากที่มีการโพสต์การเปลี่ยนแปลงถือว่าคุณยอมรับข้อกำหนดที่แก้ไขแล้ว เราจะแจ้งให้คุณทราบเกี่ยวกับการเปลี่ยนแปลงที่สำคัญผ่านทางแอปหรือเว็บไซต์ของเรา</PolicyParagraph>

                <PolicyHeading>กฎหมายที่ใช้บังคับ</PolicyHeading>
                <PolicyParagraph>ข้อกำหนดเหล่านี้อยู่ภายใต้การควบคุมและตีความตามกฎหมายของเขตอำนาจศาลที่ผู้พัฒนาตั้งอยู่ โดยไม่คำนึงถึงหลักการความขัดแย้งของกฎหมาย</PolicyParagraph>

                <PolicyHeading>ติดต่อ</PolicyHeading>
                <PolicyParagraph>หากคุณมีคำถามเกี่ยวกับข้อกำหนดเหล่านี้ กรุณาติดต่อเราที่:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>นโยบายการชำระเงินและการคืนเงิน</PolicyHeading>
                <PolicyParagraph>อัปเดตล่าสุด: 5 มิถุนายน 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard มีตัวเลือกการซื้อภายในแอปเพื่อปลดล็อกฟีเจอร์พรีเมียม การชำระเงินทั้งหมดดำเนินการโดย Apple ผ่าน App Store — เราไม่ได้ดำเนินการ เก็บ หรือเข้าถึงข้อมูลการชำระเงินของคุณ</PolicyParagraph>

                <PolicyHeading>สิ่งที่คุณสามารถซื้อได้</PolicyHeading>
                <PolicyParagraph>LiquidBoard มีข้อเสนอการซื้อเสริมดังต่อไปนี้:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>ฟีเจอร์พรีเมียม — ปลดล็อกครั้งเดียวหรือสมัครสมาชิกเพื่อใช้งานฟังก์ชันแอปขั้นสูง</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>การซื้อและราคาที่สามารถทำได้จะแสดงภายในแอปในเวลาที่ทำการซื้อ ราคาอาจแตกต่างกันไปตามภูมิภาคและจะแสดงเป็นสกุลเงินท้องถิ่นของคุณ</PolicyParagraph>

                <PolicyHeading>การประมวลผลการชำระเงิน</PolicyHeading>
                <PolicyParagraph>รายการธุรกรรมทั้งหมดจะถูกดำเนินการอย่างปลอดภัยโดย Apple เราไม่เคยเห็นหรือเก็บบัตรเครดิต ที่อยู่การเรียกเก็บเงิน หรือรายละเอียดการชำระเงินใด ๆ ของคุณ</PolicyParagraph>
                <PolicyParagraph>โดยการทำการซื้อ คุณตกลงตามข้อกำหนดการขายของ App Store ของ Apple วิธีการชำระเงินที่คุณได้ลงทะเบียนไว้กับ Apple จะถูกเรียกเก็บในเวลาที่ยืนยันการซื้อ</PolicyParagraph>

                <PolicyHeading>คืนการซื้อ</PolicyHeading>
                <PolicyParagraph>หากคุณติดตั้ง LiquidBoard ใหม่หรือสลับไปยังอุปกรณ์ใหม่ คุณสามารถกู้คืนการซื้อทั้งหมดก่อนหน้าได้โดยไม่มีค่าใช้จ่ายเพิ่มเติมโดยใช้ตัวเลือกกู้คืนการซื้อภายในแอป การซื้อจะผูกกับ Apple ID ของคุณและสามารถใช้ได้บนอุปกรณ์ทั้งหมดที่เข้าสู่ระบบด้วยบัญชีเดียวกัน</PolicyParagraph>

                <PolicyHeading>การสมัครสมาชิก</PolicyHeading>
                <PolicyParagraph>หาก LiquidBoard มีการซื้อแบบสมัครสมาชิก:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>การสมัครสมาชิกจะต่ออายุโดยอัตโนมัติ เว้นแต่จะยกเลิกอย่างน้อย 24 ชั่วโมงก่อนสิ้นสุดรอบการเรียกเก็บเงินปัจจุบัน</PolicyListItem>
                  <PolicyListItem>Apple ID ของคุณจะถูกเรียกเก็บเงินเพื่อการต่ออายุภายใน 24 ชั่วโมงก่อนสิ้นสุดระยะเวลาปัจจุบัน</PolicyListItem>
                  <PolicyListItem>คุณสามารถจัดการหรือยกเลิกการสมัครสมาชิกได้ทุกเมื่อใน การตั้งค่า → [ชื่อของคุณ] → การสมัครสมาชิก</PolicyListItem>
                  <PolicyListItem>การยกเลิกการสมัครสมาชิกจะมีผลเมื่อสิ้นสุดช่วงระยะเวลาที่ชำระเงินในปัจจุบัน — คุณยังสามารถเข้าถึงได้จนถึงเวลานั้น</PolicyListItem>
                  <PolicyListItem>ช่วงทดลองใช้งานฟรี หากมีการเสนอ จะเปลี่ยนเป็นการสมัครสมาชิกแบบชำระเงิน เว้นแต่จะยกเลิกก่อนที่ช่วงทดลองจะสิ้นสุด</PolicyListItem>
                </PolicyList>

                <PolicyHeading>นโยบายการคืนเงิน</PolicyHeading>
                <PolicyParagraph>เราไม่ดำเนินการคืนเงินโดยตรง คำขอคืนเงินทั้งหมดจะต้องส่งไปยัง Apple เนื่องจากพวกเขาเป็นผู้ค้าหลักของธุรกรรมทั้งหมดใน App Store</PolicyParagraph>
                <PolicyParagraph>Apple จัดการเรื่องการคืนเงินตามดุลยพินิจของพวกเขาตามนโยบายการคืนเงิน กรณีที่มีสิทธิ์ทั่วไป ได้แก่ การซื้อโดยไม่ได้ตั้งใจ การเรียกเก็บเงินโดยไม่ได้รับอนุญาต หรือการซื้อสินค้าที่ไม่ได้ทำงานตามที่อธิบายไว้</PolicyParagraph>
                <PolicyParagraph>เพื่อขอเงินคืนจากแอปเปิล:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>ลองดูสิ<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>และลงชื่อเข้าใช้ด้วย Apple ID ของคุณ</PolicyListItem>
                  <PolicyListItem>ค้นหาการซื้อ LiquidBoard และแตะ รายงานปัญหา</PolicyListItem>
                  <PolicyListItem>เลือกเหตุผลและส่งคำขอของคุณ</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>แอปเปิลมักจะตอบกลับภายในไม่กี่วันทำการ การตัดสินใจเรื่องการคืนเงินทำโดยแอปเปิลเพียงผู้เดียว</PolicyParagraph>

                <PolicyHeading>การเปลี่ยนแปลงราคา</PolicyHeading>
                <PolicyParagraph>เราขอสงวนสิทธิ์ในการเปลี่ยนแปลงราคาของการซื้อภายในแอปได้ทุกเวลา การเปลี่ยนแปลงราคาในการสมัครสมาชิกจะแจ้งให้ทราบล่วงหน้าผ่านแอปหรือ App Store และจะมีผลในช่วงเริ่มต้นรอบบิลถัดไปของคุณ คุณจะได้รับการแจ้งเตือนจาก Apple ก่อนที่การเปลี่ยนแปลงราคาสมัครสมาชิกใด ๆ จะมีผลบังคับใช้</PolicyParagraph>

                <PolicyHeading>การซื้อที่ล้มเหลวหรือไม่สมบูรณ์</PolicyHeading>
                <PolicyParagraph>หากการซื้อไม่สำเร็จหรือคุณถูกเรียกเก็บเงินแต่ไม่ได้รับเนื้อหา กรุณาลองกู้คืนการซื้อภายในแอปก่อน หากปัญหายังคงอยู่ โปรดติดต่อเราที่<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>และเราจะทำการสอบสวนโดยเร็ว</PolicyParagraph>

                <PolicyHeading>ติดต่อ</PolicyHeading>
                <PolicyParagraph>สำหรับคำถามเกี่ยวกับการเรียกเก็บเงินหรือปัญหาการซื้อ โปรดติดต่อเราที่:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>สำหรับการขอคืนเงิน กรุณาใช้ช่องทางอย่างเป็นทางการของแอปเปิ้ล:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
