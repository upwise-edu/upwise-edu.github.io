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

## 2026-05-20

- site.json 파일에서 사이트 제목 및 설명 관련 텍스트 업데이트
- src/data/site.json 파일에 Course 타입을 export 하는 index.ts 파일의 구조 확인
- astro.config.mjs 파일에서 사이트 URL 설정 확인
- tailwind.config.cjs 파일에서 Tailwind CSS 설정 및 폰트 패밀리 확인
- .gitignore 파일에 빌드 관련 파일 및 폴더 제외 설정 확인
- .github/workflows/deploy.yml 파일의 배포 워크플로우 설정 확인
- CourseCard.astro 컴포넌트에서 Course 타입 및 카테고리별 그라디언트 설정 확인
- cv/TimeLine.astro 컴포넌트의 타임라인 요소 렌더링 로직 확인

## 2026-05-22

- `ratingCount` 속성의 유효하지 않은 정수 경고를 해결하고 Search Console에 수정 확인 요청
- Sitemap 및 robots.txt 생성
- JSON-LD 구조화 데이터(Person, Organization, WebSite, 4 Courses) 설정
- 메타 태그(title, description, keywords, canonical) 최적화
- Google Search Console 등록, sitemap 처리 및 색인 완료
- 네이버 서치 어드바이저 인증 및 sitemap 제출
- Google Analytics 4 통합 (`G-3CZL8L8B82`)
- 인프런 및 SNS에 도메인 백링크 추가

## 2026-05-29

* `global.css` 수정으로 접힘 섹션 하단 여백 축소 및 chevron 크기 확대
* `upwise-edu.github.io` 저장소의 `public/qr` 폴더와 `src/pages/go.astro` 파일 존재 여부 확인

## 2026-06-03

- `BaseHead.astro` 수정하여 URL 파라미터를 통해 외부 진입 시 테마 적용 기능 구현
- `LangToggle.astro` 및 `Header.astro` 파일 수정하여 언어 전환 버튼 기능 확인 및 개선
- 다크모드에서 Upwise 버튼의 밝은 하이라이트 컬러 조절 및 로고 스타일 통일 작업
- `dr` 페이지에 Upwise와 동일한 `ko/en` 버튼을 화면 우상단에 배치
- 메뉴 하단 버튼이 두 줄로 표시되는 문제 해결 (ko/en 버튼 배치 후)
- LinkedIn, Google Scholar, ORCID SVG 아이콘을 변경하기 위한 파일 위치 확인

## 2026-06-05

* drseunghyeonlee.com과 동일하게 모바일 헤더에 다크/라이트 모드 버튼 추가
* 영어 이름의 오타 'Seunghyun'을 'Seunghyeon'으로 수정
* `ThemeToggle.astro` 컴포넌트 생성 및 헤더, 사이드바 푸터 테마 토글 동기화
* 강의 이미지 4개를 WebP 포맷으로 변환하고 원본 JPG 파일 백업
* 사이트의 파비콘과 apple-touch-icon을 32x32 크기로 최적화
* BaseHead에서 Inter 외부 폰트 링크 제거
* 토포그래픽 배경 애니메이션을 탭 가려짐 시 일시정지 및 prefers-reduced-motion 존중하도록 최적화
* 사용되지 않는 `upwise_logo_solid.png` 파일 삭제
* Pretendard 폰트를 동적 서브셋으로 전환하여 로딩 용량 대폭 축소

## 2026-06-02

