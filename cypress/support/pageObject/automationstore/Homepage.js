class HomePage {
    visitHomepage() {
        cy.visit('https://automationteststore.com/');
    }

    clickHaircare() {
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
    }
}

export default HomePage;