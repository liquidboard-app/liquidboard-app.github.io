import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_id: React.FC = () => (
  <>
    <p>LiquidBoard adalah aplikasi manajemen clipboard untuk teks, gambar dan stiker di iPhone. Aplikasi ini membantu Anda membuat konten yang sering digunakan atau menyimpan konten yang Anda salin dari aplikasi atau perangkat lain. Serangkaian fitur lengkap disediakan untuk menyederhanakan pengelolaan data.</p>
    <p>LiquidBoard terintegrasi dengan keyboard iPhone Anda sehingga lebih mudah mengirim teks, gambar dan stiker yang sudah tersimpan. Anda dapat menggunakannya untuk menyimpan teks yang sering dipakai, gambar QR Code dan membuat stiker favorit.</p>
    <p>Semua data disimpan secara lokal dan aman di perangkat Anda atau di iCloud Anda saat sinkronisasi. LiquidBoard berkomitmen untuk tidak menyimpan, menggunakan atau mengunggah data Anda ke tempat lain.</p>
    <p>Fitur Stiker di aplikasi dibuat dengan Vision Framework, pustaka computer vision dan machine learning Apple yang terintegrasi di perangkat iOS, untuk memisahkan latar belakang dan memotong stiker.</p>
    <p>Semua komitmen tentang izin dan fitur diterapkan serta dikontrol oleh Apple melalui dokumen Keamanan Data dan Privasi di dalam aplikasi.</p>
    <p>Kami mempublikasikan dokumen ini di aplikasi dan di situs web ini. <br /><Link to="/policy/data-security">Keamanan Data</Link><br /><Link to="/policy/privacy">Privasi</Link></p>
    <p>Di masa mendatang, kami akan berupaya memperluas fitur AI pada versi iOS terbaru dengan Siri AI serta versi untuk macOS dan iPadOS. LiquidBoard berkomitmen untuk mengembangkan fitur AI hanya pada tingkat sistem demi melindungi izin dan data sensitif pengguna.</p>
  </>
);

export default AboutContent_id;