- `site.json`에 영어 페이지용 필드 추가 및 영어 전문 번역본 `site.en.json` 신규 작성
- 공유 컴포넌트 `HomePage.astro`로 index 본문을 `data`/`lang` prop 기반으로 추출하고 `index.astro` 슬림화 및 `en/index.astro` 영어 페이지 신규 생성
- `BaseLayout`·`SideBar`·`SideBarMenu`·`Header`·`CourseCard`를 `lang` 대응으로 수정하고 `LangToggle.astro` 언어 토글 컴포넌트 추가
- `BaseHead`에 `lang` prop, hreflang 대체 링크, 언어별 keywords/메타 추가
- 영어 QR 리다이렉트 페이지 `go-en.astro` 생성 및 KR/EN QR 코드 2종을 Python으로 검정색 통일 재생성(디코딩 검증 포함)
- `BaseHead`에 ViewTransitions 전환 시 다크/라이트 테마 유지 로직(before/after-swap 재적용) 추가
- `SideBarFooter`의 테마 토글을 `astro:page-load`에서 재바인딩하도록 수정하여 전환 후 토글 버튼 사라짐 문제 해결

## 2026-06-06

- 폰트 CSS를 비차단(async preload) 방식으로 전환하고 강의 이미지에 width/height를 명시 (`BaseHead.astro`, `CourseCard.astro`) — FCP/LCP 개선
- 토포 캔버스 애니메이션을 load+idle 이후 시작하도록 변경 (`BaseLayout.astro`) — 저속 기기 LCP/TBT 개선
- 제목 계층을 h1→h2→h3 구조로 정리하고 드로어/햄버거에 aria-label 추가 (`HomePage.astro`, `Header.astro`, `BaseLayout.astro`) — 접근성 개선
- 각 변경마다 빌드로 검증(폰트 로딩 방식·이미지 치수·제목 계층 카운트 확인) 후 커밋·푸시하고 GitHub Pages 배포 결과 확인

## 2026-06-09

- 명함 디자인 베스트 프랙티스/QR 활용 레퍼런스를 웹 조사하고 UPWISE 브랜드 기준 추천안(3방향 및 C안) 정리
- 실제 로고·QR 자산과 한글 폰트를 확인해 추천안 C 기반 양면 명함 시안을 300dpi 인쇄 규격으로 생성
- 앞면 이름과 하단 문구가 겹치는 레이아웃 버그를 수정해 명함 시안 재생성 후 미리보기·앞/뒷면 3장 전달
- 한국상하수도협회(KWWA)를 `site.json` / `site.en.json` partners의 public 그룹에 추가하고 빌드·커밋·푸시
- PC에서 배경 등고선이 안 움직이는 원인을 `BaseLayout.astro` 코드에서 점검하여 OS "동작 줄이기(reduce motion)" 설정 때문임을 진단하고 현 동작 유지로 결정

## 2026-06-14

*   `CourseCard.astro`에서 마우스 호버 시 전화번호가 보이도록 구현
*   `HomePage.astro` 파일 조회

## 2026-06-23

*   한양사이버대학교 QGIS 초중고급 분석 실습 및 시각화 강의 경력을 국문 및 영문 JSON에 추가
*   QGIS 특강 준비를 위한 setup 가이드, 테스트 계획, 샘플 데이터 관련 파일들을 Git에 추가하고 푸시

## 2026-07-11

- `src/content/config.ts`에 블로그 글의 카테고리 필드를 추가했습니다.
- `src/lib/blog.ts`에 카테고리별 글 개수를 계산하는 함수를 추가했습니다.
- `src/components/BlogList.astro`를 수정하여 블로그 글 목록과 우측 게시판 패널을 함께 표시하도록 변경했습니다.
- `src/pages/blog/category/[category].astro`와 `src/pages/en/blog/category/[category].astro`를 생성하여 카테고리별 블로그 글 목록 페이지를 구현했습니다.
- `src/pages/blog/tag/[tag].astro`와 `src/pages/en/blog/tag/[tag].astro`를 복구하여 태그별 블로그 글 목록 페이지를 다시 추가했습니다.
- 블로그 글 작성 시 `category`와 `tags` frontmatter를 통해 게시판 및 태그 분류가 가능하도록 기능을 추가했습니다.
- 블로그 게시판 패널의 레이아웃 문제를 해결하여 글 목록과 게시판 패널이 올바르게 배치되도록 수정했습니다.
- 게시판과 태그 기능을 함께 사용할 수 있도록 우측 패널을 구성하고, 태그 클라우드를 추가했습니다.

