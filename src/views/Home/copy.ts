type HomeCopy = {
  downloadForIPhone: string;
  clipboardFeatures: string[];
};

type LocalizedHomeCopy = HomeCopy & { clipboardTitle: string };

const copy: Record<string, HomeCopy> = {
  en: { downloadForIPhone: 'Download for iPhone', clipboardFeatures: ['Sample texts', 'Email templates', 'Contact information', 'Color codes', 'AI prompts', 'QR codes', 'Favorite photos', 'Meme images', 'Create stickers', 'Groups', 'Export files', 'Expiring', 'iCloud sync'] },
  vi: { downloadForIPhone: 'Tải xuống cho iPhone', clipboardFeatures: ['Văn bản mẫu', 'Email mẫu', 'Thông tin liên hệ', 'Mã màu', 'AI Prompt', 'Mã QR', 'Ảnh yêu thích', 'Ảnh meme', 'Tạo nhãn dán', 'Phân nhóm', 'Xuất file', 'Nội dung tự huỷ', 'Đồng bộ iCloud'] },
  ja: { downloadForIPhone: 'iPhone向けにダウンロード', clipboardFeatures: ['定型文', 'メールテンプレート', '連絡先情報', 'カラーコード', 'AIプロンプト', 'QRコード', 'お気に入りの写真', 'ミーム画像', 'ステッカーを作成', 'グループ分け', 'ファイルを書き出す', '自動消去コンテンツ', 'iCloud同期'] },
  es: { downloadForIPhone: 'Descargar para iPhone', clipboardFeatures: ['Textos de ejemplo', 'Plantillas de email', 'Información de contacto', 'Códigos de color', 'Prompts de IA', 'Códigos QR', 'Fotos favoritas', 'Imágenes meme', 'Crear stickers', 'Grupos', 'Exportar archivos', 'Contenido con caducidad', 'Sincronización con iCloud'] },
  'zh-TW': { downloadForIPhone: '下載 iPhone 版', clipboardFeatures: ['文字範本', 'Email 範本', '聯絡資訊', '色碼', 'AI 提示詞', 'QR Code', '喜愛的照片', '迷因圖片', '製作貼圖', '群組分類', '匯出檔案', '自動刪除內容', 'iCloud 同步'] },
  'pt-BR': { downloadForIPhone: 'Baixar para iPhone', clipboardFeatures: ['Textos prontos', 'Modelos de email', 'Informações de contato', 'Códigos de cores', 'Prompts de IA', 'Códigos QR', 'Fotos favoritas', 'Imagens de meme', 'Criar stickers', 'Grupos', 'Exportar arquivos', 'Conteúdo temporário', 'Sincronização com iCloud'] },
  fr: { downloadForIPhone: 'Télécharger pour iPhone', clipboardFeatures: ['Textes modèles', 'Modèles d’email', 'Coordonnées', 'Codes couleur', 'Prompts IA', 'Codes QR', 'Photos favorites', 'Images mèmes', 'Créer des stickers', 'Groupes', 'Exporter des fichiers', 'Contenu éphémère', 'Synchronisation iCloud'] },
  de: { downloadForIPhone: 'Für iPhone laden', clipboardFeatures: ['Textvorlagen', 'E-Mail-Vorlagen', 'Kontaktinformationen', 'Farbcodes', 'KI-Prompts', 'QR-Codes', 'Lieblingsfotos', 'Meme-Bilder', 'Sticker erstellen', 'Gruppen', 'Dateien exportieren', 'Ablaufende Inhalte', 'iCloud-Synchronisierung'] },
  ru: { downloadForIPhone: 'Скачать для iPhone', clipboardFeatures: ['Шаблоны текста', 'Шаблоны писем', 'Контактные данные', 'Коды цветов', 'Промпты ИИ', 'QR-коды', 'Любимые фото', 'Мемы', 'Создание стикеров', 'Группы', 'Экспорт файлов', 'Исчезающий контент', 'Синхронизация iCloud'] },
  ko: { downloadForIPhone: 'iPhone용 다운로드', clipboardFeatures: ['샘플 텍스트', '이메일 템플릿', '연락처 정보', '색상 코드', 'AI 프롬프트', 'QR 코드', '즐겨찾는 사진', '밈 이미지', '스티커 만들기', '그룹', '파일 내보내기', '자동 삭제 콘텐츠', 'iCloud 동기화'] },
  hi: { downloadForIPhone: 'iPhone के लिए डाउनलोड करें', clipboardFeatures: ['नमूना टेक्स्ट', 'ईमेल टेम्पलेट', 'संपर्क जानकारी', 'रंग कोड', 'AI प्रॉम्प्ट', 'QR कोड', 'पसंदीदा फ़ोटो', 'मीम इमेज', 'स्टिकर बनाएँ', 'समूह', 'फ़ाइल एक्सपोर्ट', 'स्वतः मिटने वाला कंटेंट', 'iCloud सिंक'] },
  bn: { downloadForIPhone: 'iPhone-এর জন্য ডাউনলোড করুন', clipboardFeatures: ['নমুনা টেক্সট', 'ইমেইল টেমপ্লেট', 'যোগাযোগের তথ্য', 'রঙের কোড', 'AI প্রম্পট', 'QR কোড', 'প্রিয় ছবি', 'মিম ছবি', 'স্টিকার তৈরি', 'গ্রুপ', 'ফাইল এক্সপোর্ট', 'স্বয়ংক্রিয়ভাবে মুছে যাওয়া কনটেন্ট', 'iCloud সিঙ্ক'] },
  id: { downloadForIPhone: 'Unduh untuk iPhone', clipboardFeatures: ['Teks contoh', 'Template email', 'Informasi kontak', 'Kode warna', 'Prompt AI', 'Kode QR', 'Foto favorit', 'Gambar meme', 'Buat stiker', 'Grup', 'Ekspor file', 'Konten kedaluwarsa', 'Sinkronisasi iCloud'] },
  it: { downloadForIPhone: 'Scarica per iPhone', clipboardFeatures: ['Testi di esempio', 'Modelli email', 'Informazioni di contatto', 'Codici colore', 'Prompt IA', 'Codici QR', 'Foto preferite', 'Immagini meme', 'Crea sticker', 'Gruppi', 'Esporta file', 'Contenuti a scadenza', 'Sincronizzazione iCloud'] },
  th: { downloadForIPhone: 'ดาวน์โหลดสำหรับ iPhone', clipboardFeatures: ['ข้อความตัวอย่าง', 'เทมเพลตอีเมล', 'ข้อมูลติดต่อ', 'รหัสสี', 'AI Prompt', 'รหัส QR', 'รูปโปรด', 'รูปมีม', 'สร้างสติกเกอร์', 'การจัดกลุ่ม', 'ส่งออกไฟล์', 'เนื้อหาลบอัตโนมัติ', 'ซิงค์ iCloud'] },
  tl: { downloadForIPhone: 'I-download para sa iPhone', clipboardFeatures: ['Mga sample na text', 'Mga email template', 'Contact information', 'Mga color code', 'AI prompt', 'Mga QR code', 'Paboritong larawan', 'Mga meme image', 'Gumawa ng sticker', 'Mga grupo', 'Mag-export ng file', 'Kusang nawawalang content', 'iCloud sync'] },
  pl: { downloadForIPhone: 'Pobierz na iPhone’a', clipboardFeatures: ['Przykładowe teksty', 'Szablony e-mail', 'Dane kontaktowe', 'Kody kolorów', 'Prompty AI', 'Kody QR', 'Ulubione zdjęcia', 'Obrazy memów', 'Tworzenie naklejek', 'Grupy', 'Eksport plików', 'Treści wygasające', 'Synchronizacja iCloud'] },
};

