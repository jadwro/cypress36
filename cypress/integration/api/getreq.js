/// <reference types="cypress" />

describe("GET request", () => {
    let result;
    it("Sprawdzanie kodu odpowiedzi", () => {
        result = cy.request('http://localhost:3000/posts');
        result.its('status').should('equal', 200);
    });

    it('Sprawdzenie czy post zawiera coś', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then((res) => {
            let body = JSON.parse(JSON.stringify(res.body));            
            expect(body[0]).has.property('title', 'Example Json Server');
            expect(body[1]).has.property('author', 'Zwczoraj');

            body.forEach((item) => {
                expect(item).to.have.all.keys('id', 'title', 'author');
                cy.log(`ID: ${item['id']}, author: ${item['author']}, title: ${item['title']}`)
            });
        });
    });

    it('klik link', () => {
        cy.visit('http://localhost:3000');
        
        cy.wait(50);
        cy.get('a').contains('posts').then(e => {
            cy.log(e.text());
        });
        cy.get('a').each((link, i) => {
            if(i !== 2) {
                cy.request(link.prop('href')).its('status').should('eq', 200)
            }
        });
    });
});