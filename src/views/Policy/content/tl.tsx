
export const Security = () => (
  <>
    <h2>Patakaran sa Seguridad ng Datos</h2>
                <p>Huling na-update: Hunyo 05 2026 · LiquidBoard</p>
                <p>Ang LiquidBoard ay idinisenyo na may prayoridad sa privacy. Ang iyong data ay hindi umaalis sa iyong device maliban kung hayagang pipiliin mong i-enable ang iCloud Sync. Wala kaming mga server, walang mga account, at walang access sa iyong nilalaman.</p>

                <h2>Pag-iimbak ng Datos</h2>
                <p>Lahat ng nilalamang nililikha mo sa LiquidBoard — mga piraso ng teksto, larawan, at mga sticker — ay iniimbak sa isa sa dalawang lugar:</p>
                <ul>
                  <li><strong>Imbakan sa aparato</strong>— Pinamamahalaan ng iOS at naa-access lamang ng LiquidBoard. Hindi mababasa ng ibang apps ang iyong data.</li>
                  <li><strong>iCloud (opsyonal)</strong>— Nasinkronisa sa pamamagitan ng iyong personal na Apple ID gamit ang naka-encrypt na CloudKit na imprastruktura ng Apple.</li>
                </ul>
                <p>Walang datos ang iniimbak sa aming mga server. Hindi kami nagpapatakbo ng anumang backend na imprastruktura.</p>

                <h2>Pag-encrypt</h2>
                <p>Ang iyong data ay protektado ng iOS at ng mga layer ng seguridad ng Apple:</p>
                <ul>
                  <li><strong>Nakapahinga</strong>— Ang data na nakaimbak sa iyong aparato ay naka-encrypt ng iOS gamit ang passcode ng iyong aparato at ang Secure Enclave.</li>
                  <li><strong>Nasa pagbiyahe</strong>— Kung pinapagana ang iCloud Sync, ang datos ay ini-encrypt ng CloudKit ng Apple bago ito ipadala.</li>
                  <li><strong>iCloud Backup</strong>— Kung ang iyong aparato ay naka-backup sa iCloud, ang data ng app ay kasama sa naka-encrypt na sistema ng backup ng Apple.</li>
                </ul>

                <h2>Seguridad ng Litrato at Imahe</h2>
                <p>Ang LiquidBoard ay nag-aaccess sa iyong photo library lamang kapag hayagang pinili mong pumili o mag-import ng larawan. Ang app:</p>
                <ul>
                  <li>Hindi ginagamit ang iyong photo library sa background</li>
                  <li>Hindi nag-a-upload ng mga larawan sa anumang server</li>
                  <li>Ibinabago ang mga piling imahe sa lokal na imbakan sa naka-sandbox na lalagyan ng app</li>
                  <li>Pinoproseso ang paggawa ng sticker nang buo sa device</li>
                </ul>
                <p>Maaari mong bawiin ang pag-access sa larawan kahit kailan sa Mga Setting → Privacy at Seguridad → Mga Larawan.</p>

                <h2>Seguridad ng Ekstensyon ng Keyboard</h2>
                <p>Ang extension ng keyboard ay hindi nangongolekta, nagtatala, o nagpapadala ng anumang data ng pagpindot sa susi o teksto na iyong tinatype sa ibang apps.</p>
                <p>Kailangan ang Buong Access para sa extension ng keyboard upang i-paste ang mga larawan at sticker, at upang ma-access ang iCloud Sync. Kahit na naka-enable ang Buong Access, ang extension ng keyboard ay gumagana nang ganap sa loob ng sandboxed na kapaligiran ng iOS. Wala itong kakayahan na magpadala ng data sa mga panlabas na server.</p>

                <h2>Walang Pag-access ng Ibang Partido sa Data</h2>
                <p>Ang LiquidBoard ay hindi isinama ang alinman sa mga sumusunod:</p>
                <ul>
                  <li>Mga SDK para sa analytics o pag-uulat ng pagkabigo, tulad ng Firebase o Mixpanel</li>
                  <li>Mga network ng advertising o mga tracking SDK</li>
                  <li>Serbisyo ng imbakan o pagproseso sa ulap ng ikatlong partido</li>
                </ul>
                <p>Ang iyong nilalaman ay hindi kailanman ibinabahagi o naa-access ng anumang ikatlong partido.</p>

                <h2>Sandbox ng App</h2>
                <p>Ang LiquidBoard ay tumatakbo sa mahigpit na sandbox ng app ng iOS. Ibig sabihin nito, ang ibang apps sa iyong device ay hindi maaaring ma-access ang data ng LiquidBoard at ang LiquidBoard ay hindi maaaring ma-access ang data na pag-aari ng ibang apps maliban sa mga nilalaman na tahasang ini-paste mo sa pamamagitan ng keyboard extension.</p>

                <h2>Ang Iyong Kontrol</h2>
                <p>May ganap kang kontrol sa iyong data sa lahat ng oras:</p>
                <ul>
                  <li>Paganahin o huwag paganahin ang iCloud Sync mula sa loob ng app</li>
                  <li>Bawiin ang access sa photo library sa iOS Settings</li>
                  <li>Huwag paganahin ang Buong Access para sa keyboard sa Mga Setting → Pangkalahatan → Keyboard → Keyboard</li>
                  <li>Tanggalin ang lahat ng datos sa pamamagitan ng pagtanggal ng app</li>
                </ul>

                <h2>Makipag-ugnayan</h2>
                <p>Kung mayroon kang mga katanungan tungkol sa seguridad ng datos, mangyaring makipag-ugnayan sa amin sa:<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a></p>
  </>);

