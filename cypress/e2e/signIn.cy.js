/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Otwórz stronę logowania
    cy.visit('https://react-redux.realworld.io/#/login');

    // Wypełnij email i hasło
    cy.get('input[type="email"]').type('joannakoloczek1@gmail.com');
    cy.get('input[type="password"]').type('Szczurojeb55!');

    // Kliknij przycisk Sign In
    cy.get('button[type="submit"]').click();

    // Sprawdź, czy username pojawił się w nagłówku
    cy.get('nav.navbar').contains('jo').should('be.visible');
  });
});

