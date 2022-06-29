
describe('Input Form', () => {
    it('will test the input boxes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#topicInput')
      .type('React Test')
      .should('have.value', 'React Test')
    cy.get('#linkInput')
      .type('React Test')
      .should('have.value', 'React Test')

    cy.get("#usernameInput")
      .type("my username")
      .should("have.value", "my username")

    cy.get("#submitButton")
      .click()
    
    cy.get("#dropDown")
      .contains("Git")
    })
});

describe('NavBar test', () => {
it('testing all NavBar links', () => {
  cy.visit('http://localhost:3000/');
  cy.get('#navBar')
    .get('#submitButtonLink')
    .click()
  cy.url().should('include', '/#submitButton')

  cy.visit('http://localhost:3000/');
  cy.get('#navBar')
    .get('#slackButton')
    .click()

  cy.visit('http://localhost:3000/')
  cy.get('#navBar')
    .get('#topButton')
    .click()
  
})
}
);

