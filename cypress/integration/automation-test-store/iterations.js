/// <reference types="Cypress" />

describe('Iteracja między produktami', () => {
    it('Wszystkie produkty', () => {
        cy.visit('https://automationteststore.com/');        
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
    });
});