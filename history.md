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

