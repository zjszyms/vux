---
title: vue-loader autoprefix 推荐配置
---

# autoprefix 推荐配置

`vue`官方模板的设置是`last 2 versions`，相对来说支持的浏览器版本比较少，可能会导致你在某些`Android`机子上出现问题。

如果你使用 `last 7 versions` 会生成不必要的`-ms`前缀代码.

因此建议同`WeUI`一样，使用配置 `['iOS >= 7', 'Android >= 4.1']`