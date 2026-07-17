export const Security = () => (
  <>
    <h2>数据安全政策</h2>
    <p>最后更新：2026 年 6 月 5 日 · LiquidBoard</p>
    <p>LiquidBoard 采用隐私优先的设计。除非你明确选择启用 iCloud 同步，否则数据绝不会离开你的设备。我们没有服务器、不要求账户，也无法访问你的内容。</p>

    <h2>数据存储</h2>
    <p>你在 LiquidBoard 中创建的所有内容，包括文本片段、图片和贴纸，只会存储在以下两个位置之一：</p>
    <ul>
      <li><strong>设备本地存储</strong> — 由 iOS 管理，且仅 LiquidBoard 可以访问。其他 App 无法读取你的数据。</li>
      <li><strong>iCloud（可选）</strong> — 使用 Apple 加密的 CloudKit 基础设施，通过你的个人 Apple ID 进行同步。</li>
    </ul>
    <p>我们的服务器不会存储任何数据；我们也不运营任何后端基础设施。</p>

    <h2>加密</h2>
    <p>你的数据受到 iOS 和 Apple 安全机制的保护：</p>
    <ul>
      <li><strong>静态数据</strong> — iOS 使用设备密码和安全隔区对存储在设备上的数据进行加密。</li>
      <li><strong>传输中的数据</strong> — 如果启用 iCloud 同步，数据会在传输前由 Apple CloudKit 加密。</li>
      <li><strong>iCloud 备份</strong> — 如果设备备份到 iCloud，App 数据将包含在 Apple 的加密备份系统中。</li>
    </ul>

    <h2>照片与图片安全</h2>
    <p>只有当你明确选择照片或导入照片时，LiquidBoard 才会访问你的照片图库。本 App：</p>
    <ul>
      <li>不会在后台访问照片图库</li>
      <li>不会将照片上传到任何服务器</li>
      <li>将所选图片保存在 App 的本地沙盒容器中</li>
      <li>完全在设备上处理贴纸创建</li>
    </ul>
    <p>你可以随时在“设置”→“隐私与安全性”→“照片”中撤销照片访问权限。</p>

    <h2>键盘扩展安全</h2>
    <p>键盘扩展不会收集、记录或传输你在其他 App 中输入的任何按键数据或文本。</p>
    <p>键盘扩展需要“完全访问”权限才能粘贴图片和贴纸，以及使用 iCloud 同步。即使启用“完全访问”，键盘扩展仍完全运行在 iOS 沙盒环境中，无法向外部服务器发送数据。</p>

    <h2>无第三方数据访问</h2>
    <p>LiquidBoard 不集成以下任何服务：</p>
    <ul>
      <li>Firebase、Mixpanel 等分析或崩溃报告 SDK</li>
      <li>广告网络或跟踪 SDK</li>
      <li>第三方云存储或处理服务</li>
    </ul>
    <p>你的内容绝不会与任何第三方共享，任何第三方也无法访问这些内容。</p>

    <h2>App 沙盒</h2>
    <p>LiquidBoard 运行在 iOS 严格的 App 沙盒中。这意味着设备上的其他 App 无法访问 LiquidBoard 的数据，LiquidBoard 也无法访问属于其他 App 的数据，但你通过键盘扩展明确粘贴的内容除外。</p>

    <h2>由你掌控</h2>
    <p>你始终可以完全控制自己的数据：</p>
    <ul>
      <li>在 App 内启用或停用 iCloud 同步</li>
      <li>在 iOS 设置中撤销照片图库访问权限</li>
      <li>在“设置”→“通用”→“键盘”→“键盘”中关闭键盘的“完全访问”权限</li>
      <li>通过删除 App 来删除所有数据</li>
    </ul>

    <h2>联系我们</h2>
    <p>如果你对数据安全有任何疑问，请通过以下邮箱联系我们：<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Privacy = () => (
  <>
    <h2>隐私政策</h2>
    <p>最后更新：2026 年 6 月 5 日 · LiquidBoard</p>
    <p>LiquidBoard（以下简称“我们”或“本 App”）致力于保护你的隐私。本隐私政策说明你使用 LiquidBoard 及其键盘扩展时，我们如何处理相关信息。</p>

    <h2>我们收集的数据</h2>
    <p>LiquidBoard 不会收集、存储任何个人数据，也不会将个人数据传输到外部服务器。你在 App 中创建的所有数据，包括文本片段、图片、贴纸、分类和设置，只会存储在你的设备或个人 iCloud 账户中。</p>

    <h2>照片与图片</h2>
    <p>LiquidBoard 可能会出于以下目的请求访问你的照片图库：</p>
    <ul>
      <li>将图片插入你的内容片段</li>
      <li>使用你的照片创建自定义贴纸</li>
    </ul>
    <p>你选择的照片会保存在设备本地和/或同步到你的个人 iCloud 账户。我们不会以任何方式上传、传输或访问你的照片。只有当你明确选择图片时才会使用照片图库权限；本 App 不会在后台访问照片图库。</p>

    <h2>贴纸</h2>
    <p>LiquidBoard 允许你：</p>
    <ul>
      <li>使用自己的照片创建自定义贴纸</li>
      <li>通过键盘扩展插入贴纸</li>
    </ul>
    <p>你使用照片创建的自定义贴纸只会存储在设备和/或 iCloud 中。我们不会收到任何贴纸内容或图片数据。</p>

    <h2>键盘扩展与“完全访问”</h2>
    <p>键盘扩展不会收集、记录或传输你输入的任何按键数据或文本。</p>
    <p>LiquidBoard 键盘扩展需要启用“完全访问”权限，以便：</p>
    <ul>
      <li>将图片和贴纸粘贴到其他 App</li>
      <li>通过 iCloud 在你的设备之间同步文本片段和贴纸</li>
    </ul>
    <p>“完全访问”权限仅用于这些功能。键盘不会记录或传输你在其他任何 App 中输入的内容，也不会将数据发送到任何外部服务器。</p>

    <h2>iCloud 同步</h2>
    <p>如果你选择启用 iCloud 同步，文本片段、图片和贴纸将使用你的个人 Apple ID，通过 Apple 的 iCloud 基础设施同步。相关数据受 Apple 隐私政策约束。我们无法访问你的 iCloud 数据。</p>

    <h2>数据共享</h2>
    <p>我们不会向任何第三方出售、分享或披露你的数据，也不使用任何第三方分析工具、广告 SDK 或跟踪工具。</p>

    <h2>数据保留与删除</h2>
    <p>你的数据保存在设备和/或 iCloud 账户中，并完全由你掌控。你可以随时通过以下方式删除数据：</p>
    <ul>
      <li>在 App 内删除单个文本片段、图片或贴纸</li>
      <li>在“设置”→“隐私”→“照片”中撤销照片图库访问权限</li>
      <li>删除 App，从而移除所有本地存储的数据</li>
      <li>关闭 iCloud 同步，并在“设置”→“[你的姓名]”→“iCloud”→“管理储存空间”中移除本 App 的 iCloud 数据</li>
    </ul>

    <h2>儿童隐私</h2>
    <p>LiquidBoard 不会有意收集 13 岁以下儿童的任何信息。本 App 不会收集任何用户的个人数据。</p>

    <h2>本政策的变更</h2>
    <p>我们可能会不时更新本隐私政策。任何变更都会在 App 和网站上展示，并注明新的更新日期。</p>

    <h2>联系我们</h2>
    <p>如果你对本隐私政策有任何疑问，请通过以下邮箱联系我们：<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Terms = () => (
  <>
    <h2>使用条款</h2>
    <p>最后更新：2026 年 6 月 5 日 · LiquidBoard</p>
    <p>下载、安装或使用 LiquidBoard（以下简称“本 App”），即表示你同意受本使用条款约束。如果你不同意这些条款，请勿使用本 App。</p>

    <h2>许可</h2>
    <p>在遵守本条款的前提下，我们授予你有限、非独占、不可转让且可撤销的许可，允许你将 LiquidBoard 用于个人、非商业目的。</p>
    <p>你不得：</p>
    <ul>
      <li>复制、修改或分发本 App 或其内容</li>
      <li>对本 App 进行逆向工程或尝试提取源代码</li>
      <li>将本 App 用于任何非法或未经授权的目的</li>
      <li>向任何第三方出售、再许可或转让本 App 的访问权</li>
    </ul>

    <h2>你的内容</h2>
    <p>你对自己创建或导入 LiquidBoard 的所有文本片段、图片和贴纸保留完整所有权。我们不会对你的内容主张任何权利。</p>
    <p>你有责任确保使用本 App 创建或粘贴的内容不会侵犯任何第三方权利，包括版权、商标权或隐私权。</p>

    <h2>可接受的使用方式</h2>
    <p>你同意不使用 LiquidBoard 创建、存储或分发以下内容：</p>
    <ul>
      <li>非法、有害、威胁性或骚扰性内容</li>
      <li>侵犯他人知识产权的内容</li>
      <li>包含恶意软件、病毒或恶意代码的内容</li>
      <li>违反任何适用的当地、国家或国际法律的内容</li>
    </ul>

    <h2>App 内购买</h2>
    <p>LiquidBoard 提供可选的 App 内购买，用于解锁其他功能或内容。所有购买均由 Apple 通过 App Store 处理，并受 Apple 销售条款约束。</p>
    <ul>
      <li>除非适用法律或 Apple 退款政策另有要求，否则购买项目不可退款</li>
      <li>价格可能因地区而异，并在购买时以当地货币显示</li>
      <li>已购功能与 Apple ID 绑定，可在使用同一 Apple ID 登录的任何设备上恢复</li>
    </ul>
    <p>如需申请退款，请直接通过 Apple 的 <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a> 提交。</p>

    <h2>键盘扩展与“完全访问”</h2>
    <p>键盘扩展需要启用“完全访问”权限，才能将图片和贴纸粘贴到其他 App，并启用 iCloud 同步。“完全访问”不会授予我们访问你所输入内容的权限。</p>
    <p>你确认，启用“完全访问”后，iOS 会显示系统提示，说明键盘开发者可能访问你的输入内容。我们在此明确说明：LiquidBoard 不会收集、记录或传输任何按键数据。</p>

    <h2>iCloud 同步</h2>
    <p>iCloud 同步是一项可选功能，使用你的个人 Apple iCloud 账户在设备之间同步数据。使用 iCloud 须遵守 Apple 的条款与条件。对于因 iCloud 服务中断造成的数据丢失，我们不承担责任。</p>

    <h2>免责声明</h2>
    <p>LiquidBoard 按“现状”和“可用状态”提供，不作任何明示或暗示的保证，包括但不限于适销性、特定用途适用性或不侵权保证。</p>
    <p>我们不保证本 App 不会中断、没有错误，或不含病毒及其他有害组件。</p>

    <h2>责任限制</h2>
    <p>在适用法律允许的最大范围内，对于因你使用或无法使用本 App 而产生的任何间接、附带、特殊、后果性或惩罚性损害，包括但不限于数据丢失、利润损失或商誉损失，我们不承担责任。</p>

    <h2>终止</h2>
    <p>如果我们认为你的行为违反本条款，或会对其他用户、我们或第三方造成损害，我们保留随时终止或限制你访问本 App 的权利，且无需事先通知。</p>
    <p>你可以随时从设备中删除本 App 并停止使用。</p>

    <h2>本条款的变更</h2>
    <p>我们可能会不时更新本使用条款。在变更发布后继续使用本 App，即表示你接受修订后的条款。重大变更将通过 App 或网站通知。</p>

    <h2>适用法律</h2>
    <p>本条款受开发者所在地司法管辖区的法律管辖并据其解释，不适用法律冲突原则。</p>

    <h2>联系我们</h2>
    <p>如果你对本条款有任何疑问，请通过以下邮箱联系我们：<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Payment = () => (
  <>
    <h2>付款与退款政策</h2>
    <p>最后更新：2026 年 6 月 5 日 · LiquidBoard</p>
    <p>LiquidBoard 提供可选的 App 内购买以解锁高级功能。所有付款均完全由 Apple 通过 App Store 处理；我们不会处理、存储或访问你的付款信息。</p>

    <h2>可购买的项目</h2>
    <p>LiquidBoard 提供以下可选购买项目：</p>
    <ul>
      <li>高级功能 — 通过一次性购买或订阅解锁 App 的高级功能</li>
    </ul>
    <p>可购买项目和价格会在购买时显示于 App 内。价格可能因地区而异，并以当地货币显示。</p>

    <h2>付款处理</h2>
    <p>所有交易均由 Apple 安全处理。我们绝不会查看或存储你的信用卡、账单地址或任何付款信息。</p>
    <p>完成购买即表示你同意 Apple 的 App Store 销售条款。确认购买时，Apple 会从你登记的付款方式中扣款。</p>

    <h2>恢复购买</h2>
    <p>如果重新安装 LiquidBoard 或更换设备，可以使用 App 内的“恢复购买”选项免费恢复所有先前购买。购买项目与 Apple ID 绑定，可在使用同一账户登录的所有设备上使用。</p>

    <h2>订阅</h2>
    <p>如果 LiquidBoard 提供订阅购买：</p>
    <ul>
      <li>除非在当前计费周期结束前至少 24 小时取消，否则订阅将自动续订</li>
      <li>Apple ID 会在当前周期结束前 24 小时内被收取续订费用</li>
      <li>你可以随时在“设置”→“[你的姓名]”→“订阅”中管理或取消订阅</li>
      <li>取消订阅会在当前已付费周期结束时生效，在此之前仍可继续使用</li>
      <li>免费试用期（如有）会在试用结束后转为付费订阅，除非提前取消</li>
    </ul>

    <h2>退款政策</h2>
    <p>我们不直接处理退款。所有退款申请都必须提交给 Apple，因为 Apple 是所有 App Store 交易的登记商户。</p>
    <p>Apple 会根据其退款政策自行决定是否退款。常见的适用情况包括意外购买、未经授权的扣款，或购买内容未按说明正常运行。</p>
    <p>如需向 Apple 申请退款：</p>
    <ul>
      <li>前往 <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>，并使用你的 Apple ID 登录</li>
      <li>找到 LiquidBoard 购买记录，然后选择“报告问题”</li>
      <li>选择原因并提交申请</li>
    </ul>
    <p>Apple 通常会在几个工作日内回复。退款决定完全由 Apple 作出。</p>

    <h2>价格变更</h2>
    <p>我们保留随时更改 App 内购买价格的权利。订阅价格的变更会提前通过 App 或 App Store 告知，并在下一个计费周期开始时生效。任何订阅价格变更生效前，Apple 都会向你发送通知。</p>

    <h2>购买失败或未完成</h2>
    <p>如果购买失败，或已扣款但未收到相应内容，请先尝试在 App 内恢复购买。如果问题仍然存在，请通过 <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a> 联系我们，我们会尽快调查。</p>

    <h2>联系我们</h2>
    <p>如有账单或购买问题，请通过以下邮箱联系我们：<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
    <p>如需退款，请使用 Apple 官方渠道：<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></p>
  </>
);
