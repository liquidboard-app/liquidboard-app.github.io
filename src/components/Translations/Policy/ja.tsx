import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>データセキュリティポリシー</PolicyHeading>
                <PolicyParagraph>最終更新日: 2026 年 6 月 5 日 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard はプライバシー最優先のアプローチで設計されています。 iCloud 同期を明示的に有効にすることを選択しない限り、データがデバイスの外に流出することはありません。私たちにはサーバーもアカウントもなく、あなたのコンテンツへのアクセスもありません。</PolicyParagraph>

                <PolicyHeading>データストレージ</PolicyHeading>
                <PolicyParagraph>LiquidBoard で作成したすべてのコンテンツ (テキスト スニペット、画像、ステッカー) は、次の 2 つの場所のいずれかに保存されます。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>オンデバイスストレージ</PolicyEmphasis>— iOS によって管理され、LiquidBoard のみがアクセスできます。他のアプリはデータを読み取ることができません。</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (オプション)</PolicyEmphasis>— Apple の暗号化された CloudKit インフラストラクチャを使用して、個人の Apple ID を通じて同期されます。</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>当社のサーバーにはデータは保存されません。当社はバックエンドインフラストラクチャを一切運用していません。</PolicyParagraph>

                <PolicyHeading>暗号化</PolicyHeading>
                <PolicyParagraph>データは iOS と Apple のセキュリティ層によって保護されています。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>休息中</PolicyEmphasis>— デバイスに保存されているデータは、デバイスのパスコードと Secure Enclave を使用して iOS によって暗号化されます。</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>輸送中</PolicyEmphasis>— iCloud 同期が有効になっている場合、データは送信前に Apple の CloudKit によって暗号化されます。</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloudバックアップ</PolicyEmphasis>— デバイスが iCloud にバックアップされている場合、アプリのデータは Apple の暗号化されたバックアップ システムに含まれます。</PolicyListItem>
                </PolicyList>

                <PolicyHeading>写真と画像のセキュリティ</PolicyHeading>
                <PolicyParagraph>LiquidBoard は、写真の選択またはインポートを明示的に選択した場合にのみ、写真ライブラリにアクセスします。アプリ:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>バックグラウンドで写真ライブラリにアクセスしません</PolicyListItem>
                  <PolicyListItem>写真をサーバーにアップロードしません</PolicyListItem>
                  <PolicyListItem>選択した画像をアプリのサンドボックスコンテナにローカルに保存します</PolicyListItem>
                  <PolicyListItem>ステッカーの作成を完全にデバイス上で処理します</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>写真へのアクセスは、[設定] → [プライバシーとセキュリティ] → [写真]でいつでも取り消すことができます。</PolicyParagraph>

                <PolicyHeading>キーボード拡張セキュリティ</PolicyHeading>
                <PolicyParagraph>キーボード拡張機能は、他のアプリで入力したキーストローク データやテキストを収集、記録、送信しません。</PolicyParagraph>
                <PolicyParagraph>キーボード拡張機能で画像やステッカーを貼り付けたり、iCloud 同期にアクセスしたりするには、フルアクセスが必要です。フルアクセスが有効になっている場合でも、キーボード拡張機能は完全に iOS のサンドボックス環境内で動作します。外部サーバーにデータを送信する機能はありません。</PolicyParagraph>

                <PolicyHeading>サードパーティのデータアクセスなし</PolicyHeading>
                <PolicyParagraph>LiquidBoard には次のいずれも統合されていません。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Firebase や Mixpanel などの分析またはクラッシュ レポート SDK</PolicyListItem>
                  <PolicyListItem>広告ネットワークまたはトラッキング SDK</PolicyListItem>
                  <PolicyListItem>サードパーティのクラウド ストレージまたは処理サービス</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>あなたのコンテンツが第三者と共有されたり、第三者がアクセスしたりすることはありません。</PolicyParagraph>

                <PolicyHeading>アプリサンドボックス</PolicyHeading>
                <PolicyParagraph>LiquidBoard は、iOS の厳密なアプリ サンドボックスで実行されます。つまり、デバイス上の他のアプリは LiquidBoard のデータにアクセスできず、LiquidBoard はキーボード拡張機能を介して明示的に貼り付けたコンテンツを除き、他のアプリに属するデータにアクセスできません。</PolicyParagraph>

                <PolicyHeading>あなたのコントロール</PolicyHeading>
                <PolicyParagraph>いつでもデータを完全に制御できます。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>アプリ内から iCloud 同期を有効または無効にする</PolicyListItem>
                  <PolicyListItem>iOS 設定で写真ライブラリへのアクセスを取り消す</PolicyListItem>
                  <PolicyListItem>「設定」→「一般」→「キーボード」→「キーボード」でキーボードのフルアクセスを無効にします。</PolicyListItem>
                  <PolicyListItem>アプリを削除するとすべてのデータが削除されます</PolicyListItem>
                </PolicyList>

                <PolicyHeading>接触</PolicyHeading>
                <PolicyParagraph>データのセキュリティについてご質問がある場合は、次のアドレスまでお問い合わせください。<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>プライバシーポリシー</PolicyHeading>
                <PolicyParagraph>最終更新日: 2026 年 6 月 5 日 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard (「当社」、「当社の」または「アプリ」) は、お客様のプライバシーの保護に取り組んでいます。このプライバシー ポリシーでは、LiquidBoard とそのキーボード拡張機能を使用する際の情報の取り扱い方法について説明します。</PolicyParagraph>

                <PolicyHeading>当社が収集するデータ</PolicyHeading>
                <PolicyParagraph>LiquidBoard は、個人データを収集、保存または外部サーバーに送信することはありません。アプリ内で作成したすべてのデータ (テキスト スニペット、画像、ステッカー、カテゴリ、設定など) は、デバイスまたは個人の iCloud アカウントにのみ保存されます。</PolicyParagraph>

                <PolicyHeading>写真と画像</PolicyHeading>
                <PolicyParagraph>LiquidBoard は、次の目的で写真ライブラリへのアクセスを要求する場合があります。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>スニペットに画像を挿入する</PolicyListItem>
                  <PolicyListItem>写真からカスタムステッカーを作成する</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>選択した写真は、デバイス上にローカルに保存されるか、個人の iCloud アカウントに同期されます。私たちはいかなる方法でもあなたの写真をアップロード、送信またはアクセスすることはありません。写真ライブラリへのアクセスは、画像を明示的に選択した瞬間にのみ使用されます。アプリはバックグラウンドでライブラリにアクセスしません。</PolicyParagraph>

                <PolicyHeading>ステッカー</PolicyHeading>
                <PolicyParagraph>LiquidBoard を使用すると、次のことが可能になります。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>自分の写真からカスタムステッカーを作成</PolicyListItem>
                  <PolicyListItem>キーボード拡張機能を使用してステッカーを挿入します</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>写真から作成したカスタム ステッカーは、デバイスおよび/または iCloud にのみ保存されます。ステッカーの内容や画像データは当社に送信されません。</PolicyParagraph>

                <PolicyHeading>キーボード拡張とフルアクセス</PolicyHeading>
                <PolicyParagraph>このキーボード拡張機能は、入力したキーストローク データやテキストを収集、記録、送信しません。</PolicyParagraph>
                <PolicyParagraph>LiquidBoard のキーボード拡張機能では、次のことを行うためにフル アクセスを有効にする必要があります。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>画像やステッカーを他のアプリに貼り付ける</PolicyListItem>
                  <PolicyListItem>iCloud を介してデバイス間でスニペットとステッカーを同期します</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>フル アクセスは、これらの機能にのみ使用されます。キーボードは、他のアプリで入力した内容をログ、記録、送信することはありません。データは外部サーバーに送信されません。</PolicyParagraph>

                <PolicyHeading>iCloud同期</PolicyHeading>
                <PolicyParagraph>iCloud 同期を有効にすることを選択した場合、テキスト スニペット、画像、ステッカーは、個人の Apple ID を使用して Apple の iCloud インフラストラクチャを通じて同期されます。このデータは Apple のプライバシー ポリシーによって管理されます。私たちはあなたの iCloud データにアクセスできません。</PolicyParagraph>

                <PolicyHeading>データ共有</PolicyHeading>
                <PolicyParagraph>当社はお客様のデータを第三者に販売、共有、開示することはありません。当社は、サードパーティの分析、広告 SDKまたは追跡ツールを使用しません。</PolicyParagraph>

                <PolicyHeading>データの保持と削除</PolicyHeading>
                <PolicyParagraph>お客様のデータはデバイスや iCloud アカウントに残り、完全にお客様の管理下にあります。データはいつでも次の方法で削除できます。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>アプリ内の個々のスニペット、画像またはステッカーを削除する</PolicyListItem>
                  <PolicyListItem>「設定」→「プライバシー」→「写真」でフォトライブラリへのアクセスを取り消す</PolicyListItem>
                  <PolicyListItem>アプリを削除すると、ローカルに保存されているデータがすべて削除されます</PolicyListItem>
                  <PolicyListItem>iCloud同期を無効にし、設定→[あなたの名前]→iCloud→ストレージの管理からアプリのiCloudデータを削除します</PolicyListItem>
                </PolicyList>

                <PolicyHeading>子供のプライバシー</PolicyHeading>
                <PolicyParagraph>LiquidBoard は、13 歳未満の子供から故意に情報を収集することはありません。アプリは、ユーザーから個人データを収集しません。</PolicyParagraph>

                <PolicyHeading>このポリシーの変更</PolicyHeading>
                <PolicyParagraph>当社は、このプライバシー ポリシーを随時更新することがあります。変更はアプリと当社のウェブサイトに反映され、日付が更新されます。</PolicyParagraph>

                <PolicyHeading>接触</PolicyHeading>
                <PolicyParagraph>このプライバシー ポリシーについてご質問がある場合は、以下までお問い合わせください。<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>利用規約</PolicyHeading>
                <PolicyParagraph>最終更新日: 2026 年 6 月 5 日 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard (「アプリ」) をダウンロード、インストールまたは使用すると、これらの利用規約に拘束されることに同意したものとみなされます。これらの規約に同意できない場合は、アプリを使用しないでください。</PolicyParagraph>

                <PolicyHeading>ライセンス</PolicyHeading>
                <PolicyParagraph>当社は、本規約に従い、個人的、非商業目的で LiquidBoard を使用するための限定的、非独占的、譲渡不可、取消可能なライセンスを付与します。</PolicyParagraph>
                <PolicyParagraph>次のことは禁止されています:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>アプリまたはそのコンテンツをコピー、変更、配布すること</PolicyListItem>
                  <PolicyListItem>リバースエンジニアリングまたはソースコードの抽出を試みる</PolicyListItem>
                  <PolicyListItem>違法または無許可の目的でアプリを使用する</PolicyListItem>
                  <PolicyListItem>アプリへのアクセスを第三者に販売、サブライセンスまたは譲渡すること</PolicyListItem>
                </PolicyList>

                <PolicyHeading>あなたのコンテンツ</PolicyHeading>
                <PolicyParagraph>あなたは、作成または LiquidBoard にインポートしたすべてのテキスト スニペット、画像、ステッカーの完全な所有権を保持します。当社はあなたのコンテンツに対するいかなる権利も主張しません。</PolicyParagraph>
                <PolicyParagraph>アプリを使用して作成または貼り付けたコンテンツが、著作権、商標、プライバシー権を含む第三者の権利を侵害していないことを確認することは、お客様が単独で責任を負います。</PolicyParagraph>

                <PolicyHeading>許容される使用方法</PolicyHeading>
                <PolicyParagraph>お客様は、LiquidBoard を使用して次のようなコンテンツを作成、保存または配布しないことに同意するものとします。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>違法、有害、脅迫的または嫌がらせ的なものである</PolicyListItem>
                  <PolicyListItem>他人の知的財産権を侵害するもの</PolicyListItem>
                  <PolicyListItem>マルウェア、ウイルスまたは悪意のあるコードが含まれている</PolicyListItem>
                  <PolicyListItem>適用される現地法、国内法または国際法に違反する</PolicyListItem>
                </PolicyList>

                <PolicyHeading>アプリ内購入</PolicyHeading>
                <PolicyParagraph>LiquidBoard は、追加の機能やコンテンツのロックを解除するためのオプションのアプリ内購入を提供します。すべての購入は Apple によって App Store を通じて処理され、Apple の販売条件が適用されます。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>適用される法律または Apple の返金ポリシーで要求される場合を除き、購入した商品は返金できません。</PolicyListItem>
                  <PolicyListItem>価格は地域によって異なる場合があり、購入時には現地通貨で表示されます</PolicyListItem>
                  <PolicyListItem>購入した機能は Apple ID に関連付けられており、同じ Apple ID でサインインしているどのデバイスでも復元できます</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>返金をリクエストするには、Apple に直接お問い合わせください。<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>キーボード拡張とフルアクセス</PolicyHeading>
                <PolicyParagraph>画像やステッカーを他のアプリに貼り付けたり、iCloud 同期を有効にしたりするには、キーボード拡張機能のフルアクセスを有効にする必要があります。フルアクセスでは、入力した内容へのアクセスが許可されるわけではありません。</PolicyParagraph>
                <PolicyParagraph>フル アクセスを有効にすると、キーボード開発者があなたの入力にアクセスする可能性があることを通知するシステム通知が iOS に表示されることをお客様は認めます。明確にしておきたいのですが、LiquidBoard はキーストローク データを収集、記録、送信しません。</PolicyParagraph>

                <PolicyHeading>iCloud同期</PolicyHeading>
                <PolicyParagraph>iCloud 同期は、個人の Apple iCloud アカウントを使用してデバイス間でデータを同期するオプション機能です。 iCloud の使用には Apple の利用規約が適用されます。 iCloud サービスの中断によるデータ損失については、当社は責任を負いません。</PolicyParagraph>

                <PolicyHeading>保証の否認</PolicyHeading>
                <PolicyParagraph>LiquidBoard は、商品性、特定の目的への適合性、非侵害の保証を含むがこれらに限定されない、明示的か黙示的かを問わず、いかなる種類の保証もなく、「現状のまま」および「利用可能な状態」で提供されます。</PolicyParagraph>
                <PolicyParagraph>当社は、アプリが中断されないこと、エラーがないことまたはウイルスやその他の有害なコンポーネントがないことを保証しません。</PolicyParagraph>

                <PolicyHeading>責任の制限</PolicyHeading>
                <PolicyParagraph>適用される法律で許可される最大限の範囲で、当社は、お客様によるアプリの使用または使用不能から生じる、データの損失、利益の損失または信用の損失を含むがこれらに限定されない、間接的、偶発的、特別、結果的または懲罰的損害に対して責任を負わないものとします。</PolicyParagraph>

                <PolicyHeading>終了</PolicyHeading>
                <PolicyParagraph>当社は、本規約に違反するまたは他のユーザー、当社または第三者に有害であると当社が判断する行為に対して、通知なしにいつでもアプリへのアクセスを終了または制限する権利を留保します。</PolicyParagraph>
                <PolicyParagraph>アプリをデバイスから削除することで、いつでもアプリの使用を停止できます。</PolicyParagraph>

                <PolicyHeading>本規約の変更</PolicyHeading>
                <PolicyParagraph>当社は、本利用規約を随時更新することがあります。変更が投稿された後もアプリを継続して使用すると、改訂された規約に同意したことになります。重要な変更については、アプリまたはウェブサイトを通じてお知らせします。</PolicyParagraph>

                <PolicyHeading>準拠法</PolicyHeading>
                <PolicyParagraph>これらの規約は、法の抵触の原則に関係なく、開発者が本拠を置く管轄区の法律に準拠し、それに従って解釈されます。</PolicyParagraph>

                <PolicyHeading>接触</PolicyHeading>
                <PolicyParagraph>これらの規約についてご質問がある場合は、以下までお問い合わせください。<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>支払いと返金ポリシー</PolicyHeading>
                <PolicyParagraph>最終更新日: 2026 年 6 月 5 日 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard は、プレミアム機能のロックを解除するためのオプションのアプリ内購入を提供します。すべての支払いは App Store を通じて Apple によって完全に処理されます。当社はお客様の支払い情報を処理、保存またはアクセスすることはありません。</PolicyParagraph>

                <PolicyHeading>購入できるもの</PolicyHeading>
                <PolicyParagraph>LiquidBoard では、次のオプションの購入が可能です。</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>プレミアム機能 — 高度なアプリ機能を 1 回限りまたはサブスクリプションでロック解除します</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>購入可能な商品と価格は、購入時にアプリ内に表示されます。価格は地域によって異なる場合があり、現地通貨で表示されます。</PolicyParagraph>

                <PolicyHeading>支払い処理</PolicyHeading>
                <PolicyParagraph>すべての取引は Apple によって安全に処理されます。当社がお客様のクレジット カード、請求先住所、支払いの詳細を閲覧したり保存したりすることはありません。</PolicyParagraph>
                <PolicyParagraph>購入を完了すると、Apple の App Store 販売条件に同意したことになります。 Apple に登録されているお支払い方法は、購入確認時に請求されます。</PolicyParagraph>

                <PolicyHeading>購入の復元</PolicyHeading>
                <PolicyParagraph>LiquidBoard を再インストールするか、新しいデバイスに切り替える場合は、アプリ内の [購入を復元] オプションを使用して、追加費用なしで以前の購入をすべて復元できます。購入は Apple ID に関連付けられており、同じアカウントでサインインしているすべてのデバイスで利用できます。</PolicyParagraph>

                <PolicyHeading>定期購入</PolicyHeading>
                <PolicyParagraph>LiquidBoard がサブスクリプションベースの購入を提供する場合:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>現在の請求期間が終了する少なくとも 24 時間前にキャンセルしない限り、サブスクリプションは自動的に更新されます</PolicyListItem>
                  <PolicyListItem>現在の期間が終了する 24 時間以内に、Apple ID に更新料金が請求されます。</PolicyListItem>
                  <PolicyListItem>設定 → [あなたの名前] → 定期購入でいつでも定期購入を管理またはキャンセルできます。</PolicyListItem>
                  <PolicyListItem>サブスクリプションのキャンセルは、現在の支払い期間の終了時に有効になります。それまではアクセスを保持します。</PolicyListItem>
                  <PolicyListItem>無料試用期間が提供されている場合、試用期間が終了する前にキャンセルしない限り、有料サブスクリプションに変換されます</PolicyListItem>
                </PolicyList>

                <PolicyHeading>返金ポリシー</PolicyHeading>
                <PolicyParagraph>弊社では直接返金処理は行っておりません。 Apple はすべての App Store 取引の記録販売者であるため、すべての返金リクエストは Apple に提出する必要があります。</PolicyParagraph>
                <PolicyParagraph>Apple は、返金ポリシーに従って独自の裁量で返金を処理します。対象となる一般的なケースには、誤った購入、不正な請求、説明どおりに機能しなかった購入などが含まれます。</PolicyParagraph>
                <PolicyParagraph>Apple に返金をリクエストするには:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>に行く<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>Apple IDでサインインしてください</PolicyListItem>
                  <PolicyListItem>LiquidBoard の購入を見つけて、「問題を報告」をタップします</PolicyListItem>
                  <PolicyListItem>理由を選択してリクエストを送信してください</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple は通常、数営業日以内に返答します。払い戻しの決定は Apple によってのみ行われます。</PolicyParagraph>

                <PolicyHeading>価格変更</PolicyHeading>
                <PolicyParagraph>当社は、アプリ内購入の価格をいつでも変更する権利を留保します。サブスクリプションの価格変更は、App または App Store を通じて事前に通知され、次の請求サイクルの開始時に有効になります。サブスクリプション価格の変更が有効になる前に、Apple から通知されます。</PolicyParagraph>

                <PolicyHeading>失敗した購入または不完全な購入</PolicyHeading>
                <PolicyParagraph>購入が失敗した場合または請求されたにもかかわらずコンテンツを受け取っていない場合は、まずアプリ内で購入を復元してみてください。問題が解決しない場合は、次のアドレスまでご連絡ください。<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>速やかに調査させていただきます。</PolicyParagraph>

                <PolicyHeading>接触</PolicyHeading>
                <PolicyParagraph>請求に関するご質問や購入に関する問題については、次のアドレスまでお問い合わせください。<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>払い戻しについては、Apple の公式チャネルをご利用ください。<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
