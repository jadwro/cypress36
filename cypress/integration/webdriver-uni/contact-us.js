/// <reference types="Cypress" />

describe('Testowanie contact us webdriveruniversity', () => {
    it('Poprawne wypełnienie pól i wysłanie danych', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('contain', 'Contact-Us');
        cy.get('[name="first_name"]').type("WKS");
        cy.get('[name="last_name"]').type("Śląsk");
        
        cy.get('[name="email"]').type("aaa@bbb.pl").then((odp) => {            
            console.log('przerwa na kod ');
            console.log(odp);
        });
        
        cy.get('textarea.feedback-input').type("lorem ipsum");
        cy.get('[type="submit"]').click();
        cy.get('#contact_reply').find('h1').should('have.text', 'Thank You for your Message!');
        cy.get('#contact_reply').find('h1').should(($h1) => {
            expect($h1).to.contain.text('Thank You');
            expect($h1).to.be.visible;
        });
        cy.get('#contact_reply').contains('h1', 'Thank You for your message!', { matchCase: false }).should('exist');
    });

    it('Niepoprawna ścieżka, nie wszystkie pola są wypełnione', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type("WKS");
        cy.get('[name="last_name"]').type("Śląsk");        
        cy.get('textarea.feedback-input').type("Cała Polska w cieniu Śląska");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
        cy.get('body').contains('Error: Invalid email address');
    });
    
    it.only('Działa otwieranie nowego okna?', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('.col-sm-12.col-lg-12.col-md-12').find('a').eq(0).invoke('removeAttr', 'target');
        cy.get('.thumbnail .section-title')
            .eq(0)
            .parents('a')
            .should('have.attr', 'href', 'Contact-Us/contactus.html')
            // .contains('h1', 'CONTACT US')
            .should('contain.text', 'CONTACT US')
            .click();

        cy.get('[name="first_name"]').type("WKS");
        cy.get('[name="last_name"]').type("Śląsk");        
        cy.get('textarea.feedback-input').type("Cała Polska w cieniu Śląska");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
        cy.get('body').should('contain.text', 'Error: Invalid email address');
    });
});