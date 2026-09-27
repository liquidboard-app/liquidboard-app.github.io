import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Veri Güvenliği Politikası</PolicyHeading>
                <PolicyParagraph>Son güncelleme: 5 Haziran 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard, gizliliği ön planda tutan bir yaklaşımla tasarlanmıştır. iCloud Eşzamanlama özelliğini açıkça etkinleştirmeyi seçmediğiniz sürece verileriniz cihazınızdan asla ayrılmaz. Sunucularımız veya hesaplarımız yoktur ve içeriğinize erişimimiz bulunmaz.</PolicyParagraph>

                <PolicyHeading>Veri Depolama</PolicyHeading>
                <PolicyParagraph>LiquidBoard&apos;da oluşturduğunuz tüm içerikler — metin parçacıkları, görseller ve çıkartmalar — şu iki yerden birinde saklanır:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Cihazda depolama</PolicyEmphasis> — iOS tarafından yönetilir ve yalnızca LiquidBoard tarafından erişilebilir. Diğer uygulamalar verilerinizi okuyamaz.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (isteğe bağlı)</PolicyEmphasis> — Apple&apos;ın şifrelenmiş CloudKit altyapısı kullanılarak kişisel Apple Hesabınız üzerinden eşzamanlanır.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Sunucularımızda hiçbir veri saklanmaz. Herhangi bir arka uç altyapısı işletmiyoruz.</PolicyParagraph>

                <PolicyHeading>Şifreleme</PolicyHeading>
                <PolicyParagraph>Verileriniz, iOS ve Apple&apos;ın güvenlik katmanları tarafından korunur:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Depolama sırasında</PolicyEmphasis> — Cihazınızda saklanan veriler, cihaz parolanız ve Secure Enclave kullanılarak iOS tarafından şifrelenir.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Aktarım sırasında</PolicyEmphasis> — iCloud Eşzamanlama etkinse veriler, aktarılmadan önce Apple&apos;ın CloudKit hizmeti tarafından şifrelenir.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud Yedekleme</PolicyEmphasis> — Cihazınız iCloud&apos;a yedekleniyorsa uygulama verileri Apple&apos;ın şifrelenmiş yedekleme sistemine dâhil edilir.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Fotoğraf ve Görsel Güvenliği</PolicyHeading>
                <PolicyParagraph>LiquidBoard, fotoğraf arşivinize yalnızca açıkça bir fotoğraf seçmeyi veya içe aktarmayı tercih ettiğinizde erişir. Uygulama:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Fotoğraf arşivinize arka planda erişmez</PolicyListItem>
                  <PolicyListItem>Fotoğrafları herhangi bir sunucuya yüklemez</PolicyListItem>
                  <PolicyListItem>Seçilen görselleri uygulamanın korumalı alanındaki kapsayıcıda yerel olarak saklar</PolicyListItem>
                  <PolicyListItem>Çıkartma oluşturma işlemini tamamen cihaz üzerinde gerçekleştirir</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Fotoğraflara erişim iznini Ayarlar → Gizlilik ve Güvenlik → Fotoğraflar bölümünden istediğiniz zaman iptal edebilirsiniz.</PolicyParagraph>

                <PolicyHeading>Klavye Uzantısı Güvenliği</PolicyHeading>
                <PolicyParagraph>Klavye uzantısı, tuş vuruşu verilerini veya diğer uygulamalarda yazdığınız metinleri toplamaz, kaydetmez ya da iletmez.</PolicyParagraph>
                <PolicyParagraph>Klavye uzantısının görselleri ve çıkartmaları yapıştırabilmesi ve iCloud Eşzamanlama özelliğine erişebilmesi için Tam Erişim gereklidir. Tam Erişim etkin olsa bile klavye uzantısı tamamen iOS&apos;un korumalı alan ortamında çalışır. Haricî sunuculara veri gönderme imkânı yoktur.</PolicyParagraph>

                <PolicyHeading>Üçüncü Tarafların Verilere Erişimi Yoktur</PolicyHeading>
                <PolicyParagraph>LiquidBoard aşağıdakilerin hiçbirini entegre etmez:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Firebase veya Mixpanel gibi analiz ya da çökme raporlama SDK&apos;ları</PolicyListItem>
                  <PolicyListItem>Reklam ağları veya izleme SDK&apos;ları</PolicyListItem>
                  <PolicyListItem>Üçüncü taraf bulut depolama veya işleme hizmetleri</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>İçeriğiniz hiçbir zaman üçüncü taraflarla paylaşılmaz ve hiçbir üçüncü taraf içeriğinize erişemez.</PolicyParagraph>

                <PolicyHeading>Uygulama Korumalı Alanı</PolicyHeading>
                <PolicyParagraph>LiquidBoard, iOS&apos;un sıkı uygulama korumalı alanında çalışır. Bu, cihazınızdaki diğer uygulamaların LiquidBoard verilerine erişemeyeceği ve LiquidBoard&apos;un da klavye uzantısı aracılığıyla açıkça yapıştırdığınız içerikler dışında diğer uygulamalara ait verilere erişemeyeceği anlamına gelir.</PolicyParagraph>

                <PolicyHeading>Kontrol Sizde</PolicyHeading>
                <PolicyParagraph>Verileriniz üzerinde her zaman tam kontrole sahipsiniz:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>iCloud Eşzamanlama özelliğini uygulama içinden etkinleştirebilir veya devre dışı bırakabilirsiniz</PolicyListItem>
                  <PolicyListItem>iOS Ayarları&apos;ndan fotoğraf arşivi erişimini iptal edebilirsiniz</PolicyListItem>
                  <PolicyListItem>Ayarlar → Genel → Klavye → Klavyeler bölümünden klavye için Tam Erişim&apos;i devre dışı bırakabilirsiniz</PolicyListItem>
                  <PolicyListItem>Uygulamayı silerek tüm verileri silebilirsiniz</PolicyListItem>
                </PolicyList>

                <PolicyHeading>İletişim</PolicyHeading>
                <PolicyParagraph>Veri güvenliği hakkında sorularınız varsa lütfen şu adresten bizimle iletişime geçin: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>
);

