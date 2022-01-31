/// <reference types="Cypress" />

describe('Sprawdzanie zmiennych i jQuery', () => {
    it('Nawigacja do strony produktu z głównego menu', () => {
        cy.visit('https://automationteststore.com/');        
        cy.get('a[href*="product/category&path="]').contains('Makeup').click();
        cy.get('a[href*="product/category&path="]').contains('Skincare').click();
    });

    it('Nawigacja do strony produktu z głównego menu', () => {
        cy.visit('https://automationteststore.com/');        
        cy.get('a[href*="product/category&path="]').contains('Makeup').click();

        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text();
            cy.log(headerText);
            console.log($headerText);
            console.log($headerText[0].textContent);
            expect(headerText).is.eq('Makeup');
        });
    });

    it.only('Walidacja Contact us', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        
        // Chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //jQuery
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name');

            cy.get('#field_11').then(scText => {
                cy.log(scText.text());
            });
        });
    });
});