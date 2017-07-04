import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import yaml from 'js-yaml'

Vue.use(Vuex)

if (__BROWSER__) {
  require('./app.css')
}

const createStore = () => new Vuex.Store({
  state: {
    contributors: []
  },
  mutations: {
    UPDATE_CONTRIBUTORS(state, payload) {
      state.contributors = payload
    }
  },
  actions: {
    async updateContributors({
      commit
    }, payload) {
      const data = await axios.get(`https://api.github.com/repos/airyland/vux/contributors?per_page=100`).then(res => res.data)
      commit('UPDATE_CONTRIBUTORS', data)
    }
  }
})

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
  })
routes.push({
  path: '/zh-CN/about/before-using-vux.html',
  component: () => import('../zh-CN/about/before-using-vux.md')
})
    
routes.push({
  path: '/zh-CN/about/showcase.html',
  component: () => import('../zh-CN/about/showcase.md')
})
    
routes.push({
  path: '/zh-CN/about/thanks.html',
  component: () => import('../zh-CN/about/thanks.md')
})
    
routes.push({
  path: '/zh-CN/changelog/changelog.html',
  component: () => import('../zh-CN/changelog/changelog.md')
})
    
routes.push({
  path: '/zh-CN/changelog/next.html',
  component: () => import('../zh-CN/changelog/next.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.0.0.html',
  component: () => import('../zh-CN/changelog/v2.0.0.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.0.1.html',
  component: () => import('../zh-CN/changelog/v2.0.1.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.0.14.html',
  component: () => import('../zh-CN/changelog/v2.0.14.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.0-rc.46.html',
  component: () => import('../zh-CN/changelog/v2.1.0-rc.46.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.0-rc.47.html',
  component: () => import('../zh-CN/changelog/v2.1.0-rc.47.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.0-rc.48.html',
  component: () => import('../zh-CN/changelog/v2.1.0-rc.48.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.0-rc.49.html',
  component: () => import('../zh-CN/changelog/v2.1.0-rc.49.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.0-rc.50.html',
  component: () => import('../zh-CN/changelog/v2.1.0-rc.50.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.0-rc.51.html',
  component: () => import('../zh-CN/changelog/v2.1.0-rc.51.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.0.html',
  component: () => import('../zh-CN/changelog/v2.1.0.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.1.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.1.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.10.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.10.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.11.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.11.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.12.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.12.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.13.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.13.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.14.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.14.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.2.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.2.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.3.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.3.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.4.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.4.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.5.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.5.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.6.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.6.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.7.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.7.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.8.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.8.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.1.1-rc.9.html',
  component: () => import('../zh-CN/changelog/v2.1.1-rc.9.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.2.0.html',
  component: () => import('../zh-CN/changelog/v2.2.0.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.2.1-rc.1.html',
  component: () => import('../zh-CN/changelog/v2.2.1-rc.1.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.2.1-rc.2.html',
  component: () => import('../zh-CN/changelog/v2.2.1-rc.2.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.2.1-rc.3.html',
  component: () => import('../zh-CN/changelog/v2.2.1-rc.3.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.2.1-rc.4.html',
  component: () => import('../zh-CN/changelog/v2.2.1-rc.4.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.2.1-rc.6.html',
  component: () => import('../zh-CN/changelog/v2.2.1-rc.6.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.2.1-rc.7.html',
  component: () => import('../zh-CN/changelog/v2.2.1-rc.7.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.2.1-rc.8.html',
  component: () => import('../zh-CN/changelog/v2.2.1-rc.8.md')
})
    
routes.push({
  path: '/zh-CN/changelog/v2.2.1.html',
  component: () => import('../zh-CN/changelog/v2.2.1.md')
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
  path: '/zh-CN/contribution/donate.html',
  component: () => import('../zh-CN/contribution/donate.md')
})
    
routes.push({
  path: '/zh-CN/contribution/issue.html',
  component: () => import('../zh-CN/contribution/issue.md')
})
    
routes.push({
  path: '/zh-CN/contribution/pr.html',
  component: () => import('../zh-CN/contribution/pr.md')
})
    
routes.push({
  path: '/zh-CN/contribution/vux-development.html',
  component: () => import('../zh-CN/contribution/vux-development.md')
})
    
routes.push({
  path: '/zh-CN/css/1px.html',
  component: () => import('../zh-CN/css/1px.md')
})
    
routes.push({
  path: '/zh-CN/css/close.html',
  component: () => import('../zh-CN/css/close.md')
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
  path: '/zh-CN/development/i18n.html',
  component: () => import('../zh-CN/development/i18n.md')
})
    
routes.push({
  path: '/zh-CN/development/remove-click-delay-fastclick.html',
  component: () => import('../zh-CN/development/remove-click-delay-fastclick.md')
})
    
routes.push({
  path: '/zh-CN/development/router.html',
  component: () => import('../zh-CN/development/router.md')
})
    
routes.push({
  path: '/zh-CN/development/theme.html',
  component: () => import('../zh-CN/development/theme.md')
})
    
routes.push({
  path: '/zh-CN/development/vue-ajax.html',
  component: () => import('../zh-CN/development/vue-ajax.md')
})
    
routes.push({
  path: '/zh-CN/development/vue-global-method.html',
  component: () => import('../zh-CN/development/vue-global-method.md')
})
    
routes.push({
  path: '/zh-CN/development/vue-google-analytics.html',
  component: () => import('../zh-CN/development/vue-google-analytics.md')
})
    
routes.push({
  path: '/zh-CN/development/vue-loader-autoprefix.html',
  component: () => import('../zh-CN/development/vue-loader-autoprefix.md')
})
    
routes.push({
  path: '/zh-CN/development/vue-loader-disable-eslint.html',
  component: () => import('../zh-CN/development/vue-loader-disable-eslint.md')
})
    
routes.push({
  path: '/zh-CN/development/vue-router-page-transition.html',
  component: () => import('../zh-CN/development/vue-router-page-transition.md')
})
    
routes.push({
  path: '/zh-CN/development/vue-show-loading.html',
  component: () => import('../zh-CN/development/vue-show-loading.md')
})
    
routes.push({
  path: '/zh-CN/development/vue-webpack-code-splitting-async.html',
  component: () => import('../zh-CN/development/vue-webpack-code-splitting-async.md')
})
    
routes.push({
  path: '/zh-CN/development/vue-webpack-env.html',
  component: () => import('../zh-CN/development/vue-webpack-env.md')
})
    
routes.push({
  path: '/zh-CN/directives/v-transfer-dom.html',
  component: () => import('../zh-CN/directives/v-transfer-dom.md')
})
    
routes.push({
  path: '/zh-CN/faq/$t-is-not-defined.html',
  component: () => import('../zh-CN/faq/$t-is-not-defined.md')
})
    
routes.push({
  path: '/zh-CN/faq/can-vux-used-in-weapp.html',
  component: () => import('../zh-CN/faq/can-vux-used-in-weapp.md')
})
    
routes.push({
  path: '/zh-CN/faq/cannot-resolve-inline-desc.html',
  component: () => import('../zh-CN/faq/cannot-resolve-inline-desc.md')
})
    
routes.push({
  path: '/zh-CN/faq/difference-between-vux-template-and-webpack-template.html',
  component: () => import('../zh-CN/faq/difference-between-vux-template-and-webpack-template.md')
})
    
routes.push({
  path: '/zh-CN/faq/document-framework.html',
  component: () => import('../zh-CN/faq/document-framework.md')
})
    
routes.push({
  path: '/zh-CN/faq/dupicate-style.html',
  component: () => import('../zh-CN/faq/dupicate-style.md')
})
    
routes.push({
  path: '/zh-CN/faq/index.html',
  component: () => import('../zh-CN/faq/index.md')
})
    
routes.push({
  path: '/zh-CN/faq/is-vux-wechat-official-project.html',
  component: () => import('../zh-CN/faq/is-vux-wechat-official-project.md')
})
    
routes.push({
  path: '/zh-CN/faq/Uncaught-SyntaxError-Unexpected-token-export.html',
  component: () => import('../zh-CN/faq/Uncaught-SyntaxError-Unexpected-token-export.md')
})
    
routes.push({
  path: '/zh-CN/faq/vux-build-issue.html',
  component: () => import('../zh-CN/faq/vux-build-issue.md')
})
    
routes.push({
  path: '/zh-CN/faq/vux-server-render-support.html',
  component: () => import('../zh-CN/faq/vux-server-render-support.md')
})
    
routes.push({
  path: '/zh-CN/faq/what-is-vux-virtual-component.html',
  component: () => import('../zh-CN/faq/what-is-vux-virtual-component.md')
})
    
routes.push({
  path: '/zh-CN/faq/why-cannot-i-import-all-components.html',
  component: () => import('../zh-CN/faq/why-cannot-i-import-all-components.md')
})
    
routes.push({
  path: '/zh-CN/faq/why-cannot-i-use-vux-with-cdn.html',
  component: () => import('../zh-CN/faq/why-cannot-i-use-vux-with-cdn.md')
})
    
routes.push({
  path: '/zh-CN/faq/why-use-vue-file-for-distribution.html',
  component: () => import('../zh-CN/faq/why-use-vue-file-for-distribution.md')
})
    
routes.push({
  path: '/zh-CN/faq/why-use-x-prefix-for-components.html',
  component: () => import('../zh-CN/faq/why-use-x-prefix-for-components.md')
})
    
routes.push({
  path: '/zh-CN/faq/why-using-vux-loader.html',
  component: () => import('../zh-CN/faq/why-using-vux-loader.md')
})
    
routes.push({
  path: '/zh-CN/faq/will-vux-stop-maintaining.html',
  component: () => import('../zh-CN/faq/will-vux-stop-maintaining.md')
})
    
routes.push({
  path: '/zh-CN/install/biolerplate.html',
  component: () => import('../zh-CN/install/biolerplate.md')
})
    
routes.push({
  path: '/zh-CN/install/manual-usage.html',
  component: () => import('../zh-CN/install/manual-usage.md')
})
    
routes.push({
  path: '/zh-CN/install/npm.html',
  component: () => import('../zh-CN/install/npm.md')
})
    
routes.push({
  path: '/zh-CN/install/umd.html',
  component: () => import('../zh-CN/install/umd.md')
})
    
routes.push({
  path: '/zh-CN/install/upgrade-to-vux2.html',
  component: () => import('../zh-CN/install/upgrade-to-vux2.md')
})
    
routes.push({
  path: '/zh-CN/install/usage.html',
  component: () => import('../zh-CN/install/usage.md')
})
    
routes.push({
  path: '/zh-CN/livingearth.html',
  component: () => import('../zh-CN/livingearth.md')
})
    
routes.push({
  path: '/zh-CN/pro.html',
  component: () => import('../zh-CN/pro.md')
})
    
routes.push({
  path: '/zh-CN/production/inline-manifest.html',
  component: () => import('../zh-CN/production/inline-manifest.md')
})
    
routes.push({
  path: '/zh-CN/README.html',
  component: () => import('../zh-CN/README.md')
})
    
routes.push({
  path: '/zh-CN/tools/base64.html',
  component: () => import('../zh-CN/tools/base64.md')
})
    
routes.push({
  path: '/zh-CN/tools/cookie.html',
  component: () => import('../zh-CN/tools/cookie.md')
})
    
routes.push({
  path: '/zh-CN/tools/date.html',
  component: () => import('../zh-CN/tools/date.md')
})
    
routes.push({
  path: '/zh-CN/tools/debounce-throttle.html',
  component: () => import('../zh-CN/tools/debounce-throttle.md')
})
    
routes.push({
  path: '/zh-CN/tools/md5.html',
  component: () => import('../zh-CN/tools/md5.md')
})
    
routes.push({
  path: '/zh-CN/tools/number.html',
  component: () => import('../zh-CN/tools/number.md')
})
    
routes.push({
  path: '/zh-CN/tools/querystring.html',
  component: () => import('../zh-CN/tools/querystring.md')
})
    
routes.push({
  path: '/zh-CN/tools/string.html',
  component: () => import('../zh-CN/tools/string.md')
})
    
routes.push({
  path: '/zh-CN/vux-loader.html',
  component: () => import('../zh-CN/vux-loader.md')
})
    
routes.push({
  path: '/zh-CN/vux-loader/about.html',
  component: () => import('../zh-CN/vux-loader/about.md')
})
    
routes.push({
  path: '/zh-CN/vux-loader/how-vux-loader-works.html',
  component: () => import('../zh-CN/vux-loader/how-vux-loader-works.md')
})
    
routes.push({
  path: '/zh-CN/vux-loader/install.html',
  component: () => import('../zh-CN/vux-loader/install.md')
})
    
routes.push({
  path: '/zh-CN/vux-loader/plugins.html',
  component: () => import('../zh-CN/vux-loader/plugins.md')
})
    
routes.push({
  path: '/zh-CN/wechat/other.html',
  component: () => import('../zh-CN/wechat/other.md')
})
    
routes.push({
  path: '/zh-CN/wechat/vue-wechat-jssdk.html',
  component: () => import('../zh-CN/wechat/vue-wechat-jssdk.md')
})
    
routes.push({
  path: '/zh-CN/wechat/wechat-document-title.html',
  component: () => import('../zh-CN/wechat/wechat-document-title.md')
})
    
routes.push({
  path: '/zh-CN/components/actionsheet.html',
  component: () => import('../zh-CN/components/actionsheet.vue')
})
    
routes.push({
  path: '/zh-CN/components/alert.html',
  component: () => import('../zh-CN/components/alert.vue')
})
    
routes.push({
  path: '/zh-CN/components/badge.html',
  component: () => import('../zh-CN/components/badge.vue')
})
    
routes.push({
  path: '/zh-CN/components/blur.html',
  component: () => import('../zh-CN/components/blur.vue')
})
    
routes.push({
  path: '/zh-CN/components/box.html',
  component: () => import('../zh-CN/components/box.vue')
})
    
routes.push({
  path: '/zh-CN/components/button-tab.html',
  component: () => import('../zh-CN/components/button-tab.vue')
})
    
routes.push({
  path: '/zh-CN/components/calendar.html',
  component: () => import('../zh-CN/components/calendar.vue')
})
    
routes.push({
  path: '/zh-CN/components/card.html',
  component: () => import('../zh-CN/components/card.vue')
})
    
routes.push({
  path: '/zh-CN/components/cell-box.html',
  component: () => import('../zh-CN/components/cell-box.vue')
})
    
routes.push({
  path: '/zh-CN/components/cell-form-preview.html',
  component: () => import('../zh-CN/components/cell-form-preview.vue')
})
    
routes.push({
  path: '/zh-CN/components/cell.html',
  component: () => import('../zh-CN/components/cell.vue')
})
    
routes.push({
  path: '/zh-CN/components/check-icon.html',
  component: () => import('../zh-CN/components/check-icon.vue')
})
    
routes.push({
  path: '/zh-CN/components/checker.html',
  component: () => import('../zh-CN/components/checker.vue')
})
    
routes.push({
  path: '/zh-CN/components/checklist.html',
  component: () => import('../zh-CN/components/checklist.vue')
})
    
routes.push({
  path: '/zh-CN/components/clocker.html',
  component: () => import('../zh-CN/components/clocker.vue')
})
    
routes.push({
  path: '/zh-CN/components/color-picker.html',
  component: () => import('../zh-CN/components/color-picker.vue')
})
    
routes.push({
  path: '/zh-CN/components/confirm.html',
  component: () => import('../zh-CN/components/confirm.vue')
})
    
routes.push({
  path: '/zh-CN/components/countdown.html',
  component: () => import('../zh-CN/components/countdown.vue')
})
    
routes.push({
  path: '/zh-CN/components/countup.html',
  component: () => import('../zh-CN/components/countup.vue')
})
    
routes.push({
  path: '/zh-CN/components/datetime-range.html',
  component: () => import('../zh-CN/components/datetime-range.vue')
})
    
routes.push({
  path: '/zh-CN/components/datetime-view.html',
  component: () => import('../zh-CN/components/datetime-view.vue')
})
    
routes.push({
  path: '/zh-CN/components/datetime.html',
  component: () => import('../zh-CN/components/datetime.vue')
})
    
routes.push({
  path: '/zh-CN/components/divider.html',
  component: () => import('../zh-CN/components/divider.vue')
})
    
routes.push({
  path: '/zh-CN/components/drawer.html',
  component: () => import('../zh-CN/components/drawer.vue')
})
    
routes.push({
  path: '/zh-CN/components/flexbox.html',
  component: () => import('../zh-CN/components/flexbox.vue')
})
    
routes.push({
  path: '/zh-CN/components/flow.html',
  component: () => import('../zh-CN/components/flow.vue')
})
    
routes.push({
  path: '/zh-CN/components/form-preview.html',
  component: () => import('../zh-CN/components/form-preview.vue')
})
    
routes.push({
  path: '/zh-CN/components/grid.html',
  component: () => import('../zh-CN/components/grid.vue')
})
    
routes.push({
  path: '/zh-CN/components/group.html',
  component: () => import('../zh-CN/components/group.vue')
})
    
routes.push({
  path: '/zh-CN/components/icon.html',
  component: () => import('../zh-CN/components/icon.vue')
})
    
routes.push({
  path: '/zh-CN/components/inline-calendar.html',
  component: () => import('../zh-CN/components/inline-calendar.vue')
})
    
routes.push({
  path: '/zh-CN/components/inline-desc.html',
  component: () => import('../zh-CN/components/inline-desc.vue')
})
    
routes.push({
  path: '/zh-CN/components/inline-loading.html',
  component: () => import('../zh-CN/components/inline-loading.vue')
})
    
routes.push({
  path: '/zh-CN/components/load-more.html',
  component: () => import('../zh-CN/components/load-more.vue')
})
    
routes.push({
  path: '/zh-CN/components/loading.html',
  component: () => import('../zh-CN/components/loading.vue')
})
    
routes.push({
  path: '/zh-CN/components/marquee.html',
  component: () => import('../zh-CN/components/marquee.vue')
})
    
routes.push({
  path: '/zh-CN/components/masker.html',
  component: () => import('../zh-CN/components/masker.vue')
})
    
routes.push({
  path: '/zh-CN/components/msg.html',
  component: () => import('../zh-CN/components/msg.vue')
})
    
routes.push({
  path: '/zh-CN/components/panel.html',
  component: () => import('../zh-CN/components/panel.vue')
})
    
routes.push({
  path: '/zh-CN/components/picker.html',
  component: () => import('../zh-CN/components/picker.vue')
})
    
routes.push({
  path: '/zh-CN/components/popover.html',
  component: () => import('../zh-CN/components/popover.vue')
})
    
routes.push({
  path: '/zh-CN/components/popup-picker.html',
  component: () => import('../zh-CN/components/popup-picker.vue')
})
    
routes.push({
  path: '/zh-CN/components/popup-radio.html',
  component: () => import('../zh-CN/components/popup-radio.vue')
})
    
routes.push({
  path: '/zh-CN/components/popup.html',
  component: () => import('../zh-CN/components/popup.vue')
})
    
routes.push({
  path: '/zh-CN/components/previewer.html',
  component: () => import('../zh-CN/components/previewer.vue')
})
    
routes.push({
  path: '/zh-CN/components/qrcode.html',
  component: () => import('../zh-CN/components/qrcode.vue')
})
    
routes.push({
  path: '/zh-CN/components/radio.html',
  component: () => import('../zh-CN/components/radio.vue')
})
    
routes.push({
  path: '/zh-CN/components/range.html',
  component: () => import('../zh-CN/components/range.vue')
})
    
routes.push({
  path: '/zh-CN/components/rater.html',
  component: () => import('../zh-CN/components/rater.vue')
})
    
routes.push({
  path: '/zh-CN/components/scroller.html',
  component: () => import('../zh-CN/components/scroller.vue')
})
    
routes.push({
  path: '/zh-CN/components/search.html',
  component: () => import('../zh-CN/components/search.vue')
})
    
routes.push({
  path: '/zh-CN/components/selector.html',
  component: () => import('../zh-CN/components/selector.vue')
})
    
routes.push({
  path: '/zh-CN/components/spinner.html',
  component: () => import('../zh-CN/components/spinner.vue')
})
    
routes.push({
  path: '/zh-CN/components/step.html',
  component: () => import('../zh-CN/components/step.vue')
})
    
routes.push({
  path: '/zh-CN/components/sticky.html',
  component: () => import('../zh-CN/components/sticky.vue')
})
    
routes.push({
  path: '/zh-CN/components/swipeout.html',
  component: () => import('../zh-CN/components/swipeout.vue')
})
    
routes.push({
  path: '/zh-CN/components/swiper.html',
  component: () => import('../zh-CN/components/swiper.vue')
})
    
routes.push({
  path: '/zh-CN/components/tab.html',
  component: () => import('../zh-CN/components/tab.vue')
})
    
routes.push({
  path: '/zh-CN/components/tabbar.html',
  component: () => import('../zh-CN/components/tabbar.vue')
})
    
routes.push({
  path: '/zh-CN/components/timeline.html',
  component: () => import('../zh-CN/components/timeline.vue')
})
    
routes.push({
  path: '/zh-CN/components/toast.html',
  component: () => import('../zh-CN/components/toast.vue')
})
    
routes.push({
  path: '/zh-CN/components/view-box.html',
  component: () => import('../zh-CN/components/view-box.vue')
})
    
routes.push({
  path: '/zh-CN/components/wechat-emotion.html',
  component: () => import('../zh-CN/components/wechat-emotion.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-address.html',
  component: () => import('../zh-CN/components/x-address.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-button.html',
  component: () => import('../zh-CN/components/x-button.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-circle.html',
  component: () => import('../zh-CN/components/x-circle.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-dialog.html',
  component: () => import('../zh-CN/components/x-dialog.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-header.html',
  component: () => import('../zh-CN/components/x-header.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-icon.html',
  component: () => import('../zh-CN/components/x-icon.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-img.html',
  component: () => import('../zh-CN/components/x-img.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-input.html',
  component: () => import('../zh-CN/components/x-input.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-number.html',
  component: () => import('../zh-CN/components/x-number.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-progress.html',
  component: () => import('../zh-CN/components/x-progress.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-switch.html',
  component: () => import('../zh-CN/components/x-switch.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-table.html',
  component: () => import('../zh-CN/components/x-table.vue')
})
    
routes.push({
  path: '/zh-CN/components/x-textarea.html',
  component: () => import('../zh-CN/components/x-textarea.vue')
})
    

Vue.use(Router)

const createRouter = () => {
  const router = new Router({
    mode: 'history',
    routes
  })

  if (__BROWSER__) {
    const nprogress = require('nprogress')
    require('nprogress/nprogress.css')

    if (process.env.NODE_ENV === 'production') {
      ;
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-89859411-2', 'auto');
      ga('send', 'pageview');

      router.afterEach(function (to) {
        ga('set', 'page', to.fullPath);
        ga('send', 'pageview');
      })
    }

    router.beforeEach((from, to, next) => {
      nprogress.start()
      next()
    })
    router.afterEach(() => {
      nprogress.done()
      window.scrollTo(0, 0)
    })
  }

  return router
}

export default {
  createRouter,
  createStore,
  App
}