export const Privacy = () => (
  <>
    <PolicyHeading>Gizlilik Politikası</PolicyHeading>
                <PolicyParagraph>Son güncelleme: 5 Haziran 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard (&quot;biz&quot;, &quot;bizim&quot; veya &quot;uygulama&quot;) gizliliğinizi korumayı taahhüt eder. Bu Gizlilik Politikası, LiquidBoard&apos;u ve klavye uzantısını kullandığınızda bilgileri nasıl işlediğimizi açıklar.</PolicyParagraph>

                <PolicyHeading>Topladığımız Veriler</PolicyHeading>
                <PolicyParagraph>LiquidBoard hiçbir kişisel veriyi toplamaz, saklamaz veya haricî sunuculara iletmez. Uygulamada oluşturduğunuz tüm veriler — metin parçacıkları, görseller, çıkartmalar, kategoriler ve ayarlar dâhil — yalnızca cihazınızda veya kişisel iCloud hesabınızda saklanır.</PolicyParagraph>

                <PolicyHeading>Fotoğraflar ve Görseller</PolicyHeading>
                <PolicyParagraph>LiquidBoard aşağıdaki amaçlarla fotoğraf arşivinize erişim isteyebilir:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Metin parçacıklarınıza görseller eklemek</PolicyListItem>
                  <PolicyListItem>Fotoğraflarınızdan özel çıkartmalar oluşturmak</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Seçtiğiniz fotoğraflar cihazınızda yerel olarak saklanır ve/veya kişisel iCloud hesabınızla eşzamanlanır. Fotoğraflarınızı hiçbir şekilde yüklemeyiz, iletmeyiz veya bunlara erişmeyiz. Fotoğraf arşivi erişimi yalnızca açıkça bir görsel seçtiğiniz anda kullanılır — uygulama arşivinize arka planda erişmez.</PolicyParagraph>

                <PolicyHeading>Çıkartmalar</PolicyHeading>
                <PolicyParagraph>LiquidBoard ile şunları yapabilirsiniz:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Kendi fotoğraflarınızdan özel çıkartmalar oluşturmak</PolicyListItem>
                  <PolicyListItem>Klavye uzantısı aracılığıyla çıkartmalar eklemek</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Fotoğraflarınızdan oluşturduğunuz özel çıkartmalar yalnızca cihazınızda ve/veya iCloud&apos;da saklanır. Hiçbir çıkartma içeriği veya görsel verisi bize iletilmez.</PolicyParagraph>

                <PolicyHeading>Klavye Uzantısı ve Tam Erişim</PolicyHeading>
                <PolicyParagraph>Bu klavye uzantısı, hiçbir tuş vuruşu verisini veya yazdığınız metni toplamaz, kaydetmez ya da iletmez.</PolicyParagraph>
                <PolicyParagraph>LiquidBoard&apos;un klavye uzantısında aşağıdakileri yapabilmek için Tam Erişim&apos;in etkinleştirilmesi gerekir:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Görselleri ve çıkartmaları diğer uygulamalara yapıştırmak</PolicyListItem>
                  <PolicyListItem>Metin parçacıklarınızı ve çıkartmalarınızı cihazlarınız arasında iCloud aracılığıyla eşzamanlamak</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Tam Erişim yalnızca bu özellikler için kullanılır. Klavye, başka bir uygulamada yazdığınız hiçbir şeyi günlüğe kaydetmez, kayıt altına almaz veya iletmez. Hiçbir veri haricî sunuculara gönderilmez.</PolicyParagraph>

                <PolicyHeading>iCloud Eşzamanlama</PolicyHeading>
                <PolicyParagraph>iCloud Eşzamanlama özelliğini etkinleştirmeyi seçerseniz metin parçacıklarınız, görselleriniz ve çıkartmalarınız kişisel Apple Hesabınız kullanılarak Apple&apos;ın iCloud altyapısı üzerinden eşzamanlanır. Bu veriler Apple&apos;ın Gizlilik Politikası&apos;na tabidir. iCloud verilerinize erişimimiz yoktur.</PolicyParagraph>

                <PolicyHeading>Veri Paylaşımı</PolicyHeading>
                <PolicyParagraph>Verilerinizi hiçbir üçüncü tarafa satmaz, üçüncü taraflarla paylaşmaz veya açıklamayız. Herhangi bir üçüncü taraf analiz ya da reklam SDK&apos;sı veya izleme aracı kullanmayız.</PolicyParagraph>

                <PolicyHeading>Verilerin Saklanması ve Silinmesi</PolicyHeading>
                <PolicyParagraph>Verileriniz cihazınızda ve/veya iCloud hesabınızda kalır ve tamamen sizin kontrolünüz altındadır. Verilerinizi istediğiniz zaman aşağıdaki yollarla silebilirsiniz:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Uygulama içindeki metin parçacıklarını, görselleri veya çıkartmaları tek tek silmek</PolicyListItem>
                  <PolicyListItem>Ayarlar → Gizlilik ve Güvenlik → Fotoğraflar bölümünden fotoğraf arşivi erişimini iptal etmek</PolicyListItem>
                  <PolicyListItem>Yerel olarak saklanan tüm verileri kaldırmak için uygulamayı silmek</PolicyListItem>
                  <PolicyListItem>iCloud Eşzamanlama&apos;yı devre dışı bırakıp Ayarlar → [Adınız] → iCloud → Saklama Alanını Yönet bölümünden uygulamanın iCloud verilerini kaldırmak</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Çocukların Gizliliği</PolicyHeading>
                <PolicyParagraph>LiquidBoard, 13 yaşın altındaki çocuklardan bilerek hiçbir bilgi toplamaz. Uygulama hiçbir kullanıcıdan kişisel veri toplamaz.</PolicyParagraph>

                <PolicyHeading>Bu Politikadaki Değişiklikler</PolicyHeading>
                <PolicyParagraph>Bu Gizlilik Politikası&apos;nı zaman zaman güncelleyebiliriz. Tüm değişiklikler, güncellenmiş tarihle birlikte uygulamaya ve web sitemize yansıtılacaktır.</PolicyParagraph>

                <PolicyHeading>İletişim</PolicyHeading>
                <PolicyParagraph>Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa lütfen şu adresten bizimle iletişime geçin: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>
);