export const Privacy = () => (<>
    <h2>Patakaran sa Pagkapribado</h2>
                <p>Huling na-update: Hunyo 05 2026 · LiquidBoard</p>
                <p>Ang LiquidBoard ("kami", "amin", o "ang app") ay nakatuon sa pagprotekta ng iyong privacy. Ipinaliliwanag ng Patakaran sa Privacy na ito kung paano namin hinahandle ang impormasyon kapag ginamit mo ang LiquidBoard at ang keyboard extension nito.</p>

                <h2>Datos na Kinokolekta Namin</h2>
                <p>Ang LiquidBoard ay hindi nangongolekta, nag-iimbak, o nagpapadala ng anumang personal na datos sa mga panlabas na server. Lahat ng datos na nilikha mo sa loob ng app — kabilang ang mga text snippet, larawan, stickers, kategorya, at mga setting — ay iniimbak lamang sa iyong device o sa iyong personal na iCloud account.</p>

                <h2>Mga Litrato at Imahe</h2>
                <p>Maaaring humingi ang LiquidBoard ng access sa iyong library ng mga larawan para sa mga sumusunod na layunin:</p>
                <ul>
                  <li>Paglalagay ng mga larawan sa iyong mga snippet</li>
                  <li>Paglikha ng mga custom na sticker mula sa iyong mga larawan</li>
                </ul>
                <p>Ang mga larawan na iyong pinili ay iniimbak nang lokal sa iyong aparato at/o sinasabay sa iyong personal na iCloud na account. Hindi namin ina-upload, ipinapadala, o ina-access ang iyong mga larawan sa anumang paraan. Ang pag-access sa photo library ay ginagamit lamang sa sandaling tahasang piliin mo ang isang imahe — ang app ay hindi nag-a-access ng iyong library sa background.</p>

                <h2>Mga sticker</h2>
                <p>Pinapayagan ka ng LiquidBoard na:</p>
                <ul>
                  <li>Gumawa ng sariling mga sticker mula sa iyong mga larawan</li>
                  <li>Magpasok ng mga sticker sa pamamagitan ng pagpapalawak ng keyboard</li>
                </ul>
                <p>Ang mga custom na sticker na ginawa mo mula sa iyong mga larawan ay nakaimbak lamang sa iyong device at/o iCloud. Walang nilalaman ng sticker o datos ng imahe na ipinapadala sa amin.</p>

                <h2>Pinalawak na Keyboard at Buong Access</h2>
                <p>Ang extension ng keyboard na ito ay hindi nangongolekta, nagtatalaga, o naglilipat ng anumang data ng pagpindot sa susi o teksto na iyong tinatype.</p>
                <p>Ang extension ng keyboard ng LiquidBoard ay nangangailangan ng Buong Access na naka-enable upang:</p>
                <ul>
                  <li>Idikit ang mga larawan at sticker sa ibang mga app</li>
                  <li>I-sync ang iyong mga snippet at sticker sa pamamagitan ng iCloud sa lahat ng iyong mga device</li>
                </ul>
                <p>Ang Buong Access ay ginagamit lamang para sa mga tampok na ito. Ang keyboard ay hindi nagtatala, nagre-record, o nagpapadala ng anumang iyong tinatype sa anumang ibang app. Walang datos ang ipinapadala sa anumang panlabas na server.</p>

                <h2>Pag-synk ng iCloud</h2>
                <p>Kung pipiliin mong i-enable ang iCloud Sync, ang iyong mga text snippet, mga larawan, at mga sticker ay isisync sa pamamagitan ng iCloud na imprastruktura ng Apple gamit ang iyong personal na Apple ID. Ang data na ito ay pinamamahalaan ng Patakaran sa Privacy ng Apple. Wala kaming access sa iyong data sa iCloud.</p>

                <h2>Pagbabahagi ng Datos</h2>
                <p>Hindi namin ibinebenta, ibinabahagi, o isiniwalat ang iyong data sa anumang ikatlong partido. Hindi rin kami gumagamit ng anumang third-party analytics, advertising SDKs, o mga tool sa pagsubaybay.</p>

                <h2>Pagpapanatili at Pagtanggal ng Data</h2>
                <p>Nanatili ang iyong data sa iyong device at/o iCloud account at ganap na nasa iyong kontrol. Maaari mong tanggalin ang iyong data anumang oras sa pamamagitan ng:</p>
                <ul>
                  <li>Pagbura ng mga indibidwal na piraso ng teksto, mga larawan, o mga sticker sa loob ng app</li>
                  <li>Pagbawi ng access sa library ng larawan sa Mga Setting → Privacy → Mga Larawan</li>
                  <li>Ang pagtanggal ng app, na nag-aalis ng lahat ng lokal na naka-imbak na datos</li>
                  <li>Pag-disable ng iCloud Sync at pagtanggal ng iCloud data ng app mula sa Settings → [Iyong Pangalan] → iCloud → Manage Storage</li>
                </ul>

                <h2>Pagkapribado ng mga Bata</h2>
                <p>Ang LiquidBoard ay hindi sadyang nangongolekta ng anumang impormasyon mula sa mga bata na wala pang 13 taong gulang. Ang app ay hindi nangongolekta ng personal na datos mula sa anumang mga gumagamit.</p>

                <h2>Mga Pagbabago sa Patakarang Ito</h2>
                <p>Maaaring i-update namin ang Patakaran sa Pagkapribado na ito paminsan-minsan. Anumang pagbabago ay makikita sa app at sa aming website kasama ang na-update na petsa.</p>

                <h2>Makipag-ugnayan</h2>
                <p>Kung mayroon kayong anumang mga katanungan tungkol sa Patakaran sa Pagkapribado na ito, mangyaring makipag-ugnayan sa amin sa:<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a></p>
  </>);

