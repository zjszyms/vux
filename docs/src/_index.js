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

  routes.push({
  path: '/zh-CN/',
  component: () => import('../zh-CN/README.md')
})
routes.push({
  path: '/zh-CN/changes.html',
  component: () => import('../zh-CN/changes.md')
})
    
routes.push({
  path: '/zh-CN/changes/next.html',
  component: () => import('../zh-CN/changes/next.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.0.0.html',
  component: () => import('../zh-CN/changes/v2.0.0.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.0.1.html',
  component: () => import('../zh-CN/changes/v2.0.1.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.0.14.html',
  component: () => import('../zh-CN/changes/v2.0.14.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.0-rc.46.html',
  component: () => import('../zh-CN/changes/v2.1.0-rc.46.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.0-rc.47.html',
  component: () => import('../zh-CN/changes/v2.1.0-rc.47.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.0-rc.48.html',
  component: () => import('../zh-CN/changes/v2.1.0-rc.48.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.0-rc.49.html',
  component: () => import('../zh-CN/changes/v2.1.0-rc.49.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.0-rc.50.html',
  component: () => import('../zh-CN/changes/v2.1.0-rc.50.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.0-rc.51.html',
  component: () => import('../zh-CN/changes/v2.1.0-rc.51.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.0.html',
  component: () => import('../zh-CN/changes/v2.1.0.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.1.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.1.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.10.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.10.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.11.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.11.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.12.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.12.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.13.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.13.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.14.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.14.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.2.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.2.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.3.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.3.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.4.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.4.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.5.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.5.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.6.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.6.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.7.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.7.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.8.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.8.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.1.1-rc.9.html',
  component: () => import('../zh-CN/changes/v2.1.1-rc.9.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.2.0.html',
  component: () => import('../zh-CN/changes/v2.2.0.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.2.1-rc.1.html',
  component: () => import('../zh-CN/changes/v2.2.1-rc.1.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.2.1-rc.2.html',
  component: () => import('../zh-CN/changes/v2.2.1-rc.2.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.2.1-rc.3.html',
  component: () => import('../zh-CN/changes/v2.2.1-rc.3.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.2.1-rc.4.html',
  component: () => import('../zh-CN/changes/v2.2.1-rc.4.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.2.1-rc.6.html',
  component: () => import('../zh-CN/changes/v2.2.1-rc.6.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.2.1-rc.7.html',
  component: () => import('../zh-CN/changes/v2.2.1-rc.7.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.2.1-rc.8.html',
  component: () => import('../zh-CN/changes/v2.2.1-rc.8.md')
})
    
routes.push({
  path: '/zh-CN/changes/v2.2.1.html',
  component: () => import('../zh-CN/changes/v2.2.1.md')
})
    
routes.push({
  path: '/zh-CN/components_dialog.html',
  component: () => import('../zh-CN/components_dialog.md')
})
    
routes.push({
  path: '/zh-CN/components_form.html',
  component: () => import('../zh-CN/components_form.md')
})
    
routes.push({
  path: '/zh-CN/components_layout.html',
  component: () => import('../zh-CN/components_layout.md')
})
    
routes.push({
  path: '/zh-CN/components.html',
  component: () => import('../zh-CN/components.md')
})
    
routes.push({
  path: '/zh-CN/css.html',
  component: () => import('../zh-CN/css.md')
})
    
routes.push({
  path: '/zh-CN/demos/actionsheet.html',
  component: () => import('../zh-CN/demos/actionsheet.md')
})
    
routes.push({
  path: '/zh-CN/demos/alert.html',
  component: () => import('../zh-CN/demos/alert.md')
})
    
routes.push({
  path: '/zh-CN/demos/badge.html',
  component: () => import('../zh-CN/demos/badge.md')
})
    
routes.push({
  path: '/zh-CN/demos/blur.html',
  component: () => import('../zh-CN/demos/blur.md')
})
    
routes.push({
  path: '/zh-CN/demos/button-tab.html',
  component: () => import('../zh-CN/demos/button-tab.md')
})
    
routes.push({
  path: '/zh-CN/demos/calendar.html',
  component: () => import('../zh-CN/demos/calendar.md')
})
    
routes.push({
  path: '/zh-CN/demos/card.html',
  component: () => import('../zh-CN/demos/card.md')
})
    
routes.push({
  path: '/zh-CN/demos/cell-box.html',
  component: () => import('../zh-CN/demos/cell-box.md')
})
    
routes.push({
  path: '/zh-CN/demos/cell-form-preview.html',
  component: () => import('../zh-CN/demos/cell-form-preview.md')
})
    
routes.push({
  path: '/zh-CN/demos/cell.html',
  component: () => import('../zh-CN/demos/cell.md')
})
    
routes.push({
  path: '/zh-CN/demos/checker.html',
  component: () => import('../zh-CN/demos/checker.md')
})
    
routes.push({
  path: '/zh-CN/demos/checklist.html',
  component: () => import('../zh-CN/demos/checklist.md')
})
    
routes.push({
  path: '/zh-CN/demos/clocker.html',
  component: () => import('../zh-CN/demos/clocker.md')
})
    
routes.push({
  path: '/zh-CN/demos/color-picker.html',
  component: () => import('../zh-CN/demos/color-picker.md')
})
    
routes.push({
  path: '/zh-CN/demos/confirm.html',
  component: () => import('../zh-CN/demos/confirm.md')
})
    
routes.push({
  path: '/zh-CN/demos/countdown.html',
  component: () => import('../zh-CN/demos/countdown.md')
})
    
routes.push({
  path: '/zh-CN/demos/countup.html',
  component: () => import('../zh-CN/demos/countup.md')
})
    
routes.push({
  path: '/zh-CN/demos/datetime-range.html',
  component: () => import('../zh-CN/demos/datetime-range.md')
})
    
routes.push({
  path: '/zh-CN/demos/datetime.html',
  component: () => import('../zh-CN/demos/datetime.md')
})
    
routes.push({
  path: '/zh-CN/demos/divider.html',
  component: () => import('../zh-CN/demos/divider.md')
})
    
routes.push({
  path: '/zh-CN/demos/flexbox.html',
  component: () => import('../zh-CN/demos/flexbox.md')
})
    
routes.push({
  path: '/zh-CN/demos/form-preview.html',
  component: () => import('../zh-CN/demos/form-preview.md')
})
    
routes.push({
  path: '/zh-CN/demos/grid.html',
  component: () => import('../zh-CN/demos/grid.md')
})
    
routes.push({
  path: '/zh-CN/demos/group.html',
  component: () => import('../zh-CN/demos/group.md')
})
    
routes.push({
  path: '/zh-CN/demos/icon.html',
  component: () => import('../zh-CN/demos/icon.md')
})
    
routes.push({
  path: '/zh-CN/demos/inline-calendar.html',
  component: () => import('../zh-CN/demos/inline-calendar.md')
})
    
routes.push({
  path: '/zh-CN/demos/load-more.html',
  component: () => import('../zh-CN/demos/load-more.md')
})
    
routes.push({
  path: '/zh-CN/demos/loading.html',
  component: () => import('../zh-CN/demos/loading.md')
})
    
routes.push({
  path: '/zh-CN/demos/marquee.html',
  component: () => import('../zh-CN/demos/marquee.md')
})
    
routes.push({
  path: '/zh-CN/demos/masker.html',
  component: () => import('../zh-CN/demos/masker.md')
})
    
routes.push({
  path: '/zh-CN/demos/msg.html',
  component: () => import('../zh-CN/demos/msg.md')
})
    
routes.push({
  path: '/zh-CN/demos/panel.html',
  component: () => import('../zh-CN/demos/panel.md')
})
    
routes.push({
  path: '/zh-CN/demos/picker.html',
  component: () => import('../zh-CN/demos/picker.md')
})
    
routes.push({
  path: '/zh-CN/demos/popover.html',
  component: () => import('../zh-CN/demos/popover.md')
})
    
routes.push({
  path: '/zh-CN/demos/popup-picker.html',
  component: () => import('../zh-CN/demos/popup-picker.md')
})
    
routes.push({
  path: '/zh-CN/demos/popup-radio.html',
  component: () => import('../zh-CN/demos/popup-radio.md')
})
    
routes.push({
  path: '/zh-CN/demos/popup.html',
  component: () => import('../zh-CN/demos/popup.md')
})
    
routes.push({
  path: '/zh-CN/demos/previewer.html',
  component: () => import('../zh-CN/demos/previewer.md')
})
    
routes.push({
  path: '/zh-CN/demos/qrcode.html',
  component: () => import('../zh-CN/demos/qrcode.md')
})
    
routes.push({
  path: '/zh-CN/demos/radio.html',
  component: () => import('../zh-CN/demos/radio.md')
})
    
routes.push({
  path: '/zh-CN/demos/range.html',
  component: () => import('../zh-CN/demos/range.md')
})
    
routes.push({
  path: '/zh-CN/demos/rater.html',
  component: () => import('../zh-CN/demos/rater.md')
})
    
routes.push({
  path: '/zh-CN/demos/scroller.html',
  component: () => import('../zh-CN/demos/scroller.md')
})
    
routes.push({
  path: '/zh-CN/demos/search.html',
  component: () => import('../zh-CN/demos/search.md')
})
    
routes.push({
  path: '/zh-CN/demos/selector.html',
  component: () => import('../zh-CN/demos/selector.md')
})
    
routes.push({
  path: '/zh-CN/demos/spinner.html',
  component: () => import('../zh-CN/demos/spinner.md')
})
    
routes.push({
  path: '/zh-CN/demos/step.html',
  component: () => import('../zh-CN/demos/step.md')
})
    
routes.push({
  path: '/zh-CN/demos/sticky.html',
  component: () => import('../zh-CN/demos/sticky.md')
})
    
routes.push({
  path: '/zh-CN/demos/swipeout.html',
  component: () => import('../zh-CN/demos/swipeout.md')
})
    
routes.push({
  path: '/zh-CN/demos/swiper.html',
  component: () => import('../zh-CN/demos/swiper.md')
})
    
routes.push({
  path: '/zh-CN/demos/tab.html',
  component: () => import('../zh-CN/demos/tab.md')
})
    
routes.push({
  path: '/zh-CN/demos/tabbar.html',
  component: () => import('../zh-CN/demos/tabbar.md')
})
    
routes.push({
  path: '/zh-CN/demos/timeline.html',
  component: () => import('../zh-CN/demos/timeline.md')
})
    
routes.push({
  path: '/zh-CN/demos/toast.html',
  component: () => import('../zh-CN/demos/toast.md')
})
    
routes.push({
  path: '/zh-CN/demos/view-box.html',
  component: () => import('../zh-CN/demos/view-box.md')
})
    
routes.push({
  path: '/zh-CN/demos/wechat-emotion.html',
  component: () => import('../zh-CN/demos/wechat-emotion.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-address.html',
  component: () => import('../zh-CN/demos/x-address.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-button.html',
  component: () => import('../zh-CN/demos/x-button.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-circle.html',
  component: () => import('../zh-CN/demos/x-circle.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-dialog.html',
  component: () => import('../zh-CN/demos/x-dialog.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-header.html',
  component: () => import('../zh-CN/demos/x-header.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-icon.html',
  component: () => import('../zh-CN/demos/x-icon.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-img.html',
  component: () => import('../zh-CN/demos/x-img.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-input.html',
  component: () => import('../zh-CN/demos/x-input.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-number.html',
  component: () => import('../zh-CN/demos/x-number.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-progress.html',
  component: () => import('../zh-CN/demos/x-progress.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-switch.html',
  component: () => import('../zh-CN/demos/x-switch.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-table.html',
  component: () => import('../zh-CN/demos/x-table.md')
})
    
routes.push({
  path: '/zh-CN/demos/x-textarea.html',
  component: () => import('../zh-CN/demos/x-textarea.md')
})
    
routes.push({
  path: '/zh-CN/faq/vux_undefined.html',
  component: () => import('../zh-CN/faq/vux_undefined.md')
})
    
routes.push({
  path: '/zh-CN/livingearth.html',
  component: () => import('../zh-CN/livingearth.md')
})
    
routes.push({
  path: '/zh-CN/next.html',
  component: () => import('../zh-CN/next.md')
})
    
routes.push({
  path: '/zh-CN/pro.html',
  component: () => import('../zh-CN/pro.md')
})
    
routes.push({
  path: '/zh-CN/README.html',
  component: () => import('../zh-CN/README.md')
})
    
routes.push({
  path: '/zh-CN/umd.html',
  component: () => import('../zh-CN/umd.md')
})
    
routes.push({
  path: '/zh-CN/upgrade-to-2.html',
  component: () => import('../zh-CN/upgrade-to-2.md')
})
    
routes.push({
  path: '/zh-CN/vux-loader.html',
  component: () => import('../zh-CN/vux-loader.md')
})
    

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
