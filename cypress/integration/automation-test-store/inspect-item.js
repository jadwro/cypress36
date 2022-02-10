/// <reference types="Cypress" />

describe('Chain of commands - produkty ze sklepu', () => {
    it('Kliknij w pierwszy produkt (jego nagłówek)', () => {
        cy.visit('https://automationteststore.com/'); 
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    });

    it('Kliknij w pierwszy produkt poprzez jego tekst', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').contains('SKINSHEEN BRONZER STICK', { matchCase: false }).click().then((text) => {
            console.log("Nazwa produktu " + text.text());
        });
    });

    it('Kliknij w pierwszy produkt poprzez jego indeks', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).should('have.text', 'Skinsheen Bronzer Stick').click();
    });
});