---
nav: zh-CN
---

<h2 class="big-title">vux!vue</h2>





### 实际使用场景

我们可以使用`vux-loader`做一些很有意思的事。
比如 [#542](https://github.com/vuejs/vue-loader/issues/542) 提到的根据当前feature为判断要输出哪一部分代码，现在已经直接支持，请看 `template-feature-switch`部分。

对于公用组件而言，完全可以实现构建时进行组件瘦身，只保留使用到的代码。

当然如果你愿意，你完全可以自己实现一门语言。







### 使用案例


#### 统一引入less(sass)变量

如果你翻看`vue-loader`的issue, 就会发现不少同学在说，为什么sass, less 变量不能全局使用，需要在每个.vue组件里引入，这个很重复，有没有办法解决。目前除了在webpack里定义路径`alias`外没有其他方法。但是有了`vux-loader`，你可以用`style-parser`在每个`.vue`文件的style前面加上变量的引入了，只要一句代码。

```
{
  name: 'style-parser',
  fn: function (source) {
    return "@import '../styles/variable.less'\n" + source // 你可以根据this.resourcePath 来确定是否要引入以及引入的相对路径
  }
}
```

#### 减少重复代码

`vux`的组件有几十个，同样demo也有几十个，因为webpack并不支持require变量，那么在main里中实现每个组件异步加载都需要这样：

``` js
const routes = [
  {
    path: '/component/actionsheet',
    component: function (resolve) {
      require(['./demos/Actionsheet'], resove)
    }
  }
]
```
作为懒人，写几十次这样的代码是一件比较烦人的事，作为热爱地球的人，这样也很不环保，但是有了`vux-loader`, 我们可以这样：

``` js
const routes = []
```

然后在`js-parser`里获取列表数组直接替换， 并且可以调用webpack的`this.addDependency`添加依赖实现修改列表时自动`reload`。从此添加删除组件只要加上或者删除名字就可以了，真是<del>懒</del>机智。

``` js
 {
  name: 'js-parser',
  test: /main\.js/,
  fn: function (source) {
    this.addDependency(demoPath)
    let list = fs.readFileSync(demoPath, 'utf-8')
    list = JSON.parse(list)
    let str = []
    list.forEach(one => {
      str.push(`{
path: '/component/${toDash(one)}',
component: function (resolve) {
require(['./demos/${one}.vue'], resolve)
}
}`)
    })

    str = `[${str.join(',\n')}]`
    source = source.replace('const routes = []', 'const routes = ' + str)
    return source
  }
}
```

#### 实现import语法转换

vux是没有main入口文件的，因此需要把import语句转换成单个组件引入。但是因为对语法树分析比较烦，能用正则替换的当然就是用正则替换，简单粗暴实用。具体可以看源码。

#### 开源组件多语言支持

如果以js方式分发，一般默认一个语言，用户可以加上另外的语言包，但是代码里必不可少存在相应的转换函数，对于只需要单语言的人来是个浪费和繁琐。要么所有一起打包，这个也极浪费。要么一个一个打包，这样又失去了动态多语言支持。

于是`vux`在`vux-loader`的支持下实现了`使用时构建`，无论是静态输出和动态支持。

### Bug 反馈 && 功能建议

请到[https://github.com/airyland/vux-loader/issues](https://github.com/airyland/vux-loader/issues)

### Todo

- [ ] 支持各个插件的异步返回形式
- [ ] 在插件中提供webpack的 this 参数
