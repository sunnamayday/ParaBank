describe('Register', function () {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    });

    afterEach(() => {
        cy.logout();
    });

    function randomString(length) {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    it('Input the values to register', function () {
        cy.contains('Register').click();
        cy.contains('Signing up is easy!').screenshot();
        // input firstname
        const firstName = randomString(6);
        const lastName = randomString(6);
        cy.get('#customer\\.firstName').type(firstName);
        cy.get('#customer\\.lastName').type(lastName);
        cy.get('#customer\\.address\\.street').type('123 San Juan ave.');
        cy.get('#customer\\.address\\.city').type('Victoria');
        cy.get('#customer\\.address\\.state').type('BC');
        cy.get('#customer\\.address\\.zipCode').type('v1n2k9');
        cy.get('#customer\\.phoneNumber').type('6041231234');
        cy.get('#customer\\.ssn').type('123123');
        cy.get('#customer\\.username').type(randomString(8));
        const pwd = randomString(10);
        cy.get('#customer\\.password').type(pwd);
        cy.get('#repeatedPassword').type(pwd);
        cy.get('[value="Register"]').click();
        cy.contains('Account Services').should('be.visible');
    });
});