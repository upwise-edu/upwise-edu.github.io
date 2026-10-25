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

## 2026-08-13

- `site.json` 및 `site.en.json` 파일 수정하여 홈페이지의 출강 및 협업 기관 통계 수치 갱신
- `dist/index.html`의 이전 통계 수치를 GitHub Actions를 통해 자동으로 빌드 및 배포하여 최신화
- `7.pin1_copy_v1.md` 파일에서 카드 5의 기관 명단 오류 수정 및 최종 텍스트 내용 확정
- `build_pin1.py` 스크립트 수정하여 Pin 1 카드 5의 공공기관 줄바꿈 문제 해결 및 PPT 및 PNG 파일 생성
- `site.json`의 강의 데이터를 기반으로 `build_pin2.py` 스크립트를 사용하여 Pin 2 콘텐츠 생성 및 검증
- Pin 2 카드에 강의 썸네일을 적용하고, 설명 대신 핵심 내용을 담은 하이라이트 추가
- Pin 2 카드에서 무료 강의에 '무료' 배지를 썸네일 우상단으로 이동시켜 가시성 강화
- `build_pin2.py` 스크립트를 업데이트하여 썸네일 이미지 포맷 변환 및 카드 구조 변경 반영

## 2026-08-14

- site.json 파일에 2026-07-30, 2026-07-31 일정 관련 데이터 추가
- inflearn_search_optimization.md 파일 내용 업데이트

## 2026-08-20

- `site.json`에서 온라인 강의 수강생 수를 `1,100+`로 수정
- `build_cv.py`에서 온라인 강의 수강생 수를 `1,000+`에서 `1,100+`로 수정
- `site.json`의 `about.stats` 항목의 온라인 강의 총 시간 및 강수를 데이터에서 자동 계산되도록 수정
- `site.json`의 `hero.stats` 항목의 기관 출강 수를 데이터에서 자동 계산되도록 수정
- `site.json`의 `about.stats` 항목의 누적 협업기관 수를 데이터에서 자동 계산되도록 수정
- `site.json`의 `about.stats` 항목의 총 출강 횟수를 데이터에서 자동 계산되도록 수정
- `site.json`의 `about.stats` 항목의 누적 오프라인 수강생 수를 데이터에서 자동 계산되도록 수정
- `site.json`의 각 강의별 수강생 수를 원본 정수로 저장하고, 표시 시 10단위 내림 + '+' 규칙을 적용하도록 수정

## 2026-09-06

* `_analytics` 폴더 생성 및 gitignore 설정
* SEO/분석 태그를 포함한 `BaseHead.astro` 파일 검토
* Google Search Console, GA4 측정 ID, hreflang, sitemap, robots.txt 등 SEO 설정 현황 확인
* Google Cloud 서비스 계정 키 발급 및 GA4, Search Console에 읽기 권한 부여
* GA4 속성 ID와 Search Console 속성 유형을 바탕으로 `config.json` 파일 생성
* GA4 및 Search Console API를 사용하여 최근 28일간의 방문자 및 검색 데이터 수집
* Bing Webmaster Tools API 키 발급 및 설정
* Bing Webmaster Tools API를 사용하여 사이트 인증 및 노출/클릭 데이터 수집
* sitemap 및 주요 URL 색인 상태 점검을 위한 `check_health.py` 스크립트 작성
* Blog 콘텐츠 생성 폼 확정을 위한 `qgis-coordinate-system.md` 골든 샘플 작성
* 초안 글 3개(SHP 파일, V-World 플러그인, 지오메트리 무결성) 작성

## 2026-09-13

- `04.lectures/00.inflearn_published` 폴더에 인프런 공개 강의 4개의 커리큘럼을 정본으로 커밋했습니다.
- `src/content/blog/ko/qgis-vworld-plugin.md` 파일 삭제 및 관련 링크를 재연결했습니다.
- 블로그 로드맵 문서를 `_docs/blog_roadmap.md`에 저장했습니다.
- 구미도시공사 특강 이력과 로고를 `site.json` 및 `site.en.json`에 추가했습니다.
- 강사 학력을 박사(공학박사)/석사(조경학석사)/학사(농학사)로 upwise 사이트에 반영했습니다.
- QGIS 온라인 강의 섹션 카테고리를 '입문/분석/시각화/자동화' 순으로 변경하고, 카테고리 타일 레이아웃을 수정했습니다.

