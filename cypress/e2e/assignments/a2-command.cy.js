///<reference types="cypress" />

describe('Custom command assignment', () => {
  it('should login with calid creadentials', () => {
    cy.CustomLogin('standard_user', 'pwd');

    cy.contains('Welcome, standard_user!')
  });

  it('should login failed with unvalid credentials', () => {
    cy.CustomLogin('standard_user', 'unvalid');
    
    cy.contains('Invalid username/password');
  });
})