const clipboardAdditions: Record<string, { copy: string; pin: string; clone: string; filter: string; search: string; sort: string }> = {
  en: { copy: 'Copy', pin: 'Pin', clone: 'Clone', filter: 'Filter', search: 'Search', sort: 'Sort' },
  vi: { copy: 'Sao chép', pin: 'Ghim', clone: 'Nhân bản', filter: 'Lọc', search: 'Tìm kiếm', sort: 'Sắp xếp' },
  ja: { copy: 'コピー', pin: 'ピン留め', clone: '複製', filter: 'フィルター', search: '検索', sort: '並べ替え' },
  es: { copy: 'Copiar', pin: 'Fijar', clone: 'Clonar', filter: 'Filtrar', search: 'Buscar', sort: 'Ordenar' },
  'zh-TW': { copy: '複製', pin: '釘選', clone: '建立副本', filter: '篩選', search: '搜尋', sort: '排序' },
  'pt-BR': { copy: 'Copiar', pin: 'Fixar', clone: 'Clonar', filter: 'Filtrar', search: 'Pesquisar', sort: 'Ordenar' },
  fr: { copy: 'Copier', pin: 'Épingler', clone: 'Dupliquer', filter: 'Filtrer', search: 'Rechercher', sort: 'Trier' },
  de: { copy: 'Kopieren', pin: 'Anheften', clone: 'Klonen', filter: 'Filtern', search: 'Suchen', sort: 'Sortieren' },
  ru: { copy: 'Копировать', pin: 'Закрепить', clone: 'Клонировать', filter: 'Фильтровать', search: 'Поиск', sort: 'Сортировать' },
  ko: { copy: '복사', pin: '고정', clone: '복제', filter: '필터', search: '검색', sort: '정렬' },
  hi: { copy: 'कॉपी करें', pin: 'पिन करें', clone: 'क्लोन करें', filter: 'फ़िल्टर', search: 'खोजें', sort: 'क्रमबद्ध करें' },
  bn: { copy: 'কপি', pin: 'পিন', clone: 'ক্লোন', filter: 'ফিল্টার', search: 'খোঁজ', sort: 'সাজানো' },
  id: { copy: 'Salin', pin: 'Sematkan', clone: 'Klon', filter: 'Filter', search: 'Cari', sort: 'Urutkan' },
  it: { copy: 'Copia', pin: 'Fissa', clone: 'Clona', filter: 'Filtra', search: 'Cerca', sort: 'Ordina' },
  th: { copy: 'คัดลอก', pin: 'ปักหมุด', clone: 'โคลน', filter: 'ตัวกรอง', search: 'ค้นหา', sort: 'จัดเรียง' },
  tl: { copy: 'Kopyahin', pin: 'I-pin', clone: 'I-clone', filter: 'I-filter', search: 'Maghanap', sort: 'Ayusin' },
  pl: { copy: 'Kopiuj', pin: 'Przypnij', clone: 'Sklonuj', filter: 'Filtruj', search: 'Wyszukiwanie', sort: 'Sortowanie' },
};

