import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

// Lazy-loading (i.e. code-split) your markdown file as vue component
const Home = () => import('../zh-CN/README.md')

// You can add some style here
// Import some css file

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  }]
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
  router,
  App
}
