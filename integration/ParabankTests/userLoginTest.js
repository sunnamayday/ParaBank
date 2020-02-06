describe('Login', function(){
    before(()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    });

    after(()=>{
        cy.logout();
    });

    it('Login', function(){
        // Input username and password
        cy.get('[name="username"]').type('beanworks@');
        cy.get('[name="password"]').type('123123');
        cy.get('.login > .button').click();
        cy.contains('Account Services').should('be.visible');
    })
});