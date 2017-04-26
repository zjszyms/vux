module.exports = {
  generate: {
    routes: ['/', '/zh-CN/faq/vux_undefined.html']
  },
  extendWebpack(config) {
    config.module
      .rule('markdown')
        .test(/\.md$/)
        .use('vue-markdown')
          .loader('vue-markdown-loader')
          .end()
        .end()
  }
}
