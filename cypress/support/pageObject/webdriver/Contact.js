class ContactUs {
    contactFormSubmit(firstName, lastName, email, comment, $selector, text) {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email);        
        cy.get('textarea.feedback-input').type(comment, {force:true});
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(text);
    }
}

module.exports = ContactUs;