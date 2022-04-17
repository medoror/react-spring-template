/// <reference types="cypress" />
describe('As Demi the Demo\'er', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should see demo text on home page', () => {
    cy.get('.App-link').should('have.text', "Learn React")
  })
})
