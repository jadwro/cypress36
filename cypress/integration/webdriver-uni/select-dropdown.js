/// <reference types="Cypress" />

describe('Interakcje z listami, dropdown', () => {
    it('Wybierz wartość z selecta', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force:true });
        
        cy.get('#dropdowm-menu-1').select('sql'); //by value
        cy.get('#dropdowm-menu-2').select('JUnit');
        cy.get('#dropdowm-menu-3').select('JQuery'); //by text
    });
});