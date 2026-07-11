import { getCollection, type CollectionEntry } from "astro:content";

export type Lang = "ko" | "en";
export type Post = CollectionEntry<"blog">;

// 페이지당 글 수 (프리뷰 데모용 4 — 정식 운영 시 10 정도로 올리세요)
export const PAGE_SIZE = 4;

/** 언어별 발행 글(초안 제외), 최신순 */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection(
    "blog",
    ({ id, data }) => id.startsWith(lang + "/") && !data.draft
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** ko/welcome → welcome */
export function postSlug(entry: Post): string {
  return entry.slug.replace(/^(ko|en)\//, "");
}

/** 게시판(카테고리)별 글 개수 (많은 순) */
export function categoryCounts(posts: Post[]): { category: string; count: number }[] {
  const m = new Map<string, number>();
  for (const p of posts) {
    const c = p.data.category || "일반";
    m.set(c, (m.get(c) || 0) + 1);
  }
  return [...m.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}

/** 태그별 글 개수 (많은 순) */
export function tagCounts(posts: Post[]): { tag: string; count: number }[] {
  const m = new Map<string, number>();
  for (const p of posts) for (const t of p.data.tags) m.set(t, (m.get(t) || 0) + 1);
  return [...m.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function fmtDate(d: Date): string {
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

export function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out.length ? out : [[]];
}
