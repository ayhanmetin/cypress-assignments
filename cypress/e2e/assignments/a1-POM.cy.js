///<reference types="cypress" />

import { Login } from "../../pageObjectModel/login";
const login = new Login();

describe('page object model assignment', () => {
  it('should login with valid credentials', () => {
    const username = 'standard_user';
    const password = 'pwd';
    login.loginPage(username, password);

    cy.contains('Welcome, standard_user!');
  });

  it.only('should login failed with unvalid credentials', () => {
    const username = 'user';
    const password = 'failed';
    login.loginPage(username, password);

    cy.contains('Invalid username/password');
  });
});
