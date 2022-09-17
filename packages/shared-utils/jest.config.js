const base = require('../../jest.config.base.js')
const pkg = require('./package.json')

module.exports = {
  ...base,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  displayName: pkg.name,
}
