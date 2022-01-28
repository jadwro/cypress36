/// <reference types="Cypress" />

describe('Sprawdzanie zmiennych i jQuery', () => {
    it('Nawigacja do strony produktu z głównego menu', () => {
        cy.visit('https://automationteststore.com/');        
        cy.get('a[href*="product/category&path="]').contains('Makeup').click();
        cy.get('a[href*="product/category&path="]').contains('Skincare').click();
    });

    it.only('Nawigacja do strony produktu z głównego menu', () => {
        cy.visit('https://automationteststore.com/');        
        cy.get('a[href*="product/category&path="]').contains('Makeup').click();

        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text();
            cy.log(headerText);
            console.log($headerText);
            console.log($headerText[0].textContent);
        });
    });
});