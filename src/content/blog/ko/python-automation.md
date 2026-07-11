---
title: "PyQGIS로 반복 작업 자동화하기"
date: 2026-06-09
description: "파이썬으로 QGIS 작업을 코드화해 반복을 줄이는 방법."
category: "Python"
tags: ["Python", "자동화"]
draft: false
---

같은 작업을 여러 레이어에 반복한다면 PyQGIS 스크립트로 한 번에 처리할 수 있습니다.

```python
for layer in QgsProject.instance().mapLayers().values():
    print(layer.name())
```
