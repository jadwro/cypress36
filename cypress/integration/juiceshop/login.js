/// <reference types="cypress" />

describe("Logowanie i rejestracja", () => {
    const randomText = Math.random().toString(36).substring(2);
    const newUser = "TestUser" + randomText;
    const newEmail = randomText + "@jadwro.com";
    const pass = "Password1.";

    it("Rejestracja i zalogowanie", () => {
        cy.visit("http://localhost:3000");

        cy.get('a[aria-label="dismiss cookie message"').click();
        cy.get('button[aria-label="Close Welcome Banner"]').contains('Dismiss').click();
        cy.get('#navbarAccount').click();
        cy.get('#navbarLoginButton').should('be.visible').should('contain.html', 'Login').click();
        cy.get('#newCustomerLink').click();
        cy.get('#emailControl').type(newEmail);
        cy.get('#passwordControl').type(pass);
        cy.get('#repeatPasswordControl').type(pass);
        cy.get('#mat-select-value-3').click();
        cy.get('mat-option').then($el => {
            cy.get($el[4]).click();
        });
        cy.get('#registerButton').should('be.disabled');
        cy.get('#securityAnswerControl').type("answer");
        cy.get('#registerButton').should('be.enabled').click();
        cy.get('.mat-simple-snack-bar-content').should('contain.text', 'completed successfully');

        cy.get('#email').type(newEmail);
        cy.get('#password').type(pass);
        cy.get('#loginButton').click();

        cy.get('button[aria-label="Show the shopping cart"]').should('contain', 'Your Basket');
    });
});