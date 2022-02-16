/// <reference types="cypress" />

describe("POST request", () => {

    it('Stwórz nowy post', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                title: "Dodany z Cypressa",
                author: "Marian"
            }
        }).then((res) => {
            expect(res.status).to.eql(201);
        });
    });
});