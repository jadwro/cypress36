/// <reference types="Cypress" />

describe('IFrame & Modals', () => {
    it('Obejścia dla IFrame', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force:true });
        
        cy.get('#frame').then(iframe => {
            const body = iframe.contents().find('body');
            cy.wrap(body).as('iBody');
        });

        cy.get('@iBody').find('#button-find-out-more').click();
        cy.get('@iBody').find('#myModal').as('modal');
        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text();
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods');
        });
        cy.get('@modal').find('[data-dismiss="modal"]').contains('Close').click();
    });
});