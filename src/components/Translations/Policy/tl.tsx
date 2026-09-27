import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Patakaran sa Seguridad ng Datos</PolicyHeading>
                <PolicyParagraph>Huling na-update: Hunyo 05 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Ang LiquidBoard ay idinisenyo na may prayoridad sa privacy. Ang iyong data ay hindi umaalis sa iyong device maliban kung hayagang pipiliin mong i-enable ang iCloud Sync. Wala kaming mga server, walang mga account at walang access sa iyong nilalaman.</PolicyParagraph>

                <PolicyHeading>Pag-iimbak ng Datos</PolicyHeading>
                <PolicyParagraph>Lahat ng nilalamang nililikha mo sa LiquidBoard — mga piraso ng teksto, larawan at mga sticker — ay iniimbak sa isa sa dalawang lugar:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Imbakan sa aparato</PolicyEmphasis>— Pinamamahalaan ng iOS at naa-access lamang ng LiquidBoard. Hindi mababasa ng ibang apps ang iyong data.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (opsyonal)</PolicyEmphasis>— Nasinkronisa sa pamamagitan ng iyong personal na Apple ID gamit ang naka-encrypt na CloudKit na imprastruktura ng Apple.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Walang datos ang iniimbak sa aming mga server. Hindi kami nagpapatakbo ng anumang backend na imprastruktura.</PolicyParagraph>

                <PolicyHeading>Pag-encrypt</PolicyHeading>
                <PolicyParagraph>Ang iyong data ay protektado ng iOS at ng mga layer ng seguridad ng Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Nakapahinga</PolicyEmphasis>— Ang data na nakaimbak sa iyong aparato ay naka-encrypt ng iOS gamit ang passcode ng iyong aparato at ang Secure Enclave.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Nasa pagbiyahe</PolicyEmphasis>— Kung pinapagana ang iCloud Sync, ang datos ay ini-encrypt ng CloudKit ng Apple bago ito ipadala.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud Backup</PolicyEmphasis>— Kung ang iyong aparato ay naka-backup sa iCloud, ang data ng app ay kasama sa naka-encrypt na sistema ng backup ng Apple.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Seguridad ng Litrato at Imahe</PolicyHeading>
                <PolicyParagraph>Ang LiquidBoard ay nag-aaccess sa iyong photo library lamang kapag hayagang pinili mong pumili o mag-import ng larawan. Ang app:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Hindi ginagamit ang iyong photo library sa background</PolicyListItem>
                  <PolicyListItem>Hindi nag-a-upload ng mga larawan sa anumang server</PolicyListItem>
                  <PolicyListItem>Ibinabago ang mga piling imahe sa lokal na imbakan sa naka-sandbox na lalagyan ng app</PolicyListItem>
                  <PolicyListItem>Pinoproseso ang paggawa ng sticker nang buo sa device</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Maaari mong bawiin ang pag-access sa larawan kahit kailan sa Mga Setting → Privacy at Seguridad → Mga Larawan.</PolicyParagraph>

                <PolicyHeading>Seguridad ng Ekstensyon ng Keyboard</PolicyHeading>
                <PolicyParagraph>Ang extension ng keyboard ay hindi nangongolekta, nagtatala o nagpapadala ng anumang data ng pagpindot sa susi o teksto na iyong tinatype sa ibang apps.</PolicyParagraph>
                <PolicyParagraph>Kailangan ang Buong Access para sa extension ng keyboard upang i-paste ang mga larawan at sticker at upang ma-access ang iCloud Sync. Kahit na naka-enable ang Buong Access, ang extension ng keyboard ay gumagana nang ganap sa loob ng sandboxed na kapaligiran ng iOS. Wala itong kakayahan na magpadala ng data sa mga panlabas na server.</PolicyParagraph>

                <PolicyHeading>Walang Pag-access ng Ibang Partido sa Data</PolicyHeading>
                <PolicyParagraph>Ang LiquidBoard ay hindi isinama ang alinman sa mga sumusunod:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Mga SDK para sa analytics o pag-uulat ng pagkabigo, tulad ng Firebase o Mixpanel</PolicyListItem>
                  <PolicyListItem>Mga network ng advertising o mga tracking SDK</PolicyListItem>
                  <PolicyListItem>Serbisyo ng imbakan o pagproseso sa ulap ng ikatlong partido</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Ang iyong nilalaman ay hindi kailanman ibinabahagi o naa-access ng anumang ikatlong partido.</PolicyParagraph>

                <PolicyHeading>Sandbox ng App</PolicyHeading>
                <PolicyParagraph>Ang LiquidBoard ay tumatakbo sa mahigpit na sandbox ng app ng iOS. Ibig sabihin nito, ang ibang apps sa iyong device ay hindi maaaring ma-access ang data ng LiquidBoard at ang LiquidBoard ay hindi maaaring ma-access ang data na pag-aari ng ibang apps maliban sa mga nilalaman na tahasang ini-paste mo sa pamamagitan ng keyboard extension.</PolicyParagraph>

                <PolicyHeading>Ang Iyong Kontrol</PolicyHeading>
                <PolicyParagraph>May ganap kang kontrol sa iyong data sa lahat ng oras:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Paganahin o huwag paganahin ang iCloud Sync mula sa loob ng app</PolicyListItem>
                  <PolicyListItem>Bawiin ang access sa photo library sa iOS Settings</PolicyListItem>
                  <PolicyListItem>Huwag paganahin ang Buong Access para sa keyboard sa Mga Setting → Pangkalahatan → Keyboard → Keyboard</PolicyListItem>
                  <PolicyListItem>Tanggalin ang lahat ng datos sa pamamagitan ng pagtanggal ng app</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Makipag-ugnayan</PolicyHeading>
                <PolicyParagraph>Kung mayroon kang mga katanungan tungkol sa seguridad ng datos, mangyaring makipag-ugnayan sa amin sa:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>Patakaran sa Pagkapribado</PolicyHeading>
                <PolicyParagraph>Huling na-update: Hunyo 05 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Ang LiquidBoard ("kami", "amin" o "ang app") ay nakatuon sa pagprotekta ng iyong privacy. Ipinaliliwanag ng Patakaran sa Privacy na ito kung paano namin hinahandle ang impormasyon kapag ginamit mo ang LiquidBoard at ang keyboard extension nito.</PolicyParagraph>

                <PolicyHeading>Datos na Kinokolekta Namin</PolicyHeading>
                <PolicyParagraph>Ang LiquidBoard ay hindi nangongolekta, nag-iimbak o nagpapadala ng anumang personal na datos sa mga panlabas na server. Lahat ng datos na nilikha mo sa loob ng app — kabilang ang mga text snippet, larawan, stickers, kategorya at mga setting — ay iniimbak lamang sa iyong device o sa iyong personal na iCloud account.</PolicyParagraph>

                <PolicyHeading>Mga Litrato at Imahe</PolicyHeading>
                <PolicyParagraph>Maaaring humingi ang LiquidBoard ng access sa iyong library ng mga larawan para sa mga sumusunod na layunin:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Paglalagay ng mga larawan sa iyong mga snippet</PolicyListItem>
                  <PolicyListItem>Paglikha ng mga custom na sticker mula sa iyong mga larawan</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Ang mga larawan na iyong pinili ay iniimbak nang lokal sa iyong aparato at/o sinasabay sa iyong personal na iCloud na account. Hindi namin ina-upload, ipinapadala o ina-access ang iyong mga larawan sa anumang paraan. Ang pag-access sa photo library ay ginagamit lamang sa sandaling tahasang piliin mo ang isang imahe — ang app ay hindi nag-a-access ng iyong library sa background.</PolicyParagraph>

                <PolicyHeading>Mga sticker</PolicyHeading>
                <PolicyParagraph>Pinapayagan ka ng LiquidBoard na:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Gumawa ng sariling mga sticker mula sa iyong mga larawan</PolicyListItem>
                  <PolicyListItem>Magpasok ng mga sticker sa pamamagitan ng pagpapalawak ng keyboard</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Ang mga custom na sticker na ginawa mo mula sa iyong mga larawan ay nakaimbak lamang sa iyong device at/o iCloud. Walang nilalaman ng sticker o datos ng imahe na ipinapadala sa amin.</PolicyParagraph>

                <PolicyHeading>Pinalawak na Keyboard at Buong Access</PolicyHeading>
                <PolicyParagraph>Ang extension ng keyboard na ito ay hindi nangongolekta, nagtatalaga o naglilipat ng anumang data ng pagpindot sa susi o teksto na iyong tinatype.</PolicyParagraph>
                <PolicyParagraph>Ang extension ng keyboard ng LiquidBoard ay nangangailangan ng Buong Access na naka-enable upang:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Idikit ang mga larawan at sticker sa ibang mga app</PolicyListItem>
                  <PolicyListItem>I-sync ang iyong mga snippet at sticker sa pamamagitan ng iCloud sa lahat ng iyong mga device</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Ang Buong Access ay ginagamit lamang para sa mga tampok na ito. Ang keyboard ay hindi nagtatala, nagre-record o nagpapadala ng anumang iyong tinatype sa anumang ibang app. Walang datos ang ipinapadala sa anumang panlabas na server.</PolicyParagraph>

                <PolicyHeading>Pag-synk ng iCloud</PolicyHeading>
                <PolicyParagraph>Kung pipiliin mong i-enable ang iCloud Sync, ang iyong mga text snippet, mga larawan at mga sticker ay isisync sa pamamagitan ng iCloud na imprastruktura ng Apple gamit ang iyong personal na Apple ID. Ang data na ito ay pinamamahalaan ng Patakaran sa Privacy ng Apple. Wala kaming access sa iyong data sa iCloud.</PolicyParagraph>

                <PolicyHeading>Pagbabahagi ng Datos</PolicyHeading>
                <PolicyParagraph>Hindi namin ibinebenta, ibinabahagi o isiniwalat ang iyong data sa anumang ikatlong partido. Hindi rin kami gumagamit ng anumang third-party analytics, advertising SDKs o mga tool sa pagsubaybay.</PolicyParagraph>

                <PolicyHeading>Pagpapanatili at Pagtanggal ng Data</PolicyHeading>
                <PolicyParagraph>Nanatili ang iyong data sa iyong device at/o iCloud account at ganap na nasa iyong kontrol. Maaari mong tanggalin ang iyong data anumang oras sa pamamagitan ng:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Pagbura ng mga indibidwal na piraso ng teksto, mga larawan o mga sticker sa loob ng app</PolicyListItem>
                  <PolicyListItem>Pagbawi ng access sa library ng larawan sa Mga Setting → Privacy → Mga Larawan</PolicyListItem>
                  <PolicyListItem>Ang pagtanggal ng app, na nag-aalis ng lahat ng lokal na naka-imbak na datos</PolicyListItem>
                  <PolicyListItem>Pag-disable ng iCloud Sync at pagtanggal ng iCloud data ng app mula sa Settings → [Iyong Pangalan] → iCloud → Manage Storage</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Pagkapribado ng mga Bata</PolicyHeading>
                <PolicyParagraph>Ang LiquidBoard ay hindi sadyang nangongolekta ng anumang impormasyon mula sa mga bata na wala pang 13 taong gulang. Ang app ay hindi nangongolekta ng personal na datos mula sa anumang mga gumagamit.</PolicyParagraph>

                <PolicyHeading>Mga Pagbabago sa Patakarang Ito</PolicyHeading>
                <PolicyParagraph>Maaaring i-update namin ang Patakaran sa Pagkapribado na ito paminsan-minsan. Anumang pagbabago ay makikita sa app at sa aming website kasama ang na-update na petsa.</PolicyParagraph>

                <PolicyHeading>Makipag-ugnayan</PolicyHeading>
                <PolicyParagraph>Kung mayroon kayong anumang mga katanungan tungkol sa Patakaran sa Pagkapribado na ito, mangyaring makipag-ugnayan sa amin sa:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>Mga Tuntunin ng Paggamit</PolicyHeading>
                <PolicyParagraph>Huling na-update: Hunyo 05 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Sa pamamagitan ng pag-download, pag-install o paggamit ng LiquidBoard ("ang App"), sumasang-ayon ka na masunod ang mga Tuntunin ng Paggamit na ito. Kung hindi ka sumasang-ayon sa mga tuntuning ito, mangyaring huwag gamitin ang App.</PolicyParagraph>

                <PolicyHeading>Lisensya</PolicyHeading>
                <PolicyParagraph>Ipinagkakaloob namin sa iyo ang isang limitado, hindi eksklusibo, hindi naililipat at maaring bawiin na lisensya upang gamitin ang LiquidBoard para sa iyong personal na layunin na hindi pang-komersyo, alinsunod sa mga Tuntuning ito.</PolicyParagraph>
                <PolicyParagraph>Hindi mo maaaring:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Kopyahin, baguhin o ipamahagi ang App o ang nilalaman nito</PolicyListItem>
                  <PolicyListItem>Bumuo ng kabaligtaran o subukang kunin ang pinagmulan ng code</PolicyListItem>
                  <PolicyListItem>Gamitin ang App para sa anumang labag sa batas o hindi awtorisadong layunin</PolicyListItem>
                  <PolicyListItem>Igalaw, ipasub-licensya o ilipat ang access sa App sa anumang ikatlong partido</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Ang Iyong Nilalaman</PolicyHeading>
                <PolicyParagraph>Pinananatili mo ang buong pagmamay-ari ng lahat ng text snippets, larawan at sticker na iyong nilikha o ini-import sa LiquidBoard. Hindi namin inaangkin ang anumang karapatan sa iyong nilalaman.</PolicyParagraph>
                <PolicyParagraph>Ikaw lamang ang may pananagutan sa pagtitiyak na ang nilalamang iyong nilikha o ipinasok gamit ang App ay hindi lumalabag sa anumang karapatan ng ikatlong partido, kabilang ang karapatang-ari, tatak o karapatan sa privacy.</PolicyParagraph>

                <PolicyHeading>Katanggap-tanggap na Paggamit</PolicyHeading>
                <PolicyParagraph>Sang-ayon ka na hindi gagamitin ang LiquidBoard upang lumikha, mag-imbak o magpakalat ng nilalaman na:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Ipinagbabawal, nakasasama, nagbabanta o nang-aabala</PolicyListItem>
                  <PolicyListItem>Lumalabag sa mga karapatan sa intelektwal na ari-arian ng iba</PolicyListItem>
                  <PolicyListItem>Naglalaman ng malware, virus o nakasasamang code</PolicyListItem>
                  <PolicyListItem>Lumalabag sa anumang naaangkop na lokal, pambansa o pandaigdigang batas</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Mga Pagbili sa App</PolicyHeading>
                <PolicyParagraph>Nag-aalok ang LiquidBoard ng opsyonal na mga in-app na pagbili upang ma-unlock ang mga karagdagang tampok o nilalaman. Lahat ng pagbili ay pinoproseso ng Apple sa pamamagitan ng App Store at nasasakupan ng Terms of Sale ng Apple.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Ang mga pagbili ay hindi nare-refund maliban kung kinakailangan ng naaangkop na batas o patakaran sa refund ng Apple</PolicyListItem>
                  <PolicyListItem>Maaaring mag-iba ang mga presyo depende sa rehiyon at ipinapakita sa iyong lokal na pera sa oras ng pagbili</PolicyListItem>
                  <PolicyListItem>Ang mga biniling tampok ay naka-link sa iyong Apple ID at maaaring maibalik sa anumang aparato na naka-sign in gamit ang parehong Apple ID</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Upang humiling ng refund, mangyaring makipag-ugnayan nang direkta sa Apple sa:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>Pinalawak na Keyboard at Buong Access</PolicyHeading>
                <PolicyParagraph>Kinakailangan ang Paganahin ang Buong Access para sa extension ng keyboard upang makapag-paste ng mga imahe at sticker sa ibang mga app at upang paganahin ang iCloud Sync. Ang Buong Access ay hindi nagbibigay sa amin ng access sa anumang ini-type mo.</PolicyParagraph>
                <PolicyParagraph>Ikinikilala mo na sa pamamagitan ng pag-enable ng Full Access, ipapakita ng iOS ang isang abiso ng sistema na nagpapaalam sa iyo na maaaring ma-access ng developer ng keyboard ang iyong pagta-type. Nais naming maging malinaw: Ang LiquidBoard ay hindi nangongolekta, nagtatala o nagpapadala ng anumang data ng keystroke.</PolicyParagraph>

                <PolicyHeading>Pag-sync ng iCloud</PolicyHeading>
                <PolicyParagraph>Ang iCloud Sync ay isang opsyonal na tampok na gumagamit ng iyong personal na Apple iCloud account upang i-sync ang iyong data sa iba't ibang mga aparato. Ang paggamit ng iCloud ay napapailalim sa Mga Tuntunin at Kondisyon ng Apple. Hindi kami responsable para sa anumang pagkawala ng data na resulta ng mga pagkaantala o pagtigil ng serbisyo ng iCloud.</PolicyParagraph>

                <PolicyHeading>Pagtatanggal ng Mga Warranty</PolicyHeading>
                <PolicyParagraph>Ang LiquidBoard ay ibinibigay na "as is" at "as available" na walang anumang uri ng garantiya, maging tahasan o ipinahiwatig, kabilang ngunit hindi limitado sa mga garantiya ng pagiging maibebenta, pagiging angkop para sa isang partikular na layunin o hindi paglabag sa karapatan ng iba.</PolicyParagraph>
                <PolicyParagraph>Hindi namin ginagarantiyahan na ang App ay magiging tuloy-tuloy, walang mali o walang virus o iba pang nakakapinsalang sangkap.</PolicyParagraph>

                <PolicyHeading>Limitasyon ng Pananagutan</PolicyHeading>
                <PolicyParagraph>Hanggang sa pinakamalawak na saklaw na pinahihintulutan ng naaangkop na batas, hindi kami mananagot para sa anumang hindi tuwiran, pangkaswal, espesyal, konsekwensyal o parusang pinsala, kabilang ngunit hindi limitado sa pagkawala ng data, pagkawala ng kita o pagkawala ng magandang pakikipag-ugnayan, na nagmumula sa iyong paggamit o kawalan ng kakayahang gamitin ang App.</PolicyParagraph>

                <PolicyHeading>Pagwawakas</PolicyHeading>
                <PolicyParagraph>Inirereserba namin ang karapatang tapusin o limitahan ang iyong access sa App anumang oras, nang walang abiso, para sa gawaing pinaniniwalaan naming lumalabag sa mga Tuntunin na ito o nakakasama sa ibang mga user, sa amin o sa mga ikatlong partido.</PolicyParagraph>
                <PolicyParagraph>Maaari mong itigil ang paggamit ng App anumang oras sa pamamagitan ng pagbura nito mula sa iyong device.</PolicyParagraph>

                <PolicyHeading>Mga Pagbabago sa Mga Tuntuning Ito</PolicyHeading>
                <PolicyParagraph>Maaaring i-update namin ang mga Tuntunin ng Paggamit na ito paminsan-minsan. Ang patuloy na paggamit ng App pagkatapos maipost ang mga pagbabago ay nangangahulugang tinatanggap mo ang binagong mga Tuntunin. Ipapaalam namin sa iyo ang mahahalagang pagbabago sa pamamagitan ng App o sa aming website.</PolicyParagraph>

                <PolicyHeading>Batas na Namamahala</PolicyHeading>
                <PolicyParagraph>Ang mga Tuntuning ito ay pinamamahalaan at binibigyang-kahulugan alinsunod sa mga batas ng hurisdiksyon kung saan nakabase ang developer, nang hindi isinasaalang-alang ang mga prinsipyo ng salungatan ng batas.</PolicyParagraph>

                <PolicyHeading>Makipag-ugnayan</PolicyHeading>
                <PolicyParagraph>Kung mayroon kang anumang mga katanungan tungkol sa Mga Tuntuning ito, mangyaring makipag-ugnayan sa amin sa:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>Patakaran sa Pagbabayad at Pagrefund</PolicyHeading>
                <PolicyParagraph>Huling na-update: Hunyo 05 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Nag-aalok ang LiquidBoard ng opsyonal na in-app na pagbili upang ma-unlock ang mga premium na tampok. Lahat ng bayad ay pinangangasiwaan ng Apple sa pamamagitan ng App Store — hindi namin pinoproseso, iniimbak o may access sa iyong impormasyon sa pagbabayad.</PolicyParagraph>

                <PolicyHeading>Kung Ano ang Maaari Mong Bilhin</PolicyHeading>
                <PolicyParagraph>Nag-aalok ang LiquidBoard ng mga sumusunod na opsyonal na pagbili:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Mga Premium na Tampok — Isang beses na pagbabayad o subscription para ma-unlock ang advanced na functionality ng app</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Ang mga magagamit na pagbili at presyo ay ipinapakita sa loob ng App sa oras ng pagbili. Maaaring magbago ang mga presyo depende sa rehiyon at ipinapakita sa iyong lokal na pera.</PolicyParagraph>

                <PolicyHeading>Pagproseso ng Bayad</PolicyHeading>
                <PolicyParagraph>Lahat ng transaksyon ay pinoproseso nang ligtas ng Apple. Hindi namin kailanman nakikita o iniimbak ang iyong credit card, billing address o anumang detalye ng pagbabayad.</PolicyParagraph>
                <PolicyParagraph>Sa pamamagitan ng pagkumpleto ng pagbili, sumasang-ayon ka sa Mga Tuntunin ng Pagbebenta ng Apple App Store. Ang iyong paraan ng pagbabayad na nakatala sa Apple ay sisingilin sa oras ng kumpirmasyon ng pagbili.</PolicyParagraph>

                <PolicyHeading>Pagbabalik ng Mga Binili</PolicyHeading>
                <PolicyParagraph>Kung muling i-install mo ang LiquidBoard o lilipat sa bagong device, maaari mong maibalik ang lahat ng nakaraang pagbili nang walang karagdagang bayad gamit ang opsyon na Ibalik ang Mga Binili sa loob ng App. Ang mga pagbili ay naka-link sa iyong Apple ID at magagamit sa lahat ng mga device na naka-sign in gamit ang parehong account.</PolicyParagraph>

                <PolicyHeading>Mga Subskripsyon</PolicyHeading>
                <PolicyParagraph>Kung nag-aalok ang LiquidBoard ng mga pagbili batay sa subscription:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Ang mga subscription ay awtomatikong magri-renew maliban kung kanselahin nang hindi bababa sa 24 na oras bago matapos ang kasalukuyang panahon ng pagsingil</PolicyListItem>
                  <PolicyListItem>Sisingilin ang iyong Apple ID para sa pag-renew sa loob ng 24 na oras bago matapos ang kasalukuyang panahon</PolicyListItem>
                  <PolicyListItem>Maaari mong pamahalaan o kanselahin ang mga subscription anumang oras sa Mga Setting → [Iyong Pangalan] → Mga Subscription</PolicyListItem>
                  <PolicyListItem>Ang pagkansela ng isang subscription ay magkakabisa sa pagtatapos ng kasalukuyang bayad na panahon — mananatili ang iyong access hanggang sa panahong iyon</PolicyListItem>
                  <PolicyListItem>Ang mga libreng panahon ng pagsubok, kung inaalok, ay magiging bayad na suskrisyon maliban kung kanselahin bago matapos ang pagsubok</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Patakaran sa Pagbabalik ng Pera</PolicyHeading>
                <PolicyParagraph>Hindi namin direktang pinoproseso ang mga refund. Lahat ng kahilingan para sa refund ay dapat isumite sa Apple, dahil sila ang opisyal na mangangalakal para sa lahat ng transaksyon sa App Store.</PolicyParagraph>
                <PolicyParagraph>Ang Apple ay humahawak ng mga refund ayon sa kanilang pagpapasya alinsunod sa kanilang patakaran sa refund. Kadalasang kwalipikadong mga kaso ay kinabibilangan ng aksidenteng pagbili, hindi awtorisadong singil o mga pagbiling hindi gumana ayon sa nakasaad.</PolicyParagraph>
                <PolicyParagraph>Upang humiling ng refund mula sa Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Gawin mo na.<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>at mag-sign in gamit ang iyong Apple ID</PolicyListItem>
                  <PolicyListItem>Hanapin ang pagbili ng LiquidBoard at pindutin ang Iulat ang Isang Problema</PolicyListItem>
                  <PolicyListItem>Piliin ang dahilan at isumite ang iyong kahilingan</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Karaniwan ay tumutugon ang Apple sa loob ng ilang araw ng negosyo. Ang mga desisyon sa refund ay ginagawa lamang ng Apple.</PolicyParagraph>

                <PolicyHeading>Pagbabago ng Presyo</PolicyHeading>
                <PolicyParagraph>Ipinapanatili namin ang karapatang baguhin ang presyo para sa mga pagbili sa app anumang oras. Ang mga pagbabago sa presyo para sa mga subscription ay ipapaalam nang maaga sa pamamagitan ng App o App Store at magkakabisa sa simula ng iyong susunod na billing cycle. Ikaw ay papadalhan ng abiso ng Apple bago magkabisa ang anumang pagbabago sa presyo ng subscription.</PolicyParagraph>

                <PolicyHeading>Nabigong o Hindi Kumpletong Pagbili</PolicyHeading>
                <PolicyParagraph>Kung nabigo ang isang pagbili o nakasawsaw ka ng bayad ngunit hindi natanggap ang nilalaman, mangyaring subukang i-restore muna ang mga pagbili sa loob ng App. Kung nagpapatuloy ang problema, makipag-ugnayan sa amin sa<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>at mag-iimbestiga kami agad.</PolicyParagraph>

                <PolicyHeading>Makipag-ugnayan</PolicyHeading>
                <PolicyParagraph>Para sa mga tanong tungkol sa pagsingil o mga isyu sa pagbili, makipag-ugnayan sa amin sa:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>Para sa mga refund, mangyaring gamitin ang opisyal na channel ng Apple:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
