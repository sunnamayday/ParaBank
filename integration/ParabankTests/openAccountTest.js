describe('To test opening new account', function () {
    before(() => {

        //Login
        cy.login()
    });

    after(() => {
        cy.logout();
    });

    // Click open new account
    it.only('open new account', function () {
        // click on Open New Account
        cy.contains('Open New Account').click();
        cy.wait(5000);
        // Select the type of account
        cy.get('#type').selectNth(0);  // CHECKING
        // Use the default account
        cy.get('#fromAccountId').selectNth(0);
        // Click on Open New Account button
        cy.get('[value="Open New Account"]').click();
        // cy.get('[value="Open New Account"]').click();
        cy.contains('Account Opened!', { timeout: 10000 }).should('be.visible');

    })
});