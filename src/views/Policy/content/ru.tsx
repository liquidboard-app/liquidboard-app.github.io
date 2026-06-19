
export const Security = () => (
  <>
    <h2>Политика безопасности данных</h2>
                <p>Последнее обновление: 5 июня 2026 г. · LiquidBoard</p>
                <p>LiquidBoard разработан с учетом принципа конфиденциальности. Ваши данные никогда не покинут ваше устройство, если вы явно не решите включить синхронизацию iCloud. У нас нет серверов, учетных записей и доступа к вашему контенту.</p>

                <h2>Хранение данных</h2>
                <p>Весь контент, который вы создаете в LiquidBoard — фрагменты текста, изображения и стикеры — хранится в одном из двух мест:</p>
                <ul>
                  <li><strong>Хранилище на устройстве</strong>— Управляется iOS и доступен только для LiquidBoard. Другие приложения не могут прочитать ваши данные.</li>
                  <li><strong>iCloud (необязательно)</strong>— Синхронизируется через ваш личный Apple ID с использованием зашифрованной инфраструктуры Apple CloudKit.</li>
                </ul>
                <p>Никакие данные не хранятся на наших серверах. У нас нет никакой серверной инфраструктуры.</p>

                <h2>Шифрование</h2>
                <p>Ваши данные защищены уровнями безопасности iOS и Apple:</p>
                <ul>
                  <li><strong>В состоянии покоя</strong>— Данные, хранящиеся на вашем устройстве, шифруются iOS с использованием пароля вашего устройства и Secure Enclave.</li>
                  <li><strong>В пути</strong>— Если включена синхронизация iCloud, данные перед передачей шифруются с помощью Apple CloudKit.</li>
                  <li><strong>Резервное копирование в iCloud</strong>— Если на вашем устройстве есть резервная копия в iCloud, данные приложения включаются в зашифрованную систему резервного копирования Apple.</li>
                </ul>

                <h2>Безопасность фотографий и изображений</h2>
                <p>LiquidBoard получает доступ к вашей библиотеке фотографий только тогда, когда вы явно выбираете или импортируете фотографию. Приложение:</p>
                <ul>
                  <li>Не имеет доступа к вашей библиотеке фотографий в фоновом режиме</li>
                  <li>Не загружает фотографии ни на один сервер</li>
                  <li>Сохраняет выбранные изображения локально в изолированном контейнере приложения.</li>
                  <li>Процесс создания стикеров полностью на устройстве</li>
                </ul>
                <p>Вы можете в любой момент отозвать доступ к фотографиям в «Настройки» → «Конфиденциальность и безопасность» → «Фотографии».</p>

                <h2>Безопасность расширения клавиатуры</h2>
                <p>Расширение клавиатуры не собирает, не регистрирует и не передает данные о нажатиях клавиш или текст, который вы вводите в других приложениях.</p>
                <p>Полный доступ необходим расширению клавиатуры для вставки изображений и наклеек, а также для доступа к iCloud Sync. Даже при включенном полном доступе расширение клавиатуры полностью работает в изолированной среде iOS. Он не имеет возможности отправлять данные на внешние серверы.</p>

                <h2>Нет доступа к данным третьих лиц</h2>
                <p>LiquidBoard не включает в себя ничего из следующего:</p>
                <ul>
                  <li>SDK для аналитики или отчетов о сбоях, например Firebase или Mixpanel.</li>
                  <li>Рекламные сети или SDK отслеживания</li>
                  <li>Сторонние облачные службы хранения или обработки</li>
                </ul>
                <p>Ваш контент никогда не будет передан третьим лицам и не будет доступен им.</p>

                <h2>Песочница приложения</h2>
                <p>LiquidBoard работает в строгой «песочнице» приложений iOS. Это означает, что другие приложения на вашем устройстве не могут получить доступ к данным LiquidBoard, а LiquidBoard не может получить доступ к данным, принадлежащим другим приложениям, за исключением контента, который вы явно вставляете с помощью расширения клавиатуры.</p>

                <h2>Ваш контроль</h2>
                <p>Вы всегда имеете полный контроль над своими данными:</p>
                <ul>
                  <li>Включите или отключите синхронизацию iCloud из приложения.</li>
                  <li>Отменить доступ к библиотеке фотографий в настройках iOS</li>
                  <li>Отключите полный доступ к клавиатуре в «Настройки» → «Основные» → «Клавиатура» → «Клавиатуры».</li>
                  <li>Удалите все данные, удалив приложение</li>
                </ul>

                <h2>Контакт</h2>
                <p>Если у вас есть вопросы о безопасности данных, свяжитесь с нами по адресу:<a href="mailto:votienthuan97@gmail.com">вотиентхуан97@gmail.com</a></p>
  </>);

