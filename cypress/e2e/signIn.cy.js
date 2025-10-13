/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // 1. Odwiedzenie strony logowania
    cy.visit('https://react-redux.realworld.io/#/login');

    // 2. Wpisanie poprawnego e-maila i hasła
    cy.get('input[type="email"]').type('twój_email@example.com');
    cy.get('input[type="password"]').type('TwojeHaslo123');

    // 3. Kliknięcie przycisku [Sign In]
    cy.get('button[type="submit"]').click();

    // 4. Sprawdzenie, czy nazwa użytkownika pojawiła się w nagłówku
    cy.get('nav').contains('TwojaNazwaUzytkownika').should('exist');
  });
});
