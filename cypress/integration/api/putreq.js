/// <reference types="cypress" />

describe("PUT request", () => {

    it('Edycja postu', () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/2",
            body: {
                title: 'Zedytowany z Cypressa',
                author: "Marian Edytowany"
            }
        }).then((res) => {
            expect(res.status).to.eql(200);            
        });
    });
});