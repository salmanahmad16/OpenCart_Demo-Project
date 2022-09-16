const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pp73yh',
  e2e: {
    watchForFileChanges: false,
    chromeWebSecurity: false,
    responseTimeout:60000,
    defaultCommandTimeout: 70000,
    pageLoadTimeout: 70000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
