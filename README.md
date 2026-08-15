# Website Panther Fit

Website chính thức của phòng tập Panther Fit, Thái Nguyên.

Dựng bằng **Astro** (Node.js), xuất ra file tĩnh, chạy được trên gói hosting thường
của Hostinger. Không cần server Node chạy 24/7, không cần cơ sở dữ liệu.

---

## Mục lục

1. [Chạy thử trên máy](#1-chạy-thử-trên-máy)
2. [Cấu trúc thư mục](#2-cấu-trúc-thư-mục)
3. [Sửa nội dung ở đâu](#3-sửa-nội-dung-ở-đâu)
4. [Đưa code lên GitHub](#4-đưa-code-lên-github)
5. [Deploy lên Hostinger](#5-deploy-lên-hostinger)
6. [Form liên hệ](#6-form-liên-hệ)
7. [Việc cần làm sau khi lên mạng](#7-việc-cần-làm-sau-khi-lên-mạng)

---

## 1. Chạy thử trên máy

Cần Node.js phiên bản 20 trở lên.

```bash
npm install
npm run dev
```

Mở `http://localhost:4321` trong trình duyệt. Sửa file nào là trang tự nạp lại file đó.

Các lệnh khác:

| Lệnh | Việc nó làm |
|---|---|
| `npm run dev` | Chạy thử trên máy |
| `npm run build` | Build ra thư mục `dist/` để đưa lên hosting |
| `npm run preview` | Xem thử bản đã build |
| `npm run assets` | Xử lý lại ảnh từ thư mục `Panther Fit/Photos` |

---

## 2. Cấu trúc thư mục

```
website/
├── public/                  File đưa nguyên trạng lên hosting
│   ├── .htaccess            Cấu hình máy chủ (https, nén, cache, bảo mật)
│   ├── gui-lien-he.php      Nhận lời nhắn từ form liên hệ
│   ├── robots.txt           Hướng dẫn cho Google
│   ├── logo-panther-fit.png Logo nền trong suốt
│   └── favicon.png          Icon trên tab trình duyệt
│
├── scripts/
│   └── prepare-assets.mjs   Script xử lý ảnh gốc thành ảnh dùng cho web
│
├── src/
│   ├── assets/              Ảnh đã xử lý, Astro tự nén và cắt nhiều cỡ
│   ├── components/          Các khối dùng lại (header, footer, thẻ HLV...)
│   ├── data/                >>> NỘI DUNG NẰM Ở ĐÂY <<<
│   │   ├── site.js          Địa chỉ, số điện thoại, giờ mở cửa, menu
│   │   ├── content.js       Dịch vụ, buổi đầu tiên, câu hỏi hay gặp
│   │   └── trainers.js      Danh sách huấn luyện viên
│   ├── layouts/
│   │   └── Base.astro       Khung chung, phần SEO và dữ liệu cho Google
│   ├── pages/               Mỗi file là một trang
│   │   ├── index.astro          → /
│   │   ├── ve-chung-toi.astro   → /ve-chung-toi (kèm phần huấn luyện viên)
│   │   ├── dich-vu.astro        → /dich-vu
│   │   ├── lien-he.astro        → /lien-he
│   │   └── 404.astro            → trang báo lỗi
│   └── styles/
│       └── global.css       Màu, phông chữ, khoảng cách của toàn website
│
└── .github/workflows/
    └── deploy.yml           Tự động deploy khi đẩy code lên GitHub
```

---

## 3. Sửa nội dung ở đâu

Gần như mọi chữ đều nằm trong ba file, không cần đụng vào code giao diện.

| Muốn sửa | Mở file |
|---|---|
| Địa chỉ, số điện thoại, Zalo, Facebook, giờ mở cửa | `src/data/site.js` |
| Tên miền của website | `src/data/site.js`, dòng `url` |
| Mô tả dịch vụ, bốn bước buổi đầu tiên, câu hỏi hay gặp | `src/data/content.js` |
| Huấn luyện viên: tên, vai trò, giới thiệu | `src/data/trainers.js` |
| Màu sắc, phông chữ | `src/styles/global.css`, phần `@theme` ở đầu file |

Trong `site.js` và `content.js`, chỗ nào có ghi chú `CAN DIEN` là chỗ đang để tạm,
cần thay bằng thông tin thật. Xem danh sách đầy đủ trong [CONTENT-TODO.md](./CONTENT-TODO.md).

### Đổi ảnh

1. Bỏ ảnh mới vào thư mục `Panther Fit/Photos`
2. Mở `scripts/prepare-assets.mjs`, thêm hoặc sửa dòng tương ứng trong danh sách `PHOTOS`
3. Chạy `npm run assets`

Ảnh gốc không bị thay đổi. Script chỉ đọc ảnh gốc rồi ghi bản đã thu nhỏ vào `src/assets`.

---

## 4. Đưa code lên GitHub

Làm một lần duy nhất:

```bash
git init
git add .
git commit -m "Website Panther Fit"
git branch -M main
```

Tạo một repository mới trên GitHub (để chế độ Private cũng được), rồi:

```bash
git remote add origin https://github.com/TEN-CUA-BAN/panther-fit-web.git
git push -u origin main
```

Sau này mỗi lần sửa xong:

```bash
git add .
git commit -m "Mô tả ngắn thay đổi vừa làm"
git push
```

---

## 5. Deploy lên Hostinger

Có hai cách. **Cách A tự động, nên dùng.**

### Cách A: GitHub tự đẩy lên mỗi lần push

**Bước 1.** Lấy thông tin FTP: đăng nhập hPanel → **Files → FTP Accounts**.
Ghi lại `FTP hostname`, `FTP username`, `FTP password`.

**Bước 2.** Vào repository trên GitHub → **Settings → Secrets and variables →
Actions → New repository secret**. Thêm đúng ba mục này:

| Tên secret | Giá trị |
|---|---|
| `FTP_SERVER` | FTP hostname từ hPanel |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |

**Bước 3.** Push code lên nhánh `main`. Vào tab **Actions** trên GitHub để xem tiến trình.
Chạy xong là website đã lên.

Muốn chạy lại bằng tay: tab **Actions → Deploy len Hostinger → Run workflow**.

### Cách B: tải file lên bằng tay

```bash
npm run build
```

Vào hPanel → **Files → File Manager** → mở thư mục `public_html` →
tải toàn bộ **nội dung bên trong** thư mục `dist/` lên (không tải cả thư mục `dist`).

Nhớ bật hiển thị file ẩn để không bỏ sót `.htaccess`.

### Sau khi deploy lần đầu

1. hPanel → **Domains**, trỏ tên miền về hosting này
2. hPanel → **Security → SSL**, bật SSL miễn phí (Let's Encrypt)
3. Mở `src/data/site.js`, sửa `url` thành tên miền thật rồi deploy lại
4. Sửa dòng `Sitemap:` trong `public/robots.txt` cho khớp tên miền

---

## 6. Form liên hệ

Form ở trang `/lien-he` gửi tới file `public/gui-lien-he.php`, chạy bằng PHP có sẵn
trên Hostinger. Không dùng dịch vụ bên ngoài, không tốn phí.

**Cần làm trước khi dùng:** mở `public/gui-lien-he.php`, sửa hai dòng đầu:

```php
$NGUOI_NHAN = 'lienhe@pantherfit.vn';   // email nhận lời nhắn
$NGUOI_GUI  = 'website@pantherfit.vn';  // email gửi đi, phải cùng tên miền
```

Tạo hai địa chỉ email này trong hPanel → **Emails**. Email gửi đi bắt buộc phải cùng
tên miền với website, nếu không thư sẽ bị coi là spam.

Mọi lời nhắn còn được ghi thêm vào file `panther-fit-lien-he.log` nằm **ngoài**
thư mục `public_html`, để không mất liên hệ nếu email trục trặc. File này người ngoài
không truy cập được.

Form chỉ hoạt động khi đã lên hosting thật. Chạy `npm run dev` trên máy thì PHP
không chạy, đó là bình thường.

---

## 7. Việc cần làm sau khi lên mạng

- [ ] Điền hết thông tin thật trong `src/data/site.js` (xem `CONTENT-TODO.md`)
- [ ] Đăng ký [Google Business Profile](https://business.google.com) cho phòng tập.
      Đây là việc có tác dụng nhanh nhất với khách tìm "phòng gym gần đây"
- [ ] Khai báo website với [Google Search Console](https://search.google.com/search-console)
      và nộp `https://tenmien.vn/sitemap-index.xml`
- [ ] Dán link website vào phần giới thiệu của trang Facebook
- [ ] Xin phép vài hội viên quen để lấy lời khen thật, rồi bật phần "hội viên nói gì"
      (đổi `SHOW_TESTIMONIALS` thành `true` trong `src/data/site.js`)

---

## Ghi chú kỹ thuật

- **Astro 5** dựng sẵn HTML tĩnh, gần như không có JavaScript chạy trên trình duyệt
  ngoài menu điện thoại, hiệu ứng cuộn và kiểm tra form
- **Tailwind CSS 4** cho phần giao diện, biến màu khai báo trong `src/styles/global.css`
- Ảnh tự động chuyển sang **WebP** và cắt nhiều kích cỡ khi build
- Phông chữ **Barlow Condensed** cho tiêu đề và **Be Vietnam Pro** cho phần thân,
  cả hai đều có đầy đủ dấu tiếng Việt
- Có sẵn dữ liệu `HealthClub` theo chuẩn schema.org để Google hiểu đây là phòng tập
  có địa chỉ thật
- Hiệu ứng chuyển động tự tắt khi người dùng bật chế độ giảm chuyển động trong máy
