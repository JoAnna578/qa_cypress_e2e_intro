/// <reference types="cypress" />

// Ignoruj nieobsłużone wyjątki po stronie aplikacji
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const primaryUrl = 'https://react-redux.realworld.io';
    const backupUrl = 'https://conduit.mate.academy';

    // Funkcja odwiedzająca stronę logowania z fallbackiem
    function visitLogin(url) {
      cy.visit(`${url}/#/login`, { failOnStatusCode: false }).then(($resp) => {
        if ($resp.status === 404 && url === primaryUrl) {
          visitLogin(backupUrl);
        }
      });
    }

    visitLogin(primaryUrl);

    // Wypełnij pola danymi z Cypress.env
    cy.get('input[type="email"]').type(Cypress.env('USER_EMAIL'));
    cy.get('input[type="password"]').type(Cypress.env('USER_PASSWORD'));

    // Przechwytujemy request logowania, aby poczekać na odpowiedź
    cy.intercept('POST', '**/users/login').as('loginRequest');

    // Kliknij przycisk Sign in
    cy.contains('button', 'Sign in').click();

    // Czekaj na zakończenie requestu logowania
    cy.wait('@loginRequest');

    // Sprawdź, czy username pojawił się w nagłówku po zalogowaniu
    cy.get('nav').contains('a', Cypress.env('USER_NAME'), { timeout: 10000 }).should('be.visible');
  });
});


