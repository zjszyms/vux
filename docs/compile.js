'use strict'

const glob = require('glob')
const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const hljs = require('highlight.js')

function getComponentName(path) {
  let list = path.split('/')
  if (list[list.length - 1] === 'index.vue' || list[list.length - 1] === 'index.js') {
    return list[list.length - 2]
  } else if (list[list.length - 1] === 'metas.yml') {
    return list[list.length - 2]
  } else if (/\.json/.test(path)) {
    return list[list.length - 1].replace('.json', '')
  } else if (/\.js/.test(path)) {
    return list[list.length - 1].replace('.js', '')
  } else {
    return list[list.length - 1].replace('.vue', '')
  }
}

const faqs = glob.sync('./zh-CN/faq/*.md')
const faqRoutes = []
const commonTitle = `VUX - 基于 WeUI 和 Vue 的移动端组件库`
let faqMd = `
---
title: 常见问题 - ${commonTitle}
---

# 常见问题
`
faqs.forEach(one => {
  const content = fs.readFileSync(one, 'utf-8')
  const titleRs = content.match(/\n#(.*?)\n/)
  if (titleRs && titleRs[1] && one.indexOf('index.md') === -1) {
    faqRoutes.push({
      title: titleRs[1],
      path: one.replace('./', '/').replace('.md', '.html')
    })
  }
})

faqRoutes.forEach(one => {
  faqMd += `
* <router-link to="${one.path}">${one.title}</router-link>
  `
})

let paths = []

fs.writeFileSync('./src/faq-routes.json', JSON.stringify(faqRoutes, null, 2))

fs.writeFileSync('./zh-CN/faq/index.md', faqMd)

const files = glob.sync('./zh-CN/**/*.md')

let str = `
  routes.push({
    path: '/zh-CN/faq',
    component: () => import('../zh-CN/faq/index.md')
  })
  routes.push({
    path: '/zh-CN/',
    component: () => import('../zh-CN/README.md')
  })
  routes.push({
    path: '/zh-CN/about/contributors.html',
    component: () => import('../zh-CN/about/contributors.vue')
  })`
paths.push('/zh-CN/')
paths.push('/zh-CN/faq/')
paths.push('/zh-CN/about/contributors.html')
files.forEach(file => {
  let currentPath = `${file.replace(/^.\//, '/').replace('.md', '.html')}`
  paths.push(currentPath)
  str += `
routes.push({
  path: '${currentPath}',
  component: () => import('.${file}')
})
    `
})

// components
const components = glob.sync('../src/components/**/metas.yml')
console.log(components)


const colorCode = function (lang, code) {
  return '<pre class="hljs"><code>' +
               hljs.highlight(lang, code, true).value +
               '</code></pre>'
}

components.forEach((file) => {
  const rawMetas = fs.readFileSync(file, 'utf-8')
  const metas = yaml.safeLoad(rawMetas)
  const componentName = file.replace('../src/components/', '').replace('/metas.yml', '')
  const importName = _camelCase(componentName)
  let importList = [{
    componentName: componentName,
    importName: importName
  }]
  if (metas.items) {
    importList = []
    metas.items.forEach(one=> {
      importList.push({
        componentName: one,
        importName: _camelCase(one)
      })
    })
  }
  const parseReg = '`(.*?)`'
  const url = `https://vux.li/demos/v2/#/component/${componentName}`
  const localImportCode = colorCode('js', `import { ${importList.map(one => one.importName).join(', ')} } from 'vux'

export default {
  components: {
    ${importList.map(one => one.importName).join(',\n    ')}
  }
}`)


  let _globalImportCode = `import { ${importList.map(one => one.importName).join(', ')} } from 'vux'

`
  importList.forEach(one => {
    _globalImportCode += `Vue.component('${one.componentName}', ${one.importName})\n`
  })

  const globalImportCode = colorCode('js', _globalImportCode)

  let exampleCode = ''
  if (metas.example) {
    exampleCode = colorCode('html', metas.example)
  }

  // git logs
  console.log(componentName)
  const gitHistory = require(`./zh-CN/components/${componentName}_git_metas.json`)
  console.log(gitHistory)

  let str = `
<template>
<div class="component-box">

  <div style="min-height: 600px;">
  <h1 class="vux-component-name">${importName}</h1>

  <p class="component-extra-links">
    <a href="https://vux.li/demos/v2/#/component/${componentName}" target="_blank">demo 原始链接</a>
    <a href="https://github.com/airyland/vux/blob/v2/src/demos/${importName}.vue" target="_blank">demo源码</a>
    <a href="https://github.com/airyland/vux/blob/v2/src/components/${componentName}/metas.yml" target="_blank">编辑文档</a>
    <a href="javascript:" @mouseenter="showQr = true" @mouseleave="showQr = false">二维码
    </a>
    <img class="qr" v-show="showQr" width="100" src="http://qr.topscan.com/api.php?text=${encodeURIComponent(url)}"/>
  </p>

  <div class="component-demo" style="width:377px;height:600px;display:inline-block;border:1px solid #ececec;border-radius:5px;overflow:hidden;">
    <iframe src="${url}" width="375" height="600" border="0" frameborder="0"></iframe>
  </div>

  <h3>引入</h3>

  <h4>局部组件注册(*.vue)</h4>
  
  <div style="width:600px;">
    ${localImportCode}
  </div>
  

  <h4>你也可以注册为全局组件(main.js)</h4>
  
  <div style="width:600px;">
    ${globalImportCode}
  </div>
  
  <div class="tip" style="width:600px;" v-if="metas.tip">
    ${ metas.tip ? metas.tip.replace(/`(.*?)`/g, '<code>$1</code>') : '' }
  </div>

  <h3 v-if="metas.example">使用例子</h3>
  <div v-if="metas.example" style="width:600px;">
    ${exampleCode}
  </div>
  </div>
  

  <h3 v-if="metas.props">属性</h3>

  <table v-if="metas.props">
    <thead>
      <tr>
        <td>名字</td>
        <td style="width:48px;">类型</td>
        <td style="width:120px;">默认</td>
        <td style="width:120px;">版本要求</td>
        <td>说明</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(prop, i) in metas.props">
        <td>{{ i }}</td>
        <td v-html="getTypeHTML(prop.type)"></td>
        <td>{{ prop.default}}</td>
        <td>{{ prop.version || '--'}}</td>
        <td v-html="prop['zh-CN'].replace(/${parseReg}/g, '<code>$1</code>')"></td>
      </tr>
    </tbody>
  </table>

  <h3 v-show="metas.events">事件</h3>
  
  <table v-show="metas.events">
    <thead>
      <tr>
        <td>事件</td>
        <td>参数</td>
        <td>说明</td>
        <td>版本要求</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(event, i) in metas.events">
        <td>{{ i }}</td>
        <td v-html="event.params ? event.params.replace(/${parseReg}/g, '<code>$1</code>') : '--'"></td>
        <td v-html="event['zh-CN'] ? event['zh-CN'].replace(/${parseReg}/g, '<code>$1</code>') : '--'"></td>
        <td>{{ event['version'] || '--' }}</td>
      </tr>
    </tbody>
  </table>

  <h3 v-if="metas.slots">Slots</h3>

  <table v-if="metas.slots">
    <thead>
      <tr>
        <td>名字</td>
        <td>说明</td>
        <td>版本要求</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(slot, i) in metas.slots" :class="{'slot-disabled': slot['status'] === 'deprecated'}">
        <td>{{ i }}</td>
        <td v-html="slot['zh-CN'] ? slot['zh-CN'].replace(/${parseReg}/g, '<code>$1</code>') : ''"></td>
        <td>{{ slot['version'] || '--' }}</td>
      </tr>
    </tbody>
  </table>

    <h3 v-if="metas.methods">方法</h3>
    <table v-if="metas.methods">
      <thead>
        <tr>
          <td>名字</td>
          <td>参数</td>
          <td>说明</td>
          <td>版本说明</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(method, i) in metas.methods">
          <td>{{ i }}</td>
          <td v-html="method['params'] ? method['params'].replace(/${parseReg}/g, '<code>$1</code>') : ''"></td>
          <td v-html="method['zh-CN'].replace(/${parseReg}/g, '<code>$1</code>')"></td>
          <td>{{ method['version'] }}</td>
        </tr>
      </tbody>
    </table>

  <h3>社区相关讨论</h3>
  [即将上线]

  <h3>相关 issue</h3>
  [todo]

  <hr>

  <h3>贡献者</h3>
  
  <p>该组件(包含文档)迭代 {{gitMetas.commitCount}} 次，贡献人数 {{gitMetas.commitUniqueCount}} 人。
  <span class="contributors-tip">（git log 显示用户可能和 Github 用户资料不符，可能无法正常访问）</span>
  </p>
  
  <ul>
    <li v-for="person in gitMetas.commitMembers">
      <a :href="'https://github.com/' + person.authorName" target="_blank">{{person.authorName}}</a>
    </li>
  </ul>

  <h3 v-if="metas.changes">版本更新</h3>

  <ul v-if="metas.changes">
    <template v-for="(changelog, version) in metas.changes">
      <li v-for="log in changelog['zh-CN']">
        <router-link :to="'/zh-CN/changelog/' + version + '.html'" class="changelog-version">{{version}}</router-link> {{log}}
      </li>
    </template>
  </ul>
  
  <h3 v-if="metas.references">参考资料</h3>
  <ul v-if="metas.references">
    <li v-for="link in metas.references['zh-CN']">
      <a :href="link.link" target="_blank">{{link.title}}</a>
    </li>
  </ul>

</div>
</template>


<script>
const metas = require('json-loader!yaml-loader!../../../src/components/${componentName}/metas.yml')
const gitMetas = require('./${componentName}_git_metas.json')

export default {
  head: {
    title: '${importName} 组件使用教程  | VUX - Vue 移动端 UI 组件库'
  },
  filters: {
    parseCode (str) {
      console.log(str)
      return str.replace(/${parseReg}/g, '<code>$1</code>')
    }
  },
  methods: {
    getTypeHTML (type) {
      type = type || 'String'
      if (/,/.test(type)) {
        const list = type.split(',').map(function (one) {
          return one.replace(/^\s+|\s+$/g, '')
        }).map(function (one) {
          const type = one ?  one.toLowerCase() : 'string'
          return '<span class="type type-' + type + '">' + type + '</span>'
        })
        return list.join('<br>')
      } else {
        type = type ?  type.toLowerCase() : 'string'
        return '<span class="type type-' + type + '">' + type + '</span>'
      }
    }
  },
  data () {
    return {
      showQr: false,
      metas: metas,
      gitMetas
    }
  }
}
</script>

<style>
.component-box {
  position: relative;
}
.component-demo {
  position: absolute;
  right: 30px;
  top: 15px;
}
.changelog-version {
  width: 110px;
  display: inline-block;
}
.component-extra-links {
  position: relative;
  font-size: 12px;
}
.component-extra-links a {
  padding-right: 10px;
  color: #999;
}
.qr {
  position: absolute;
  left: 256px;
  top: -77px;
}
</style>
  `

  fs.writeFileSync(`./zh-CN/components/${componentName}.vue`, str)
})

glob.sync('./zh-CN/components/*.vue').forEach(component => {
  const name = component.replace('./zh-CN/components/', '').replace('.vue', '')
  str += `
routes.push({
  path: '/zh-CN/components/${name}.html',
  component: () => import('.${component}')
})
    `
  paths.push(`/zh-CN/components/${name}.html`)

})

const ori = fs.readFileSync('./src/index.js', 'utf-8')
fs.writeFileSync('./src/_index.js', ori.replace('const routes = []', `const routes = []\n${str}`))
fs.writeFileSync('./src/routes.json', JSON.stringify(paths, null, 2))

function camelCase(input) {
  let str = input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });

  str = str.replace(/_(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
  return str
}

function _camelCase(input) {
  let str = camelCase(input)
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}
