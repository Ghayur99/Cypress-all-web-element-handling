const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for HTML reports
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/testCases/*.js',
    // baseUrl: 'https://dagger.mltitans.com/'
    experimentalOriginDependencies: true,
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 1,
      openMode: 0,
    }
  }

})
