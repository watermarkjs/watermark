const glob = require('glob')

function getEntries() {
  let map = {}
  const entryFiles = glob.sync('./src/**/index.@(vue|ts)')
  entryFiles.forEach((filepath) => {
    let fileDir = /.\/src\/(.*?)\.(vue|ts)/.exec(filepath)
    map[fileDir[1]] = filepath
  })
  return map
}

module.exports = {
  getEntries,
}
