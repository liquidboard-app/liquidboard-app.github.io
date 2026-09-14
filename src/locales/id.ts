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
  coreClipboard: { line1: 'Dari Clipboard di aplikasi,', line2: 'ke Keyboard iOS Anda.' },
  actionClipboard: {
    sectionLabel: 'Fitur LiquidBoard',
    progressLabel: 'Progres fitur Clipboard',
    groupTitle: { primary: 'Nama', secondary: 'grup' },
    groupDescription: 'Klasifikasikan sesuai kebutuhan',
    pinDescription: 'Yang penting di urutan teratas',
    shareDescription: 'Kirim ke semua platform',
    exportTitle: 'Impor / Ekspor',
    exportDescription: 'Simpan dan impor dengan JSON atau CSV',
    voiceTitle: 'Suara',
    voiceDescription: 'Dari audio menjadi teks',
    scanTitle: 'Pindai',
    scanDescription: 'Impor semua teks yang ditemukan',
    clipboardTitle: 'Clipboard Sistem',
    clipboardDescription: 'Salin dari mana saja',
    icloudTitle: 'iCloud',
    icloudDescription: 'Simpan clipboard di cloud',
    featureLabels: { group: 'Grup', pin: 'Sematkan', share: 'Bagikan', export: 'Ekspor file', voice: 'Suara', scanText: 'Pindai Teks', systemPasteboard: 'Clipboard Sistem', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "Unduh\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
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
