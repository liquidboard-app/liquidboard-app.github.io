import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Kebijakan Keamanan Data</PolicyHeading>
                <PolicyParagraph>Terakhir diperbarui: 05 Juni 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard dirancang dengan pendekatan privasi terlebih dahulu. Data Anda tidak pernah meninggalkan perangkat Anda kecuali Anda secara eksplisit memilih untuk mengaktifkan Sinkronisasi iCloud. Kami tidak memiliki server, tidak ada akun dan tidak memiliki akses ke konten Anda.</PolicyParagraph>

                <PolicyHeading>Penyimpanan Data</PolicyHeading>
                <PolicyParagraph>Semua konten yang Anda buat di LiquidBoard — potongan teks, gambar dan stiker — disimpan di salah satu dari dua tempat:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Penyimpanan di perangkat</PolicyEmphasis>— Dikelola oleh iOS dan hanya dapat diakses oleh LiquidBoard. Aplikasi lain tidak dapat membaca data Anda.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (opsional)</PolicyEmphasis>— Disinkronkan melalui Apple ID pribadi Anda menggunakan infrastruktur CloudKit terenkripsi milik Apple.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Tidak ada data yang disimpan di server kami. Kami tidak mengoperasikan infrastruktur backend apa pun.</PolicyParagraph>

                <PolicyHeading>Enkripsi</PolicyHeading>
                <PolicyParagraph>Data Anda dilindungi oleh iOS dan lapisan keamanan Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Saat istirahat</PolicyEmphasis>— Data yang disimpan di perangkat Anda dienkripsi oleh iOS menggunakan kode sandi perangkat Anda dan Secure Enclave.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Dalam perjalanan</PolicyEmphasis>— Jika Sinkronisasi iCloud diaktifkan, data akan dienkripsi oleh CloudKit Apple sebelum dikirimkan.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Cadangan iCloud</PolicyEmphasis>— Jika perangkat Anda dibackup ke iCloud, data aplikasi termasuk dalam sistem backup terenkripsi Apple.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Keamanan Foto & Gambar</PolicyHeading>
                <PolicyParagraph>LiquidBoard mengakses perpustakaan foto Anda hanya ketika Anda secara eksplisit memilih untuk memilih atau mengimpor foto. Aplikasi ini:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Tidak mengakses perpustakaan foto Anda di latar belakang</PolicyListItem>
                  <PolicyListItem>Tidak mengunggah foto ke server mana pun</PolicyListItem>
                  <PolicyListItem>Menyimpan gambar yang dipilih secara lokal di dalam wadah sandbox aplikasi</PolicyListItem>
                  <PolicyListItem>Memproses pembuatan stiker sepenuhnya di perangkat</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Anda dapat mencabut akses foto kapan saja di Pengaturan → Privasi & Keamanan → Foto.</PolicyParagraph>

                <PolicyHeading>Keamanan Ekstensi Keyboard</PolicyHeading>
                <PolicyParagraph>Ekstensi keyboard tidak mengumpulkan, mencatat atau mengirimkan data ketikan atau teks yang Anda ketik di aplikasi lain.</PolicyParagraph>
                <PolicyParagraph>Akses Penuh diperlukan untuk ekstensi keyboard agar dapat menempelkan gambar dan stiker, serta untuk mengakses Sinkronisasi iCloud. Bahkan dengan Akses Penuh diaktifkan, ekstensi keyboard beroperasi sepenuhnya di dalam lingkungan sandbox iOS. Ekstensi ini tidak memiliki kemampuan untuk mengirim data ke server eksternal.</PolicyParagraph>

                <PolicyHeading>Tidak Ada Akses Data Pihak Ketiga</PolicyHeading>
                <PolicyParagraph>LiquidBoard tidak mengintegrasikan salah satu dari berikut ini:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>SDK analitik atau pelaporan kerusakan, seperti Firebase atau Mixpanel</PolicyListItem>
                  <PolicyListItem>Jaringan periklanan atau SDK pelacakan</PolicyListItem>
                  <PolicyListItem>Layanan penyimpanan atau pemrosesan awan pihak ketiga</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Konten Anda tidak pernah dibagikan dengan atau dapat diakses oleh pihak ketiga mana pun.</PolicyParagraph>

                <PolicyHeading>Sandbox Aplikasi</PolicyHeading>
                <PolicyParagraph>LiquidBoard berjalan di dalam sandbox aplikasi yang ketat di iOS. Ini berarti aplikasi lain di perangkat Anda tidak dapat mengakses data LiquidBoard dan LiquidBoard tidak dapat mengakses data milik aplikasi lain kecuali konten yang secara eksplisit Anda tempel melalui ekstensi keyboard.</PolicyParagraph>

                <PolicyHeading>Kontrol Anda</PolicyHeading>
                <PolicyParagraph>Anda memiliki kendali penuh atas data Anda setiap saat:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Aktifkan atau nonaktifkan Sinkronisasi iCloud dari dalam aplikasi</PolicyListItem>
                  <PolicyListItem>Cabut akses perpustakaan foto di Pengaturan iOS</PolicyListItem>
                  <PolicyListItem>Nonaktifkan Akses Penuh untuk keyboard di Pengaturan → Umum → Keyboard → Keyboard</PolicyListItem>
                  <PolicyListItem>Hapus semua data dengan menghapus aplikasi</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Kontak</PolicyHeading>
                <PolicyParagraph>Jika Anda memiliki pertanyaan tentang keamanan data, silakan hubungi kami di:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>Kebijakan Privasi</PolicyHeading>
                <PolicyParagraph>Terakhir diperbarui: 05 Juni 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard ("kami", "milik kami" atau "aplikasi") berkomitmen untuk menjaga privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami menangani informasi saat Anda menggunakan LiquidBoard dan ekstensi keyboardnya.</PolicyParagraph>

                <PolicyHeading>Data yang Kami Kumpulkan</PolicyHeading>
                <PolicyParagraph>LiquidBoard tidak mengumpulkan, menyimpan atau mengirimkan data pribadi apa pun ke server eksternal. Semua data yang Anda buat di dalam aplikasi — termasuk potongan teks, gambar, stiker, kategori dan pengaturan — disimpan secara eksklusif di perangkat Anda atau di akun iCloud pribadi Anda.</PolicyParagraph>

                <PolicyHeading>Foto & Gambar</PolicyHeading>
                <PolicyParagraph>LiquidBoard mungkin meminta akses ke perpustakaan foto Anda untuk tujuan berikut:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Menyisipkan gambar ke dalam cuplikan Anda</PolicyListItem>
                  <PolicyListItem>Membuat stiker kustom dari foto Anda</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Foto yang Anda pilih disimpan secara lokal di perangkat Anda dan/atau disinkronkan ke akun iCloud pribadi Anda. Kami tidak mengunggah, mengirim atau mengakses foto Anda dengan cara apa pun. Akses pustaka foto hanya digunakan pada saat Anda secara eksplisit memilih gambar — aplikasi tidak mengakses pustaka Anda di latar belakang.</PolicyParagraph>

                <PolicyHeading>Stiker</PolicyHeading>
                <PolicyParagraph>LiquidBoard memungkinkan Anda untuk:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Buat stiker kustom dari foto Anda sendiri</PolicyListItem>
                  <PolicyListItem>Sisipkan stiker melalui ekstensi keyboard</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Stiker kustom yang Anda buat dari foto Anda disimpan hanya di perangkat Anda dan/atau iCloud. Tidak ada konten stiker atau data gambar yang dikirimkan kepada kami.</PolicyParagraph>

                <PolicyHeading>Ekstensi Keyboard & Akses Penuh</PolicyHeading>
                <PolicyParagraph>Ekstensi keyboard ini tidak mengumpulkan, merekam atau mengirim data ketikan atau teks yang Anda ketik.</PolicyParagraph>
                <PolicyParagraph>Ekstensi keyboard LiquidBoard memerlukan Akses Penuh untuk diaktifkan agar dapat:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Tempel gambar dan stiker ke aplikasi lain</PolicyListItem>
                  <PolicyListItem>Sinkronkan potongan dan stiker Anda melalui iCloud di semua perangkat Anda</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Akses Penuh hanya digunakan untuk fitur-fitur ini. Keyboard tidak mencatat, merekam atau mengirimkan apa pun yang Anda ketik di aplikasi lain. Tidak ada data yang dikirim ke server eksternal manapun.</PolicyParagraph>

                <PolicyHeading>Sinkronisasi iCloud</PolicyHeading>
                <PolicyParagraph>Jika Anda memilih untuk mengaktifkan Sinkronisasi iCloud, potongan teks, gambar dan stiker Anda akan disinkronkan melalui infrastruktur iCloud Apple menggunakan Apple ID pribadi Anda. Data ini diatur oleh Kebijakan Privasi Apple. Kami tidak memiliki akses ke data iCloud Anda.</PolicyParagraph>

                <PolicyHeading>Berbagi Data</PolicyHeading>
                <PolicyParagraph>Kami tidak menjual, membagikan atau mengungkapkan data Anda kepada pihak ketiga mana pun. Kami tidak menggunakan analitik pihak ketiga, SDK iklan atau alat pelacakan apa pun.</PolicyParagraph>

                <PolicyHeading>Penyimpanan & Penghapusan Data</PolicyHeading>
                <PolicyParagraph>Data Anda tetap berada di perangkat Anda dan/atau akun iCloud Anda dan sepenuhnya berada di bawah kendali Anda. Anda dapat menghapus data Anda kapan saja dengan cara:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Menghapus cuplikan, gambar atau stiker individual di dalam aplikasi</PolicyListItem>
                  <PolicyListItem>Mencabut akses perpustakaan foto di Pengaturan → Privasi → Foto</PolicyListItem>
                  <PolicyListItem>Menghapus aplikasi, yang menghapus semua data yang disimpan secara lokal</PolicyListItem>
                  <PolicyListItem>Menonaktifkan Sinkronisasi iCloud dan menghapus data iCloud aplikasi dari Pengaturan → [Nama Anda] → iCloud → Kelola Penyimpanan</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Privasi Anak-Anak</PolicyHeading>
                <PolicyParagraph>LiquidBoard tidak sengaja mengumpulkan informasi dari anak-anak di bawah usia 13 tahun. Aplikasi ini tidak mengumpulkan data pribadi dari pengguna mana pun.</PolicyParagraph>

                <PolicyHeading>Perubahan pada Kebijakan Ini</PolicyHeading>
                <PolicyParagraph>Kami mungkin memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan tercermin di aplikasi dan di situs web kami dengan tanggal yang diperbarui.</PolicyParagraph>

                <PolicyHeading>Kontak</PolicyHeading>
                <PolicyParagraph>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>Syarat Penggunaan</PolicyHeading>
                <PolicyParagraph>Terakhir diperbarui: 05 Juni 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Dengan mengunduh, menginstal atau menggunakan LiquidBoard ("Aplikasi"), Anda setuju untuk terikat oleh Ketentuan Penggunaan ini. Jika Anda tidak setuju dengan ketentuan ini, mohon jangan gunakan Aplikasi.</PolicyParagraph>

                <PolicyHeading>Lisensi</PolicyHeading>
                <PolicyParagraph>Kami memberikan Anda lisensi terbatas, non-eksklusif, non-transferable, yang dapat dibatalkan untuk menggunakan LiquidBoard untuk tujuan pribadi dan non-komersial Anda, sesuai dengan Ketentuan ini.</PolicyParagraph>
                <PolicyParagraph>Anda tidak boleh:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Menyalin, memodifikasi atau mendistribusikan Aplikasi atau kontennya</PolicyListItem>
                  <PolicyListItem>Membalikkan rekayasa atau mencoba mengekstrak kode sumber</PolicyListItem>
                  <PolicyListItem>Gunakan Aplikasi untuk tujuan yang melanggar hukum atau tidak sah</PolicyListItem>
                  <PolicyListItem>Menjual, memberikan lisensi turun atau mentransfer akses ke Aplikasi kepada pihak ketiga mana pun</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Konten Anda</PolicyHeading>
                <PolicyParagraph>Anda tetap memegang kepemilikan penuh atas semua potongan teks, gambar dan stiker yang Anda buat atau impor ke LiquidBoard. Kami tidak mengklaim hak apa pun atas konten Anda.</PolicyParagraph>
                <PolicyParagraph>Anda sepenuhnya bertanggung jawab untuk memastikan bahwa konten yang Anda buat atau tempel menggunakan Aplikasi tidak melanggar hak pihak ketiga, termasuk hak cipta, merek dagang atau hak privasi.</PolicyParagraph>

                <PolicyHeading>Penggunaan yang Dapat Diterima</PolicyHeading>
                <PolicyParagraph>Anda setuju untuk tidak menggunakan LiquidBoard untuk membuat, menyimpan atau mendistribusikan konten yang:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Ilegal, berbahaya, mengancam atau mengganggu</PolicyListItem>
                  <PolicyListItem>Melanggar hak kekayaan intelektual orang lain</PolicyListItem>
                  <PolicyListItem>Mengandung malware, virus atau kode berbahaya</PolicyListItem>
                  <PolicyListItem>Melanggar hukum lokal, nasional atau internasional yang berlaku</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Pembelian Dalam Aplikasi</PolicyHeading>
                <PolicyParagraph>LiquidBoard menawarkan pembelian dalam aplikasi opsional untuk membuka fitur atau konten tambahan. Semua pembelian diproses oleh Apple melalui App Store dan tunduk pada Ketentuan Penjualan Apple.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Pembelian tidak dapat dikembalikan kecuali sebagaimana diwajibkan oleh hukum yang berlaku atau kebijakan pengembalian dana Apple</PolicyListItem>
                  <PolicyListItem>Harga dapat bervariasi menurut wilayah dan ditampilkan dalam mata uang lokal Anda pada saat pembelian</PolicyListItem>
                  <PolicyListItem>Fitur yang dibeli terhubung dengan Apple ID Anda dan dapat dipulihkan di perangkat mana pun yang masuk dengan Apple ID yang sama</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Untuk meminta pengembalian dana, harap hubungi Apple secara langsung di:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">laporkanmasalah.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>Ekstensi Keyboard & Akses Penuh</PolicyHeading>
                <PolicyParagraph>Mengaktifkan Akses Penuh untuk ekstensi keyboard diperlukan untuk menempelkan gambar dan stiker ke aplikasi lain serta untuk mengaktifkan Sinkronisasi iCloud. Akses Penuh tidak memberi kami akses ke apa pun yang Anda ketik.</PolicyParagraph>
                <PolicyParagraph>Anda mengakui bahwa dengan mengaktifkan Akses Penuh, iOS akan menampilkan pemberitahuan sistem yang memberitahu Anda bahwa pengembang keyboard berpotensi dapat mengakses pengetikan Anda. Kami ingin menegaskan: LiquidBoard tidak mengumpulkan, mencatat atau mengirimkan data ketikan apa pun.</PolicyParagraph>

                <PolicyHeading>Sinkronisasi iCloud</PolicyHeading>
                <PolicyParagraph>Sinkronisasi iCloud adalah fitur opsional yang menggunakan akun Apple iCloud pribadi Anda untuk menyinkronkan data Anda di berbagai perangkat. Penggunaan iCloud tunduk pada Syarat dan Ketentuan Apple. Kami tidak bertanggung jawab atas kehilangan data yang diakibatkan oleh gangguan layanan iCloud.</PolicyParagraph>

                <PolicyHeading>Penafian Jaminan</PolicyHeading>
                <PolicyParagraph>LiquidBoard disediakan "apa adanya" dan "sebagaimana tersedia" tanpa jaminan apa pun, baik secara tersurat maupun tersirat, termasuk tetapi tidak terbatas pada jaminan kelayakan jual, kesesuaian untuk tujuan tertentu atau tidak pelanggaran.</PolicyParagraph>
                <PolicyParagraph>Kami tidak menjamin bahwa Aplikasi akan berjalan terus-menerus, bebas dari kesalahan atau bebas dari virus atau komponen berbahaya lainnya.</PolicyParagraph>

                <PolicyHeading>Batasan Tanggung Jawab</PolicyHeading>
                <PolicyParagraph>Sejauh diizinkan oleh hukum yang berlaku, kami tidak akan bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial atau hukuman, termasuk namun tidak terbatas pada kehilangan data, kehilangan keuntungan atau hilangnya reputasi baik, yang timbul dari penggunaan atau ketidakmampuan Anda untuk menggunakan Aplikasi.</PolicyParagraph>

                <PolicyHeading>Pemutusan</PolicyHeading>
                <PolicyParagraph>Kami berhak untuk menghentikan atau membatasi akses Anda ke Aplikasi kapan saja, tanpa pemberitahuan, untuk perilaku yang kami percaya melanggar Ketentuan ini atau merugikan pengguna lain, kami atau pihak ketiga.</PolicyParagraph>
                <PolicyParagraph>Anda dapat berhenti menggunakan Aplikasi kapan saja dengan menghapusnya dari perangkat Anda.</PolicyParagraph>

                <PolicyHeading>Perubahan pada Ketentuan Ini</PolicyHeading>
                <PolicyParagraph>Kami dapat memperbarui Ketentuan Penggunaan ini dari waktu ke waktu. Penggunaan Aplikasi yang berkelanjutan setelah perubahan dipublikasikan merupakan penerimaan Anda terhadap Ketentuan yang telah direvisi. Kami akan memberi tahu Anda tentang perubahan signifikan melalui Aplikasi atau situs web kami.</PolicyParagraph>

                <PolicyHeading>Hukum yang Mengatur</PolicyHeading>
                <PolicyParagraph>Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yurisdiksi di mana pengembang bertempat, tanpa memperhatikan prinsip-prinsip konflik hukum.</PolicyParagraph>

                <PolicyHeading>Kontak</PolicyHeading>
                <PolicyParagraph>Jika Anda memiliki pertanyaan tentang Ketentuan ini, silakan hubungi kami di:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>Kebijakan Pembayaran & Pengembalian</PolicyHeading>
                <PolicyParagraph>Terakhir diperbarui: 05 Juni 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard menawarkan pembelian dalam aplikasi opsional untuk membuka fitur premium. Semua pembayaran sepenuhnya ditangani oleh Apple melalui App Store — kami tidak memproses, menyimpan atau memiliki akses ke informasi pembayaran Anda.</PolicyParagraph>

                <PolicyHeading>Apa yang Bisa Anda Beli</PolicyHeading>
                <PolicyParagraph>LiquidBoard menawarkan pembelian opsional berikut:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Fitur Premium — Buka sekali atau berlangganan untuk fungsi aplikasi tingkat lanjut</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Pembelian yang tersedia dan harga ditampilkan dalam Aplikasi pada saat pembelian. Harga dapat bervariasi menurut wilayah dan ditampilkan dalam mata uang lokal Anda.</PolicyParagraph>

                <PolicyHeading>Pemrosesan Pembayaran</PolicyHeading>
                <PolicyParagraph>Semua transaksi diproses dengan aman oleh Apple. Kami tidak pernah melihat atau menyimpan kartu kredit, alamat penagihan atau rincian pembayaran Anda.</PolicyParagraph>
                <PolicyParagraph>Dengan menyelesaikan pembelian, Anda setuju dengan Ketentuan Penjualan App Store Apple. Metode pembayaran Anda yang tersimpan di Apple akan dikenakan biaya pada saat konfirmasi pembelian.</PolicyParagraph>

                <PolicyHeading>Memulihkan Pembelian</PolicyHeading>
                <PolicyParagraph>Jika Anda menginstal ulang LiquidBoard atau beralih ke perangkat baru, Anda dapat mengembalikan semua pembelian sebelumnya tanpa biaya tambahan menggunakan opsi Pulihkan Pembelian di dalam Aplikasi. Pembelian terikat dengan Apple ID Anda dan tersedia di semua perangkat yang masuk dengan akun yang sama.</PolicyParagraph>

                <PolicyHeading>Langganan</PolicyHeading>
                <PolicyParagraph>Jika LiquidBoard menawarkan pembelian berbasis langganan:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Langganan akan diperpanjang secara otomatis kecuali dibatalkan setidaknya 24 jam sebelum akhir periode penagihan saat ini</PolicyListItem>
                  <PolicyListItem>ID Apple Anda akan dikenakan biaya untuk pembaruan dalam waktu 24 jam sebelum akhir periode saat ini</PolicyListItem>
                  <PolicyListItem>Anda dapat mengelola atau membatalkan langganan kapan saja di Pengaturan → [Nama Anda] → Langganan</PolicyListItem>
                  <PolicyListItem>Membatalkan langganan berlaku pada akhir periode berbayar saat ini — Anda tetap memiliki akses sampai saat itu</PolicyListItem>
                  <PolicyListItem>Periode percobaan gratis, jika ditawarkan, akan dialihkan ke langganan berbayar kecuali dibatalkan sebelum percobaan berakhir</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Kebijakan Pengembalian Dana</PolicyHeading>
                <PolicyParagraph>Kami tidak memproses pengembalian dana secara langsung. Semua permintaan pengembalian dana harus diajukan ke Apple, karena mereka adalah pedagang resmi untuk semua transaksi di App Store.</PolicyParagraph>
                <PolicyParagraph>Apple menangani pengembalian dana sesuai kebijaksanaan mereka sesuai dengan kebijakan pengembalian dana mereka. Kasus yang biasanya memenuhi syarat termasuk pembelian tidak sengaja, biaya yang tidak sah atau pembelian yang tidak berfungsi seperti yang dijelaskan.</PolicyParagraph>
                <PolicyParagraph>Untuk meminta pengembalian dana dari Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Lakukan saja.<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">laporkanmasalah.apple.com</PolicyLink>dan masuk dengan Apple ID Anda</PolicyListItem>
                  <PolicyListItem>Temukan pembelian LiquidBoard dan ketuk Laporkan Masalah</PolicyListItem>
                  <PolicyListItem>Pilih alasannya dan kirimkan permintaan Anda</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple biasanya merespons dalam beberapa hari kerja. Keputusan pengembalian dana dibuat sepenuhnya oleh Apple.</PolicyParagraph>

                <PolicyHeading>Perubahan Harga</PolicyHeading>
                <PolicyParagraph>Kami berhak untuk mengubah harga untuk pembelian dalam aplikasi kapan saja. Perubahan harga untuk langganan akan dikomunikasikan sebelumnya melalui Aplikasi atau App Store dan akan berlaku pada awal siklus penagihan Anda berikutnya. Anda akan diberitahu oleh Apple sebelum perubahan harga langganan berlaku.</PolicyParagraph>

                <PolicyHeading>Pembelian Gagal atau Tidak Lengkap</PolicyHeading>
                <PolicyParagraph>Jika pembelian gagal atau Anda dikenakan biaya tetapi tidak menerima kontennya, harap coba terlebih dahulu memulihkan pembelian di dalam Aplikasi. Jika masalah berlanjut, hubungi kami di<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>dan kami akan menyelidiki dengan segera.</PolicyParagraph>

                <PolicyHeading>Kontak</PolicyHeading>
                <PolicyParagraph>Untuk pertanyaan penagihan atau masalah pembelian, hubungi kami di:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>Untuk pengembalian dana, silakan gunakan saluran resmi Apple:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">laporkanmasalah.apple.com</PolicyLink></PolicyParagraph>
  </>
);
