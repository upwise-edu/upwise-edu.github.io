// upwise. 인프런 운영 강의 데이터 (2026-05-16 기준)
// 평점·수강생 수는 시간 경과에 따라 변동되므로 주기적 업데이트 필요

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
  /** 강의 썸네일 (public/courses/ 하위 경로). 없으면 카테고리별 그라데이션 표시 */
  image?: string | null;
};

export const courses: Course[] = [
  {
    id: 'starter',
    title: 'QGIS 입문자 올인원 스타터팩 (이론/실습형)',
    shortTitle: 'QGIS 올인원 스타터팩',
    category: '입문',
    isFree: false,
    url: 'https://inf.run/tDaJz',
    description:
      'GIS 기본 개념부터 벡터·래스터 분석, 시각화, 실전 분석까지 한 번에 다루는 종합 입문 강의. 설명과 실습 병행으로 입문자도 끝까지 따라올 수 있도록 구성.',
    rating: 4.9,
    students: 176,
    durationMinutes: 641,
    lectures: 62,
    highlights: ['GIS 기초 이론', '벡터/래스터 분석', '실전 예제 4종'],
  },
  {
    id: 'viz',
    title: 'QGIS 지도 시각화 A to Z (벡터/기초편)',
    shortTitle: 'QGIS 지도 시각화 A to Z',
    category: '시각화',
    isFree: false,
    url: 'https://inf.run/ve1Ja',
    description:
      'QGIS의 시각화·레이아웃 기능을 실습하며 7가지 주제도를 직접 만드는 강의. 공공데이터를 활용해 발표·보고서에 그대로 쓸 수 있는 지도 제작 능력을 습득.',
    rating: 4.8,
    students: 206,
    durationMinutes: 402,
    lectures: 40,
    highlights: ['벡터 시각화 심화', '레이아웃 조판', '7가지 주제도 실습'],
  },
  {
    id: 'free-election',
    title: '[무료] QGIS 트렌디 시각화 찍먹하기 (대선개표지도)',
    shortTitle: 'QGIS 트렌디 시각화 (대선개표지도)',
    category: '입문',
    isFree: true,
    url: 'https://inf.run/aoePe',
    description:
      '20대 대통령선거 개표 결과를 시군구별로 시각화하는 1시간 30분짜리 무료 강의. QGIS를 가장 빠르게 체험해보고 싶은 분께 추천.',
    rating: 5.0,
    students: 295,
    durationMinutes: 98,
    lectures: 8,
    highlights: ['무료', '뉴스 같은 시각화', '입문자 친화적'],
  },
  {
    id: 'automation',
    title: 'QGIS 파이썬 자동화 (벡터편) Ver.2',
    shortTitle: 'QGIS 파이썬 자동화 Ver.2',
    category: '자동화',
    isFree: false,
    url: 'https://inf.run/v28dc',
    description:
      'QGIS 내장 파이썬 콘솔로 반복적인 GIS 작업을 자동화하는 실속형 강의. 파이썬 기초부터 자동화 실전까지, 두 마리 토끼를 한 번에 잡습니다.',
    rating: 4.8,
    students: 339,
    durationMinutes: 592,
    lectures: 69,
    highlights: ['Python 기초', 'QGIS 자동화', '실무 적용'],
  },
];

// 강사 전체 통계 (인프런 프로필 기준)
export const instructorStats = {
  totalStudents: 1016,
  averageRating: 4.9,
  totalReviews: 100,
  mentoringSessions: 3,
  mentoringRating: 5.0,
  totalCourses: courses.length,
};

// 강의 시간 포맷 헬퍼 (분 → "9h 52m" 또는 "10시간 41분")
export function formatDuration(minutes: number, lang: 'en' | 'ko' = 'ko'): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (lang === 'en') return `${h}h ${m}m`;
  return `${h}시간 ${m}분`;
}
