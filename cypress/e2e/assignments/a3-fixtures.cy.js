///<reference types="cypress" />

describe('Login using fixtures', () => {

  it('should login with calid creadentials ', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.fixture("example").then((data) =>{
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password);
            cy.get('.oxd-button').click();

            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', data.expected)
            cy.location('pathname').should('include', 'dashboard')
    })
  });

});

