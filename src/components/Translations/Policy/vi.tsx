import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Chính sách Bảo mật Dữ liệu</PolicyHeading>
                <PolicyParagraph>Cập nhật lần cuối: 05 tháng 06, 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard được thiết kế với ưu tiên hàng đầu là quyền riêng tư. Dữ liệu của bạn không bao giờ rời khỏi thiết bị trừ khi bạn chủ động bật Đồng bộ iCloud. Chúng tôi không có máy chủ, không có tài khoản và không có quyền truy cập vào nội dung của bạn.</PolicyParagraph>

                <PolicyHeading>Lưu trữ Dữ liệu</PolicyHeading>
                <PolicyParagraph>Tất cả nội dung bạn tạo trong LiquidBoard — các đoạn văn bản, hình ảnh và nhãn dán — được lưu trữ ở một trong hai nơi:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Lưu trữ trên thiết bị</PolicyEmphasis> — Do iOS quản lý và chỉ LiquidBoard mới có thể truy cập. Các ứng dụng khác không thể đọc dữ liệu của bạn.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (tùy chọn)</PolicyEmphasis> — Được đồng bộ thông qua Apple ID cá nhân của bạn bằng hạ tầng CloudKit được mã hóa của Apple.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Không có dữ liệu nào được lưu trữ trên máy chủ của chúng tôi. Chúng tôi không vận hành bất kỳ hạ tầng phụ trợ (backend) nào.</PolicyParagraph>

                <PolicyHeading>Mã hóa</PolicyHeading>
                <PolicyParagraph>Dữ liệu của bạn được bảo vệ bởi các lớp bảo mật của iOS và Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Ở trạng thái nghỉ</PolicyEmphasis> — Dữ liệu lưu trữ trên thiết bị của bạn được mã hóa bởi iOS bằng mật mã thiết bị và Secure Enclave.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Trong quá trình truyền</PolicyEmphasis> — Nếu Đồng bộ iCloud được bật, dữ liệu sẽ được mã hóa bởi CloudKit của Apple trước khi truyền tải.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Sao lưu iCloud</PolicyEmphasis> — Nếu thiết bị của bạn được sao lưu lên iCloud, dữ liệu ứng dụng sẽ được bao gồm trong hệ thống sao lưu được mã hóa của Apple.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Bảo mật Hình ảnh & Ảnh</PolicyHeading>
                <PolicyParagraph>LiquidBoard chỉ truy cập thư viện ảnh của bạn khi bạn chủ động chọn hoặc nhập một bức ảnh. Ứng dụng:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Không truy cập thư viện ảnh của bạn trong nền</PolicyListItem>
                  <PolicyListItem>Không tải ảnh lên bất kỳ máy chủ nào</PolicyListItem>
                  <PolicyListItem>Lưu trữ các ảnh đã chọn cục bộ trong vùng chứa bảo mật (sandbox) của ứng dụng</PolicyListItem>
                  <PolicyListItem>Xử lý việc tạo nhãn dán hoàn toàn trên thiết bị</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Bạn có thể thu hồi quyền truy cập ảnh bất cứ lúc nào trong Cài đặt → Quyền riêng tư & Bảo mật → Ảnh.</PolicyParagraph>

                <PolicyHeading>Bảo mật Tiện ích Bàn phím</PolicyHeading>
                <PolicyParagraph>Tiện ích bàn phím không thu thập, ghi nhật ký hoặc truyền tải bất kỳ dữ liệu thao tác phím nào hoặc văn bản bạn gõ trong các ứng dụng khác.</PolicyParagraph>
                <PolicyParagraph>Cấp Quyền truy cập đầy đủ là bắt buộc để tiện ích bàn phím có thể dán hình ảnh và nhãn dán, đồng thời truy cập Đồng bộ iCloud. Ngay cả khi đã bật Quyền truy cập đầy đủ, tiện ích bàn phím vẫn hoạt động hoàn toàn bên trong môi trường bảo mật (sandbox) của iOS. Nó không có khả năng gửi dữ liệu đến các máy chủ bên ngoài.</PolicyParagraph>

                <PolicyHeading>Không có quyền truy cập dữ liệu từ bên thứ ba</PolicyHeading>
                <PolicyParagraph>LiquidBoard không tích hợp bất kỳ công cụ nào sau đây:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>SDK phân tích hoặc báo cáo sự cố, chẳng hạn như Firebase hoặc Mixpanel</PolicyListItem>
                  <PolicyListItem>Mạng quảng cáo hoặc SDK theo dõi</PolicyListItem>
                  <PolicyListItem>Các dịch vụ xử lý hoặc lưu trữ đám mây của bên thứ ba</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Nội dung của bạn không bao giờ được chia sẻ với hoặc có thể được truy cập bởi bất kỳ bên thứ ba nào.</PolicyParagraph>

                <PolicyHeading>Môi trường Sandbox của Ứng dụng</PolicyHeading>
                <PolicyParagraph>LiquidBoard chạy trong môi trường sandbox ứng dụng nghiêm ngặt của iOS. Điều này có nghĩa là các ứng dụng khác trên thiết bị của bạn không thể truy cập dữ liệu của LiquidBoard và LiquidBoard không thể truy cập dữ liệu thuộc về các ứng dụng khác ngoại trừ nội dung bạn chủ động dán qua tiện ích bàn phím.</PolicyParagraph>

                <PolicyHeading>Quyền Kiểm soát của Bạn</PolicyHeading>
                <PolicyParagraph>Bạn có toàn quyền kiểm soát dữ liệu của mình mọi lúc:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Bật hoặc tắt Đồng bộ iCloud từ trong ứng dụng</PolicyListItem>
                  <PolicyListItem>Thu hồi quyền truy cập thư viện ảnh trong Cài đặt iOS</PolicyListItem>
                  <PolicyListItem>Tắt Quyền truy cập đầy đủ cho bàn phím trong Cài đặt → Cài đặt chung → Bàn phím → Bàn phím</PolicyListItem>
                  <PolicyListItem>Xóa toàn bộ dữ liệu bằng cách xóa ứng dụng</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Liên hệ</PolicyHeading>
                <PolicyParagraph>Nếu bạn có thắc mắc về bảo mật dữ liệu, vui lòng liên hệ với chúng tôi tại: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>
);

