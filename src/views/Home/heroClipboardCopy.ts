export type HeroTextItemKey =
  | 'meetingFollowUp'
  | 'deliveryAddress'
  | 'emailReplyTemplate'
  | 'projectBrief'
  | 'weeklyStatusUpdate'
  | 'quickCustomerReply'
  | 'launchAnnouncement'
  | 'travelChecklist'
  | 'invoiceReminder'
  | 'pastaDinnerRecipe'
  | 'aiWritingPrompt'
  | 'contentStrategyAgent';

export type HeroColorItemKey = 'electricBlue' | 'warmLemon' | 'deepViolet' | 'softRose' | 'freshGreen' | 'basaltBlack' | 'oceanBlue';
export type HeroClipboardItemKey = HeroTextItemKey | HeroColorItemKey;

type HeroClipboardCopy = { title: string; body: string };

const colorCodes: Record<HeroColorItemKey, string> = {
  electricBlue: '#243CFF', warmLemon: '#F4CB3F', deepViolet: '#7C4DFF',
  softRose: '#F4A4B7', freshGreen: '#35C878', basaltBlack: '#151515', oceanBlue: '#2B8CFF',
};

const colorLabels: Record<string, Record<HeroColorItemKey, string>> = {
  en: { electricBlue: 'Electric Blue', warmLemon: 'Warm Lemon', deepViolet: 'Deep Violet', softRose: 'Soft Rose', freshGreen: 'Fresh Green', basaltBlack: 'Basalt Black', oceanBlue: 'Ocean Blue' },
  vi: { electricBlue: 'Xanh Điện', warmLemon: 'Vàng Chanh', deepViolet: 'Tím Đậm', softRose: 'Hồng Phấn', freshGreen: 'Xanh Tươi', basaltBlack: 'Đen Bazan', oceanBlue: 'Xanh Đại Dương' },
  ja: { electricBlue: 'エレクトリックブルー', warmLemon: 'ウォームレモン', deepViolet: 'ディープバイオレット', softRose: 'ソフトローズ', freshGreen: 'フレッシュグリーン', basaltBlack: '玄武岩ブラック', oceanBlue: 'オーシャンブルー' },
  es: { electricBlue: 'Azul Eléctrico', warmLemon: 'Amarillo Limón', deepViolet: 'Violeta Intenso', softRose: 'Rosa Suave', freshGreen: 'Verde Fresco', basaltBlack: 'Negro Basalto', oceanBlue: 'Azul Océano' },
  'zh-TW': { electricBlue: '電光藍', warmLemon: '暖檸黃', deepViolet: '深紫色', softRose: '柔玫粉', freshGreen: '清新綠', basaltBlack: '玄武黑', oceanBlue: '海洋藍' },
  'zh-CN': { electricBlue: '电光蓝', warmLemon: '暖柠黄', deepViolet: '深紫色', softRose: '柔玫粉', freshGreen: '清新绿', basaltBlack: '玄武黑', oceanBlue: '海洋蓝' },
  'pt-BR': { electricBlue: 'Azul Elétrico', warmLemon: 'Amarelo Limão', deepViolet: 'Violeta Profundo', softRose: 'Rosa Suave', freshGreen: 'Verde Fresco', basaltBlack: 'Preto Basalto', oceanBlue: 'Azul Oceano' },
  fr: { electricBlue: 'Bleu Électrique', warmLemon: 'Jaune Citron', deepViolet: 'Violet Profond', softRose: 'Rose Doux', freshGreen: 'Vert Frais', basaltBlack: 'Noir Basalte', oceanBlue: 'Bleu Océan' },
  de: { electricBlue: 'Elektrisches Blau', warmLemon: 'Warmes Zitronengelb', deepViolet: 'Tiefviolett', softRose: 'Zartrosa', freshGreen: 'Frisches Grün', basaltBlack: 'Basaltschwarz', oceanBlue: 'Ozeanblau' },
  ru: { electricBlue: 'Электрический Синий', warmLemon: 'Тёплый Лимонный', deepViolet: 'Глубокий Фиолетовый', softRose: 'Нежный Розовый', freshGreen: 'Свежий Зелёный', basaltBlack: 'Базальтовый Чёрный', oceanBlue: 'Океанический Синий' },
  ko: { electricBlue: '일렉트릭 블루', warmLemon: '웜 레몬', deepViolet: '딥 바이올렛', softRose: '소프트 로즈', freshGreen: '프레시 그린', basaltBlack: '현무암 블랙', oceanBlue: '오션 블루' },
  hi: { electricBlue: 'इलेक्ट्रिक ब्लू', warmLemon: 'गर्म लेमन', deepViolet: 'गहरा वायलेट', softRose: 'हल्का रोज़', freshGreen: 'ताज़ा हरा', basaltBlack: 'बेसाल्ट ब्लैक', oceanBlue: 'ओशन ब्लू' },
  bn: { electricBlue: 'ইলেকট্রিক নীল', warmLemon: 'উষ্ণ লেবু', deepViolet: 'গভীর বেগুনি', softRose: 'নরম গোলাপি', freshGreen: 'সতেজ সবুজ', basaltBlack: 'ব্যাসল্ট কালো', oceanBlue: 'সমুদ্র নীল' },
  id: { electricBlue: 'Biru Elektrik', warmLemon: 'Kuning Lemon', deepViolet: 'Ungu Pekat', softRose: 'Merah Muda Lembut', freshGreen: 'Hijau Segar', basaltBlack: 'Hitam Basalt', oceanBlue: 'Biru Laut' },
  it: { electricBlue: 'Blu Elettrico', warmLemon: 'Giallo Limone', deepViolet: 'Viola Intenso', softRose: 'Rosa Delicato', freshGreen: 'Verde Fresco', basaltBlack: 'Nero Basalto', oceanBlue: 'Blu Oceano' },
  th: { electricBlue: 'น้ำเงินไฟฟ้า', warmLemon: 'เหลืองเลมอน', deepViolet: 'ม่วงเข้ม', softRose: 'ชมพูอ่อน', freshGreen: 'เขียวสด', basaltBlack: 'ดำบะซอลต์', oceanBlue: 'น้ำเงินมหาสมุทร' },
  tl: { electricBlue: 'Electric Blue', warmLemon: 'Warm Lemon', deepViolet: 'Deep Violet', softRose: 'Soft Rose', freshGreen: 'Fresh Green', basaltBlack: 'Basalt Black', oceanBlue: 'Ocean Blue' },
  pl: { electricBlue: 'Elektryczny Niebieski', warmLemon: 'Ciepła Cytryna', deepViolet: 'Głęboki Fiolet', softRose: 'Delikatny Róż', freshGreen: 'Świeża Zieleń', basaltBlack: 'Bazaltowa Czerń', oceanBlue: 'Oceaniczny Błękit' },
  tr: { electricBlue: 'Elektrik Mavisi', warmLemon: 'Sıcak Limon', deepViolet: 'Koyu Mor', softRose: 'Yumuşak Pembe', freshGreen: 'Taze Yeşil', basaltBlack: 'Bazalt Siyahı', oceanBlue: 'Okyanus Mavisi' },
};

