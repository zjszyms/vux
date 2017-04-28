/**
const Home = () => import('../zh-CN/README.md')
const Version = () => import('../about/version.md')
const routes = []

routes.push({
  path: '/',
  component: Home
})

routes.push({
  path: '/about/version',
  component: Version
})
**/

const glob = require('glob')
const path = require('path')
const fs = require('fs')
glob('./zh-CN/**/*.md', {

},function (err, files) {
  let paths = []

  let str = `
  routes.push({
  path: '/zh-CN/',
  component: () => import('../zh-CN/README.md')
})`
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
  const ori = fs.readFileSync('./src/index.js', 'utf-8')
  fs.writeFileSync('./src/_index.js', ori.replace('const routes = []', `const routes = []\n${str}`))
  fs.writeFileSync('./src/routes.json', JSON.stringify(paths, null, 2))
  console.log(files)
})