// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { SITE } from './src/data/site.js';

export default defineConfig({
  site: SITE.url,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // Hostinger phuc vu file tinh, dat moi trang trong thu muc rieng
    // de duong dan /dich-vu hoat dong khong can cau hinh them.
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    responsiveStyles: true,
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'vi', locales: { vi: 'vi-VN' } },
    }),
  ],
  // Doc cong tu bien moi truong PORT neu co, de cong cu chay thu
  // tu chon duoc cong trong khi cong mac dinh dang ban
  server: {
    port: Number(process.env.PORT) || 4321,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
