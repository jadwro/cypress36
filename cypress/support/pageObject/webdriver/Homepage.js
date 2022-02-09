class HomePage {
    visitHomepage() {
        cy.visit(Cypress.env('webDriveUrl'));
    }

    visitCheckboxesPage() {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force:true });
    }

    visitContactPage() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force:true });
    }
}

module.exports = HomePage;