export const Privacy = () => (
  <>
    <PolicyHeading>Chính sách Quyền riêng tư</PolicyHeading>
                <PolicyParagraph>Cập nhật lần cuối: 05 tháng 06, 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard ("chúng tôi" hoặc "ứng dụng") cam kết bảo vệ quyền riêng tư của bạn. Chính sách Quyền riêng tư này giải thích cách chúng tôi xử lý thông tin khi bạn sử dụng LiquidBoard và tiện ích bàn phím của ứng dụng.</PolicyParagraph>

                <PolicyHeading>Dữ liệu Chúng tôi Thu thập</PolicyHeading>
                <PolicyParagraph>LiquidBoard không thu thập, lưu trữ hoặc truyền tải bất kỳ dữ liệu cá nhân nào đến các máy chủ bên ngoài. Tất cả dữ liệu bạn tạo trong ứng dụng — bao gồm các đoạn văn bản, hình ảnh, nhãn dán, danh mục và cài đặt — được lưu trữ độc quyền trên thiết bị của bạn hoặc trong tài khoản iCloud cá nhân của bạn.</PolicyParagraph>

                <PolicyHeading>Hình ảnh & Ảnh</PolicyHeading>
                <PolicyParagraph>LiquidBoard có thể yêu cầu quyền truy cập vào thư viện ảnh của bạn cho các mục đích sau:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Chèn hình ảnh vào các đoạn văn bản của bạn</PolicyListItem>
                  <PolicyListItem>Tạo nhãn dán tùy chỉnh từ ảnh của bạn</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Các ảnh bạn chọn được lưu trữ cục bộ trên thiết bị của bạn và/hoặc đồng bộ hóa với tài khoản iCloud cá nhân của bạn. Chúng tôi không tải lên, truyền tải hoặc truy cập vào ảnh của bạn dưới bất kỳ hình thức nào. Quyền truy cập thư viện ảnh chỉ được sử dụng tại thời điểm bạn chủ động chọn một hình ảnh — ứng dụng không truy cập thư viện của bạn trong nền.</PolicyParagraph>

                <PolicyHeading>Nhãn dán</PolicyHeading>
                <PolicyParagraph>LiquidBoard cho phép bạn:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Tạo nhãn dán tùy chỉnh từ chính ảnh của bạn</PolicyListItem>
                  <PolicyListItem>Chèn nhãn dán qua tiện ích bàn phím</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Các nhãn dán tùy chỉnh bạn tạo từ ảnh của mình chỉ được lưu trữ trên thiết bị và/hoặc iCloud. Không có nội dung nhãn dán hoặc dữ liệu hình ảnh nào được truyền tải đến chúng tôi.</PolicyParagraph>

                <PolicyHeading>Tiện ích Bàn phím & Quyền truy cập Đầy đủ</PolicyHeading>
                <PolicyParagraph>Tiện ích bàn phím này không thu thập, ghi lại hoặc truyền tải bất kỳ dữ liệu thao tác phím nào hoặc văn bản bạn gõ.</PolicyParagraph>
                <PolicyParagraph>Tiện ích bàn phím của LiquidBoard yêu cầu được bật Quyền truy cập Đầy đủ (Full Access) để có thể:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Dán hình ảnh và nhãn dán vào các ứng dụng khác</PolicyListItem>
                  <PolicyListItem>Đồng bộ các đoạn văn bản và nhãn dán của bạn qua iCloud trên các thiết bị của bạn</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Quyền truy cập Đầy đủ chỉ được sử dụng duy nhất cho các tính năng này. Bàn phím không ghi nhật ký, ghi lại hoặc truyền tải bất cứ thứ gì bạn gõ trong bất kỳ ứng dụng nào khác. Không có dữ liệu nào được gửi đến bất kỳ máy chủ bên ngoài nào.</PolicyParagraph>

                <PolicyHeading>Đồng bộ iCloud</PolicyHeading>
                <PolicyParagraph>Nếu bạn chọn bật Đồng bộ iCloud, các đoạn văn bản, hình ảnh và nhãn dán của bạn sẽ được đồng bộ thông qua hạ tầng iCloud của Apple bằng Apple ID cá nhân của bạn. Dữ liệu này được điều chỉnh bởi Chính sách Quyền riêng tư của Apple. Chúng tôi không có quyền truy cập vào dữ liệu iCloud của bạn.</PolicyParagraph>

                <PolicyHeading>Chia sẻ Dữ liệu</PolicyHeading>
                <PolicyParagraph>Chúng tôi không bán, chia sẻ hoặc tiết lộ dữ liệu của bạn cho bất kỳ bên thứ ba nào. Chúng tôi không sử dụng bất kỳ công cụ phân tích, SDK quảng cáo hoặc công cụ theo dõi nào của bên thứ ba.</PolicyParagraph>

                <PolicyHeading>Lưu giữ & Xóa Dữ liệu</PolicyHeading>
                <PolicyParagraph>Dữ liệu của bạn được lưu giữ trên thiết bị và/hoặc tài khoản iCloud của bạn và hoàn toàn nằm dưới quyền kiểm soát của bạn. Bạn có thể xóa dữ liệu của mình bất cứ lúc nào bằng cách:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Xóa từng đoạn văn bản, hình ảnh hoặc nhãn dán bên trong ứng dụng</PolicyListItem>
                  <PolicyListItem>Thu hồi quyền truy cập thư viện ảnh trong Cài đặt → Quyền riêng tư & Bảo mật → Ảnh</PolicyListItem>
                  <PolicyListItem>Xóa ứng dụng, thao tác này sẽ xóa tất cả dữ liệu được lưu trữ cục bộ</PolicyListItem>
                  <PolicyListItem>Tắt Đồng bộ iCloud và xóa dữ liệu iCloud của ứng dụng khỏi Cài đặt → [Tên của bạn] → iCloud → Quản lý Dung lượng</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Quyền riêng tư của Trẻ em</PolicyHeading>
                <PolicyParagraph>LiquidBoard không cố ý thu thập bất kỳ thông tin nào từ trẻ em dưới 13 tuổi. Ứng dụng không thu thập dữ liệu cá nhân từ bất kỳ người dùng nào.</PolicyParagraph>

                <PolicyHeading>Các Thay đổi đối với Chính sách Này</PolicyHeading>
                <PolicyParagraph>Chúng tôi có thể cập nhật Chính sách Quyền riêng tư này tùy từng thời điểm. Mọi thay đổi sẽ được phản ánh trong ứng dụng và trên trang web của chúng tôi cùng với ngày cập nhật.</PolicyParagraph>

                <PolicyHeading>Liên hệ</PolicyHeading>
                <PolicyParagraph>Nếu bạn có bất kỳ câu hỏi nào về Chính sách Quyền riêng tư này, vui lòng liên hệ với chúng tôi tại: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>
);