export const Privacy = () => (<>
    <h2>политика конфиденциальности</h2>
                <p>Последнее обновление: 5 июня 2026 г. · LiquidBoard</p>
                <p>LiquidBoard («мы», «наше» или «приложение») обязуется защищать вашу конфиденциальность. В настоящей Политике конфиденциальности объясняется, как мы обрабатываем информацию, когда вы используете LiquidBoard и его расширение для клавиатуры.</p>

                <h2>Данные, которые мы собираем</h2>
                <p>LiquidBoard не собирает, не хранит и не передает какие-либо личные данные на внешние серверы. Все данные, которые вы создаете в приложении, включая фрагменты текста, изображения, наклейки, категории и настройки, хранятся исключительно на вашем устройстве или в вашей личной учетной записи iCloud.</p>

                <h2>Фотографии и изображения</h2>
                <p>LiquidBoard может запросить доступ к вашей библиотеке фотографий для следующих целей:</p>
                <ul>
                  <li>Вставка изображений в ваши фрагменты</li>
                  <li>Создание индивидуальных стикеров из ваших фотографий</li>
                </ul>
                <p>Выбранные вами фотографии хранятся локально на вашем устройстве и/или синхронизируются с вашей личной учетной записью iCloud. Мы не загружаем, не передаем и не получаем доступ к вашим фотографиям каким-либо образом. Доступ к библиотеке фотографий используется только в тот момент, когда вы явно выбираете изображение — приложение не обращается к вашей библиотеке в фоновом режиме.</p>

                <h2>Наклейки</h2>
                <p>LiquidBoard позволяет:</p>
                <ul>
                  <li>Создавайте собственные наклейки из своих фотографий.</li>
                  <li>Вставка стикеров через расширение клавиатуры</li>
                </ul>
                <p>Пользовательские стикеры, которые вы создаете из своих фотографий, хранятся только на вашем устройстве и/или в iCloud. Нам не передаются никакие данные стикеров или изображения.</p>

                <h2>Расширение клавиатуры и полный доступ</h2>
                <p>Это расширение клавиатуры не собирает, не записывает и не передает данные о нажатии клавиш или вводимый вами текст.</p>
                <p>Расширению клавиатуры LiquidBoard требуется включить полный доступ, чтобы:</p>
                <ul>
                  <li>Вставляйте изображения и наклейки в другие приложения.</li>
                  <li>Синхронизируйте свои фрагменты и стикеры через iCloud на своих устройствах.</li>
                </ul>
                <p>Полный доступ используется исключительно для этих функций. Клавиатура не регистрирует, не записывает и не передает ничего, что вы вводите в какое-либо другое приложение. Никакие данные не отправляются на внешний сервер.</p>

                <h2>Синхронизация с iCloud</h2>
                <p>Если вы решите включить синхронизацию iCloud, ваши текстовые фрагменты, изображения и стикеры синхронизируются через инфраструктуру Apple iCloud с использованием вашего личного Apple ID. Эти данные регулируются Политикой конфиденциальности Apple. У нас нет доступа к вашим данным iCloud.</p>

                <h2>Обмен данными</h2>
                <p>Мы не продаем, не передаем и не раскрываем ваши данные третьим лицам. Мы не используем стороннюю аналитику, рекламные SDK или инструменты отслеживания.</p>

                <h2>Хранение и удаление данных</h2>
                <p>Ваши данные остаются на вашем устройстве и/или в учетной записи iCloud и полностью под вашим контролем. Вы можете удалить свои данные в любое время:</p>
                <ul>
                  <li>Удаление отдельных фрагментов, изображений или стикеров в приложении.</li>
                  <li>Отмена доступа к библиотеке фотографий в «Настройки» → «Конфиденциальность» → «Фотографии».</li>
                  <li>Удаление приложения, которое удаляет все локально сохраненные данные.</li>
                  <li>Отключение синхронизации iCloud и удаление данных iCloud приложения в меню «Настройки» → [Ваше имя] → iCloud → «Управление хранилищем».</li>
                </ul>

                <h2>Конфиденциальность детей</h2>
                <p>LiquidBoard сознательно не собирает какую-либо информацию от детей в возрасте до 13 лет. Приложение не собирает личные данные ни от каких пользователей.</p>

                <h2>Изменения в этой политике</h2>
                <p>Мы можем время от времени обновлять настоящую Политику конфиденциальности. Любые изменения будут отражены в приложении и на нашем веб-сайте с обновленной датой.</p>

                <h2>Контакт</h2>
                <p>Если у вас есть какие-либо вопросы по поводу настоящей Политики конфиденциальности, свяжитесь с нами по адресу:<a href="mailto:votienthuan97@gmail.com">вотиентхуан97@gmail.com</a></p>
  </>);

