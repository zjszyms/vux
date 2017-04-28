<template>
  <div id="app" class="app">
    <div class="vux-box"><svg version="1.1" id="图形" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve" style="width: 60px; height: 60px;"><path data-index="path_0" fill="#35495e" d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36" class="svgpath"></path></svg> <br> <span class="vux-version">2.x</span> <h1 class="vux-title">VUX</h1> <div class="vux-center vux-sub-title">Proudly Powered by
      <br>
      WeUI + Vue + Webpack</div> <div><br> <a target="_blank" href="https://github.com/airyland/vux" class="vux-github"><svg id="i-github" viewBox="0 0 64 64" width="32" height="32"><path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"></path></svg></a> <p class="vux-center vux-sub-title vux-time-ago">Since <span>439</span> Days Ago</p> <p><a href="https://wj.qq.com/s/1170299/9518/" target="_blank" class="survey"> VUX 开发者调查 &gt;&gt;</a></p></div>                       
      <div class="livingearth-logo"><p class="product-title">Ad: Our Product</p> <a href="#/zh-CN/livingearth?x-block=sidebar" class=""><img src="https://oixyh3u6e.qnssl.com/livingearth/livingearth.png" width="140px" alt=""></a></div>

      </div>
    <div class="content">
      <div class="markdown-body">

        <router-link :to="route" v-for="route in routes" :key="route">{{route}}</router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
const routes = require('./routes.json')
export default {
  data () {
    return {
      routes
    }
  }
}
</script>

<style>
@import '~highlight.js/styles/atom-one-light.css';

@font-face {
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: 300;
    src: local("Josefin Sans Light"),local("JosefinSans-Light"),url(https://fonts-gstatic.proxy.ustclug.org/s/josefinsans/v9/C6HYlRF50SGJq1XyXj04z7sKtFnhOiVZh9MDlvO1Vys.woff2) format("woff2");
}

@font-face {
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: 300;
    src: local("Josefin Sans Light"),local("JosefinSans-Light"),url(https://fonts-gstatic.proxy.ustclug.org/s/josefinsans/v9/C6HYlRF50SGJq1XyXj04z0ZRWJQ0UjzR2Uv6RollX_g.woff2) format("woff2");
}

.big-title {
    font-size: 3em!important;
    color: #42b983
}

.big-title,.product-title {
    font-family: Josefin Sans,sans-serif
}

.product-title {
    border-top: 1px solid #333;
    padding-top: 15px;
    font-size: 14px;
    color: #666;
    text-align: center
}

.livingearth-logo {
    position: fixed;
    bottom: 15px;
    left: 25px;
    z-index: 999
}

.vux-version {
    text-align: center;
    width: 50px;
    color: #ccc;
    text-shadow: 0 0 6px rgba(0,120,255,.9)
}

.vux-title {
    font-weight: 400;
    font-family: Josefin Sans,sans-serif;
    text-align: center;
    font-size: 40px;
    margin: 20px 0
}

.vux-github {
    color: #fff
}

.vux-sub-title {
    font-size: 14px;
    color: #ececec;
    font-family: Josefin Sans,sans-serif
}

.vux-time-ago {
    color: #666
}

.vux-time-ago>span {
    font-size: 1.5em;
    text-shadow: 0 0 6px rgba(0,120,255,.9)
}

.vux-box,.vux-center {
    text-align: center
}

.vux-box {
    color: #fff;
    padding: 15px;
    width: 160px;
    float: left;
    background-color: #171717;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0
}
.survey {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
}
.content {
  margin-left: 220px;
}
@import '~github-markdown-css/github-markdown.css';


.markdown-body code {
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  margin: 0;
  font-size: 85%;
  color: #687168;
  background-color: #def5df;
  border-radius: 3px;
}
.markdown-body code::before,
.markdown-body code::after {
  letter-spacing: -0.2em;
  content: "\00a0";
}
.markdown-body pre {
  word-wrap: normal;
}
.markdown-body pre > code {
  padding: 0;
  margin: 0;
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}
.markdown-body .highlight pre,
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f8f8f8;
  border-radius: 3px;
}
.markdown-body pre code {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}
.markdown-body pre code::before,
.markdown-body pre code::after {
  content: normal;
}


.markdown-body a {
    color: #22ab28;
    text-decoration: none;
}

body a:hover {
    color: #148a1a;
}

/**docute**/
div.warning, div.tip, div.danger {
  padding: 12px 24px 12px 20px;
  margin: 2em 0;
  border-left: 4px solid;
  position: relative;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  &:before {
    content: "!";
    position: absolute;
    top: 14px;
    left: -12px;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    text-align: center;
    line-height: 20px;
    font-weight: bold;
    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  }
  &.no-bg {
    background-color: #f8f8f8;
  }
}

div.warning {
  border-left-color: #f7d24c;
  background-color: #fefbed;
  &:before {
    background-color: #f7d24c;
  }
}

div.danger {
  border-left-color: #f66;
  background-color: rgba(255, 102, 102, 0.06);
  &:before {
    background-color: #f66;
  }
}

div.tip {
  border-left-color: #3c763d;
  background-color: rgba(241, 249, 241, 0.83);
  &:before {
    background-color: #3c763d;
  }
}
.markdown-body .tip p {
  margin-bottom: 0;
}
.markdown-body .warning p {
  margin-bottom: 0;
}
.markdown-body .danger p {
  margin-bottom: 0;
}
</style>