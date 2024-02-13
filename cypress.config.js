const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 15,
  defaultCommandTimeout: 15000,
  viewportHeight: 768,
  viewportWidth: 1400,
  env: {
    apiUrl: 'http://tamrah-testing.us-east-2.elasticbeanstalk.com/api',
    device: 'desktop',

},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://dev.dv2pt6nppfhmi.amplifyapp.com",
    testIsolation: false,

  },
});
