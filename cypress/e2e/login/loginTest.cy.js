/// <reference types="cypress" />

import { locators as locator } from "../../support/locators";

describe('Login', () => {
    beforeEach(() => {
        cy.loginSwag()
    })

    it(`Successful login for user: ${Cypress.env('standard_user')}`, () => {
        cy.validateUrl(Cypress.env('urlLogged'))
        cy.logoutSwag()       
    })

    it(`Login failed for user: ${Cypress.env('locked_user')}`, () => {
        cy.loginSwag(Cypress.env('locked_user'))
        cy.get(locator.LOGIN.MESSAGE_ERROR).should('be.visible')
    })
})