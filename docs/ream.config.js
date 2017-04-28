var hljs = require('highlight.js');
var taskLists = require('markdown-it-task-lists');
var customContainer = require('markdown-it-container')
var markdown = require('markdown-it')({
  html: true,
  breaks: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + markdown.utils.escapeHtml(str) + '</code></pre>';
  }
})
.use(taskLists)
.use(customContainer, 'tip', {

  validate: function(params) {
    return params.trim() === 'tip'
  }
})
.use(customContainer, 'warning', {

  validate: function(params) {
    return params.trim() === 'warning'
  }
})
.use(customContainer, 'danger', {

  validate: function(params) {
    return params.trim() === 'danger'
  }
});

module.exports = {
  entry: 'src/_index.js',
  generate: {
    routes: require('./src/routes.json')
  },
  extendWebpack(config) {
    config.module
      .rule('markdown')
        .test(/\.md$/)
        .use('v-markdown')
          .loader('v-markdown-loader')
          .options(markdown)
          .end()
        .end()
  }
}
