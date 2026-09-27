import { AboutParagraph, AboutLineBreak } from './elements';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_bn: React.FC = () => (
  <>
    <AboutParagraph>LiquidBoard iPhone-এ টেক্সট, ছবি এবং স্টিকারের জন্য একটি ক্লিপবোর্ড ম্যানেজমেন্ট অ্যাপ। অ্যাপটি আপনাকে বারবার ব্যবহৃত কনটেন্ট তৈরি করতে বা অন্য অ্যাপ বা ডিভাইস থেকে কপি করা কনটেন্ট সংরক্ষণ করতে সাহায্য করে। ডেটা ব্যবস্থাপনা সহজ করার জন্য পূর্ণাঙ্গ ফিচার দেওয়া হয়েছে।</AboutParagraph>
    <AboutParagraph>LiquidBoard আপনার iPhone কিবোর্ডের সঙ্গে একীভূত হয়, যাতে সংরক্ষিত টেক্সট, ছবি এবং স্টিকার পাঠানো সহজ হয়। আপনি প্রায়ই ব্যবহৃত পুনরাবৃত্ত টেক্সট, QR Code ছবি এবং পছন্দের স্টিকার তৈরি ও সংরক্ষণ করতে পারেন।</AboutParagraph>
    <AboutParagraph>সিঙ্ক করার সময় সব ডেটা আপনার ডিভাইস বা আপনার iCloud-এ স্থানীয়ভাবে এবং নিরাপদে সংরক্ষিত থাকে। LiquidBoard আপনার কোনো ডেটা অন্য কোথাও সংরক্ষণ, ব্যবহার বা আপলোড না করার অঙ্গীকার করে।</AboutParagraph>
    <AboutParagraph>অ্যাপের স্টিকার ফিচারটি Vision Framework দিয়ে তৈরি, যা iOS ডিভাইসে অন্তর্ভুক্ত Apple-এর কম্পিউটার ভিশন ও মেশিন লার্নিং লাইব্রেরি, ব্যাকগ্রাউন্ড আলাদা করা এবং স্টিকার কাটার জন্য ব্যবহৃত হয়।</AboutParagraph>
    <AboutParagraph>অনুমতি ও ফিচার সম্পর্কিত সব অঙ্গীকার Apple অ্যাপের ডেটা নিরাপত্তা এবং গোপনীয়তা নথির মাধ্যমে বাস্তবায়ন ও নিয়ন্ত্রণ করে।</AboutParagraph>
    <AboutParagraph>আমরা এই নথিগুলো অ্যাপে এবং এই ওয়েবসাইটে প্রকাশ করি. <AboutLineBreak /><Link to="/policy/data-security">ডেটা নিরাপত্তা</Link><AboutLineBreak /><Link to="/policy/privacy">গোপনীয়তা</Link></AboutParagraph>
    <AboutParagraph>ভবিষ্যতে আমরা Siri AI সহ সর্বশেষ iOS সংস্করণ এবং macOS ও iPadOS সংস্করণে AI ফিচার বাড়ানোর চেষ্টা করব। LiquidBoard ব্যবহারকারীর অনুমতি এবং সংবেদনশীল ডেটা সুরক্ষিত রাখতে শুধু সিস্টেম-স্তরে AI ফিচার উন্নয়নের অঙ্গীকার করে।</AboutParagraph>
  </>
);

export default AboutContent_bn;
