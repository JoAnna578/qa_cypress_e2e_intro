const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io', // podstawowa strona
    setupNodeEvents(on, config) {
      // Możesz tu zostawić pustą funkcję lub dodać hooki
    },
    env: {
      USER_EMAIL: 'joannakoloczek1@gmail.com',
      USER_PASSWORD: 'Szczurojeb57!',
      USER_NAME: 'Jo'
    }
  }
});
