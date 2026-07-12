import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { FileImage, FileVideo, Send, X } from 'lucide-react';
import styled from 'styled-components';
import { GlassCard } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import FaqList from '../FaqList';

type HelpTab = 'faq' | 'documents' | 'contact';

const MAX_MEDIA = 5;
const MAX_MEDIA_BYTES = 20 * 1024 * 1024;
const contactEndpointPlaceholder = 'https://script.google.com/macros/s/AKfycbxLiquidBoardContactPlaceholder/exec';

const readFileAsBase64 = (file: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = () => reject(new Error(`Unable to read ${file.name}.`));
  reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '');
  reader.readAsDataURL(file);
});

const TabList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0 0 32px;
  button { padding: 10px 17px; border: 1px solid rgba(70, 48, 38, .1); border-radius: 999px; background: transparent; color: #785e52; font: inherit; font-size: 17px; font-weight: 740; transition: transform .18s ease, background .18s ease, border-color .18s ease, color .18s ease; }
  button:hover { border-color: rgba(70, 48, 38, .28); color: #2c2623; transform: translateY(-2px); }
  button[aria-selected='true'] { border-color: #2c2724; background: #2c2724; color: #fff3e4; }
  @media (max-width: 600px) { gap: 6px; button { padding: 9px 13px; font-size: 15px; } }
`;

const Placeholder = styled(GlassCard)`
  padding: clamp(30px, 5dvw, 58px);
  color: #665249;
  font-size: clamp(17px, 1.35dvw, 20px);
  line-height: 1.58;
  text-align: center;
`;

const Form = styled(GlassCard)`
  display: grid;
  gap: 18px;
  padding: clamp(20px, 4dvw, 38px);
  label { display: grid; gap: 8px; color: #3a302c; font-size: 15px; font-weight: 760; }
  input, textarea { width: 100%; border: 1px solid rgba(79, 53, 41, .16); border-radius: 14px; outline: 0; background: rgba(255, 247, 237, .72); color: #302824; font: inherit; font-size: 16px; font-weight: 540; transition: border-color .18s ease, box-shadow .18s ease; }
  input { height: 50px; padding: 0 14px; }
  textarea { min-height: 160px; padding: 14px; resize: vertical; }
  input:focus, textarea:focus { border-color: #8c6c5d; box-shadow: 0 0 0 4px rgba(140,108,93,.12); }
  .media-input { display: flex; min-height: 84px; align-items: center; justify-content: center; padding: 16px; border: 1px dashed rgba(79,53,41,.27); border-radius: 16px; background: rgba(255,247,237,.4); color: #665249; cursor: pointer; text-align: center; }
  .media-input input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
  .media-input strong { color: #382e29; }
  .media-list { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
  .media-list li { display: flex; min-width: 0; align-items: center; gap: 9px; padding: 10px 12px; border-radius: 12px; background: rgba(105,75,58,.07); color: #5e4c43; font-size: 14px; font-weight: 650; }
  .media-list span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .media-list button { display: grid; width: 28px; height: 28px; margin-left: auto; padding: 0; place-items: center; border: 0; border-radius: 9px; background: rgba(72,52,43,.1); color: #302824; }
  .submit { display: inline-flex; min-height: 50px; align-items: center; justify-content: center; gap: 8px; padding: 0 20px; border: 0; border-radius: 16px; background: #2c2724; color: #fff3e4; font: inherit; font-size: 16px; font-weight: 800; transition: transform .18s ease, opacity .18s ease; }
  .submit:hover:not(:disabled) { transform: translateY(-2px); }
  .submit:disabled { cursor: wait; opacity: .6; }
  .status { margin: 0; color: #665249; font-size: 14px; font-weight: 650; }
  .status.error { color: #a34e47; }
`;

const HelpContent: React.FC = () => {
  const { dict } = useTranslation();
  const [tab, setTab] = useState<HelpTab>('faq');
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const labels = useMemo(() => ({
    faq: dict.help?.faqTab ?? 'FAQs',
    documents: dict.help?.docsTab ?? 'Documents',
    contact: 'Contact',
  }), [dict.help]);

  const selectFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const chosen = Array.from(event.target.files ?? []).filter((file) => file.type.startsWith('image/') || file.type.startsWith('video/'));
    const available = MAX_MEDIA - files.length;
    const next = chosen.slice(0, Math.max(0, available));
    const totalBytes = [...files, ...next].reduce((total, file) => total + file.size, 0);
    if (totalBytes > MAX_MEDIA_BYTES) {
      setStatus('Media attachments must total 20 MB or less.');
      event.target.value = '';
      return;
    }
    if (next.length !== chosen.length) setStatus('You can attach up to 5 images or videos.');
    else setStatus('');
    setFiles((current) => [...current, ...next]);
    event.target.value = '';
  };

  const submit = async (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const endpoint = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || contactEndpointPlaceholder;
    setSubmitting(true);
    setStatus('');
    try {
      const data = new FormData(form);
      const media = await Promise.all(files.map(async (file) => ({
        name: file.name,
        type: file.type,
        base64: await readFileAsBase64(file),
      })));
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ email: data.get('email'), problem: data.get('problem'), media }),
      });
      if (!response.ok) throw new Error('Unable to send the report.');
      const result = await response.json() as { ok?: boolean; error?: string };
      if (!result.ok) throw new Error(result.error || 'Unable to send the report.');
      form.reset();
      setFiles([]);
      setStatus('Thanks — your report has been sent.');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to send the report.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <TabList role="tablist" aria-label="Help sections">
        {(Object.keys(labels) as HelpTab[]).map((name) => <button type="button" role="tab" key={name} aria-selected={tab === name} onClick={() => setTab(name)}>{labels[name]}</button>)}
      </TabList>
      {tab === 'faq' && <FaqList />}
      {tab === 'documents' && <Placeholder>{dict.help?.docsPlaceholder ?? 'Documentation is being updated...'}</Placeholder>}
      {tab === 'contact' && (
        <Form onSubmit={(event) => { void submit(event); }}>
          <label>Your email<input required name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
          <label>Problem<textarea required name="problem" placeholder="Tell us what happened…" /></label>
          <label>Media (optional)
            <span className="media-input"><input type="file" accept="image/*,video/*" multiple onChange={selectFiles} /><span><strong>Choose images or videos</strong><br />Up to 5 files, 20 MB total</span></span>
          </label>
          {files.length > 0 && <ul className="media-list">{files.map((file, index) => <li key={`${file.name}-${file.lastModified}-${index}`}>{file.type.startsWith('video/') ? <FileVideo size={17} /> : <FileImage size={17} />}<span>{file.name}</span><button type="button" aria-label={`Remove ${file.name}`} onClick={() => setFiles((current) => current.filter((_, fileIndex) => fileIndex !== index))}><X size={16} /></button></li>)}</ul>}
          <button className="submit" type="submit" disabled={submitting}><Send size={17} />{submitting ? 'Sending…' : 'Send'}</button>
          {status && <p className={`status ${status.startsWith('Unable') ? 'error' : ''}`} role="status">{status}</p>}
        </Form>
      )}
    </>
  );
};

export default HelpContent;
