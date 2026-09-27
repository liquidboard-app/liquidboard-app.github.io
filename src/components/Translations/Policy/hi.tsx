import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>डेटा सुरक्षा नीति</PolicyHeading>
                <PolicyParagraph>अंतिम अद्यतन: 05 जून 2026 · लिक्विडबोर्ड</PolicyParagraph>
                <PolicyParagraph>लिक्विडबोर्ड को प्राइवेसी-फर्स्ट दृष्टिकोण के साथ डिजाइन किया गया है। आपका डेटा कभी भी आपके डिवाइस को छोड़कर नहीं जाता जब तक कि आप स्पष्ट रूप से iCloud सिंक सक्षम करने का विकल्प न चुनें। हमारे पास कोई सर्वर नहीं हैं, कोई खाते नहीं हैं और हमारे पास आपके कंटेंट तक कोई पहुँच नहीं है।</PolicyParagraph>

                <PolicyHeading>डेटा भंडारण</PolicyHeading>
                <PolicyParagraph>LiquidBoard में आप जो भी सामग्री बनाते हैं — पाठ अंश, चित्र और स्टिकर — वह दो जगहों में से किसी एक में संग्रहित होती है:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>डिवाइस पर भंडारण</PolicyEmphasis>— iOS द्वारा प्रबंधित और केवल LiquidBoard के लिए सुलभ। अन्य ऐप्स आपके डेटा को पढ़ नहीं सकते।</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (वैकल्पिक)</PolicyEmphasis>— एप्पल के एन्क्रिप्टेड क्लाउडकिट इन्फ्रास्ट्रक्चर का उपयोग करके आपके व्यक्तिगत एप्पल आईडी के माध्यम से समन्वित।</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>हमारे सर्वरों पर कोई डेटा संग्रहीत नहीं किया जाता है। हम कोई बैकएंड इंफ्रास्ट्रक्चर संचालित नहीं करते हैं।</PolicyParagraph>

                <PolicyHeading>एन्क्रिप्शन</PolicyHeading>
                <PolicyParagraph>आपका डेटा iOS और Apple की सुरक्षा परतों द्वारा защищित है:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>विश्राम में</PolicyEmphasis>— आपके डिवाइस पर संग्रहीत डेटा iOS द्वारा आपके डिवाइस पासकोड और सिक्योर एनक्लेव का उपयोग करके एन्क्रिप्ट किया जाता है।</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>परिवहन में</PolicyEmphasis>— यदि iCloud सिंक सक्षम है, तो डेटा को प्रेषित करने से पहले Apple के CloudKit द्वारा एन्क्रिप्ट किया जाता है।</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud बैकअप</PolicyEmphasis>— यदि आपका डिवाइस iCloud में बैकअप किया गया है, तो ऐप डेटा Apple की एन्क्रिप्टेड बैकअप प्रणाली में शामिल होता है।</PolicyListItem>
                </PolicyList>

                <PolicyHeading>फोटो और छवि सुरक्षा</PolicyHeading>
                <PolicyParagraph>LiquidBoard आपके फोटो लाइब्रेरी तक केवल तभी पहुँचता है जब आप स्पष्ट रूप से कोई फोटो चुनने या आयात करने का विकल्प चुनते हैं। यह ऐप:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>पृष्ठभूमि में आपके फ़ोटो लाइब्रेरी तक पहुँच नहीं करता</PolicyListItem>
                  <PolicyListItem>किसी भी सर्वर पर फोटो अपलोड नहीं करता</PolicyListItem>
                  <PolicyListItem>संग्रहित किए गए चित्र ऐप के सैंडबॉक्स किए गए कंटेनर में स्थानीय रूप से स्टोर किए जाते हैं</PolicyListItem>
                  <PolicyListItem>स्टिकर निर्माण की प्रक्रिया पूरी तरह डिवाइस पर करती है</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>आप कभी भी सेटिंग्स → गोपनीयता और सुरक्षा → फोटो में जाकर फोटो एक्सेस रद्द कर सकते हैं।</PolicyParagraph>

                <PolicyHeading>कीबोर्ड विस्तार सुरक्षा</PolicyHeading>
                <PolicyParagraph>कीबोर्ड एक्सटेंशन किसी भी कीस्ट्रोक डेटा या ऐसे किसी भी टेक्स्ट को इकट्ठा, लॉग या ट्रांसमिट नहीं करता जो आप अन्य ऐप्स में टाइप करते हैं।</PolicyParagraph>
                <PolicyParagraph>कीबोर्ड एक्सटेंशन के लिए पूर्ण पहुंच की आवश्यकता है ताकि छवियां और स्टीकर पेस्ट किए जा सकें और iCloud सिंक तक पहुंच प्राप्त की जा सके। पूर्ण पहुंच सक्षम होने के बावजूद, कीबोर्ड एक्सटेंशन पूरी तरह से iOS के सैंडबॉक्स्ड वातावरण के भीतर काम करता है। इसे बाहरी सर्वरों पर डेटा भेजने की कोई क्षमता नहीं है।</PolicyParagraph>

                <PolicyHeading>कोई तृतीय-पक्ष डेटा एक्सेस नहीं</PolicyHeading>
                <PolicyParagraph>लिक्विडबोर्ड इनमें से किसी के साथ एकीकृत नहीं होता:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>एनालिटिक्स या क्रैश रिपोर्टिंग एसडीके, जैसे कि Firebase या Mixpanel</PolicyListItem>
                  <PolicyListItem>विज्ञापन नेटवर्क या ट्रैकिंग SDK</PolicyListItem>
                  <PolicyListItem>तीसरे पक्ष की क्लाउड स्टोरेज या प्रोसेसिंग सेवाएँ</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>आपकी सामग्री कभी भी किसी तीसरे पक्ष के साथ साझा नहीं की जाती और न ही वह उनके द्वारा पहुँच योग्य होती है।</PolicyParagraph>

                <PolicyHeading>एप सैंडबॉक्स</PolicyHeading>
                <PolicyParagraph>LiquidBoard iOS के कड़े ऐप सैंडबॉक्स में चलता है। इसका मतलब है कि आपके डिवाइस पर अन्य ऐप्स LiquidBoard के डेटा तक पहुंच नहीं सकते और LiquidBoard अन्य ऐप्स के डेटा तक पहुंच नहीं सकता सिवाय उन सामग्री के जो आप की-बोर्ड एक्सटेंशन के माध्यम से स्पष्ट रूप से पेस्ट करते हैं।</PolicyParagraph>

                <PolicyHeading>आपका नियंत्रण</PolicyHeading>
                <PolicyParagraph>आपके पास हमेशा अपने डेटा पर पूरा नियंत्रण होता है:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>ऐप के भीतर iCloud सिंक सक्षम या अक्षम करें</PolicyListItem>
                  <PolicyListItem>iOS सेटिंग्स में फ़ोटो लाइब्रेरी एक्सेस रद्द करें</PolicyListItem>
                  <PolicyListItem>सेटिंग्स → सामान्य → कीबोर्ड → कीबोर्ड में कीबोर्ड के लिए पूर्ण पहुँच अक्षम करें</PolicyListItem>
                  <PolicyListItem>ऐप को डिलीट करके सभी डेटा डिलीट करें</PolicyListItem>
                </PolicyList>

                <PolicyHeading>संपर्क करें</PolicyHeading>
                <PolicyParagraph>यदि आपको डेटा सुरक्षा के बारे में प्रश्न हैं, तो कृपया हमसे संपर्क करें:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>गोपनीयता नीति</PolicyHeading>
                <PolicyParagraph>अंतिम अद्यतन: 05 जून 2026 · लिक्विडबोर्ड</PolicyParagraph>
                <PolicyParagraph>LiquidBoard ("हम", "हमारा" या "ऐप") आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि हम आपकी जानकारी को कैसे संभालते हैं जब आप LiquidBoard और उसके कीबोर्ड एक्सटेंशन का उपयोग करते हैं।</PolicyParagraph>

                <PolicyHeading>हम जो डेटा एकत्रित करते हैं</PolicyHeading>
                <PolicyParagraph>लिक्विडबोर्ड किसी भी व्यक्तिगत डेटा को बाहरी सर्वरों पर एकत्रित, संग्रहित या प्रसारित नहीं करता है। ऐप के भीतर आप जो भी डेटा बनाते हैं — जिसमें टेक्स्ट अंश, चित्र, स्टिकर, श्रेणियाँ और सेटिंग्स शामिल हैं — केवल आपके डिवाइस या आपके व्यक्तिगत iCloud खाते में संग्रहीत होते हैं।</PolicyParagraph>

                <PolicyHeading>फ़ोटो और चित्र</PolicyHeading>
                <PolicyParagraph>लिक्विडबोर्ड आपके फोटो लाइब्रेरी तक निम्नलिखित उद्देश्यों के लिए पहुँच का अनुरोध कर सकता है:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>अपने स्निपेट्स में चित्र सम्मिलित करना</PolicyListItem>
                  <PolicyListItem>आपकी फोटो से कस्टम स्टिकर बनाना</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>आपके द्वारा चुनी गई फ़ोटो स्थानीय रूप से आपके डिवाइस पर संग्रहित हैं और/या आपके व्यक्तिगत iCloud खाते में सिंक की जाती हैं। हम आपकी फ़ोटो को किसी भी तरीके से अपलोड, प्रेषित या एक्सेस नहीं करते हैं। फ़ोटो लाइब्रेरी तक पहुंच केवल उसी समय उपयोग की जाती है जब आप स्पष्ट रूप से एक छवि चुनते हैं — ऐप पृष्ठभूमि में आपकी लाइब्रेरी तक नहीं पहुँचता।</PolicyParagraph>

                <PolicyHeading>स्टीकर</PolicyHeading>
                <PolicyParagraph>LiquidBoard आपको अनुमति देता है:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>अपनी खुद की तस्वीरों से कस्टम स्टिकर बनाएँ</PolicyListItem>
                  <PolicyListItem>कीबोर्ड एक्सटेंशन के माध्यम से स्टिकर डालें</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>आपकी फोटो से बनाई गई कस्टम स्टिकर केवल आपके डिवाइस और/या iCloud पर संग्रहीत रहती हैं। कोई भी स्टिकर सामग्री या चित्र डेटा हमें नहीं भेजा जाता।</PolicyParagraph>

                <PolicyHeading>कीबोर्ड विस्तार और पूर्ण पहुंच</PolicyHeading>
                <PolicyParagraph>यह कीबोर्ड एक्सटेंशन किसी भी कीस्ट्रोक डेटा या आप जो टेक्स्ट टाइप करते हैं, उसे इकट्ठा, रिकॉर्ड या भेजता नहीं है।</PolicyParagraph>
                <PolicyParagraph>LiquidBoard का कीबोर्ड एक्सटेंशन सक्षम करने के लिए पूर्ण एक्सेस सक्षम होना आवश्यक है ताकि:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>इमेज और स्टिकर अन्य ऐप्स में पेस्ट करें</PolicyListItem>
                  <PolicyListItem>अपने स्निपेट्स और स्टिकर्स को अपने सभी उपकरणों में iCloud के माध्यम से सिंक करें</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>पूर्ण पहुँच केवल इन सुविधाओं के लिए उपयोग की जाती है। कीबोर्ड किसी अन्य ऐप में आप जो भी टाइप करते हैं उसे लॉग, रिकॉर्ड या ट्रांसमिट नहीं करता है। कोई भी डेटा किसी बाहरी सर्वर को नहीं भेजा जाता।</PolicyParagraph>

                <PolicyHeading>iCloud सिंक</PolicyHeading>
                <PolicyParagraph>यदि आप iCloud सिंक सक्षम करने का चयन करते हैं, तो आपके टेक्स्ट स्निपेट्स, इमेजेज और स्टिकर आपके व्यक्तिगत Apple ID का उपयोग करके Apple के iCloud इन्फ्रास्ट्रक्चर के माध्यम से सिंक किए जाते हैं। इस डेटा पर Apple की गोपनीयता नीति लागू होती है। हमारे पास आपके iCloud डेटा तक पहुँच नहीं है।</PolicyParagraph>

                <PolicyHeading>डेटा साझाकरण</PolicyHeading>
                <PolicyParagraph>हम आपका डेटा किसी तीसरे पक्ष को नहीं बेचते, साझा नहीं करते और न ही प्रकट करते हैं। हम किसी भी तृतीय-पक्ष विश्लेषिकी, विज्ञापन SDKs या ट्रैकिंग टूल्स का उपयोग नहीं करते हैं।</PolicyParagraph>

                <PolicyHeading>डेटा प्रतिधारण और विलोपन</PolicyHeading>
                <PolicyParagraph>आपका डेटा आपके डिवाइस और/या iCloud खाते पर रहता है और पूरी तरह से आपके नियंत्रण में है। आप किसी भी समय अपने डेटा को इस प्रकार हटा सकते हैं:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>ऐप के भीतर व्यक्तिगत स्निपेट, चित्र या स्टिकर हटाना</PolicyListItem>
                  <PolicyListItem>सेटिंग्स → गोपनीयता → फ़ोटो में फ़ोटो लाइब्रेरी एक्सेस रद्द करना</PolicyListItem>
                  <PolicyListItem>ऐप को हटाना, जो सभी स्थानीय रूप से संग्रहीत डेटा को हटा देता है</PolicyListItem>
                  <PolicyListItem>सेटिंग्स → [आपका नाम] → iCloud → स्टोरेज प्रबंधित करें से iCloud सिंक अक्षम करना और ऐप का iCloud डेटा निकालना</PolicyListItem>
                </PolicyList>

                <PolicyHeading>बच्चों की गोपनीयता</PolicyHeading>
                <PolicyParagraph>लिक्विडबोर्ड जानबूझकर 13 वर्ष से कम उम्र के बच्चों से कोई जानकारी नहीं इकट्ठा करता है। यह ऐप किसी भी उपयोगकर्ता से व्यक्तिगत डेटा नहीं इकट्ठा करता है।</PolicyParagraph>

                <PolicyHeading>इस नीति में बदलाव</PolicyHeading>
                <PolicyParagraph>हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। कोई भी बदलाव ऐप और हमारी वेबसाइट पर अपडेट की गई तारीख के साथ दिखाई देगा।</PolicyParagraph>

                <PolicyHeading>संपर्क करें</PolicyHeading>
                <PolicyParagraph>यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>उपयोग की शर्तें</PolicyHeading>
                <PolicyParagraph>अंतिम अद्यतन: 05 जून 2026 · लिक्विडबोर्ड</PolicyParagraph>
                <PolicyParagraph>LiquidBoard ("ऐप") को डाउनलोड, इंस्टॉल या उपयोग करके, आप इन उपयोग की शर्तों के बंधन में होने के लिए सहमत होते हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया ऐप का उपयोग न करें।</PolicyParagraph>

                <PolicyHeading>लाइसेंस</PolicyHeading>
                <PolicyParagraph>हम आपको अपने व्यक्तिगत, गैर-वाणिज्यिक उद्देश्यों के लिए LiquidBoard का उपयोग करने के लिए एक सीमित, गैर-विशिष्ट, गैर-हस्तांतरणीय, रिवोक करने योग्य लाइसेंस प्रदान करते हैं, ये शर्तें लागू होते हुए।</PolicyParagraph>
                <PolicyParagraph>आप नहीं कर सकते:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>ऐप या इसकी सामग्री की नकल करें, संशोधित करें या वितरित करें</PolicyListItem>
                  <PolicyListItem>रिवर्स इंजीनियर करना या स्रोत कोड निकालने का प्रयास करना</PolicyListItem>
                  <PolicyListItem>ऐप का किसी भी गैरकानूनी या अनधिकृत उद्देश्य के लिए उपयोग न करें</PolicyListItem>
                  <PolicyListItem>ऐप तक पहुंच को किसी भी तीसरे पक्ष को बेचें, उप-लाइसेंस दें या हस्तांतरित करें</PolicyListItem>
                </PolicyList>

                <PolicyHeading>आपकी सामग्री</PolicyHeading>
                <PolicyParagraph>आप LiquidBoard में बनाए गए या आयात किए गए सभी टेक्स्ट स्निपेट्स, चित्रों और स्टीकरों का पूरा स्वामित्व रखते हैं। हम आपकी सामग्री पर किसी भी प्रकार का अधिकार नहीं दावा करते हैं।</PolicyParagraph>
                <PolicyParagraph>आप पूरी तरह से इसके लिए जिम्मेदार हैं कि आप जो सामग्री ऐप का उपयोग करके बनाते हैं या चिपकाते हैं, वह किसी तृतीय-पक्ष के अधिकारों का उल्लंघन नहीं करती, जिसमें कॉपीराइट, ट्रेडमार्क या गोपनीयता अधिकार शामिल हैं।</PolicyParagraph>

                <PolicyHeading>स्वीकार्य उपयोग</PolicyHeading>
                <PolicyParagraph>आप सहमत हैं कि LiquidBoard का उपयोग ऐसा सामग्री बनाने, संग्रहीत करने या वितरित करने के लिए नहीं करेंगे जो:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>अवैध, हानिकारक, धमकी देने वाला या परेशान करने वाला</PolicyListItem>
                  <PolicyListItem>अन्य लोगों के बौद्धिक संपदा अधिकारों का उल्लंघन करता है</PolicyListItem>
                  <PolicyListItem>इसमें मैलवेयर, वायरस या हानिकारक कोड शामिल है</PolicyListItem>
                  <PolicyListItem>किसी भी लागू होने वाले स्थानीय, राष्ट्रीय या अंतरराष्ट्रीय कानून का उल्लंघन करता है</PolicyListItem>
                </PolicyList>

                <PolicyHeading>ऐप के भीतर खरीदारी</PolicyHeading>
                <PolicyParagraph>लिक्विडबोर्ड अतिरिक्त फीचर्स या सामग्री को अनलॉक करने के लिए वैकल्पिक इन-ऐप खरीदारी प्रदान करता है। सभी खरीदारी एप्पल द्वारा ऐप स्टोर के माध्यम से संसाधित की जाती हैं और एप्पल की बिक्री की शर्तों के अधीन होती हैं।</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>खरीद गैर-वापसी योग्य हैं सिवाय इसके कि लागू कानून या Apple की रिफंड नीति द्वारा आवश्यक हो</PolicyListItem>
                  <PolicyListItem>कीमतें क्षेत्र के अनुसार भिन्न हो सकती हैं और खरीद के समय आपकी स्थानीय मुद्रा में दिखाई जाती हैं</PolicyListItem>
                  <PolicyListItem>खरीदी गई विशेषताएँ आपके Apple ID से जुड़ी हैं और इन्हें किसी भी डिवाइस पर पुनः स्थापित किया जा सकता है जो उसी Apple ID से साइन इन किया हो</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>रिफंड के लिए अनुरोध करने के लिए, कृपया सीधे Apple से संपर्क करें:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>कीबोर्ड विस्तार और पूर्ण पहुंच</PolicyHeading>
                <PolicyParagraph>कीबोर्ड एक्सटेंशन के लिए पूर्ण पहुँच सक्षम करना अन्य ऐप्स में इमेज और स्टिकर पेस्ट करने और iCloud सिंक सक्षम करने के लिए आवश्यक है। पूर्ण पहुँच हमें आपके द्वारा टाइप की गई किसी भी चीज़ तक पहुँच नहीं देती है।</PolicyParagraph>
                <PolicyParagraph>आप यह स्वीकार करते हैं कि पूर्ण पहुँच सक्षम करने पर, iOS एक सिस्टम सूचना प्रदर्शित करेगा जो आपको सूचित करेगी कि कीबोर्ड डेवलपर संभावित रूप से आपकी टाइपिंग तक पहुँच सकता है। हम स्पष्ट रूप से कहना चाहते हैं: LiquidBoard कोई भी कीस्ट्रोक डेटा एकत्र नहीं करता, लॉग नहीं करता और न ही इसे प्रसारित करता है।</PolicyParagraph>

                <PolicyHeading>iCloud सिंक</PolicyHeading>
                <PolicyParagraph>iCloud सिंक एक वैकल्पिक सुविधा है जो आपके व्यक्तिगत Apple iCloud खाते का उपयोग करके आपके डेटा को उपकरणों के बीच सिंक करती है। iCloud का उपयोग Apple के नियम और शर्तों के अधीन है। iCloud सेवा में किसी भी व्यवधान के परिणामस्वरूप होने वाले किसी भी डेटा नुकसान के लिए हम जिम्मेदार नहीं हैं।</PolicyParagraph>

                <PolicyHeading>वारंटी से अस्वीकरण</PolicyHeading>
                <PolicyParagraph>लिक्विडबोर्ड 'जैसा है' और 'उपलब्ध होने पर' प्रदान किया जाता है बिना किसी प्रकार की वारंटी के, चाहे वह स्पष्ट हो या निहित, जिसमें लेकिन केवल सीमा तक सीमित नहीं है, व्यापारिकता, किसी विशेष उद्देश्य के लिए उपयुक्तता या गैर-उल्लंघन की वारंटियों सहित।</PolicyParagraph>
                <PolicyParagraph>हम यह सुनिश्चित नहीं करते कि ऐप अविरल, त्रुटि-मुक्त या वायरस या अन्य हानिकारक घटकों से मुक्त होगा।</PolicyParagraph>

                <PolicyHeading>उत्तरदायित्व की सीमा</PolicyHeading>
                <PolicyParagraph>प्रवर्तनाधीन कानून द्वारा अधिकतम सीमा तक, हम किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी या दंडात्मक क्षति के लिए उत्तरदायी नहीं होंगे, जिसमें लेकिन इससे सीमित नहीं है डेटा का नुकसान, लाभ का नुकसान या सद्भावना का नुकसान, जो आपके ऐप के उपयोग या उपयोग में असमर्थता से उत्पन्न हो।</PolicyParagraph>

                <PolicyHeading>समाप्ति</PolicyHeading>
                <PolicyParagraph>हम किसी भी समय, बिना किसी सूचना के, आपके एप तक पहुँच को समाप्त करने या सीमित करने का अधिकार सुरक्षित रखते हैं, यदि हमें लगता है कि आपका व्यवहार इन शर्तों का उल्लंघन करता है या अन्य उपयोगकर्ताओं, हमारे या तृतीय पक्षों के लिए हानिकारक है।</PolicyParagraph>
                <PolicyParagraph>आप किसी भी समय अपने डिवाइस से ऐप को हटाकर इसका उपयोग बंद कर सकते हैं।</PolicyParagraph>

                <PolicyHeading>इन शर्तों में बदलाव</PolicyHeading>
                <PolicyParagraph>हम समय-समय पर इन उपयोग की शर्तों को अपडेट कर सकते हैं। परिवर्तनों को पोस्ट करने के बाद ऐप का निरंतर उपयोग आपके द्वारा संशोधित शर्तों की स्वीकृति के रूप में माना जाएगा। हम महत्वपूर्ण परिवर्तनों की जानकारी आपको ऐप या हमारी वेबसाइट के माध्यम से देंगे।</PolicyParagraph>

                <PolicyHeading>शासन कानून</PolicyHeading>
                <PolicyParagraph>ये नियम उस अधिकार क्षेत्र के कानूनों द्वारा शासित और व्याख्यायित किए जाते हैं जिसमें डेवलपर स्थित है, बिना कानून के संघर्ष के सिद्धांतों पर ध्यान दिए।</PolicyParagraph>

                <PolicyHeading>संपर्क करें</PolicyHeading>
                <PolicyParagraph>यदि आपको इन शर्तों के बारे में कोई प्रश्न है, तो कृपया हमसे इस पते पर संपर्क करें:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>भुगतान और रिफंड नीति</PolicyHeading>
                <PolicyParagraph>अंतिम अद्यतन: 05 जून 2026 · लिक्विडबोर्ड</PolicyParagraph>
                <PolicyParagraph>लिक्विडबोर्ड प्रीमियम सुविधाओं को अनलॉक करने के लिए वैकल्पिक इन-ऐप खरीदारी की पेशकश करता है। सभी भुगतान पूरी तरह से ऐप स्टोर के माध्यम से एप्पल द्वारा संभाले जाते हैं — हम आपकी भुगतान जानकारी को संसाधित, संग्रहित या प्राप्त नहीं करते हैं।</PolicyParagraph>

                <PolicyHeading>आप क्या खरीद सकते हैं</PolicyHeading>
                <PolicyParagraph>लिक्विडबोर्ड निम्नलिखित वैकल्पिक खरीदारी प्रदान करता है:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>प्रीमियम फीचर्स — उन्नत ऐप कार्यक्षमता के लिए एक-मात्र या सब्सक्रिप्शन अनलॉक</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>उपलब्ध खरीद और मूल्य ऐप में खरीद के समय प्रदर्शित किए जाते हैं। कीमतें क्षेत्र के अनुसार भिन्न हो सकती हैं और आपकी स्थानीय मुद्रा में दिखाई जाती हैं।</PolicyParagraph>

                <PolicyHeading>भुगतान प्रसंस्करण</PolicyHeading>
                <PolicyParagraph>सभी लेनदेन एप्पल द्वारा सुरक्षित रूप से संसाधित किए जाते हैं। हम आपके क्रेडिट कार्ड, बिलिंग पता या किसी भी भुगतान विवरण को कभी नहीं देखते या संग्रहित करते हैं।</PolicyParagraph>
                <PolicyParagraph>खरीदारी पूरी करने के द्वारा, आप Apple के App Store बिक्री शर्तों से सहमत होते हैं। खरीदारी की पुष्टि के समय Apple के पास दर्ज आपका भुगतान तरीका चार्ज किया जाएगा।</PolicyParagraph>

                <PolicyHeading>खरीदारी पुनर्स्थापित करना</PolicyHeading>
                <PolicyParagraph>यदि आप LiquidBoard को पुनः स्थापित करते हैं या किसी नए डिवाइस पर स्विच करते हैं, तो आप ऐप के भीतर 'Restore Purchases' विकल्प का उपयोग करके सभी पिछले खरीदे गए आइटमों को बिना किसी अतिरिक्त लागत के पुनर्स्थापित कर सकते हैं। खरीदारी आपके Apple ID से जुड़ी होती है और वही खाते में साइन इन किए गए सभी डिवाइस पर उपलब्ध होती है।</PolicyParagraph>

                <PolicyHeading>सदस्यताएँ</PolicyHeading>
                <PolicyParagraph>यदि लिक्विडबोर्ड सदस्यता-आधारित खरीद की पेशकश करता है:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>सदस्यता स्वचालित रूप से नवीनीकृत हो जाती है जब तक कि वर्तमान बिलिंग अवधि के समाप्त होने से कम से कम 24 घंटे पहले इसे रद्द न किया जाए।</PolicyListItem>
                  <PolicyListItem>आपके एप्पल आईडी से वर्तमान अवधि के समाप्त होने से 24 घंटे पहले नवीनीकरण के लिए शुल्क लिया जाएगा</PolicyListItem>
                  <PolicyListItem>आप कभी भी सेटिंग्स → [आपका नाम] → सब्सक्रिप्शन में जाकर सब्सक्रिप्शन का प्रबंधन कर सकते हैं या रद्द कर सकते हैं</PolicyListItem>
                  <PolicyListItem>सब्सक्रिप्शन रद्द करना वर्तमान भुगतान अवधि की समाप्ति पर प्रभावी होता है — तब तक आपका उपयोग जारी रहता है</PolicyListItem>
                  <PolicyListItem>यदि मुफ्त परीक्षण अवधि दी जाती है, तो यह अदा की गई सदस्यता में बदल जाएगी जब तक कि परीक्षण समाप्त होने से पहले इसे रद्द न किया जाए</PolicyListItem>
                </PolicyList>

                <PolicyHeading>वापसी नीति</PolicyHeading>
                <PolicyParagraph>हम सीधे रिफंड नहीं प्रोसेस करते। सभी रिफंड अनुरोध Apple को सबमिट किए जाने चाहिए, क्योंकि वे सभी App Store लेनदेन के लिए रिकॉर्ड पर व्यापारी हैं।</PolicyParagraph>
                <PolicyParagraph>एप्पल अपनी रिफंड नीति के अनुसार अपनी विवेकाधिकार पर रिफंड संभालता है। सामान्य पात्र मामलों में आकस्मिक खरीद, अनधिकृत शुल्क या ऐसी खरीद शामिल हैं जो वर्णित के अनुसार काम नहीं करती हैं।</PolicyParagraph>
                <PolicyParagraph>एप्पल से रिफंड का अनुरोध करने के लिए:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>इसे आज़माओ।<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>और अपने एप्पल आईडी के साथ साइन इन करें</PolicyListItem>
                  <PolicyListItem>लिक्विडबोर्ड खरीद खोजें और समस्या की रिपोर्ट टैप करें</PolicyListItem>
                  <PolicyListItem>कारण चुनें और अपना अनुरोध भेजें</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>एप्पल आमतौर पर कुछ व्यवसायिक दिनों के भीतर प्रतिक्रिया देता है। रिफंड के निर्णय केवल एप्पल द्वारा ही लिए जाते हैं।</PolicyParagraph>

                <PolicyHeading>मूल्य में बदलाव</PolicyHeading>
                <PolicyParagraph>हम किसी भी समय इन-ऐप खरीदारी की कीमत बदलने का अधिकार सुरक्षित रखते हैं। सब्सक्रिप्शन के लिए कीमत में बदलाव ऐप या ऐप स्टोर के माध्यम से पहले से सूचित किया जाएगा और यह आपके अगले बिलिंग चक्र की शुरुआत में प्रभाव में आएगा। किसी भी सब्सक्रिप्शन कीमत बदलने से पहले आपको ऐप्पल द्वारा सूचित किया जाएगा।</PolicyParagraph>

                <PolicyHeading>असफल या अधूरी खरीदारी</PolicyHeading>
                <PolicyParagraph>यदि कोई खरीदारी विफल हो जाती है या आपसे चार्ज कर लिया जाता है लेकिन आपको सामग्री नहीं मिलती है, तो कृपया पहले ऐप के भीतर खरीदारी को पुनर्स्थापित करने का प्रयास करें। यदि समस्या बनी रहती है, तो हमसे संपर्क करें<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>और हम तुरंत जांच करेंगे।</PolicyParagraph>

                <PolicyHeading>संपर्क करें</PolicyHeading>
                <PolicyParagraph>बिलिंग प्रश्नों या खरीद संबंधी समस्याओं के लिए, हमसे इसपर संपर्क करें:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>रिफंड के लिए, कृपया एप्पल के आधिकारिक चैनल का उपयोग करें:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
