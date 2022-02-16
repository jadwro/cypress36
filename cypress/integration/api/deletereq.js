/// <reference types="cypress" />

describe("DELETE request", () => {

    it('Kasowanie postu', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/3"
        }).then((res) => {
            expect(res.status).to.eql(200);            
        });
    });
});