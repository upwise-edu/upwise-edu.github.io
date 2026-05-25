<!-- AUTO-GENERATED-HISTORY: D:\20.git_research\scripts\daily_history\update_history.py
     매일 00:05 Windows 작업 스케줄러가 실행하여 전날 작업 요약을 ## YYYY-MM-DD 섹션으로 append.
     수동 편집 가능하지만 날짜 헤더 형식과 이 주석 블록은 유지할 것. -->

## 2026-05-21

*   `@astrojs/sitemap` 패키지를 설치하고 `astro.config.mjs`에 통합하여 sitemap 자동 생성을 설정했습니다.
*   `public/robots.txt` 파일을 생성하여 검색 엔진 크롤러에게 사이트맵 위치를 안내하고 `/go` 경로의 색인을 제외하도록 설정했습니다.
*   `site.json` 파일에 `siteTitle`, `siteDescription`, `siteKeywords`를 추가하여 사이트 전반의 메타데이터를 관리하도록 했습니다.
*   `BaseHead.astro` 파일을 수정하여 `site.json`에서 가져온 `siteTitle`, `siteDescription`, `siteKeywords`를 `<title>` 및 `<meta name="keywords">` 태그로 동적으로 설정했습니다.
*   `BaseHead.astro`에 `canonical URL`, `author`, `lang`, `robots` 메타 태그를 추가하여 검색 엔진 최적화를 강화했습니다.
*   `BaseHead.astro`에 Person, Organization, WebSite, Course 구조화 데이터(JSON-LD)를 추가하여 구글 검색 결과에 풍부한 정보를 노출하도록 했습니다.
*   `BaseLayout.astro`에서 메인 페이지(`index.astro`)일 때 구조화 데이터가 포함되도록 로직을 수정했습니다.
*   `astro.config.mjs`에서 sitemap 생성을 위한 `exclude` 설정을 추가하여 `/go` 경로가 sitemap에 포함되지 않도록 수정했습니다.
*   `site.json`의 `analytics.gtagId`에 Google Analytics 4 측정 ID를 추가하고 `BaseHead.astro`에 추적 스크립트를 삽입하여 GA4 통합을 완료했습니다.
*   SEO 개선 사항 적용 후 로컬 빌드 테스트(`npm run build`)를 수행하고 오류 없이 완료하여 푸시했습니다.

## 2026-05-16

- upwise-edu GitHub Organization 생성 및 `upwise-edu.github.io` 저장소 생성
- Node.js 설치 확인 및 Astrofy 템플릿 설치
- 로컬 개발 서버 구동 및 Astrofy 템플릿 정상 작동 확인
- `upwise` 브랜드 컬러(남색/오렌지) 및 로고 적용
- Brittany Chiang 스타일의 깔끔한 디자인 레퍼런스 적용
- 사이드바, 헤더, 푸터 등 기본 레이아웃 구성 요소 브랜드 맞춤 수정
- 홈페이지 콘텐츠(소개, 경력, 프로젝트 등) 초기 내용 채우기
- 커서 스포트라이트 효과 및 섹션 전환 애니메이션 추가

## 2026-05-18

* `history_260518.md` 파일 생성 및 GitHub에 푸시
* UPWISE 로고 색상(UP 주황, WISE 남색)을 웹페이지에 적용
* 전화번호를 hover/tap 시에만 보이도록 JavaScript 로직 구현 및 적용
* 모바일 등고선 시각화의 과도한 선명도 문제 해결 (기존 opacity 0.05 -> 0.15, 선 두께 0.15 -> 0.3, 액센트 라인 1.5배 복원)
* 모바일 등고선 시각화의 `isTouch` 감지 로직 강화 및 디버그 뱃지 추가
* 모바일 등고선 시각화의 `opacityMult` 0.15, `lineWidthMult` 0.3, 액센트 라인 1.5배 비율로 조정
* 모바일 등고선 시각화의 CSS mask 문제 해결 및 `opacityMult` 0.4, 마스크 중앙 0.35, 가장자리 1.0으로 조정
* 모바일 등고선 시각화의 선 두께 0.8, 그리드 55x38, blur 0.9px로 조정
* 모바일 등고선 시각화의 선 두께 0.4, 그리드 65x45로 최종 조정

## 2026-05-17

* `CourseCard.astro` 파일 수정하여 강의 카드 표지 비율을 1200x781로 적용하고, 카테고리 칩을 콘텐츠 영역으로 이동
* "자동화" 카테고리 칩의 색상을 짙은 네이비에서 인디고로 변경
* 협업 기관 로고 12개를 `public/partners/` 폴더에 추가하고, `collaborations.ts` 데이터에 연결하여 표시되도록 작업
* 메뉴를 "온라인 강의"와 "강의 경력"으로 분리하고, 협업 기관 카드 디자인을 다크 톤으로 변경 및 한양사이버대학교 추가, SeSAC 로고를 PNG로 변경
* 협업 기관 카드 배경을 이전 스타일(옅은 배경)로 복원
* 협업 기관 카드 텍스트 크기 및 굵기를 키우고, 다크 모드에서 로고 가시성을 개선하기 위해 옅은 흰 배경 추가
* 페이지 텍스트 내용을 `site.json` 파일로 분리하고, 폰트 사이즈 조정을 위한 CSS 변수를 `global.css` 상단에 추가
* `site.json` 파일에 모든 데이터(강의, 출강, 협업 기관 등)를 통합
* `categoryMeta` 경로 참조 오류 수정

## 2026-05-19

* `site.json`의 `courses` 섹션에서 숫자 뒤에 `+` 기호가 붙어 JSON 파싱 오류가 발생하여 빌드가 실패한 문제 해결
* `site.json`의 `hero` 섹션을 업데이트하여 `taglineLead` 필드를 자유롭게 입력 가능하게 변경
* `site.json`의 `hero` 섹션에 `stats` 배열 추가하여 수강생 수, 강의 평점, 온라인/오프라인 출강 관련 정보를 2행 3열 그리드로 표시하고 자유 편집 가능하게 함
* `site.json`의 `about.stats` 섹션을 2행 3열 형식으로 재구성하여 온라인/오프라인 통계 분리 및 자유 편집 가능하게 변경
* `instructorStats` 키를 `site.json` 및 `data/index.ts`에서 제거하여 코드 정리
* `README.md` 및 `package.json` 파일에서 GitHub 관련 흔적 및 이전 도메인 정보 제거하고 간소화
* GitHub repo의 About 섹션 웹사이트 주소를 새 도메인(`upwise.co.kr`)으로 업데이트하고, 관련 토픽 제거
* GitHub Pages를 위한 `CNAME` 파일 생성 및 `astro.config.mjs` 파일의 `site` URL 업데이트
* `upwise.co.kr` 도메인에 대한 A 레코드 4개 및 CNAME 레코드 1개 설정

