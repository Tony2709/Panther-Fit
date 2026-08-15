# Những chỗ cần điền thông tin thật

Website đã dựng xong và chạy được. Nhưng có một số chỗ mình phải để tạm vì
không có thông tin. Danh sách dưới đây xếp theo mức độ quan trọng.

Chỗ nào trong code có ghi chú `CAN DIEN` là chỗ nằm trong danh sách này.

---

## Đã xong

- ~~Địa chỉ~~ đã điền: 66 Phan Bội Châu, Khu dân cư số 10, Phan Đình Phùng, Thái Nguyên
- ~~Số điện thoại~~ đã điền: 0977 533 302
- ~~Link Facebook~~ đã điền: facebook.com/pantherfit20
- ~~Giờ mở cửa~~ đã điền: 05:00 đến 22:00 các ngày trong tuần, 08:00 đến 21:00 cuối tuần
- ~~Danh sách huấn luyện viên~~ đã chốt năm người, đã bỏ Nghị Vũ

---

## Nhóm 1: bắt buộc sửa trước khi đưa lên mạng

### 1.1 Toạ độ chính xác của phòng tập
**File:** `src/data/site.js` → `latitude`, `longitude`

Địa chỉ chữ và bản đồ nhúng đã chuẩn. Riêng hai con số toạ độ vẫn là ước lượng
theo phường Phan Đình Phùng, chứ không phải điểm chính xác của cửa phòng tập.
Toạ độ này nằm trong phần dữ liệu Google đọc để hiểu phòng tập ở đâu.

Cách lấy đúng: mở Google Maps, bấm chuột phải ngay vào cửa phòng tập,
dòng đầu tiên trong menu chính là toạ độ, bấm vào là sao chép được.

### 1.2 Tên miền
**File:** `src/data/site.js` → `SITE.url`
**File:** `public/robots.txt` → dòng `Sitemap:`

Đang để `pantherfit.vn`. Sửa thành tên miền thật đã mua.

### 1.3 Email nhận form liên hệ
**File:** `public/gui-lien-he.php` → `$NGUOI_NHAN` và `$NGUOI_GUI`
**File:** `src/data/site.js` → `CONTACT.email`

Tạo email trong hPanel trước, rồi điền vào. Email gửi đi phải cùng tên miền với website.

---

## Nhóm 2: nên sửa, ảnh hưởng tới độ tin cậy

### 2.1 Buổi đầu tiên miễn phí
**File:** `src/data/site.js` → `FACTS.firstSession`

Đang viết là **"Buổi đầu tiên miễn phí."** Câu này xuất hiện ở ba chỗ trên web:
dưới phần bốn bước buổi đầu, ở nút kêu gọi cuối mỗi trang, và ở trang liên hệ.

Cả đội ngũ ở quầy và huấn luyện viên cần nắm câu này, vì khách sẽ tới và nhắc lại
đúng chữ đó. Nếu sau này đổi chính sách thì sửa một dòng trong `site.js` là cả
website đổi theo.

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

### 3.1 Danh sách đã chốt
Năm người, xếp theo thứ tự hiện trên trang. Ba người đầu cũng là ba người
hiện ở trang chủ.

| Thứ tự | Tên | Vai trò |
|---|---|---|
| 1 | Katun | Chủ phòng tập và huấn luyện viên |
| 2 | Sơn Thái | Quản lý nhân sự và huấn luyện viên |
| 3 | Hà Quyết | Huấn luyện viên |
| 4 | Liên Hồng Ngọc | Huấn luyện viên |
| 5 | Nguyễn Hải Đăng | Huấn luyện viên và tư vấn |

Trong ảnh đội ngũ còn có **lễ tân Quỳnh Chi** và một bạn lễ tân nữa. Nếu muốn đưa
lễ tân lên trang thì báo mình thêm, vì người đầu tiên khách gặp ở cửa chính là lễ tân.

### 3.2 Vai trò còn để chung
Hà Quyết và Liên Hồng Ngọc đang để chung là "Huấn luyện viên" vì chưa có thông tin
cụ thể. Nếu ai có chứng chỉ hoặc chuyên môn riêng thì ghi vào, phần này giúp tăng
độ tin cậy đáng kể.

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

**Việc cần làm ngay: ảnh chân dung mới của Nguyễn Hải Đăng.**

Ảnh đó đang nằm trong đoạn chat chứ chưa có trên máy, nên mình chưa lắp vào được.
Cách làm:

1. Lưu ảnh vào đúng đường dẫn này, đúng tên file:
   `Panther Fit/Photos/Our team/Nguyễn Hải Đăng/hai-dang-chan-dung.jpg`
2. Chạy `npm run assets`
3. Chạy `npm run build`

Script đã chờ sẵn file đó. Chưa có file thì nó báo một dòng rồi vẫn dùng ảnh cũ,
nên chạy lúc nào cũng không sợ hỏng.

Một lưu ý về ảnh đó: góc trên bên phải có chữ **HAI DANG NGUYEN / HLV | SALER /
PANTHER FIT** in sẵn trên ảnh. Thẻ huấn luyện viên trên web đã hiện tên và vai trò
ngay bên dưới ảnh rồi, nên phần chữ này sẽ bị lặp. Nếu có file gốc chưa có chữ thì
dùng file đó tốt hơn. Không có thì báo mình, mình cắt bỏ phần chữ đi.

**Tình trạng ảnh hiện tại của cả đội:**
- Sơn Thái: ảnh chụp trong đồng phục Panther Fit, đẹp và đúng nhận diện
- Katun và Liên Hồng Ngọc: ảnh trong thư mục riêng, nhưng mặc đồ thương hiệu
  **SpartaFit**, không phải Panther Fit
- Hà Quyết: ảnh đang kèm khách, không phải ảnh chân dung

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
