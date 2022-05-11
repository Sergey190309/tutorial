console.log('\njest.config.js')

// const { defaults } = require('jest-config');

// console.log(defaults)

const jestConfig = {
  verbose: true,
  // testEnvironment: 'jsdom',
  transform: {
  },
  // transformIgnorePatterns: [
  //   '/node_modules/(?!uuid)',
  // ],
  // plugins: ["@babel/plugin-transform-modules-commonjs"],
  setupFilesAfterEnv: [
    '<rootDir>/src/jest-setup.js'
  ]
}

module.exports = jestConfig
