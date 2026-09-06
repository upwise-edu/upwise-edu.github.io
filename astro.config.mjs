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
      // /go 리다이렉트 + /blog 비공개 프리뷰 + /preview 비밀 토큰 URL 은 sitemap 제외
      filter: (page) =>
        !page.includes('/go') && !page.includes('/blog') && !page.includes('/preview'),
    }),
  ],
});
