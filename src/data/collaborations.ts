// upwise. 가 함께 일한 기관/기업 (강의, 워크숍, 컨설팅 등)
// 순서는 그리드 표시 순서. 신규 협업 추가 시 알맞은 위치에 삽입.
// logo: 있으면 SVG/PNG 표시, 없으면 텍스트로 폴백.

export type Collaboration = {
  name: string;        // 한글 표기 (메인)
  nameEn?: string;     // 영문/약칭 (서브)
  category: 'academic' | 'public' | 'corporate' | 'training';
  logo?: string;       // public/ 기준 경로 (예: '/partners/snu.svg')
};

export const collaborations: Collaboration[] = [
  // Academic
  { name: '서울대학교',            nameEn: 'SNU',           category: 'academic',  logo: '/partners/snu.svg' },
  { name: '서울대학교 환경대학원', nameEn: 'GSES, SNU',     category: 'academic',  logo: '/partners/gses.svg' },
  { name: '인천대학교',            nameEn: 'INU',           category: 'academic',  logo: '/partners/inu.svg' },
  { name: '한양사이버대학교',      nameEn: 'HYCU',          category: 'academic',  logo: '/partners/hanyang_cyber.svg' },

  // Public sector
  { name: '한국수자원공사',        nameEn: 'K-water',       category: 'public',    logo: '/partners/k-water.svg' },
  { name: '한국환경공단',          nameEn: 'KECO',          category: 'public',    logo: '/partners/k-eco.svg' },
  { name: '한국생산성본부',        nameEn: 'KPC',           category: 'public',    logo: '/partners/kpc.svg' },
  { name: '경기도 인재개발원',     nameEn: 'GHRD',          category: 'public',    logo: '/partners/gyeongg.svg' },
  { name: '관악구청',              nameEn: 'Gwanak-gu',     category: 'public',    logo: '/partners/gwanak.svg' },
  { name: '충남농업기술원',        nameEn: 'CNARES',        category: 'public',    logo: '/partners/cnares.svg' },

  // Corporate
  { name: '현대모비스',            nameEn: 'Hyundai Mobis', category: 'corporate', logo: '/partners/hyundai_mobis.svg' },
  { name: '현대NGV',               nameEn: 'Hyundai NGV',   category: 'corporate', logo: '/partners/hyundai_ngv.svg' },

  // Training
  { name: 'SeSAC',                 nameEn: '서울 SW아카데미', category: 'training',  logo: '/partners/sesac.png' },
];
