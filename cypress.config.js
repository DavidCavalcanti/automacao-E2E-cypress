const { defineConfig } = require("cypress");


var XLSX = require('xlsx')
const path = require('path')
const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        convertXlsxToJson(filePath) {
          const workbook = XLSX.readFile(filePath)
          const worksheet = workbook.Sheets[workbook.SheetNames[0]]
          const jsonData = XLSX.utils.sheet_to_json(worksheet)

          const fileName = path.basename(filePath, '.xlsx')
          const jsonFilePath = `./cypress/fixtures/${fileName}.json`
          fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2))
          return null
        }
      })
    },
    baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
  },
});