export const Terms = () => (<>
    <h2>Условия эксплуатации</h2>
                <p>Последнее обновление: 5 июня 2026 г. · LiquidBoard</p>
                <p>Загружая, устанавливая или используя LiquidBoard («Приложение»), вы соглашаетесь соблюдать настоящие Условия использования. Если вы не согласны с этими условиями, пожалуйста, не используйте Приложение.</p>

                <h2>Лицензия</h2>
                <p>Мы предоставляем вам ограниченную, неисключительную, непередаваемую и отзывную лицензию на использование LiquidBoard в ваших личных некоммерческих целях в соответствии с настоящими Условиями.</p>
                <p>Вы не можете:</p>
                <ul>
                  <li>Копировать, изменять или распространять Приложение или его содержимое.</li>
                  <li>Реверс-инжиниринг или попытка извлечь исходный код</li>
                  <li>Использовать Приложение для любых незаконных или несанкционированных целей.</li>
                  <li>Продавать, сублицензировать или передавать доступ к Приложению любому третьему лицу.</li>
                </ul>

                <h2>Ваш контент</h2>
                <p>Вы сохраняете полное право собственности на все фрагменты текста, изображения и наклейки, которые вы создаете или импортируете в LiquidBoard. Мы не претендуем на какие-либо права на ваш контент.</p>
                <p>Вы несете единоличную ответственность за то, чтобы контент, который вы создаете или вставляете с помощью Приложения, не нарушал какие-либо права третьих лиц, включая авторские права, права на товарные знаки или права на конфиденциальность.</p>

                <h2>Допустимое использование</h2>
                <p>Вы соглашаетесь не использовать LiquidBoard для создания, хранения или распространения контента, который:</p>
                <ul>
                  <li>Является незаконным, вредным, угрожающим или преследующим</li>
                  <li>Нарушает права интеллектуальной собственности других лиц</li>
                  <li>Содержит вредоносное ПО, вирусы или вредоносный код.</li>
                  <li>Нарушает любые применимые местные, национальные или международные законы.</li>
                </ul>

                <h2>Покупки в приложении</h2>
                <p>LiquidBoard предлагает дополнительные покупки в приложении, чтобы разблокировать дополнительные функции или контент. Все покупки обрабатываются Apple через App Store и регулируются Условиями продажи Apple.</p>
                <ul>
                  <li>Purchases are non-refundable except as required by applicable law or Apple's refund policy</li>
                  <li>Prices may vary by region and are displayed in your local currency at the time of purchase</li>
                  <li>Purchased features are tied to your Apple ID and can be restored on any device signed in with the same Apple ID</li>
                </ul>
                <p>To request a refund, please contact Apple directly at:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.</p>

                <h2>Keyboard Extension & Full Access</h2>
                <p>Enabling Full Access for the keyboard extension is required to paste images and stickers into other apps and to enable iCloud Sync. Full Access does not grant us access to anything you type.</p>
                <p>You acknowledge that by enabling Full Access, iOS will display a system notice informing you that the keyboard developer could potentially access your typing. We want to be explicit: LiquidBoard does not collect, log, or transmit any keystroke data.</p>

                <h2>iCloud Sync</h2>
                <p>iCloud Sync is an optional feature that uses your personal Apple iCloud account to sync your data across devices. Use of iCloud is subject to Apple's Terms and Conditions. We are not responsible for any data loss resulting from iCloud service interruptions.</p>

                <h2>Disclaimer of Warranties</h2>
                <p>LiquidBoard is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                <p>We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components.</p>

                <h2>Limitation of Liability</h2>
                <p>To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of profits, or loss of goodwill, arising from your use of or inability to use the App.</p>

                <h2>Termination</h2>
                <p>We reserve the right to terminate or restrict your access to the App at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>
                <p>You may stop using the App at any time by deleting it from your device.</p>

                <h2>Changes to These Terms</h2>
                <p>We may update these Terms of Use from time to time. Continued use of the App after changes are posted constitutes your acceptance of the revised Terms. We will notify you of significant changes through the App or our website.</p>

                <h2>Governing Law</h2>
                <p>These Terms are governed by and construed in accordance with the laws of the jurisdiction in which the developer is based, without regard to conflict of law principles.</p>

                <h2>Contact</h2>
                <p>If you have any questions about these Terms, please contact us at:<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a></p>
  </>);

