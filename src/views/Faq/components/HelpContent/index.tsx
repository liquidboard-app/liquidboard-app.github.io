import React, { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Info, Plus, Send, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GlassCard } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { getAccessibilityLabels } from '@/components/Translations/Global/config';
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

import { mediaLimitMessage } from '@/components/Translations/Faq/helpCopy';

const FormLabel = styled.label``;
const LabelText = styled.span``;
const Required = styled.span``;
const LabelInput = styled.input``;
const EmailSuggestions = styled.span``;
const EmailSuggestionsButton = styled.button``;
const LabelTextarea = styled.textarea``;
const MediaField = styled.div``;
const MediaHeading = styled.span``;
const MediaGrid = styled.span``;
const MediaItemSpanElement = styled.span``;
const MediaPreview = styled.span``;
const MediaPreviewVideo = styled.video``;
const MediaPreviewImg = styled.img``;
const MediaRemove = styled.button``;
const MediaName = styled.span``;
const MediaInput = styled.label``;
const MediaInputInput = styled.input``;
const MediaCount = styled.span``;
const MediaLimit = styled.span``;
const Submit = styled.button``;
const FormP = styled.p``;


const TabList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0 0 32px;
  a { padding: 10px 17px; border: 1px solid var(--border); border-radius: 999px; background: transparent; color: var(--text); font: inherit; font-size: 17px; font-weight: 790; text-decoration: none; transition: transform .18s ease, background .18s ease, border-color .18s ease, color .18s ease; }
  a:hover { border-color: var(--border-strong); color: var(--text); transform: translateY(-2px); }
  a[aria-current='page'] { border-color: var(--text); background: var(--text); color: var(--bg); }
  @media (max-width: 600px) { gap: 6px; a { padding: 9px 13px; font-size: 15px; } }
