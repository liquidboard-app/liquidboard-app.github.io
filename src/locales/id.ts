import { LocaleDict } from './types';

const id: LocaleDict = {
  browserTitle: 'LiquidBoard — Salin dan tempel dengan cepat dan aman',
  browserDescription: 'LiquidBoard menata teks, foto, stiker, dan tautan agar siap ditempel langsung dari papan ketik iPhone Anda.',
  nav: {
    home: "Beranda",
    about: "Tentang",
    pricing: "Harga",
    policy: "Kebijakan",
    help: "Bantuan",
  },
  hero: {
    line1: "Bawa papan klip nyata",
    line2: { left: "ke dalam", right: "Keyboard iOS-mu" },
  },
  header: {
    download: { prefix: "Unduh\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  action: {
    download: "Unduh LiquidBoard",
    titles: ['Buat Grup', 'Sematkan', 'Salin & Gandakan', 'Impor & Ekspor File'],
    paragraphs: [
      'Buat grup tambahan dan kategorikan teks, gambar dan stiker berdasarkan kebutuhan Anda. Beralih dengan mulus antar grup dan sematkan grup penting ke atas terlebih dahulu.',
      'Sematkan teks, gambar dan stiker penting yang sering Anda gunakan ke atas sehingga Anda dapat mengirimkannya lebih cepat.',
      'Salin dan gandakan teks, gambar dan stiker dengan mudah dan cepat.',
      'Ekspor dan impor data teks sebagai JSON dan CSV langsung melalui aplikasi File.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard groups' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard pinned items' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard copy and duplicate' },
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard import and export files' },
    ],
  },
  pricing: {
    intro: { 
      line1: "Pilih paket yang tepat untuk cara Anda menyimpan, mengatur dan berbagi konten setiap hari.", 
      line2: "Setiap paket adalah pembelian satu kali untuk akses seumur hidup." 
    },
    fromPrice: 'Mulai dari {price}',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Akses Seumur Hidup',
        price: 'Rp0',
        description: 'Paket uji coba',
        features: ['20 Teks', '20 Gambar', '20 Stiker', '2 Grup Per Jenis', '2 Sematan Per Grup'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Akses Seumur Hidup',
        price: 'Rp65.000',
        description: 'Paket dasar',
        features: ['100 Teks', '100 Gambar', '100 Stiker', '5 Grup Per Jenis', '5 Sematan Per Grup'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Akses Seumur Hidup',
        price: 'Rp135.000',
        description: 'Paket multitasking',
        features: ['250 Teks', '250 Gambar', '250 Stiker', '15 Grup Per Jenis', '15 Sematan Per Grup'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Akses Seumur Hidup',
        price: 'Rp249.000',
        description: 'Paket profesional',
        features: ['500 Teks', '500 Gambar', '500 Stiker', '40 Grup Per Jenis', '40 Sematan Per Grup'],
      },
    ],
  },
  features: {
    titles: ['Teks', 'Gambar', 'Stiker'],
    paragraphs: [
      'Buat dan tulis beberapa dokumen teks, informasi pengantar dan konten yang disesuaikan dengan kebutuhan penulisan Anda. Siapkan templat respons bawaan untuk penggunaan langsung. Masukkan dan bagikan informasi kontak dengan cepat. Simpan tautan situs web, cuplikan kode, struktur prompt AI untuk referensi dan penggunaan kembali yang efisien.',
      'Bagikan kode QR pembayaran dan kode QR transfer bank dengan cepat. Akses beragam koleksi prototipe sampel produk, maket desain, infografis dan tangkapan layar instruksional. Atur dan ambil aset visual dengan mulus untuk komunikasi profesional.',
      'Buat dan bagikan stiker, meme favorit, pesan ucapan selamat dan ekspresi emosional secara instan untuk terhubung dengan orang terkasih dan pelanggan. Personalisasikan komunikasi Anda dengan elemen visual yang menyampaikan perasaan dan meningkatkan keterlibatan.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard keyboard view' },
    ],
  }
,
  policy: {
    dataSecurity: "Keamanan Data",
    privacy: "Privasi",
    terms: "Syarat Penggunaan",
    payment: "Pembayaran & Pengembalian",
  },
  help: {
    faqTab: 'Tanya Jawab',
    docsTab: 'Dokumen',
    docsPlaceholder: "Dokumentasi sedang diperbarui...",
    contactTab: 'Kontak', email: 'Email', problem: 'Masalah', problemPlaceholder: 'Ceritakan kepada kami apa yang terjadi…', media: 'Lampiran', addMedia: 'Tambah file', mediaLimit: 'Maksimal 20 MB per file', removeMedia: 'Hapus', send: 'Kirim', sending: 'Mengirim…', mediaTooLarge: 'Setiap lampiran tidak boleh melebihi 20 MB.', mediaMax: 'Anda dapat melampirkan hingga 5 gambar atau video.', sent: 'Terima kasih — laporan Anda telah dikirim.', sendFailed: 'Laporan tidak dapat dikirim.',
  }
};

export default id;
