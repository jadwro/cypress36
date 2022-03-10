/// <reference types="cypress" />

describe("Randomowe", () => {
    it.only("Wynik z google", () => {
        cy.visit('http://www.google.pl');
        cy.get('#L2AGLb > .QS5gu').click();
        cy.get('input[aria-label="Szukaj"]').type('Cała Polska w cieniu Śląska');
        cy.get('input[aria-label="Szukaj w Google"]').then($el => {
            cy.wrap($el[1]).click({force:true});
        });
        cy.get('a > h3').eq(0).siblings('div').should('contain', 'https://pl-pl.facebook.com › calapolskawcieniuslaska');
    });
});