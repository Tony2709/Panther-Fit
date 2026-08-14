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
  phoneDisplay: '097 753 3302',
  phoneRaw: '+84977533302',

  // Zalo dung chung so dien thoai
  zalo: 'https://zalo.me/84977533302',

  // CAN DIEN: dan link trang Facebook that cua phong tap
  facebook: 'https://www.facebook.com/pantherfit',

  // CAN DIEN: neu co Instagram va TikTok thi dien vao, khong co thi de trong
  instagram: '',
  tiktok: '',

  // CAN DIEN: email nhan tin nhan tu form lien he
  email: 'lienhe@pantherfit.vn',

  address: {
    // CAN DIEN: dia chi day du, so nha va ten duong
    street: 'Cần cập nhật số nhà và tên đường',
    ward: '',
    city: 'Thái Nguyên',
    region: 'Thái Nguyên',
    country: 'VN',
    // CAN DIEN: dan link Google Maps that cua phong tap
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Panther+Fit+Thai+Nguyen',
    // CAN DIEN: lay tu Google Maps, dung cho ban do nhung tren trang lien he
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Panther%20Fit%20Th%C3%A1i%20Nguy%C3%AAn&output=embed',
    // CAN DIEN: toa do that, dung cho phan du lieu Google hieu duoc
    latitude: 21.5942,
    longitude: 105.8481,
  },

  // CAN DIEN: gio mo cua that
  hours: [
    { days: 'Thứ 2 đến thứ 6', time: '05:30 - 21:30' },
    { days: 'Thứ 7 và chủ nhật', time: '06:00 - 20:00' },
  ],

  // Dung cho phan du lieu Google hieu duoc, khop voi bang gio o tren
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '05:30', closes: '21:30' },
    { days: ['Saturday', 'Sunday'], opens: '06:00', closes: '20:00' },
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
  // CAN DIEN: buoi dau tien co mien phi khong. Neu khong, sua lai cau nay.
  firstSession: 'Buổi đầu tiên bên mình mời.',
};

export const NAV = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về tụi mình', href: '/ve-tui-minh' },
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
