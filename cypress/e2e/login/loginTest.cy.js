/// <reference types="cypress" />

import { locators as locator } from "../../support/locators";

describe('Login', () => {
    beforeEach(() => {
        cy.login()
    })

    it(`Successful login for user: ${Cypress.env('standard_user')}`, () => {
        cy.validateUrl(Cypress.env('urlLogged'))
        cy.logout()       
    })

    it(`Login failed for user: ${Cypress.env('locked_user')}`, () => {
        cy.login(Cypress.env('locked_user'))
        cy.get(locator.LOGIN.MESSAGE_ERROR).should('be.visible')
    })
})