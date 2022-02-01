/// <reference types="Cypress" />

describe('Formularze z autowypełnianiem', () => {
    it('Wybierz wartość z autouzupełniania', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force:true });
        
        cy.get('#myInput').type('A');
        cy.get('#myInputautocomplete-list > *').each(el => {
            const prod = el.text();
            const toSelect = 'Almond';
            if(prod === toSelect) {
                cy.wrap(el).click();
                cy.get('#submit-button').click();
                cy.url().should('contain', toSelect);
            }
        }).then(() => {
            cy.get('#myInput').type('G');
            cy.get('#myInputautocomplete-list > *').each(el => {
                const prod = el.text();
                const toSelect = 'Grapes';
                if(prod === toSelect) {
                    cy.wrap(el).click();
                    cy.get('#submit-button').click();
                    cy.url().should('contain', toSelect);
                }   
            });
        });
    });
});