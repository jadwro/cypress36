import HomePage from '../../support/pageObject/automationstore/Homepage';

/// <reference types="Cypress" />

describe('Dodawanie kilku elementów do koszyka', () => {
    const homepage = new HomePage();

    // beforeEach(() => {
    //     // cy.visit('https://automationteststore.com/');        
    //     // cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
    //     homepage.visitHomepage();
    // });

    it('klik link', () => {
        cy.visit('https://www.jadwro.pl')
        cy.get('a:visible').filter('[href]').each((link) => {
            cy.request(link.prop('href')).its('status').should('eq', 200)
        });
    });
});