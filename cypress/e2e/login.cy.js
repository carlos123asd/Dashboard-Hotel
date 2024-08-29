beforeEach(() => {
  cy.visit('http://localhost:5173/login')
})

it('invalid', () => {
  cy.get('#username').type('admin')
  cy.get('#password').type('admin')
  cy.get('#login').click()
  cy.get('.toastify-center').should('be.visible')
  cy.get('.toastify-center').should('have.text','❔ User not found!!')
  cy.url().should('eq', 'http://localhost:5173/login')
})

it('passes', () => {
  cy.get('#username').clear().type('Tonya82@gmail.com')
  cy.get('#password').clear().type('admin')
  cy.get('#login').click()
  cy.get('.toastify-center').should('be.visible')
  cy.get('.toastify-center').should('have.text','🏠 Bienvenido!!')
  cy.wait(3000)
  cy.get('#emailprofile').should('have.text','Tonya82@gmail.com')
  cy.url().should('eq', 'http://localhost:5173/')
})

it('logout', () => {
  cy.get('#username').clear().type('Tonya82@gmail.com')
  cy.get('#password').clear().type('admin')
  cy.get('#login').click()
  cy.wait(3000)
  cy.get('#logoutt').click()
  cy.get('.toastify-center').should('be.visible')
  cy.get('.toastify-center').should('have.text','Hasta Luego 👋🏻')
  cy.wait(3000)
  cy.url().should('eq', 'http://localhost:5173/login')
})

