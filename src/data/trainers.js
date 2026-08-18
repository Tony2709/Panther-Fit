/**
 * ============================================================
 *  DOI NGU HUAN LUYEN VIEN
 * ============================================================
 *
 *  Ten va anh lay tu thu muc Photos/Our team.
 *  Thu tu trong danh sach nay chinh la thu tu hien tren trang,
 *  va ba nguoi dau tien la ba nguoi hien o trang chu.
 *
 *  QUAN TRONG: phan `bio` hien dang la cau chu tam, viet theo
 *  cach lam viec chung cua phong tap chu khong phai loi ke rieng
 *  cua tung nguoi. Hay de moi HLV tu viet mot hai cau ve minh roi
 *  thay vao, phan nay se tot hon rat nhieu.
 *  Xem them file CONTENT-TODO.md.
 */

import katun from '../assets/pt-katun.jpg';
import sonThai from '../assets/pt-son-thai.jpg';
import quyet from '../assets/pt-quyet.jpg';
import haiDang from '../assets/pt-hai-dang.jpg';

export const TRAINERS = [
  {
    slug: 'vu-thu-phuong',
    name: 'Vũ Thu Phương',
    role: 'Chủ phòng tập và huấn luyện viên',
    image: katun,
    alt: 'Vũ Thu Phương, chủ phòng tập Panther Fit, tại khu vực tập luyện',
    focus: ['PT 1 kèm 1', 'Hội viên nữ'],
    bio: 'Founder Panther Fit và vẫn đứng lớp mỗi tuần. Nhiều hội viên nữ lần đầu vào phòng tập chọn tập cùng Thu Phương, đơn giản vì được hỏi han kỹ trước khi bắt đầu và không bị đẩy nhanh.',
  },
  {
    slug: 'huynh-thai-son',
    name: 'Huỳnh Thái Sơn',
    // Doc duoc tu bang ten tren dong phuc trong anh doi ngu
    role: 'Quản lý nhân sự và huấn luyện viên',
    image: sonThai,
    alt: 'Huấn luyện viên Huỳnh Thái Sơn trong đồng phục Panther Fit tại phòng tập',
    focus: ['PT 1 kèm 1', 'Người mới bắt đầu'],
    bio: 'Buổi đầu tiên của bạn nhiều khả năng sẽ do Thái Sơn dẫn đi một vòng. Cứ nói thật là bạn lâu rồi chưa tập, bài sẽ được hạ xuống đúng mức bạn làm được hôm nay.',
  },
  {
    slug: 'ha-minh-quyet',
    name: 'Hà Minh Quyết',
    role: 'Huấn luyện viên',
    image: quyet,
    alt: 'Huấn luyện viên Hà Minh Quyết đang hỗ trợ hội viên tập tạ tay tại Panther Fit',
    focus: ['PT 1 kèm 1', 'Tập nhóm'],
    bio: 'Kiểu kèm sát từng nhịp thở, sửa tư thế ngay khi thấy lệch. Bạn sẽ không phải đoán xem mình đang tập đúng hay sai.',
  },
  {
    slug: 'hai-dang',
    name: 'Nguyễn Hải Đăng',
    // Doc duoc tu bang ten tren anh chan dung
    role: 'Huấn luyện viên và tư vấn',
    image: haiDang,
    alt: 'Huấn luyện viên Nguyễn Hải Đăng trong đồng phục Panther Fit tại phòng tập',
    focus: ['PT 1 kèm 1', 'Tăng sức mạnh'],
    bio: 'Hợp với ai muốn đi đường dài và thích hiểu vì sao hôm nay lại tập bài này. Hỏi gì cũng được giải thích cho tới khi bạn thấy rõ.',
  },
];
