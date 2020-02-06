// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get('[name="username"]').type('admin');
    cy.get('[name="password"]').type('123456');
    cy.get('.login > .button').click();
    cy.contains('Account Services').should('be.visible');
});

Cypress.Commands.add('logout', () => {
    //Locate log out link on the home page
    cy.contains('Log Out').click();
    // Check if it is back to the login page
    cy.get('#loginPanel').should('be.visible');
});

Cypress.Commands.add(
    'selectNth',
    { prevSubject: 'element' },
    (subject, pos) => {
        cy.wrap(subject)
            .children('option')
            .eq(pos)
            .then(e => {
                cy.wrap(subject).select(e.val())
            })
    }
);