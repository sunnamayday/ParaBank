describe('To test opening new account', function(){
    before(()=>{
        // Login
        cy.login();
    });

    after(()=>{
        // Logout
        cy.logout();
    });

    it('Test finding transaction by amount', function(){
        // Precondition: Create a transaction
        // Go to Transfer Funds
        cy.contains('Transfer Funds').click();
        // Input $88
        cy.wait(3000);
        cy.get('#amount').type('88');
        // Choose the first account in the list

        cy.get('#fromAccountId').selectNth(0);
        // Choose the second account in the list
        cy.get('#toAccountId').selectNth(1);
        // Click on Transfer
        cy.get('[value="Transfer"]').click();
        // Check if transaction is completed
        cy.contains('Transfer Complete!').should('be.visible');
    

        // Click on Find Transactions link
        cy.contains('Find Transactions').click();
        // Locate find by amount field, then input the amount
        cy.get('#criteria\\.amount').type('88');
        // Click on Find Transactions button
        cy.get('form .button').last().click();
        // Check if the result is showing up
        cy.get('#transactionTable td>span').last().then($result_value=>{
            expect($result_value.text()).to.eq('$88.00');
        })
        cy.screenshot();
    })
});