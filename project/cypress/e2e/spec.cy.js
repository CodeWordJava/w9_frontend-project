
describe('Form Submit', () => {
    it('will test the input boxes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#topicInput').type('hello')
    })
})