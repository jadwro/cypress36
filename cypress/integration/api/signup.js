/// <reference types="cypress" />

describe("Rejestracja i logowanie", () => {

    const randomStr = Math.random().toString(36).substring(2);
    const userName = 'Auto' + randomStr;
    const email = randomStr + '@aa.pl';
    const pass = 'Password1';

    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });
    
    it("Poprawna rejestracja", () => {
        cy.intercept({
            method: "POST",
            url: "**/*.realworld.io/api/users"
        }).as('newUser');

        cy.get('.nav').contains('Sign up').click();
        cy.get('input[placeholder="Username"]').type(userName);
        cy.get('input[placeholder="Email"]').type(email);
        cy.get('input[placeholder="Password"]').type(pass);
        cy.get('.btn').contains('Sign up').click();

        cy.wait('@newUser').should(({request, response}) => {
            expect(response.statusCode).to.eq(200);
            expect(request.body.user.username).to.eq(userName);
            const res = JSON.stringify(response);
            cy.log('token: ' + response.body.user.token);
        });
    });

    it("Poprawne logowanie i mokowanie tagów", () => {
        cy.intercept("GET", "**/tags", {
            fixture: 'tags.json'
        });
        
        cy.get('.nav').contains('Sign in').click();
        cy.get('input[placeholder="Email"]').type(email);
        cy.get('input[placeholder="Password"]').type(pass);
        cy.get('.btn').contains('Sign in').click();
        cy.get(':nth-child(4) > .nav-link').contains(userName);

        cy.get('.tag-list').should('contain', 'Śląsk');
    });

    it("Mokowanie artykułów", () => {
        cy.intercept("GET", "**/*.realworld.io/api/articles*", {
            fixture: "articles.json"
        }).as('arts');

        cy.intercept("GET", "**/tags", {
            fixture: 'tags.json'
        });

        cy.get('.nav-link').contains('Global Feed').click();
        cy.wait('@arts');
        cy.log("Po załadowaniu art");
    });
});