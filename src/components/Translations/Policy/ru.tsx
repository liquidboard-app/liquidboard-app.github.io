import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Политика безопасности данных</PolicyHeading>
                <PolicyParagraph>Последнее обновление: 5 июня 2026 г. · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard разработан с учетом принципа конфиденциальности. Ваши данные никогда не покинут ваше устройство, если вы явно не решите включить синхронизацию iCloud. У нас нет серверов, учетных записей и доступа к вашему контенту.</PolicyParagraph>

                <PolicyHeading>Хранение данных</PolicyHeading>
                <PolicyParagraph>Весь контент, который вы создаете в LiquidBoard — фрагменты текста, изображения и стикеры — хранится в одном из двух мест:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Хранилище на устройстве</PolicyEmphasis>— Управляется iOS и доступен только для LiquidBoard. Другие приложения не могут прочитать ваши данные.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (необязательно)</PolicyEmphasis>— Синхронизируется через ваш личный Apple ID с использованием зашифрованной инфраструктуры Apple CloudKit.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Никакие данные не хранятся на наших серверах. У нас нет никакой серверной инфраструктуры.</PolicyParagraph>

                <PolicyHeading>Шифрование</PolicyHeading>
                <PolicyParagraph>Ваши данные защищены уровнями безопасности iOS и Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>В состоянии покоя</PolicyEmphasis>— Данные, хранящиеся на вашем устройстве, шифруются iOS с использованием пароля вашего устройства и Secure Enclave.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>В пути</PolicyEmphasis>— Если включена синхронизация iCloud, данные перед передачей шифруются с помощью Apple CloudKit.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Резервное копирование в iCloud</PolicyEmphasis>— Если на вашем устройстве есть резервная копия в iCloud, данные приложения включаются в зашифрованную систему резервного копирования Apple.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Безопасность фотографий и изображений</PolicyHeading>
                <PolicyParagraph>LiquidBoard получает доступ к вашей библиотеке фотографий только тогда, когда вы явно выбираете или импортируете фотографию. Приложение:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Не имеет доступа к вашей библиотеке фотографий в фоновом режиме</PolicyListItem>
                  <PolicyListItem>Не загружает фотографии ни на один сервер</PolicyListItem>
                  <PolicyListItem>Сохраняет выбранные изображения локально в изолированном контейнере приложения.</PolicyListItem>
                  <PolicyListItem>Процесс создания стикеров полностью на устройстве</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Вы можете в любой момент отозвать доступ к фотографиям в «Настройки» → «Конфиденциальность и безопасность» → «Фотографии».</PolicyParagraph>

                <PolicyHeading>Безопасность расширения клавиатуры</PolicyHeading>
                <PolicyParagraph>Расширение клавиатуры не собирает, не регистрирует и не передает данные о нажатиях клавиш или текст, который вы вводите в других приложениях.</PolicyParagraph>
                <PolicyParagraph>Полный доступ необходим расширению клавиатуры для вставки изображений и наклеек, а также для доступа к iCloud Sync. Даже при включенном полном доступе расширение клавиатуры полностью работает в изолированной среде iOS. Он не имеет возможности отправлять данные на внешние серверы.</PolicyParagraph>

                <PolicyHeading>Нет доступа к данным третьих лиц</PolicyHeading>
                <PolicyParagraph>LiquidBoard не включает в себя ничего из следующего:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>SDK для аналитики или отчетов о сбоях, например Firebase или Mixpanel.</PolicyListItem>
                  <PolicyListItem>Рекламные сети или SDK отслеживания</PolicyListItem>
                  <PolicyListItem>Сторонние облачные службы хранения или обработки</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Ваш контент никогда не будет передан третьим лицам и не будет доступен им.</PolicyParagraph>

                <PolicyHeading>Песочница приложения</PolicyHeading>
                <PolicyParagraph>LiquidBoard работает в строгой «песочнице» приложений iOS. Это означает, что другие приложения на вашем устройстве не могут получить доступ к данным LiquidBoard, а LiquidBoard не может получить доступ к данным, принадлежащим другим приложениям, за исключением контента, который вы явно вставляете с помощью расширения клавиатуры.</PolicyParagraph>

                <PolicyHeading>Ваш контроль</PolicyHeading>
                <PolicyParagraph>Вы всегда имеете полный контроль над своими данными:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Включите или отключите синхронизацию iCloud из приложения.</PolicyListItem>
                  <PolicyListItem>Отменить доступ к библиотеке фотографий в настройках iOS</PolicyListItem>
                  <PolicyListItem>Отключите полный доступ к клавиатуре в «Настройки» → «Основные» → «Клавиатура» → «Клавиатуры».</PolicyListItem>
                  <PolicyListItem>Удалите все данные, удалив приложение</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Контакт</PolicyHeading>
                <PolicyParagraph>Если у вас есть вопросы о безопасности данных, свяжитесь с нами по адресу:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>политика конфиденциальности</PolicyHeading>
                <PolicyParagraph>Последнее обновление: 5 июня 2026 г. · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard («мы», «наше» или «приложение») обязуется защищать вашу конфиденциальность. В настоящей Политике конфиденциальности объясняется, как мы обрабатываем информацию, когда вы используете LiquidBoard и его расширение для клавиатуры.</PolicyParagraph>

                <PolicyHeading>Данные, которые мы собираем</PolicyHeading>
                <PolicyParagraph>LiquidBoard не собирает, не хранит и не передает какие-либо личные данные на внешние серверы. Все данные, которые вы создаете в приложении, включая фрагменты текста, изображения, наклейки, категории и настройки, хранятся исключительно на вашем устройстве или в вашей личной учетной записи iCloud.</PolicyParagraph>

                <PolicyHeading>Фотографии и изображения</PolicyHeading>
                <PolicyParagraph>LiquidBoard может запросить доступ к вашей библиотеке фотографий для следующих целей:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Вставка изображений в ваши фрагменты</PolicyListItem>
                  <PolicyListItem>Создание индивидуальных стикеров из ваших фотографий</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Выбранные вами фотографии хранятся локально на вашем устройстве и/или синхронизируются с вашей личной учетной записью iCloud. Мы не загружаем, не передаем и не получаем доступ к вашим фотографиям каким-либо образом. Доступ к библиотеке фотографий используется только в тот момент, когда вы явно выбираете изображение — приложение не обращается к вашей библиотеке в фоновом режиме.</PolicyParagraph>

                <PolicyHeading>Наклейки</PolicyHeading>
                <PolicyParagraph>LiquidBoard позволяет:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Создавайте собственные наклейки из своих фотографий.</PolicyListItem>
                  <PolicyListItem>Вставка стикеров через расширение клавиатуры</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Пользовательские стикеры, которые вы создаете из своих фотографий, хранятся только на вашем устройстве и/или в iCloud. Нам не передаются никакие данные стикеров или изображения.</PolicyParagraph>

                <PolicyHeading>Расширение клавиатуры и полный доступ</PolicyHeading>
                <PolicyParagraph>Это расширение клавиатуры не собирает, не записывает и не передает данные о нажатии клавиш или вводимый вами текст.</PolicyParagraph>
                <PolicyParagraph>Расширению клавиатуры LiquidBoard требуется включить полный доступ, чтобы:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Вставляйте изображения и наклейки в другие приложения.</PolicyListItem>
                  <PolicyListItem>Синхронизируйте свои фрагменты и стикеры через iCloud на своих устройствах.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Полный доступ используется исключительно для этих функций. Клавиатура не регистрирует, не записывает и не передает ничего, что вы вводите в какое-либо другое приложение. Никакие данные не отправляются на внешний сервер.</PolicyParagraph>

                <PolicyHeading>Синхронизация с iCloud</PolicyHeading>
                <PolicyParagraph>Если вы решите включить синхронизацию iCloud, ваши текстовые фрагменты, изображения и стикеры синхронизируются через инфраструктуру Apple iCloud с использованием вашего личного Apple ID. Эти данные регулируются Политикой конфиденциальности Apple. У нас нет доступа к вашим данным iCloud.</PolicyParagraph>

                <PolicyHeading>Обмен данными</PolicyHeading>
                <PolicyParagraph>Мы не продаем, не передаем и не раскрываем ваши данные третьим лицам. Мы не используем стороннюю аналитику, рекламные SDK или инструменты отслеживания.</PolicyParagraph>

                <PolicyHeading>Хранение и удаление данных</PolicyHeading>
                <PolicyParagraph>Ваши данные остаются на вашем устройстве и/или в учетной записи iCloud и полностью под вашим контролем. Вы можете удалить свои данные в любое время:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Удаление отдельных фрагментов, изображений или стикеров в приложении.</PolicyListItem>
                  <PolicyListItem>Отмена доступа к библиотеке фотографий в «Настройки» → «Конфиденциальность» → «Фотографии».</PolicyListItem>
                  <PolicyListItem>Удаление приложения, которое удаляет все локально сохраненные данные.</PolicyListItem>
                  <PolicyListItem>Отключение синхронизации iCloud и удаление данных iCloud приложения в меню «Настройки» → [Ваше имя] → iCloud → «Управление хранилищем».</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Конфиденциальность детей</PolicyHeading>
                <PolicyParagraph>LiquidBoard сознательно не собирает какую-либо информацию от детей в возрасте до 13 лет. Приложение не собирает личные данные ни от каких пользователей.</PolicyParagraph>

                <PolicyHeading>Изменения в этой политике</PolicyHeading>
                <PolicyParagraph>Мы можем время от времени обновлять настоящую Политику конфиденциальности. Любые изменения будут отражены в приложении и на нашем веб-сайте с обновленной датой.</PolicyParagraph>

                <PolicyHeading>Контакт</PolicyHeading>
                <PolicyParagraph>Если у вас есть какие-либо вопросы по поводу настоящей Политики конфиденциальности, свяжитесь с нами по адресу:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>Условия эксплуатации</PolicyHeading>
                <PolicyParagraph>Последнее обновление: 5 июня 2026 г. · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Загружая, устанавливая или используя LiquidBoard («Приложение»), вы соглашаетесь соблюдать настоящие Условия использования. Если вы не согласны с этими условиями, пожалуйста, не используйте Приложение.</PolicyParagraph>

                <PolicyHeading>Лицензия</PolicyHeading>
                <PolicyParagraph>Мы предоставляем вам ограниченную, неисключительную, непередаваемую и отзывную лицензию на использование LiquidBoard в ваших личных некоммерческих целях в соответствии с настоящими Условиями.</PolicyParagraph>
                <PolicyParagraph>Вы не можете:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Копировать, изменять или распространять Приложение или его содержимое.</PolicyListItem>
                  <PolicyListItem>Реверс-инжиниринг или попытка извлечь исходный код</PolicyListItem>
                  <PolicyListItem>Использовать Приложение для любых незаконных или несанкционированных целей.</PolicyListItem>
                  <PolicyListItem>Продавать, сублицензировать или передавать доступ к Приложению любому третьему лицу.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Ваш контент</PolicyHeading>
                <PolicyParagraph>Вы сохраняете полное право собственности на все фрагменты текста, изображения и наклейки, которые вы создаете или импортируете в LiquidBoard. Мы не претендуем на какие-либо права на ваш контент.</PolicyParagraph>
                <PolicyParagraph>Вы несете единоличную ответственность за то, чтобы контент, который вы создаете или вставляете с помощью Приложения, не нарушал какие-либо права третьих лиц, включая авторские права, права на товарные знаки или права на конфиденциальность.</PolicyParagraph>

                <PolicyHeading>Допустимое использование</PolicyHeading>
                <PolicyParagraph>Вы соглашаетесь не использовать LiquidBoard для создания, хранения или распространения контента, который:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Является незаконным, вредным, угрожающим или преследующим</PolicyListItem>
                  <PolicyListItem>Нарушает права интеллектуальной собственности других лиц</PolicyListItem>
                  <PolicyListItem>Содержит вредоносное ПО, вирусы или вредоносный код.</PolicyListItem>
                  <PolicyListItem>Нарушает любые применимые местные, национальные или международные законы.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Покупки в приложении</PolicyHeading>
                <PolicyParagraph>LiquidBoard предлагает дополнительные покупки в приложении, чтобы разблокировать дополнительные функции или контент. Все покупки обрабатываются Apple через App Store и регулируются Условиями продажи Apple.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Purchases are non-refundable except as required by applicable law or Apple's refund policy</PolicyListItem>
                  <PolicyListItem>Prices may vary by region and are displayed in your local currency at the time of purchase</PolicyListItem>
                  <PolicyListItem>Purchased features are tied to your Apple ID and can be restored on any device signed in with the same Apple ID</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>To request a refund, please contact Apple directly at:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>Keyboard Extension & Full Access</PolicyHeading>
                <PolicyParagraph>Enabling Full Access for the keyboard extension is required to paste images and stickers into other apps and to enable iCloud Sync. Full Access does not grant us access to anything you type.</PolicyParagraph>
                <PolicyParagraph>You acknowledge that by enabling Full Access, iOS will display a system notice informing you that the keyboard developer could potentially access your typing. We want to be explicit: LiquidBoard does not collect, log or transmit any keystroke data.</PolicyParagraph>

                <PolicyHeading>iCloud Sync</PolicyHeading>
                <PolicyParagraph>iCloud Sync is an optional feature that uses your personal Apple iCloud account to sync your data across devices. Use of iCloud is subject to Apple's Terms and Conditions. We are not responsible for any data loss resulting from iCloud service interruptions.</PolicyParagraph>

                <PolicyHeading>Disclaimer of Warranties</PolicyHeading>
                <PolicyParagraph>LiquidBoard is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose or non-infringement.</PolicyParagraph>
                <PolicyParagraph>We do not warrant that the App will be uninterrupted, error-free or free of viruses or other harmful components.</PolicyParagraph>

                <PolicyHeading>Limitation of Liability</PolicyHeading>
                <PolicyParagraph>To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential or punitive damages, including but not limited to loss of data, loss of profits or loss of goodwill, arising from your use of or inability to use the App.</PolicyParagraph>

                <PolicyHeading>Termination</PolicyHeading>
                <PolicyParagraph>We reserve the right to terminate or restrict your access to the App at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us or third parties.</PolicyParagraph>
                <PolicyParagraph>You may stop using the App at any time by deleting it from your device.</PolicyParagraph>

                <PolicyHeading>Changes to These Terms</PolicyHeading>
                <PolicyParagraph>We may update these Terms of Use from time to time. Continued use of the App after changes are posted constitutes your acceptance of the revised Terms. We will notify you of significant changes through the App or our website.</PolicyParagraph>

                <PolicyHeading>Governing Law</PolicyHeading>
                <PolicyParagraph>These Terms are governed by and construed in accordance with the laws of the jurisdiction in which the developer is based, without regard to conflict of law principles.</PolicyParagraph>

                <PolicyHeading>Contact</PolicyHeading>
                <PolicyParagraph>If you have any questions about these Terms, please contact us at:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>Payment & Refund Policy</PolicyHeading>
                <PolicyParagraph>Last updated: June 05 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard offers optional in-app purchases to unlock premium features. All payments are handled entirely by Apple through the App Store — we do not process, store or have access to your payment information.</PolicyParagraph>

                <PolicyHeading>What You Can Purchase</PolicyHeading>
                <PolicyParagraph>LiquidBoard offers the following optional purchases:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Premium Features — One-time or subscription unlock for advanced app functionality</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Available purchases and pricing are displayed within the App at the time of purchase. Prices may vary by region and are shown in your local currency.</PolicyParagraph>

                <PolicyHeading>Payment Processing</PolicyHeading>
                <PolicyParagraph>All transactions are processed securely by Apple. We never see or store your credit card, billing address or any payment details.</PolicyParagraph>
                <PolicyParagraph>By completing a purchase, you agree to Apple's App Store Terms of Sale. Your payment method on file with Apple will be charged at the time of purchase confirmation.</PolicyParagraph>

                <PolicyHeading>Restoring Purchases</PolicyHeading>
                <PolicyParagraph>If you reinstall LiquidBoard or switch to a new device, you can restore all previous purchases at no additional cost using the Restore Purchases option within the App. Purchases are tied to your Apple ID and are available on all devices signed in with the same account.</PolicyParagraph>

                <PolicyHeading>Subscriptions</PolicyHeading>
                <PolicyParagraph>If LiquidBoard offers subscription-based purchases:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period</PolicyListItem>
                  <PolicyListItem>Your Apple ID will be charged for renewal within 24 hours prior to the end of the current period</PolicyListItem>
                  <PolicyListItem>You can manage or cancel subscriptions at any time in Settings → [Your Name] → Subscriptions</PolicyListItem>
                  <PolicyListItem>Cancelling a subscription takes effect at the end of the current paid period — you retain access until then</PolicyListItem>
                  <PolicyListItem>Free trial periods, if offered, will convert to a paid subscription unless cancelled before the trial ends</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Refund Policy</PolicyHeading>
                <PolicyParagraph>We do not process refunds directly. All refund requests must be submitted to Apple, as they are the merchant of record for all App Store transactions.</PolicyParagraph>
                <PolicyParagraph>Apple handles refunds at their discretion in accordance with their refund policy. Common eligible cases include accidental purchases, unauthorized charges or purchases that did not function as described.</PolicyParagraph>
                <PolicyParagraph>To request a refund from Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Go to<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>and sign in with your Apple ID</PolicyListItem>
                  <PolicyListItem>Find the LiquidBoard purchase and tap Report a Problem</PolicyListItem>
                  <PolicyListItem>Select the reason and submit your request</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple typically responds within a few business days. Refund decisions are made solely by Apple.</PolicyParagraph>

                <PolicyHeading>Price Changes</PolicyHeading>
                <PolicyParagraph>We reserve the right to change pricing for in-app purchases at any time. Price changes for subscriptions will be communicated in advance through the App or App Store and will take effect at the start of your next billing cycle. You will be notified by Apple before any subscription price change takes effect.</PolicyParagraph>

                <PolicyHeading>Failed or Incomplete Purchases</PolicyHeading>
                <PolicyParagraph>If a purchase fails or you are charged but do not receive the content, please first try restoring purchases within the App. If the issue persists, contact us at<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>and we will investigate promptly.</PolicyParagraph>

                <PolicyHeading>Contact</PolicyHeading>
                <PolicyParagraph>For billing questions or purchase issues, contact us at:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>For refunds, please use Apple's official channel:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
