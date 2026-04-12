import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://bend7.com',

  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],

  markdown: {
    shikiConfig: { theme: 'github-dark' }
  },

  adapter: cloudflare()
});