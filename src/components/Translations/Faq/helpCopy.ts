// FAQ page: localized attachment size limits shown in the contact form.
const mediaLimitLabels: Record<string, string> = {
  en: 'Images up to 5 MB · Videos up to 50 MB',
  vi: 'Ảnh tối đa 5 MB · Video tối đa 50 MB',
  ja: '画像は最大5 MB・動画は最大50 MB',
  es: 'Imágenes de hasta 5 MB · Vídeos de hasta 50 MB',
  'zh-TW': '圖片最多 5 MB · 影片最多 50 MB',
  'zh-CN': '图片最大 5 MB · 视频最大 50 MB',
  'pt-BR': 'Imagens de até 5 MB · Vídeos de até 50 MB',
  fr: 'Images jusqu’à 5 MB · Vidéos jusqu’à 50 MB',
  de: 'Bilder bis 5 MB · Videos bis 50 MB',
  ru: 'Изображения до 5 MB · Видео до 50 MB',
  ko: '이미지는 최대 5 MB · 동영상은 최대 50 MB',
  hi: 'छवियाँ अधिकतम 5 MB · वीडियो अधिकतम 50 MB',
  bn: 'ছবি সর্বোচ্চ 5 MB · ভিডিও সর্বোচ্চ 50 MB',
  id: 'Gambar hingga 5 MB · Video hingga 50 MB',
  it: 'Immagini fino a 5 MB · Video fino a 50 MB',
  th: 'รูปภาพสูงสุด 5 MB · วิดีโอสูงสุด 50 MB',
  tl: 'Mga larawan hanggang 5 MB · Mga video hanggang 50 MB',
  pl: 'Obrazy do 5 MB · Filmy do 50 MB',
  tr: 'Görseller en fazla 5 MB · Videolar en fazla 50 MB',
};

const totalMediaLimitLabels: Record<string, string> = {
  en: 'Total attachments up to 50 MB',
  vi: 'Tổng tệp đính kèm tối đa 50 MB',
  ja: '添付ファイル合計は最大50 MB',
  es: 'Total de archivos adjuntos de hasta 50 MB',
  'zh-TW': '附件總計最多50 MB',
  'zh-CN': '附件总计最大 50 MB',
  'pt-BR': 'Total de anexos de até 50 MB',
  fr: 'Total des pièces jointes jusqu’à 50 MB',
  de: 'Anhänge insgesamt bis 50 MB',
  ru: 'Общий размер вложений до 50 MB',
  ko: '첨부 파일 전체는 최대 50 MB',
  hi: 'सभी अटैचमेंट कुल मिलाकर अधिकतम 50 MB',
  bn: 'মোট সংযুক্তি সর্বোচ্চ 50 MB',
  id: 'Total lampiran hingga 50 MB',
  it: 'Totale allegati fino a 50 MB',
  th: 'ไฟล์แนบทั้งหมดสูงสุด 50 MB',
  tl: 'Kabuuang attachment hanggang 50 MB',
  pl: 'Łączny rozmiar załączników do 50 MB',
  tr: 'Eklerin toplamı en fazla 50 MB',
};

export const mediaLimitMessage = (lang: string) => {
  const base = mediaLimitLabels[lang] ?? mediaLimitLabels.en;
  const total = totalMediaLimitLabels[lang] ?? totalMediaLimitLabels.en;
  return `${base} · ${total}`;
};

