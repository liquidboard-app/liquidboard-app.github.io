import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '@/contexts/LanguageContext';
import { PageWrapper } from '../styled';

const AboutContent = styled.div`
  display: grid;
  gap: 22px;

  p {
    margin: 0;
  }

  a {
    color: var(--text);
    font-weight: 650;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.34);
  }

  a:hover {
    border-bottom-color: rgba(255, 255, 255, 0.78);
  }
`;

const About: React.FC = () => {
  const { lang, t } = useTranslation();

  return (
    <PageWrapper>

      <AboutContent>
        <p>
          {lang === 'vi'
            ? 'LiquidBoard là ứng dụng quản lý clipboard cho văn bản và hình ảnh. Ứng dụng giúp bạn tự tạo nội dung dùng thường xuyên hoặc lưu trữ nội dung sao chép từ ứng dụng khác. Các tính năng như tìm kiếm, sắp xếp, phân nhóm, ghim nội dung cần thiết và xuất file theo định dạng JSON hoặc CSV đều được hỗ trợ để đơn giản hóa việc quản lý dữ liệu.'
            : 'LiquidBoard is a clipboard management app for text and images. The app helps you create frequently used content or store content copied from other apps. Features like search, sorting, grouping, pinning essential content, and exporting files in JSON or CSV format are all supported to simplify data management.'}
        </p>

        <p>
          {lang === 'vi'
            ? 'LiquidBoard tích hợp vào bàn phím của bạn để việc gửi văn bản, hình ảnh đã lưu trữ sẵn hoặc đã sao chép trước đó trở nên dễ dàng hơn. Bạn có thể tận dụng ứng dụng để lưu trữ các câu thoại lặp lại thường xuyên hằng ngày với khách hàng, nội dung báo cáo, liên kết bán hàng, số tài khoản, địa chỉ, ảnh QR Code, ... Ngoài ra, LiquidBoard còn có mục Nhãn Dán, cho phép bạn tạo nhãn dán từ hình ảnh đã thêm vào.'
            : 'LiquidBoard integrates into your keyboard to make sending pre-stored or previously copied text and images easier. You can utilize the app to store recurring daily phrases for customers, report contents, sales links, account numbers, addresses, QR Codes, etc. Additionally, LiquidBoard has a Stickers section, allowing you to create stickers from added images.'}
        </p>

        <p>
          {lang === 'vi' ? (
            <>Tất cả dữ liệu đều được lưu trữ cục bộ và an toàn trên thiết bị và iCloud của bạn (sau khi liên kết iCloud). LiquidBoard cam kết không lưu trữ, không tải bất kỳ dữ liệu nào của bạn lên bất kỳ nơi nào khác. Mọi cam kết đều được thực hiện và kiểm soát bởi Apple thông qua các tài liệu <Link to="/policy">Bảo Mật Dữ Liệu</Link> và <Link to="/policy">Quyền Riêng Tư</Link> trong ứng dụng. Chúng tôi công khai các tài liệu này trong ứng dụng và trên website của mình và bạn có thể tìm đọc dễ dàng tại <Link to="/policy">Bảo Mật Dữ Liệu</Link> và <Link to="/policy">Quyền Riêng Tư</Link>.</>
          ) : (
            <>All data is stored locally and securely on your device and iCloud (after linking iCloud). LiquidBoard commits not to store or upload any of your data anywhere else. All commitments are enforced and controlled by Apple through the <Link to="/policy">Data Security</Link> and <Link to="/policy">Privacy</Link> policies within the app. We publish these documents publicly in the app and on our website, and you can easily find them at <Link to="/policy">Data Security</Link> and <Link to="/policy">Privacy</Link>.</>
          )}
        </p>
      </AboutContent>
    </PageWrapper>
  );
};

export default About;