## 2026-07-13

- `site.json` 파일 업데이트하여 홈페이지 SEO 강화
- `site.en.json` 파일 업데이트하여 영문 홈페이지 SEO 강화
- `1.posting_info.md` 파일 업데이트
- `validate_conversion.py` 추가하여 변환 결과 검증 로직 구현
- QGIS 강의 검색 노출 개선을 위해 웹사이트 SEO 작업 진행
- 인프런 강의별 검색 최적화 개선안 문서 작성 및 아티팩트 발행
- 인프런 강의별 검색 최적화 개선안 .md 파일 저장
- 인프런 강의 및 로드맵 이미지 캡션 가이드라인 문서 업데이트

## 2026-07-21

* 한국종합기술과 인천도시재생센터를 협업 기관으로 추가하고 관련 로고를 `public/partners`에 복사했습니다.
* `site.json` 및 `site.en.json` 파일에 한국종합기술과 인천도시재생센터 정보를 추가했습니다.
* 한양사이버대학교 강의 대상 정보를 '대학원생'으로 수정했습니다.
* 2026년 7월에 예정된 6건의 신규 강의 정보를 `site.json` 및 `site.en.json`에 추가했습니다.
* 인천도시재생센터의 3회차 강의를 개별 항목으로 유지하고, 각 강의명을 분리하여 `site.json` 및 `site.en.json`에 반영했습니다.
* 협업 기관의 인천도시재생센터 명칭을 '인천광역시 도시재생지원센터'로 변경 후, 줄바꿈 방지를 위해 '인천 도시재생지원센터'로 축약했습니다.
* `.gitignore` 파일 변경 사항을 제외하고, 추가된 파트너 로고와 `site.json` 파일들을 커밋 및 푸시했습니다.
* 인천도시재생센터 3회차 강의명 분리 및 협업 기관 추가 작업을 커밋 및 푸시했습니다.

## 2026-08-10

* `ops/1.launch_checklist_v1.md`에 인스타그램 계정 ID, 이름 필드, Bio, 링크 등 프로필 세부 항목 정리
* `@upwise.gis.shlee`를 최종 인스타그램 계정 ID로 결정
* `@upwise.gis.shlee` 계정 ID에 점(`.`) 사용 결정 (언더바보다 나은 이유 설명 포함)
* 인스타그램 계정 ID에 `@` 기호 제외하고 입력하도록 안내
* `1.launch_checklist_v1.md` 및 `2.ops_card_1p_v1.md` 파일에 확정된 인스타그램 계정 ID 반영
* 인스타그램 계정 보안 강화를 위해 2단계 인증(2FA) 및 백업 코드 저장 권장
* 인스타그램 계정 가입 시 브랜드 Gmail 사용 및 복구용 이메일 추가 안내
* 홈페이지 UTM 적용 및 GA4 연동 확인

## 2026-08-12

- 홈페이지 contact 섹션의 전화번호를 인스타그램 계정 정보로 변경했습니다.
- `HomePage.astro` 파일에서 전화번호 관련 상수 제거 및 인스타그램 링크 카드로 교체했습니다.
- `site.json` 및 `site.en.json` 파일의 contact 정보를 인스타그램 계정 정보로 업데이트했습니다.
- `SideBarFooter.astro` 파일의 전화 아이콘을 인스타그램 아이콘으로 변경하고 색상을 통일했습니다.
- 인스타그램 프로필 링크의 UTM 파라미터를 추가하고, 프로필 상단에 표시될 제목을 설정했습니다.
- 인스타그램 게시물 템플릿 2종 (Carousel, Reel)을 제작했습니다.
- Reel 커버 템플릿의 프로필 그리드 크롭선 규격을 3:4로 수정했습니다.
- 인스타그램 Pin 1 카드 8장에 대한 카피 초안을 작성하고, 홈페이지 데이터를 기반으로 숫자를 업데이트했습니다.

