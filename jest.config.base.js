module.exports = {
  roots: ['<rootDir>/src/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: '.(test|spec).(t|j)sx?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'vue', 'ts', 'tsx'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['.mock.(t|j)sx?$'],
  verbose: true,
}