Object.entries(copy).forEach(([lang, value]) => {
  const additions = clipboardAdditions[lang] ?? clipboardAdditions.en;
  const items = value.clipboardFeatures;
  value.clipboardFeatures = [
    ...items.slice(0, 9),
    additions.copy,
    additions.pin,
    additions.clone,
    additions.filter,
    items[9],
    additions.search,
    additions.sort,
    items[10],
    'System Pasteboard',
    ...items.slice(11),
  ];
});

const heroHighlights: Record<string, string> = {
  en: 'Clipboard', vi: 'Clipboard', ja: 'クリップボード', es: 'portapapeles', 'zh-TW': '剪貼板',
  'pt-BR': 'área de transferência', fr: 'presse-papiers', de: 'Zwischenablage', ru: 'буфер обмена',
  ko: '클립보드를', hi: 'क्लिपबोर्ड', bn: 'ক্লিপবোর্ড', id: 'papan klip', it: 'appunti', th: 'คลิปบอร์ด',
  tl: 'clipboard', pl: 'schowek',
};

const clipboardTitles: Record<string, string> = {
  en: 'Copy everything to your clipboard',
  vi: 'Sao chép mọi thứ vào clipboard',
  ja: 'すべてをクリップボードにコピー',
  es: 'Copia todo al portapapeles',
  'zh-TW': '將所有內容複製到剪貼板',
  'pt-BR': 'Copie tudo para a área de transferência',
  fr: 'Copiez tout dans le presse-papiers',
  de: 'Alles in die Zwischenablage kopieren',
  ru: 'Копируйте всё в буфер обмена',
  ko: '모든 내용을 클립보드에 복사하세요',
  hi: 'सब कुछ क्लिपबोर्ड पर कॉपी करें',
  bn: 'সবকিছু ক্লিপবোর্ডে কপি করুন',
  id: 'Salin semuanya ke papan klip',
  it: 'Copia tutto negli appunti',
  th: 'คัดลอกทุกอย่างไปยังคลิปบอร์ด',
  tl: 'Kopyahin ang lahat sa clipboard',
  pl: 'Kopiuj wszystko do schowka',
};

export const getHomeCopy = (lang: string): LocalizedHomeCopy => ({
  ...(copy[lang] || copy.en),
  clipboardTitle: clipboardTitles[lang] || clipboardTitles.en,
});
export const getHeroHighlight = (lang: string) => heroHighlights[lang] || heroHighlights.en;
