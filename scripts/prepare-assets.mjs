/**
 * Chuan bi anh cho website Panther Fit.
 *
 * Doc anh goc tu thu muc "Panther Fit/Photos" va "Panther Fit/Logo",
 * resize ve kich thuoc hop ly roi ghi vao src/assets (anh noi dung)
 * va public (logo, favicon, og-image).
 *
 * Chay lai bat cu luc nao:  npm run assets
 *
 * Anh goc khong bi thay doi.
 */

import sharp from 'sharp';
import { mkdir, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SOURCE = resolve(ROOT, '..'); // thu muc "Panther Fit"
const ASSETS = resolve(ROOT, 'src/assets');
const PUBLIC = resolve(ROOT, 'public');

/**
 * Anh noi dung: [file goc, ten dich, chieu rong toi da, tuy chon]
 *
 * Phan tuy chon co the co:
 *   crop: { left, top, width, height }  cat mot vung truoc khi thu nho
 */
const PHOTOS = [
  // Khong gian phong tap
  ['Photos/Phòng/Phòng đông người/DSC09607.jpg', 'hero-room.jpg', 2600],
  ['Photos/Phòng/Phòng đông người/DSC08949.jpg', 'room-01.jpg', 1800],
  ['Photos/Phòng/Phòng đông người/DSC09652.jpg', 'room-02.jpg', 1800],
  ['Photos/Phòng/Phòng đông người/DSC04774 copy.jpg', 'room-03.jpg', 1800],
  ['Photos/Phòng/Phòng đông người/DSC04783 copy.jpg', 'room-04.jpg', 1800],
  ['Photos/Phòng/Phòng đông người/DSC03555 copy.jpg', 'room-05.jpg', 1800],
  ['Photos/Bonus/Khách tập/DSC01818 copy.jpg', 'room-06.jpg', 2200],
  ['Photos/Phòng/Phòng đông người/2026_07_06_14_07_IMG_0208(1).jpg', 'room-07.jpg', 1800],

  // Lop nhom
  ['Photos/Phòng/Nhóm 13/DSC01827 copy.jpg', 'class-01.jpg', 2200],
  ['Photos/Phòng/Nhóm 13/DSC01840 copy.jpg', 'class-02.jpg', 1800],

  // Anh dung rieng cho tung phan tren trang chu
  ['Đi hai người.jpeg', 'di-hai-nguoi.jpg', 1600],
  ['Photos/Bonus/690749403_958209720420931_2662429359562491628_n.jpg', 'service-pt.jpg', 1800],

  // HLV dang kem hoi vien
  ['Photos/Our team/Group photo/DSC09331.jpg', 'coaching-01.jpg', 2200],
  ['Photos/Our team/Anh Quyết/DSC04766.jpg', 'coaching-02.jpg', 1800],
  ['Photos/Our team/Sơn Thái/DSC01168 copy.jpg', 'coaching-03.jpg', 1600],
  ['Photos/Our team/Katun/DSC03551 copy.jpg', 'coaching-04.jpg', 1800],
  ['Photos/Our team/Sơn Thái/DSC02166 copy.jpg', 'coaching-05.jpg', 1600],
  ['Photos/Our team/Katun/DSC02516 copy.jpg', 'coaching-06.jpg', 1800],

  // Ca doi ngu
  ['Photos/Our team/Group photo/2025_11_27_20_12_IMG_5634_1.jpg', 'team-full.jpg', 2400],
  ['Photos/Our team/Group photo/2025_11_27_20_34_IMG_5635.JPG', 'team-five.jpg', 2200],
  ['Photos/Our team/Group photo/2025_11_27_20_38_IMG_5637.JPG', 'team-trainers.jpg', 1800],
  ['Photos/Our team/Group photo/2025_11_27_21_01_IMG_5632.JPG', 'front-desk.jpg', 1600],
  ['Photos/Our team/Group photo/DSC01854 copy.jpg', 'reception.jpg', 2200],

  // Hoi vien
  ['Photos/Bonus/Khách tập/DSC01842 copy.jpg', 'member-01.jpg', 1600],
  ['Photos/Bonus/Khách tập/DSC02517 copy.jpg', 'member-02.jpg', 1600],
  ['Photos/Bonus/Khách tập/DSC02545 copy.jpg', 'member-03.jpg', 1600],

  // Chan dung huan luyen vien
  ['Photos/Our team/Group photo/2025_11_27_20_57_IMG_5633.JPG', 'pt-son-thai.jpg', 1400],
  ['Photos/Our team/Anh Quyết/DSC04766.jpg', 'pt-quyet.jpg', 1400],
  ['Photos/Our team/Katun/768529195_3157630224422845_2941734452001614977_n.jpg', 'pt-katun.jpg', 1400],
  ['Photos/Our team/Liên Hồng Ngọc/710827425_3083018445217357_4759825505894130802_n.jpg', 'pt-hong-ngoc.jpg', 1400],
  // Anh chan dung cua Hai Dang, dung nguyen khung goc khong cat.
  ['Photos/Our team/Nguyễn Hải Đăng/download.jpeg', 'pt-hai-dang.jpg', 1400],
];

const LOGO_SOURCE = 'Photos/Bonus/LOGO.png';

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function buildPhotos() {
  let done = 0;
  for (const [from, to, width, options = {}] of PHOTOS) {
    const src = resolve(SOURCE, from);
    if (!(await exists(src))) {
      console.warn(`  bo qua (khong tim thay): ${from}`);
      continue;
    }
    let pipeline = sharp(src).rotate();
    if (options.crop) pipeline = pipeline.extract(options.crop);

    await pipeline
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: '4:4:4' })
      .toFile(resolve(ASSETS, to));
    done += 1;
  }
  console.log(`  ${done}/${PHOTOS.length} anh noi dung`);
}

