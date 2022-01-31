/// <reference types="Cypress" />

describe('Alias i invoke', () => {
    it('Walidacja konkretnego produktu', () => {
        cy.visit('https://automationteststore.com/');        
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumb');
        cy.get('@productThumb').its('length').should('be.gt', 5);
        cy.get('@productThumb').should('include', 'Seaweed');
    });

    it.only('Liczba produktów', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').should('have.length', 16);
        cy.get('.thumbnail').find('.productcart').eq(0).invoke('attr', 'title').should('eq', 'Add to Cart');
    });
});