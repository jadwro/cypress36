/// <reference types="Cypress" />

describe('Weryfikacja radio', () => {
    it('Zaznacz i sprawdź radio', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force:true });
        
        cy.get('#radio-buttons').find('input[type="radio"]').first().check();
        cy.get('#radio-buttons').find('input[type="radio"]').eq(1).check();
    });

    it.only('Zaznacz i sprawdź radio z disabled', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force:true });
        
        cy.get('#radio-buttons-selected-disabled').find('input[type="radio"]').first().check();
        cy.get('#radio-buttons-selected-disabled').find('input[type="radio"][value="cabbage"]').should('be.disabled');
        cy.get('#radio-buttons-selected-disabled').find('input[type="radio"]').eq(1).check({force:true});
        cy.get('#radio-buttons-selected-disabled').find('input[type="radio"]').last().check();
    });
});