describe('To test Bill Pay', function () {
    before(() => {

        //Login
        cy.login();
    });

    after(() => {
        // Logout
        cy.logout();
    });

    function randomNumber(length) {
        var chars = '0123456789';
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    it('Bill Pay Test', function () {
        
        //Click on bill pay
        cy.contains('Bill Pay').click();

        // Payee name
        cy.get('[name="payee.name"]').type('Hydro');
        // Address
        cy.get('[name="payee.address.street"]').type('123 san juan ave');
        // City
        cy.get('[name="payee.address.city"]').type('Victoria');
        // State
        cy.get('[name="payee.address.state"]').type('BC');
        // zip code
        cy.get('[name="payee.address.zipCode"]').type('v8n2j8');
        // phone number
        cy.get('[name="payee.phoneNumber"]').type('6042348888');
        // Account number
        const accountNum = randomNumber(5);
        cy.get('[name="payee.accountNumber"]').type(accountNum);
        // Verify Account number
        cy.get('[name="verifyAccount"]').type(accountNum);
        // Amount
        cy.get('[name="amount"]').type('38.88');
        // From Account, select the default option
        cy.get('[name="fromAccountId"]').selectNth(0);
        // Click on Send Money button
        cy.get('[value="Send Payment"]').click();
        // Check if the bill payment is completed
        cy.contains('Bill Payment Complete').should('be.visible');
    })
});