/**
 * Logo goc la net trang tren nen den dac, khong co alpha.
 * Dung do sang cua anh lam kenh alpha de tach nen.
 */
async function buildLogo() {
  const src = resolve(SOURCE, LOGO_SOURCE);
  if (!(await exists(src))) {
    console.warn(`  bo qua logo (khong tim thay): ${LOGO_SOURCE}`);
    return;
  }

  const trimmed = await sharp(src).trim({ threshold: 10 }).png().toBuffer();
  const { width, height } = await sharp(trimmed).metadata();
  const alpha = await sharp(trimmed).greyscale().raw().toBuffer();
  const raw = { raw: { width, height, channels: 1 } };

  const flat = (r, g, b) =>
    sharp({ create: { width, height, channels: 3, background: { r, g, b } } })
      .joinChannel(alpha, raw)
      .png({ compressionLevel: 9 });

  await flat(255, 255, 255).toFile(resolve(PUBLIC, 'logo-panther-fit.png'));
  await flat(11, 15, 23).toFile(resolve(PUBLIC, 'logo-panther-fit-dark.png'));

  // Rieng phan dau bao den, dung cho favicon va icon mang xa hoi.
  const head = await sharp(trimmed)
    .extract({
      left: Math.round(width * 0.26),
      top: 0,
      width: Math.round(width * 0.48),
      height: Math.round(height * 0.45),
    })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const headMark = sharp({
    create: {
      width: head.info.width,
      height: head.info.height,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .joinChannel(head.data, {
      raw: { width: head.info.width, height: head.info.height, channels: 1 },
    })
    .png();

  const headBuffer = await headMark.toBuffer();

  for (const size of [180, 512]) {
    const inner = await sharp(headBuffer)
      .resize({ width: Math.round(size * 0.72), fit: 'inside' })
      .toBuffer();
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 11, g: 15, b: 23, alpha: 1 },
      },
    })
      .composite([{ input: inner, gravity: 'center' }])
      .png()
      .toFile(resolve(PUBLIC, size === 180 ? 'apple-touch-icon.png' : 'icon-512.png'));
  }

  const favicon = await sharp(headBuffer).resize({ width: 26, fit: 'inside' }).toBuffer();
  await sharp({
    create: { width: 32, height: 32, channels: 4, background: { r: 11, g: 15, b: 23, alpha: 1 } },
  })
    .composite([{ input: favicon, gravity: 'center' }])
    .png()
    .toFile(resolve(PUBLIC, 'favicon.png'));

  console.log('  logo, favicon, app icon');
  return headBuffer;
}

/** Anh xem truoc khi chia se link (Facebook, Zalo, Google). */
async function buildOgImage() {
  const room = resolve(SOURCE, 'Photos/Phòng/Phòng đông người/DSC09607.jpg');
  const logo = resolve(PUBLIC, 'logo-panther-fit.png');
  if (!(await exists(room)) || !(await exists(logo))) return;

  const base = await sharp(room)
    .resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' })
    .modulate({ brightness: 0.55, saturation: 0.85 })
    .toBuffer();

  const mark = await sharp(logo).resize({ width: 520, fit: 'inside' }).toBuffer();

  await sharp(base)
    .composite([
      {
        input: Buffer.from(
          `<svg width="1200" height="630"><rect width="1200" height="630" fill="rgba(8,10,15,0.42)"/></svg>`
        ),
        top: 0,
        left: 0,
      },
      { input: mark, gravity: 'center' },
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(resolve(PUBLIC, 'og-image.jpg'));

  console.log('  og-image');
}

async function main() {
  await mkdir(ASSETS, { recursive: true });
  await mkdir(PUBLIC, { recursive: true });

  console.log('Chuan bi anh cho Panther Fit');
  await buildPhotos();
  await buildLogo();
  await buildOgImage();
  console.log('Xong.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
