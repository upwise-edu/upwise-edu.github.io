// upwise. 오프라인 강의·워크숍·특강 이력
// 신규 강의는 위쪽(최신)에 추가하세요.
// year는 정수, month는 1~12 (없으면 0), hours는 시간 단위 (없으면 null)

export type OfflineLecture = {
  year: number;
  month: number;        // 1~12, 모르면 0
  organization: string; // 주최 기관
  title: string;        // 강의명
  format: '워크숍' | '특강' | '정규 강의' | '세미나' | '컨퍼런스' | '멘토링';
  hours?: number | null;
  topic?: string;       // GIS / Python / 시각화 등
  note?: string;        // 추가 설명 (선택)
};

// ⚠ 아래는 예시 placeholder 입니다. 실제 강의 이력을 사용자님이 채워주세요.
//   협업 기관 12곳 정보를 참고하여 그럴듯한 형태로 임시 작성했습니다.
export const offlineLectures: OfflineLecture[] = [
  { year: 2025, month: 0, organization: '한국환경공단',     title: 'QGIS 실무 교육',                  format: '워크숍', hours: 16, topic: 'QGIS · 공간분석' },
  { year: 2025, month: 0, organization: '현대NGV',          title: '자동차 데이터 공간 시각화',        format: '특강',   hours: 8,  topic: '시각화' },
  { year: 2024, month: 0, organization: '수자원공사',       title: 'QGIS 입문 워크숍',                format: '워크숍', hours: 8,  topic: 'QGIS' },
  { year: 2024, month: 0, organization: '한국생산성본부',   title: 'GIS 데이터 분석',                 format: '정규 강의', hours: 24, topic: 'GIS · Python' },
  { year: 2024, month: 0, organization: '경기도 인재개발원', title: '공공데이터 활용 GIS',             format: '특강',   hours: 4,  topic: 'GIS' },
  { year: 2024, month: 0, organization: '관악구청',         title: '지역 공간정보 활용',              format: '특강',   hours: 4,  topic: 'GIS' },
  { year: 2023, month: 0, organization: '서울대학교 환경대학원', title: 'Python × QGIS 자동화 워크숍', format: '워크숍', hours: 12, topic: 'Python · QGIS' },
  { year: 2023, month: 0, organization: '인천대학교',       title: 'QGIS 입문 특강',                  format: '특강',   hours: 4,  topic: 'QGIS' },
  { year: 2023, month: 0, organization: '현대모비스',       title: 'GIS 데이터 시각화',               format: '특강',   hours: 4,  topic: '시각화' },
  { year: 2023, month: 0, organization: '충남농업기술원',   title: '농업 분야 GIS 활용',              format: '워크숍', hours: 8,  topic: 'GIS' },
  { year: 2022, month: 0, organization: 'SeSAC',            title: 'GIS와 Python 융합',               format: '정규 강의', hours: 16, topic: 'GIS · Python' },
  { year: 2022, month: 0, organization: '서울대학교',       title: 'GIS 입문 세미나',                 format: '세미나', hours: 2,  topic: 'GIS' },
];

// 헬퍼: 연도별로 그룹핑
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

// 통계
export function lectureStats(lectures: OfflineLecture[]) {
  const totalHours = lectures.reduce((sum, l) => sum + (l.hours ?? 0), 0);
  const orgSet = new Set(lectures.map((l) => l.organization));
  return {
    totalCount: lectures.length,
    totalHours,
    uniqueOrgs: orgSet.size,
  };
}
