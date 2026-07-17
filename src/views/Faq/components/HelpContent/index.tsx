import React, { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Info, Plus, Send, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GlassCard } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import FaqList from '../FaqList';

export type HelpSection = 'faq' | 'documents' | 'contact';

const MAX_MEDIA = 5;
const MAX_IMAGE_FILE_BYTES = 5 * 1024 * 1024;
const MAX_VIDEO_FILE_BYTES = 50 * 1024 * 1024;
const MAX_TOTAL_MEDIA_BYTES = 50 * 1024 * 1024;
const EMAIL_DOMAINS = ['@gmail.com', '@outlook.com', '@hotmail.com'];
const contactEndpointPlaceholder = 'https://script.google.com/macros/s/AKfycbxLiquidBoardContactPlaceholder/exec';

type MediaItem = {
  file: File;
  previewUrl: string;
};

const readFileAsBase64 = (file: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = () => reject(new Error(`Unable to read ${file.name}.`));
  reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '');
  reader.readAsDataURL(file);
});

const getMediaByteLimit = (file: File) => (
  file.type.startsWith('video/') ? MAX_VIDEO_FILE_BYTES : MAX_IMAGE_FILE_BYTES
);

const mediaLimitLabels: Record<string, string> = {
  en: 'Images up to 5 MB · Videos up to 50 MB',
  vi: 'Ảnh tối đa 5 MB · Video tối đa 50 MB',
  ja: '画像は最大5 MB・動画は最大50 MB',
  es: 'Imágenes de hasta 5 MB · Vídeos de hasta 50 MB',
  'zh-TW': '圖片最多 5 MB · 影片最多 50 MB',
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
};

const totalMediaLimitLabels: Record<string, string> = {
  en: 'Total attachments up to 50 MB',
  vi: 'Tổng tệp đính kèm tối đa 50 MB',
  ja: '添付ファイル合計は最大50 MB',
  es: 'Total de archivos adjuntos de hasta 50 MB',
  'zh-TW': '附件總計最多50 MB',
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
};

const mediaLimitMessage = (lang: string) => {
  const base = mediaLimitLabels[lang] ?? mediaLimitLabels.en;
  const total = totalMediaLimitLabels[lang] ?? totalMediaLimitLabels.en;
  return `${base} · ${total}`;
};

