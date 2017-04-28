import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

const path = require('path')
const list = [{
  chapter: 'about',
  pages: [{
    path: 'version',
    title: '版本发布说明'
  }]
}]

// Lazy-loading (i.e. code-split) your markdown file as vue component
const routes = []

// You can add some style here
// Import some css file

Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history',
  routes
})

if (process.env.BROWSER) {
  const nprogress = require('nprogress')
  require('nprogress/nprogress.css')

  router.beforeEach((from, to, next) => {
    nprogress.start()
    next()
  })
  router.afterEach(() => {
    nprogress.done()
  })
}

export default { 
  createRouter,
  App
}
