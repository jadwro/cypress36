/// <reference types="Cypress" />

describe('Iteracje', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/');        
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
    });

    it('Produkty Hair Care', () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + ": " + $el.text());
        });
    });

    it('Dodawanie produktu do koszyka', () => {

        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if($el.text().includes('Eau Parfumee au The Vert Shampoo')) {
        //         cy.wrap($el).click();
        //     }
        // });
        
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    });

    it.only('Dodawanie produktu do koszyka', () => {        
        cy.selectProduct('Seaweed Conditioner');
    });
});