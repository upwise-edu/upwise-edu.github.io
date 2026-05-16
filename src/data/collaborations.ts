// upwise. 가 함께 일한 기관/기업 (강의, 워크숍, 컨설팅 등)
// 순서는 그리드 표시 순서. 신규 협업 추가 시 알맞은 위치에 삽입.

export type Collaboration = {
  name: string;        // 한글 표기 (메인)
  nameEn?: string;     // 영문/약칭 (서브, 표시 안 할 수도 있음)
  category: 'academic' | 'public' | 'corporate' | 'training';
};

export const collaborations: Collaboration[] = [
  // Academic
  { name: '서울대학교',            nameEn: 'SNU',           category: 'academic' },
  { name: '서울대학교 환경대학원', nameEn: 'GSES, SNU',     category: 'academic' },
  { name: '인천대학교',            nameEn: 'INU',           category: 'academic' },

  // Public sector
  { name: '한국수자원공사',        nameEn: 'K-water',       category: 'public' },
  { name: '한국환경공단',          nameEn: 'KECO',          category: 'public' },
  { name: '한국생산성본부',        nameEn: 'KPC',           category: 'public' },
  { name: '경기도 인재개발원',     nameEn: 'GHRD',          category: 'public' },
  { name: '관악구청',              nameEn: 'Gwanak-gu',     category: 'public' },
  { name: '충남농업기술원',        nameEn: 'CNARES',        category: 'public' },

  // Corporate
  { name: '현대모비스',            nameEn: 'Hyundai Mobis', category: 'corporate' },
  { name: '현대NGV',               nameEn: 'Hyundai NGV',   category: 'corporate' },

  // Training
  { name: 'SeSAC',                 nameEn: '서울 SW아카데미', category: 'training' },
];
