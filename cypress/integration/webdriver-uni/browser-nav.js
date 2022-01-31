/// <reference types="Cypress" />

describe('Homepage links', () => {
    it('Weryfikacja linków', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force:true });
        cy.url().should('include', 'contactus');
        back();
        cy.reload();  //true - bez cash
        cy.go('forward');
        cy.url().should('include', 'contactus');
        back();
        cy.get('#login-portal').invoke('removeAttr', 'target').click({ force:true });
        cy.url().should('include', 'Login-Portal');
        back();
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({ force:true });
        cy.url().should('include', 'To-Do-List');
        cy.get('ul > li').should('have.length', 3);
        cy.get('ul > li').find('span').then(e => {
            cy.wrap(e).eq(0).click({ force:true });
            cy.wrap(e).eq(1).click({ force:true });            
        }).then(e => {
            expect(e.length).to.eq(1);
        });
        back();
        cy.url().should('not.include', 'To-Do-List');
    });
});

function back() {
    return cy.go('back');
}