export const Terms = () => (
  <>
    <PolicyHeading>Kullanım Koşulları</PolicyHeading>
                <PolicyParagraph>Son güncelleme: 5 Haziran 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard&apos;u (&quot;Uygulama&quot;) indirerek, yükleyerek veya kullanarak bu Kullanım Koşulları&apos;na bağlı olmayı kabul edersiniz. Bu koşulları kabul etmiyorsanız lütfen Uygulama&apos;yı kullanmayın.</PolicyParagraph>

                <PolicyHeading>Lisans</PolicyHeading>
                <PolicyParagraph>Bu Koşullar&apos;a tabi olarak LiquidBoard&apos;u kişisel ve ticari olmayan amaçlarınız doğrultusunda kullanmanız için size sınırlı, münhasır olmayan, devredilemez ve geri alınabilir bir lisans veriyoruz.</PolicyParagraph>
                <PolicyParagraph>Şunları yapamazsınız:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Uygulama&apos;yı veya içeriğini kopyalamak, değiştirmek ya da dağıtmak</PolicyListItem>
                  <PolicyListItem>Tersine mühendislik uygulamak veya kaynak kodunu çıkarmaya çalışmak</PolicyListItem>
                  <PolicyListItem>Uygulama&apos;yı hukuka aykırı veya yetkisiz herhangi bir amaçla kullanmak</PolicyListItem>
                  <PolicyListItem>Uygulama&apos;ya erişimi herhangi bir üçüncü tarafa satmak, alt lisansını vermek veya devretmek</PolicyListItem>
                </PolicyList>

                <PolicyHeading>İçeriğiniz</PolicyHeading>
                <PolicyParagraph>LiquidBoard&apos;da oluşturduğunuz veya LiquidBoard&apos;a aktardığınız tüm metin parçacıkları, görseller ve çıkartmalar üzerindeki mülkiyet hakkınız tamamen size aittir. İçeriğiniz üzerinde hiçbir hak iddia etmeyiz.</PolicyParagraph>
                <PolicyParagraph>Uygulama&apos;yı kullanarak oluşturduğunuz veya yapıştırdığınız içeriğin telif hakkı, ticari marka ya da gizlilik hakları dâhil olmak üzere hiçbir üçüncü taraf hakkını ihlal etmemesini sağlamaktan yalnızca siz sorumlusunuz.</PolicyParagraph>

                <PolicyHeading>Kabul Edilebilir Kullanım</PolicyHeading>
                <PolicyParagraph>LiquidBoard&apos;u aşağıdaki niteliklere sahip içerikleri oluşturmak, saklamak veya dağıtmak için kullanmamayı kabul edersiniz:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Hukuka aykırı, zararlı, tehditkâr veya taciz edici olan</PolicyListItem>
                  <PolicyListItem>Başkalarının fikrî mülkiyet haklarını ihlal eden</PolicyListItem>
                  <PolicyListItem>Kötü amaçlı yazılım, virüs veya zararlı kod içeren</PolicyListItem>
                  <PolicyListItem>Yürürlükteki herhangi bir yerel, ulusal veya uluslararası kanunu ihlal eden</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Uygulama İçi Satın Alımlar</PolicyHeading>
                <PolicyParagraph>LiquidBoard, ek özelliklerin veya içeriklerin kilidini açmak için isteğe bağlı uygulama içi satın alımlar sunar. Tüm satın alımlar Apple tarafından App Store üzerinden işlenir ve Apple&apos;ın Satış Koşulları&apos;na tabidir.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Yürürlükteki mevzuatın veya Apple&apos;ın para iadesi politikasının gerektirdiği durumlar dışında satın alımlar için para iadesi yapılmaz</PolicyListItem>
                  <PolicyListItem>Fiyatlar bölgeye göre değişebilir ve satın alma sırasında yerel para biriminizle gösterilir</PolicyListItem>
                  <PolicyListItem>Satın alınan özellikler Apple Hesabınıza bağlıdır ve aynı Apple Hesabıyla giriş yapılmış herhangi bir cihazda geri yüklenebilir</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Para iadesi talep etmek için lütfen doğrudan şu adresten Apple ile iletişime geçin: <PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>Klavye Uzantısı ve Tam Erişim</PolicyHeading>
                <PolicyParagraph>Görselleri ve çıkartmaları diğer uygulamalara yapıştırmak ve iCloud Eşzamanlama&apos;yı etkinleştirmek için klavye uzantısında Tam Erişim&apos;in etkinleştirilmesi gerekir. Tam Erişim, yazdığınız hiçbir şeye erişmemize izin vermez.</PolicyParagraph>
                <PolicyParagraph>Tam Erişim&apos;i etkinleştirdiğinizde iOS&apos;un, klavye geliştiricisinin yazdıklarınıza erişebileceğini bildiren bir sistem uyarısı göstereceğini kabul edersiniz. Bunu açıkça belirtmek isteriz: LiquidBoard hiçbir tuş vuruşu verisini toplamaz, günlüğe kaydetmez veya iletmez.</PolicyParagraph>

                <PolicyHeading>iCloud Eşzamanlama</PolicyHeading>
                <PolicyParagraph>iCloud Eşzamanlama, verilerinizi cihazlar arasında eşzamanlamak için kişisel Apple iCloud hesabınızı kullanan isteğe bağlı bir özelliktir. iCloud kullanımı Apple&apos;ın Hüküm ve Koşulları&apos;na tabidir. iCloud hizmetindeki kesintilerden kaynaklanan veri kayıplarından sorumlu değiliz.</PolicyParagraph>

                <PolicyHeading>Garantilerin Reddi</PolicyHeading>
                <PolicyParagraph>LiquidBoard; satılabilirlik, belirli bir amaca uygunluk veya hak ihlali bulunmamasına ilişkin garantiler dâhil ancak bunlarla sınırlı olmamak üzere açık ya da zımni hiçbir garanti olmaksızın &quot;olduğu gibi&quot; ve &quot;mevcut olduğu şekliyle&quot; sunulur.</PolicyParagraph>
                <PolicyParagraph>Uygulama&apos;nın kesintisiz, hatasız veya virüslerden ya da diğer zararlı bileşenlerden arınmış olacağını garanti etmiyoruz.</PolicyParagraph>

                <PolicyHeading>Sorumluluğun Sınırlandırılması</PolicyHeading>
                <PolicyParagraph>Yürürlükteki mevzuatın izin verdiği azami ölçüde, Uygulama&apos;yı kullanmanızdan veya kullanamamanızdan kaynaklanan ve veri kaybı, kâr kaybı ya da ticari itibar kaybı dâhil ancak bunlarla sınırlı olmayan dolaylı, arızi, özel, sonuç olarak ortaya çıkan veya cezai zararlardan sorumlu olmayacağız.</PolicyParagraph>

                <PolicyHeading>Fesih</PolicyHeading>
                <PolicyParagraph>Bu Koşullar&apos;ı ihlal ettiğine veya diğer kullanıcılara, bize ya da üçüncü taraflara zarar verdiğine inandığımız davranışlar nedeniyle Uygulama&apos;ya erişiminizi herhangi bir zamanda bildirimde bulunmaksızın sonlandırma veya kısıtlama hakkımızı saklı tutarız.</PolicyParagraph>
                <PolicyParagraph>Uygulama&apos;yı cihazınızdan silerek istediğiniz zaman kullanmayı bırakabilirsiniz.</PolicyParagraph>

                <PolicyHeading>Bu Koşullardaki Değişiklikler</PolicyHeading>
                <PolicyParagraph>Bu Kullanım Koşulları&apos;nı zaman zaman güncelleyebiliriz. Değişiklikler yayımlandıktan sonra Uygulama&apos;yı kullanmaya devam etmeniz, gözden geçirilmiş Koşullar&apos;ı kabul ettiğiniz anlamına gelir. Önemli değişiklikleri Uygulama veya web sitemiz üzerinden size bildireceğiz.</PolicyParagraph>

                <PolicyHeading>Uygulanacak Hukuk</PolicyHeading>
                <PolicyParagraph>Bu Koşullar, kanunlar ihtilafı ilkeleri dikkate alınmaksızın geliştiricinin yerleşik olduğu yargı bölgesinin kanunlarına tabidir ve bu kanunlara göre yorumlanır.</PolicyParagraph>

                <PolicyHeading>İletişim</PolicyHeading>
                <PolicyParagraph>Bu Koşullar hakkında herhangi bir sorunuz varsa lütfen şu adresten bizimle iletişime geçin: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>
);

