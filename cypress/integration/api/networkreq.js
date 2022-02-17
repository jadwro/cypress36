/// <reference types="cypress" />

describe("Network request", () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests');
    });

    it('Get request', () => {
        cy.intercept({
            method: "GET", 
            url: "**/comments/*"
        },
        {
            body: {
                postId: 1,
                id: 1,
                name: "testowe imie",
                email: "test@mail.pl",
                body: "testowe body"
            }
        }).as('getComment');

        cy.get('.network-btn').click();

        cy.wait('@getComment').its('response.statusCode').should('eq', 200);
    });

    it('Post request', () => {
        cy.intercept("POST", "**/comments").as('postComment');
        
        cy.get('.network-post').click();

        cy.wait('@postComment').should(({request, response}) => {
            console.log(request);
            console.log(response);
            expect(request.body).to.include('email');
            expect(response.body).to.have.property('email', 'hello@cypress.io');
            expect(request.headers).to.have.property('content-type');
        });
    });

    it('Put request', () => {
        cy.intercept({
            method: "PUT",
            url: "**/comments/*"
        },
        {
            statusCode: 404,
            body: { error: "Ni ma" },
            delay: 500
        }).as('putComment');

        cy.get('.network-put').click();

        cy.wait('@putComment');

        cy.get('.network-put-comment').should('contain', 'Ni ma');
    });
});