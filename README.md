# upwise.

> 현장과 강의실을 잇는 GIS 전문 강사 — 개인 웹사이트

**Live:** https://upwise-edu.github.io

## Stack

- [Astro](https://astro.build/) v4 — 정적 사이트 생성기
- [TailwindCSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) — 스타일링
- Inter · Playfair Display · JetBrains Mono — 타이포그래피
- GitHub Pages + GitHub Actions — 호스팅 및 자동 배포

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 빌드 결과: dist/
```

## Deployment

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드 및 배포합니다.

## Credit

기반 템플릿: [Astrofy](https://github.com/manuelernestog/astrofy) (MIT)
