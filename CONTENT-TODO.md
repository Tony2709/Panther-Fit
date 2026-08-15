# Những chỗ cần điền thông tin thật

Website đã dựng xong và chạy được. Nhưng có một số chỗ mình phải để tạm vì
không có thông tin. Danh sách dưới đây xếp theo mức độ quan trọng.

Chỗ nào trong code có ghi chú `CAN DIEN` là chỗ nằm trong danh sách này.

---

## Nhóm 1: bắt buộc sửa trước khi đưa lên mạng

### 1.1 Địa chỉ phòng tập
**File:** `src/data/site.js` → `CONTACT.address`

Hiện đang để `"Cần cập nhật số nhà và tên đường"` và thành phố Thái Nguyên.
Cần điền số nhà, tên đường, phường.

Đây là mục quan trọng nhất. Khách tìm phòng gym gần nhà, không có địa chỉ là mất khách.

### 1.2 Link Google Maps và toạ độ
**File:** `src/data/site.js` → `mapsUrl`, `mapsEmbedUrl`, `latitude`, `longitude`

Cách lấy: mở Google Maps, tìm phòng tập, bấm **Chia sẻ** lấy `mapsUrl`,
bấm **Nhúng bản đồ** lấy `mapsEmbedUrl`. Toạ độ nằm ngay trên thanh địa chỉ trình duyệt.

### 1.3 Giờ mở cửa
**File:** `src/data/site.js` → `CONTACT.hours` và `CONTACT.hoursSchema`

Đang để tạm 05:30 đến 21:30 các ngày trong tuần, 06:00 đến 20:00 cuối tuần.
**Nhớ sửa cả hai danh sách**, một cái hiện trên trang, một cái cho Google đọc.

### 1.4 Link Facebook
**File:** `src/data/site.js` → `CONTACT.facebook`

Đang để `facebook.com/pantherfit`, nhiều khả năng không đúng.
Facebook là kênh chính của phòng tập nên link này cần chuẩn.

### 1.5 Tên miền
**File:** `src/data/site.js` → `SITE.url`
**File:** `public/robots.txt` → dòng `Sitemap:`

Đang để `pantherfit.vn`. Sửa thành tên miền thật đã mua.

### 1.6 Email nhận form liên hệ
**File:** `public/gui-lien-he.php` → `$NGUOI_NHAN` và `$NGUOI_GUI`
**File:** `src/data/site.js` → `CONTACT.email`

Tạo email trong hPanel trước, rồi điền vào. Email gửi đi phải cùng tên miền với website.

---

## Nhóm 2: nên sửa, ảnh hưởng tới độ tin cậy

### 2.1 Buổi đầu tiên có miễn phí không
**File:** `src/data/site.js` → `FACTS.firstSession`

Đang viết là **"Buổi đầu tiên chúng tôi mời bạn."** Câu này xuất hiện ở nhiều chỗ,
kể cả nút kêu gọi cuối trang.

Nếu buổi đầu **không** miễn phí thì phải sửa ngay, ví dụ:
`'Buổi đầu tính phí lẻ, bạn chưa cần mua gói.'`

Hứa sai chuyện này là mất niềm tin ngay từ buổi đầu, đúng cái điều mà tài liệu
thương hiệu đã cảnh báo.

### 2.2 Một buổi tập kéo dài bao lâu, lớp nhóm bao nhiêu người
**File:** `src/data/site.js` → `FACTS.sessionLength`, `FACTS.groupClassSize`

Đang để `khoảng 60 phút` và `10 đến 14 người`. Hai con số này hiện trong phần dịch vụ,
bảng giá và hỏi đáp.

### 2.3 Chỗ để xe
**File:** `src/data/site.js` → `CONTACT.parking`

Đang để `Có chỗ để xe máy ngay trước cửa, không mất phí.`
Đây là chi tiết nhỏ nhưng đúng thứ khách hay lo, nên viết cho đúng thực tế.

### 2.4 Ba lời cam kết ở trang bảng giá
**File:** `src/pages/bang-gia.astro` → mảng `promises`

Ba câu đang viết:
- Không có gói nào phải giải mã
- Không ai chốt sale ép bạn
- Không mua trước rồi mới được xem

Đây là cam kết mình soạn dựa trên tinh thần thương hiệu. Cần xác nhận phòng tập
làm đúng như vậy, hoặc sửa lại cho khớp cách làm thật.

---

## Nhóm 3: đội ngũ huấn luyện viên

**File:** `src/data/trainers.js`

### 3.1 Xác nhận danh sách
Mình lấy tên từ tên thư mục trong `Photos/Our team`, gồm:
Sơn Thái, Quyết, Katun, Liên Hồng Ngọc, Nguyễn Hải Đăng.

Có thêm **Nghị Vũ**, tên này mình đọc được từ bảng tên trên áo trong ảnh chụp đội ngũ.
Nếu đọc sai hoặc người này không còn làm nữa thì xoá khỏi danh sách.

