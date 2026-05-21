import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://upwise.co.kr',
  integrations: [
    mdx(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/go'),
    }),
  ],
});
