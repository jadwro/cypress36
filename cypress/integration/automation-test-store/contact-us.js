/// <reference types="Cypress" />

describe('Contact Us form at Automation Test Store', () => {
    it('Poprawne wypełnienie pól i wysłanie danych', () => {
        cy.visit('https://automationteststore.com/'); 
        cy.get('a[href$="contact"]').click().then(link => {
            cy.log("Tekst linka: " + link.text());
        });
        // cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('#ContactUsFrm_first_name').type('Michał');
        cy.get('#ContactUsFrm_email').type('aaa@bbb.pl');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('Jakiś tekst');
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
});