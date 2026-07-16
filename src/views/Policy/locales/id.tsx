
export const Security = () => (
  <>
    <h2>Kebijakan Keamanan Data</h2>
                <p>Terakhir diperbarui: 05 Juni 2026 · LiquidBoard</p>
                <p>LiquidBoard dirancang dengan pendekatan privasi terlebih dahulu. Data Anda tidak pernah meninggalkan perangkat Anda kecuali Anda secara eksplisit memilih untuk mengaktifkan Sinkronisasi iCloud. Kami tidak memiliki server, tidak ada akun dan tidak memiliki akses ke konten Anda.</p>

                <h2>Penyimpanan Data</h2>
                <p>Semua konten yang Anda buat di LiquidBoard — potongan teks, gambar dan stiker — disimpan di salah satu dari dua tempat:</p>
                <ul>
                  <li><strong>Penyimpanan di perangkat</strong>— Dikelola oleh iOS dan hanya dapat diakses oleh LiquidBoard. Aplikasi lain tidak dapat membaca data Anda.</li>
                  <li><strong>iCloud (opsional)</strong>— Disinkronkan melalui Apple ID pribadi Anda menggunakan infrastruktur CloudKit terenkripsi milik Apple.</li>
                </ul>
                <p>Tidak ada data yang disimpan di server kami. Kami tidak mengoperasikan infrastruktur backend apa pun.</p>

                <h2>Enkripsi</h2>
                <p>Data Anda dilindungi oleh iOS dan lapisan keamanan Apple:</p>
                <ul>
                  <li><strong>Saat istirahat</strong>— Data yang disimpan di perangkat Anda dienkripsi oleh iOS menggunakan kode sandi perangkat Anda dan Secure Enclave.</li>
                  <li><strong>Dalam perjalanan</strong>— Jika Sinkronisasi iCloud diaktifkan, data akan dienkripsi oleh CloudKit Apple sebelum dikirimkan.</li>
                  <li><strong>Cadangan iCloud</strong>— Jika perangkat Anda dibackup ke iCloud, data aplikasi termasuk dalam sistem backup terenkripsi Apple.</li>
                </ul>

                <h2>Keamanan Foto & Gambar</h2>
                <p>LiquidBoard mengakses perpustakaan foto Anda hanya ketika Anda secara eksplisit memilih untuk memilih atau mengimpor foto. Aplikasi ini:</p>
                <ul>
                  <li>Tidak mengakses perpustakaan foto Anda di latar belakang</li>
                  <li>Tidak mengunggah foto ke server mana pun</li>
                  <li>Menyimpan gambar yang dipilih secara lokal di dalam wadah sandbox aplikasi</li>
                  <li>Memproses pembuatan stiker sepenuhnya di perangkat</li>
                </ul>
                <p>Anda dapat mencabut akses foto kapan saja di Pengaturan → Privasi & Keamanan → Foto.</p>

                <h2>Keamanan Ekstensi Keyboard</h2>
                <p>Ekstensi keyboard tidak mengumpulkan, mencatat atau mengirimkan data ketikan atau teks yang Anda ketik di aplikasi lain.</p>
                <p>Akses Penuh diperlukan untuk ekstensi keyboard agar dapat menempelkan gambar dan stiker, serta untuk mengakses Sinkronisasi iCloud. Bahkan dengan Akses Penuh diaktifkan, ekstensi keyboard beroperasi sepenuhnya di dalam lingkungan sandbox iOS. Ekstensi ini tidak memiliki kemampuan untuk mengirim data ke server eksternal.</p>

                <h2>Tidak Ada Akses Data Pihak Ketiga</h2>
                <p>LiquidBoard tidak mengintegrasikan salah satu dari berikut ini:</p>
                <ul>
                  <li>SDK analitik atau pelaporan kerusakan, seperti Firebase atau Mixpanel</li>
                  <li>Jaringan periklanan atau SDK pelacakan</li>
                  <li>Layanan penyimpanan atau pemrosesan awan pihak ketiga</li>
                </ul>
                <p>Konten Anda tidak pernah dibagikan dengan atau dapat diakses oleh pihak ketiga mana pun.</p>

                <h2>Sandbox Aplikasi</h2>
                <p>LiquidBoard berjalan di dalam sandbox aplikasi yang ketat di iOS. Ini berarti aplikasi lain di perangkat Anda tidak dapat mengakses data LiquidBoard dan LiquidBoard tidak dapat mengakses data milik aplikasi lain kecuali konten yang secara eksplisit Anda tempel melalui ekstensi keyboard.</p>

                <h2>Kontrol Anda</h2>
                <p>Anda memiliki kendali penuh atas data Anda setiap saat:</p>
                <ul>
                  <li>Aktifkan atau nonaktifkan Sinkronisasi iCloud dari dalam aplikasi</li>
                  <li>Cabut akses perpustakaan foto di Pengaturan iOS</li>
                  <li>Nonaktifkan Akses Penuh untuk keyboard di Pengaturan → Umum → Keyboard → Keyboard</li>
                  <li>Hapus semua data dengan menghapus aplikasi</li>
                </ul>

                <h2>Kontak</h2>
                <p>Jika Anda memiliki pertanyaan tentang keamanan data, silakan hubungi kami di:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Privacy = () => (<>
    <h2>Kebijakan Privasi</h2>
                <p>Terakhir diperbarui: 05 Juni 2026 · LiquidBoard</p>
                <p>LiquidBoard ("kami", "milik kami" atau "aplikasi") berkomitmen untuk menjaga privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami menangani informasi saat Anda menggunakan LiquidBoard dan ekstensi keyboardnya.</p>

                <h2>Data yang Kami Kumpulkan</h2>
                <p>LiquidBoard tidak mengumpulkan, menyimpan atau mengirimkan data pribadi apa pun ke server eksternal. Semua data yang Anda buat di dalam aplikasi — termasuk potongan teks, gambar, stiker, kategori dan pengaturan — disimpan secara eksklusif di perangkat Anda atau di akun iCloud pribadi Anda.</p>

                <h2>Foto & Gambar</h2>
                <p>LiquidBoard mungkin meminta akses ke perpustakaan foto Anda untuk tujuan berikut:</p>
                <ul>
                  <li>Menyisipkan gambar ke dalam cuplikan Anda</li>
                  <li>Membuat stiker kustom dari foto Anda</li>
                </ul>
                <p>Foto yang Anda pilih disimpan secara lokal di perangkat Anda dan/atau disinkronkan ke akun iCloud pribadi Anda. Kami tidak mengunggah, mengirim atau mengakses foto Anda dengan cara apa pun. Akses pustaka foto hanya digunakan pada saat Anda secara eksplisit memilih gambar — aplikasi tidak mengakses pustaka Anda di latar belakang.</p>

                <h2>Stiker</h2>
                <p>LiquidBoard memungkinkan Anda untuk:</p>
                <ul>
                  <li>Buat stiker kustom dari foto Anda sendiri</li>
                  <li>Sisipkan stiker melalui ekstensi keyboard</li>
                </ul>
                <p>Stiker kustom yang Anda buat dari foto Anda disimpan hanya di perangkat Anda dan/atau iCloud. Tidak ada konten stiker atau data gambar yang dikirimkan kepada kami.</p>

                <h2>Ekstensi Keyboard & Akses Penuh</h2>
                <p>Ekstensi keyboard ini tidak mengumpulkan, merekam atau mengirim data ketikan atau teks yang Anda ketik.</p>
                <p>Ekstensi keyboard LiquidBoard memerlukan Akses Penuh untuk diaktifkan agar dapat:</p>
                <ul>
                  <li>Tempel gambar dan stiker ke aplikasi lain</li>
                  <li>Sinkronkan potongan dan stiker Anda melalui iCloud di semua perangkat Anda</li>
                </ul>
                <p>Akses Penuh hanya digunakan untuk fitur-fitur ini. Keyboard tidak mencatat, merekam atau mengirimkan apa pun yang Anda ketik di aplikasi lain. Tidak ada data yang dikirim ke server eksternal manapun.</p>

                <h2>Sinkronisasi iCloud</h2>
                <p>Jika Anda memilih untuk mengaktifkan Sinkronisasi iCloud, potongan teks, gambar dan stiker Anda akan disinkronkan melalui infrastruktur iCloud Apple menggunakan Apple ID pribadi Anda. Data ini diatur oleh Kebijakan Privasi Apple. Kami tidak memiliki akses ke data iCloud Anda.</p>

                <h2>Berbagi Data</h2>
                <p>Kami tidak menjual, membagikan atau mengungkapkan data Anda kepada pihak ketiga mana pun. Kami tidak menggunakan analitik pihak ketiga, SDK iklan atau alat pelacakan apa pun.</p>

                <h2>Penyimpanan & Penghapusan Data</h2>
                <p>Data Anda tetap berada di perangkat Anda dan/atau akun iCloud Anda dan sepenuhnya berada di bawah kendali Anda. Anda dapat menghapus data Anda kapan saja dengan cara:</p>
                <ul>
                  <li>Menghapus cuplikan, gambar atau stiker individual di dalam aplikasi</li>
                  <li>Mencabut akses perpustakaan foto di Pengaturan → Privasi → Foto</li>
                  <li>Menghapus aplikasi, yang menghapus semua data yang disimpan secara lokal</li>
                  <li>Menonaktifkan Sinkronisasi iCloud dan menghapus data iCloud aplikasi dari Pengaturan → [Nama Anda] → iCloud → Kelola Penyimpanan</li>
                </ul>

                <h2>Privasi Anak-Anak</h2>
                <p>LiquidBoard tidak sengaja mengumpulkan informasi dari anak-anak di bawah usia 13 tahun. Aplikasi ini tidak mengumpulkan data pribadi dari pengguna mana pun.</p>

                <h2>Perubahan pada Kebijakan Ini</h2>
                <p>Kami mungkin memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan tercermin di aplikasi dan di situs web kami dengan tanggal yang diperbarui.</p>

                <h2>Kontak</h2>
                <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Terms = () => (<>
    <h2>Syarat Penggunaan</h2>
                <p>Terakhir diperbarui: 05 Juni 2026 · LiquidBoard</p>
                <p>Dengan mengunduh, menginstal atau menggunakan LiquidBoard ("Aplikasi"), Anda setuju untuk terikat oleh Ketentuan Penggunaan ini. Jika Anda tidak setuju dengan ketentuan ini, mohon jangan gunakan Aplikasi.</p>

                <h2>Lisensi</h2>
                <p>Kami memberikan Anda lisensi terbatas, non-eksklusif, non-transferable, yang dapat dibatalkan untuk menggunakan LiquidBoard untuk tujuan pribadi dan non-komersial Anda, sesuai dengan Ketentuan ini.</p>
                <p>Anda tidak boleh:</p>
                <ul>
                  <li>Menyalin, memodifikasi atau mendistribusikan Aplikasi atau kontennya</li>
                  <li>Membalikkan rekayasa atau mencoba mengekstrak kode sumber</li>
                  <li>Gunakan Aplikasi untuk tujuan yang melanggar hukum atau tidak sah</li>
                  <li>Menjual, memberikan lisensi turun atau mentransfer akses ke Aplikasi kepada pihak ketiga mana pun</li>
                </ul>

                <h2>Konten Anda</h2>
                <p>Anda tetap memegang kepemilikan penuh atas semua potongan teks, gambar dan stiker yang Anda buat atau impor ke LiquidBoard. Kami tidak mengklaim hak apa pun atas konten Anda.</p>
                <p>Anda sepenuhnya bertanggung jawab untuk memastikan bahwa konten yang Anda buat atau tempel menggunakan Aplikasi tidak melanggar hak pihak ketiga, termasuk hak cipta, merek dagang atau hak privasi.</p>

                <h2>Penggunaan yang Dapat Diterima</h2>
                <p>Anda setuju untuk tidak menggunakan LiquidBoard untuk membuat, menyimpan atau mendistribusikan konten yang:</p>
                <ul>
                  <li>Ilegal, berbahaya, mengancam atau mengganggu</li>
                  <li>Melanggar hak kekayaan intelektual orang lain</li>
                  <li>Mengandung malware, virus atau kode berbahaya</li>
                  <li>Melanggar hukum lokal, nasional atau internasional yang berlaku</li>
                </ul>

                <h2>Pembelian Dalam Aplikasi</h2>
                <p>LiquidBoard menawarkan pembelian dalam aplikasi opsional untuk membuka fitur atau konten tambahan. Semua pembelian diproses oleh Apple melalui App Store dan tunduk pada Ketentuan Penjualan Apple.</p>
                <ul>
                  <li>Pembelian tidak dapat dikembalikan kecuali sebagaimana diwajibkan oleh hukum yang berlaku atau kebijakan pengembalian dana Apple</li>
                  <li>Harga dapat bervariasi menurut wilayah dan ditampilkan dalam mata uang lokal Anda pada saat pembelian</li>
                  <li>Fitur yang dibeli terhubung dengan Apple ID Anda dan dapat dipulihkan di perangkat mana pun yang masuk dengan Apple ID yang sama</li>
                </ul>
                <p>Untuk meminta pengembalian dana, harap hubungi Apple secara langsung di:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">laporkanmasalah.apple.com</a>.</p>

                <h2>Ekstensi Keyboard & Akses Penuh</h2>
                <p>Mengaktifkan Akses Penuh untuk ekstensi keyboard diperlukan untuk menempelkan gambar dan stiker ke aplikasi lain serta untuk mengaktifkan Sinkronisasi iCloud. Akses Penuh tidak memberi kami akses ke apa pun yang Anda ketik.</p>
                <p>Anda mengakui bahwa dengan mengaktifkan Akses Penuh, iOS akan menampilkan pemberitahuan sistem yang memberitahu Anda bahwa pengembang keyboard berpotensi dapat mengakses pengetikan Anda. Kami ingin menegaskan: LiquidBoard tidak mengumpulkan, mencatat atau mengirimkan data ketikan apa pun.</p>

                <h2>Sinkronisasi iCloud</h2>
                <p>Sinkronisasi iCloud adalah fitur opsional yang menggunakan akun Apple iCloud pribadi Anda untuk menyinkronkan data Anda di berbagai perangkat. Penggunaan iCloud tunduk pada Syarat dan Ketentuan Apple. Kami tidak bertanggung jawab atas kehilangan data yang diakibatkan oleh gangguan layanan iCloud.</p>

                <h2>Penafian Jaminan</h2>
                <p>LiquidBoard disediakan "apa adanya" dan "sebagaimana tersedia" tanpa jaminan apa pun, baik secara tersurat maupun tersirat, termasuk tetapi tidak terbatas pada jaminan kelayakan jual, kesesuaian untuk tujuan tertentu atau tidak pelanggaran.</p>
                <p>Kami tidak menjamin bahwa Aplikasi akan berjalan terus-menerus, bebas dari kesalahan atau bebas dari virus atau komponen berbahaya lainnya.</p>

                <h2>Batasan Tanggung Jawab</h2>
                <p>Sejauh diizinkan oleh hukum yang berlaku, kami tidak akan bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial atau hukuman, termasuk namun tidak terbatas pada kehilangan data, kehilangan keuntungan atau hilangnya reputasi baik, yang timbul dari penggunaan atau ketidakmampuan Anda untuk menggunakan Aplikasi.</p>

                <h2>Pemutusan</h2>
                <p>Kami berhak untuk menghentikan atau membatasi akses Anda ke Aplikasi kapan saja, tanpa pemberitahuan, untuk perilaku yang kami percaya melanggar Ketentuan ini atau merugikan pengguna lain, kami atau pihak ketiga.</p>
                <p>Anda dapat berhenti menggunakan Aplikasi kapan saja dengan menghapusnya dari perangkat Anda.</p>

                <h2>Perubahan pada Ketentuan Ini</h2>
                <p>Kami dapat memperbarui Ketentuan Penggunaan ini dari waktu ke waktu. Penggunaan Aplikasi yang berkelanjutan setelah perubahan dipublikasikan merupakan penerimaan Anda terhadap Ketentuan yang telah direvisi. Kami akan memberi tahu Anda tentang perubahan signifikan melalui Aplikasi atau situs web kami.</p>

                <h2>Hukum yang Mengatur</h2>
                <p>Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yurisdiksi di mana pengembang bertempat, tanpa memperhatikan prinsip-prinsip konflik hukum.</p>

                <h2>Kontak</h2>
                <p>Jika Anda memiliki pertanyaan tentang Ketentuan ini, silakan hubungi kami di:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Payment = () => (<>
    <h2>Kebijakan Pembayaran & Pengembalian</h2>
                <p>Terakhir diperbarui: 05 Juni 2026 · LiquidBoard</p>
                <p>LiquidBoard menawarkan pembelian dalam aplikasi opsional untuk membuka fitur premium. Semua pembayaran sepenuhnya ditangani oleh Apple melalui App Store — kami tidak memproses, menyimpan atau memiliki akses ke informasi pembayaran Anda.</p>

                <h2>Apa yang Bisa Anda Beli</h2>
                <p>LiquidBoard menawarkan pembelian opsional berikut:</p>
                <ul>
                  <li>Fitur Premium — Buka sekali atau berlangganan untuk fungsi aplikasi tingkat lanjut</li>
                </ul>
                <p>Pembelian yang tersedia dan harga ditampilkan dalam Aplikasi pada saat pembelian. Harga dapat bervariasi menurut wilayah dan ditampilkan dalam mata uang lokal Anda.</p>

                <h2>Pemrosesan Pembayaran</h2>
                <p>Semua transaksi diproses dengan aman oleh Apple. Kami tidak pernah melihat atau menyimpan kartu kredit, alamat penagihan atau rincian pembayaran Anda.</p>
                <p>Dengan menyelesaikan pembelian, Anda setuju dengan Ketentuan Penjualan App Store Apple. Metode pembayaran Anda yang tersimpan di Apple akan dikenakan biaya pada saat konfirmasi pembelian.</p>

                <h2>Memulihkan Pembelian</h2>
                <p>Jika Anda menginstal ulang LiquidBoard atau beralih ke perangkat baru, Anda dapat mengembalikan semua pembelian sebelumnya tanpa biaya tambahan menggunakan opsi Pulihkan Pembelian di dalam Aplikasi. Pembelian terikat dengan Apple ID Anda dan tersedia di semua perangkat yang masuk dengan akun yang sama.</p>

                <h2>Langganan</h2>
                <p>Jika LiquidBoard menawarkan pembelian berbasis langganan:</p>
                <ul>
                  <li>Langganan akan diperpanjang secara otomatis kecuali dibatalkan setidaknya 24 jam sebelum akhir periode penagihan saat ini</li>
                  <li>ID Apple Anda akan dikenakan biaya untuk pembaruan dalam waktu 24 jam sebelum akhir periode saat ini</li>
                  <li>Anda dapat mengelola atau membatalkan langganan kapan saja di Pengaturan → [Nama Anda] → Langganan</li>
                  <li>Membatalkan langganan berlaku pada akhir periode berbayar saat ini — Anda tetap memiliki akses sampai saat itu</li>
                  <li>Periode percobaan gratis, jika ditawarkan, akan dialihkan ke langganan berbayar kecuali dibatalkan sebelum percobaan berakhir</li>
                </ul>

                <h2>Kebijakan Pengembalian Dana</h2>
                <p>Kami tidak memproses pengembalian dana secara langsung. Semua permintaan pengembalian dana harus diajukan ke Apple, karena mereka adalah pedagang resmi untuk semua transaksi di App Store.</p>
                <p>Apple menangani pengembalian dana sesuai kebijaksanaan mereka sesuai dengan kebijakan pengembalian dana mereka. Kasus yang biasanya memenuhi syarat termasuk pembelian tidak sengaja, biaya yang tidak sah atau pembelian yang tidak berfungsi seperti yang dijelaskan.</p>
                <p>Untuk meminta pengembalian dana dari Apple:</p>
                <ul>
                  <li>Lakukan saja.<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">laporkanmasalah.apple.com</a>dan masuk dengan Apple ID Anda</li>
                  <li>Temukan pembelian LiquidBoard dan ketuk Laporkan Masalah</li>
                  <li>Pilih alasannya dan kirimkan permintaan Anda</li>
                </ul>
                <p>Apple biasanya merespons dalam beberapa hari kerja. Keputusan pengembalian dana dibuat sepenuhnya oleh Apple.</p>

                <h2>Perubahan Harga</h2>
                <p>Kami berhak untuk mengubah harga untuk pembelian dalam aplikasi kapan saja. Perubahan harga untuk langganan akan dikomunikasikan sebelumnya melalui Aplikasi atau App Store dan akan berlaku pada awal siklus penagihan Anda berikutnya. Anda akan diberitahu oleh Apple sebelum perubahan harga langganan berlaku.</p>

                <h2>Pembelian Gagal atau Tidak Lengkap</h2>
                <p>Jika pembelian gagal atau Anda dikenakan biaya tetapi tidak menerima kontennya, harap coba terlebih dahulu memulihkan pembelian di dalam Aplikasi. Jika masalah berlanjut, hubungi kami di<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a>dan kami akan menyelidiki dengan segera.</p>

                <h2>Kontak</h2>
                <p>Untuk pertanyaan penagihan atau masalah pembelian, hubungi kami di:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
                <p>Untuk pengembalian dana, silakan gunakan saluran resmi Apple:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">laporkanmasalah.apple.com</a></p>
  </>
);