export const Terms = () => (
  <>
    <PolicyHeading>Điều khoản Sử dụng</PolicyHeading>
                <PolicyParagraph>Cập nhật lần cuối: 05 tháng 06, 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Bằng cách tải xuống, cài đặt hoặc sử dụng LiquidBoard ("Ứng dụng"), bạn đồng ý bị ràng buộc bởi các Điều khoản Sử dụng này. Nếu bạn không đồng ý với các điều khoản này, vui lòng không sử dụng Ứng dụng.</PolicyParagraph>

                <PolicyHeading>Cấp phép</PolicyHeading>
                <PolicyParagraph>Chúng tôi cấp cho bạn một giấy phép giới hạn, không độc quyền, không thể chuyển nhượng và có thể thu hồi để sử dụng LiquidBoard cho các mục đích cá nhân, phi thương mại của bạn, tuân theo các Điều khoản này.</PolicyParagraph>
                <PolicyParagraph>Bạn không được:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Sao chép, sửa đổi hoặc phân phối Ứng dụng hoặc nội dung của Ứng dụng</PolicyListItem>
                  <PolicyListItem>Dịch ngược hoặc cố gắng trích xuất mã nguồn</PolicyListItem>
                  <PolicyListItem>Sử dụng Ứng dụng cho bất kỳ mục đích trái pháp luật hoặc không được phép nào</PolicyListItem>
                  <PolicyListItem>Bán, cấp phép phụ hoặc chuyển nhượng quyền truy cập Ứng dụng cho bất kỳ bên thứ ba nào</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Nội dung của Bạn</PolicyHeading>
                <PolicyParagraph>Bạn giữ toàn quyền sở hữu đối với tất cả các đoạn văn bản, hình ảnh và nhãn dán mà bạn tạo hoặc nhập vào LiquidBoard. Chúng tôi không yêu cầu bất kỳ quyền nào đối với nội dung của bạn.</PolicyParagraph>
                <PolicyParagraph>Bạn hoàn toàn chịu trách nhiệm đảm bảo rằng nội dung bạn tạo hoặc dán bằng cách sử dụng Ứng dụng không vi phạm bất kỳ quyền của bên thứ ba nào, bao gồm quyền tác giả, nhãn hiệu hoặc quyền riêng tư.</PolicyParagraph>

                <PolicyHeading>Sử dụng Chấp nhận được</PolicyHeading>
                <PolicyParagraph>Bạn đồng ý không sử dụng LiquidBoard để tạo, lưu trữ hoặc phân phối nội dung:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Trái pháp luật, có hại, đe dọa hoặc quấy rối</PolicyListItem>
                  <PolicyListItem>Vi phạm quyền sở hữu trí tuệ của người khác</PolicyListItem>
                  <PolicyListItem>Chứa phần mềm độc hại, vi-rút hoặc mã độc</PolicyListItem>
                  <PolicyListItem>Vi phạm bất kỳ luật pháp địa phương, quốc gia hoặc quốc tế nào được áp dụng</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Mua hàng trong Ứng dụng (In-App Purchases)</PolicyHeading>
                <PolicyParagraph>LiquidBoard cung cấp các tùy chọn mua hàng trong ứng dụng để mở khóa các tính năng hoặc nội dung bổ sung. Tất cả các giao dịch mua đều được Apple xử lý qua App Store và tuân theo Điều khoản Bán hàng của Apple.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Các giao dịch mua không được hoàn lại trừ khi luật pháp áp dụng hoặc chính sách hoàn tiền của Apple yêu cầu</PolicyListItem>
                  <PolicyListItem>Giá có thể khác nhau tùy theo khu vực và được hiển thị bằng đơn vị tiền tệ địa phương của bạn tại thời điểm mua</PolicyListItem>
                  <PolicyListItem>Các tính năng đã mua được liên kết với Apple ID của bạn và có thể được khôi phục trên bất kỳ thiết bị nào đăng nhập bằng cùng một Apple ID</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Để yêu cầu hoàn tiền, vui lòng liên hệ trực tiếp với Apple tại: <PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>Tiện ích Bàn phím & Quyền truy cập Đầy đủ</PolicyHeading>
                <PolicyParagraph>Bật Quyền truy cập Đầy đủ (Full Access) cho tiện ích bàn phím là bắt buộc để dán hình ảnh và nhãn dán vào các ứng dụng khác và để kích hoạt Đồng bộ iCloud. Quyền truy cập Đầy đủ không cấp cho chúng tôi quyền truy cập vào bất cứ thứ gì bạn gõ.</PolicyParagraph>
                <PolicyParagraph>Bạn thừa nhận rằng khi bật Quyền truy cập Đầy đủ, iOS sẽ hiển thị một thông báo hệ thống cho bạn biết rằng nhà phát triển bàn phím có thể có khả năng truy cập vào nội dung bạn gõ. Chúng tôi muốn làm rõ: LiquidBoard không thu thập, ghi nhật ký hoặc truyền tải bất kỳ dữ liệu thao tác phím nào.</PolicyParagraph>

                <PolicyHeading>Đồng bộ iCloud</PolicyHeading>
                <PolicyParagraph>Đồng bộ iCloud là một tính năng tùy chọn sử dụng tài khoản Apple iCloud cá nhân của bạn để đồng bộ dữ liệu của bạn trên các thiết bị. Việc sử dụng iCloud tuân theo Điều khoản và Điều kiện của Apple. Chúng tôi không chịu trách nhiệm đối với bất kỳ sự mất mát dữ liệu nào do gián đoạn dịch vụ iCloud.</PolicyParagraph>

                <PolicyHeading>Từ chối Bảo đảm</PolicyHeading>
                <PolicyParagraph>LiquidBoard được cung cấp "nguyên trạng" ("as is") và "như hiện có" ("as available") mà không có bất kỳ hình thức bảo đảm nào, dù rõ ràng hay ngụ ý, bao gồm nhưng không giới hạn ở các bảo đảm về khả năng bán được, sự phù hợp cho một mục đích cụ thể hoặc không vi phạm.</PolicyParagraph>
                <PolicyParagraph>Chúng tôi không bảo đảm rằng Ứng dụng sẽ không bị gián đoạn, không có lỗi hoặc không có vi-rút hoặc các thành phần có hại khác.</PolicyParagraph>

                <PolicyHeading>Giới hạn Trách nhiệm pháp lý</PolicyHeading>
                <PolicyParagraph>Trong phạm vi tối đa được luật pháp áp dụng cho phép, chúng tôi sẽ không chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, do hậu quả hoặc mang tính trừng phạt nào, bao gồm nhưng không giới hạn ở việc mất dữ liệu, mất lợi nhuận hoặc mất uy tín, phát sinh từ việc bạn sử dụng hoặc không thể sử dụng Ứng dụng.</PolicyParagraph>

                <PolicyHeading>Chấm dứt</PolicyHeading>
                <PolicyParagraph>Chúng tôi có quyền chấm dứt hoặc hạn chế quyền truy cập của bạn vào Ứng dụng bất cứ lúc nào, không cần thông báo, đối với những hành vi mà chúng tôi cho là vi phạm các Điều khoản này hoặc có hại cho những người dùng khác, chúng tôi hoặc các bên thứ ba.</PolicyParagraph>
                <PolicyParagraph>Bạn có thể ngừng sử dụng Ứng dụng bất cứ lúc nào bằng cách xóa nó khỏi thiết bị của bạn.</PolicyParagraph>

                <PolicyHeading>Các Thay đổi đối với các Điều khoản Này</PolicyHeading>
                <PolicyParagraph>Chúng tôi có thể cập nhật các Điều khoản Sử dụng này tùy từng thời điểm. Việc tiếp tục sử dụng Ứng dụng sau khi các thay đổi được đăng cấu thành sự chấp nhận của bạn đối với các Điều khoản đã được sửa đổi. Chúng tôi sẽ thông báo cho bạn về các thay đổi quan trọng thông qua Ứng dụng hoặc trang web của chúng tôi.</PolicyParagraph>

                <PolicyHeading>Luật Điều chỉnh</PolicyHeading>
                <PolicyParagraph>Các Điều khoản này được điều chỉnh và giải thích theo luật pháp của khu vực pháp lý nơi nhà phát triển đặt trụ sở, không tính đến các nguyên tắc xung đột pháp luật.</PolicyParagraph>

                <PolicyHeading>Liên hệ</PolicyHeading>
                <PolicyParagraph>Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản này, vui lòng liên hệ với chúng tôi tại: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>
);

