
export const Security = () => (
  <>
    <h2>Data Security Policy</h2>
                <p>Last updated: June 05 2026 · LiquidBoard</p>
                <p>LiquidBoard is designed with a privacy-first approach. Your data never leaves your device unless you explicitly choose to enable iCloud Sync. We have no servers, no accounts, and no access to your content.</p>

                <h2>Data Storage</h2>
                <p>All content you create in LiquidBoard — text snippets, images, and stickers — is stored in one of two places:</p>
                <ul>
                  <li><strong>On-device storage</strong> — Managed by iOS and accessible only to LiquidBoard. Other apps cannot read your data.</li>
                  <li><strong>iCloud (optional)</strong> — Synced through your personal Apple ID using Apple's encrypted CloudKit infrastructure.</li>
                </ul>
                <p>No data is stored on our servers. We do not operate any backend infrastructure.</p>

                <h2>Encryption</h2>
                <p>Your data is protected by iOS and Apple's security layers:</p>
                <ul>
                  <li><strong>At rest</strong> — Data stored on your device is encrypted by iOS using your device passcode and the Secure Enclave.</li>
                  <li><strong>In transit</strong> — If iCloud Sync is enabled, data is encrypted by Apple's CloudKit before being transmitted.</li>
                  <li><strong>iCloud Backup</strong> — If your device is backed up to iCloud, app data is included in Apple's encrypted backup system.</li>
                </ul>

                <h2>Photo & Image Security</h2>
                <p>LiquidBoard accesses your photo library only when you explicitly choose to select or import a photo. The app:</p>
                <ul>
                  <li>Does not access your photo library in the background</li>
                  <li>Does not upload photos to any server</li>
                  <li>Stores selected images locally in the app's sandboxed container</li>
                  <li>Processes sticker creation entirely on-device</li>
                </ul>
                <p>You can revoke photo access at any time in Settings → Privacy & Security → Photos.</p>

                <h2>Keyboard Extension Security</h2>
                <p>The keyboard extension does not collect, log, or transmit any keystroke data or text you type in other apps.</p>
                <p>Full Access is required for the keyboard extension to paste images and stickers, and to access iCloud Sync. Even with Full Access enabled, the keyboard extension operates entirely within iOS's sandboxed environment. It has no ability to send data to external servers.</p>

                <h2>No Third-Party Data Access</h2>
                <p>LiquidBoard does not integrate any of the following:</p>
                <ul>
                  <li>Analytics or crash reporting SDKs, such as Firebase or Mixpanel</li>
                  <li>Advertising networks or tracking SDKs</li>
                  <li>Third-party cloud storage or processing services</li>
                </ul>
                <p>Your content is never shared with or accessible by any third party.</p>

                <h2>App Sandbox</h2>
                <p>LiquidBoard runs in iOS's strict app sandbox. This means other apps on your device cannot access LiquidBoard's data and LiquidBoard cannot access data belonging to other apps except content you explicitly paste via the keyboard extension.</p>

                <h2>Your Control</h2>
                <p>You have full control over your data at all times:</p>
                <ul>
                  <li>Enable or disable iCloud Sync from within the app</li>
                  <li>Revoke photo library access in iOS Settings</li>
                  <li>Disable Full Access for the keyboard in Settings → General → Keyboard → Keyboards</li>
                  <li>Delete all data by deleting the app</li>
                </ul>

                <h2>Contact</h2>
                <p>If you have questions about data security, please contact us at: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Privacy = () => (
  <>
    <h2>Privacy Policy</h2>
                <p>Last updated: June 05 2026 · LiquidBoard</p>
                <p>LiquidBoard ("we", "our", or "the app") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use LiquidBoard and its keyboard extension.</p>

                <h2>Data We Collect</h2>
                <p>LiquidBoard does not collect, store, or transmit any personal data to external servers. All data you create within the app — including text snippets, images, stickers, categories, and settings — is stored exclusively on your device or in your personal iCloud account.</p>

                <h2>Photos & Images</h2>
                <p>LiquidBoard may request access to your photo library for the following purposes:</p>
                <ul>
                  <li>Inserting images into your snippets</li>
                  <li>Creating custom stickers from your photos</li>
                </ul>
                <p>Photos you select are stored locally on your device and/or synced to your personal iCloud account. We do not upload, transmit, or access your photos in any way. Photo library access is only used at the moment you explicitly choose an image — the app does not access your library in the background.</p>

                <h2>Stickers</h2>
                <p>LiquidBoard allows you to:</p>
                <ul>
                  <li>Create custom stickers from your own photos</li>
                  <li>Insert stickers via the keyboard extension</li>
                </ul>
                <p>Custom stickers you create from your photos are stored on your device and/or iCloud only. No sticker content or image data is transmitted to us.</p>

                <h2>Keyboard Extension & Full Access</h2>
                <p>This keyboard extension does not collect, record, or transmit any keystroke data or text you type.</p>
                <p>LiquidBoard's keyboard extension requires Full Access to be enabled in order to:</p>
                <ul>
                  <li>Paste images and stickers into other apps</li>
                  <li>Sync your snippets and stickers via iCloud across your devices</li>
                </ul>
                <p>Full Access is used solely for these features. The keyboard does not log, record, or transmit anything you type in any other app. No data is sent to any external server.</p>

                <h2>iCloud Sync</h2>
                <p>If you choose to enable iCloud Sync, your text snippets, images, and stickers are synced through Apple's iCloud infrastructure using your personal Apple ID. This data is governed by Apple's Privacy Policy. We do not have access to your iCloud data.</p>

                <h2>Data Sharing</h2>
                <p>We do not sell, share, or disclose your data to any third parties. We do not use any third-party analytics, advertising SDKs, or tracking tools.</p>

                <h2>Data Retention & Deletion</h2>
                <p>Your data remains on your device and/or iCloud account and is fully under your control. You may delete your data at any time by:</p>
                <ul>
                  <li>Deleting individual snippets, images, or stickers within the app</li>
                  <li>Revoking photo library access in Settings → Privacy → Photos</li>
                  <li>Deleting the app, which removes all locally stored data</li>
                  <li>Disabling iCloud Sync and removing the app's iCloud data from Settings → [Your Name] → iCloud → Manage Storage</li>
                </ul>

                <h2>Children's Privacy</h2>
                <p>LiquidBoard does not knowingly collect any information from children under the age of 13. The app does not collect personal data from any users.</p>

                <h2>Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be reflected in the app and on our website with an updated date.</p>

                <h2>Contact</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Terms = () => (
  <>
    <h2>Terms of Use</h2>
                <p>Last updated: June 05 2026 · LiquidBoard</p>
                <p>By downloading, installing, or using LiquidBoard ("the App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the App.</p>

                <h2>License</h2>
                <p>We grant you a limited, non-exclusive, non-transferable, revocable license to use LiquidBoard for your personal, non-commercial purposes, subject to these Terms.</p>
                <p>You may not:</p>
                <ul>
                  <li>Copy, modify, or distribute the App or its content</li>
                  <li>Reverse engineer or attempt to extract the source code</li>
                  <li>Use the App for any unlawful or unauthorized purpose</li>
                  <li>Sell, sublicense, or transfer access to the App to any third party</li>
                </ul>

                <h2>Your Content</h2>
                <p>You retain full ownership of all text snippets, images, and stickers you create or import into LiquidBoard. We do not claim any rights over your content.</p>
                <p>You are solely responsible for ensuring that the content you create or paste using the App does not infringe any third-party rights, including copyright, trademark, or privacy rights.</p>

                <h2>Acceptable Use</h2>
                <p>You agree not to use LiquidBoard to create, store, or distribute content that:</p>
                <ul>
                  <li>Is unlawful, harmful, threatening, or harassing</li>
                  <li>Infringes on the intellectual property rights of others</li>
                  <li>Contains malware, viruses, or malicious code</li>
                  <li>Violates any applicable local, national, or international law</li>
                </ul>

                <h2>In-App Purchases</h2>
                <p>LiquidBoard offers optional in-app purchases to unlock additional features or content. All purchases are processed by Apple through the App Store and are subject to Apple's Terms of Sale.</p>
                <ul>
                  <li>Purchases are non-refundable except as required by applicable law or Apple's refund policy</li>
                  <li>Prices may vary by region and are displayed in your local currency at the time of purchase</li>
                  <li>Purchased features are tied to your Apple ID and can be restored on any device signed in with the same Apple ID</li>
                </ul>
                <p>To request a refund, please contact Apple directly at: <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.</p>

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
                <p>If you have any questions about these Terms, please contact us at: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Payment = () => (
  <>
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
                  <li>Go to <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a> and sign in with your Apple ID</li>
                  <li>Find the LiquidBoard purchase and tap Report a Problem</li>
                  <li>Select the reason and submit your request</li>
                </ul>
                <p>Apple typically responds within a few business days. Refund decisions are made solely by Apple.</p>

                <h2>Price Changes</h2>
                <p>We reserve the right to change pricing for in-app purchases at any time. Price changes for subscriptions will be communicated in advance through the App or App Store, and will take effect at the start of your next billing cycle. You will be notified by Apple before any subscription price change takes effect.</p>

                <h2>Failed or Incomplete Purchases</h2>
                <p>If a purchase fails or you are charged but do not receive the content, please first try restoring purchases within the App. If the issue persists, contact us at <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a> and we will investigate promptly.</p>

                <h2>Contact</h2>
                <p>For billing questions or purchase issues, contact us at: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
                <p>For refunds, please use Apple's official channel: <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></p>
  </>
);
