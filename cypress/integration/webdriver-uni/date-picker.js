/// <reference types="Cypress" />

describe("Testowanie kalendarza", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    });
    
    it("Wybór daty z kalendarza", () => {
        let date = new Date();
        date.setDate(date.getDate() + 14);

        let day = date.getDate();
        let month = date.toLocaleString("default", { month: "long" });
        let year = date.getFullYear();

        cy.get('#datepicker').click();
        selectMonthYear();
        cy.get('.table-condensed td').not('.new').not('.old').each((e) => {
            if(e.text() == day) {
                cy.wrap(e).click();
            }
        });
        

        function selectMonthYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currDate) => {
                if(!currDate.text().includes(year)) {
                    cy.get('.next').first().click();
                    selectMonthYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currDate) => {
                    if(!currDate.text().includes(month)) {
                        cy.get('.next').first().click();
                        selectMonthYear();
                    }
                });
            });
        }
    });
});
