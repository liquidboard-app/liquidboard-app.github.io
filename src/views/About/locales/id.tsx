import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_id: React.FC = () => (
  <>
    <p>LiquidBoard adalah aplikasi manajemen clipboard untuk teks dan gambar. Aplikasi ini membantu Anda membuat konten yang sering digunakan atau menyimpan konten yang disalin dari aplikasi lain. Fitur seperti pencarian, pengurutan, pengelompokan, menyematkan konten penting, dan mengekspor file dalam format JSON atau CSV semuanya didukung untuk mempermudah manajemen data.</p>
    <p>LiquidBoard terintegrasi ke keyboard Anda untuk memudahkan mengirim teks dan gambar yang telah disimpan sebelumnya atau disalin sebelumnya. Anda dapat menggunakan aplikasi ini untuk menyimpan frasa harian yang sering digunakan untuk pelanggan, konten laporan, tautan penjualan, nomor akun, alamat, Kode QR, dll. Selain itu, LiquidBoard memiliki bagian Stiker, yang memungkinkan Anda membuat stiker dari gambar yang ditambahkan.</p>
    <p>Semua data disimpan secara lokal dan aman di perangkat Anda serta iCloud (setelah menghubungkan iCloud). LiquidBoard berkomitmen untuk tidak menyimpan atau mengunggah data Anda ke tempat lain. Semua komitmen ditegakkan dan dikontrol oleh Apple melalui <Link to="/policy/data-security">Keamanan Data</Link> dan <Link to="/policy/privacy">Privasi</Link> kebijakan dalam aplikasi. Kami mempublikasikan dokumen-dokumen ini secara terbuka di aplikasi dan di situs web kami, dan Anda dapat dengan mudah menemukannya di <Link to="/policy/data-security">Keamanan Data</Link> dan <Link to="/policy/privacy">Privasi</Link>.</p>
  </>
);
export default AboutContent_id;
