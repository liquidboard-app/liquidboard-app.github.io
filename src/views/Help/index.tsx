import React, { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '@/contexts/LanguageContext';
import { PageWrapper } from '../styled';

const TabContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`;

const TabLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  padding: 8px 20px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  transition: all 0.2s ease;

  &:hover {
    color: white;
    border-color: rgba(255, 255, 255, 0.3);
  }

  &.active {
    color: #000;
    background: white;
    border-color: white;
  }
`;

const DocsPlaceholder = styled.div`
  padding: 40px 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
`;

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

const FaqCard = styled.div`
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.09);
  overflow: hidden;
  transition: all 0.3s ease;
`;

const FaqHeader = styled.button`
  width: 100%;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  color: white;
  font-size: 17px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const IconWrapper = styled.span<{ $isOpen: boolean }>`
  flex-shrink: 0;
  margin-left: 16px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FaqGrid = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              padding 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  padding: ${({ $isOpen }) => ($isOpen ? '12px 24px 24px' : '0 24px')};
`;

const FaqContentInner = styled.div`
  overflow: hidden;
  
  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
  }
`;

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FaqCard>
      <FaqHeader onClick={() => setIsOpen(!isOpen)}>
        {question}
        <IconWrapper $isOpen={isOpen}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </IconWrapper>
      </FaqHeader>
      <FaqGrid $isOpen={isOpen}>
        <FaqContentInner>
          <p>{answer}</p>
        </FaqContentInner>
      </FaqGrid>
    </FaqCard>
  );
};

const Help: React.FC = () => {
  const { lang, t } = useTranslation();

  const faqs = [
    {
      q: lang === 'vi' ? 'LiquidBoard là gì?' : 'What is LiquidBoard?',
      a: lang === 'vi' 
        ? 'LiquidBoard là một ứng dụng nhỏ giúp bạn lưu trữ văn bản và hình ảnh để sao chép và dán tiện lợi từ bàn phím. Ngoài ra, bạn còn có thể tạo nhãn dán để sử dụng nhanh trong các ứng dụng khác.'
        : 'LiquidBoard is a compact app that helps you store text and images for convenient copying and pasting from your keyboard. Additionally, you can create stickers for quick use in other apps.'
    },
    {
      q: lang === 'vi' ? 'Làm thế nào để bắt đầu sử dụng LiquidBoard?' : 'How do I get started with LiquidBoard?',
      a: lang === 'vi'
        ? 'Để sử dụng LiquidBoard, bạn chỉ cần hai bước: thêm bàn phím LiquidBoard vào mục Bàn Phím trong Cài Đặt và cấp quyền cần thiết để bàn phím hoạt động. Sau đó, bạn đã có thể bắt đầu sử dụng.'
        : 'To use LiquidBoard, you just need two steps: add the LiquidBoard keyboard in the Keyboards section under Settings, and grant the necessary permissions for the keyboard to function. After that, you can start using it.'
    },
    {
      q: lang === 'vi' ? 'Tại sao LiquidBoard cần quyền sử dụng và tôi có thể không cấp quyền được không?' : 'Why does LiquidBoard need Full Access and can I choose not to grant it?',
      a: lang === 'vi'
        ? 'Bạn cần cấp quyền để có thể dán ảnh từ bàn phím vào ứng dụng khác. Đây là yêu cầu của Apple đối với tất cả bàn phím bên thứ ba. Nếu không cấp quyền, bạn vẫn có thể gửi văn bản sau khi thêm bàn phím, nhưng sẽ không thể gửi ảnh, gửi nhãn dán hoặc dùng tính năng Bảng Tạm Hệ Thống. LiquidBoard cam kết bảo mật dữ liệu, được Apple kiểm duyệt thường xuyên và chúng tôi không có nhu cầu sử dụng bất kỳ dữ liệu nào của khách hàng.'
        : 'You need to grant Full Access to be able to paste images from the keyboard into other apps. This is a requirement by Apple for all third-party keyboards. If you do not grant access, you can still send text after adding the keyboard, but you will not be able to send images, stickers, or use the System Clipboard feature. LiquidBoard commits to data privacy, is regularly reviewed by Apple, and we have no desire to use any customer data.'
    },
    {
      q: lang === 'vi' ? 'Làm thế nào để mở và sử dụng bàn phím LiquidBoard?' : 'How do I open and use the LiquidBoard keyboard?',
      a: lang === 'vi'
        ? 'Hãy mở bất kỳ ứng dụng nào có ô nhập liệu để hiện bàn phím thông thường. Sau đó bấm vào biểu tượng hình quả địa cầu ở góc dưới bên trái, chọn LiquidBoard trong danh sách bàn phím là bạn sẽ vào được giao diện bàn phím của ứng dụng.'
        : 'Open any app with a text input field to show the regular keyboard. Then tap the globe icon in the bottom left corner, select LiquidBoard from the keyboard list, and you will enter the app\'s keyboard interface.'
    },
    {
      q: lang === 'vi' ? 'Làm thế nào để dán văn bản, ảnh hoặc nhãn dán?' : 'How do I paste text, images, or stickers?',
      a: lang === 'vi'
        ? 'Với văn bản, bạn chỉ cần chạm vào nội dung muốn dán là nó sẽ xuất hiện trong ô nhập liệu. Bạn cũng có thể dùng các phím chức năng bên dưới để thêm khoảng cách, xoá hoặc xuống dòng. Với ảnh và nhãn dán, hãy chạm vào nội dung cần sao chép, sau đó nhấn giữ trong ô nhập liệu và chọn Dán. Một số ứng dụng sẽ hiện phần xem trước và bạn chỉ cần bấm Gửi. Nếu ô nhập liệu không có nút Dán, thường là do ứng dụng đó hoặc vị trí nhập liệu đó chỉ cho phép văn bản chứ không hỗ trợ ảnh.'
        : 'For text, simply tap the content you want to paste and it will appear in the input field. You can also use the function keys below to add spaces, delete, or add new lines. For images and stickers, tap the content to copy it, then long-press in the input field and select Paste. Some apps will show a preview and you just need to tap Send. If the input field doesn\'t have a Paste button, it usually means that app or specific input area only allows text and doesn\'t support images.'
    },
    {
      q: lang === 'vi' ? 'Tôi có thể tuỳ chỉnh giao diện bàn phím không?' : 'Can I customize the keyboard interface?',
      a: lang === 'vi'
        ? 'Có. Trong Cài Đặt, hãy mở mục Giao Diện Bàn Phím để thay đổi số văn bản trên một dòng, số dòng nội dung, số ảnh hiển thị, số nhãn dán hiển thị và nhiều tuỳ chọn khác. Trong ứng dụng, bạn cũng có thể điều chỉnh thêm ở mục Giao Diện Ứng Dụng như chiều cao bàn phím, vị trí nút sao chép hoặc việc ẩn các phím chức năng.'
        : 'Yes. In Settings, open the Keyboard Appearance section to change the number of texts per row, number of content rows, images displayed, stickers displayed, and many other options. Within the app, you can also adjust App Appearance settings such as keyboard height, copy button position, or hiding function keys.'
    },
    {
      q: lang === 'vi' ? 'Nhãn Dán hoạt động như thế nào?' : 'How do Stickers work?',
      a: lang === 'vi'
        ? 'Bạn chỉ cần thêm ảnh muốn tạo nhãn dán. LiquidBoard sử dụng công cụ tách nền có sẵn của iOS để tự động nhận diện người hoặc vật thể trong ảnh. Trong vài giây, nhãn dán sẽ sẵn sàng để sử dụng. Tuy nhiên, không phải ảnh nào cũng cho kết quả đẹp; những ảnh có chủ thể rõ ràng và tách biệt với phông nền thường cho kết quả tốt hơn.'
        : 'You just need to add the image you want to create a sticker from. LiquidBoard uses the built-in iOS background removal tool to automatically detect people or objects in the image. In a few seconds, the sticker will be ready to use. However, not all images yield beautiful results; images with clear subjects separated from the background usually perform better.'
    },
    {
      q: lang === 'vi' ? 'Nhãn Dán có bị tải lên bất kỳ hệ thống xử lý nào không?' : 'Are Stickers uploaded to any processing systems?',
      a: lang === 'vi'
        ? 'Hoàn toàn không. LiquidBoard sử dụng công cụ có sẵn của iOS từ Apple để nhận diện người và vật thể. Toàn bộ quá trình tạo nhãn dán diễn ra ngay trên thiết bị, không cần mạng và không tải dữ liệu của bạn lên bất kỳ nơi nào khác.'
        : 'Absolutely not. LiquidBoard uses Apple\'s built-in iOS tools to detect people and objects. The entire sticker creation process happens on-device, requires no internet connection, and does not upload your data anywhere else.'
    },
    {
      q: lang === 'vi' ? 'Bảng Tạm Hệ Thống và Nội Dung Tự Huỷ là gì?' : 'What are System Clipboard and Auto-Destruct Content?',
      a: lang === 'vi'
        ? 'Bảng Tạm Hệ Thống cho phép bạn sao chép văn bản và hình ảnh từ ứng dụng khác vào LiquidBoard thay vì phải thêm thủ công. Khi bật tính năng này, hệ thống có thể hiển thị thông báo hỏi bạn có muốn dán nội dung vừa sao chép vào đây hay không. Nội Dung Tự Huỷ là tính năng bổ trợ cho luồng này: nếu bạn chỉ cần dùng tạm nội dung trong một thời gian ngắn, bạn có thể đặt bộ đếm thời gian để văn bản và ảnh tự động bị xoá sau khi hết hạn.'
        : 'System Clipboard allows you to copy text and images from other apps into LiquidBoard instead of adding them manually. When this feature is enabled, the system might show a prompt asking if you want to paste the copied content. Auto-Destruct Content is a supplementary feature for this workflow: if you only need the content temporarily, you can set a timer so the text and images are automatically deleted after they expire.'
    },
    {
      q: lang === 'vi' ? 'Tôi có thể khôi phục nội dung đã xoá không?' : 'Can I recover deleted content?',
      a: lang === 'vi'
        ? 'Có. Văn bản, ảnh và nhãn dán đã xoá sẽ được chuyển vào mục Đã Xoá Gần Đây trong Cài Đặt. Bạn có thể khôi phục hoặc xoá vĩnh viễn chúng tại đó. Thời hạn lưu trong Đã Xoá Gần Đây là 30 ngày tính từ thời điểm xoá; sau thời gian này, những nội dung chưa khôi phục sẽ bị xoá vĩnh viễn khỏi bộ nhớ.'
        : 'Yes. Deleted text, images, and stickers are moved to the Recently Deleted section in Settings. You can recover or permanently delete them there. Items are kept in Recently Deleted for 30 days from the time of deletion; after this period, unrecovered content will be permanently deleted from memory.'
    },
    {
      q: lang === 'vi' ? 'LiquidBoard có miễn phí không và các gói hoạt động như thế nào?' : 'Is LiquidBoard free and how do the plans work?',
      a: lang === 'vi'
        ? 'LiquidBoard vẫn hoạt động đầy đủ ở gói Free với số lượng văn bản, ảnh và nhãn dán giới hạn để bạn trải nghiệm. Nếu cần nhiều dung lượng hơn, bạn có thể nâng cấp lên Plus, Pro hoặc Max. Đây là các gói mua một lần, không phải trả phí hàng tháng. Ứng dụng áp dụng giá nâng cấp luỹ tiến, nghĩa là khi bạn đã mua một gói thấp hơn, giá trị đó sẽ được trừ khi nâng cấp lên gói cao hơn. Nếu cần hoàn tiền, bạn có thể gửi yêu cầu hoàn tiền nhưng quyết định cuối cùng vẫn thuộc về Apple. Khi đổi điện thoại hoặc cài lại ứng dụng, hãy dùng mục Khôi Phục Mua Hàng trong màn hình Nâng Cấp để lấy lại gói đã mua.'
        : 'LiquidBoard functions fully on the Free plan with a limited number of texts, images, and stickers for you to experience. If you need more capacity, you can upgrade to Plus, Pro, or Max. These are one-time purchases, not monthly subscriptions. The app applies progressive upgrade pricing, meaning if you bought a lower plan, its value will be deducted when upgrading to a higher plan. If you need a refund, you can submit a refund request but the final decision rests with Apple. When changing phones or reinstalling the app, use the Restore Purchases option in the Upgrade screen to recover your purchased plan.'
    },
    {
      q: lang === 'vi' ? 'Tôi có thể sao lưu hoặc chia sẻ dữ liệu không?' : 'Can I backup or share my data?',
      a: lang === 'vi'
        ? 'Có. Bạn có thể xuất file JSON hoặc CSV cho văn bản để nhập lại khi cần. Văn bản, ảnh và nhãn dán cũng có thể đồng bộ qua iCloud hoặc lưu về ứng dụng Ảnh trên thiết bị. Ngoài ra, bạn có thể dùng tính năng Chia Sẻ, AirDrop hoặc Xuất File để gửi nội dung sang các ứng dụng khác và lưu vào ứng dụng Tệp.'
        : 'Yes. You can export JSON or CSV files for texts to re-import when needed. Texts, images, and stickers can also be synced via iCloud or saved to the device\'s Photos app. Furthermore, you can use Share, AirDrop, or Export functions to send content to other apps and save them to the Files app.'
    }
  ];

  return (
    <PageWrapper>
      <h1>{t('nav.help')}</h1>
      
      <TabContainer>
        <TabLink to="/help/faq">FAQ</TabLink>
        <TabLink to="/help/docs">Docs</TabLink>
      </TabContainer>

      <Routes>
        <Route path="/" element={<Navigate to="/help/faq" replace />} />
        <Route path="faq" element={
          <FaqContainer>
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </FaqContainer>
        } />
        <Route path="docs" element={
          <DocsPlaceholder>
            {lang === 'vi' ? 'Tài liệu hướng dẫn đang được cập nhật...' : 'Documentation is being updated...'}
          </DocsPlaceholder>
        } />
      </Routes>
    </PageWrapper>
  );
};

export default Help;