## 2026-09-15

* Google Analytics 4 속성 ID를 `site.json`에 업데이트하고 GA4 태그 배포 완료 확인
* Google Search Console에 대한 서비스 계정 인증 및 조회 시도
* Google Analytics 4에 서비스 계정 사용자 추가 오류 분석 및 해결 시도
* Google Analytics 4에 OAuth 클라이언트를 생성하고 관련 정보를 `ga4_oauth_client.json`에 저장
* Google Analytics 4 데이터 확인 결과, 활성 사용자 0, 세션 0, 페이지뷰 0으로 집계됨
* GitHub 계정 복구 관련 문제 진단 및 정보 수집 (SSH 키, 토큰 인증, 저장된 토큰 확인)
* GitHub 계정 복구 절차 및 정책 확인 (2FA 자격 증명 분실 시 지원 불가 등)
* GitHub 계정 복구와 관련하여 `project_github_account_recovery.md` 파일 생성 및 MEMORY.md 인덱스 업데이트

## 2026-10-16

- CHANGELOG에 0.3.1 항목 작성 — posture W 쓰기 권한 바 문제 등 결함 3건·사용성 1건 수정 내역 기록
- `upwise_chat_for_qgis.0.4.0.zip` 플러그인 패키지 빌드 후 `plugins.xml` 저장소 메타데이터 갱신
- 배포 zip의 해시 산출로 패키지 무결성 확인
- 웹 배포 공지 문구 초안(`msg_web.txt` / `msg_web2.txt`) 작성·수정

## 2026-10-17

- 현대NGV(2026-10-12~14, 15명, 21h)·국립한밭대학교(2026-10-15~16, 30명, 12h) 특강 2건을 upwise `site.json`/`site.en.json` 강의 경력에 추가
- 국립한밭대(HBNU)를 partners academic 항목에 등록하고 `hbnu.svg` 로고를 `public/partners/`에 추가
- upwise 학력 박사 항목에 drseunghyeonlee.com 연결 배지를 신설(`TimeLine.astro` aside 슬롯 · `HomePage.astro` 데이터 구동 · `global.css` 스타일)하고, 상대 사이트의 `?theme=` 수신부를 추가해 테마 전달을 양방향화
- `compare_lectures.py`·`unify_attendees_20261017.py`·`verify_match.py`로 두 사이트 출강 인원을 대조해 불일치 10건을 큰 값으로 통일(upwise 7건·drseunghyeonlee.com 3건), `application_info.xlsx` Teaching 시트도 동반 수정
- drseunghyeonlee.com `site.json` 교육 목록에 특강 3건 추가(29→32건)하고 인프런 온라인 강의 수강생 수 4건 갱신
- 배지 높이를 약 36px→23px로 낮추고 색을 shleeclay 골드·딥그린에서 upwise 네이비·오렌지 팔레트로 교체
- 배지 문구를 국·영문 모두 `drseunghyeonlee.com` 단일 표기로 통일하고 구분선·설명 칸과 관련 CSS(`portfolio-badge-text`·`pw-dot`) 제거
- 배지 색을 따뜻한 오렌지 칩으로 하이라이트한 뒤 채움색만 다시 연하게 조정하고(라이트 `#fffaf2`, 다크 워시 8%), WCAG 대비 실측·`badge_doublecheck.py`로 한/영×라이트/다크 4경우 동일성 검증(영문 미반영은 CDN 10분 캐시가 원인으로 확인)

## 2026-10-18

