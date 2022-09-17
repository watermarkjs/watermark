const glob = require('glob')

function getEntries() {
  let map = {}
  const entryFiles = glob.sync('./src{,/!(style)}/index.ts?(x)')
  entryFiles.forEach((filepath) => {
    let fileDir = /.\/src\/(.*?)\.tsx?/.exec(filepath)
    map[fileDir[1]] = filepath
  })
  return map
}

module.exports = {
  getEntries,
}