export const Terms = () => (<>
    <h2>Mga Tuntunin ng Paggamit</h2>
                <p>Huling na-update: Hunyo 05 2026 · LiquidBoard</p>
                <p>Sa pamamagitan ng pag-download, pag-install, o paggamit ng LiquidBoard ("ang App"), sumasang-ayon ka na masunod ang mga Tuntunin ng Paggamit na ito. Kung hindi ka sumasang-ayon sa mga tuntuning ito, mangyaring huwag gamitin ang App.</p>

                <h2>Lisensya</h2>
                <p>Ipinagkakaloob namin sa iyo ang isang limitado, hindi eksklusibo, hindi naililipat, at maaring bawiin na lisensya upang gamitin ang LiquidBoard para sa iyong personal na layunin na hindi pang-komersyo, alinsunod sa mga Tuntuning ito.</p>
                <p>Hindi mo maaaring:</p>
                <ul>
                  <li>Kopyahin, baguhin, o ipamahagi ang App o ang nilalaman nito</li>
                  <li>Bumuo ng kabaligtaran o subukang kunin ang pinagmulan ng code</li>
                  <li>Gamitin ang App para sa anumang labag sa batas o hindi awtorisadong layunin</li>
                  <li>Igalaw, ipasub-licensya, o ilipat ang access sa App sa anumang ikatlong partido</li>
                </ul>

                <h2>Ang Iyong Nilalaman</h2>
                <p>Pinananatili mo ang buong pagmamay-ari ng lahat ng text snippets, larawan, at sticker na iyong nilikha o ini-import sa LiquidBoard. Hindi namin inaangkin ang anumang karapatan sa iyong nilalaman.</p>
                <p>Ikaw lamang ang may pananagutan sa pagtitiyak na ang nilalamang iyong nilikha o ipinasok gamit ang App ay hindi lumalabag sa anumang karapatan ng ikatlong partido, kabilang ang karapatang-ari, tatak, o karapatan sa privacy.</p>

                <h2>Katanggap-tanggap na Paggamit</h2>
                <p>Sang-ayon ka na hindi gagamitin ang LiquidBoard upang lumikha, mag-imbak, o magpakalat ng nilalaman na:</p>
                <ul>
                  <li>Ipinagbabawal, nakasasama, nagbabanta, o nang-aabala</li>
                  <li>Lumalabag sa mga karapatan sa intelektwal na ari-arian ng iba</li>
                  <li>Naglalaman ng malware, virus, o nakasasamang code</li>
                  <li>Lumalabag sa anumang naaangkop na lokal, pambansa, o pandaigdigang batas</li>
                </ul>

                <h2>Mga Pagbili sa App</h2>
                <p>Nag-aalok ang LiquidBoard ng opsyonal na mga in-app na pagbili upang ma-unlock ang mga karagdagang tampok o nilalaman. Lahat ng pagbili ay pinoproseso ng Apple sa pamamagitan ng App Store at nasasakupan ng Terms of Sale ng Apple.</p>
                <ul>
                  <li>Ang mga pagbili ay hindi nare-refund maliban kung kinakailangan ng naaangkop na batas o patakaran sa refund ng Apple</li>
                  <li>Maaaring mag-iba ang mga presyo depende sa rehiyon at ipinapakita sa iyong lokal na pera sa oras ng pagbili</li>
                  <li>Ang mga biniling tampok ay naka-link sa iyong Apple ID at maaaring maibalik sa anumang aparato na naka-sign in gamit ang parehong Apple ID</li>
                </ul>
                <p>Upang humiling ng refund, mangyaring makipag-ugnayan nang direkta sa Apple sa:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.</p>

                <h2>Pinalawak na Keyboard at Buong Access</h2>
                <p>Kinakailangan ang Paganahin ang Buong Access para sa extension ng keyboard upang makapag-paste ng mga imahe at sticker sa ibang mga app at upang paganahin ang iCloud Sync. Ang Buong Access ay hindi nagbibigay sa amin ng access sa anumang ini-type mo.</p>
                <p>Ikinikilala mo na sa pamamagitan ng pag-enable ng Full Access, ipapakita ng iOS ang isang abiso ng sistema na nagpapaalam sa iyo na maaaring ma-access ng developer ng keyboard ang iyong pagta-type. Nais naming maging malinaw: Ang LiquidBoard ay hindi nangongolekta, nagtatala, o nagpapadala ng anumang data ng keystroke.</p>

                <h2>Pag-sync ng iCloud</h2>
                <p>Ang iCloud Sync ay isang opsyonal na tampok na gumagamit ng iyong personal na Apple iCloud account upang i-sync ang iyong data sa iba't ibang mga aparato. Ang paggamit ng iCloud ay napapailalim sa Mga Tuntunin at Kondisyon ng Apple. Hindi kami responsable para sa anumang pagkawala ng data na resulta ng mga pagkaantala o pagtigil ng serbisyo ng iCloud.</p>

                <h2>Pagtatanggal ng Mga Warranty</h2>
                <p>Ang LiquidBoard ay ibinibigay na "as is" at "as available" na walang anumang uri ng garantiya, maging tahasan o ipinahiwatig, kabilang ngunit hindi limitado sa mga garantiya ng pagiging maibebenta, pagiging angkop para sa isang partikular na layunin, o hindi paglabag sa karapatan ng iba.</p>
                <p>Hindi namin ginagarantiyahan na ang App ay magiging tuloy-tuloy, walang mali, o walang virus o iba pang nakakapinsalang sangkap.</p>

                <h2>Limitasyon ng Pananagutan</h2>
                <p>Hanggang sa pinakamalawak na saklaw na pinahihintulutan ng naaangkop na batas, hindi kami mananagot para sa anumang hindi tuwiran, pangkaswal, espesyal, konsekwensyal, o parusang pinsala, kabilang ngunit hindi limitado sa pagkawala ng data, pagkawala ng kita, o pagkawala ng magandang pakikipag-ugnayan, na nagmumula sa iyong paggamit o kawalan ng kakayahang gamitin ang App.</p>

                <h2>Pagwawakas</h2>
                <p>Inirereserba namin ang karapatang tapusin o limitahan ang iyong access sa App anumang oras, nang walang abiso, para sa gawaing pinaniniwalaan naming lumalabag sa mga Tuntunin na ito o nakakasama sa ibang mga user, sa amin, o sa mga ikatlong partido.</p>
                <p>Maaari mong itigil ang paggamit ng App anumang oras sa pamamagitan ng pagbura nito mula sa iyong device.</p>

                <h2>Mga Pagbabago sa Mga Tuntuning Ito</h2>
                <p>Maaaring i-update namin ang mga Tuntunin ng Paggamit na ito paminsan-minsan. Ang patuloy na paggamit ng App pagkatapos maipost ang mga pagbabago ay nangangahulugang tinatanggap mo ang binagong mga Tuntunin. Ipapaalam namin sa iyo ang mahahalagang pagbabago sa pamamagitan ng App o sa aming website.</p>

                <h2>Batas na Namamahala</h2>
                <p>Ang mga Tuntuning ito ay pinamamahalaan at binibigyang-kahulugan alinsunod sa mga batas ng hurisdiksyon kung saan nakabase ang developer, nang hindi isinasaalang-alang ang mga prinsipyo ng salungatan ng batas.</p>

                <h2>Makipag-ugnayan</h2>
                <p>Kung mayroon kang anumang mga katanungan tungkol sa Mga Tuntuning ito, mangyaring makipag-ugnayan sa amin sa:<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a></p>
  </>);

