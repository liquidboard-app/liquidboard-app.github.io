import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Data Security Policy</PolicyHeading>
                <PolicyParagraph>Last updated: June 05 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard is designed with a privacy-first approach. Your data never leaves your device unless you explicitly choose to enable iCloud Sync. We have no servers, no accounts and no access to your content.</PolicyParagraph>

                <PolicyHeading>Data Storage</PolicyHeading>
                <PolicyParagraph>All content you create in LiquidBoard — text snippets, images and stickers — is stored in one of two places:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>On-device storage</PolicyEmphasis> — Managed by iOS and accessible only to LiquidBoard. Other apps cannot read your data.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (optional)</PolicyEmphasis> — Synced through your personal Apple ID using Apple's encrypted CloudKit infrastructure.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>No data is stored on our servers. We do not operate any backend infrastructure.</PolicyParagraph>

                <PolicyHeading>Encryption</PolicyHeading>
                <PolicyParagraph>Your data is protected by iOS and Apple's security layers:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>At rest</PolicyEmphasis> — Data stored on your device is encrypted by iOS using your device passcode and the Secure Enclave.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>In transit</PolicyEmphasis> — If iCloud Sync is enabled, data is encrypted by Apple's CloudKit before being transmitted.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud Backup</PolicyEmphasis> — If your device is backed up to iCloud, app data is included in Apple's encrypted backup system.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Photo & Image Security</PolicyHeading>
                <PolicyParagraph>LiquidBoard accesses your photo library only when you explicitly choose to select or import a photo. The app:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Does not access your photo library in the background</PolicyListItem>
                  <PolicyListItem>Does not upload photos to any server</PolicyListItem>
                  <PolicyListItem>Stores selected images locally in the app's sandboxed container</PolicyListItem>
                  <PolicyListItem>Processes sticker creation entirely on-device</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>You can revoke photo access at any time in Settings → Privacy & Security → Photos.</PolicyParagraph>

                <PolicyHeading>Keyboard Extension Security</PolicyHeading>
                <PolicyParagraph>The keyboard extension does not collect, log or transmit any keystroke data or text you type in other apps.</PolicyParagraph>
                <PolicyParagraph>Full Access is required for the keyboard extension to paste images and stickers and to access iCloud Sync. Even with Full Access enabled, the keyboard extension operates entirely within iOS's sandboxed environment. It has no ability to send data to external servers.</PolicyParagraph>

                <PolicyHeading>No Third-Party Data Access</PolicyHeading>
                <PolicyParagraph>LiquidBoard does not integrate any of the following:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Analytics or crash reporting SDKs, such as Firebase or Mixpanel</PolicyListItem>
                  <PolicyListItem>Advertising networks or tracking SDKs</PolicyListItem>
                  <PolicyListItem>Third-party cloud storage or processing services</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Your content is never shared with or accessible by any third party.</PolicyParagraph>

                <PolicyHeading>App Sandbox</PolicyHeading>
                <PolicyParagraph>LiquidBoard runs in iOS's strict app sandbox. This means other apps on your device cannot access LiquidBoard's data and LiquidBoard cannot access data belonging to other apps except content you explicitly paste via the keyboard extension.</PolicyParagraph>

                <PolicyHeading>Your Control</PolicyHeading>
                <PolicyParagraph>You have full control over your data at all times:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Enable or disable iCloud Sync from within the app</PolicyListItem>
                  <PolicyListItem>Revoke photo library access in iOS Settings</PolicyListItem>
                  <PolicyListItem>Disable Full Access for the keyboard in Settings → General → Keyboard → Keyboards</PolicyListItem>
                  <PolicyListItem>Delete all data by deleting the app</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Contact</PolicyHeading>
                <PolicyParagraph>If you have questions about data security, please contact us at: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>
);

