const shell = require('shelljs')
const path = require('path')
shell.cd(__dirname + '../')
const glob = require('glob')
const fs = require('fs')
const _ = require('lodash')

const components = glob.sync('./src/components/**/metas.yml')
console.log(components)

const format = JSON.stringify({
  hash: '%H',
  authorName: '%an',
  authorEmail: '%ae',
  date: '%aI',
  // subject: '%s'
})

components.map(one => one.replace('/metas.yml', '')).forEach(one => {
  const name = one.replace('./src/components/', '')
  console.log('name is', name)
  const metaFile = `./docs/zh-CN/components/${name}_git_metas.json`
  const rs = shell.exec(`git log --pretty='format:${format},' -- ${one}`)
  let str = `[${rs.stdout.slice(0, -1).replace(/\n/g, ' ').replace(/"/g, '\"')}]`
  str = JSON.parse(str)
  const result = {
    commitCount: str.length,
    commitMembers: _.uniqBy(str, function (one) {
      return one.authorName.toLowerCase()
    }).map(one => {
      return {
        authorName: one.authorName
      }
    })
  }

  result.commitUniqueCount = result.commitMembers.length

  fs.writeFileSync(metaFile, JSON.stringify(result, null, 2))
})
