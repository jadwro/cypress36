class Haircare {

    addProduct() {
        globalThis.data.productName.forEach((e) => {
            cy.get('.fixed_wrapper .prdocutname').each(($el, index) => {
                if($el.text() === e) {
                    cy.get('.productcart').eq(index).click({force:true});
                }
            });
            // cy.get('.dropdown-toggle > .fa').click();
        });
    }
}

export default Haircare;