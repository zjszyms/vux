---
title: 开始使用 VUX 之前
---

# 开始使用 VUX 之前

在使用 VUX 之前需要你至少已经会使用 `Vue`，同时需要你大概了解 `Node.js`，`npm`，`cnpm`，`yarn` 这些东西。

::: tip
建议 `Node.js` 版本在 `7.6.0` 以上。
:::

## WeUI

VUX 样式基于 [WeUI](https://github.com/weui/weui)，但是你不必通过使用 VUX 来使用 `WeUI`。简单的页面你可以直接引入 `WeUI` 样式。详细请参考 [WeUI 文档](https://github.com/weui/weui)。

## Vue

VUX 基于 `Vue` 的组件库，意味着你需要有 `Vue` 的基础知识。

如果还没有了解过，建议先看看[Vue 官方文档](https://cn.vuejs.org)。

## Webpack

如果你直接使用 `vux2` 模板，你可以暂时不用了解。当你需要自定义一些配置时自然就能很快了解了。

[Webpack 文档](https://webpack.js.org)

## vue-cli

Vue 官方用于快速创建项目的工具。

``` js bash
npm install vue-cli -g
```

或者使用 yarn

``` bash
yarn global add vue-cli
```

[vue-cli 文档](https://github.com/vuejs/vue-cli)

## vue-loader

webpack loader，用于编译 `.vue` 文件，官方模板已经帮你配置好。

[vue-loader 文档](https://vue-loader.vuejs.org)

## vux-loader
 
VUX 组件库的 webpack loader，实现按需加载等功能。它不是替代 `vue-loader` 而是配合 `vue-loader` 使用。