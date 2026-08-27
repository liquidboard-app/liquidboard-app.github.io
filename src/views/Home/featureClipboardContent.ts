export type FeatureClipboardKey = 'text' | 'image' | 'sticker';

export type FeatureClipboardContent = Record<FeatureClipboardKey, { title: string; description: string }>;

const content: Record<string, FeatureClipboardContent> = {
  en: {
    text: { title: 'Everyday text, ready to reuse', description: 'Create and enter the text you use most often from the iOS keyboard in many ways: type it, add it from contacts, use voice, scan text, or import it from the Files app.' },
    image: { title: 'Every image you use often', description: 'Add the images you use most to send quickly: QR codes, product portfolios, art references and mockup samples.' },
    sticker: { title: 'Create and paste favourite stickers quickly', description: 'Create stickers from existing images or photos you take, then send them from the iOS keyboard to express every emotion.' },
  },
  vi: {
    text: { title: 'Mọi văn bản lặp lại thường ngày', description: 'Tạo và lưu trữ các văn bản, liên kết, mã màu dùng thường xuyên từ nhiều phương thức nhập. Gửi chúng đến ô nhập liệu từ bàn phím iOS ở mọi ứng dụng khác.' },
    image: { title: 'Mọi hình ảnh dùng thường xuyên', description: 'Thêm các hình ảnh dùng thường xuyên để gửi nhanh : Mã QR, portfolio sản phẩm, ảnh nghệ thuật, ảnh mẫu mockup.' },
    sticker: { title: 'Tạo và dán sticker yêu thích nhanh chóng', description: 'Tạo sticker từ ảnh sẵn có hoặc từ ảnh chụp trực tiếp và gửi nó để thể hiện mọi cảm xúc từ bàn phím.' },
  },
  de: {
    text: { title: 'Texte für den täglichen Gebrauch', description: 'Erstelle und füge häufig verwendete Texte direkt über die iOS-Tastatur auf verschiedene Arten ein: tippe sie ein, übernimm sie aus Kontakten, per Sprache, Texterkennung oder aus der Dateien-App.' },
    image: { title: 'Jedes Bild sofort griffbereit.', description: 'Sammle deine wichtigsten Bilder und bringe sie direkt aus der Zwischenablage in die Unterhaltung.' },
    sticker: { title: 'Mach jede Antwort zu deiner eigenen.', description: 'Speichere Lieblingssticker und halte ausdrucksstarke Reaktionen für den richtigen Moment bereit.' },
  },
  es: {
    text: { title: 'Textos cotidianos que repites a menudo', description: 'Crea e introduce los textos que más usas desde el teclado de iOS de muchas formas: escríbelos, añádelos desde contactos, usa la voz, escanea texto o impórtalos desde la app Archivos.' },
    image: { title: 'Cada imagen al alcance.', description: 'Reúne las imágenes que más usas y llévalas directamente del portapapeles a la conversación.' },
    sticker: { title: 'Haz tuya cada respuesta.', description: 'Guarda tus stickers favoritos y ten reacciones expresivas listas para cada momento.' },
  },
  fr: {
    text: { title: 'Tous vos textes récurrents du quotidien', description: 'Créez et saisissez les textes que vous utilisez souvent depuis le clavier iOS de différentes façons : en les tapant, depuis vos contacts, par la voix, en scannant du texte ou depuis l’app Fichiers.' },
    image: { title: 'Chaque image à portée de main.', description: 'Rassemblez les images que vous utilisez le plus et envoyez-les depuis le presse-papiers.' },
    sticker: { title: 'Faites de chaque réponse la vôtre.', description: 'Enregistrez vos stickers favoris et gardez des réactions expressives prêtes au bon moment.' },
  },
  hi: {
    text: { title: 'रोज़ दोहराए जाने वाले सभी टेक्स्ट', description: 'iOS कीबोर्ड से अक्सर इस्तेमाल होने वाले टेक्स्ट कई तरीकों से बनाएं और दर्ज करें: टाइप करके, संपर्कों से जोड़कर, आवाज़ से, टेक्स्ट स्कैन करके या Files ऐप से इंपोर्ट करके।' },
    image: { title: 'हर तस्वीर आपकी पहुंच में।', description: 'अपनी सबसे उपयोगी तस्वीरें रखें और उन्हें क्लिपबोर्ड से सीधे बातचीत में भेजें।' },
    sticker: { title: 'हर जवाब को अपना बनाएं।', description: 'पसंदीदा स्टिकर सहेजें और सही पल के लिए भावपूर्ण प्रतिक्रियाएं तैयार रखें।' },
  },
  id: {
    text: { title: 'Semua teks rutin yang sering diulang', description: 'Buat dan masukkan teks yang sering digunakan dari keyboard iOS dengan banyak cara: ketik sendiri, tambahkan dari kontak, gunakan suara, pindai teks, atau impor dari aplikasi Files.' },
    image: { title: 'Setiap gambar dalam jangkauan.', description: 'Kumpulkan gambar yang paling sering dipakai dan kirim langsung dari papan klip ke percakapan.' },
    sticker: { title: 'Jadikan setiap balasan milik Anda.', description: 'Simpan stiker favorit dan siapkan reaksi ekspresif untuk momen yang tepat.' },
  },
  it: {
    text: { title: 'Tutti i testi ricorrenti di ogni giorno', description: 'Crea e inserisci i testi che usi più spesso dalla tastiera iOS in tanti modi: digitandoli, aggiungendoli dai contatti, con la voce, tramite scansione del testo o dall’app File.' },
    image: { title: 'Ogni immagine a portata di mano.', description: 'Raccogli le immagini che usi di più e portale dal clipboard direttamente nella conversazione.' },
    sticker: { title: 'Rendi personale ogni risposta.', description: 'Salva gli sticker preferiti e tieni pronte reazioni espressive per ogni momento.' },
  },
  ja: {
    text: { title: '毎日くり返し使うすべてのテキスト', description: 'よく使うテキストをiOSキーボードからさまざまな方法で作成・入力できます。直接入力、連絡先からの追加、音声入力、テキストのスキャン、ファイルアプリからの読み込みに対応します。' },
    image: { title: 'すべての画像を、すぐ手元に。', description: 'よく使う画像を集めて、クリップボードから会話へ直接送れます。' },
    sticker: { title: 'すべての返信を、あなたらしく。', description: 'お気に入りのステッカーを保存し、表情豊かなリアクションをいつでも使えるようにします。' },
  },
  ko: {
    text: { title: '매일 반복해 쓰는 모든 텍스트', description: '자주 사용하는 텍스트를 iOS 키보드에서 여러 방식으로 만들고 입력하세요. 직접 입력하거나 연락처에서 추가하고, 음성을 사용하거나 텍스트를 스캔하고, 파일 앱에서 가져올 수 있습니다.' },
    image: { title: '모든 이미지를 손쉽게.', description: '자주 쓰는 이미지를 모아 클립보드에서 대화로 바로 보내세요.' },
    sticker: { title: '모든 답장을 나답게.', description: '좋아하는 스티커를 저장하고 알맞은 순간을 위한 표현을 준비하세요.' },
  },
  pl: {
    text: { title: 'Wszystkie codziennie powtarzane teksty', description: 'Twórz i wprowadzaj często używane teksty z klawiatury iOS na wiele sposobów: wpisując je, dodając z kontaktów, używając głosu, skanując tekst lub importując z aplikacji Pliki.' },
    image: { title: 'Każdy obraz pod ręką.', description: 'Zbieraj najczęściej używane obrazy i przenoś je ze schowka prosto do rozmowy.' },
    sticker: { title: 'Niech każda odpowiedź będzie Twoja.', description: 'Zapisuj ulubione naklejki i miej ekspresyjne reakcje gotowe na właściwy moment.' },
  },
  'pt-BR': {
    text: { title: 'Todos os textos recorrentes do dia a dia', description: 'Crie e insira os textos que você usa com frequência pelo teclado do iOS de várias formas: digitando, adicionando a partir dos contatos, usando a voz, escaneando texto ou importando do app Arquivos.' },
    image: { title: 'Cada imagem ao seu alcance.', description: 'Reúna as imagens que mais usa e leve-as da área de transferência direto para a conversa.' },
    sticker: { title: 'Faça cada resposta ser sua.', description: 'Salve seus adesivos favoritos e mantenha reações expressivas prontas para o momento certo.' },
  },
  ru: {
    text: { title: 'Все повседневные повторяющиеся тексты', description: 'Создавайте и вводите часто используемые тексты с клавиатуры iOS разными способами: печатайте их, добавляйте из контактов, используйте голос, сканируйте текст или импортируйте из приложения «Файлы».' },
    image: { title: 'Каждое изображение под рукой.', description: 'Собирайте часто используемые изображения и отправляйте их из буфера прямо в беседу.' },
    sticker: { title: 'Сделайте каждый ответ своим.', description: 'Сохраняйте любимые стикеры и держите выразительные реакции наготове.' },
  },
  th: {
    text: { title: 'ข้อความที่ใช้ซ้ำในทุกวัน', description: 'สร้างและป้อนข้อความที่ใช้บ่อยจากแป้นพิมพ์ iOS ได้หลายวิธี: พิมพ์เอง เพิ่มจากรายชื่อ ใช้เสียง สแกนข้อความ หรือนำเข้าจากแอปไฟล์' },
    image: { title: 'ทุกภาพอยู่ใกล้มือ', description: 'รวบรวมภาพที่ใช้บ่อย แล้วส่งจากคลิปบอร์ดเข้าสู่บทสนทนาได้ทันที' },
    sticker: { title: 'ให้ทุกคำตอบเป็นตัวคุณ', description: 'บันทึกสติกเกอร์โปรดและเตรียมรีแอ็กชันที่สื่ออารมณ์ไว้สำหรับทุกช่วงเวลา' },
  },
  tl: {
    text: { title: 'Lahat ng tekstong paulit-ulit mong ginagamit araw-araw', description: 'Gumawa at maglagay ng madalas mong gamitin na text mula sa iOS keyboard sa maraming paraan: i-type ito, idagdag mula sa contacts, gamitin ang boses, mag-scan ng text, o i-import mula sa Files app.' },
    image: { title: 'Bawat larawan ay abot-kamay.', description: 'Tipunin ang madalas mong gamitin na larawan at ipadala ito mula clipboard diretso sa usapan.' },
    sticker: { title: 'Gawing iyo ang bawat tugon.', description: 'I-save ang paboritong sticker at ihanda ang mga ekspresibong reaksyon para sa tamang sandali.' },
  },
  tr: {
    text: { title: 'Her gün tekrarlanan tüm metinler', description: 'Sık kullandığınız metinleri iOS klavyesinden birçok yöntemle oluşturun ve girin: yazarak, kişilerden ekleyerek, sesle, metin tarayarak veya Dosyalar uygulamasından içe aktararak.' },
    image: { title: 'Her görsel elinizin altında.', description: 'En çok kullandığınız görselleri toplayın ve panodan doğrudan konuşmaya taşıyın.' },
    sticker: { title: 'Her yanıt size özgü olsun.', description: 'Favori çıkartmalarınızı kaydedin ve doğru an için etkileyici tepkileri hazır tutun.' },
  },
  'zh-CN': {
    text: { title: '日常反复使用的所有文本', description: '通过 iOS 键盘以多种方式创建和输入常用文本：直接输入、从联系人添加、使用语音、扫描文本，或从“文件”应用导入。' },
    image: { title: '每张图片，随手可得。', description: '收集最常用的图片，直接从剪贴板发送到对话中。' },
    sticker: { title: '让每一次回复都更像你。', description: '保存喜爱的贴纸，随时为恰当的时刻准备生动回应。' },
  },
  'zh-TW': {
    text: { title: '日常重複使用的所有文字', description: '透過 iOS 鍵盤以多種方式建立和輸入常用文字：直接輸入、從聯絡人加入、使用語音、掃描文字，或從「檔案」App 匯入。' },
    image: { title: '每張圖片，都在手邊。', description: '收集最常使用的圖片，直接從剪貼簿送進對話。' },
    sticker: { title: '讓每一次回覆都更像你。', description: '儲存喜愛的貼圖，隨時為恰當時刻準備生動反應。' },
  },
  bn: {
    text: { title: 'প্রতিদিন বারবার ব্যবহার করা সব লেখা', description: 'iOS কিবোর্ড থেকে বিভিন্নভাবে প্রায়ই ব্যবহার করা লেখা তৈরি ও লিখুন: টাইপ করে, পরিচিতি থেকে যোগ করে, ভয়েস ব্যবহার করে, লেখা স্ক্যান করে বা Files অ্যাপ থেকে ইমপোর্ট করে।' },
    image: { title: 'প্রতিটি ছবি হাতের নাগালে।', description: 'সবচেয়ে ব্যবহৃত ছবিগুলো রাখুন এবং ক্লিপবোর্ড থেকে সরাসরি কথোপকথনে পাঠান।' },
    sticker: { title: 'প্রতিটি উত্তর হোক আপনার মতো।', description: 'প্রিয় স্টিকার সংরক্ষণ করুন এবং সঠিক মুহূর্তের জন্য অভিব্যক্তিপূর্ণ প্রতিক্রিয়া প্রস্তুত রাখুন।' },
  },
};

export const getFeatureClipboardContent = (lang: string): FeatureClipboardContent => content[lang] ?? content.en;
