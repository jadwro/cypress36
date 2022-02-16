/// <reference types="cypress" />

describe("POST request", () => {

    let tytuly = new Array();
    let randomTitle = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
    randomTitle = randomTitle.charAt(0).toUpperCase() + randomTitle.slice(1); 

    it('Stwórz nowy post', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                title: randomTitle,
                author: "Marian"
            }
        }).then((res) => {
            expect(res.status).to.eql(201);
        });
    });

    it('Tytuł nowego posta', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then((res) => {
            let body = JSON.parse(JSON.stringify(res.body));
            body.forEach((item) => {
                tytuly.push(item['title']);
            });
        }).then(() => {
            let ostatni = tytuly[tytuly.length - 1];
            expect(ostatni).to.eq(randomTitle);
        });
    });

    it('Tytuł nowego posta mój', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then((res) => {
            let body = JSON.parse(JSON.stringify(res.body));
            let ostatni = body.length - 1;
            expect(body[ostatni].title).to.eq(randomTitle);
        });
    });
});