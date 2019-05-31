module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(modular-core|modular-vue|@xportal|vuex-along))'
  ],
  moduleNameMapper: {
    '^@/setting': '<rootDir>/test/mock/setting',
    '^@/(.*)$': '<rootDir>/$1',
    'serverConfig': '<rootDir>/test/mock/server.config'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/test/unit/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    '!**/test/**',
    '<rootDir>/**/*.{js,jsx,vue}'
  ],
  coverageReporters: [
    'lcov',
    'html'
  ],
  browser: true,
  collectCoverage: true,
  testURL: 'http://localhost/'
}
