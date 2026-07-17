
export const Security = () => (
  <>
    <h2>Veri Güvenliği Politikası</h2>
                <p>Son güncelleme: 5 Haziran 2026 · LiquidBoard</p>
                <p>LiquidBoard, gizliliği ön planda tutan bir yaklaşımla tasarlanmıştır. iCloud Eşzamanlama özelliğini açıkça etkinleştirmeyi seçmediğiniz sürece verileriniz cihazınızdan asla ayrılmaz. Sunucularımız veya hesaplarımız yoktur ve içeriğinize erişimimiz bulunmaz.</p>

                <h2>Veri Depolama</h2>
                <p>LiquidBoard&apos;da oluşturduğunuz tüm içerikler — metin parçacıkları, görseller ve çıkartmalar — şu iki yerden birinde saklanır:</p>
                <ul>
                  <li><strong>Cihazda depolama</strong> — iOS tarafından yönetilir ve yalnızca LiquidBoard tarafından erişilebilir. Diğer uygulamalar verilerinizi okuyamaz.</li>
                  <li><strong>iCloud (isteğe bağlı)</strong> — Apple&apos;ın şifrelenmiş CloudKit altyapısı kullanılarak kişisel Apple Hesabınız üzerinden eşzamanlanır.</li>
                </ul>
                <p>Sunucularımızda hiçbir veri saklanmaz. Herhangi bir arka uç altyapısı işletmiyoruz.</p>

                <h2>Şifreleme</h2>
                <p>Verileriniz, iOS ve Apple&apos;ın güvenlik katmanları tarafından korunur:</p>
                <ul>
                  <li><strong>Depolama sırasında</strong> — Cihazınızda saklanan veriler, cihaz parolanız ve Secure Enclave kullanılarak iOS tarafından şifrelenir.</li>
                  <li><strong>Aktarım sırasında</strong> — iCloud Eşzamanlama etkinse veriler, aktarılmadan önce Apple&apos;ın CloudKit hizmeti tarafından şifrelenir.</li>
                  <li><strong>iCloud Yedekleme</strong> — Cihazınız iCloud&apos;a yedekleniyorsa uygulama verileri Apple&apos;ın şifrelenmiş yedekleme sistemine dâhil edilir.</li>
                </ul>

                <h2>Fotoğraf ve Görsel Güvenliği</h2>
                <p>LiquidBoard, fotoğraf arşivinize yalnızca açıkça bir fotoğraf seçmeyi veya içe aktarmayı tercih ettiğinizde erişir. Uygulama:</p>
                <ul>
                  <li>Fotoğraf arşivinize arka planda erişmez</li>
                  <li>Fotoğrafları herhangi bir sunucuya yüklemez</li>
                  <li>Seçilen görselleri uygulamanın korumalı alanındaki kapsayıcıda yerel olarak saklar</li>
                  <li>Çıkartma oluşturma işlemini tamamen cihaz üzerinde gerçekleştirir</li>
                </ul>
                <p>Fotoğraflara erişim iznini Ayarlar → Gizlilik ve Güvenlik → Fotoğraflar bölümünden istediğiniz zaman iptal edebilirsiniz.</p>

                <h2>Klavye Uzantısı Güvenliği</h2>
                <p>Klavye uzantısı, tuş vuruşu verilerini veya diğer uygulamalarda yazdığınız metinleri toplamaz, kaydetmez ya da iletmez.</p>
                <p>Klavye uzantısının görselleri ve çıkartmaları yapıştırabilmesi ve iCloud Eşzamanlama özelliğine erişebilmesi için Tam Erişim gereklidir. Tam Erişim etkin olsa bile klavye uzantısı tamamen iOS&apos;un korumalı alan ortamında çalışır. Haricî sunuculara veri gönderme imkânı yoktur.</p>

                <h2>Üçüncü Tarafların Verilere Erişimi Yoktur</h2>
                <p>LiquidBoard aşağıdakilerin hiçbirini entegre etmez:</p>
                <ul>
                  <li>Firebase veya Mixpanel gibi analiz ya da çökme raporlama SDK&apos;ları</li>
                  <li>Reklam ağları veya izleme SDK&apos;ları</li>
                  <li>Üçüncü taraf bulut depolama veya işleme hizmetleri</li>
                </ul>
                <p>İçeriğiniz hiçbir zaman üçüncü taraflarla paylaşılmaz ve hiçbir üçüncü taraf içeriğinize erişemez.</p>

                <h2>Uygulama Korumalı Alanı</h2>
                <p>LiquidBoard, iOS&apos;un sıkı uygulama korumalı alanında çalışır. Bu, cihazınızdaki diğer uygulamaların LiquidBoard verilerine erişemeyeceği ve LiquidBoard&apos;un da klavye uzantısı aracılığıyla açıkça yapıştırdığınız içerikler dışında diğer uygulamalara ait verilere erişemeyeceği anlamına gelir.</p>

                <h2>Kontrol Sizde</h2>
                <p>Verileriniz üzerinde her zaman tam kontrole sahipsiniz:</p>
                <ul>
                  <li>iCloud Eşzamanlama özelliğini uygulama içinden etkinleştirebilir veya devre dışı bırakabilirsiniz</li>
                  <li>iOS Ayarları&apos;ndan fotoğraf arşivi erişimini iptal edebilirsiniz</li>
                  <li>Ayarlar → Genel → Klavye → Klavyeler bölümünden klavye için Tam Erişim&apos;i devre dışı bırakabilirsiniz</li>
                  <li>Uygulamayı silerek tüm verileri silebilirsiniz</li>
                </ul>

                <h2>İletişim</h2>
                <p>Veri güvenliği hakkında sorularınız varsa lütfen şu adresten bizimle iletişime geçin: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Privacy = () => (
  <>
    <h2>Gizlilik Politikası</h2>
                <p>Son güncelleme: 5 Haziran 2026 · LiquidBoard</p>
                <p>LiquidBoard (&quot;biz&quot;, &quot;bizim&quot; veya &quot;uygulama&quot;) gizliliğinizi korumayı taahhüt eder. Bu Gizlilik Politikası, LiquidBoard&apos;u ve klavye uzantısını kullandığınızda bilgileri nasıl işlediğimizi açıklar.</p>

                <h2>Topladığımız Veriler</h2>
                <p>LiquidBoard hiçbir kişisel veriyi toplamaz, saklamaz veya haricî sunuculara iletmez. Uygulamada oluşturduğunuz tüm veriler — metin parçacıkları, görseller, çıkartmalar, kategoriler ve ayarlar dâhil — yalnızca cihazınızda veya kişisel iCloud hesabınızda saklanır.</p>

                <h2>Fotoğraflar ve Görseller</h2>
                <p>LiquidBoard aşağıdaki amaçlarla fotoğraf arşivinize erişim isteyebilir:</p>
                <ul>
                  <li>Metin parçacıklarınıza görseller eklemek</li>
                  <li>Fotoğraflarınızdan özel çıkartmalar oluşturmak</li>
                </ul>
                <p>Seçtiğiniz fotoğraflar cihazınızda yerel olarak saklanır ve/veya kişisel iCloud hesabınızla eşzamanlanır. Fotoğraflarınızı hiçbir şekilde yüklemeyiz, iletmeyiz veya bunlara erişmeyiz. Fotoğraf arşivi erişimi yalnızca açıkça bir görsel seçtiğiniz anda kullanılır — uygulama arşivinize arka planda erişmez.</p>

                <h2>Çıkartmalar</h2>
                <p>LiquidBoard ile şunları yapabilirsiniz:</p>
                <ul>
                  <li>Kendi fotoğraflarınızdan özel çıkartmalar oluşturmak</li>
                  <li>Klavye uzantısı aracılığıyla çıkartmalar eklemek</li>
                </ul>
                <p>Fotoğraflarınızdan oluşturduğunuz özel çıkartmalar yalnızca cihazınızda ve/veya iCloud&apos;da saklanır. Hiçbir çıkartma içeriği veya görsel verisi bize iletilmez.</p>

                <h2>Klavye Uzantısı ve Tam Erişim</h2>
                <p>Bu klavye uzantısı, hiçbir tuş vuruşu verisini veya yazdığınız metni toplamaz, kaydetmez ya da iletmez.</p>
                <p>LiquidBoard&apos;un klavye uzantısında aşağıdakileri yapabilmek için Tam Erişim&apos;in etkinleştirilmesi gerekir:</p>
                <ul>
                  <li>Görselleri ve çıkartmaları diğer uygulamalara yapıştırmak</li>
                  <li>Metin parçacıklarınızı ve çıkartmalarınızı cihazlarınız arasında iCloud aracılığıyla eşzamanlamak</li>
                </ul>
                <p>Tam Erişim yalnızca bu özellikler için kullanılır. Klavye, başka bir uygulamada yazdığınız hiçbir şeyi günlüğe kaydetmez, kayıt altına almaz veya iletmez. Hiçbir veri haricî sunuculara gönderilmez.</p>

                <h2>iCloud Eşzamanlama</h2>
                <p>iCloud Eşzamanlama özelliğini etkinleştirmeyi seçerseniz metin parçacıklarınız, görselleriniz ve çıkartmalarınız kişisel Apple Hesabınız kullanılarak Apple&apos;ın iCloud altyapısı üzerinden eşzamanlanır. Bu veriler Apple&apos;ın Gizlilik Politikası&apos;na tabidir. iCloud verilerinize erişimimiz yoktur.</p>

                <h2>Veri Paylaşımı</h2>
                <p>Verilerinizi hiçbir üçüncü tarafa satmaz, üçüncü taraflarla paylaşmaz veya açıklamayız. Herhangi bir üçüncü taraf analiz ya da reklam SDK&apos;sı veya izleme aracı kullanmayız.</p>

                <h2>Verilerin Saklanması ve Silinmesi</h2>
                <p>Verileriniz cihazınızda ve/veya iCloud hesabınızda kalır ve tamamen sizin kontrolünüz altındadır. Verilerinizi istediğiniz zaman aşağıdaki yollarla silebilirsiniz:</p>
                <ul>
                  <li>Uygulama içindeki metin parçacıklarını, görselleri veya çıkartmaları tek tek silmek</li>
                  <li>Ayarlar → Gizlilik ve Güvenlik → Fotoğraflar bölümünden fotoğraf arşivi erişimini iptal etmek</li>
                  <li>Yerel olarak saklanan tüm verileri kaldırmak için uygulamayı silmek</li>
                  <li>iCloud Eşzamanlama&apos;yı devre dışı bırakıp Ayarlar → [Adınız] → iCloud → Saklama Alanını Yönet bölümünden uygulamanın iCloud verilerini kaldırmak</li>
                </ul>

                <h2>Çocukların Gizliliği</h2>
                <p>LiquidBoard, 13 yaşın altındaki çocuklardan bilerek hiçbir bilgi toplamaz. Uygulama hiçbir kullanıcıdan kişisel veri toplamaz.</p>

                <h2>Bu Politikadaki Değişiklikler</h2>
                <p>Bu Gizlilik Politikası&apos;nı zaman zaman güncelleyebiliriz. Tüm değişiklikler, güncellenmiş tarihle birlikte uygulamaya ve web sitemize yansıtılacaktır.</p>

                <h2>İletişim</h2>
                <p>Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa lütfen şu adresten bizimle iletişime geçin: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Terms = () => (
  <>
    <h2>Kullanım Koşulları</h2>
                <p>Son güncelleme: 5 Haziran 2026 · LiquidBoard</p>
                <p>LiquidBoard&apos;u (&quot;Uygulama&quot;) indirerek, yükleyerek veya kullanarak bu Kullanım Koşulları&apos;na bağlı olmayı kabul edersiniz. Bu koşulları kabul etmiyorsanız lütfen Uygulama&apos;yı kullanmayın.</p>

                <h2>Lisans</h2>
                <p>Bu Koşullar&apos;a tabi olarak LiquidBoard&apos;u kişisel ve ticari olmayan amaçlarınız doğrultusunda kullanmanız için size sınırlı, münhasır olmayan, devredilemez ve geri alınabilir bir lisans veriyoruz.</p>
                <p>Şunları yapamazsınız:</p>
                <ul>
                  <li>Uygulama&apos;yı veya içeriğini kopyalamak, değiştirmek ya da dağıtmak</li>
                  <li>Tersine mühendislik uygulamak veya kaynak kodunu çıkarmaya çalışmak</li>
                  <li>Uygulama&apos;yı hukuka aykırı veya yetkisiz herhangi bir amaçla kullanmak</li>
                  <li>Uygulama&apos;ya erişimi herhangi bir üçüncü tarafa satmak, alt lisansını vermek veya devretmek</li>
                </ul>

                <h2>İçeriğiniz</h2>
                <p>LiquidBoard&apos;da oluşturduğunuz veya LiquidBoard&apos;a aktardığınız tüm metin parçacıkları, görseller ve çıkartmalar üzerindeki mülkiyet hakkınız tamamen size aittir. İçeriğiniz üzerinde hiçbir hak iddia etmeyiz.</p>
                <p>Uygulama&apos;yı kullanarak oluşturduğunuz veya yapıştırdığınız içeriğin telif hakkı, ticari marka ya da gizlilik hakları dâhil olmak üzere hiçbir üçüncü taraf hakkını ihlal etmemesini sağlamaktan yalnızca siz sorumlusunuz.</p>

                <h2>Kabul Edilebilir Kullanım</h2>
                <p>LiquidBoard&apos;u aşağıdaki niteliklere sahip içerikleri oluşturmak, saklamak veya dağıtmak için kullanmamayı kabul edersiniz:</p>
                <ul>
                  <li>Hukuka aykırı, zararlı, tehditkâr veya taciz edici olan</li>
                  <li>Başkalarının fikrî mülkiyet haklarını ihlal eden</li>
                  <li>Kötü amaçlı yazılım, virüs veya zararlı kod içeren</li>
                  <li>Yürürlükteki herhangi bir yerel, ulusal veya uluslararası kanunu ihlal eden</li>
                </ul>

                <h2>Uygulama İçi Satın Alımlar</h2>
                <p>LiquidBoard, ek özelliklerin veya içeriklerin kilidini açmak için isteğe bağlı uygulama içi satın alımlar sunar. Tüm satın alımlar Apple tarafından App Store üzerinden işlenir ve Apple&apos;ın Satış Koşulları&apos;na tabidir.</p>
                <ul>
                  <li>Yürürlükteki mevzuatın veya Apple&apos;ın para iadesi politikasının gerektirdiği durumlar dışında satın alımlar için para iadesi yapılmaz</li>
                  <li>Fiyatlar bölgeye göre değişebilir ve satın alma sırasında yerel para biriminizle gösterilir</li>
                  <li>Satın alınan özellikler Apple Hesabınıza bağlıdır ve aynı Apple Hesabıyla giriş yapılmış herhangi bir cihazda geri yüklenebilir</li>
                </ul>
                <p>Para iadesi talep etmek için lütfen doğrudan şu adresten Apple ile iletişime geçin: <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.</p>

                <h2>Klavye Uzantısı ve Tam Erişim</h2>
                <p>Görselleri ve çıkartmaları diğer uygulamalara yapıştırmak ve iCloud Eşzamanlama&apos;yı etkinleştirmek için klavye uzantısında Tam Erişim&apos;in etkinleştirilmesi gerekir. Tam Erişim, yazdığınız hiçbir şeye erişmemize izin vermez.</p>
                <p>Tam Erişim&apos;i etkinleştirdiğinizde iOS&apos;un, klavye geliştiricisinin yazdıklarınıza erişebileceğini bildiren bir sistem uyarısı göstereceğini kabul edersiniz. Bunu açıkça belirtmek isteriz: LiquidBoard hiçbir tuş vuruşu verisini toplamaz, günlüğe kaydetmez veya iletmez.</p>

                <h2>iCloud Eşzamanlama</h2>
                <p>iCloud Eşzamanlama, verilerinizi cihazlar arasında eşzamanlamak için kişisel Apple iCloud hesabınızı kullanan isteğe bağlı bir özelliktir. iCloud kullanımı Apple&apos;ın Hüküm ve Koşulları&apos;na tabidir. iCloud hizmetindeki kesintilerden kaynaklanan veri kayıplarından sorumlu değiliz.</p>

                <h2>Garantilerin Reddi</h2>
                <p>LiquidBoard; satılabilirlik, belirli bir amaca uygunluk veya hak ihlali bulunmamasına ilişkin garantiler dâhil ancak bunlarla sınırlı olmamak üzere açık ya da zımni hiçbir garanti olmaksızın &quot;olduğu gibi&quot; ve &quot;mevcut olduğu şekliyle&quot; sunulur.</p>
                <p>Uygulama&apos;nın kesintisiz, hatasız veya virüslerden ya da diğer zararlı bileşenlerden arınmış olacağını garanti etmiyoruz.</p>

                <h2>Sorumluluğun Sınırlandırılması</h2>
                <p>Yürürlükteki mevzuatın izin verdiği azami ölçüde, Uygulama&apos;yı kullanmanızdan veya kullanamamanızdan kaynaklanan ve veri kaybı, kâr kaybı ya da ticari itibar kaybı dâhil ancak bunlarla sınırlı olmayan dolaylı, arızi, özel, sonuç olarak ortaya çıkan veya cezai zararlardan sorumlu olmayacağız.</p>

                <h2>Fesih</h2>
                <p>Bu Koşullar&apos;ı ihlal ettiğine veya diğer kullanıcılara, bize ya da üçüncü taraflara zarar verdiğine inandığımız davranışlar nedeniyle Uygulama&apos;ya erişiminizi herhangi bir zamanda bildirimde bulunmaksızın sonlandırma veya kısıtlama hakkımızı saklı tutarız.</p>
                <p>Uygulama&apos;yı cihazınızdan silerek istediğiniz zaman kullanmayı bırakabilirsiniz.</p>

                <h2>Bu Koşullardaki Değişiklikler</h2>
                <p>Bu Kullanım Koşulları&apos;nı zaman zaman güncelleyebiliriz. Değişiklikler yayımlandıktan sonra Uygulama&apos;yı kullanmaya devam etmeniz, gözden geçirilmiş Koşullar&apos;ı kabul ettiğiniz anlamına gelir. Önemli değişiklikleri Uygulama veya web sitemiz üzerinden size bildireceğiz.</p>

                <h2>Uygulanacak Hukuk</h2>
                <p>Bu Koşullar, kanunlar ihtilafı ilkeleri dikkate alınmaksızın geliştiricinin yerleşik olduğu yargı bölgesinin kanunlarına tabidir ve bu kanunlara göre yorumlanır.</p>

                <h2>İletişim</h2>
                <p>Bu Koşullar hakkında herhangi bir sorunuz varsa lütfen şu adresten bizimle iletişime geçin: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Payment = () => (
  <>
    <h2>Ödeme ve Para İadesi Politikası</h2>
                <p>Son güncelleme: 5 Haziran 2026 · LiquidBoard</p>
                <p>LiquidBoard, premium özelliklerin kilidini açmak için isteğe bağlı uygulama içi satın alımlar sunar. Tüm ödemeler bütünüyle Apple tarafından App Store üzerinden gerçekleştirilir — ödeme bilgilerinizi işlemeyiz, saklamayız veya bu bilgilere erişemeyiz.</p>

                <h2>Satın Alabilecekleriniz</h2>
                <p>LiquidBoard aşağıdaki isteğe bağlı satın alımları sunar:</p>
                <ul>
                  <li>Premium Özellikler — Gelişmiş uygulama işlevlerinin kilidini tek seferlik ödeme veya abonelik yoluyla açma</li>
                </ul>
                <p>Mevcut satın alımlar ve fiyatlar, satın alma sırasında Uygulama&apos;da gösterilir. Fiyatlar bölgeye göre değişebilir ve yerel para biriminizle gösterilir.</p>

                <h2>Ödemelerin İşlenmesi</h2>
                <p>Tüm işlemler Apple tarafından güvenli bir şekilde gerçekleştirilir. Kredi kartı bilgilerinizi, fatura adresinizi veya diğer ödeme bilgilerinizi hiçbir zaman görmeyiz ya da saklamayız.</p>
                <p>Bir satın alma işlemini tamamlayarak Apple&apos;ın App Store Satış Koşulları&apos;nı kabul edersiniz. Satın alma onaylandığında Apple&apos;da kayıtlı ödeme yönteminizden ücret tahsil edilir.</p>

                <h2>Satın Alımları Geri Yükleme</h2>
                <p>LiquidBoard&apos;u yeniden yüklerseniz veya yeni bir cihaza geçerseniz Uygulama&apos;daki Satın Alımları Geri Yükle seçeneğini kullanarak önceki tüm satın alımlarınızı ek ücret ödemeden geri yükleyebilirsiniz. Satın alımlar Apple Hesabınıza bağlıdır ve aynı hesapla giriş yapılmış tüm cihazlarda kullanılabilir.</p>

                <h2>Abonelikler</h2>
                <p>LiquidBoard aboneliğe dayalı satın alımlar sunarsa:</p>
                <ul>
                  <li>Abonelikler, mevcut faturalandırma döneminin bitiminden en az 24 saat önce iptal edilmedikleri sürece otomatik olarak yenilenir</li>
                  <li>Yenileme ücreti, mevcut dönemin bitiminden önceki 24 saat içinde Apple Hesabınızla ilişkili ödeme yönteminden tahsil edilir</li>
                  <li>Abonelikleri Ayarlar → [Adınız] → Abonelikler bölümünden istediğiniz zaman yönetebilir veya iptal edebilirsiniz</li>
                  <li>Aboneliğin iptali, mevcut ücretli dönemin sonunda yürürlüğe girer — o zamana kadar erişiminiz devam eder</li>
                  <li>Ücretsiz deneme süreleri sunulursa deneme sona ermeden iptal edilmediği takdirde ücretli aboneliğe dönüşür</li>
                </ul>

                <h2>Para İadesi Politikası</h2>
                <p>Para iadelerini doğrudan biz gerçekleştirmeyiz. Tüm App Store işlemlerinin kayıtlı satıcısı Apple olduğundan bütün para iadesi talepleri Apple&apos;a iletilmelidir.</p>
                <p>Apple, para iadelerini kendi politikası doğrultusunda takdirine bağlı olarak değerlendirir. Yanlışlıkla yapılan satın alımlar, yetkisiz ücretlendirmeler veya açıklandığı şekilde çalışmayan satın alımlar, yaygın olarak uygun görülen durumlar arasındadır.</p>
                <p>Apple&apos;dan para iadesi talep etmek için:</p>
                <ul>
                  <li><a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a> adresine gidin ve Apple Hesabınızla giriş yapın</li>
                  <li>LiquidBoard satın alımını bulun ve Sorun Bildir seçeneğine dokunun</li>
                  <li>Nedeni seçip talebinizi gönderin</li>
                </ul>
                <p>Apple genellikle birkaç iş günü içinde yanıt verir. Para iadesi kararları yalnızca Apple tarafından verilir.</p>

                <h2>Fiyat Değişiklikleri</h2>
                <p>Uygulama içi satın alımların fiyatlarını istediğimiz zaman değiştirme hakkımızı saklı tutarız. Aboneliklere ilişkin fiyat değişiklikleri Uygulama veya App Store üzerinden önceden bildirilecek ve bir sonraki faturalandırma döneminizin başında yürürlüğe girecektir. Abonelik fiyatındaki herhangi bir değişiklik yürürlüğe girmeden önce Apple tarafından bilgilendirileceksiniz.</p>

                <h2>Başarısız veya Tamamlanmamış Satın Alımlar</h2>
                <p>Bir satın alma işlemi başarısız olursa veya sizden ücret tahsil edildiği hâlde içeriği alamazsanız lütfen öncelikle Uygulama içinden satın alımları geri yüklemeyi deneyin. Sorun devam ederse <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a> adresinden bizimle iletişime geçin; konuyu derhâl inceleyeceğiz.</p>

                <h2>İletişim</h2>
                <p>Faturalandırma soruları veya satın alma sorunları için şu adresten bizimle iletişime geçin: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
                <p>Para iadeleri için lütfen Apple&apos;ın resmî kanalını kullanın: <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></p>
  </>
);
