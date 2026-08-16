<?php
/**
 * ============================================================
 *  NHAN LOI NHAN TU FORM LIEN HE
 * ============================================================
 *
 *  File nay chay tren Hostinger (goi shared hosting co san PHP).
 *  Khong can cai dat gi them, khong can dich vu ben ngoai.
 *
 *  CAN LAM MOT LAN: doi dia chi email o dong $NGUOI_NHAN ben duoi
 *  thanh email that cua phong tap.
 *
 *  Luu y: mail() cua Hostinger gui tot nhat khi dia chi gui di
 *  cung ten mien voi website, vi du lienhe@pantherfitt.com
 */

// ------------------------------------------------------------
// CAI DAT
// ------------------------------------------------------------
$NGUOI_NHAN = 'lienhe@pantherfitt.com';   // CAN DIEN email nhan lien he
$NGUOI_GUI  = 'website@pantherfitt.com';  // CAN DIEN email gui di, cung ten mien
$TRANG_VE   = '/lien-he?trang-thai=da-gui';

// ------------------------------------------------------------

header('X-Content-Type-Options: nosniff');

$muonJson = isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;

function ketThuc($ok, $thongBao, $muonJson, $trangVe, $maLoi = 200) {
    if ($muonJson) {
        http_response_code($maLoi);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'message' => $thongBao], JSON_UNESCAPED_UNICODE);
    } else {
        http_response_code($ok ? 303 : $maLoi);
        if ($ok) {
            header('Location: ' . $trangVe);
        } else {
            header('Content-Type: text/plain; charset=utf-8');
            echo $thongBao;
        }
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    ketThuc(false, 'Chi nhan phuong thuc POST.', $muonJson, $TRANG_VE, 405);
}

// Bay bat robot: o nay an di, nguoi that khong bao gio dien
if (!empty($_POST['website'])) {
    // Tra ve nhu binh thuong de robot khong biet minh bi chan
    ketThuc(true, 'Da nhan.', $muonJson, $TRANG_VE);
}

function layChu($khoa, $doDaiToiDa = 500) {
    $giaTri = isset($_POST[$khoa]) ? trim((string) $_POST[$khoa]) : '';
    $giaTri = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $giaTri);
    return mb_substr($giaTri, 0, $doDaiToiDa);
}

$ten       = layChu('ten', 120);
$dienThoai = layChu('dien_thoai', 40);
$hinhThuc  = layChu('hinh_thuc', 60);
$khungGio  = layChu('khung_gio', 60);
$loiNhan   = mb_substr(trim((string) ($_POST['loi_nhan'] ?? '')), 0, 2000);

// Kiem tra toi thieu
$soChuSo = preg_replace('/\D/', '', $dienThoai);

if (mb_strlen($ten) < 2) {
    ketThuc(false, 'Thieu ten.', $muonJson, $TRANG_VE, 422);
}

if (strlen($soChuSo) < 9 || strlen($soChuSo) > 12) {
    ketThuc(false, 'So dien thoai chua dung.', $muonJson, $TRANG_VE, 422);
}

// Soan noi dung email
$dong = [
    'Co nguoi vua de lai lien he tren website Panther Fit.',
    '',
    'Ten:          ' . $ten,
    'Dien thoai:   ' . $dienThoai,
    'Muon tap:     ' . ($hinhThuc !== '' ? $hinhThuc : 'khong chon'),
    'Khung gio:    ' . ($khungGio !== '' ? $khungGio : 'khong chon'),
    '',
    'Loi nhan:',
    $loiNhan !== '' ? $loiNhan : '(khong co)',
    '',
    '---',
    'Thoi gian: ' . date('d/m/Y H:i'),
    'IP:        ' . ($_SERVER['REMOTE_ADDR'] ?? 'khong ro'),
];

$noiDung = implode("\n", $dong);
$tieuDe  = 'Lien he moi tu website: ' . $ten . ' - ' . $dienThoai;

$header  = 'From: Panther Fit Website <' . $NGUOI_GUI . '>' . "\r\n";
$header .= 'Reply-To: ' . $NGUOI_GUI . "\r\n";
$header .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";
$header .= 'MIME-Version: 1.0' . "\r\n";

$daGui = @mail(
    $NGUOI_NHAN,
    '=?UTF-8?B?' . base64_encode($tieuDe) . '?=',
    $noiDung,
    $header
);

// Ghi lai vao file de khong mat lien he khi email truc trac.
// Uu tien ghi ra ngoai thu muc public_html de khong ai truy cap duoc
// qua trinh duyet. Neu khong ghi duoc thi ghi trong thu muc web,
// va .htaccess da chan san duong dan .log.
$thuMucNgoai = dirname(__DIR__);
$duongDanLog = is_writable($thuMucNgoai)
    ? $thuMucNgoai . '/panther-fit-lien-he.log'
    : __DIR__ . '/lien-he.log';
@file_put_contents(
    $duongDanLog,
    date('c') . ' | ' . str_replace("\n", ' | ', $noiDung) . PHP_EOL,
    FILE_APPEND | LOCK_EX
);

if (!$daGui) {
    // Van bao thanh cong cho nguoi dung vi lien he da duoc ghi lai,
    // nhung ghi ro trong log de chu phong tap kiem tra cau hinh email.
    @file_put_contents(
        $duongDanLog,
        date('c') . ' | CANH BAO: mail() that bai, kiem tra cau hinh email tren Hostinger' . PHP_EOL,
        FILE_APPEND | LOCK_EX
    );
}

ketThuc(true, 'Da nhan lien he.', $muonJson, $TRANG_VE);