const TabList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0 0 32px;
  a { padding: 10px 17px; border: 1px solid rgba(70, 48, 38, .1); border-radius: 999px; background: transparent; color: #785e52; font: inherit; font-size: 17px; font-weight: 740; text-decoration: none; transition: transform .18s ease, background .18s ease, border-color .18s ease, color .18s ease; }
  a:hover { border-color: rgba(70, 48, 38, .28); color: #2c2623; transform: translateY(-2px); }
  a[aria-current='page'] { border-color: #2c2724; background: #2c2724; color: #fff3e4; }
  @media (max-width: 600px) { gap: 6px; a { padding: 9px 13px; font-size: 15px; } }
`;

const Placeholder = styled(GlassCard)`
  padding: clamp(30px, 5dvw, 58px);
  color: #665249;
  font-size: clamp(17px, 1.35dvw, 20px);
  line-height: 1.58;
  text-align: center;
`;

const Form = styled(GlassCard)`
  width: min(100%, 640px);
  margin: 0 auto;
  display: grid;
  gap: 18px;
  padding: clamp(20px, 4dvw, 38px);
  border: 0;
  background: transparent;
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  label { display: grid; gap: 8px; color: #3a302c; font-size: 15px; font-weight: 760; }
  .required { color: #a34e47; }
  input, textarea { width: 100%; border: 1px solid rgba(79, 53, 41, .16); border-radius: 14px; outline: 0; background: rgba(255, 247, 237, .72); color: #302824; font: inherit; font-size: 16px; font-weight: 540; transition: border-color .18s ease, box-shadow .18s ease; }
  input { height: 50px; padding: 0 14px; }
  textarea { min-height: 160px; padding: 14px; resize: vertical; }
  input:focus, textarea:focus { border-color: #8c6c5d; box-shadow: 0 0 0 4px rgba(140,108,93,.12); }
  .email-suggestions { display: flex; flex-wrap: wrap; gap: 7px; }
  .email-suggestions button { padding: 5px 9px; border: 1px solid rgba(79,53,41,.18); border-radius: 999px; background: rgba(255,247,237,.55); color: #665249; font: inherit; font-size: 12px; font-weight: 700; line-height: 1.2; transition: border-color .18s ease, background .18s ease, color .18s ease; }
  .email-suggestions button:hover { border-color: #8c6c5d; background: rgba(255,247,237,.9); color: #2c2724; }
  .label-text { display: inline-flex; gap: 3px; align-items: baseline; }
  .media-field { position: relative; display: grid; gap: 12px; color: #3a302c; font-size: 15px; font-weight: 760; }
  .media-grid { display: flex; flex-wrap: wrap; gap: 12px; }
  .media-input, .media-item { width: 104px; }
  .media-input { position: relative; display: grid; height: 104px; place-items: center; border: 1px dashed rgba(79,53,41,.38); border-radius: 16px; background: rgba(255,247,237,.4); color: #665249; cursor: pointer; transition: border-color .18s ease, background .18s ease, transform .18s ease; }
  .media-input:hover { border-color: #8c6c5d; background: rgba(255,247,237,.75); transform: translateY(-2px); }
  .media-input input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
  .media-heading { display: grid; gap: 3px; }
  .media-limit { display: inline-flex; align-items: center; gap: 4px; color: #665249; font-size: 12px; font-weight: 600; }
  .media-count { position: absolute; top: 7px; right: 7px; padding: 2px 4px; border-radius: 7px; background: #e3c76c; color: #2c2724; font-size: 11px; font-weight: 820; line-height: 1; }
  .media-item { display: block; min-width: 0; overflow: hidden; }
  .media-preview { position: relative; display: block; box-sizing: border-box; width: 104px; height: 104px; overflow: hidden; border: 1px solid rgba(79,53,41,.38); border-radius: 16px; background: rgba(105,75,58,.1); }
  .media-preview img, .media-preview video { display: block; width: 100%; max-width: 100%; height: 100%; max-height: 100%; object-fit: cover; }
  .media-remove { position: absolute; top: 6px; right: 6px; display: grid; width: 26px; height: 26px; padding: 0; place-items: center; border: 0; border-radius: 50%; background: rgba(44,39,36,.78); color: #fff; cursor: pointer; }
  .media-name { display: block; margin-top: 6px; overflow: hidden; color: #5e4c43; font-size: 13px; font-weight: 650; text-overflow: ellipsis; white-space: nowrap; }
  @media (max-width: 440px) { .media-input, .media-item, .media-preview { width: 88px; } .media-input, .media-preview { height: 88px; } }
  .submit { display: inline-flex; min-height: 56px; align-items: center; justify-content: center; gap: 8px; margin-top: 8px; padding: 0 20px; border: 0; border-radius: 16px; background: #2c2724; color: #fff3e4; font: inherit; font-size: 17px; font-weight: 800; transition: transform .18s ease, opacity .18s ease; }
  .submit:hover:not(:disabled) { transform: translateY(-2px); }
  .submit:disabled { cursor: wait; opacity: .6; }
  .form-message { margin: -4px 0 0; font-size: 14px; font-weight: 670; line-height: 1.45; text-align: center; }
  .form-message.error { color: #a34e47; }
  .form-message.success { color: #44713c; }
`;

const HelpContent: React.FC<{ section: HelpSection }> = ({ section }) => {
  const { dict, lang } = useTranslation();
  const [email, setEmail] = useState('');
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ tone: 'error' | 'success'; text: string } | null>(null);
  const previewUrls = useRef(new Set<string>());
  const labels = useMemo(() => ({
    faq: dict.help?.faqTab ?? 'FAQs',
    documents: dict.help?.docsTab ?? 'Documents',
    contact: dict.help?.contactTab ?? 'Contact',
    email: dict.help?.email ?? 'Email',
    problem: dict.help?.problem ?? 'Problem',
    problemPlaceholder: dict.help?.problemPlaceholder ?? 'Tell us what happened…',
    media: dict.help?.media ?? 'Media',
    addMedia: dict.help?.addMedia ?? 'Add media',
    mediaLimit: mediaLimitMessage(lang),
    removeMedia: dict.help?.removeMedia ?? 'Remove',
    sending: dict.help?.sending ?? 'Sending…',
    send: dict.help?.send ?? 'Send',
    mediaTooLarge: dict.help?.mediaTooLarge ?? 'Each media attachment must be 20 MB or less.',
    mediaMax: dict.help?.mediaMax ?? 'You can attach up to 5 images or videos.',
    sent: dict.help?.sent ?? 'Thanks — your report has been sent.',
    sendFailed: dict.help?.sendFailed ?? 'Unable to send the report.',
  }), [dict.help, lang]);

  useEffect(() => () => {
    previewUrls.current.forEach((url) => URL.revokeObjectURL(url));
  }, []);

  const selectFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const chosen = Array.from(event.target.files ?? []).filter((file) => file.type.startsWith('image/') || file.type.startsWith('video/'));
    const available = MAX_MEDIA - mediaItems.length;
    const next = chosen.slice(0, Math.max(0, available));
    const nextTotalBytes = mediaItems.reduce((total, item) => total + item.file.size, 0)
      + next.reduce((total, file) => total + file.size, 0);
    if (next.some((file) => file.size > getMediaByteLimit(file)) || nextTotalBytes > MAX_TOTAL_MEDIA_BYTES) {
      setFormMessage({ tone: 'error', text: labels.mediaLimit });
      event.target.value = '';
      return;
    }
    setFormMessage(null);
    setMediaItems((current) => [...current, ...next.map((file) => {
      const previewUrl = URL.createObjectURL(file);
      previewUrls.current.add(previewUrl);
      return { file, previewUrl };
    })]);
    event.target.value = '';
  };

  const removeMedia = (index: number) => {
    setMediaItems((current) => {
      const item = current[index];
      if (item) {
        URL.revokeObjectURL(item.previewUrl);
        previewUrls.current.delete(item.previewUrl);
      }
      return current.filter((_, itemIndex) => itemIndex !== index);
    });
  };

  const emailLocalPart = email.split('@')[0];
  const showEmailSuggestions = emailLocalPart.trim().length > 0 && !email.includes('@');

  const submit = async (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const endpoint = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || contactEndpointPlaceholder;
    const totalMediaBytes = mediaItems.reduce((total, item) => total + item.file.size, 0);
    if (totalMediaBytes > MAX_TOTAL_MEDIA_BYTES) {
      setFormMessage({ tone: 'error', text: labels.mediaLimit });
      return;
    }
    setSubmitting(true);
    setFormMessage(null);
    try {
      const data = new FormData(form);
      const media = [] as { name: string; type: string; base64: string }[];
      for (const { file } of mediaItems) {
        media.push({ name: file.name, type: file.type, base64: await readFileAsBase64(file) });
      }
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ email: data.get('email'), problem: data.get('problem'), media }),
      });
      if (!response.ok) throw new Error(labels.sendFailed);
      const result = await response.json() as { ok?: boolean; error?: string };
      if (!result.ok) throw new Error(result.error || labels.sendFailed);
      form.reset();
      setEmail('');
      previewUrls.current.forEach((url) => URL.revokeObjectURL(url));
      previewUrls.current.clear();
      setMediaItems([]);
      setFormMessage({ tone: 'success', text: labels.sent });
    } catch {
      setFormMessage({ tone: 'error', text: labels.sendFailed });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <TabList as="nav" aria-label="Help sections">
        <NavLink to="/help/contact" end>{labels.contact}</NavLink>
        <NavLink to="/help/faq" end>{labels.faq}</NavLink>
      </TabList>
      {section === 'faq' && <FaqList />}
      {section === 'documents' && <Placeholder>{dict.help?.docsPlaceholder ?? 'Documentation is being updated...'}</Placeholder>}
      {section === 'contact' && (
        <Form onSubmit={(event) => { void submit(event); }}>
          <label><span className="label-text">{labels.email}<span className="required" aria-hidden="true">*</span></span><input required name="email" type="email" autoComplete="email" placeholder="email@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} />{showEmailSuggestions && <span className="email-suggestions">{EMAIL_DOMAINS.map((domain) => <button type="button" key={domain} onClick={() => setEmail(`${emailLocalPart}${domain}`)}>{domain}</button>)}</span>}</label>
          <label><span className="label-text">{labels.problem}<span className="required" aria-hidden="true">*</span></span><textarea required name="problem" placeholder={labels.problemPlaceholder} /></label>
          <div className="media-field"><span className="media-heading"><span className="label-text">{labels.media}</span></span>
            <span className="media-grid">
              {mediaItems.map(({ file, previewUrl }, index) => <span className="media-item" key={`${file.name}-${file.lastModified}-${index}`}><span className="media-preview">{file.type.startsWith('video/') ? <video src={previewUrl} muted preload="metadata" /> : <img src={previewUrl} alt="" />}<button className="media-remove" type="button" aria-label={`${labels.removeMedia} ${file.name}`} onClick={() => removeMedia(index)}><X size={15} /></button></span><span className="media-name" title={file.name}>{file.name}</span></span>)}
              {mediaItems.length < MAX_MEDIA && <label className="media-input" aria-label={labels.addMedia}><input type="file" accept="image/*,video/*" multiple onChange={selectFiles} /><Plus size={30} strokeWidth={2.2} /><span className="media-count">{mediaItems.length}/{MAX_MEDIA}</span></label>}
            </span>
            <span className="media-limit"><Info size={14} strokeWidth={2.2} aria-hidden="true" />{labels.mediaLimit}</span>
          </div>
          <button className="submit" type="submit" disabled={submitting}><Send size={17} />{submitting ? labels.sending : labels.send}</button>
          {formMessage && <p className={`form-message ${formMessage.tone}`} role={formMessage.tone === 'error' ? 'alert' : 'status'}>{formMessage.text}</p>}
        </Form>
      )}
    </>
  );
};

export default HelpContent;