const textCopy: Record<string, Partial<Record<HeroTextItemKey, HeroClipboardCopy>>> = {
  en: {
    meetingFollowUp: { title: 'Meeting Follow-up', body: 'Hi Alex, thanks for the thoughtful conversation today. I have outlined the next steps, noted the open questions, and will share the revised timeline by Friday after checking it with the design and engineering teams.' },
    deliveryAddress: { title: 'Delivery Address', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678. Please call the recipient on arrival, leave the parcel with reception if unavailable, and send a short delivery confirmation.' },
    emailReplyTemplate: { title: 'Email Reply Template', body: 'Hi Sarah, thank you for reaching out. I would be happy to help, will review the details carefully, and return with a clear answer within one business day, including the most useful next steps.' },
    projectBrief: { title: 'Project Brief', body: 'Create a simple, calm landing page that makes the product feel useful in the first five seconds and works beautifully on mobile. Keep the hierarchy clear, the interactions pleasantly lightweight, and the visual rhythm consistent across every section.' },
    weeklyStatusUpdate: { title: 'Weekly Status Update', body: 'This week we completed the onboarding flow, resolved the top visual issues, and are ready to review the final mobile experience with the team on Thursday before preparing the release notes.' },
    quickCustomerReply: { title: 'Quick Customer Reply', body: 'Thanks for your message. Your request is in progress, and we will send an update as soon as everything is ready for you. We appreciate your patience and will make sure the final details are clear.' },
    launchAnnouncement: { title: 'Launch Announcement', body: 'We are excited to share the new release. It is faster, simpler to use, includes the tools you asked for most, and is ready for you to explore today with a refreshed, more focused experience.' },
    travelChecklist: { title: 'Travel Checklist', body: 'Passport, charger, travel adapter, hotel confirmation, airport transfer details, emergency contact number, a downloaded copy of your travel documents, and the local weather forecast for your arrival day.' },
    invoiceReminder: { title: 'Invoice Reminder', body: 'Invoice #INV-2048 is due on 28 August. Please review the attached breakdown and let me know once the payment has been scheduled.' },
    pastaDinnerRecipe: { title: 'Pasta Dinner Recipe', body: 'Cook the pasta until al dente, then toss it with roasted tomatoes, basil, garlic, olive oil, and a generous handful of parmesan.' },
    aiWritingPrompt: { title: 'AI-PROMPT.MD', body: '# AI Writing Prompt\n\n## Goal\nWrite a clear, friendly product update. Lead with the user benefit, keep it under 120 words, and end with one practical next step.' },
    contentStrategyAgent: { title: 'CONTENT-AGENT.MD', body: '# Content Strategy Agent\n\n## Instructions\nTurn a rough brief into an outline with audience, key message, three ideas, and a concise call to action.' },
  },
  vi: {
    meetingFollowUp: { title: 'Ghi Chú Sau Cuộc Họp', body: 'Chào Alex, cảm ơn bạn về cuộc trao đổi hôm nay. Tôi đã tổng hợp các bước tiếp theo, ghi lại các điểm cần làm rõ và sẽ gửi tiến độ điều chỉnh vào thứ Sáu sau khi rà soát cùng nhóm thiết kế và kỹ thuật.' },
    deliveryAddress: { title: 'Địa Chỉ Giao Hàng', body: 'Nguyễn Văn A · 58 Lê Lợi, Quận 1, Thành phố Hồ Chí Minh · +84 912 345 678. Vui lòng gọi cho người nhận khi đến, gửi tại quầy lễ tân nếu không liên lạc được và nhắn xác nhận sau khi giao.' },
    emailReplyTemplate: { title: 'Mẫu Trả Lời Email', body: 'Chào Sarah, cảm ơn bạn đã liên hệ. Tôi rất sẵn lòng hỗ trợ, sẽ xem kỹ các thông tin và phản hồi rõ ràng trong vòng một ngày làm việc, kèm các bước tiếp theo hữu ích nhất.' },
    projectBrief: { title: 'Yêu Cầu Dự Án', body: 'Tạo một trang đích đơn giản, nhẹ nhàng, thể hiện rõ giá trị sản phẩm ngay từ vài giây đầu và hoạt động tốt trên di động. Giữ thứ bậc nội dung rõ ràng, tương tác nhẹ nhàng và nhịp thị giác nhất quán ở mọi phần.' },
    weeklyStatusUpdate: { title: 'Cập Nhật Hàng Tuần', body: 'Tuần này chúng tôi hoàn thành luồng onboarding, xử lý các lỗi giao diện chính và sẵn sàng rà soát trải nghiệm di động cuối cùng cùng cả nhóm vào thứ Năm trước khi viết ghi chú phát hành.' },
    quickCustomerReply: { title: 'Phản Hồi Khách Hàng', body: 'Cảm ơn bạn đã nhắn tin. Yêu cầu của bạn đang được xử lý và chúng tôi sẽ cập nhật ngay khi mọi thứ sẵn sàng. Cảm ơn bạn đã kiên nhẫn chờ đợi, chúng tôi sẽ làm rõ các chi tiết cuối cùng.' },
    launchAnnouncement: { title: 'Thông Báo Ra Mắt', body: 'Chúng tôi rất vui được giới thiệu phiên bản mới. Ứng dụng nhanh hơn, dễ dùng hơn, có các công cụ bạn mong đợi nhất và đã sẵn sàng để bạn khám phá với trải nghiệm mới tập trung hơn.' },
    travelChecklist: { title: 'Danh Sách Du Lịch', body: 'Hộ chiếu, sạc, đầu chuyển điện, xác nhận khách sạn, thông tin đưa đón sân bay, ghi chú số liên hệ khẩn cấp, bản sao giấy tờ du lịch đã tải về và dự báo thời tiết ngày đến.' },
    invoiceReminder: { title: 'Nhắc Thanh Toán', body: 'Hóa đơn #INV-2048 đến hạn vào ngày 28 tháng 8. Vui lòng xem lại bảng chi tiết đính kèm và báo tôi khi thanh toán đã được lên lịch.' },
    pastaDinnerRecipe: { title: 'Công Thức Mì Ý', body: 'Luộc mì đến khi vừa chín tới, sau đó trộn cùng cà chua nướng, húng quế, tỏi, dầu ô liu và một ít phô mai parmesan.' },
    aiWritingPrompt: { title: 'AI-PROMPT.MD', body: '# AI Writing Prompt\n\n## Mục tiêu\nViết cập nhật sản phẩm rõ ràng, thân thiện. Mở đầu bằng lợi ích cho người dùng, dưới 120 từ và kết bằng một bước tiếp theo cụ thể.' },
    contentStrategyAgent: { title: 'CONTENT-AGENT.MD', body: '# Content Strategy Agent\n\n## Hướng dẫn\nBiến brief thô thành dàn ý gồm đối tượng đọc, thông điệp chính, ba ý tưởng nội dung và lời kêu gọi hành động ngắn gọn.' },
  },
  ja: {
    meetingFollowUp: { title: '会議後のフォローアップ', body: 'Alexさん、本日は有意義なお話をありがとうございました。次のステップをまとめ、金曜日までに更新したスケジュールをお送りします。' },
    deliveryAddress: { title: '配送先住所', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678。' },
    emailReplyTemplate: { title: 'メール返信テンプレート', body: 'Sarahさん、お問い合わせありがとうございます。喜んでお手伝いします。1営業日以内に詳しい回答をお送りします。' },
    projectBrief: { title: 'プロジェクト概要', body: '最初の数秒で製品の価値が伝わり、モバイルでも美しく動作する、シンプルで落ち着いたランディングページを作成します。' },
    weeklyStatusUpdate: { title: '週間進捗報告', body: '今週はオンボーディングフローを完了し、主要な表示課題を解決しました。最終的なモバイル体験のレビュー準備も整っています。' },
    quickCustomerReply: { title: '顧客へのクイック返信', body: 'メッセージをありがとうございます。ご依頼を処理中です。準備が整い次第、すぐにお知らせします。' },
    launchAnnouncement: { title: 'リリースのお知らせ', body: '新しいリリースをお届けできることを嬉しく思います。より速く、より簡単になり、ご要望の多かった機能を追加しました。' },
    travelChecklist: { title: '旅行チェックリスト', body: 'パスポート、充電器、変換プラグ、ホテル予約、空港送迎の詳細、緊急連絡先のメモ。' },
    invoiceReminder: { title: '請求書リマインダー', body: '請求書 #INV-2048 の支払期限は8月28日です。添付の明細をご確認のうえ、支払い予定が決まりましたらお知らせください。' },
    pastaDinnerRecipe: { title: 'パスタのレシピ', body: 'パスタをアルデンテに茹で、ローストトマト、バジル、にんにく、オリーブオイル、パルメザンチーズと和えます。' },
  },
  es: {
    meetingFollowUp: { title: 'Seguimiento de Reunión', body: 'Hola Alex, gracias por la conversación de hoy. He resumido los próximos pasos y compartiré el cronograma actualizado el viernes.' },
    deliveryAddress: { title: 'Dirección de Entrega', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'Plantilla de Respuesta', body: 'Hola Sarah, gracias por escribir. Será un placer ayudar y volveré con una respuesta detallada dentro de un día hábil.' },
    projectBrief: { title: 'Resumen del Proyecto', body: 'Crea una landing sencilla y serena que comunique el valor del producto en los primeros segundos y funcione muy bien en móvil.' },
    weeklyStatusUpdate: { title: 'Actualización Semanal', body: 'Esta semana completamos el flujo de incorporación, resolvimos los principales problemas visuales y ya podemos revisar la experiencia móvil final.' },
    quickCustomerReply: { title: 'Respuesta Rápida al Cliente', body: 'Gracias por tu mensaje. Tu solicitud está en proceso y enviaremos una actualización en cuanto todo esté listo.' },
    launchAnnouncement: { title: 'Anuncio de Lanzamiento', body: 'Nos alegra compartir la nueva versión. Es más rápida, más simple de usar e incluye las herramientas que más pediste.' },
    travelChecklist: { title: 'Lista de Viaje', body: 'Pasaporte, cargador, adaptador, confirmación del hotel, detalles del traslado al aeropuerto y el número de contacto de emergencia.' },
    invoiceReminder: { title: 'Recordatorio de Factura', body: 'La factura #INV-2048 vence el 28 de agosto. Revisa el detalle adjunto y avísame cuando el pago haya quedado programado.' },
    pastaDinnerRecipe: { title: 'Receta de Pasta', body: 'Cocina la pasta al dente y mézclala con tomates asados, albahaca, ajo, aceite de oliva y una buena porción de parmesano.' },
  },
  'zh-TW': {
    meetingFollowUp: { title: '會後跟進', body: 'Alex，感謝今天的深入交流。我已整理下一步事項，並會在星期五前分享更新後的時程。' },
    deliveryAddress: { title: '送貨地址', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678。' },
    emailReplyTemplate: { title: '電郵回覆範本', body: 'Sarah，感謝你的來信。我很樂意協助，並會在一個工作天內提供詳細回覆。' },
    projectBrief: { title: '專案簡介', body: '製作簡潔、沉靜的登陸頁面，在數秒內清楚傳達產品價值，並在手機上呈現良好體驗。' },
    weeklyStatusUpdate: { title: '每週進度更新', body: '本週我們完成了新手引導流程、解決主要視覺問題，並已準備好檢視最終的手機體驗。' },
    quickCustomerReply: { title: '快速客戶回覆', body: '感謝你的訊息。你的需求正在處理中，一切準備就緒後我們會立即通知你。' },
    launchAnnouncement: { title: '推出公告', body: '我們很高興分享新版本。它更快、更容易使用，並加入了你最期待的工具。' },
    travelChecklist: { title: '旅行清單', body: '護照、充電器、轉接頭、飯店確認資料、機場接送資訊，以及緊急聯絡人的備忘。' },
    invoiceReminder: { title: '發票提醒', body: '發票 #INV-2048 的到期日是8月28日。請查看附件明細，並在安排付款後告訴我。' },
    pastaDinnerRecipe: { title: '義大利麵食譜', body: '將義大利麵煮至彈牙，再與烤番茄、羅勒、大蒜、橄欖油及大量帕瑪森起司拌勻。' },
  },
  'zh-CN': {
    meetingFollowUp: { title: '会议跟进', body: 'Alex，感谢今天的深入交流。我已整理下一步事项，并会在周五前分享更新后的时间安排。' },
    deliveryAddress: { title: '配送地址', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678。' },
    emailReplyTemplate: { title: '邮件回复模板', body: 'Sarah，感谢你的来信。我很乐意帮忙，并会在一个工作日内提供详细回复。' },
    projectBrief: { title: '项目简介', body: '制作简洁、平静的落地页，在几秒内清楚传达产品价值，并在移动端提供出色体验。' },
    weeklyStatusUpdate: { title: '每周进度更新', body: '本周我们完成了新手引导流程，解决了主要视觉问题，并准备好评审最终的移动端体验。' },
    quickCustomerReply: { title: '客户快速回复', body: '感谢你的消息。你的请求正在处理中，一切准备就绪后我们会立即更新。' },
    launchAnnouncement: { title: '发布公告', body: '我们很高兴分享新版本。它更快、更易用，并加入了你最期待的工具。' },
    travelChecklist: { title: '旅行清单', body: '护照、充电器、转换插头、酒店确认信息、机场接送详情，以及紧急联系人的备注。' },
    invoiceReminder: { title: '发票提醒', body: '发票 #INV-2048 的到期日是8月28日。请查看附件明细，并在安排付款后告诉我。' },
    pastaDinnerRecipe: { title: '意面食谱', body: '将意面煮至有嚼劲，再与烤番茄、罗勒、大蒜、橄榄油和大量帕玛森奶酪拌匀。' },
  },
  'pt-BR': {
    meetingFollowUp: { title: 'Acompanhamento da Reunião', body: 'Oi, Alex. Obrigado pela conversa de hoje. Resumi os próximos passos e compartilharei o cronograma revisado até sexta-feira.' },
    deliveryAddress: { title: 'Endereço de Entrega', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'Modelo de Resposta', body: 'Olá, Sarah. Obrigado por entrar em contato. Terei prazer em ajudar e retornarei com uma resposta detalhada em um dia útil.' },
    projectBrief: { title: 'Resumo do Projeto', body: 'Crie uma landing page simples e serena que mostre o valor do produto nos primeiros segundos e funcione muito bem no celular.' },
    weeklyStatusUpdate: { title: 'Atualização Semanal', body: 'Nesta semana concluímos o fluxo de onboarding, resolvemos os principais problemas visuais e estamos prontos para revisar a experiência móvel final.' },
    quickCustomerReply: { title: 'Resposta Rápida ao Cliente', body: 'Obrigado pela mensagem. Sua solicitação está em andamento e enviaremos uma atualização assim que tudo estiver pronto.' },
    launchAnnouncement: { title: 'Anúncio de Lançamento', body: 'Estamos felizes em compartilhar a nova versão. Ela está mais rápida, mais simples e inclui as ferramentas mais pedidas.' },
    travelChecklist: { title: 'Lista de Viagem', body: 'Passaporte, carregador, adaptador, confirmação do hotel, detalhes do traslado ao aeroporto e o contato de emergência.' },
    invoiceReminder: { title: 'Lembrete de Fatura', body: 'A fatura #INV-2048 vence em 28 de agosto. Revise o detalhamento anexo e me avise quando o pagamento for agendado.' },
    pastaDinnerRecipe: { title: 'Receita de Massa', body: 'Cozinhe a massa al dente e misture com tomates assados, manjericão, alho, azeite e uma generosa porção de parmesão.' },
  },
  fr: {
    meetingFollowUp: { title: 'Suivi de Réunion', body: 'Bonjour Alex, merci pour notre échange aujourd’hui. J’ai résumé les prochaines étapes et partagerai le planning révisé vendredi.' },
    deliveryAddress: { title: 'Adresse de Livraison', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'Modèle de Réponse E-mail', body: 'Bonjour Sarah, merci de nous avoir contactés. Je serai ravi de vous aider et reviendrai avec une réponse détaillée sous un jour ouvré.' },
    projectBrief: { title: 'Brief Projet', body: 'Créer une page d’atterrissage simple et apaisée qui rend la valeur du produit claire en quelques secondes et fonctionne très bien sur mobile.' },
    weeklyStatusUpdate: { title: 'Mise à Jour Hebdomadaire', body: 'Cette semaine, nous avons terminé le parcours d’intégration, résolu les principaux problèmes visuels et sommes prêts à revoir l’expérience mobile finale.' },
    quickCustomerReply: { title: 'Réponse Client Rapide', body: 'Merci pour votre message. Votre demande est en cours et nous vous enverrons une mise à jour dès que tout sera prêt.' },
    launchAnnouncement: { title: 'Annonce de Lancement', body: 'Nous sommes heureux de partager la nouvelle version. Elle est plus rapide, plus simple et comprend les outils les plus demandés.' },
    travelChecklist: { title: 'Liste de Voyage', body: 'Passeport, chargeur, adaptateur, confirmation d’hôtel, détails du transfert aéroport et numéro de contact d’urgence.' },
    invoiceReminder: { title: 'Rappel de Facture', body: 'La facture #INV-2048 arrive à échéance le 28 août. Consultez le détail joint et prévenez-moi lorsque le paiement sera programmé.' },
    pastaDinnerRecipe: { title: 'Recette de Pâtes', body: 'Cuisez les pâtes al dente puis mélangez-les avec des tomates rôties, du basilic, de l’ail, de l’huile d’olive et du parmesan.' },
  },
  de: {
    meetingFollowUp: { title: 'Besprechungsnachbereitung', body: 'Hallo Alex, danke für das gute Gespräch heute. Ich habe die nächsten Schritte zusammengefasst und sende den überarbeiteten Zeitplan bis Freitag.' },
    deliveryAddress: { title: 'Lieferadresse', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'E-Mail-Antwortvorlage', body: 'Hallo Sarah, vielen Dank für Ihre Nachricht. Ich helfe gern und melde mich innerhalb eines Werktags mit einer ausführlichen Antwort.' },
    projectBrief: { title: 'Projektbriefing', body: 'Erstelle eine einfache, ruhige Landingpage, die den Produktwert in den ersten Sekunden vermittelt und mobil hervorragend funktioniert.' },
    weeklyStatusUpdate: { title: 'Wöchentliches Statusupdate', body: 'Diese Woche haben wir den Onboarding-Ablauf abgeschlossen, die wichtigsten visuellen Probleme gelöst und sind bereit für die finale Mobile-Review.' },
    quickCustomerReply: { title: 'Schnelle Kundenantwort', body: 'Vielen Dank für Ihre Nachricht. Ihre Anfrage wird bearbeitet, und wir informieren Sie, sobald alles bereit ist.' },
    launchAnnouncement: { title: 'Ankündigung zum Start', body: 'Wir freuen uns, die neue Version vorzustellen. Sie ist schneller, einfacher und enthält die meistgewünschten Werkzeuge.' },
    travelChecklist: { title: 'Reise-Checkliste', body: 'Reisepass, Ladegerät, Reiseadapter, Hotelbestätigung, Flughafentransfer und die Notiz mit der Notfallnummer.' },
    invoiceReminder: { title: 'Rechnungserinnerung', body: 'Die Rechnung #INV-2048 ist am 28. August fällig. Bitte prüfe die beigefügte Aufstellung und gib Bescheid, sobald die Zahlung eingeplant ist.' },
    pastaDinnerRecipe: { title: 'Pasta-Rezept', body: 'Die Pasta al dente kochen und anschließend mit gerösteten Tomaten, Basilikum, Knoblauch, Olivenöl und Parmesan vermengen.' },
  },
  ru: {
    meetingFollowUp: { title: 'Итоги Встречи', body: 'Алекс, спасибо за содержательный разговор сегодня. Я описал следующие шаги и отправлю обновлённый график к пятнице.' },
    deliveryAddress: { title: 'Адрес Доставки', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'Шаблон Ответа на Email', body: 'Сара, спасибо за обращение. Я буду рад помочь и пришлю подробный ответ в течение одного рабочего дня.' },
    projectBrief: { title: 'Бриф Проекта', body: 'Создайте простую спокойную посадочную страницу, которая показывает ценность продукта в первые секунды и отлично работает на мобильных устройствах.' },
    weeklyStatusUpdate: { title: 'Еженедельный Статус', body: 'На этой неделе мы завершили онбординг, устранили ключевые визуальные проблемы и готовы к финальной проверке мобильного опыта.' },
    quickCustomerReply: { title: 'Быстрый Ответ Клиенту', body: 'Спасибо за сообщение. Ваш запрос обрабатывается, и мы сообщим вам, как только всё будет готово.' },
    launchAnnouncement: { title: 'Анонс Релиза', body: 'Мы рады представить новую версию. Она быстрее, проще и включает инструменты, которые вы просили чаще всего.' },
    travelChecklist: { title: 'Список Для Поездки', body: 'Паспорт, зарядка, адаптер, подтверждение отеля, детали трансфера из аэропорта и номер экстренного контакта.' },
    invoiceReminder: { title: 'Напоминание о Счёте', body: 'Счёт #INV-2048 нужно оплатить до 28 августа. Проверьте приложенную детализацию и сообщите, когда платёж будет запланирован.' },
    pastaDinnerRecipe: { title: 'Рецепт Пасты', body: 'Сварите пасту аль денте, затем смешайте её с запечёнными томатами, базиликом, чесноком, оливковым маслом и пармезаном.' },
  },
  ko: {
    meetingFollowUp: { title: '회의 후속 메모', body: 'Alex님, 오늘 나눈 의미 있는 대화에 감사드립니다. 다음 단계를 정리했으며 수정된 일정을 금요일까지 공유하겠습니다.' },
    deliveryAddress: { title: '배송 주소', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: '이메일 답장 템플릿', body: 'Sarah님, 문의해 주셔서 감사합니다. 기꺼이 도와드리며 영업일 기준 하루 안에 자세한 답변을 드리겠습니다.' },
    projectBrief: { title: '프로젝트 브리프', body: '몇 초 안에 제품 가치를 전달하고 모바일에서도 아름답게 작동하는 단순하고 차분한 랜딩 페이지를 만듭니다.' },
    weeklyStatusUpdate: { title: '주간 현황 업데이트', body: '이번 주에는 온보딩 흐름을 완료하고 주요 시각 문제를 해결했으며 최종 모바일 경험을 검토할 준비를 마쳤습니다.' },
    quickCustomerReply: { title: '고객 빠른 답장', body: '메시지 감사합니다. 요청을 처리 중이며 모든 준비가 끝나는 대로 바로 업데이트해 드리겠습니다.' },
    launchAnnouncement: { title: '출시 안내', body: '새 버전을 공유하게 되어 기쁩니다. 더 빠르고 간단해졌으며 가장 많이 요청한 도구를 담았습니다.' },
    travelChecklist: { title: '여행 체크리스트', body: '여권, 충전기, 여행용 어댑터, 호텔 확인서, 공항 이동 정보와 비상 연락처 메모.' },
    invoiceReminder: { title: '청구서 알림', body: '청구서 #INV-2048의 마감일은 8월 28일입니다. 첨부된 내역을 확인하고 결제가 예약되면 알려주세요.' },
    pastaDinnerRecipe: { title: '파스타 레시피', body: '파스타를 알덴테로 삶은 뒤 구운 토마토, 바질, 마늘, 올리브오일, 넉넉한 파르메산 치즈와 버무리세요.' },
  },
  hi: {
    meetingFollowUp: { title: 'मीटिंग फॉलो-अप', body: 'Alex, आज की सार्थक बातचीत के लिए धन्यवाद। मैंने अगले कदम लिख लिए हैं और शुक्रवार तक संशोधित समय-रेखा साझा करूँगा।' },
    deliveryAddress: { title: 'डिलीवरी पता', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'ईमेल उत्तर टेम्पलेट', body: 'Sarah, संपर्क करने के लिए धन्यवाद। मुझे मदद करके खुशी होगी और मैं एक कार्य दिवस में विस्तृत उत्तर भेजूँगा।' },
    projectBrief: { title: 'प्रोजेक्ट ब्रीफ', body: 'एक सरल और शांत लैंडिंग पेज बनाएँ जो कुछ सेकंड में उत्पाद का मूल्य दिखाए और मोबाइल पर सुंदरता से काम करे।' },
    weeklyStatusUpdate: { title: 'साप्ताहिक स्थिति अपडेट', body: 'इस सप्ताह हमने ऑनबोर्डिंग फ्लो पूरा किया, मुख्य दृश्य समस्याएँ सुलझाईं और अंतिम मोबाइल अनुभव की समीक्षा के लिए तैयार हैं।' },
    quickCustomerReply: { title: 'त्वरित ग्राहक उत्तर', body: 'संदेश के लिए धन्यवाद। आपका अनुरोध प्रक्रिया में है और सब कुछ तैयार होते ही हम अपडेट भेजेंगे।' },
    launchAnnouncement: { title: 'लॉन्च घोषणा', body: 'हमें नया रिलीज़ साझा करते हुए खुशी है। यह तेज़, सरल है और इसमें आपके सबसे अधिक माँगे गए टूल हैं।' },
    travelChecklist: { title: 'यात्रा चेकलिस्ट', body: 'पासपोर्ट, चार्जर, ट्रैवल अडैप्टर, होटल पुष्टि, एयरपोर्ट ट्रांसफर विवरण और आपातकालीन संपर्क नंबर।' },
    invoiceReminder: { title: 'इनवॉइस रिमाइंडर', body: 'इनवॉइस #INV-2048 की देय तिथि 28 अगस्त है। संलग्न विवरण देखें और भुगतान तय होने पर मुझे बताएं।' },
    pastaDinnerRecipe: { title: 'पास्ता रेसिपी', body: 'पास्ता को अल डेंटे तक पकाएँ, फिर भुने टमाटर, तुलसी, लहसुन, जैतून तेल और पार्मेज़ान के साथ मिलाएँ।' },
  },
  bn: {
    meetingFollowUp: { title: 'মিটিং ফলো-আপ', body: 'Alex, আজকের অর্থবহ আলোচনার জন্য ধন্যবাদ। আমি পরবর্তী ধাপগুলো লিখেছি এবং শুক্রবারের মধ্যে সংশোধিত সময়সূচি পাঠাব।' },
    deliveryAddress: { title: 'ডেলিভারি ঠিকানা', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'ইমেইল উত্তর টেমপ্লেট', body: 'Sarah, যোগাযোগ করার জন্য ধন্যবাদ। সাহায্য করতে পেরে খুশি হব এবং এক কার্যদিবসের মধ্যে বিস্তারিত উত্তর দেব।' },
    projectBrief: { title: 'প্রকল্পের সংক্ষিপ্তসার', body: 'একটি সহজ ও শান্ত ল্যান্ডিং পেজ তৈরি করুন যা কয়েক সেকেন্ডে পণ্যের মূল্য দেখায় এবং মোবাইলে সুন্দরভাবে কাজ করে।' },
    weeklyStatusUpdate: { title: 'সাপ্তাহিক অগ্রগতি', body: 'এই সপ্তাহে আমরা অনবোর্ডিং ফ্লো শেষ করেছি, প্রধান ভিজ্যুয়াল সমস্যা সমাধান করেছি এবং চূড়ান্ত মোবাইল অভিজ্ঞতা পর্যালোচনার জন্য প্রস্তুত।' },
    quickCustomerReply: { title: 'দ্রুত গ্রাহক উত্তর', body: 'বার্তার জন্য ধন্যবাদ। আপনার অনুরোধ প্রক্রিয়াধীন এবং সবকিছু প্রস্তুত হলেই আমরা আপডেট পাঠাব।' },
    launchAnnouncement: { title: 'লঞ্চ ঘোষণা', body: 'নতুন রিলিজটি শেয়ার করতে আমরা আনন্দিত। এটি দ্রুততর, সহজতর এবং আপনার সবচেয়ে চাওয়া টুলগুলো অন্তর্ভুক্ত করে।' },
    travelChecklist: { title: 'ভ্রমণ চেকলিস্ট', body: 'পাসপোর্ট, চার্জার, ট্রাভেল অ্যাডাপ্টার, হোটেল নিশ্চিতকরণ, বিমানবন্দর যাতায়াতের বিবরণ ও জরুরি যোগাযোগ নম্বর।' },
    invoiceReminder: { title: 'ইনভয়েস রিমাইন্ডার', body: 'ইনভয়েস #INV-2048-এর শেষ তারিখ 28 আগস্ট। সংযুক্ত বিবরণ দেখুন এবং পেমেন্ট নির্ধারিত হলে আমাকে জানান।' },
    pastaDinnerRecipe: { title: 'পাস্তা রেসিপি', body: 'পাস্তা আল দান্তে করে সেদ্ধ করুন, তারপর ভাজা টমেটো, তুলসি, রসুন, অলিভ অয়েল ও পারমেজানের সঙ্গে মেশান।' },
  },
  id: {
    meetingFollowUp: { title: 'Tindak Lanjut Rapat', body: 'Hai Alex, terima kasih atas percakapan hari ini. Saya sudah merangkum langkah berikutnya dan akan membagikan jadwal revisi pada hari Jumat.' },
    deliveryAddress: { title: 'Alamat Pengiriman', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'Template Balasan Email', body: 'Hai Sarah, terima kasih sudah menghubungi. Saya dengan senang hati membantu dan akan mengirim jawaban terperinci dalam satu hari kerja.' },
    projectBrief: { title: 'Ringkasan Proyek', body: 'Buat landing page yang sederhana dan tenang, menunjukkan nilai produk dalam beberapa detik pertama, serta berfungsi indah di seluler.' },
    weeklyStatusUpdate: { title: 'Pembaruan Mingguan', body: 'Minggu ini kami menyelesaikan alur onboarding, memperbaiki masalah visual utama, dan siap meninjau pengalaman seluler akhir.' },
    quickCustomerReply: { title: 'Balasan Cepat Pelanggan', body: 'Terima kasih atas pesan Anda. Permintaan Anda sedang diproses dan kami akan mengirim pembaruan segera setelah semuanya siap.' },
    launchAnnouncement: { title: 'Pengumuman Peluncuran', body: 'Kami senang membagikan rilis baru. Versi ini lebih cepat, lebih mudah digunakan, dan memuat alat yang paling Anda minta.' },
    travelChecklist: { title: 'Daftar Perjalanan', body: 'Paspor, pengisi daya, adaptor perjalanan, konfirmasi hotel, rincian transfer bandara, dan catatan nomor kontak darurat.' },
    invoiceReminder: { title: 'Pengingat Faktur', body: 'Faktur #INV-2048 jatuh tempo pada 28 Agustus. Periksa rincian terlampir dan beri tahu saya ketika pembayaran sudah dijadwalkan.' },
    pastaDinnerRecipe: { title: 'Resep Pasta', body: 'Masak pasta hingga al dente, lalu aduk dengan tomat panggang, basil, bawang putih, minyak zaitun, dan parmesan yang melimpah.' },
  },
  it: {
    meetingFollowUp: { title: 'Follow-up della Riunione', body: 'Ciao Alex, grazie per la conversazione di oggi. Ho riassunto i prossimi passi e condividerò la tabella di marcia aggiornata venerdì.' },
    deliveryAddress: { title: 'Indirizzo di Consegna', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'Modello di Risposta Email', body: 'Ciao Sarah, grazie per averci contattato. Sarò felice di aiutarti e tornerò con una risposta dettagliata entro un giorno lavorativo.' },
    projectBrief: { title: 'Brief di Progetto', body: 'Crea una landing page semplice e calma che mostri il valore del prodotto nei primi secondi e funzioni perfettamente su mobile.' },
    weeklyStatusUpdate: { title: 'Aggiornamento Settimanale', body: 'Questa settimana abbiamo completato il flusso di onboarding, risolto i principali problemi visivi e siamo pronti a rivedere l’esperienza mobile finale.' },
    quickCustomerReply: { title: 'Risposta Rapida al Cliente', body: 'Grazie per il messaggio. La tua richiesta è in lavorazione e invieremo un aggiornamento non appena tutto sarà pronto.' },
    launchAnnouncement: { title: 'Annuncio di Lancio', body: 'Siamo felici di condividere la nuova versione. È più veloce, più semplice e include gli strumenti più richiesti.' },
    travelChecklist: { title: 'Checklist di Viaggio', body: 'Passaporto, caricatore, adattatore, conferma dell’hotel, dettagli del trasferimento aeroportuale e contatto di emergenza.' },
    invoiceReminder: { title: 'Promemoria Fattura', body: 'La fattura #INV-2048 scade il 28 agosto. Controlla il dettaglio allegato e fammi sapere quando il pagamento sarà programmato.' },
    pastaDinnerRecipe: { title: 'Ricetta della Pasta', body: 'Cuoci la pasta al dente e condiscila con pomodori arrosto, basilico, aglio, olio d’oliva e una generosa dose di parmigiano.' },
  },
  th: {
    meetingFollowUp: { title: 'สรุปหลังประชุม', body: 'Alex ขอบคุณสำหรับการพูดคุยวันนี้ ฉันได้สรุปขั้นตอนถัดไปไว้แล้ว และจะแชร์กำหนดการที่ปรับปรุงภายในวันศุกร์' },
    deliveryAddress: { title: 'ที่อยู่จัดส่ง', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'เทมเพลตตอบอีเมล', body: 'Sarah ขอบคุณที่ติดต่อมา ยินดีช่วยเหลือ และจะตอบกลับพร้อมรายละเอียดภายในหนึ่งวันทำการ' },
    projectBrief: { title: 'สรุปโปรเจกต์', body: 'สร้างหน้าแลนดิ้งที่เรียบง่ายและสบายตา สื่อคุณค่าของผลิตภัณฑ์ในไม่กี่วินาที และทำงานได้ดีบนมือถือ' },
    weeklyStatusUpdate: { title: 'อัปเดตรายสัปดาห์', body: 'สัปดาห์นี้เราเสร็จสิ้นขั้นตอน onboarding แก้ปัญหาภาพหลัก และพร้อมตรวจทานประสบการณ์บนมือถือขั้นสุดท้าย' },
    quickCustomerReply: { title: 'ตอบลูกค้าแบบเร็ว', body: 'ขอบคุณสำหรับข้อความ คำขอของคุณกำลังดำเนินการ และเราจะแจ้งอัปเดตทันทีเมื่อทุกอย่างพร้อม' },
    launchAnnouncement: { title: 'ประกาศเปิดตัว', body: 'เรายินดีที่จะแชร์รุ่นใหม่ ซึ่งเร็วขึ้น ใช้งานง่ายขึ้น และมีเครื่องมือที่คุณขอมากที่สุด' },
    travelChecklist: { title: 'เช็กลิสต์เดินทาง', body: 'พาสปอร์ต ที่ชาร์จ อะแดปเตอร์เดินทาง การยืนยันโรงแรม รายละเอียดรถรับส่งสนามบิน และเบอร์ติดต่อฉุกเฉิน' },
    invoiceReminder: { title: 'แจ้งเตือนใบแจ้งหนี้', body: 'ใบแจ้งหนี้ #INV-2048 ครบกำหนดวันที่ 28 สิงหาคม โปรดตรวจสอบรายละเอียดที่แนบมาและแจ้งเมื่อกำหนดการชำระเงินแล้ว' },
    pastaDinnerRecipe: { title: 'สูตรพาสต้า', body: 'ต้มพาสต้าให้พอดีคำ แล้วคลุกกับมะเขือเทศอบ โหระพา กระเทียม น้ำมันมะกอก และพาร์เมซานชีส' },
  },
  tl: {
    meetingFollowUp: { title: 'Follow-up sa Meeting', body: 'Hi Alex, salamat sa maayos na usapan ngayon. Nailista ko ang susunod na hakbang at ibabahagi ko ang binagong timeline sa Biyernes.' },
    deliveryAddress: { title: 'Address ng Delivery', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'Template ng Email Reply', body: 'Hi Sarah, salamat sa pag-abot. Masaya akong tumulong at magpapadala ako ng detalyadong sagot sa loob ng isang araw ng trabaho.' },
    projectBrief: { title: 'Project Brief', body: 'Gumawa ng simple at mahinahong landing page na malinaw ang halaga ng produkto sa unang segundo at mahusay sa mobile.' },
    weeklyStatusUpdate: { title: 'Lingguhang Update', body: 'Ngayong linggo natapos namin ang onboarding flow, naayos ang pangunahing visual issues, at handa na para sa final mobile review.' },
    quickCustomerReply: { title: 'Mabilis na Sagot sa Customer', body: 'Salamat sa iyong mensahe. Pinoproseso na ang iyong request at magpapadala kami ng update kapag handa na ang lahat.' },
    launchAnnouncement: { title: 'Anunsyo ng Paglunsad', body: 'Masaya kaming ibahagi ang bagong release. Mas mabilis, mas simple gamitin, at may mga tool na pinaka-hiniling ninyo.' },
    travelChecklist: { title: 'Checklist sa Biyahe', body: 'Pasaporte, charger, travel adapter, hotel confirmation, airport transfer details, at emergency contact number.' },
    invoiceReminder: { title: 'Paalala sa Invoice', body: 'Ang invoice #INV-2048 ay due sa Agosto 28. Suriin ang kalakip na detalye at ipaalam kapag naisama na sa iskedyul ang bayad.' },
    pastaDinnerRecipe: { title: 'Recipe ng Pasta', body: 'Lutuin ang pasta hanggang al dente, saka haluan ng inihaw na kamatis, basil, bawang, olive oil, at maraming parmesan.' },
  },
  pl: {
    meetingFollowUp: { title: 'Podsumowanie Spotkania', body: 'Cześć Alex, dziękuję za dzisiejszą rozmowę. Zebrałem kolejne kroki i udostępnię zaktualizowany harmonogram do piątku.' },
    deliveryAddress: { title: 'Adres Dostawy', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'Szablon Odpowiedzi E-mail', body: 'Cześć Sarah, dziękuję za kontakt. Z przyjemnością pomogę i wrócę ze szczegółową odpowiedzią w ciągu jednego dnia roboczego.' },
    projectBrief: { title: 'Brief Projektu', body: 'Stwórz prostą i spokojną stronę docelową, która pokaże wartość produktu w pierwszych sekundach i świetnie działa na telefonie.' },
    weeklyStatusUpdate: { title: 'Aktualizacja Tygodniowa', body: 'W tym tygodniu ukończyliśmy onboarding, rozwiązaliśmy główne problemy wizualne i jesteśmy gotowi do końcowego przeglądu mobilnego.' },
    quickCustomerReply: { title: 'Szybka Odpowiedź Klientowi', body: 'Dziękujemy za wiadomość. Twoje zgłoszenie jest w toku i wyślemy aktualizację, gdy wszystko będzie gotowe.' },
    launchAnnouncement: { title: 'Ogłoszenie Premiery', body: 'Z radością prezentujemy nowe wydanie. Jest szybsze, prostsze i zawiera narzędzia, o które proszono najczęściej.' },
    travelChecklist: { title: 'Lista Podróżna', body: 'Paszport, ładowarka, adapter podróżny, potwierdzenie hotelu, transfer z lotniska i numer kontaktu awaryjnego.' },
    invoiceReminder: { title: 'Przypomnienie o Fakturze', body: 'Termin płatności faktury #INV-2048 przypada na 28 sierpnia. Sprawdź załączone rozliczenie i daj znać po zaplanowaniu płatności.' },
    pastaDinnerRecipe: { title: 'Przepis na Makaron', body: 'Ugotuj makaron al dente, a następnie wymieszaj go z pieczonymi pomidorami, bazylią, czosnkiem, oliwą i parmezanem.' },
  },
  tr: {
    meetingFollowUp: { title: 'Toplantı Takibi', body: 'Merhaba Alex, bugünkü verimli konuşma için teşekkürler. Sonraki adımları özetledim ve güncellenen takvimi Cuma günü paylaşacağım.' },
    deliveryAddress: { title: 'Teslimat Adresi', body: 'Nguyen Van A · 58 Le Loi Street, District 1, Ho Chi Minh City · +84 912 345 678.' },
    emailReplyTemplate: { title: 'E-posta Yanıt Şablonu', body: 'Merhaba Sarah, iletişime geçtiğiniz için teşekkürler. Yardımcı olmaktan memnuniyet duyarım ve bir iş günü içinde ayrıntılı yanıt vereceğim.' },
    projectBrief: { title: 'Proje Özeti', body: 'Ürünün değerini ilk saniyelerde anlatan ve mobilde harika çalışan, sade ve sakin bir açılış sayfası oluşturun.' },
    weeklyStatusUpdate: { title: 'Haftalık Durum Güncellemesi', body: 'Bu hafta onboarding akışını tamamladık, başlıca görsel sorunları çözdük ve son mobil deneyimi incelemeye hazırız.' },
    quickCustomerReply: { title: 'Hızlı Müşteri Yanıtı', body: 'Mesajınız için teşekkürler. Talebiniz işleniyor ve her şey hazır olur olmaz güncelleme göndereceğiz.' },
    launchAnnouncement: { title: 'Yayın Duyurusu', body: 'Yeni sürümü paylaşmaktan mutluyuz. Daha hızlı, daha kolay ve en çok istediğiniz araçları içeriyor.' },
    travelChecklist: { title: 'Seyahat Kontrol Listesi', body: 'Pasaport, şarj cihazı, seyahat adaptörü, otel onayı, havaalanı transfer bilgileri ve acil iletişim numarası.' },
    invoiceReminder: { title: 'Fatura Hatırlatması', body: '#INV-2048 numaralı faturanın son ödeme tarihi 28 Ağustos. Ekli dökümü inceleyin ve ödeme planlandığında bana haber verin.' },
    pastaDinnerRecipe: { title: 'Makarna Tarifi', body: 'Makarnayı al dente kıvamında haşlayın, ardından fırınlanmış domates, fesleğen, sarımsak, zeytinyağı ve parmesanla karıştırın.' },
  },
};

export const getHeroClipboardItemCopy = (lang: string, key: HeroClipboardItemKey): HeroClipboardCopy => {
  if (key in colorCodes) {
    const colorKey = key as HeroColorItemKey;
    return { title: (colorLabels[lang] ?? colorLabels.en)[colorKey], body: colorCodes[colorKey] };
  }

  const textKey = key as HeroTextItemKey;
  const copy = textCopy[lang]?.[textKey] ?? textCopy.en[textKey];
  if (!copy) return { title: '', body: '' };
  return { ...copy, body: copy.body.replace(/^(.+?[.!?。])\s*/, '$1\n') };
};
