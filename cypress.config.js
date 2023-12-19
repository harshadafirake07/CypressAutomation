const { defineConfig } = require("cypress");
module.exports = defineConfig({

  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    specPattern: "cypress/e2e/Pages/*.cy.js",
    screenshotsFolder: 'cypress/ss/screenshots',
    videosFolder: 'cypress/vv/videos'
    
  },
});
