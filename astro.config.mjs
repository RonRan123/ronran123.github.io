// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` must match public/CNAME exactly (www subdomain included).
// RSS, sitemap.xml and Open Graph tags all build absolute URLs from it.
export default defineConfig({
  site: 'https://www.ronithranjan.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
