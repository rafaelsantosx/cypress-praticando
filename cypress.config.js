const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2dbunq',
  allowCypressEnv: false,
  reporterOptions: {
    charts: true,
    reportTitle: 'Projeto do curso de cypress',
    reportPageTitle: 'Teste Rafael'
  },
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
