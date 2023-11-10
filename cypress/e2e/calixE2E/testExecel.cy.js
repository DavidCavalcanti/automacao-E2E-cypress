/// <reference types="cypress"/>

const path = require('path')

describe('Testing excel data', () => {

    const xlsxPath = './cypress/downloads/companies.xlsx'
    const jsonNmea = path.basename(xlsxPath).replace('.xlsx', '.json')

    before(() => {
        cy.task('convertXlsxToJson', xlsxPath)
    })

    beforeEach(() => {
        cy.fixture(jsonNmea).as('companiesData')
    })

    it('Verify if file includes data of 10 companies', () => {
        cy.get('@companiesData').should('have.length', 10)
    })
})