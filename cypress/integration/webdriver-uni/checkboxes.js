/// <reference types="Cypress" />

describe('Weryfikacja checkboxów', () => {
    it('Zaznacz i sprawdź checkbox', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force:true });
        
        cy.get('#checkboxes > :nth-child(1) > input').as('opt1');
        cy.get('#checkboxes > :nth-child(5) > input').as('opt3');
        cy.get('@opt1').check().should('be.checked');;
        cy.get('@opt1').uncheck().should('not.be.checked');
        cy.get('@opt3').should('be.checked');
        cy.get('@opt3').uncheck().should('not.be.checked');
    });

    it.only('Multiple checkbox', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force:true });
        
        cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked');
    });
});