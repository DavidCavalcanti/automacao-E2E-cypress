const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    standard_user: 'standard_user', 
    locked_user: 'locked_out_user',
    password: 'secret_sauce',
    urlLogged: 'https://www.saucedemo.com/inventory.html'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,    
  },
});