export const Privacy = () => (
  <>
    <PolicyHeading>Privacy Policy</PolicyHeading>
                <PolicyParagraph>Last updated: June 05 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard ("we", "our" or "the app") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use LiquidBoard and its keyboard extension.</PolicyParagraph>

                <PolicyHeading>Data We Collect</PolicyHeading>
                <PolicyParagraph>LiquidBoard does not collect, store or transmit any personal data to external servers. All data you create within the app — including text snippets, images, stickers, categories and settings — is stored exclusively on your device or in your personal iCloud account.</PolicyParagraph>

                <PolicyHeading>Photos & Images</PolicyHeading>
                <PolicyParagraph>LiquidBoard may request access to your photo library for the following purposes:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Inserting images into your snippets</PolicyListItem>
                  <PolicyListItem>Creating custom stickers from your photos</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Photos you select are stored locally on your device and/or synced to your personal iCloud account. We do not upload, transmit or access your photos in any way. Photo library access is only used at the moment you explicitly choose an image — the app does not access your library in the background.</PolicyParagraph>

                <PolicyHeading>Stickers</PolicyHeading>
                <PolicyParagraph>LiquidBoard allows you to:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Create custom stickers from your own photos</PolicyListItem>
                  <PolicyListItem>Insert stickers via the keyboard extension</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Custom stickers you create from your photos are stored on your device and/or iCloud only. No sticker content or image data is transmitted to us.</PolicyParagraph>

                <PolicyHeading>Keyboard Extension & Full Access</PolicyHeading>
                <PolicyParagraph>This keyboard extension does not collect, record or transmit any keystroke data or text you type.</PolicyParagraph>
                <PolicyParagraph>LiquidBoard's keyboard extension requires Full Access to be enabled in order to:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Paste images and stickers into other apps</PolicyListItem>
                  <PolicyListItem>Sync your snippets and stickers via iCloud across your devices</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Full Access is used solely for these features. The keyboard does not log, record or transmit anything you type in any other app. No data is sent to any external server.</PolicyParagraph>

                <PolicyHeading>iCloud Sync</PolicyHeading>
                <PolicyParagraph>If you choose to enable iCloud Sync, your text snippets, images and stickers are synced through Apple's iCloud infrastructure using your personal Apple ID. This data is governed by Apple's Privacy Policy. We do not have access to your iCloud data.</PolicyParagraph>

                <PolicyHeading>Data Sharing</PolicyHeading>
                <PolicyParagraph>We do not sell, share or disclose your data to any third parties. We do not use any third-party analytics, advertising SDKs or tracking tools.</PolicyParagraph>

                <PolicyHeading>Data Retention & Deletion</PolicyHeading>
                <PolicyParagraph>Your data remains on your device and/or iCloud account and is fully under your control. You may delete your data at any time by:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Deleting individual snippets, images or stickers within the app</PolicyListItem>
                  <PolicyListItem>Revoking photo library access in Settings → Privacy → Photos</PolicyListItem>
                  <PolicyListItem>Deleting the app, which removes all locally stored data</PolicyListItem>
                  <PolicyListItem>Disabling iCloud Sync and removing the app's iCloud data from Settings → [Your Name] → iCloud → Manage Storage</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Children's Privacy</PolicyHeading>
                <PolicyParagraph>LiquidBoard does not knowingly collect any information from children under the age of 13. The app does not collect personal data from any users.</PolicyParagraph>

                <PolicyHeading>Changes to This Policy</PolicyHeading>
                <PolicyParagraph>We may update this Privacy Policy from time to time. Any changes will be reflected in the app and on our website with an updated date.</PolicyParagraph>

                <PolicyHeading>Contact</PolicyHeading>
                <PolicyParagraph>If you have any questions about this Privacy Policy, please contact us at: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>
);

export const Terms = () => (
  <>
    <PolicyHeading>Terms of Use</PolicyHeading>
                <PolicyParagraph>Last updated: June 05 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>By downloading, installing or using LiquidBoard ("the App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the App.</PolicyParagraph>

                <PolicyHeading>License</PolicyHeading>
                <PolicyParagraph>We grant you a limited, non-exclusive, non-transferable, revocable license to use LiquidBoard for your personal, non-commercial purposes, subject to these Terms.</PolicyParagraph>
                <PolicyParagraph>You may not:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Copy, modify or distribute the App or its content</PolicyListItem>
                  <PolicyListItem>Reverse engineer or attempt to extract the source code</PolicyListItem>
                  <PolicyListItem>Use the App for any unlawful or unauthorized purpose</PolicyListItem>
                  <PolicyListItem>Sell, sublicense or transfer access to the App to any third party</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Your Content</PolicyHeading>
                <PolicyParagraph>You retain full ownership of all text snippets, images and stickers you create or import into LiquidBoard. We do not claim any rights over your content.</PolicyParagraph>
                <PolicyParagraph>You are solely responsible for ensuring that the content you create or paste using the App does not infringe any third-party rights, including copyright, trademark or privacy rights.</PolicyParagraph>

                <PolicyHeading>Acceptable Use</PolicyHeading>
                <PolicyParagraph>You agree not to use LiquidBoard to create, store or distribute content that:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Is unlawful, harmful, threatening or harassing</PolicyListItem>
                  <PolicyListItem>Infringes on the intellectual property rights of others</PolicyListItem>
                  <PolicyListItem>Contains malware, viruses or malicious code</PolicyListItem>
                  <PolicyListItem>Violates any applicable local, national or international law</PolicyListItem>
                </PolicyList>

                <PolicyHeading>In-App Purchases</PolicyHeading>
                <PolicyParagraph>LiquidBoard offers optional in-app purchases to unlock additional features or content. All purchases are processed by Apple through the App Store and are subject to Apple's Terms of Sale.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Purchases are non-refundable except as required by applicable law or Apple's refund policy</PolicyListItem>
                  <PolicyListItem>Prices may vary by region and are displayed in your local currency at the time of purchase</PolicyListItem>
                  <PolicyListItem>Purchased features are tied to your Apple ID and can be restored on any device signed in with the same Apple ID</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>To request a refund, please contact Apple directly at: <PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

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
                <PolicyParagraph>If you have any questions about these Terms, please contact us at: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>
);

export const Payment = () => (
  <>
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
                  <PolicyListItem>Go to <PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink> and sign in with your Apple ID</PolicyListItem>
                  <PolicyListItem>Find the LiquidBoard purchase and tap Report a Problem</PolicyListItem>
                  <PolicyListItem>Select the reason and submit your request</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple typically responds within a few business days. Refund decisions are made solely by Apple.</PolicyParagraph>

                <PolicyHeading>Price Changes</PolicyHeading>
                <PolicyParagraph>We reserve the right to change pricing for in-app purchases at any time. Price changes for subscriptions will be communicated in advance through the App or App Store and will take effect at the start of your next billing cycle. You will be notified by Apple before any subscription price change takes effect.</PolicyParagraph>

                <PolicyHeading>Failed or Incomplete Purchases</PolicyHeading>
                <PolicyParagraph>If a purchase fails or you are charged but do not receive the content, please first try restoring purchases within the App. If the issue persists, contact us at <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink> and we will investigate promptly.</PolicyParagraph>

                <PolicyHeading>Contact</PolicyHeading>
                <PolicyParagraph>For billing questions or purchase issues, contact us at: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>For refunds, please use Apple's official channel: <PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
