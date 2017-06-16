<template>
  <div id="app" class="app">
    <div class="vux-box" :style="{height: height}">

    <div :style="columnStyle" class="sidebar-inner">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve" style="width: 60px; height: 60px;"><path data-index="path_0" fill="#35495e" d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36" class="svgpath"></path></svg>
      <br>
      <span class="vux-version">2.x</span>
      <h1 class="vux-title">VUX</h1>
      <div class="vux-center vux-sub-title">Proudly Powered by
        <br>
        WeUI + Vue + Webpack</div>
        <div>
          <br>
          <a target="_blank" href="https://github.com/airyland/vux" class="vux-github">
            <svg viewBox="0 0 64 64" width="48" height="48"><path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"></path>
            </svg>
            <br>
            <!--<img class="github-star" :src="githubStarBadge" alt="">-->
          </a>

        <p class="vux-center vux-sub-title vux-time-ago">Since <span>{{days}}</span> Days Ago</p>
        <br>
        <p v-if="/zh-CN/i.test($route.path)">
          <a href="https://wj.qq.com/s/1170299/9518/" target="_blank" class="survey"> VUX 开发者调查 &gt;&gt;</a>
        </p>
      </div>                       
      <div class="livingearth-logo"><p class="product-title">Ad: Our Product</p> <a href="#/zh-CN/livingearth?x-block=sidebar" class=""><img src="https://oixyh3u6e.qnssl.com/livingearth/livingearth.png" width="140px" alt=""></a></div>
    </div>
  </div>
    <div class="summary">
      <div class="summary-inner" :style="columnStyle" style="left:190px;">
        <div v-show="!isComponentPage" v-for="chapter in summary" :data-category="currentCategory" class="chapter">
          <p class="chapter-title">{{chapter.title}}</p>
          <ul class="chapter-page">
            <li class="chapter-page-item" v-for="page in chapter.pages">
              <router-link :to="page.path" :data-current-category="currentCategory">{{page.title}}</router-link>
            </li>
          </ul>
        </div>

        <div class="chapter" v-show="isComponentPage">
          <p class="chapter-title">样式 CSS</p>
          <ul class="chapter-page">
            <li class="chapter-page-item">
              <router-link to="/zh-CN/css/1px.html">1px 解决方案</router-link>
            </li>
            <li class="chapter-page-item">
              <router-link to="/zh-CN/css/close.html">css 关闭图标</router-link>
            </li>
          </ul>
        </div>

        <div class="chapter" v-show="isComponentPage">
          <p class="chapter-title">指令 Directives</p>
          <ul class="chapter-page">
            <li class="chapter-page-item">
              <router-link to="/zh-CN/directives/v-transfer-dom.html">v-transfer-dom</router-link>
            </li>
          </ul>
        </div>
        
        <div class="chapter" v-show="isComponentPage">
          <p class="chapter-title">工具函数 Tools</p>
          <ul class="chapter-page">
            <li class="chapter-page-item">
              <router-link to="/zh-CN/tools/date.html">date-format 日期格式化</router-link>
            </li>
          </ul>
        </div>
        
        <div class="chapter" v-show="isComponentPage">
          <p class="chapter-title">组件({{components.length}} 个)</p>
          <ul class="chapter-page">
            <li class="chapter-page-item" v-for="component in components">
              <router-link :to="`/zh-CN/components/${component.name}.html`">{{ component.name }}</router-link>
            </li>
          </ul>
        </div>

      </div>

    </div>
    <div class="content">
      <div class="header-nav">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/zh-CN/" :class="!isComponentPage && !/donate/.test($route.path) ? 'link-active' : ''">教程</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/zh-CN/components/actionsheet.html" :class="isComponentPage ? 'link-active' : ''">组件</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/zh-CN/contribution/donate.html" :class="/donate/.test($route.path) ? 'link-active' : ''">捐赠</router-link>
          </li>
        </ul>
      </div>
      <div class="markdown-body">
        <router-view></router-view>
        <div>
          <router-link to="/zh-CN/faq/" v-if="/faq\//.test($route.path) && /\.html/.test($route.path)"> << 返回 【常见问题】</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const routes = require('./routes')
const faqRoutes = require('./faq-routes')
const summary = require('./summary')
// 组件列表
const components = require('../../src/datas/vux_component_list')

export default {
  mounted () {
    this.height = window.screen.availHeight + 'px'
    this.columnStyle = {
      height: this.height,
      overflow: 'scroll',
      position: 'fixed',
      top: 0
    }
    this.githubStarBadge = 'https://img.shields.io/github/stars/airyland/vux.svg?style=social&amp;label=Star'
  },
  computed: {
    isComponentPage () {
      return ['components', 'directives', 'tools', 'css'].indexOf(this.currentCategory) !== -1
    },
    currentCategory () {
      return this.$route.path.split('/')[2]
    }
  },
  data () {
    return {
      components,
      githubStarBadge: null,
      summary,
      days: Math.ceil((new Date().getTime() - new Date('2016/02/14').getTime()) / (24 * 3600 * 1000)),
      height: '1000px',
      columnStyle: {
        height: '1000px'
      },
      routes
    }
  },
  head: {
    title: 'VUX'
  }
}
</script>