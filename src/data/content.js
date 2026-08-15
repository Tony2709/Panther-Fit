/**
 * ============================================================
 *  NOI DUNG CHU CUA WEBSITE
 * ============================================================
 *  Dich vu, cac buoc buoi dau tien, cau hoi hay gap.
 *  Sua chu o day, khong can dong vao code giao dien.
 */

import { CONTACT, FACTS } from './site.js';

/** Hai goi dich vu chinh cua phong tap. */
export const SERVICES = [
  {
    slug: 'tap-nhom',
    ordinal: '01',
    name: 'Tập nhóm',
    short: 'Đi một mình vẫn có người tập cùng',
    summary:
      'Một buổi có huấn luyện viên dẫn từ đầu tới cuối, cùng một nhóm người quen mặt dần sau vài tuần. Bạn không phải tự nghĩ hôm nay tập gì.',
    points: [
      {
        title: 'Ai cũng theo được',
        body: 'Cùng một buổi nhưng mỗi người một mức. Người mới hạ tạ xuống, người quen tăng lên. Không ai bị bỏ lại phía sau và cũng không ai phải chờ.',
      },
      {
        title: 'Có người nhớ mặt bạn',
        body: 'Nhóm cố định nên vắng một tuần là có người hỏi. Với nhiều hội viên của chúng tôi, đó mới là lý do họ quay lại đều.',
      },
      {
        title: 'Rủ bạn đi cùng được',
        body: 'Đi hai người luôn dễ hơn đi một mình. Bạn có thể đưa bạn mình vào cùng buổi, đứng cạnh nhau cả buổi cũng không sao.',
      },
    ],
    detail: [
      `Một buổi kéo dài ${FACTS.sessionLength}, gồm khởi động, phần chính và phần giãn cơ.`,
      `Mỗi lớp khoảng ${FACTS.groupClassSize}, đủ để huấn luyện viên nhìn được từng người.`,
      'Không cần biết trước động tác nào. Cứ tới, mọi thứ được chỉ tại chỗ.',
    ],
    forWho:
      'Hợp với người muốn có lịch cố định để khỏi phải tự thuyết phục mình mỗi tối, và người thấy tập một mình thì chán.',
  },
  {
    slug: 'pt-1-kem-1',
    ordinal: '02',
    name: 'PT 1 kèm 1',
    short: 'Bài tập chỉnh theo đúng người có mặt hôm đó',
    summary:
      'Một huấn luyện viên đi cùng bạn suốt buổi. Đau vai thì né bài vai, hôm nay mệt thì hạ xuống, khoẻ hơn thì đẩy lên. Không có giáo án cứng.',
    points: [
      {
        title: 'Không cần khoẻ sẵn mới bắt đầu',
        body: 'Đó đúng là lý do có huấn luyện viên. Bạn không cần khoẻ để bắt đầu, bạn khoẻ lên nhờ việc bắt đầu.',
      },
      {
        title: 'Có người sửa tư thế ngay',
        body: 'Sai một chút là được chỉnh luôn, không phải tự soi gương đoán. Đây là phần khó tự làm được khi tập một mình.',
      },
      {
        title: 'Lịch linh hoạt theo công việc',
        body: 'Bạn hẹn giờ trước với huấn luyện viên. Sáng sớm trước giờ làm hay tối muộn sau khi đón con đều xếp được.',
      },
    ],
    detail: [
      `Một buổi kéo dài ${FACTS.sessionLength}, riêng bạn và huấn luyện viên.`,
      'Buổi đầu dành phần lớn thời gian để hỏi han và thử vài động tác cơ bản, chưa vội tập nặng.',
      'Bạn chọn được huấn luyện viên bạn thấy hợp, không bị xếp ngẫu nhiên.',
    ],
    forWho:
      'Hợp với người lâu rồi chưa tập lại, người có chỗ đau cũ cần né, và người muốn đi nhanh hơn trong thời gian ngắn.',
  },
];

