<reference types='cypress'/>

describe('Form Submit', () => {
    it('will test the input boxes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input').type('hello')
    })
})