
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
})