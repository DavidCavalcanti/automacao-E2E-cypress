describe('login', () => {
    
    beforeEach(() => {
        cy.loginSessionAlura()
        cy.visit(Cypress.env('baseUrlAlura'))
    })

    it('login problem', () => {
        
        cy.contains('Logout')
    })
})