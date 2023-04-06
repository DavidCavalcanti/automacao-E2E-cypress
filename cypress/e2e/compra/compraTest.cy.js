/// <reference types="cypress"/>

describe('Buy item', () => {
    beforeEach(() => {
        cy.loginSwag()
    })

    it('Buyt item successfully', () => {
        cy.fixture('items').then((item) => {
            cy.buyProduct(item.Bike)
        })
        cy.logoutSwag()
    })
})