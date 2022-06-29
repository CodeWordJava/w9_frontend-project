Cypress.config('viewportHeight', 1500)
Cypress.config('viewportWidth', 1500)

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

      // commented to stop flood
    // cy.get("#submitButton")
    //   .click()
    
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

  // cy.visit('http://localhost:3000/');
  // cy.get('#navBar')
  //   .get('#slackButton')
  //   .click()

  cy.visit('http://localhost:3000/')
  cy.get('#navBar')
    .get('#topButton')
    .click()
  cy.url().should('include', '/#')
})
}
);

describe('Upvote Button Test', () => {
  it('increments by one', () => {
    cy.visit('http://localhost:3000/')
    // cy.get('#upvoteButton')
    // .click()
    cy.get('#voteCountId')
    .invoke('text')
    .then((i) => {
      cy.get('#upvoteButton').click()
      cy.visit('http://localhost:3000/')
      cy.contains('#voteCountId', (parseInt(i) + 1))
    })
  })
}
);

