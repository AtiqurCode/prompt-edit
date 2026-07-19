// https://on.cypress.io/api

describe('Prompt Edit sales page', () => {
  it('loads the hero and tools mosaic', () => {
    cy.visit('/')
    cy.contains('h1', 'You bring the course.')
    cy.get('#tools').should('exist')
    cy.contains('What you can access')
  })

  it('toggles exclusive unmute from a preview control', () => {
    cy.visit('/')
    cy.get('#tools').scrollIntoView()
    cy.get('#tools button[aria-pressed]').first().as('soundBtn')
    cy.get('@soundBtn').click()
    cy.get('@soundBtn').should('have.attr', 'aria-pressed', 'true')
    cy.get('@soundBtn').click()
    cy.get('@soundBtn').should('have.attr', 'aria-pressed', 'false')
  })
})
