---
title: "Automating Repetitive Tasks with PyQGIS"
date: 2026-06-09
description: "Turn repetitive QGIS work into code to save time."
tags: ["Python", "Automation"]
draft: false
---

If you repeat the same task across layers, a PyQGIS script can do it in one go.

```python
for layer in QgsProject.instance().mapLayers().values():
    print(layer.name())
```