`;

const Placeholder = styled(GlassCard)`
  padding: clamp(30px, 5dvw, 58px);
  color: var(--text);
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
  label { display: grid; gap: 8px; color: var(--text); font-size: 15px; font-weight: 810; }
  .required { color: #a34e47; }
  input, textarea { width: 100%; border: 1px solid var(--border-strong); border-radius: 14px; outline: 0; background: var(--bg-2); color: var(--text); font: inherit; font-size: 16px; font-weight: 540; transition: border-color .18s ease, box-shadow .18s ease; }
  input { height: 50px; padding: 0 14px; }
  textarea { min-height: 160px; padding: 14px; resize: vertical; }
  input:focus, textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 16%, transparent); }
  .email-suggestions { display: flex; flex-wrap: wrap; gap: 7px; }
  .email-suggestions button { padding: 5px 9px; border: 1px solid var(--border-strong); border-radius: 999px; background: var(--ghost-bg); color: var(--text); font: inherit; font-size: 12px; font-weight: 750; line-height: 1.2; transition: border-color .18s ease, background .18s ease, color .18s ease; }
  .email-suggestions button:hover { border-color: var(--accent); background: var(--surface); color: var(--text); }
  .label-text { display: inline-flex; gap: 3px; align-items: baseline; }
  .media-field { position: relative; display: grid; gap: 12px; color: var(--text); font-size: 15px; font-weight: 810; }
  .media-grid { display: flex; flex-wrap: wrap; gap: 12px; }
  .media-input, .media-item { width: 104px; }
  .media-input { position: relative; display: grid; height: 104px; place-items: center; border: 1px dashed var(--border-strong); border-radius: 16px; background: var(--ghost-bg); color: var(--text); cursor: pointer; transition: border-color .18s ease, background .18s ease, transform .18s ease; }
  .media-input:hover { border-color: var(--accent); background: var(--surface); transform: translateY(-2px); }
  .media-input input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
  .media-heading { display: grid; gap: 3px; }
  .media-limit { display: inline-flex; align-items: center; gap: 4px; color: var(--muted-text); font-size: 12px; font-weight: 650; }
  .media-count { position: absolute; top: 7px; right: 7px; padding: 2px 4px; border-radius: 7px; background: var(--text); color: var(--bg); font-size: 11px; font-weight: 870; line-height: 1; }
  .media-item { display: block; min-width: 0; overflow: hidden; }
  .media-preview { position: relative; display: block; box-sizing: border-box; width: 104px; height: 104px; overflow: hidden; border: 1px solid var(--border-strong); border-radius: 16px; background: var(--surface); }
  .media-preview img, .media-preview video { display: block; width: 100%; max-width: 100%; height: 100%; max-height: 100%; object-fit: cover; }
  .media-remove { position: absolute; top: 6px; right: 6px; display: grid; width: 26px; height: 26px; padding: 0; place-items: center; border: 0; border-radius: 50%; background: var(--text); color: var(--bg); cursor: pointer; }
  .media-name { display: block; margin-top: 6px; overflow: hidden; color: var(--muted-text); font-size: 13px; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
  @media (max-width: 440px) { .media-input, .media-item, .media-preview { width: 88px; } .media-input, .media-preview { height: 88px; } }
  .submit { display: inline-flex; min-height: 56px; align-items: center; justify-content: center; gap: 8px; margin-top: 8px; padding: 0 20px; border: 0; border-radius: 16px; background: var(--text); color: var(--bg); font: inherit; font-size: 17px; font-weight: 850; transition: transform .18s ease, opacity .18s ease; }
  .submit:hover:not(:disabled) { transform: translateY(-2px); }
  .submit:disabled { cursor: wait; opacity: .6; }
  .form-message { margin: -4px 0 0; font-size: 14px; font-weight: 720; line-height: 1.45; text-align: center; }
  .form-message.error { color: #a34e47; }
  .form-message.success { color: #44713c; }
`;

const HelpContent: React.FC<{ section: HelpSection }> = ({ section }) => {
  const { dict, lang } = useTranslation();
  const accessibility = getAccessibilityLabels(lang);
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
      <TabList as="nav" aria-label={accessibility.helpSections}>
        <NavLink to="/help/contact" end>{labels.contact}</NavLink>
        <NavLink to="/help/faq" end>{labels.faq}</NavLink>
      </TabList>
      {section === 'faq' && <FaqList />}
      {section === 'documents' && <Placeholder>{dict.help?.docsPlaceholder ?? 'Documentation is being updated...'}</Placeholder>}
      {section === 'contact' && (
        <Form onSubmit={(event) => { void submit(event); }}>
          <FormLabel><LabelText className="label-text">{labels.email}<Required className="required" aria-hidden="true">*</Required></LabelText><LabelInput required name="email" type="email" autoComplete="email" placeholder="email@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} />{showEmailSuggestions && <EmailSuggestions className="email-suggestions">{EMAIL_DOMAINS.map((domain) => <EmailSuggestionsButton type="button" key={domain} onClick={() => setEmail(`${emailLocalPart}${domain}`)}>{domain}</EmailSuggestionsButton>)}</EmailSuggestions>}</FormLabel>
          <FormLabel><LabelText className="label-text">{labels.problem}<Required className="required" aria-hidden="true">*</Required></LabelText><LabelTextarea required name="problem" placeholder={labels.problemPlaceholder} /></FormLabel>
          <MediaField className="media-field"><MediaHeading className="media-heading"><LabelText className="label-text">{labels.media}</LabelText></MediaHeading>
            <MediaGrid className="media-grid">
              {mediaItems.map(({ file, previewUrl }, index) => <MediaItemSpanElement className="media-item" key={`${file.name}-${file.lastModified}-${index}`}><MediaPreview className="media-preview">{file.type.startsWith('video/') ? <MediaPreviewVideo src={previewUrl} muted preload="metadata" /> : <MediaPreviewImg src={previewUrl} alt="" />}<MediaRemove className="media-remove" type="button" aria-label={`${labels.removeMedia} ${file.name}`} onClick={() => removeMedia(index)}><X size={15} /></MediaRemove></MediaPreview><MediaName className="media-name" title={file.name}>{file.name}</MediaName></MediaItemSpanElement>)}
              {mediaItems.length < MAX_MEDIA && <MediaInput className="media-input" aria-label={labels.addMedia}><MediaInputInput type="file" accept="image/*,video/*" multiple onChange={selectFiles} /><Plus size={30} strokeWidth={2.2} /><MediaCount className="media-count">{mediaItems.length}/{MAX_MEDIA}</MediaCount></MediaInput>}
            </MediaGrid>
            <MediaLimit className="media-limit"><Info size={14} strokeWidth={2.2} aria-hidden="true" />{labels.mediaLimit}</MediaLimit>
          </MediaField>
          <Submit className="submit" type="submit" disabled={submitting}><Send size={17} />{submitting ? labels.sending : labels.send}</Submit>
          {formMessage && <FormP className={`form-message ${formMessage.tone}`} role={formMessage.tone === 'error' ? 'alert' : 'status'}>{formMessage.text}</FormP>}
        </Form>
      )}
    </>
  );
};

export default HelpContent;
