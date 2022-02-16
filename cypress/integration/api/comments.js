/// <reference types="cypress" />

describe("Flow komentarzy", () => {

    it('Poprawne pobranie', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/comments",
            headers: {
                accept: "application/json"
            }
        }).then((res) => {
            expect(res.status).to.eql(200);            
        });
    });

    it('Poprawne dodanie, edytowanie i kasowanie', () => {
        let randomCont = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
        let newId;

        cy.request({
            method: "POST",
            url: "http://localhost:3000/comments",
            body: {
                body: randomCont,
                postId: 1
            }
        }).then((res) => {
            let body = JSON.parse(JSON.stringify(res.body));
            newId = body.id;          
            expect(res.status).to.eql(201);
        }).then(() => {            
            cy.request({
                method: "GET",
                url: "http://localhost:3000/comments",
                headers: {
                    accept: "application/json"
                }
            });
        }).then((res) => {
            let body = JSON.parse(JSON.stringify(res.body));
            expect(body[body.length-1].id).to.eq(newId);
        }).then(() => {
            cy.request({
                method: "PUT",
                url: "http://localhost:3000/comments/" + newId,
                body: {
                    body: "Edytowane body"
                }
            });
        }).then((res) => {
            expect(res.status).to.eq(200);
        }).then(() => {
            cy.request({
                method: "DELETE",
                url: "http://localhost:3000/comments/" + newId
            });
        }).then((res) => {
            expect(res.status).to.eq(200);
        });
    });
});