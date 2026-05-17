// 사이트의 모든 데이터는 ./site.json 한 파일에서 관리됩니다.
// 이 파일은 그 데이터를 타입과 함께 export 하고, 보조 계산 함수를 제공합니다.
// 사용자가 일반적으로 편집할 일은 없습니다 — site.json 만 편집하세요.

import site from './site.json';

// ───────── Types ─────────

export type Course = {
  id: string;
  title: string;
  shortTitle: string;
  category: '입문' | '시각화' | '자동화';
  isFree: boolean;
  url: string;
  description: string;
  rating: number;
  students: number;
  durationMinutes: number;
  lectures: number;
  highlights: string[];
  image?: string | null;
};

export type OfflineLecture = {
  year: number;
  month: number;
  organization: string;
  title: string;
  format: '워크숍' | '특강' | '정규 강의' | '세미나' | '컨퍼런스' | '멘토링';
  hours?: number | null;
  topic?: string;
  note?: string;
};

export type Collaboration = {
  name: string;
  nameEn?: string;
  category: 'academic' | 'public' | 'corporate' | 'training';
  logo?: string;
};

// ───────── Typed re-exports from site.json ─────────

export const courses = site.courses.items as Course[];
export const offlineLectures = site.lectures.items as OfflineLecture[];
export const collaborations = site.partners.items as Collaboration[];
export const instructorStats = site.instructorStats;

// ───────── Helpers ─────────

/** 강의 시간 포맷 헬퍼 (분 → "9h 52m" 또는 "10시간 41분") */
export function formatDuration(minutes: number, lang: 'en' | 'ko' = 'ko'): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (lang === 'en') return `${h}h ${m}m`;
  return `${h}시간 ${m}분`;
}

/** 연도별로 그룹핑 (최신 연도부터) */
export function groupLecturesByYear(lectures: OfflineLecture[]): { year: number; items: OfflineLecture[] }[] {
  const map = new Map<number, OfflineLecture[]>();
  for (const l of lectures) {
    if (!map.has(l.year)) map.set(l.year, []);
    map.get(l.year)!.push(l);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, items]) => ({ year, items }));
}

/** 출강 누적 통계 */
export function lectureStats(lectures: OfflineLecture[]) {
  const totalHours = lectures.reduce((sum, l) => sum + (l.hours ?? 0), 0);
  const orgSet = new Set(lectures.map((l) => l.organization));
  return {
    totalCount: lectures.length,
    totalHours,
    uniqueOrgs: orgSet.size,
  };
}

export default site;
