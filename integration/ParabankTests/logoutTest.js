describe('To test opening new account', function () {
    before(() => {

        //Login
        cy.login();
    });

    it('Test logout', function () {
        cy.contains('Log Out').click();
        // Check if it is back to the login page
        cy.get('#loginPanel').should('be.visible');
    })
});