export const Payment = () => (<>
    <h2>Payment & Refund Policy</h2>
                <p>Last updated: June 05 2026 · LiquidBoard</p>
                <p>LiquidBoard offers optional in-app purchases to unlock premium features. All payments are handled entirely by Apple through the App Store — we do not process, store, or have access to your payment information.</p>

                <h2>What You Can Purchase</h2>
                <p>LiquidBoard offers the following optional purchases:</p>
                <ul>
                  <li>Premium Features — One-time or subscription unlock for advanced app functionality</li>
                </ul>
                <p>Available purchases and pricing are displayed within the App at the time of purchase. Prices may vary by region and are shown in your local currency.</p>

                <h2>Payment Processing</h2>
                <p>All transactions are processed securely by Apple. We never see or store your credit card, billing address, or any payment details.</p>
                <p>By completing a purchase, you agree to Apple's App Store Terms of Sale. Your payment method on file with Apple will be charged at the time of purchase confirmation.</p>

                <h2>Restoring Purchases</h2>
                <p>If you reinstall LiquidBoard or switch to a new device, you can restore all previous purchases at no additional cost using the Restore Purchases option within the App. Purchases are tied to your Apple ID and are available on all devices signed in with the same account.</p>

                <h2>Subscriptions</h2>
                <p>If LiquidBoard offers subscription-based purchases:</p>
                <ul>
                  <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period</li>
                  <li>Your Apple ID will be charged for renewal within 24 hours prior to the end of the current period</li>
                  <li>You can manage or cancel subscriptions at any time in Settings → [Your Name] → Subscriptions</li>
                  <li>Cancelling a subscription takes effect at the end of the current paid period — you retain access until then</li>
                  <li>Free trial periods, if offered, will convert to a paid subscription unless cancelled before the trial ends</li>
                </ul>

                <h2>Refund Policy</h2>
                <p>We do not process refunds directly. All refund requests must be submitted to Apple, as they are the merchant of record for all App Store transactions.</p>
                <p>Apple handles refunds at their discretion in accordance with their refund policy. Common eligible cases include accidental purchases, unauthorized charges, or purchases that did not function as described.</p>
                <p>To request a refund from Apple:</p>
                <ul>
                  <li>Go to<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>and sign in with your Apple ID</li>
                  <li>Find the LiquidBoard purchase and tap Report a Problem</li>
                  <li>Select the reason and submit your request</li>
                </ul>
                <p>Apple typically responds within a few business days. Refund decisions are made solely by Apple.</p>

                <h2>Price Changes</h2>
                <p>We reserve the right to change pricing for in-app purchases at any time. Price changes for subscriptions will be communicated in advance through the App or App Store, and will take effect at the start of your next billing cycle. You will be notified by Apple before any subscription price change takes effect.</p>

                <h2>Failed or Incomplete Purchases</h2>
                <p>If a purchase fails or you are charged but do not receive the content, please first try restoring purchases within the App. If the issue persists, contact us at<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a>and we will investigate promptly.</p>

                <h2>Contact</h2>
                <p>For billing questions or purchase issues, contact us at:<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a></p>
                <p>For refunds, please use Apple's official channel:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></p>
  </>
);
