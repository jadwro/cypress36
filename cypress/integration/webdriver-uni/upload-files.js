/// <reference types="Cypress" />

describe("Upload plików", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
    });
    
    it("Wgranie pliku", () => {
        cy.fixture('file.png', 'base64').then((fileContent) => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "file.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            );
        });
        cy.get('#submit-button').click();
        cy.on('window:alert', e => {
            expect(e).to.equal('Your file has now been uploaded!');
        });
    });

    it("Wgranie braku pliku", () => {        
        cy.get('#submit-button').click();
        cy.on('window:alert', (e) => {
            expect(e).to.equal('You need to select a file to upload!');
        });
    });
});
