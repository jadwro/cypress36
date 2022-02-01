/// <reference types="Cypress" />

describe('Test mouse action', () => {
    it('Scrollowanie w dół', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force:true });       
    });

    it('Drag and drop element', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force:true });
        
        cy.get('#draggable').trigger('mousedown', { which: 1 });
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
    });

    it('Double click', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force:true }).then(() => {
            for(let i = 0; i < 10; i++) {
                cy.get('#double-click').trigger('dblclick');       
                cy.get('#double-click').dblclick();
            }
        });
    });

    it.only('Trzymanie wciśniętego LPM nad elementem', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force:true });
        
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then((el) => {
            expect(el).to.have.css('background-color', 'rgb(0, 255, 0)');
        });
    });
});