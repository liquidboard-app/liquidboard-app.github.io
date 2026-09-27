import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>資料安全政策</PolicyHeading>
                <PolicyParagraph>最後更新：2026 年 6 月 5 日·LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard 的設計遵循隱私優先的原則。除非您明確選擇啟用 iCloud 同步，否則您的資料永遠不會離開您的裝置。我們沒有伺服器，沒有帳戶，也無法存取您的內容。</PolicyParagraph>

                <PolicyHeading>資料儲存</PolicyHeading>
                <PolicyParagraph>您在 LiquidBoard 中創建的所有內容（文字片段、圖像和貼紙）都儲存在以下兩個位置之一：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.</PolicyEmphasis>Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.</PolicyEmphasis>— 使用 Apple 的加密 CloudKit 基礎架構透過您的個人 Apple ID 進行同步。</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>我們的伺服器上不儲存任何資料。我們不營運任何後端基礎設施。</PolicyParagraph>

                <PolicyHeading>加密</PolicyHeading>
                <PolicyParagraph>您的資料受到 iOS 和 Apple 安全層的保護：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>休息時</PolicyEmphasis>— iOS 使用您的裝置密碼和安全區域對儲存在您裝置上的資料進行加密。</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>在途中</PolicyEmphasis>— 如果啟用了 iCloud 同步，資料會在傳輸前由 Apple 的 CloudKit 加密。</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.</PolicyEmphasis>Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.</PolicyHeading>
                <PolicyParagraph>LiquidBoard accesses your photo library only when you explicitly choose to select or import a photo.該應用程式：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>不會在背景存取您的照片庫</PolicyListItem>
                  <PolicyListItem>不上傳照片到任何伺服器</PolicyListItem>
                  <PolicyListItem>將選定的影像本機儲存在應用程式的沙盒容器中</PolicyListItem>
                  <PolicyListItem>完全在設備上處理貼紙創建</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>您可以隨時在「設定」→「隱私權和安全性」→「照片」中撤銷照片存取權。</PolicyParagraph>

                <PolicyHeading>鍵盤擴充安全</PolicyHeading>
                <PolicyParagraph>鍵盤擴充功能不會收集、記錄或傳輸您在其他應用程式中鍵入的任何擊鍵資料或文字。</PolicyParagraph>
                <PolicyParagraph>鍵盤擴充需要完全存取權限才能貼上圖片和貼紙以及存取 iCloud 同步。即使啟用了完全訪問，鍵盤擴展也完全在 iOS 的沙盒環境中運行。它無法將資料傳送到外部伺服器。</PolicyParagraph>

                <PolicyHeading>沒有第三方數據訪問</PolicyHeading>
                <PolicyParagraph>LiquidBoard 不整合以下任何內容：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>分析或崩潰報告 SDK，例如 Firebase 或 Mixpanel</PolicyListItem>
                  <PolicyListItem>廣告網路或追蹤 SDK</PolicyListItem>
                  <PolicyListItem>第三方雲端儲存或處理服務</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>您的內容絕不會與任何第三方分享或被任何第三方存取。</PolicyParagraph>

                <PolicyHeading>應用沙箱</PolicyHeading>
                <PolicyParagraph>LiquidBoard 在 iOS 嚴格的應用程式沙箱中運行。這意味著您裝置上的其他應用程式無法存取 LiquidBoard 的數據，且 LiquidBoard 無法存取屬於其他應用程式的資料（您透過鍵盤擴充功能明確貼上的內容除外）。</PolicyParagraph>

                <PolicyHeading>你的控制</PolicyHeading>
                <PolicyParagraph>您始終可以完全控制您的資料：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>從應用程式內啟用或停用 iCloud 同步</PolicyListItem>
                  <PolicyListItem>在 iOS 設定中撤銷照片庫存取權限</PolicyListItem>
                  <PolicyListItem>在設定 → 常規 → 鍵盤 → 鍵盤中停用鍵盤的完全存取權限</PolicyListItem>
                  <PolicyListItem>透過刪除應用程式刪除所有數據</PolicyListItem>
                </PolicyList>

                <PolicyHeading>接觸</PolicyHeading>
                <PolicyParagraph>如果您對資料安全有疑問，請透過以下方式與我們聯絡：<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>隱私權政策</PolicyHeading>
                <PolicyParagraph>最後更新：2026 年 6 月 5 日·LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard（「我們」、「我們的」或「應用程式」）致力於保護您的隱私。本隱私權政策解釋了當您使用 LiquidBoard 及其鍵盤擴充功能時我們如何處理資訊。</PolicyParagraph>

                <PolicyHeading>我們收集的數據</PolicyHeading>
                <PolicyParagraph>LiquidBoard 不會收集、儲存任何個人資料或將任何個人資料傳輸到外部伺服器。您在應用程式中建立的所有資料（包括文字片段、圖像、貼圖、類別和設定）均專門儲存在您的裝置或個人 iCloud 帳戶中。</PolicyParagraph>

                <PolicyHeading>照片和影像</PolicyHeading>
                <PolicyParagraph>LiquidBoard 可能會出於以下目的要求存取您的照片庫：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>將影像插入片段中</PolicyListItem>
                  <PolicyListItem>從您的照片建立自訂貼紙</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>您選擇的照片儲存在您的裝置本機和/或同步到您的個人 iCloud 帳戶。我們不會以任何方式上傳、傳輸或存取您的照片。照片庫存取僅在您明確選擇圖像時使用 - 該應用程式不會在背景存取您的照片庫。</PolicyParagraph>

                <PolicyHeading>貼紙</PolicyHeading>
                <PolicyParagraph>LiquidBoard 允許您：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>從您自己的照片建立自訂貼紙</PolicyListItem>
                  <PolicyListItem>透過鍵盤擴展插入貼紙</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>您根據照片建立的自訂貼圖僅儲存在您的裝置和/或 iCloud 上。沒有貼紙內容或圖像資料傳輸給我們。</PolicyParagraph>

                <PolicyHeading>鍵盤擴展和完全訪問</PolicyHeading>
                <PolicyParagraph>此鍵盤擴充功能不會收集、記錄或傳輸您鍵入的任何擊鍵資料或文字。</PolicyParagraph>
                <PolicyParagraph>LiquidBoard 的鍵盤擴充功能需要啟用完全存取權限才能：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>將圖像和貼紙貼到其他應用程式中</PolicyListItem>
                  <PolicyListItem>透過 iCloud 在您的裝置上同步您的片段和貼紙</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>完全存取權限僅用於這些功能。鍵盤不會記錄、記錄或傳輸您在任何其他應用程式中鍵入的任何內容。沒有資料發送到任何外部伺服器。</PolicyParagraph>

                <PolicyHeading>iCloud 同步</PolicyHeading>
                <PolicyParagraph>如果您選擇啟用 iCloud 同步，您的文字片段、圖像和貼圖將使用您的個人 Apple ID 透過 Apple 的 iCloud 基礎架構進行同步。此資料受 Apple 隱私權政策的約束。我們無權存取您的 iCloud 資料。</PolicyParagraph>

                <PolicyHeading>數據共享</PolicyHeading>
                <PolicyParagraph>我們不會向任何第三方出售、分享或揭露您的資料。我們不使用任何第三方分析、廣告 SDK 或追蹤工具。</PolicyParagraph>

                <PolicyHeading>資料保留和刪除</PolicyHeading>
                <PolicyParagraph>您的資料保留在您的裝置和/或 iCloud 帳戶上，並完全由您控制。您可以隨時透過以下方式刪除您的資料：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>刪除應用程式內的單一片段、圖像或貼紙</PolicyListItem>
                  <PolicyListItem>在「設定」→「隱私權」→「照片」中撤銷相簿存取權限</PolicyListItem>
                  <PolicyListItem>刪除應用程序，這會刪除所有本地存儲的數據</PolicyListItem>
                  <PolicyListItem>停用 iCloud 同步並從「設定」→「[您的名字]」→「iCloud」→「管理儲存」中刪除應用程式的 iCloud 數據</PolicyListItem>
                </PolicyList>

                <PolicyHeading>兒童隱私</PolicyHeading>
                <PolicyParagraph>LiquidBoard 不會故意收集 13 歲以下兒童的任何資訊。該應用程式不會收集任何用戶的個人資料。</PolicyParagraph>

                <PolicyHeading>本政策的變更</PolicyHeading>
                <PolicyParagraph>我們可能會不時更新本隱私權政策。任何更改都將反映在應用程式和我們的網站上，並附有更新日期。</PolicyParagraph>

                <PolicyHeading>接觸</PolicyHeading>
                <PolicyParagraph>如果您對本隱私權政策有任何疑問，請透過以下方式與我們聯絡：<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>使用條款</PolicyHeading>
                <PolicyParagraph>最後更新：2026 年 6 月 5 日·LiquidBoard</PolicyParagraph>
                <PolicyParagraph>下載、安裝或使用 LiquidBoard（「應用程式」），即表示您同意受本使用條款的約束。如果您不同意這些條款，請不要使用該應用程式。</PolicyParagraph>

                <PolicyHeading>執照</PolicyHeading>
                <PolicyParagraph>我們授予您有限的、非獨佔的、不可轉讓的、可撤銷的許可，允許您根據本條款將 LiquidBoard 用於個人、非商業目的。</PolicyParagraph>
                <PolicyParagraph>你不能：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>複製、修改或分發應用程式或其內容</PolicyListItem>
                  <PolicyListItem>逆向工程或嘗試提取原始程式碼</PolicyListItem>
                  <PolicyListItem>將應用程式用於任何非法或未經授權的目的</PolicyListItem>
                  <PolicyListItem>將應用程式的存取權限出售、再授權或轉讓給任何第三方</PolicyListItem>
                </PolicyList>

                <PolicyHeading>您的內容</PolicyHeading>
                <PolicyParagraph>您保留您創建或匯入 LiquidBoard 的所有文字片段、圖像和貼紙的完全所有權。我們不對您的內容主張任何權利。</PolicyParagraph>
                <PolicyParagraph>您全權負責確保您使用應用程式建立或貼上的內容不會侵犯任何第三方權利，包括版權、商標或隱私權。</PolicyParagraph>

                <PolicyHeading>可接受的使用</PolicyHeading>
                <PolicyParagraph>您同意不使用 LiquidBoard 建立、儲存或散佈以下內容：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>非法、有害、威脅或騷擾</PolicyListItem>
                  <PolicyListItem>侵害他人智慧財產權</PolicyListItem>
                  <PolicyListItem>包含惡意軟體、病毒或惡意程式碼</PolicyListItem>
                  <PolicyListItem>違反任何適用的當地、國家或國際法律</PolicyListItem>
                </PolicyList>

                <PolicyHeading>應用程式內購買</PolicyHeading>
                <PolicyParagraph>LiquidBoard 提供可選的應用程式內購買來解鎖附加功能或內容。所有購買均由 Apple 透過 App Store 處理，並受 Apple 銷售條款的約束。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>除非適用法律或 Apple 退款政策要求，否則購買的商品將不予退款</PolicyListItem>
                  <PolicyListItem>價格可能因地區而異，並以購買時的當地貨幣顯示</PolicyListItem>
                  <PolicyListItem>購買的功能與您的 Apple ID 綁定，可在使用相同 Apple ID 登入的任何裝置上恢復</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>如需申請退款，請直接聯絡 Apple：<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">報告問題.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>鍵盤擴展和完全訪問</PolicyHeading>
                <PolicyParagraph>需要啟用鍵盤擴充的完全存取權限才能將圖像和貼紙貼到其他應用程式並啟用 iCloud 同步。完全存取權限並不會授予我們存取您鍵入的任何內容的權限。</PolicyParagraph>
                <PolicyParagraph>您承認，透過啟用完全存取權限，iOS 將顯示系統通知，通知您鍵盤開發人員可能會存取您的輸入內容。我們要明確的是：LiquidBoard 不會收集、記錄或傳輸任何擊鍵資料。</PolicyParagraph>

                <PolicyHeading>iCloud 同步</PolicyHeading>
                <PolicyParagraph>iCloud 同步是一項可選功能，它使用您的個人 Apple iCloud 帳戶跨裝置同步資料。 iCloud 的使用須遵守 Apple 的條款和條件。對於因 iCloud 服務中斷而導致的任何資料遺失，我們不承擔任何責任。</PolicyParagraph>

                <PolicyHeading>免責聲明</PolicyHeading>
                <PolicyParagraph>LiquidBoard 以「現況」和「現有」提供，不提供任何明示或暗示的保證，包括但不限於適銷性、特定用途的適用性或不侵權的保證。</PolicyParagraph>
                <PolicyParagraph>我們不保證該應用程式不會中斷、沒有錯誤或沒有病毒或其他有害元件。</PolicyParagraph>

                <PolicyHeading>責任限制</PolicyHeading>
                <PolicyParagraph>在適用法律允許的最大範圍內，我們不對您使用或無法使用該應用程式而產生的任何間接、偶然、特殊、後果性或懲罰性損害承擔責任，包括但不限於資料遺失、利潤損失或商譽損失。</PolicyParagraph>

                <PolicyHeading>終止</PolicyHeading>
                <PolicyParagraph>對於我們認為違反這些條款或對其他使用者、我們或第三方有害的行為，我們保留隨時終止或限制您存取應用程式的權利，恕不另行通知。</PolicyParagraph>
                <PolicyParagraph>您可以隨時透過從裝置中刪除該應用程式來停止使用該應用程式。</PolicyParagraph>

                <PolicyHeading>這些條款的變更</PolicyHeading>
                <PolicyParagraph>我們可能會不時更新這些使用條款。在發布更改後繼續使用該應用程式即表示您接受修訂後的條款。我們將透過應用程式或我們的網站通知您重大變更。</PolicyParagraph>

                <PolicyHeading>適用法律</PolicyHeading>
                <PolicyParagraph>這些條款受開發商所在司法管轄區的法律管轄並依其解釋，不考慮法律衝突原則。</PolicyParagraph>

                <PolicyHeading>接觸</PolicyHeading>
                <PolicyParagraph>如果您對這些條款有任何疑問，請透過以下方式與我們聯絡：<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>付款及退費政策</PolicyHeading>
                <PolicyParagraph>最後更新：2026 年 6 月 5 日·LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard 提供可選的應用程式內購買來解鎖高級功能。所有付款均完全由 Apple 透過 App Store 處理—我們不會處理、儲存或存取您的付款資訊。</PolicyParagraph>

                <PolicyHeading>您可以購買什麼</PolicyHeading>
                <PolicyParagraph>LiquidBoard 提供以下可選購：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>高級功能 - 一次性或訂閱解鎖高級應用程式功能</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>購買時，可用的購買和定價會顯示在應用程式中。價格可能因地區而異，並以您當地的貨幣顯示。</PolicyParagraph>

                <PolicyHeading>付款處理</PolicyHeading>
                <PolicyParagraph>所有交易均由 Apple 安全處理。我們絕不會查看或儲存您的信用卡、帳單地址或任何付款詳細資料。</PolicyParagraph>
                <PolicyParagraph>完成購買即表示您同意 Apple 的 App Store 銷售條款。您在 Apple 備案的付款方式將在確認購買時收取。</PolicyParagraph>

                <PolicyHeading>恢復購買</PolicyHeading>
                <PolicyParagraph>如果您重新安裝 LiquidBoard 或切換到新設備，您可以使用應用程式中的「恢復購買」選項免費恢復所有先前的購買。購買與您的 Apple ID 綁定，並且可以在使用相同帳戶登入的所有裝置上使用。</PolicyParagraph>

                <PolicyHeading>訂閱</PolicyHeading>
                <PolicyParagraph>如果 LiquidBoard 提供訂閱制的購買：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>除非在當前計費週期結束前至少 24 小時取消，否則訂閱將自動續訂</PolicyListItem>
                  <PolicyListItem>您的 Apple ID 將在當前期限結束前 24 小時內收取續約費用</PolicyListItem>
                  <PolicyListItem>您可以隨時在「設定」→「[您的姓名]」→「訂閱」中管理或取消訂閱</PolicyListItem>
                  <PolicyListItem>取消訂閱將在當前付費期結束時生效 - 在此之前您仍保留存取權限</PolicyListItem>
                  <PolicyListItem>免費試用期（如果提供）將轉換為付費訂閱，除非在試用結束前取消</PolicyListItem>
                </PolicyList>

                <PolicyHeading>退款政策</PolicyHeading>
                <PolicyParagraph>我們不直接處理退款。所有退款請求都必須提交給 Apple，因為他們是所有 App Store 交易的記錄商家。</PolicyParagraph>
                <PolicyParagraph>Apple 根據其退款政策自行決定處理退款。常見的符合條件的情況包括意外購買、未經授權的收費或購買後的功能與描述不符。</PolicyParagraph>
                <PolicyParagraph>若要向 Apple 申請退款：</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>前往<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">報告問題.apple.com</PolicyLink>並使用您的 Apple ID 登錄</PolicyListItem>
                  <PolicyListItem>找到 LiquidBoard 購買並點擊報告問題</PolicyListItem>
                  <PolicyListItem>選擇原因並提交您的請求</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple 通常會在幾個工作天內回應。退款決定僅由 Apple 做出。</PolicyParagraph>

                <PolicyHeading>價格變動</PolicyHeading>
                <PolicyParagraph>我們保留隨時更改應用程式內購買定價的權利。訂閱的價格變更將透過 App 或 App Store 提前傳達，並將在下一個計費週期開始時生效。在任何訂閱價格變更生效之前，Apple 都會通知您。</PolicyParagraph>

                <PolicyHeading>購買失敗或不完整</PolicyHeading>
                <PolicyParagraph>如果購買失敗或您被收費但沒有收到內容，請先嘗試在應用程式內恢復購買。如果問題仍然存在，請透過以下方式聯絡我們：<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>我們將及時進行調查。</PolicyParagraph>

                <PolicyHeading>接觸</PolicyHeading>
                <PolicyParagraph>對於計費問題或購買問題，請透過以下方式與我們聯絡：<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>如需退款，請使用Apple官方管道：<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">報告問題.apple.com</PolicyLink></PolicyParagraph>
  </>
);
