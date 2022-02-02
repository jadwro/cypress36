/// <reference types="Cypress" />

describe("Hooks", () => {
    before(() => {
        cy.log('runs once before all tests');
    });

    after(() => {
        cy.log('runs once all tests are done');
    });

    beforeEach(() => {        
        cy.log('runs before every test block');
    });

    afterEach(() => {
        cy.log('runs after each test block');
    });

    it("Test 1", () => {
        cy.log("Przykładowy test 1")
    });

    it("Test 2", () => {
        cy.log("Przykładowy test 2")
    });
});
