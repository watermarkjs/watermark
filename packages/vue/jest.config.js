const base = require('../../jest.config.base.js')
const pkg = require('./package.json')

module.exports = {
  ...base,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  testEnvironment: 'jsdom',
  displayName: pkg.name,
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
}