/** Bon buoc cua buoi dau tien. Phan nay giai toa noi lo lon nhat. */
export const FIRST_VISIT = [
  {
    ordinal: '01',
    title: 'Bạn nhắn trước, chúng tôi hẹn giờ vắng người',
    body: 'Nếu bạn ngại chỗ đông, cứ nói thẳng. Chúng tôi xếp bạn vào khung giờ thoáng nhất trong ngày để buổi đầu bạn có chỗ mà thở.',
  },
  {
    ordinal: '02',
    title: 'Có người đón bạn ở cửa',
    body: 'Không phải tự tìm đường, không phải đứng loay hoay giữa phòng. Có huấn luyện viên dẫn bạn đi một vòng, chỉ chỗ thay đồ, chỗ để xe, chỗ uống nước.',
  },
  {
    ordinal: '03',
    title: 'Thử vài động tác cơ bản',
    body: 'Nhẹ thôi. Mục đích là để bạn thấy cơ thể mình làm được, và để huấn luyện viên biết nên chỉnh bài thế nào cho lần sau.',
  },
  {
    ordinal: '04',
    title: 'Rồi bạn về, không ai chốt gì cả',
    body: 'Muốn nghĩ thêm vài hôm cũng được. Muốn hỏi giá thì chúng tôi nói thẳng con số, không có gói nào phải ngồi giải mã.',
  },
];

/** Cau hoi hay gap, xep theo dung thu tu nguoi ta thuc su lo. */
export const FAQ = [
  {
    q: 'Em chưa tập bao giờ, vào có bị lạc lõng không?',
    a: 'Gần như ai bước vào lần đầu cũng hỏi câu này. Thật ra không ai nhìn bạn đâu, họ đang bận vật lộn với set của chính họ. Buổi đầu luôn có người đi cùng bạn, và bạn cứ đứng phía sau tập theo cũng được.',
  },
  {
    q: 'Em chưa đủ khoẻ để bắt đầu thì sao?',
    a: 'Đó đúng là lý do có huấn luyện viên. Mỗi buổi được chỉnh theo người có mặt hôm đó, không phải theo một giáo án cố định. Bạn không cần khoẻ để bắt đầu, bạn khoẻ lên nhờ việc bắt đầu.',
  },
  {
    q: 'Một buổi mất bao lâu, em đi làm về muộn thì có kịp không?',
    a: `Một buổi ${FACTS.sessionLength}, tính cả khởi động và giãn cơ. Phòng mở ${CONTACT.hours[0].time} các ngày trong tuần nên tập sáng sớm trước giờ làm hoặc tối muộn sau khi về đều được.`,
  },
  {
    q: 'Giá thế nào?',
    a: 'Câu hỏi hợp lý. Chúng tôi nói thẳng con số khi bạn hỏi, không có gói nào phải giải mã. Mức giá tuỳ vào bạn tập nhóm hay PT 1 kèm 1 và tập bao nhiêu buổi một tuần, nên cứ nhắn tin hoặc gọi, sẽ có người báo cụ thể trong ngày.',
  },
  {
    q: 'Cần mang theo gì cho buổi đầu?',
    a: 'Quần áo thoải mái, một đôi giày thể thao và một chai nước. Vậy là đủ. Khăn và chỗ thay đồ tại phòng tập đã có sẵn.',
  },
  {
    q: 'Để xe ở đâu?',
    a: CONTACT.parking,
  },
  {
    q: 'Em muốn rủ bạn đi cùng có được không?',
    a: 'Được, và chúng tôi luôn khuyến khích điều đó. Phần lớn hội viên hiện tại đến đây lần đầu là do một người bạn rủ. Bạn đi hai người, đứng cạnh nhau cả buổi cũng không sao.',
  },
];

/**
 * Loi hoi vien. Hien dang TAT trong site.js vi day chi la vi du.
 * KHONG dua len mang khi chua co loi that tu khach.
 * Cach lam: quay dien thoai hoi vai hoi vien quen, xin phep, roi chep
 * lai dung nguyen van cua ho vao day.
 */
export const TESTIMONIALS = [
  { quote: 'Cần thay bằng lời thật của hội viên.', name: 'Tên hội viên', context: 'Tập nhóm, 6 tháng' },
  { quote: 'Cần thay bằng lời thật của hội viên.', name: 'Tên hội viên', context: 'PT 1 kèm 1, 3 tháng' },
  { quote: 'Cần thay bằng lời thật của hội viên.', name: 'Tên hội viên', context: 'Tập nhóm, 1 năm' },
];
