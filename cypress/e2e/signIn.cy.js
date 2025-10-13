/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const primaryUrl = 'https://react-redux.realworld.io';
    const backupUrl = 'https://conduit.mate.academy';

    function visitLogin(url) {
      cy.visit(`${url}/#/login`, { failOnStatusCode: false }).then(($resp) => {
        if ($resp.status === 404 && url === primaryUrl) {
          visitLogin(backupUrl);
        }
      });
    }

    visitLogin(primaryUrl);

    cy.get('input[type="email"]').type(Cypress.env('USER_EMAIL'));
    cy.get('input[type="password"]').type(Cypress.env('USER_PASSWORD'));

    cy.contains('button', 'Sign in').click();

    cy.get('nav').contains('a', Cypress.env('USER_NAME')).should('be.visible');
  });
});