export const Payment = () => (<>
    <h2>Patakaran sa Pagbabayad at Pagrefund</h2>
                <p>Huling na-update: Hunyo 05 2026 · LiquidBoard</p>
                <p>Nag-aalok ang LiquidBoard ng opsyonal na in-app na pagbili upang ma-unlock ang mga premium na tampok. Lahat ng bayad ay pinangangasiwaan ng Apple sa pamamagitan ng App Store — hindi namin pinoproseso, iniimbak, o may access sa iyong impormasyon sa pagbabayad.</p>

                <h2>Kung Ano ang Maaari Mong Bilhin</h2>
                <p>Nag-aalok ang LiquidBoard ng mga sumusunod na opsyonal na pagbili:</p>
                <ul>
                  <li>Mga Premium na Tampok — Isang beses na pagbabayad o subscription para ma-unlock ang advanced na functionality ng app</li>
                </ul>
                <p>Ang mga magagamit na pagbili at presyo ay ipinapakita sa loob ng App sa oras ng pagbili. Maaaring magbago ang mga presyo depende sa rehiyon at ipinapakita sa iyong lokal na pera.</p>

                <h2>Pagproseso ng Bayad</h2>
                <p>Lahat ng transaksyon ay pinoproseso nang ligtas ng Apple. Hindi namin kailanman nakikita o iniimbak ang iyong credit card, billing address, o anumang detalye ng pagbabayad.</p>
                <p>Sa pamamagitan ng pagkumpleto ng pagbili, sumasang-ayon ka sa Mga Tuntunin ng Pagbebenta ng Apple App Store. Ang iyong paraan ng pagbabayad na nakatala sa Apple ay sisingilin sa oras ng kumpirmasyon ng pagbili.</p>

                <h2>Pagbabalik ng Mga Binili</h2>
                <p>Kung muling i-install mo ang LiquidBoard o lilipat sa bagong device, maaari mong maibalik ang lahat ng nakaraang pagbili nang walang karagdagang bayad gamit ang opsyon na Ibalik ang Mga Binili sa loob ng App. Ang mga pagbili ay naka-link sa iyong Apple ID at magagamit sa lahat ng mga device na naka-sign in gamit ang parehong account.</p>

                <h2>Mga Subskripsyon</h2>
                <p>Kung nag-aalok ang LiquidBoard ng mga pagbili batay sa subscription:</p>
                <ul>
                  <li>Ang mga subscription ay awtomatikong magri-renew maliban kung kanselahin nang hindi bababa sa 24 na oras bago matapos ang kasalukuyang panahon ng pagsingil</li>
                  <li>Sisingilin ang iyong Apple ID para sa pag-renew sa loob ng 24 na oras bago matapos ang kasalukuyang panahon</li>
                  <li>Maaari mong pamahalaan o kanselahin ang mga subscription anumang oras sa Mga Setting → [Iyong Pangalan] → Mga Subscription</li>
                  <li>Ang pagkansela ng isang subscription ay magkakabisa sa pagtatapos ng kasalukuyang bayad na panahon — mananatili ang iyong access hanggang sa panahong iyon</li>
                  <li>Ang mga libreng panahon ng pagsubok, kung inaalok, ay magiging bayad na suskrisyon maliban kung kanselahin bago matapos ang pagsubok</li>
                </ul>

                <h2>Patakaran sa Pagbabalik ng Pera</h2>
                <p>Hindi namin direktang pinoproseso ang mga refund. Lahat ng kahilingan para sa refund ay dapat isumite sa Apple, dahil sila ang opisyal na mangangalakal para sa lahat ng transaksyon sa App Store.</p>
                <p>Ang Apple ay humahawak ng mga refund ayon sa kanilang pagpapasya alinsunod sa kanilang patakaran sa refund. Kadalasang kwalipikadong mga kaso ay kinabibilangan ng aksidenteng pagbili, hindi awtorisadong singil, o mga pagbiling hindi gumana ayon sa nakasaad.</p>
                <p>Upang humiling ng refund mula sa Apple:</p>
                <ul>
                  <li>Gawin mo na.<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>at mag-sign in gamit ang iyong Apple ID</li>
                  <li>Hanapin ang pagbili ng LiquidBoard at pindutin ang Iulat ang Isang Problema</li>
                  <li>Piliin ang dahilan at isumite ang iyong kahilingan</li>
                </ul>
                <p>Karaniwan ay tumutugon ang Apple sa loob ng ilang araw ng negosyo. Ang mga desisyon sa refund ay ginagawa lamang ng Apple.</p>

                <h2>Pagbabago ng Presyo</h2>
                <p>Ipinapanatili namin ang karapatang baguhin ang presyo para sa mga pagbili sa app anumang oras. Ang mga pagbabago sa presyo para sa mga subscription ay ipapaalam nang maaga sa pamamagitan ng App o App Store, at magkakabisa sa simula ng iyong susunod na billing cycle. Ikaw ay papadalhan ng abiso ng Apple bago magkabisa ang anumang pagbabago sa presyo ng subscription.</p>

                <h2>Nabigong o Hindi Kumpletong Pagbili</h2>
                <p>Kung nabigo ang isang pagbili o nakasawsaw ka ng bayad ngunit hindi natanggap ang nilalaman, mangyaring subukang i-restore muna ang mga pagbili sa loob ng App. Kung nagpapatuloy ang problema, makipag-ugnayan sa amin sa<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a>at mag-iimbestiga kami agad.</p>

                <h2>Makipag-ugnayan</h2>
                <p>Para sa mga tanong tungkol sa pagsingil o mga isyu sa pagbili, makipag-ugnayan sa amin sa:<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a></p>
                <p>Para sa mga refund, mangyaring gamitin ang opisyal na channel ng Apple:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></p>
  </>
);
