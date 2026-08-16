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

Đang để `khoảng 60 phút` và `10 đến 14 người`. Hai con số này hiện trong phần dịch vụ
và phần hỏi đáp.

### 2.3 Chỗ để xe
**File:** `src/data/site.js` → `CONTACT.parking`

Đang để `Có chỗ để xe máy ngay trước cửa, không mất phí.`
Đây là chi tiết nhỏ nhưng đúng thứ khách hay lo, nên viết cho đúng thực tế.

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

**Tình trạng ảnh hiện tại của cả đội:**

| Người | Ảnh đang dùng | Ghi chú |
|---|---|---|
| Katun | Ảnh trong thư mục riêng | Mặc đồ **SpartaFit**, không phải Panther Fit |
| Sơn Thái | Ảnh chụp trong đồng phục Panther Fit | Đẹp và đúng nhận diện |
| Hà Quyết | Ảnh đang kèm khách | Không phải ảnh chân dung |
| Liên Hồng Ngọc | Ảnh trong thư mục riêng | Mặc đồ **SpartaFit**, không phải Panther Fit |
| Nguyễn Hải Đăng | Ảnh chân dung trong đồng phục Panther Fit | Có chữ in sẵn trên ảnh, xem bên dưới |

**Về ảnh của Nguyễn Hải Đăng:** góc trên bên phải có chữ **HAI DANG NGUYEN /
HLV | SALER / PANTHER FIT** in sẵn lên ảnh. Thẻ huấn luyện viên trên web đã hiện
tên và vai trò ngay dưới ảnh, nên tên anh ấy xuất hiện hai lần trong cùng một khung.
Nếu tìm được file gốc chưa gắn chữ thì thay vào là gọn.

**Đề xuất đáng làm nhất:** chụp một buổi ảnh chân dung cho cả năm người, cùng đồng
phục navy, cùng nền, cùng ánh sáng. Hiện tại năm tấm ảnh đến từ năm nguồn khác nhau
nên nhìn thiếu đồng bộ, và hai tấm còn mặc áo thương hiệu khác. Đây là phần dễ thấy
nhất trên trang Về chúng tôi.

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

**Về việc đưa review Google lên web** (đã bàn, quyết định để sau):

Thứ tự cần làm là đăng ký Google Business Profile trước, gom đủ khoảng mười review
thật, rồi mới gắn lên web. Chưa có hồ sơ thì không có gì để gắn.

Khi tới lúc đó, ba cách và đánh giá nhanh:

| Cách | Ưu | Nhược |
|---|---|---|
| Chép tay vào `TESTIMONIALS` kèm nút dẫn sang Google | Trang giữ nguyên tốc độ, tự chọn được review nào lên | Phải tự cập nhật |
| Google Places API, lấy lúc build | Tự cập nhật, không script ngoài | Cần API key và bật thanh toán, tối đa 5 review, lưu vào file tĩnh là vùng xám về điều khoản |
| Widget bên thứ ba (Elfsight, Trustindex) | Cắm phát chạy | Script ngoài làm chậm trang, thêm bên theo dõi khách, bản miễn phí có logo của họ |

Nghiêng về cách thứ nhất.

**Cảnh báo:** không được gắn schema `Review` hoặc `AggregateRating` cho review lấy
từ Google. Quy định của Google cấm đánh dấu review từ nguồn bên thứ ba, vi phạm có
thể bị phạt thủ công. Hiển thị review thì được, nhưng nó sẽ không làm hiện sao vàng
trên kết quả tìm kiếm.

---

## Nhóm 5: bổ sung sau, không gấp

- **Instagram và TikTok**: `src/data/site.js`, đang để trống nên không hiện ra.
  Theo tài liệu thương hiệu thì hai kênh này chưa phải ưu tiên, để trống là hợp lý.
- **Ảnh chụp đường vào và mặt tiền phòng tập**: khách lần đầu tìm đường rất cần,
  và đúng tinh thần giảm nỗi lo bước vào cửa.
- **Video ngắn quay một vòng phòng tập**: Facebook video là định dạng đã chứng minh
  hiệu quả với phòng tập. Nhúng một video lên trang chủ sẽ mạnh hơn ảnh tĩnh.
