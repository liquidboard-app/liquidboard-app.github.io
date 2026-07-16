
export const Security = () => (
  <>
    <h2>Chính sách Bảo mật Dữ liệu</h2>
                <p>Cập nhật lần cuối: 05 tháng 06, 2026 · LiquidBoard</p>
                <p>LiquidBoard được thiết kế với ưu tiên hàng đầu là quyền riêng tư. Dữ liệu của bạn không bao giờ rời khỏi thiết bị trừ khi bạn chủ động bật Đồng bộ iCloud. Chúng tôi không có máy chủ, không có tài khoản và không có quyền truy cập vào nội dung của bạn.</p>

                <h2>Lưu trữ Dữ liệu</h2>
                <p>Tất cả nội dung bạn tạo trong LiquidBoard — các đoạn văn bản, hình ảnh và nhãn dán — được lưu trữ ở một trong hai nơi:</p>
                <ul>
                  <li><strong>Lưu trữ trên thiết bị</strong> — Do iOS quản lý và chỉ LiquidBoard mới có thể truy cập. Các ứng dụng khác không thể đọc dữ liệu của bạn.</li>
                  <li><strong>iCloud (tùy chọn)</strong> — Được đồng bộ thông qua Apple ID cá nhân của bạn bằng hạ tầng CloudKit được mã hóa của Apple.</li>
                </ul>
                <p>Không có dữ liệu nào được lưu trữ trên máy chủ của chúng tôi. Chúng tôi không vận hành bất kỳ hạ tầng phụ trợ (backend) nào.</p>

                <h2>Mã hóa</h2>
                <p>Dữ liệu của bạn được bảo vệ bởi các lớp bảo mật của iOS và Apple:</p>
                <ul>
                  <li><strong>Ở trạng thái nghỉ</strong> — Dữ liệu lưu trữ trên thiết bị của bạn được mã hóa bởi iOS bằng mật mã thiết bị và Secure Enclave.</li>
                  <li><strong>Trong quá trình truyền</strong> — Nếu Đồng bộ iCloud được bật, dữ liệu sẽ được mã hóa bởi CloudKit của Apple trước khi truyền tải.</li>
                  <li><strong>Sao lưu iCloud</strong> — Nếu thiết bị của bạn được sao lưu lên iCloud, dữ liệu ứng dụng sẽ được bao gồm trong hệ thống sao lưu được mã hóa của Apple.</li>
                </ul>

                <h2>Bảo mật Hình ảnh & Ảnh</h2>
                <p>LiquidBoard chỉ truy cập thư viện ảnh của bạn khi bạn chủ động chọn hoặc nhập một bức ảnh. Ứng dụng:</p>
                <ul>
                  <li>Không truy cập thư viện ảnh của bạn trong nền</li>
                  <li>Không tải ảnh lên bất kỳ máy chủ nào</li>
                  <li>Lưu trữ các ảnh đã chọn cục bộ trong vùng chứa bảo mật (sandbox) của ứng dụng</li>
                  <li>Xử lý việc tạo nhãn dán hoàn toàn trên thiết bị</li>
                </ul>
                <p>Bạn có thể thu hồi quyền truy cập ảnh bất cứ lúc nào trong Cài đặt → Quyền riêng tư & Bảo mật → Ảnh.</p>

                <h2>Bảo mật Tiện ích Bàn phím</h2>
                <p>Tiện ích bàn phím không thu thập, ghi nhật ký hoặc truyền tải bất kỳ dữ liệu thao tác phím nào hoặc văn bản bạn gõ trong các ứng dụng khác.</p>
                <p>Cấp Quyền truy cập đầy đủ là bắt buộc để tiện ích bàn phím có thể dán hình ảnh và nhãn dán, đồng thời truy cập Đồng bộ iCloud. Ngay cả khi đã bật Quyền truy cập đầy đủ, tiện ích bàn phím vẫn hoạt động hoàn toàn bên trong môi trường bảo mật (sandbox) của iOS. Nó không có khả năng gửi dữ liệu đến các máy chủ bên ngoài.</p>

                <h2>Không có quyền truy cập dữ liệu từ bên thứ ba</h2>
                <p>LiquidBoard không tích hợp bất kỳ công cụ nào sau đây:</p>
                <ul>
                  <li>SDK phân tích hoặc báo cáo sự cố, chẳng hạn như Firebase hoặc Mixpanel</li>
                  <li>Mạng quảng cáo hoặc SDK theo dõi</li>
                  <li>Các dịch vụ xử lý hoặc lưu trữ đám mây của bên thứ ba</li>
                </ul>
                <p>Nội dung của bạn không bao giờ được chia sẻ với hoặc có thể được truy cập bởi bất kỳ bên thứ ba nào.</p>

                <h2>Môi trường Sandbox của Ứng dụng</h2>
                <p>LiquidBoard chạy trong môi trường sandbox ứng dụng nghiêm ngặt của iOS. Điều này có nghĩa là các ứng dụng khác trên thiết bị của bạn không thể truy cập dữ liệu của LiquidBoard và LiquidBoard không thể truy cập dữ liệu thuộc về các ứng dụng khác ngoại trừ nội dung bạn chủ động dán qua tiện ích bàn phím.</p>

                <h2>Quyền Kiểm soát của Bạn</h2>
                <p>Bạn có toàn quyền kiểm soát dữ liệu của mình mọi lúc:</p>
                <ul>
                  <li>Bật hoặc tắt Đồng bộ iCloud từ trong ứng dụng</li>
                  <li>Thu hồi quyền truy cập thư viện ảnh trong Cài đặt iOS</li>
                  <li>Tắt Quyền truy cập đầy đủ cho bàn phím trong Cài đặt → Cài đặt chung → Bàn phím → Bàn phím</li>
                  <li>Xóa toàn bộ dữ liệu bằng cách xóa ứng dụng</li>
                </ul>

                <h2>Liên hệ</h2>
                <p>Nếu bạn có thắc mắc về bảo mật dữ liệu, vui lòng liên hệ với chúng tôi tại: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Privacy = () => (
  <>
    <h2>Chính sách Quyền riêng tư</h2>
                <p>Cập nhật lần cuối: 05 tháng 06, 2026 · LiquidBoard</p>
                <p>LiquidBoard ("chúng tôi" hoặc "ứng dụng") cam kết bảo vệ quyền riêng tư của bạn. Chính sách Quyền riêng tư này giải thích cách chúng tôi xử lý thông tin khi bạn sử dụng LiquidBoard và tiện ích bàn phím của ứng dụng.</p>

                <h2>Dữ liệu Chúng tôi Thu thập</h2>
                <p>LiquidBoard không thu thập, lưu trữ hoặc truyền tải bất kỳ dữ liệu cá nhân nào đến các máy chủ bên ngoài. Tất cả dữ liệu bạn tạo trong ứng dụng — bao gồm các đoạn văn bản, hình ảnh, nhãn dán, danh mục và cài đặt — được lưu trữ độc quyền trên thiết bị của bạn hoặc trong tài khoản iCloud cá nhân của bạn.</p>

                <h2>Hình ảnh & Ảnh</h2>
                <p>LiquidBoard có thể yêu cầu quyền truy cập vào thư viện ảnh của bạn cho các mục đích sau:</p>
                <ul>
                  <li>Chèn hình ảnh vào các đoạn văn bản của bạn</li>
                  <li>Tạo nhãn dán tùy chỉnh từ ảnh của bạn</li>
                </ul>
                <p>Các ảnh bạn chọn được lưu trữ cục bộ trên thiết bị của bạn và/hoặc đồng bộ hóa với tài khoản iCloud cá nhân của bạn. Chúng tôi không tải lên, truyền tải hoặc truy cập vào ảnh của bạn dưới bất kỳ hình thức nào. Quyền truy cập thư viện ảnh chỉ được sử dụng tại thời điểm bạn chủ động chọn một hình ảnh — ứng dụng không truy cập thư viện của bạn trong nền.</p>

                <h2>Nhãn dán</h2>
                <p>LiquidBoard cho phép bạn:</p>
                <ul>
                  <li>Tạo nhãn dán tùy chỉnh từ chính ảnh của bạn</li>
                  <li>Chèn nhãn dán qua tiện ích bàn phím</li>
                </ul>
                <p>Các nhãn dán tùy chỉnh bạn tạo từ ảnh của mình chỉ được lưu trữ trên thiết bị và/hoặc iCloud. Không có nội dung nhãn dán hoặc dữ liệu hình ảnh nào được truyền tải đến chúng tôi.</p>

                <h2>Tiện ích Bàn phím & Quyền truy cập Đầy đủ</h2>
                <p>Tiện ích bàn phím này không thu thập, ghi lại hoặc truyền tải bất kỳ dữ liệu thao tác phím nào hoặc văn bản bạn gõ.</p>
                <p>Tiện ích bàn phím của LiquidBoard yêu cầu được bật Quyền truy cập Đầy đủ (Full Access) để có thể:</p>
                <ul>
                  <li>Dán hình ảnh và nhãn dán vào các ứng dụng khác</li>
                  <li>Đồng bộ các đoạn văn bản và nhãn dán của bạn qua iCloud trên các thiết bị của bạn</li>
                </ul>
                <p>Quyền truy cập Đầy đủ chỉ được sử dụng duy nhất cho các tính năng này. Bàn phím không ghi nhật ký, ghi lại hoặc truyền tải bất cứ thứ gì bạn gõ trong bất kỳ ứng dụng nào khác. Không có dữ liệu nào được gửi đến bất kỳ máy chủ bên ngoài nào.</p>

                <h2>Đồng bộ iCloud</h2>
                <p>Nếu bạn chọn bật Đồng bộ iCloud, các đoạn văn bản, hình ảnh và nhãn dán của bạn sẽ được đồng bộ thông qua hạ tầng iCloud của Apple bằng Apple ID cá nhân của bạn. Dữ liệu này được điều chỉnh bởi Chính sách Quyền riêng tư của Apple. Chúng tôi không có quyền truy cập vào dữ liệu iCloud của bạn.</p>

                <h2>Chia sẻ Dữ liệu</h2>
                <p>Chúng tôi không bán, chia sẻ hoặc tiết lộ dữ liệu của bạn cho bất kỳ bên thứ ba nào. Chúng tôi không sử dụng bất kỳ công cụ phân tích, SDK quảng cáo hoặc công cụ theo dõi nào của bên thứ ba.</p>

                <h2>Lưu giữ & Xóa Dữ liệu</h2>
                <p>Dữ liệu của bạn được lưu giữ trên thiết bị và/hoặc tài khoản iCloud của bạn và hoàn toàn nằm dưới quyền kiểm soát của bạn. Bạn có thể xóa dữ liệu của mình bất cứ lúc nào bằng cách:</p>
                <ul>
                  <li>Xóa từng đoạn văn bản, hình ảnh hoặc nhãn dán bên trong ứng dụng</li>
                  <li>Thu hồi quyền truy cập thư viện ảnh trong Cài đặt → Quyền riêng tư & Bảo mật → Ảnh</li>
                  <li>Xóa ứng dụng, thao tác này sẽ xóa tất cả dữ liệu được lưu trữ cục bộ</li>
                  <li>Tắt Đồng bộ iCloud và xóa dữ liệu iCloud của ứng dụng khỏi Cài đặt → [Tên của bạn] → iCloud → Quản lý Dung lượng</li>
                </ul>

                <h2>Quyền riêng tư của Trẻ em</h2>
                <p>LiquidBoard không cố ý thu thập bất kỳ thông tin nào từ trẻ em dưới 13 tuổi. Ứng dụng không thu thập dữ liệu cá nhân từ bất kỳ người dùng nào.</p>

                <h2>Các Thay đổi đối với Chính sách Này</h2>
                <p>Chúng tôi có thể cập nhật Chính sách Quyền riêng tư này tùy từng thời điểm. Mọi thay đổi sẽ được phản ánh trong ứng dụng và trên trang web của chúng tôi cùng với ngày cập nhật.</p>

                <h2>Liên hệ</h2>
                <p>Nếu bạn có bất kỳ câu hỏi nào về Chính sách Quyền riêng tư này, vui lòng liên hệ với chúng tôi tại: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Terms = () => (
  <>
    <h2>Điều khoản Sử dụng</h2>
                <p>Cập nhật lần cuối: 05 tháng 06, 2026 · LiquidBoard</p>
                <p>Bằng cách tải xuống, cài đặt hoặc sử dụng LiquidBoard ("Ứng dụng"), bạn đồng ý bị ràng buộc bởi các Điều khoản Sử dụng này. Nếu bạn không đồng ý với các điều khoản này, vui lòng không sử dụng Ứng dụng.</p>

                <h2>Cấp phép</h2>
                <p>Chúng tôi cấp cho bạn một giấy phép giới hạn, không độc quyền, không thể chuyển nhượng và có thể thu hồi để sử dụng LiquidBoard cho các mục đích cá nhân, phi thương mại của bạn, tuân theo các Điều khoản này.</p>
                <p>Bạn không được:</p>
                <ul>
                  <li>Sao chép, sửa đổi hoặc phân phối Ứng dụng hoặc nội dung của Ứng dụng</li>
                  <li>Dịch ngược hoặc cố gắng trích xuất mã nguồn</li>
                  <li>Sử dụng Ứng dụng cho bất kỳ mục đích trái pháp luật hoặc không được phép nào</li>
                  <li>Bán, cấp phép phụ hoặc chuyển nhượng quyền truy cập Ứng dụng cho bất kỳ bên thứ ba nào</li>
                </ul>

                <h2>Nội dung của Bạn</h2>
                <p>Bạn giữ toàn quyền sở hữu đối với tất cả các đoạn văn bản, hình ảnh và nhãn dán mà bạn tạo hoặc nhập vào LiquidBoard. Chúng tôi không yêu cầu bất kỳ quyền nào đối với nội dung của bạn.</p>
                <p>Bạn hoàn toàn chịu trách nhiệm đảm bảo rằng nội dung bạn tạo hoặc dán bằng cách sử dụng Ứng dụng không vi phạm bất kỳ quyền của bên thứ ba nào, bao gồm quyền tác giả, nhãn hiệu hoặc quyền riêng tư.</p>

                <h2>Sử dụng Chấp nhận được</h2>
                <p>Bạn đồng ý không sử dụng LiquidBoard để tạo, lưu trữ hoặc phân phối nội dung:</p>
                <ul>
                  <li>Trái pháp luật, có hại, đe dọa hoặc quấy rối</li>
                  <li>Vi phạm quyền sở hữu trí tuệ của người khác</li>
                  <li>Chứa phần mềm độc hại, vi-rút hoặc mã độc</li>
                  <li>Vi phạm bất kỳ luật pháp địa phương, quốc gia hoặc quốc tế nào được áp dụng</li>
                </ul>

                <h2>Mua hàng trong Ứng dụng (In-App Purchases)</h2>
                <p>LiquidBoard cung cấp các tùy chọn mua hàng trong ứng dụng để mở khóa các tính năng hoặc nội dung bổ sung. Tất cả các giao dịch mua đều được Apple xử lý qua App Store và tuân theo Điều khoản Bán hàng của Apple.</p>
                <ul>
                  <li>Các giao dịch mua không được hoàn lại trừ khi luật pháp áp dụng hoặc chính sách hoàn tiền của Apple yêu cầu</li>
                  <li>Giá có thể khác nhau tùy theo khu vực và được hiển thị bằng đơn vị tiền tệ địa phương của bạn tại thời điểm mua</li>
                  <li>Các tính năng đã mua được liên kết với Apple ID của bạn và có thể được khôi phục trên bất kỳ thiết bị nào đăng nhập bằng cùng một Apple ID</li>
                </ul>
                <p>Để yêu cầu hoàn tiền, vui lòng liên hệ trực tiếp với Apple tại: <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.</p>

                <h2>Tiện ích Bàn phím & Quyền truy cập Đầy đủ</h2>
                <p>Bật Quyền truy cập Đầy đủ (Full Access) cho tiện ích bàn phím là bắt buộc để dán hình ảnh và nhãn dán vào các ứng dụng khác và để kích hoạt Đồng bộ iCloud. Quyền truy cập Đầy đủ không cấp cho chúng tôi quyền truy cập vào bất cứ thứ gì bạn gõ.</p>
                <p>Bạn thừa nhận rằng khi bật Quyền truy cập Đầy đủ, iOS sẽ hiển thị một thông báo hệ thống cho bạn biết rằng nhà phát triển bàn phím có thể có khả năng truy cập vào nội dung bạn gõ. Chúng tôi muốn làm rõ: LiquidBoard không thu thập, ghi nhật ký hoặc truyền tải bất kỳ dữ liệu thao tác phím nào.</p>

                <h2>Đồng bộ iCloud</h2>
                <p>Đồng bộ iCloud là một tính năng tùy chọn sử dụng tài khoản Apple iCloud cá nhân của bạn để đồng bộ dữ liệu của bạn trên các thiết bị. Việc sử dụng iCloud tuân theo Điều khoản và Điều kiện của Apple. Chúng tôi không chịu trách nhiệm đối với bất kỳ sự mất mát dữ liệu nào do gián đoạn dịch vụ iCloud.</p>

                <h2>Từ chối Bảo đảm</h2>
                <p>LiquidBoard được cung cấp "nguyên trạng" ("as is") và "như hiện có" ("as available") mà không có bất kỳ hình thức bảo đảm nào, dù rõ ràng hay ngụ ý, bao gồm nhưng không giới hạn ở các bảo đảm về khả năng bán được, sự phù hợp cho một mục đích cụ thể hoặc không vi phạm.</p>
                <p>Chúng tôi không bảo đảm rằng Ứng dụng sẽ không bị gián đoạn, không có lỗi hoặc không có vi-rút hoặc các thành phần có hại khác.</p>

                <h2>Giới hạn Trách nhiệm pháp lý</h2>
                <p>Trong phạm vi tối đa được luật pháp áp dụng cho phép, chúng tôi sẽ không chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, do hậu quả hoặc mang tính trừng phạt nào, bao gồm nhưng không giới hạn ở việc mất dữ liệu, mất lợi nhuận hoặc mất uy tín, phát sinh từ việc bạn sử dụng hoặc không thể sử dụng Ứng dụng.</p>

                <h2>Chấm dứt</h2>
                <p>Chúng tôi có quyền chấm dứt hoặc hạn chế quyền truy cập của bạn vào Ứng dụng bất cứ lúc nào, không cần thông báo, đối với những hành vi mà chúng tôi cho là vi phạm các Điều khoản này hoặc có hại cho những người dùng khác, chúng tôi hoặc các bên thứ ba.</p>
                <p>Bạn có thể ngừng sử dụng Ứng dụng bất cứ lúc nào bằng cách xóa nó khỏi thiết bị của bạn.</p>

                <h2>Các Thay đổi đối với các Điều khoản Này</h2>
                <p>Chúng tôi có thể cập nhật các Điều khoản Sử dụng này tùy từng thời điểm. Việc tiếp tục sử dụng Ứng dụng sau khi các thay đổi được đăng cấu thành sự chấp nhận của bạn đối với các Điều khoản đã được sửa đổi. Chúng tôi sẽ thông báo cho bạn về các thay đổi quan trọng thông qua Ứng dụng hoặc trang web của chúng tôi.</p>

                <h2>Luật Điều chỉnh</h2>
                <p>Các Điều khoản này được điều chỉnh và giải thích theo luật pháp của khu vực pháp lý nơi nhà phát triển đặt trụ sở, không tính đến các nguyên tắc xung đột pháp luật.</p>

                <h2>Liên hệ</h2>
                <p>Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản này, vui lòng liên hệ với chúng tôi tại: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>
);

export const Payment = () => (
  <>
    <h2>Chính sách Thanh toán & Hoàn tiền</h2>
                <p>Cập nhật lần cuối: 05 tháng 06, 2026 · LiquidBoard</p>
                <p>LiquidBoard cung cấp các tùy chọn mua hàng trong ứng dụng để mở khóa các tính năng cao cấp. Tất cả các khoản thanh toán đều được xử lý hoàn toàn bởi Apple thông qua App Store — chúng tôi không xử lý, lưu trữ hoặc có quyền truy cập vào thông tin thanh toán của bạn.</p>

                <h2>Những gì Bạn Có thể Mua</h2>
                <p>LiquidBoard cung cấp các tùy chọn mua hàng sau:</p>
                <ul>
                  <li>Các Tính năng Cao cấp — Mua một lần hoặc đăng ký gói để mở khóa chức năng ứng dụng nâng cao</li>
                </ul>
                <p>Các giao dịch mua có sẵn và giá cả được hiển thị bên trong Ứng dụng tại thời điểm mua. Giá có thể khác nhau tùy theo khu vực và được hiển thị bằng đơn vị tiền tệ địa phương của bạn.</p>

                <h2>Xử lý Thanh toán</h2>
                <p>Tất cả các giao dịch được xử lý an toàn bởi Apple. Chúng tôi không bao giờ nhìn thấy hoặc lưu trữ thẻ tín dụng, địa chỉ thanh toán hoặc bất kỳ chi tiết thanh toán nào của bạn.</p>
                <p>Bằng việc hoàn tất giao dịch mua, bạn đồng ý với Điều khoản Bán hàng của App Store do Apple quy định. Phương thức thanh toán được lưu trữ trên Apple của bạn sẽ bị tính phí tại thời điểm xác nhận giao dịch mua.</p>

                <h2>Khôi phục Giao dịch mua</h2>
                <p>Nếu bạn cài đặt lại LiquidBoard hoặc chuyển sang thiết bị mới, bạn có thể khôi phục tất cả các giao dịch mua trước đó mà không mất thêm phí bằng cách sử dụng tùy chọn Khôi phục Mua hàng (Restore Purchases) bên trong Ứng dụng. Các giao dịch mua được gắn với Apple ID của bạn và có sẵn trên tất cả các thiết bị đăng nhập cùng một tài khoản.</p>

                <h2>Đăng ký (Subscriptions)</h2>
                <p>Nếu LiquidBoard cung cấp các tùy chọn mua hàng theo hình thức đăng ký (subscription):</p>
                <ul>
                  <li>Các gói đăng ký tự động gia hạn trừ khi bị hủy ít nhất 24 giờ trước khi kết thúc chu kỳ thanh toán hiện tại</li>
                  <li>Apple ID của bạn sẽ bị tính phí gia hạn trong vòng 24 giờ trước khi kết thúc chu kỳ hiện tại</li>
                  <li>Bạn có thể quản lý hoặc hủy đăng ký bất cứ lúc nào trong Cài đặt → [Tên của bạn] → Đăng ký (Subscriptions)</li>
                  <li>Việc hủy đăng ký sẽ có hiệu lực vào cuối kỳ thanh toán hiện tại — bạn vẫn giữ được quyền truy cập cho đến lúc đó</li>
                  <li>Các khoảng thời gian dùng thử miễn phí, nếu được cung cấp, sẽ tự động chuyển thành gói đăng ký trả phí trừ khi bị hủy trước khi thời gian dùng thử kết thúc</li>
                </ul>

                <h2>Chính sách Hoàn tiền</h2>
                <p>Chúng tôi không xử lý hoàn tiền trực tiếp. Mọi yêu cầu hoàn tiền phải được gửi tới Apple, vì họ là đơn vị bán hàng chính thức (merchant of record) cho tất cả các giao dịch trên App Store.</p>
                <p>Apple xử lý việc hoàn tiền theo quyết định của họ và tuân theo chính sách hoàn tiền của Apple. Các trường hợp hợp lệ phổ biến bao gồm mua hàng do sơ ý, các khoản phí trái phép hoặc các giao dịch mua không hoạt động như mô tả.</p>
                <p>Để yêu cầu hoàn tiền từ Apple:</p>
                <ul>
                  <li>Truy cập <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a> và đăng nhập bằng Apple ID của bạn</li>
                  <li>Tìm giao dịch mua LiquidBoard và nhấn vào Báo cáo Sự cố (Report a Problem)</li>
                  <li>Chọn lý do và gửi yêu cầu của bạn</li>
                </ul>
                <p>Apple thường phản hồi trong vòng vài ngày làm việc. Các quyết định hoàn tiền hoàn toàn do Apple quyết định.</p>

                <h2>Thay đổi Giá</h2>
                <p>Chúng tôi có quyền thay đổi giá cho các giao dịch mua trong ứng dụng bất cứ lúc nào. Các thay đổi về giá đối với các gói đăng ký sẽ được thông báo trước thông qua Ứng dụng hoặc App Store và sẽ có hiệu lực vào thời điểm bắt đầu chu kỳ thanh toán tiếp theo của bạn. Bạn sẽ được Apple thông báo trước khi bất kỳ sự thay đổi giá đăng ký nào có hiệu lực.</p>

                <h2>Các Giao dịch Mua không Thành công hoặc Không hoàn tất</h2>
                <p>Nếu giao dịch mua bị lỗi hoặc bạn đã bị tính phí nhưng không nhận được nội dung, trước tiên hãy thử khôi phục lại các giao dịch mua trong Ứng dụng. Nếu sự cố vẫn tiếp diễn, vui lòng liên hệ với chúng tôi tại <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a> và chúng tôi sẽ nhanh chóng điều tra.</p>

                <h2>Liên hệ</h2>
                <p>Đối với các câu hỏi về thanh toán hoặc các vấn đề mua hàng, hãy liên hệ với chúng tôi tại: <a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
                <p>Để được hoàn tiền, vui lòng sử dụng kênh chính thức của Apple: <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></p>
  </>
);
