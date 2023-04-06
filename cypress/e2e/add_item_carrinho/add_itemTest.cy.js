/// <reference types="cypress" />

import { locators as locator } from "../../support/locators";

describe('Item added to cart ', () => {
    beforeEach(() => {
        cy.loginSwag();
    })

    it(` Item successfully added to cart  by ${Cypress.env('standard_user')}`, () => {
        cy.fixture('items').then((item) => {
            cy.addItemCar(item.Bike)
        })
        cy.logoutSwag()
    })

})