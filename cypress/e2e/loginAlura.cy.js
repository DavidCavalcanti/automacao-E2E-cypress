describe('login', () => {
    
    beforeEach(() => {
        cy.loginSessionAlura()
        cy.visit('https://alura-fotos.herokuapp.com/')
    })

    it('login problem', () => {
        
        cy.contains('Logout')
    })
})