import { locators as locator } from "./locators";
import { locatorsAlura as alura } from "./locatorsAlura";

Cypress.Commands.add('loginSessionAlura', (
    username = Cypress.env('usernameAlura'),
    password = Cypress.env('passwordAlura')
) => {
    cy.session([username, password], () => {
        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login').as('tokenAcess')
        cy.visit('https://alura-fotos.herokuapp.com/')

        cy.get(alura.LOGIN.USER).type(username)
        cy.get(alura.LOGIN.PASSWORD).type(password)
        cy.get(alura.LOGIN.BUTTON_LOGIN).click()

        cy.wait('@tokenAcess');
    })
})

Cypress.Commands.add('loginSwag', (
    username = Cypress.env('standard_user'),
    password = Cypress.env('password')
) => {
    cy.visit('/')

    cy.get(locator.LOGIN.USER).type(username, { log: false })
    cy.get(locator.LOGIN.PASSWORD).type(password, { log: false })
    cy.get(locator.LOGIN.BUTTON_LOGIN).click()
})

Cypress.Commands.add('logoutSwag', () => {
    cy.get(locator.HEADER.MENU.BUTTON_MENU).click()
    cy.get(locator.HEADER.MENU.LOGOUT).click()
    cy.validateUrl(`${Cypress.config('baseUrl')}`)
})

Cypress.Commands.add('validateUrl', (url) => {
    cy.url().should('be.equal', url)
})

Cypress.Commands.add('addItemCar', (nameProduct) => {
    cy.get(locator.PRODUCTS.ITEM_NAME).contains(nameProduct).click()
    cy.contains('Add to cart').click()
    cy.get(locator.HEADER.CAR.CAR_NOTIFICATION).should('exist')
})

Cypress.Commands.add('buyProduct', (nameProduct) => {
    cy.addItemCar(nameProduct)
    cy.get(locator.HEADER.CAR.CAR_ICON).click()
    cy.get(locator.HEADER.CAR.CHECKOUT.BUTTON_CHECKOUT).click()

    cy.fixture('usuario').then((user) => {
        cy.get(locator.HEADER.CAR.CHECKOUT.INPUT_FIRST_NAME).type(user.firstName)
        cy.get(locator.HEADER.CAR.CHECKOUT.INPUT_LAST_NAME).type(user.lastName)
        cy.get(locator.HEADER.CAR.CHECKOUT.INPUT_POSTAL_CODE).type(user.postalCode)
    })

    cy.get(locator.HEADER.CAR.CHECKOUT.BUTTON_CONTINUE).click()
    cy.get(locator.HEADER.CAR.CHECKOUT.BUTTON_FINISH).click()

    cy.validateUrl(`${Cypress.config('baseUrl')}checkout-complete.html`)
})

