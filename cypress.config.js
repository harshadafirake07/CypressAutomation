const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: "9twttj",
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    specPattern: "cypress/e2e/Pages/*.cy.js",
    screenshotsFolder: 'cypress/ss/screenshots',
    videosFolder: 'cypress/videos',
    video: true
    
  },
});
