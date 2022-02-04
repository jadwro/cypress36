/// <reference types="Cypress" />

describe('Dodawanie kilku elementów do koszyka', () => {
    before(() => {
        cy.fixture('products').then((data) => {
            globalThis.data = data;
        });
    });
    beforeEach(() => {
        cy.visit('https://automationteststore.com/');        
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
    });

    it('Dodawanie konkretnego przedmiotu', () => {
        globalThis.data.productName.forEach((e) => {
            cy.addProduct(e);
        });
    });
});