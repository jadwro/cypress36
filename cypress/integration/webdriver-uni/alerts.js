/// <reference types="Cypress" />

describe('Alerty JS', () => {
    it('Sprawdzenie treści alertu', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force:true });
        cy.get('.thumbnail')
            .contains('JavaScript Alert')
            .siblings()
            .find('span')
            .find('p')
            .should('contain.text', 'CLICK ME!')
            .click();
        cy.on('window:alert', (e) => {
            expect(e).to.equal("I am an alert box!");
        });
    });

    it('Sprawdzenie alertu z wyborem - ok', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force:true });
        cy.get('#button4').click();
        cy.on('window:alert', (e) => {
            return true;
        });
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });

    it('Sprawdzenie alertu z wyborem - cancel', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force:true });
        cy.get('#button4').click();
        cy.on('window:confirm', (e) => {
            return false;
        });
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    });

    it('Sprawdzenie alertu z wyborem - ze stub()', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force:true });
        
        const stub = cy.stub();
        cy.on('window:confirm', stub);
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        }); 
    });
});