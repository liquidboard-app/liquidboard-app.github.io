import React from 'react';
import { SectionDownload } from '../../styled';
import AppStoreButton from '../AppStoreButton';

type SocialName = 'facebook' | 'x' | 'threads' | 'tiktok';

const SocialMark = ({ name }: { name: SocialName }) => {
  if (name === 'facebook') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 8.2V6.5c0-.8.5-1 1-1h2.5V2.1L14.3 2C10.9 2 10 4.6 10 6.3v1.9H7.8V12H10v10h4.2V12h3l.5-3.8h-3.5Z" /></svg>;
  if (name === 'x') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-6.4L6.5 22H3.4l7.2-8.3L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9Z" /></svg>;
  if (name === 'threads') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M16.6 8.1c-1.1-1.5-2.8-2.2-4.8-2.2-3.6 0-6.1 2.4-6.1 6.1 0 4 2.6 6.5 6.3 6.5 3.3 0 5.5-1.7 5.5-4.2 0-2.2-1.8-3.5-4.6-3.5-2.4 0-3.9 1-3.9 2.6 0 1.3 1.1 2.2 2.7 2.2 2.8 0 4.7-2.3 4.7-5.5 0-4.7-2.6-7.6-6.9-7.6" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.8 2c.4 2.3 1.7 3.7 4.2 3.9v3.2c-1.5.1-2.9-.3-4.1-1.1v6.5a7.5 7.5 0 1 1-6.5-7.4v3.4a4.1 4.1 0 1 0 3 4V2h3.4Z" /></svg>;
};

const socialLinks: Array<{ name: SocialName; href: string; label: string }> = [
  { name: 'facebook', href: 'https://facebook.com', label: 'Facebook' },
  { name: 'x', href: 'https://x.com', label: 'X' },
  { name: 'threads', href: 'https://threads.net', label: 'Threads' },
  { name: 'tiktok', href: 'https://tiktok.com', label: 'TikTok' },
];

const DownloadSection: React.FC = () => (
  <SectionDownload>
    <AppStoreButton />
    <div className="socials" aria-label="Social media links">
      {socialLinks.map(({ name, href, label }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><SocialMark name={name} /></a>
      ))}
    </div>
  </SectionDownload>
);

export default DownloadSection;