- 헤드리스 Chrome으로 upwise.co.kr 데스크톱 라이트·다크·모바일 전 구간 스크린샷을 찍어 페이지 색감·강조 진단 (오렌지 과다·위계 부재 원인 규명)
- `TimeLine.astro` 학력·전문분야 스타일 개편 — 제목 네이비(650), 기간 분리, 16px 꽉 찬 점 → 10px 속 빈 링, 세로선 회색화
- `site.json` / `site.en.json`에 EXPERTISE "AI 활용 (QGIS × MCP)" 항목 및 주요 강의 분야 목록 추가 (국·영문)
- `HomePage.astro` 모바일 압축 — 로드맵 4블록 한 줄화(130px→48px), 특강 행 4줄 → 2줄(기관·일자·수강생·시간) 후 대상 복구
- 전문분야 타임라인 링 잘림 수정 — 세로선 `h-full` 넘침을 flex 잔여 높이로 교체하고 링 z축 상향
- 주황 포인트를 제목에서 기간·부제 라벨로 이전하고, 폰에서는 부제를 제목 아래 줄로 분기(md 이상만 인라인)
- `global.css`에 `word-break: keep-all` + `overflow-wrap: anywhere` 적용, 강의 카드 설명 모바일 클램프 해제로 한국어 음절 단절 해소
- CDP 모바일 에뮬레이션 오버플로 프로브(`overflow_probe.mjs`)·전후 캡처 스크립트(`preview_shots.py`) 작성, 360·375·390·412px 검증 후 4개 커밋 푸시 및 메모리 갱신

## 2026-09-27

- 인프런 강의 소개 페이지 에디터 모드(Jodit HTML) 작성 방식 확인 및 사이트 공개 이미지 URL 검증 (`CNAME`·`upwise_logo.png` 로 커스텀 도메인 호스팅 경로 확정)
- 인프런 인기 강의 9개 소개 페이지 PDF 를 good/soso/bad 로 분류해 PyMuPDF 로 폰트 크기·줄간격·여백·칼럼 폭·이미지 비중 측정, `6.design_refs_260927.md` / `6.design_refs_260927.csv` 작성
- 측정 결과로 good 그룹 디자인 기준 도출 (제목1/본문 비율 1.87, 줄간격 1.56, 블록 간 여백 등) 및 그룹별 중앙값 비교표 정리
- 소개 페이지용 PNG 렌더 파이프라인 구축: `render_png.py` 와 `banner.html` · `section_header.html` · `feature_cards.html` 템플릿 신규 추가
- `inflearn-course-page` SKILL.md 에 §6-1 이미지 렌더 절차와 함정 3줄 추가 (168→209행)
- QGIS MCP 강의 소개 페이지 v2 개편: 본문 분량 v1 대비 40.8% 로 축약, 표 4개→1개, 색 11→5개(네이비·오렌지 체계), 이미지 7장 전부 실물 생성
- v2 미리보기 렌더 후 2쪽 캡처로 타이포·색감·이미지 세로 비중(0.326) 육안 검증

## 2026-09-30

- `04.lectures/05.inflearn_qgis_mcp/plugin_repo` 중첩 git 저장소의 원격(`upwise-edu/qgis-mcp-course`)·브랜치 추적 상태 점검 (이외에는 조회 작업만으로 기록할 변경 없음)

## 2026-10-01

- upwise 저장소 git 이력에서 휴대전화 번호 표기 2종(`+82-10-8455-xxxx` 18건·`010-8455-xxxx` 15건)을 전수 탐색하고 커밋 메시지 3건까지 출현 위치 확정
- `purge_upwise_history_261001.sh` / `upwise_phone_expressions.txt` 작성하여 filter-repo 기반 번호 치환 스크립트와 표기 목록 정리
- 임시 클론에서 purge 드라이런 실행 — 잔존 0건·현재 파일 바이트 불변·사이트 빌드 3/3 성공 검증
- shleeclay·upwise 양쪽 저장소 `LICENSE` 를 MIT → All rights reserved 로 교체하고 커밋·푸시(원격 해시 일치 확인)
- `reference_git_filter_repo_pitfalls.md` 메모리 신규 작성 — filter-repo already_ran 중단·PDF 텍스트 치환·origin 재설정 함정 기록
- `update_memory_purge.py` 로 `project_shleeclay.md`·`project_upwise_edu.md` 갱신 및 MEMORY.md 인덱스 추가(한글 인라인 Python 인코딩 오류 우회)
- 양쪽 사이트 배포 상태 확인 — upwise·shleeclay 모두 completed success

