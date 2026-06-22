import { LocaleDict } from './types';

const vi: LocaleDict = {
  nav: {
    home: "Trang chủ",
    about: "Giới Thiệu",
    pricing: "Giá",
    policy: "Chính sách",
    help: "Trợ Giúp",
  },
  hero: {
    line1: "Mang một Clipboard thực sự",
    line2: { left: "vào trong", right: "Bàn phím" },
  },
  header: {
    download: { prefix: "Tải xuống\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  action: {
    download: "Tải LiquidBoard",
    titles: ['Tạo Nhóm', 'Ghim', 'Sao Chép & Nhân Bản', 'Xuất & Nhập File'],
    paragraphs: [
      'Tạo thêm nhóm và phân loại các văn bản, ảnh, nhãn dán theo nhu cầu. Chuyển đổi mượt mà giữa các nhóm và ghim những nhóm cần thiết lên đầu tiên.',
      'Ghim những văn bản, ảnh, nhãn dán quan trọng và sử dụng nhiều lên đầu tiên để gửi nhanh hơn.',
      'Sao chép, nhân bản văn bản, ảnh, nhãn dán dễ dàng và nhanh chóng.',
      'Xuất và nhập văn bản ra JSON, CSV đến ứng dụng Files.',
    ],
    images: [
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard nhom noi dung' },
      { src: '/assets/lb-photos.PNG', alt: 'LiquidBoard ghim noi dung' },
      { src: '/assets/lb-keyboard.PNG', alt: 'LiquidBoard sao chep va nhan ban' },
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard xuat va nhap file' },
    ],
  },
  pricing: {
    intro: { 
      line1: "Các gói được phân phối cho mỗi nhu cầu và công việc khác nhau và có hiệu lực trọn đời.", 
      line2: "Khi bạn nâng cấp từ một gói thấp hơn lên gói cao hơn, chi phí sẽ không thay đổi." 
    },
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Truy Cập Trọn Đời',
        price: '₫0',
        description: 'Cho người dùng Trải Nghiệm',
        features: ['25 Văn Bản', '25 Ảnh', '25 Nhãn Dán', '2 Nhóm Mỗi Loại', '2 Ghim Mỗi Nhóm'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Truy Cập Trọn Đời',
        price: '₫79.000',
        description: 'Cho người dùng Cơ Bản',
        features: ['100 Văn Bản', '100 Ảnh', '100 Nhãn Dán', '5 Nhóm Mỗi Loại', '5 Ghim Mỗi Nhóm'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Truy Cập Trọn Đời',
        price: '₫159.000',
        description: 'Cho người dùng Đa Tác Vụ',
        features: ['250 Văn Bản', '250 Ảnh', '250 Nhãn Dán', '15 Nhóm Mỗi Loại', '15 Ghim Mỗi Nhóm'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Truy Cập Trọn Đời',
        price: '₫289.000',
        description: 'Cho người dùng Chuyên Nghiệp',
        features: ['500 Văn Bản', '500 Ảnh', '500 Nhãn Dán', '40 Nhóm Mỗi Loại', '40 Ghim Mỗi Nhóm'],
      },
    ],
  },
  features: {
    titles: ['Văn bản', 'Hình ảnh', 'Nhãn dán'],
    paragraphs: [
      'Soạn thảo nhiều tài liệu văn bản, thông tin giới thiệu và nội dung phù hợp với nhu cầu viết của bạn. Thiết lập sẵn các mẫu phản hồi để dùng ngay. Nhập và chia sẻ nhanh thông tin liên hệ. Lưu website, đoạn mã, cấu trúc prompt AI để tra cứu và tái sử dụng hiệu quả.',
      'Chia sẻ nhanh mã QR thanh toán và mã QR chuyển khoản ngân hàng. Truy cập bộ sưu tập đa dạng gồm prototype sản phẩm, mockup thiết kế, infographic, và ảnh hướng dẫn. Sắp xếp và truy xuất tài nguyên hình ảnh mượt mà cho giao tiếp chuyên nghiệp.',
      'Tạo và chia sẻ ngay sticker, meme yêu thích, lời chúc, và những biểu cảm cảm xúc để kết nối với người thân và khách hàng. Cá nhân hóa giao tiếp bằng các yếu tố hình ảnh truyền tải cảm xúc và tăng sự gắn kết.',
    ],
    images: [
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard doan van ban' },
      { src: '/assets/lb-photos.PNG', alt: 'LiquidBoard bang anh' },
      { src: '/assets/lb-keyboard.PNG', alt: 'LiquidBoard ban phim' },
    ],
  },
  policy: {
    dataSecurity: "Bảo mật Dữ liệu",
    privacy: "Quyền riêng tư",
    terms: "Điều khoản Sử dụng",
    payment: "Thanh toán và Hoàn tiền",
  },
  help: {
    faqTab: 'Câu hỏi thường gặp',
    docsTab: 'Tài liệu',
    docsPlaceholder: 'Tài liệu đang được cập nhật...',
  }
};

export default vi;
