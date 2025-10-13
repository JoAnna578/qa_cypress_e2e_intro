const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://react-redux.realworld.io',
    env: {
      USER_EMAIL: 'joannakoloczek1@gmail.com',
      USER_PASSWORD: 'Szczurojeb57!',
      USER_NAME: 'Jo'
    }
  }
});