export const Payment = () => (
  <>
    <PolicyHeading>Chính sách Thanh toán & Hoàn tiền</PolicyHeading>
                <PolicyParagraph>Cập nhật lần cuối: 05 tháng 06, 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard cung cấp các tùy chọn mua hàng trong ứng dụng để mở khóa các tính năng cao cấp. Tất cả các khoản thanh toán đều được xử lý hoàn toàn bởi Apple thông qua App Store — chúng tôi không xử lý, lưu trữ hoặc có quyền truy cập vào thông tin thanh toán của bạn.</PolicyParagraph>

                <PolicyHeading>Những gì Bạn Có thể Mua</PolicyHeading>
                <PolicyParagraph>LiquidBoard cung cấp các tùy chọn mua hàng sau:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Các Tính năng Cao cấp — Mua một lần hoặc đăng ký gói để mở khóa chức năng ứng dụng nâng cao</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Các giao dịch mua có sẵn và giá cả được hiển thị bên trong Ứng dụng tại thời điểm mua. Giá có thể khác nhau tùy theo khu vực và được hiển thị bằng đơn vị tiền tệ địa phương của bạn.</PolicyParagraph>

                <PolicyHeading>Xử lý Thanh toán</PolicyHeading>
                <PolicyParagraph>Tất cả các giao dịch được xử lý an toàn bởi Apple. Chúng tôi không bao giờ nhìn thấy hoặc lưu trữ thẻ tín dụng, địa chỉ thanh toán hoặc bất kỳ chi tiết thanh toán nào của bạn.</PolicyParagraph>
                <PolicyParagraph>Bằng việc hoàn tất giao dịch mua, bạn đồng ý với Điều khoản Bán hàng của App Store do Apple quy định. Phương thức thanh toán được lưu trữ trên Apple của bạn sẽ bị tính phí tại thời điểm xác nhận giao dịch mua.</PolicyParagraph>

                <PolicyHeading>Khôi phục Giao dịch mua</PolicyHeading>
                <PolicyParagraph>Nếu bạn cài đặt lại LiquidBoard hoặc chuyển sang thiết bị mới, bạn có thể khôi phục tất cả các giao dịch mua trước đó mà không mất thêm phí bằng cách sử dụng tùy chọn Khôi phục Mua hàng (Restore Purchases) bên trong Ứng dụng. Các giao dịch mua được gắn với Apple ID của bạn và có sẵn trên tất cả các thiết bị đăng nhập cùng một tài khoản.</PolicyParagraph>

                <PolicyHeading>Đăng ký (Subscriptions)</PolicyHeading>
                <PolicyParagraph>Nếu LiquidBoard cung cấp các tùy chọn mua hàng theo hình thức đăng ký (subscription):</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Các gói đăng ký tự động gia hạn trừ khi bị hủy ít nhất 24 giờ trước khi kết thúc chu kỳ thanh toán hiện tại</PolicyListItem>
                  <PolicyListItem>Apple ID của bạn sẽ bị tính phí gia hạn trong vòng 24 giờ trước khi kết thúc chu kỳ hiện tại</PolicyListItem>
                  <PolicyListItem>Bạn có thể quản lý hoặc hủy đăng ký bất cứ lúc nào trong Cài đặt → [Tên của bạn] → Đăng ký (Subscriptions)</PolicyListItem>
                  <PolicyListItem>Việc hủy đăng ký sẽ có hiệu lực vào cuối kỳ thanh toán hiện tại — bạn vẫn giữ được quyền truy cập cho đến lúc đó</PolicyListItem>
                  <PolicyListItem>Các khoảng thời gian dùng thử miễn phí, nếu được cung cấp, sẽ tự động chuyển thành gói đăng ký trả phí trừ khi bị hủy trước khi thời gian dùng thử kết thúc</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Chính sách Hoàn tiền</PolicyHeading>
                <PolicyParagraph>Chúng tôi không xử lý hoàn tiền trực tiếp. Mọi yêu cầu hoàn tiền phải được gửi tới Apple, vì họ là đơn vị bán hàng chính thức (merchant of record) cho tất cả các giao dịch trên App Store.</PolicyParagraph>
                <PolicyParagraph>Apple xử lý việc hoàn tiền theo quyết định của họ và tuân theo chính sách hoàn tiền của Apple. Các trường hợp hợp lệ phổ biến bao gồm mua hàng do sơ ý, các khoản phí trái phép hoặc các giao dịch mua không hoạt động như mô tả.</PolicyParagraph>
                <PolicyParagraph>Để yêu cầu hoàn tiền từ Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Truy cập <PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink> và đăng nhập bằng Apple ID của bạn</PolicyListItem>
                  <PolicyListItem>Tìm giao dịch mua LiquidBoard và nhấn vào Báo cáo Sự cố (Report a Problem)</PolicyListItem>
                  <PolicyListItem>Chọn lý do và gửi yêu cầu của bạn</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple thường phản hồi trong vòng vài ngày làm việc. Các quyết định hoàn tiền hoàn toàn do Apple quyết định.</PolicyParagraph>

                <PolicyHeading>Thay đổi Giá</PolicyHeading>
                <PolicyParagraph>Chúng tôi có quyền thay đổi giá cho các giao dịch mua trong ứng dụng bất cứ lúc nào. Các thay đổi về giá đối với các gói đăng ký sẽ được thông báo trước thông qua Ứng dụng hoặc App Store và sẽ có hiệu lực vào thời điểm bắt đầu chu kỳ thanh toán tiếp theo của bạn. Bạn sẽ được Apple thông báo trước khi bất kỳ sự thay đổi giá đăng ký nào có hiệu lực.</PolicyParagraph>

                <PolicyHeading>Các Giao dịch Mua không Thành công hoặc Không hoàn tất</PolicyHeading>
                <PolicyParagraph>Nếu giao dịch mua bị lỗi hoặc bạn đã bị tính phí nhưng không nhận được nội dung, trước tiên hãy thử khôi phục lại các giao dịch mua trong Ứng dụng. Nếu sự cố vẫn tiếp diễn, vui lòng liên hệ với chúng tôi tại <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink> và chúng tôi sẽ nhanh chóng điều tra.</PolicyParagraph>

                <PolicyHeading>Liên hệ</PolicyHeading>
                <PolicyParagraph>Đối với các câu hỏi về thanh toán hoặc các vấn đề mua hàng, hãy liên hệ với chúng tôi tại: <PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>Để được hoàn tiền, vui lòng sử dụng kênh chính thức của Apple: <PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
