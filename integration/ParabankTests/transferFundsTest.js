describe('To test opening new account', function () {
    before(() => {
        //Login
        cy.login();
    });

    after(() => {
        cy.logout();
    });

    it('Transfer Funds', function () {
        // Precondition: 
        //Go to Accounts overview to check if there are more than 2 accounts.
        const $account_num = Cypress.$('[ng-repeat="account in accounts"]');
        if ($account_num.length < 2) {
            // click on Open New Account
            cy.contains('Open New Account').click();
            cy.wait(2000);
            // Select the type of account
            cy.get('#type').select('1');  // SAVINGS
            // Use the default account
            cy.get('#fromAccountId').selectNth(0);
            // Click on Open New Account button
            cy.get('[value="Open New Account"]').click();
            cy.contains('Account Opened!').should('be.visible');
        };

        // Go to Transfer Funds
        cy.contains('Transfer Funds').click();
        // Locate Amount field
        // Input $100
        cy.wait(3000);
        cy.get('#amount').type('100');
        // Choose the first account in the list

        cy.get('#fromAccountId').selectNth(0);
        // Choose the second account in the list
        cy.get('#toAccountId').selectNth(1);
        // Click on Transfer
        cy.get('[value="Transfer"]').click();
        // Check if transaction is completed
        cy.contains('Transfer Complete!').should('be.visible');
    })
});