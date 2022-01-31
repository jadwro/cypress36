/// <reference types="Cypress" />

describe('Iteracje', () => {
    it('Produkty Hair Care', () => {
        cy.visit('https://automationteststore.com/');        
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + ": " + $el.text());
        });
    });

    it.only('Dodawanie produktu do koszyka', () => {
        cy.visit('https://automationteststore.com/');        
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Eau Parfumee au The Vert Shampoo')) {
                cy.wrap($el).click();
            }
        }); 
    });
});