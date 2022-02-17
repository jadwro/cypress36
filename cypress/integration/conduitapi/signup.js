/// <reference types="cypress" />

describe("Rejestracja i logowanie", () => {
    
    it("Poprawna rejestracja", () => {
        cy.visit('http://localhost:4200');

        cy.get('.nav').contains('Sign up').click();
        cy.get('input[placeholder="Username"]').type('Auto' + Math.random().toString(36).substring(2));
    });
});