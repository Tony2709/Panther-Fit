/**
 * ============================================================
 *  TRUNG TAM THONG TIN CUA WEBSITE PANTHER FIT
 * ============================================================
 *
 *  Moi thong tin lien he, gio mo cua, mang xa hoi deu nam o day.
 *  Sua o file nay la ca website tu cap nhat theo.
 *
 *  Cho nao co ghi chu  // CAN DIEN  la cho can thay bang thong
 *  tin that truoc khi dua website len mang.
 */

export const SITE = {
  name: 'Panther Fit',
  legalName: 'Panther Fit',
  tagline: 'Phòng tập ở Thái Nguyên, từ 2024',
  established: 2024,

  // CAN DIEN: doi thanh ten mien that sau khi tro ve Hostinger
  url: 'https://pantherfit.vn',

  description:
    'Panther Fit là phòng tập ở Thái Nguyên với lớp tập nhóm và PT 1 kèm 1. Chỗ dành cho người đi làm bận rộn và người lâu rồi chưa tập lại. Ghé thử một buổi trước khi quyết định.',

  locale: 'vi-VN',
  language: 'vi',
};

export const CONTACT = {
  phoneDisplay: '0977 533 302',
  phoneRaw: '+84977533302',

  // Zalo dung chung so dien thoai
  zalo: 'https://zalo.me/84977533302',

  facebook: 'https://www.facebook.com/pantherfit20/',

  // CAN DIEN: neu co Instagram va TikTok thi dien vao, khong co thi de trong
  instagram: '',
  tiktok: '',

  // CAN DIEN: email nhan tin nhan tu form lien he
  email: 'lienhe@pantherfit.vn',

  address: {
    street: '66 Phan Bội Châu, Khu dân cư số 10',
    ward: 'Phan Đình Phùng',
    city: 'Thái Nguyên',
    region: 'Thái Nguyên',
    postalCode: '250000',
    country: 'VN',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=66%20Phan%20B%E1%BB%99i%20Ch%C3%A2u%2C%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Th%C3%A1i%20Nguy%C3%AAn',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=66%20Phan%20B%E1%BB%99i%20Ch%C3%A2u%2C%20Khu%20d%C3%A2n%20c%C6%B0%20s%E1%BB%91%2010%2C%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Th%C3%A1i%20Nguy%C3%AAn&output=embed',
    // CAN DIEN: toa do chinh xac. Mo Google Maps, bam chuot phai dung vao
    // cua phong tap roi chon dong toa do o tren cung de sao chep.
    // Hai so hien tai la uoc luong theo phuong Phan Dinh Phung.
    latitude: 21.5942,
    longitude: 105.8481,
  },

  hours: [
    { days: 'Thứ 2 đến thứ 6', time: '05:00 - 22:00' },
    { days: 'Thứ 7 và chủ nhật', time: '08:00 - 21:00' },
  ],

  // Dung cho phan du lieu Google hieu duoc, khop voi bang gio o tren
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '05:00', closes: '22:00' },
    { days: ['Saturday', 'Sunday'], opens: '08:00', closes: '21:00' },
  ],

  // CAN DIEN: mo ta cho de xe, cau nay hien tren trang lien he va phan hoi dap
  parking: 'Có chỗ để xe máy ngay trước cửa, không mất phí.',
};

/** Nhung con so va cau chu xuat hien nhieu noi, gom lai mot cho cho de sua. */
export const FACTS = {
  // CAN DIEN: mot buoi tap thuong keo dai bao lau
  sessionLength: 'khoảng 60 phút',
  // CAN DIEN: so nguoi toi da mot lop nhom
  groupClassSize: '10 đến 14 người',
  firstSession: 'Buổi đầu tiên miễn phí.',
};

export const NAV = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về chúng tôi', href: '/ve-chung-toi' },
  { label: 'Dịch vụ', href: '/dich-vu' },
  { label: 'Huấn luyện viên', href: '/huan-luyen-vien' },
  { label: 'Bảng giá', href: '/bang-gia' },
  { label: 'Liên hệ', href: '/lien-he' },
];

/**
 * Phan hoi vien noi gi.
 * Hien dang TAT vi chua co loi khen that tu khach.
 * Khi nao co roi thi dien vao TESTIMONIALS ben duoi va doi thanh true.
 */
export const SHOW_TESTIMONIALS = false;
