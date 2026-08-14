/**
 * ============================================================
 *  DOI NGU HUAN LUYEN VIEN
 * ============================================================
 *
 *  Ten va anh lay tu thu muc Photos/Our team.
 *
 *  QUAN TRONG: phan `bio` hien dang la cau chu tam, viet theo
 *  cach lam viec chung cua phong tap chu khong phai loi ke rieng
 *  cua tung nguoi. Hay de moi HLV tu viet mot hai cau ve minh roi
 *  thay vao, phan nay se tot hon rat nhieu.
 *  Xem them file CONTENT-TODO.md.
 */

import quyet from '../assets/pt-quyet.jpg';
import sonThai from '../assets/pt-son-thai.jpg';
import katun from '../assets/pt-katun.jpg';
import hongNgoc from '../assets/pt-hong-ngoc.jpg';
import haiDang from '../assets/pt-hai-dang.jpg';
import nghiVu from '../assets/pt-nghi-vu.jpg';

export const TRAINERS = [
  {
    slug: 'son-thai',
    name: 'Sơn Thái',
    // Doc duoc tu bang ten tren dong phuc trong anh doi ngu
    role: 'Quản lý nhân sự và huấn luyện viên',
    image: sonThai,
    alt: 'Huấn luyện viên Sơn Thái trong đồng phục Panther Fit tại phòng tập',
    focus: ['PT 1 kèm 1', 'Người mới bắt đầu'],
    bio: 'Buổi đầu tiên của bạn nhiều khả năng sẽ do Sơn Thái dẫn đi một vòng. Cứ nói thật là bạn lâu rồi chưa tập, bài sẽ được hạ xuống đúng mức bạn làm được hôm nay.',
  },
  {
    slug: 'quyet',
    name: 'Quyết',
    role: 'Huấn luyện viên',
    image: quyet,
    alt: 'Huấn luyện viên Quyết đang hỗ trợ hội viên tập tạ tay tại Panther Fit',
    focus: ['PT 1 kèm 1', 'Tập nhóm'],
    bio: 'Kiểu kèm sát từng nhịp thở, sửa tư thế ngay khi thấy lệch. Bạn sẽ không phải đoán xem mình đang tập đúng hay sai.',
  },
  {
    slug: 'katun',
    name: 'Katun',
    role: 'Huấn luyện viên',
    image: katun,
    alt: 'Huấn luyện viên Katun tại phòng tập Panther Fit',
    focus: ['PT 1 kèm 1', 'Hội viên nữ'],
    bio: 'Nhiều hội viên nữ lần đầu vào phòng tập chọn tập cùng Katun, đơn giản vì được hỏi han kỹ trước khi bắt đầu và không bị đẩy nhanh.',
  },
  {
    slug: 'hong-ngoc',
    name: 'Liên Hồng Ngọc',
    role: 'Huấn luyện viên',
    image: hongNgoc,
    alt: 'Huấn luyện viên Liên Hồng Ngọc tại phòng tập Panther Fit',
    focus: ['Tập nhóm', 'Hội viên nữ'],
    bio: 'Dẫn lớp nhóm theo kiểu ai cũng theo được, người khoẻ có bài của người khoẻ, người mới có bài của người mới, cùng một buổi.',
  },
  {
    slug: 'hai-dang',
    name: 'Nguyễn Hải Đăng',
    role: 'Huấn luyện viên',
    image: haiDang,
    alt: 'Huấn luyện viên Nguyễn Hải Đăng tại phòng tập Panther Fit',
    focus: ['PT 1 kèm 1', 'Tăng sức mạnh'],
    bio: 'Hợp với ai muốn đi đường dài và thích hiểu vì sao hôm nay lại tập bài này. Hỏi gì cũng được giải thích cho tới khi bạn thấy rõ.',
  },
  {
    slug: 'nghi-vu',
    name: 'Nghị Vũ',
    // Doc duoc tu bang ten tren dong phuc trong anh doi ngu
    role: 'Huấn luyện viên và tư vấn',
    image: nghiVu,
    alt: 'Huấn luyện viên Nghị Vũ trong đồng phục Panther Fit tại phòng tập',
    focus: ['Tập nhóm', 'Người mới bắt đầu'],
    bio: 'Người hay bắt chuyện với hội viên mới nhất phòng. Nếu bạn đến một mình và chưa quen ai, khả năng cao sẽ được rủ vào nhóm ngay buổi đó.',
  },
];
