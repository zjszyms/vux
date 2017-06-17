---
title: Vue 异步加载组件
---

# 异步加载组件

将所有页面组件一次性加载是一个很浪费资源和考验用户耐心的做法，尤其在移动端。

## 使用

`webpack` 提供了[code splitting](https://webpack.js.org/guides/code-splitting-require/)，你可以按照下面写法实现当切换到特定路由时才加载代码。

``` js
{
  path: '/somepath',
  component: function (resolve) {
    require(['./demos/somepath.vue'], resolve)
  }
}
```

## 组件打包问题

如果你在不同的进行了代码分割的 .vue 文件引入了相同的组件，在打包时两个路由的代码都会重复打包该组件。

你可以对重复使用的组件在 `main.js` 进行全局注册，以减少相应 chunk file 的大小并提高下载速度。

## 错误处理

在一些情况下可能会加载失败，需要提示用户。

- [ ] todo