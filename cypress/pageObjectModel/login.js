///<reference types="cypress" />

export class Login {
  loginPage (username, password) {
    cy.visit('http://www.uitestingplayground.com/sampleapp');
    cy.get('input[name="UserName"]').type(username);
    cy.get('input[name="Password"]').type(password);
    cy.get('button#login').click(); 
  }
}
