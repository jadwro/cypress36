/// <reference types="Cypress" />

describe('Alias i invoke', () => {
    it('Walidacja konkretnego produktu', () => {
        cy.visit('https://automationteststore.com/');        
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumb');
        cy.get('@productThumb').its('length').should('be.gt', 5);
        cy.get('@productThumb').should('include', 'Seaweed');
    });

    it('Liczba produktów', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('product');
        cy.get('@product').should('have.length', 16);
        cy.get('@product').find('.productcart').eq(0).invoke('attr', 'title').should('eq', 'Add to Cart');
    });

    it('Obliczenie produktów przecenionych i zwykłych', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('product');
        // cy.get('@product').find('.price').each(el => {
        //     cy.log(el.text());
        // });
        cy.get('@product').find('.oneprice').invoke('text').as('price');
        cy.get('@product').find('.pricenew').invoke('text').as('priceSale');
        
        let priceAll = 0;
        cy.get('@price').then(el => {
            let price = el.split('$');
            let total = 0;
            let i;
            for(i = 0; i < price.length; i++) {
                total += Number(price[i]);
            }
            priceAll += total;
            cy.log('Total price non sale: ' + total);
            cy.log('Total price: ' + priceAll);
        });
        cy.get('@priceSale').then(el => {
            let price = el.split('$');
            let total = 0;
            let i;
            for(i = 0; i < price.length; i++) {
                total += Number(price[i]);
            }
            priceAll += total;
            cy.log('Total price non sale: ' + total);
            cy.log('Total price: ' + priceAll);
        })
        .then(() => {
            expect(priceAll).to.equal(648.5);
        });
    });
});