Trong ảnh đội ngũ còn có **lễ tân Quỳnh Chi** và một bạn lễ tân nữa. Nếu muốn đưa
lễ tân lên trang thì báo mình thêm, vì người đầu tiên khách gặp ở cửa chính là lễ tân.

### 3.2 Vai trò
Hai vai trò mình đọc được từ bảng tên trong ảnh:
- Sơn Thái: `QLNS/HLV`, mình ghi là "Quản lý nhân sự và huấn luyện viên"
- Nghị Vũ: `HLV/Saler`, mình ghi là "Huấn luyện viên và tư vấn"

Bốn người còn lại mình để chung là "Huấn luyện viên" vì không có thông tin.
Nếu ai có chứng chỉ hoặc chuyên môn riêng thì ghi vào, phần này giúp tăng độ tin cậy.

### 3.3 Phần giới thiệu từng người, quan trọng
Mấy dòng giới thiệu hiện tại **do mình viết dựa trên cách làm việc chung của phòng tập,
không phải lời của từng huấn luyện viên**.

Cách làm tốt nhất, mất khoảng mười lăm phút: hỏi mỗi người hai câu rồi chép lại
nguyên văn câu trả lời.

1. "Anh chị hay kèm kiểu người nào nhất?"
2. "Người mới lo lắng nhất chuyện gì, anh chị hay nói gì với họ?"

Lời thật của từng người bao giờ cũng đáng tin hơn văn quảng cáo. Đúng nguyên tắc
"để khách và người thật nói bằng chính lời của họ" trong tài liệu giọng nói thương hiệu.

### 3.4 Ảnh
- Sơn Thái và Nghị Vũ đang dùng ảnh chụp trong đồng phục Panther Fit, đẹp và đúng nhận diện
- Katun, Liên Hồng Ngọc, Nguyễn Hải Đăng đang dùng ảnh trong thư mục riêng,
  nhưng mấy ảnh đó mặc đồ thương hiệu **SpartaFit**, không phải Panther Fit
- Quyết đang dùng ảnh đang kèm khách, không phải ảnh chân dung

Nếu chụp được một buổi ảnh chân dung cho cả đội, cùng đồng phục navy, cùng nền,
thì phần này sẽ lên hẳn một bậc.

---

## Nhóm 4: phần đang tắt, bật khi có nội dung

### 4.1 Lời hội viên
**File:** `src/data/site.js` → `SHOW_TESTIMONIALS`, hiện là `false`
**File:** `src/data/content.js` → mảng `TESTIMONIALS`

Mình **cố tình không viết sẵn lời khen giả**. Lời khen bịa mà lên mạng là rủi ro thật,
và cũng trái với nguyên tắc thương hiệu.

Cách làm: hỏi vài hội viên quen, xin phép, chép đúng nguyên văn lời họ nói,
kể cả câu cụt hay từ đệm. Rồi điền vào `TESTIMONIALS` và đổi `SHOW_TESTIMONIALS`
thành `true`.

Với tệp khách của Panther Fit, một câu vụng về nhưng thật có sức nặng hơn hẳn
một câu bóng bẩy.

### 4.2 Bảng giá bằng số
**File:** `src/pages/bang-gia.astro`

Theo yêu cầu, trang bảng giá đang không in con số nào, chỉ giải thích ba yếu tố
quyết định giá rồi mời khách nhắn tin.

Có một điểm mình muốn nói thẳng: tài liệu thương hiệu ghi rõ nguyên tắc
*"nói thẳng chính xác bạn nhận được gì và chi phí bao nhiêu, không có gói nào phải giải mã"*,
và trong chân dung khách hàng, giá là rào cản nhỏ nhất. Giấu giá thường làm nhóm khách
ngại quyết định phải thêm một bước mới biết được thông tin.

Nên trang này đã dựng sẵn chỗ để thêm giá sau: chỉ cần thêm một dòng giá vào mỗi thẻ
trong phần "Ba thứ quyết định con số". Nếu sau này muốn hiện giá, báo mình một câu,
sửa mất khoảng mười phút.

---

## Nhóm 5: bổ sung sau, không gấp

- **Instagram và TikTok**: `src/data/site.js`, đang để trống nên không hiện ra.
  Theo tài liệu thương hiệu thì hai kênh này chưa phải ưu tiên, để trống là hợp lý.
- **Ảnh chụp đường vào và mặt tiền phòng tập**: khách lần đầu tìm đường rất cần,
  và đúng tinh thần giảm nỗi lo bước vào cửa.
- **Video ngắn quay một vòng phòng tập**: Facebook video là định dạng đã chứng minh
  hiệu quả với phòng tập. Nhúng một video lên trang chủ sẽ mạnh hơn ảnh tĩnh.
