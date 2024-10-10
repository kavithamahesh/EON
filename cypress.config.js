const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
 e2e: {
   specPattern: "**/*.feature",
   setupNodeEvents(on, config) {
    on('task', {
      log(message) {
        console.log(message)

        return null
      },
    }),
     on("file:preprocessor", cucumber());
   },
   env: {
    base_url: 'www.saucedemo.com'
  },
  // defaultCommandTimeout: 15000,
  // blockHosts: [ 'events.backtrace.io'],
 },
});