/// <reference types="Cypress" />

describe('Operacje na tabelach', () => {
    it('Obliczenie całkowitego wieku użytkowników', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#data-table').invoke('removeAttr', 'target').click({ force:true });
        
        let sumAge = 0;
        cy.get('#thumbnail-1 td').each((el, index) => {
            let i = index+1;            
            if(i % 3 == 0) {
                sumAge += parseInt(el.text());
            }
        }).then(() => {
            cy.log("Mój sposób: " + sumAge);
        });
        

        let userDetails = [];
        let num = 0;
        cy.get('#thumbnail-1 td').each((el, index) => {
            userDetails[index] = el.text();
        }).then(() => {
            let i;
            for(i = 0; i < userDetails.length; i++) {
                if(Number(userDetails[i])) {
                    num += Number(userDetails[i]);
                }               
            }
            cy.log("Jego sposób: " + num);
        });
    });

    it('Sprawdzenie wieku na podstawie nazwiska', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#data-table').invoke('removeAttr', 'target').click({ force:true });

        cy.get('#thumbnail-1 tr td:nth-child(2)').each((el) => {
            const text = el.text();
            if(text.includes("Woods")) {
               cy.get(el).next().then(e => {
                   expect(Number(e.text())).to.equal(80);
               });
            }
        });
    });
});