const keys = [
  'Text Snippets', 'Website Link', 'Color Codes', 'Contact', 'Files', 'Voice', 'Scan Documents', 'JSON', 'CSV', 'Copy', 'Share', 'Select', 'Pin', 'Search', 'Export File', 'Group', 'Clone', 'Information', 'Pin Group', 'Move Group', 'Sort', 'Color System', 'Custom Color', 'Crop', 'Filter', 'Marker', 'Blur', 'Pixelation', 'Noise', 'System Pasteboard', 'iCloud Sync', 'Data & Storage', 'Text Toolbar', 'Writing Tool', 'Self-Destructing Content', 'Keyboard Customization', 'App Customization', 'Create Sticker', 'Camera Sticker',
];

type ActionTranslation = { description: string; labels: string[] };

const translations: Record<string, ActionTranslation> = {
  vi: {
    description: 'Tận dụng tối đa các tính năng này để xây dựng bộ công cụ quản lý Clipboard hoàn hảo, dành riêng cho bạn.',
    labels: ['Đoạn văn bản', 'Liên kết trang web', 'Mã màu', 'Liên hệ', 'Tệp', 'Giọng nói', 'Quét tài liệu', 'JSON', 'CSV', 'Sao chép', 'Chia sẻ', 'Chọn', 'Ghim', 'Tìm kiếm', 'Xuất tệp', 'Nhóm', 'Nhân bản', 'Thông tin', 'Ghim nhóm', 'Di chuyển nhóm', 'Sắp xếp', 'Hệ màu', 'Màu tùy chỉnh', 'Cắt ảnh', 'Bộ lọc', 'Bút đánh dấu', 'Làm mờ', 'Pixelation', 'Nhiễu', 'Bảng nhớ tạm hệ thống', 'Đồng bộ iCloud', 'Dữ liệu & Lưu trữ', 'Thanh công cụ văn bản', 'Công cụ viết', 'Nội dung tự hủy', 'Tùy chỉnh bàn phím', 'Tùy chỉnh ứng dụng', 'Tạo nhãn dán', 'Nhãn dán từ camera'],
  },
  ja: {
    description: 'これらの機能を活用して、あなたにぴったりのクリップボード管理ツールを作りましょう。',
    labels: ['テキストスニペット', 'ウェブサイトリンク', 'カラーコード', '連絡先', 'ファイル', '音声', '書類をスキャン', 'JSON', 'CSV', 'コピー', '共有', '選択', 'ピン留め', '検索', 'ファイルを書き出す', 'グループ', '複製', '情報', 'グループをピン留め', 'グループを移動', '並べ替え', 'カラーシステム', 'カスタムカラー', '切り抜き', 'フィルタ', 'マーカー', 'ぼかし', 'ピクセル化', 'ノイズ', 'システムクリップボード', 'iCloud同期', 'データとストレージ', 'テキストツールバー', '文章作成ツール', '自動消去コンテンツ', 'キーボードをカスタマイズ', 'アプリをカスタマイズ', 'ステッカーを作成', 'カメラステッカー'],
  },
  es: {
    description: 'Aprovecha estas funciones para crear la herramienta de gestión del portapapeles perfecta para ti.',
    labels: ['Fragmentos de texto', 'Enlace web', 'Códigos de color', 'Contacto', 'Archivos', 'Voz', 'Escanear documentos', 'JSON', 'CSV', 'Copiar', 'Compartir', 'Seleccionar', 'Fijar', 'Buscar', 'Exportar archivo', 'Grupo', 'Duplicar', 'Información', 'Fijar grupo', 'Mover grupo', 'Ordenar', 'Sistema de color', 'Color personalizado', 'Recortar', 'Filtro', 'Marcador', 'Desenfoque', 'Pixelado', 'Ruido', 'Portapapeles del sistema', 'Sincronización con iCloud', 'Datos y almacenamiento', 'Barra de texto', 'Herramienta de escritura', 'Contenido autodestructivo', 'Personalizar teclado', 'Personalizar app', 'Crear sticker', 'Sticker con cámara'],
  },
  'zh-CN': {
    description: '充分利用这些功能，打造专属于你的完美剪贴板管理工具。',
    labels: ['文本片段', '网站链接', '颜色代码', '联系人', '文件', '语音', '扫描文档', 'JSON', 'CSV', '复制', '分享', '选择', '置顶', '搜索', '导出文件', '分组', '克隆', '信息', '置顶分组', '移动分组', '排序', '颜色系统', '自定义颜色', '裁剪', '滤镜', '标记笔', '模糊', '像素化', '噪点', '系统剪贴板', 'iCloud 同步', '数据与存储', '文本工具栏', '写作工具', '阅后即焚内容', '键盘自定义', '应用自定义', '创建贴纸', '相机贴纸'],
  },
  'zh-TW': {
    description: '善用這些功能，打造專屬於你的完美剪貼簿管理工具。',
    labels: ['文字片段', '網站連結', '色碼', '聯絡人', '檔案', '語音', '掃描文件', 'JSON', 'CSV', '複製', '分享', '選取', '置頂', '搜尋', '匯出檔案', '群組', '複製項目', '資訊', '置頂群組', '移動群組', '排序', '色彩系統', '自訂色彩', '裁切', '濾鏡', '標記筆', '模糊', '像素化', '雜訊', '系統剪貼簿', 'iCloud 同步', '資料與儲存空間', '文字工具列', '寫作工具', '自毀內容', '自訂鍵盤', '自訂 App', '建立貼圖', '相機貼圖'],
  },
  fr: {
    description: 'Tirez le meilleur parti de ces fonctionnalités pour créer l’outil de gestion du presse-papiers qui vous correspond.',
    labels: ['Extraits de texte', 'Lien web', 'Codes couleur', 'Contact', 'Fichiers', 'Voix', 'Scanner des documents', 'JSON', 'CSV', 'Copier', 'Partager', 'Sélectionner', 'Épingler', 'Rechercher', 'Exporter le fichier', 'Groupe', 'Dupliquer', 'Informations', 'Épingler le groupe', 'Déplacer le groupe', 'Trier', 'Système de couleurs', 'Couleur personnalisée', 'Rogner', 'Filtre', 'Surligneur', 'Flou', 'Pixellisation', 'Bruit', 'Presse-papiers système', 'Synchronisation iCloud', 'Données et stockage', 'Barre d’outils texte', 'Outil d’écriture', 'Contenu autodestructible', 'Personnalisation du clavier', 'Personnalisation de l’app', 'Créer un autocollant', 'Autocollant photo'],
  },
  de: {
    description: 'Nutze diese Funktionen optimal und stelle dir das perfekte Clipboard-Verwaltungstool zusammen.',
    labels: ['Textbausteine', 'Website-Link', 'Farbcodes', 'Kontakt', 'Dateien', 'Sprache', 'Dokumente scannen', 'JSON', 'CSV', 'Kopieren', 'Teilen', 'Auswählen', 'Anheften', 'Suchen', 'Datei exportieren', 'Gruppe', 'Duplizieren', 'Informationen', 'Gruppe anheften', 'Gruppe verschieben', 'Sortieren', 'Farbsystem', 'Eigene Farbe', 'Zuschneiden', 'Filter', 'Marker', 'Weichzeichnen', 'Verpixeln', 'Rauschen', 'System-Zwischenablage', 'iCloud-Sync', 'Daten und Speicher', 'Textwerkzeugleiste', 'Schreibwerkzeug', 'Selbstzerstörender Inhalt', 'Tastatur anpassen', 'App anpassen', 'Sticker erstellen', 'Kamera-Sticker'],
  },
  ru: {
    description: 'Используйте эти функции по максимуму, чтобы создать идеальный инструмент управления буфером обмена для себя.',
    labels: ['Текстовые фрагменты', 'Ссылка на сайт', 'Коды цветов', 'Контакт', 'Файлы', 'Голос', 'Сканировать документы', 'JSON', 'CSV', 'Копировать', 'Поделиться', 'Выбрать', 'Закрепить', 'Поиск', 'Экспорт файла', 'Группа', 'Создать копию', 'Информация', 'Закрепить группу', 'Переместить группу', 'Сортировка', 'Система цветов', 'Свой цвет', 'Обрезать', 'Фильтр', 'Маркер', 'Размытие', 'Пикселизация', 'Шум', 'Системный буфер обмена', 'Синхронизация iCloud', 'Данные и хранилище', 'Панель текста', 'Инструмент для письма', 'Самоуничтожающийся контент', 'Настройка клавиатуры', 'Настройка приложения', 'Создать стикер', 'Стикер с камеры'],
  },
  ko: {
    description: '이 기능들을 최대한 활용해 나만을 위한 완벽한 클립보드 관리 도구를 만들어 보세요.',
    labels: ['텍스트 스니펫', '웹사이트 링크', '색상 코드', '연락처', '파일', '음성', '문서 스캔', 'JSON', 'CSV', '복사', '공유', '선택', '고정', '검색', '파일 내보내기', '그룹', '복제', '정보', '그룹 고정', '그룹 이동', '정렬', '색상 시스템', '사용자 지정 색상', '자르기', '필터', '마커', '흐림', '픽셀화', '노이즈', '시스템 클립보드', 'iCloud 동기화', '데이터 및 저장 공간', '텍스트 도구 막대', '글쓰기 도구', '자동 삭제 콘텐츠', '키보드 사용자화', '앱 사용자화', '스티커 만들기', '카메라 스티커'],
  },
  hi: {
    description: 'इन सुविधाओं का पूरा लाभ उठाकर अपने लिए एक बेहतरीन क्लिपबोर्ड प्रबंधन टूल बनाएँ।',
    labels: ['टेक्स्ट स्निपेट', 'वेबसाइट लिंक', 'रंग कोड', 'संपर्क', 'फ़ाइलें', 'आवाज़', 'दस्तावेज़ स्कैन', 'JSON', 'CSV', 'कॉपी', 'शेयर', 'चुनें', 'पिन करें', 'खोजें', 'फ़ाइल निर्यात करें', 'समूह', 'क्लोन', 'जानकारी', 'समूह पिन करें', 'समूह स्थानांतरित करें', 'क्रमबद्ध करें', 'रंग प्रणाली', 'कस्टम रंग', 'क्रॉप करें', 'फ़िल्टर', 'मार्कर', 'धुंधलापन', 'पिक्सेलेशन', 'नॉइज़', 'सिस्टम क्लिपबोर्ड', 'iCloud सिंक', 'डेटा और स्टोरेज', 'टेक्स्ट टूलबार', 'लेखन टूल', 'अपने आप मिटने वाली सामग्री', 'कीबोर्ड अनुकूलित करें', 'ऐप अनुकूलित करें', 'स्टिकर बनाएँ', 'कैमरा स्टिकर'],
  },
  bn: {
    description: 'এই ফিচারগুলো কাজে লাগিয়ে আপনার জন্য উপযুক্ত নিখুঁত ক্লিপবোর্ড ম্যানেজমেন্ট টুল তৈরি করুন।',
    labels: ['টেক্সট স্নিপেট', 'ওয়েবসাইট লিংক', 'রঙের কোড', 'পরিচিতি', 'ফাইল', 'ভয়েস', 'নথি স্ক্যান', 'JSON', 'CSV', 'কপি', 'শেয়ার', 'নির্বাচন করুন', 'পিন', 'খুঁজুন', 'ফাইল রপ্তানি', 'গ্রুপ', 'ক্লোন', 'তথ্য', 'গ্রুপ পিন', 'গ্রুপ সরান', 'সাজান', 'রঙের সিস্টেম', 'কাস্টম রঙ', 'ক্রপ', 'ফিল্টার', 'মার্কার', 'ব্লার', 'পিক্সেলেশন', 'নয়েজ', 'সিস্টেম ক্লিপবোর্ড', 'iCloud সিঙ্ক', 'ডেটা ও স্টোরেজ', 'টেক্সট টুলবার', 'লেখার টুল', 'স্বয়ংক্রিয়ভাবে মুছে যায় এমন কনটেন্ট', 'কিবোর্ড কাস্টমাইজেশন', 'অ্যাপ কাস্টমাইজেশন', 'স্টিকার তৈরি', 'ক্যামেরা স্টিকার'],
  },
  id: {
    description: 'Maksimalkan fitur-fitur ini untuk membuat alat pengelolaan Clipboard yang sempurna dan sesuai untuk Anda.',
    labels: ['Cuplikan Teks', 'Tautan Situs Web', 'Kode Warna', 'Kontak', 'File', 'Suara', 'Pindai Dokumen', 'JSON', 'CSV', 'Salin', 'Bagikan', 'Pilih', 'Sematkan', 'Cari', 'Ekspor File', 'Grup', 'Klon', 'Informasi', 'Sematkan Grup', 'Pindahkan Grup', 'Urutkan', 'Sistem Warna', 'Warna Kustom', 'Pangkas', 'Filter', 'Penanda', 'Buram', 'Pikselasi', 'Derau', 'Papan Klip Sistem', 'Sinkronisasi iCloud', 'Data & Penyimpanan', 'Toolbar Teks', 'Alat Menulis', 'Konten yang Terhapus Otomatis', 'Kustomisasi Keyboard', 'Kustomisasi Aplikasi', 'Buat Stiker', 'Stiker Kamera'],
  },
  it: {
    description: 'Sfrutta al meglio queste funzioni per creare lo strumento di gestione degli appunti perfetto per te.',
    labels: ['Snippet di testo', 'Link al sito web', 'Codici colore', 'Contatto', 'File', 'Voce', 'Scansiona documenti', 'JSON', 'CSV', 'Copia', 'Condividi', 'Seleziona', 'Fissa', 'Cerca', 'Esporta file', 'Gruppo', 'Duplica', 'Informazioni', 'Fissa gruppo', 'Sposta gruppo', 'Ordina', 'Sistema colori', 'Colore personalizzato', 'Ritaglia', 'Filtro', 'Evidenziatore', 'Sfocatura', 'Pixelatura', 'Rumore', 'Appunti di sistema', 'Sincronizzazione iCloud', 'Dati e archiviazione', 'Barra strumenti testo', 'Strumento di scrittura', 'Contenuto autodistruttivo', 'Personalizzazione tastiera', 'Personalizzazione app', 'Crea adesivo', 'Adesivo fotocamera'],
  },
  th: {
    description: 'ใช้ฟีเจอร์เหล่านี้ให้เต็มที่ เพื่อสร้างเครื่องมือจัดการคลิปบอร์ดที่เหมาะกับคุณที่สุด',
    labels: ['ข้อความที่บันทึกไว้', 'ลิงก์เว็บไซต์', 'รหัสสี', 'รายชื่อติดต่อ', 'ไฟล์', 'เสียง', 'สแกนเอกสาร', 'JSON', 'CSV', 'คัดลอก', 'แชร์', 'เลือก', 'ปักหมุด', 'ค้นหา', 'ส่งออกไฟล์', 'กลุ่ม', 'ทำสำเนา', 'ข้อมูล', 'ปักหมุดกลุ่ม', 'ย้ายกลุ่ม', 'เรียงลำดับ', 'ระบบสี', 'สีที่กำหนดเอง', 'ครอบตัด', 'ฟิลเตอร์', 'ปากกาเน้นข้อความ', 'เบลอ', 'พิกเซล', 'นอยส์', 'คลิปบอร์ดระบบ', 'ซิงค์ iCloud', 'ข้อมูลและพื้นที่จัดเก็บ', 'แถบเครื่องมือข้อความ', 'เครื่องมือเขียน', 'เนื้อหาที่ทำลายตัวเอง', 'ปรับแต่งคีย์บอร์ด', 'ปรับแต่งแอป', 'สร้างสติกเกอร์', 'สติกเกอร์จากกล้อง'],
  },
  tl: {
    description: 'Sulitin ang mga feature na ito para buuin ang perpektong Clipboard management toolkit na para sa iyo.',
    labels: ['Mga Text Snippet', 'Link ng Website', 'Mga Color Code', 'Contact', 'Mga File', 'Boses', 'I-scan ang mga Dokumento', 'JSON', 'CSV', 'Kopyahin', 'Ibahagi', 'Piliin', 'I-pin', 'Maghanap', 'I-export ang File', 'Grupo', 'I-clone', 'Impormasyon', 'I-pin ang Grupo', 'Ilipat ang Grupo', 'Ayusin', 'Color System', 'Custom na Kulay', 'I-crop', 'Filter', 'Marker', 'Blur', 'Pixelation', 'Noise', 'System Pasteboard', 'iCloud Sync', 'Data at Storage', 'Text Toolbar', 'Writing Tool', 'Content na Kusang Nabubura', 'Pag-customize ng Keyboard', 'Pag-customize ng App', 'Gumawa ng Sticker', 'Camera Sticker'],
  },
  pl: {
    description: 'Wykorzystaj te funkcje, aby stworzyć idealny zestaw do zarządzania schowkiem, dopasowany do siebie.',
    labels: ['Fragmenty tekstu', 'Link do strony', 'Kody kolorów', 'Kontakt', 'Pliki', 'Głos', 'Skanuj dokumenty', 'JSON', 'CSV', 'Kopiuj', 'Udostępnij', 'Wybierz', 'Przypnij', 'Szukaj', 'Eksportuj plik', 'Grupa', 'Klonuj', 'Informacje', 'Przypnij grupę', 'Przenieś grupę', 'Sortuj', 'System kolorów', 'Własny kolor', 'Przytnij', 'Filtr', 'Marker', 'Rozmycie', 'Pikselizacja', 'Szum', 'Schowek systemowy', 'Synchronizacja iCloud', 'Dane i pamięć', 'Pasek narzędzi tekstu', 'Narzędzie do pisania', 'Treść autodestrukcyjna', 'Dostosowanie klawiatury', 'Dostosowanie aplikacji', 'Utwórz naklejkę', 'Naklejka z aparatu'],
  },
  tr: {
    description: 'Bu özelliklerden en iyi şekilde yararlanarak sana özel, kusursuz bir Pano yönetim aracı oluştur.',
    labels: ['Metin Parçacıkları', 'Web Sitesi Bağlantısı', 'Renk Kodları', 'Kişi', 'Dosyalar', 'Ses', 'Belgeleri Tara', 'JSON', 'CSV', 'Kopyala', 'Paylaş', 'Seç', 'Sabitle', 'Ara', 'Dosyayı Dışa Aktar', 'Grup', 'Klonla', 'Bilgi', 'Grubu Sabitle', 'Grubu Taşı', 'Sırala', 'Renk Sistemi', 'Özel Renk', 'Kırp', 'Filtre', 'İşaretleyici', 'Bulanıklık', 'Pikselleştirme', 'Gürültü', 'Sistem Panosu', 'iCloud Eşzamanlama', 'Veri ve Depolama', 'Metin Araç Çubuğu', 'Yazma Aracı', 'Kendini Yok Eden İçerik', 'Klavye Özelleştirme', 'Uygulama Özelleştirme', 'Çıkartma Oluştur', 'Kamera Çıkartması'],
  },
  'pt-BR': {
    description: 'Aproveite ao máximo estes recursos para criar a ferramenta de gerenciamento da área de transferência perfeita para você.',
    labels: ['Trechos de texto', 'Link de site', 'Códigos de cor', 'Contato', 'Arquivos', 'Voz', 'Digitalizar documentos', 'JSON', 'CSV', 'Copiar', 'Compartilhar', 'Selecionar', 'Fixar', 'Buscar', 'Exportar arquivo', 'Grupo', 'Clonar', 'Informações', 'Fixar grupo', 'Mover grupo', 'Ordenar', 'Sistema de cores', 'Cor personalizada', 'Recortar', 'Filtro', 'Marcador', 'Desfoque', 'Pixelização', 'Ruído', 'Área de transferência do sistema', 'Sincronização com iCloud', 'Dados e armazenamento', 'Barra de ferramentas de texto', 'Ferramenta de escrita', 'Conteúdo autodestrutivo', 'Personalização do teclado', 'Personalização do app', 'Criar figurinha', 'Figurinha da câmera'],
  },
};

export const getListActionCopy = (lang: string) => {
  const translation = translations[lang];
  const labels = keys.reduce<Record<string, string>>((result, key, index) => {
    result[key] = translation?.labels[index] ?? key;
    return result;
  }, {});
  return {
    description: translation?.description ?? 'Make the most of these features to build the perfect Clipboard management toolkit, tailored just for you.',
    labels,
  };
};
