describe('To test opening new account', function () {
    before(() => {
        //Login
        cy.login();
    });

    after(() => {
        // Logout
        cy.logout();
    });

    it('Account Overview', function () {
        // Click on Account Overview
        cy.contains('Accounts Overview').click();
        cy.get('.ng-binding').should('be.visible');
        cy.screenshot();
    })
});