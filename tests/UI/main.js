expect = require('chai').expect
Nightmare = require('nightmare')

/*** Globals ***/
initNightmare = () => Nightmare({ show: false })

addteqHome = require('./addteq-url')

const resourcesPage = require('./resources-page'),
      productsPage = require('./products-page'),
      servicesPage = require('./services-page'),
      blogPage = require('./blog-page'),
      whowearePage = require('./whoweare-page')


/******** MAIN ********/

runAllTests()

/**********************/


function runAllTests() {
    describe("Tests for Addteq's website", function() {

        describe('Resources page', () => {
            resourcesPage.checkResourcesPage()
            resourcesPage.checkDevopsPage()
            resourcesPage.checkBlogPage()
            resourcesPage.checkAtlassianPartnerPage()
        })


        describe('Products page', () => {
            productsPage.checkCodefactori()
            productsPage.checkExcellentable()
            productsPage.checkUnstoppable()
            productsPage.checkMscgen()
            productsPage.checkOfficeAdmin()
            productsPage.checkGraphviz()
            productsPage.checkStix()
        })

        describe('Services page', () => {
            servicesPage.checkDevopsSection()
            servicesPage.checkWCASection()
            servicesPage.checkCustomAddonSection()
            servicesPage.checkTrainingSection()
            servicesPage.checkTechSupportSection()
            servicesPage.checkDevopsInfographicLink()
        })

        // These tests should be done by comparing against nebula blog space
        // But can't  do that from nightmare
        describe('Blog page', () => {
            blogPage.checkAllTab()
        })

        describe('Whoweare page', () => {
            whowearePage.checkWhoweareContents()
            whowearePage.checkJobPageContents()
            whowearePage.checkJobApplicationForm()
        })
    })
}