// 사이트의 모든 데이터는 ./site.json 한 파일에서 관리됩니다.
// 이 파일은 그 데이터를 타입과 함께 export 하고, 보조 계산 함수를 제공합니다.
// 사용자가 일반적으로 편집할 일은 없습니다 — site.json 만 편집하세요.

import siteRaw from './site.json';
import siteEnRaw from './site.en.json';

// ───────── 사이트 공통 값 (여기 한 곳만 고치면 전 페이지 반영) ─────────

/** 누적 온라인 수강생 수(콤마 표기). 인프런 수강생 갱신 시 이 값만 수정하세요. */
export const STUDENTS_TOTAL = '1,100+';

/** 온라인 강의 평균 평점(집계값). 갱신 시 이 값만 수정하세요. 과목별 평점은 courses.items[].rating. */
export const RATING_AVG = '4.9';

/** JSON 데이터의 {{토큰}} 을 공통 상수로 치환 (빌드 시 1회). */
const TOKENS: Record<string, string> = { students: STUDENTS_TOTAL, rating: RATING_AVG };
function hydrate<T>(data: T): T {
  let s = JSON.stringify(data);
  for (const [k, v] of Object.entries(TOKENS)) s = s.split(`{{${k}}}`).join(v);
  return JSON.parse(s);
}

/** hydrate 된 사이트 데이터 — 모든 페이지/컴포넌트는 여기서 import 하세요. */
export const site = hydrate(siteRaw);
export const siteEn = hydrate(siteEnRaw);

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
  students: string;
  durationMinutes: number;
  lectures: number;
  highlights: string[];
  image?: string | null;
};

export type OfflineLecture = {
  date: string;                // YYYY-MM-DD (시작일, 필수)
  dateEnd?: string | null;     // YYYY-MM-DD (종료일, 단일 날짜면 null)
  organization: string;
  title: string;
  audience: string;            // 강의 대상
  attendees: number;           // 수강생 수 (0 = 미입력)
  hours?: number | null;       // 진행 시간 (선택)
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

// ───────── Helpers ─────────

/** 강의 시간 포맷 헬퍼 (분 → "9h 52m" 또는 "10시간 41분") */
export function formatDuration(minutes: number, lang: 'en' | 'ko' = 'ko'): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (lang === 'en') return `${h}h ${m}m`;
  return `${h}시간 ${m}분`;
}

/** date 문자열에서 연도 추출 (예: "2025-03-15" → 2025) */
function yearOf(dateStr: string): number {
  return parseInt(dateStr.slice(0, 4), 10);
}

/** 연도별로 그룹핑 (최신 연도부터, 같은 연도 내에서는 날짜 내림차순) */
export function groupLecturesByYear(lectures: OfflineLecture[]): { year: number; items: OfflineLecture[] }[] {
  const map = new Map<number, OfflineLecture[]>();
  for (const l of lectures) {
    const y = yearOf(l.date);
    if (!map.has(y)) map.set(y, []);
    map.get(y)!.push(l);
  }
  for (const items of map.values()) {
    items.sort((a, b) => b.date.localeCompare(a.date));
  }
  return Array.from(map.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, items]) => ({ year, items }));
}

/** 출강 누적 통계 */
export function lectureStats(lectures: OfflineLecture[]) {
  const totalHours = lectures.reduce((sum, l) => sum + (l.hours ?? 0), 0);
  const totalAttendees = lectures.reduce((sum, l) => sum + (l.attendees ?? 0), 0);
  const orgSet = new Set(lectures.map((l) => l.organization));
  return {
    totalCount: lectures.length,
    totalHours,
    totalAttendees,
    uniqueOrgs: orgSet.size,
  };
}

export default site;
