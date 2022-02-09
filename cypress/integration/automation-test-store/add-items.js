import HomePage from '../../support/pageObject/automationstore/Homepage';
import Haircare from '../../support/pageObject/automationstore/Haircare';

/// <reference types="Cypress" />

describe('Dodawanie kilku elementów do koszyka', () => {
    const homepage = new HomePage();
    const haircare = new Haircare();

    before(() => {
        cy.fixture('products').then((data) => {
            globalThis.data = data;
        });
    });
    beforeEach(() => {
        // cy.visit('https://automationteststore.com/');        
        // cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
        homepage.visitHomepage();
        homepage.clickHaircare();
    });

    it('Dodawanie konkretnego przedmiotu', () => {
        haircare.addProduct();
    });
});