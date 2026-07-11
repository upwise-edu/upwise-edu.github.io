import { defineCollection, z } from 'astro:content';

// 블로그 컬렉션 — 글은 src/content/blog/ko/ 와 src/content/blog/en/ 에 마크다운으로 작성.
// 파일명이 URL slug 가 됩니다 (예: ko/qgis-tips.md → /blog/qgis-tips).
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    cover: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
