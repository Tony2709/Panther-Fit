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

  url: 'https://pantherfitt.com',

  description:
    'Panther Fit là phòng tập ở Thái Nguyên với lớp tập nhóm và PT 1 kèm 1. Chỗ dành cho bạn trẻ mới bắt đầu, người đi làm bận rộn và người lâu rồi chưa tập lại. Ghé thử một buổi trước khi quyết định.',

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
  email: 'lienhe@pantherfitt.com',

  address: {
    street: '66 Phan Bội Châu, Khu dân cư số 10',
    ward: 'Phan Đình Phùng',
    city: 'Thái Nguyên',
    region: 'Thái Nguyên',
    postalCode: '250000',
    country: 'VN',
    /**
     * Link dan thang toi ho so Google Business Profile that cua phong tap.
     * Dung dang cid vi no tro dung mot ho so duy nhat va khong doi khi
     * Google cap nhat ban do, khac voi link tim kiem theo dia chi.
     * So cid lay tu link chia se: maps.app.goo.gl/3R181rzUiUGx6xtg6
     */
    mapsUrl: 'https://maps.google.com/?cid=3159359802337109870',

    /** Ban do nhung tren trang lien he, ghim dat theo toa do that */
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=21.5919531,105.839786&z=17&hl=vi&output=embed',

    // Toa do lay tu chinh ho so Google cua phong tap
    latitude: 21.5919531,
    longitude: 105.839786,
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
  { label: 'Liên hệ', href: '/lien-he' },
];

/**
 * Phan hoi vien noi gi.
 * Hien dang TAT vi chua co loi khen that tu khach.
 * Khi nao co roi thi dien vao TESTIMONIALS ben duoi va doi thanh true.
 */
export const SHOW_TESTIMONIALS = false;
