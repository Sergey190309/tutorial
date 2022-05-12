console.log('\njest.config.js')

// const { defaults } = require('jest-config');

// console.log(defaults)

const jestConfig = {
  verbose: true,
  roots: ['<rootDir>'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: [
    '<rootDir>/src/**/*.test.{js, jsx}',
    '<rootDir>/test/**/*.test.js'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/src/jest-setup.js'
  ],
  moduleNameMapper: { },
}

module.exports = jestConfig