## 2026-10-09

- 채팅창에 upwise 로고와 홈페이지 이동 링크를 넣기로 하고, `upwise_logo.png` 등 보유 로고 자산을 확인
- `global.css` 의 브랜드 색상 정의를 조회해 로고 삽입 시 적용할 색 체계(오렌지 `#f7931e` 계열) 파악

## 2026-10-10

- 커스텀 도메인(CNAME) 설정 확인 후 QGIS 플러그인 저장소 `plugins.xml` 을 upwise.co.kr 에서 서빙하는 경로 점검 — 404 원인 추적
- `deploy.yml` 워크플로 점검으로 플러그인 저장소 배포 경로 확인
- 02.projects/28 README·PROGRESS 에 자체 배포 채널(QGIS 사용자 저장소) 검토 결과와 호스팅 위치 결정 대기 항목 기록
- C1 회차 한정 처리 후 17개 하네스 전체 재실행 — V1 버전 일치 PASS, N2 아이콘 경로 WARN, C1 SKIP 확인
- 0.2.0 배포 시점을 S9c 완료 후 릴리스로 결정

## 2026-10-11

- site.json / site.en.json에 2026-07-16 한국종합기술 "QGIS × MCP 환경영향평가 활용 방안 특강"(50명·3시간) 출강 이력 추가
- 온라인 강의 수강생 수 갱신(대선개표지도 340·스타터팩 220·파이썬 자동화 350, 시각화는 표시값 동일로 기존값 유지)
- partners의 "현대모비스" → "현대오토에버" 정정 및 `Hyundai_AutoEver_logo.svg`를 `hyundai_autoever.svg`로 복사·연결(모비스 로고는 삭제 없이 보관)
- CourseCard.astro에 누락된 "분석" 카테고리의 표시명·색(sky)·아이콘(📊)·그라데이션 추가하여 칩 하이라이트 복구, 빌드로 양 언어 확인
- UPWISE Chat for QGIS 0.2.1~0.2.4 배포본(zip)과 `plugins.xml` 버전 갱신분을 웹 리포에 순차 커밋·푸시, 원격 해시 대조로 검증
- 한종 특강 등록에 필요한 입력 항목표(날짜·기관명·제목·대상·인원·시간·로고 국영문) 정리해 안내
- 공공데이터포털·SGIS 등 공공 API 제공자 카탈로그 조사 위임 — 공식 목록 API 부재·API별 활용신청·스키마 비균일·상업적 이용 조건 미확정 확인
- 세션 비용 안내 및 메일 작업·연구 작업용 새 세션 분리 문구 작성

## 2026-10-13

- `plugins.xml` 등 public/plugins 산출물 해시를 대조해 배포본 무결성 확인
- public/plugins 경로만 지정 커밋·푸시하고 원격 해시(f868f18) 대조로 반영 검증
- 다른 세션 작업 파일이 섞이지 않도록 스테이징 초기화 후 경로 한정 커밋 수행
- 연계 작업으로 02.projects/28 UPWISE QGIS 제품군 0.3.1 패치 커밋 반영

## 2026-10-22

* metadata.txt에서 file_name과 download_url 제외한 메타데이터 추출
* QGIS 플러그인 배포 관련 파일 다운로드 URL 및 저장소 크기 확인
* ZIP 파일 첨부 시 장점 탐색

## 2026-10-25

* 105_verify_queue_wiring.py와 106_verify_queue_ui.py에서 큐 연결 관련 로직 검토
* changelog.astro에서 QGIS 플러그인 릴리스 노트 관련 한국어 설명 작성 및 관리
* changelog.astro에서 릴리스 버전 정보 및 변경 사항 데이터 구조 정의
* changelog.astro 파일에 새로운 릴리스 항목 추가 및 관리

