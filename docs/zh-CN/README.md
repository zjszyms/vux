---
title: 关于 VUX
---

<p align="center">
  <br>
   <a href="https://vux.li/demos/v2?x-page=v2-doc-home">
    <img src="https://static.vux.li/demo_v2_doc_home.png" width="100" alt="">
  </a>
  <br>
  <a href="https://vux.li/demos/v2?x-page=v2-doc-home">
    预览地址>>
  </a>
  <br>
  <br>
  <a href="https://github.com/airyland/vux">
    <img src="https://img.shields.io/github/stars/airyland/vux.svg?style=social&label=Star" alt="">
  </a>
  <a href="https://github.com/airyland/vux">
    <img src="https://img.shields.io/github/forks/airyland/vux.svg?style=social&label=Fork" alt="">
  </a>
  <a href="https://github.com/airyland/vux">
    <img src="https://img.shields.io/github/watchers/airyland/vux.svg?style=social&label=Watch" alt="">
  </a>
  <br>
  <br>
  <a href="https://github.com/airyland/vux/issues">
    <img src="https://img.shields.io/github/issues/airyland/vux.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/airyland/vux/issues">
    <img src="https://isitmaintained.com/badge/resolution/airyland/vux.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/airyland/vux/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/airyland/vux.svg?style=flat-square" alt="">
  </a>
  <br>
  <a href="https://www.npmjs.com/package/vux">
    <img src="https://img.shields.io/npm/l/vux.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vux">
    <img src="https://img.shields.io/npm/v/vux.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vux">
    <img src="https://img.shields.io/npm/dm/vux.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vux">
    <img src="https://img.shields.io/npm/dt/vux.svg?style=flat-square" alt="">
  </a>
  <br>
  <br>
</p>

::: warning
  如果你遇到 <code>$t</code> 报错问题，请升级 `vux-loader >= 1.0.58`。<br>
  VUX 必须配合 `vux-loader` 使用，如果不使用 vux2 模板请按照下面文档正确配置。
:::

## 简介

`VUX`（读音 [v'ju:z]，同 `views`）是基于`WeUI`和`Vue`(2.x)开发的移动端UI组件库，主要服务于微信页面。

基于`webpack + vue-loader + vux`可以快速开发移动端页面，配合`vux-loader`方便你在`WeUI`的基础上定制需要的样式。

`vux-loader`保证了组件按需使用，因此不用担心最终打包了整个vux的组件库代码。

`vux`并不完全依赖于`WeUI`，但是尽量保持整体UI样式接近`WeUI`的设计规范。

即使你不直接使用 VUX 组件代码, 你依然可以参考 VUX 代码来实现自己的组件。

::: tip
`VUX` 是`库`而非`框架`，虽然有专用的 `vux-loader`，但并不影响你自由地使用其他组件库或者工具库。<br>
用以表示该组件库时请使用大写名字 `VUX`，用在说明版本号时使用小写 `vux@2.x`。
:::
