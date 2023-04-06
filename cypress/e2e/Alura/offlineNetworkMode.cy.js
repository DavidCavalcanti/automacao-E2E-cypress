/// <reference types="cypress" />

const goOffline = () => {
    cy.log('**go offline**')
        .then(() => {
            Cypress.automation('remote:debugger:protocol',
                {
                    command: 'Network.enable',
                })
        })
        .then(() => {
            Cypress.automation('remote:debugger:protocol',
                {
                    command: 'Network.emulateNetworkConditions',
                    params: {
                        offline: true,
                        latency: -1,
                        downloadThroughput: -1,
                        uploadThroughput: -1,
                    },
                })
        })
}

const goOnline = () => {   
    cy.log('**go online**')
        .then(() => {
            Cypress.automation('remote:debugger:protocol',
                {
                    command: 'Network.emulateNetworkConditions',
                    params: {
                        offline: false,
                        latency: -1,
                        downloadThroughput: -1,
                        uploadThroughput: -1,
                    },
                })
        })
        .then(() => {
            Cypress.automation('remote:debugger:protocol',
                {
                    command: 'Network.disable',
                })
        })
}

describe('offline mode', { browser: '!firefox' }, () => {
    beforeEach(goOnline)
    afterEach(goOnline)

    it('Shows network status', () => {
        cy.loginSessionAlura()
        cy.visit(Cypress.env('baseUrlAlura'))
        goOffline()
        cy.get(':nth-child(1) > :nth-child(1) > a > ap-card > .card > .card-block > ap-photo > .img-thumbnail').click()
        cy.contains('This page is not available').should('be.visible')
    })

})