export const Payment = () => (
  <>
    <PolicyHeading>Ödeme ve Para İadesi Politikası</PolicyHeading>
                <PolicyParagraph>Son güncelleme: 5 Haziran 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard, premium özelliklerin kilidini açmak için isteğe bağlı uygulama içi satın alımlar sunar. Tüm ödemeler bütünüyle Apple tarafından App Store üzerinden gerçekleştirilir — ödeme bilgilerinizi işlemeyiz, saklamayız veya bu bilgilere erişemeyiz.</PolicyParagraph>

                <PolicyHeading>Satın Alabilecekleriniz</PolicyHeading>
                <PolicyParagraph>LiquidBoard aşağıdaki isteğe bağlı satın alımları sunar:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Premium Özellikler — Gelişmiş uygulama işlevlerinin kilidini tek seferlik ödeme veya abonelik yoluyla açma</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Mevcut satın alımlar ve fiyatlar, satın alma sırasında Uygulama&apos;da gösterilir. Fiyatlar bölgeye göre değişebilir ve yerel para biriminizle gösterilir.</PolicyParagraph>

                <PolicyHeading>Ödemelerin İşlenmesi</PolicyHeading>
                <PolicyParagraph>Tüm işlemler Apple tarafından güvenli bir şekilde gerçekleştirilir. Kredi kartı bilgilerinizi, fatura adresinizi veya diğer ödeme bilgilerinizi hiçbir zaman görmeyiz ya da saklamayız.</PolicyParagraph>
                <PolicyParagraph>Bir satın alma işlemini tamamlayarak Apple&apos;ın App Store Satış Koşulları&apos;nı kabul edersiniz. Satın alma onaylandığında Apple&apos;da kayıtlı ödeme yönteminizden ücret tahsil edilir.</PolicyParagraph>

                <PolicyHeading>Satın Alımları Geri Yükleme</PolicyHeading>
                <PolicyParagraph>LiquidBoard&apos;u yeniden yüklerseniz veya yeni bir cihaza geçerseniz Uygulama&apos;daki Satın Alımları Geri Yükle seçeneğini kullanarak önceki tüm satın alımlarınızı ek ücret ödemeden geri yükleyebilirsiniz. Satın alımlar Apple Hesabınıza bağlıdır ve aynı hesapla giriş yapılmış tüm cihazlarda kullanılabilir.</PolicyParagraph>

                <PolicyHeading>Abonelikler</PolicyHeading>
                <PolicyParagraph>LiquidBoard aboneliğe dayalı satın alımlar sunarsa:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Abonelikler, mevcut faturalandırma döneminin bitiminden en az 24 saat önce iptal edilmedikleri sürece otomatik olarak yenilenir</PolicyListItem>
                  <PolicyListItem>Yenileme ücreti, mevcut dönemin bitiminden önceki 24 saat içinde Apple Hesabınızla ilişkili ödeme yönteminden tahsil edilir</PolicyListItem>
                  <PolicyListItem>Abonelikleri Ayarlar → [Adınız] → Abonelikler bölümünden istediğiniz zaman yönetebilir veya iptal edebilirsiniz</PolicyListItem>
                  <PolicyListItem>Aboneliğin iptali, mevcut ücretli dönemin sonunda yürürlüğe girer — o zamana kadar erişiminiz devam eder</PolicyListItem>
                  <PolicyListItem>Ücretsiz deneme süreleri sunulursa deneme sona ermeden iptal edilmediği takdirde ücretli aboneliğe dönüşür</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Para İadesi Politikası</PolicyHeading>
                <PolicyParagraph>Para iadelerini doğrudan biz gerçekleştirmeyiz. Tüm App Store işlemlerinin kayıtlı satıcısı Apple olduğundan bütün para iadesi talepleri Apple&apos;a iletilmelidir.</PolicyParagraph>
                <PolicyParagraph>Apple, para iadelerini kendi politikası doğrultusunda takdirine bağlı olarak değerlendirir. Yanlışlıkla yapılan satın alımlar, yetkisiz ücretlendirmeler veya açıklandığı şekilde çalışmayan satın alımlar, yaygın olarak uygun görülen durumlar arasındadır.</PolicyParagraph>
                <PolicyParagraph>Apple&apos;dan para iadesi talep etmek için:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink> adresine gidin ve Apple Hesabınızla giriş yapın</PolicyListItem>
                  <PolicyListItem>LiquidBoard satın alımını bulun ve Sorun Bildir seçeneğine dokunun</PolicyListItem>
                  <PolicyListItem>Nedeni seçip talebinizi gönderin</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple genellikle birkaç iş günü içinde yanıt verir. Para iadesi kararları yalnızca Apple tarafından verilir.</PolicyParagraph>

                <PolicyHeading>Fiyat Değişiklikleri</PolicyHeading>
                <PolicyParagraph>Uygulama içi satın alımların fiyatlarını istediğimiz zaman değiştirme hakkımızı saklı tutarız. Aboneliklere ilişkin fiyat değişiklikleri Uygulama veya App Store üzerinden önceden bildirilecek ve bir sonraki faturalandırma döneminizin başında yürürlüğe girecektir. Abonelik fiyatındaki herhangi bir değişiklik yürürlüğe girmeden önce Apple tarafından bilgilendirileceksiniz.</PolicyParagraph>

                <PolicyHeading>Başarısız veya Tamamlanmamış Satın Alımlar</PolicyHeading>
                <PolicyParagraph>Bir satın alma işlemi başarısız olursa veya sizden ücret tahsil edildiği hâlde içeriği alamazsanız lütfen öncelikle Uygulama içinden satın alımları geri yüklemeyi deneyin. Sorun devam ederse <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink> adresinden bizimle iletişime geçin; konuyu derhâl inceleyeceğiz.</PolicyParagraph>

                <PolicyHeading>İletişim</PolicyHeading>
                <PolicyParagraph>Faturalandırma soruları veya satın alma sorunları için şu adresten bizimle iletişime geçin: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>Para iadeleri için lütfen Apple&apos;ın resmî kanalını kullanın: <PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
