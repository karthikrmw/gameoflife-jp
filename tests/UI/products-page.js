const productsPageLink = `a[href='/products']`

module.exports = {
	checkCodefactori: () => {
		it(`Should open products -> Codefactori and verify "Try it Now"`, done => {
            initNightmare()
            .goto(addteqHome)
            .click(productsPageLink)
            .wait(`a[href="/products/codefactori"]`)
            .click(`a[href="/products/codefactori"]`)
            .wait('.main-message button')
            .click('.main-message button')
            .wait('#contact-form')
            .evaluate(() => document.querySelector('#contact-form .modal-title').innerHTML)
            .end()
            .then(contactUsText => {
                expect(contactUsText).to.equal('Contact Us')
                done()
            })
            .catch(error => { console.log(error) })
        })
	},

	checkExcellentable: () => {
		it(`Should open products -> Excellentable and verify "Get it now"`, done => {
            initNightmare()
            .goto(addteqHome)
            .click(productsPageLink)
            .wait(`a[href="/products/excellentable"]`)
            .click(`a[href="/products/excellentable"]`)
            .wait('.main-message button')
            .evaluate(() => document.querySelector('.main-message a').getAttribute("href"))
            .end()
            .then(excellentableMarketplaceURL => {
                expect(excellentableMarketplaceURL).to.match(/^.*marketplace\.atlassian\.com.*Addteq\.Excellentable.*/)
                done()
            })
            .catch(error => { console.log(error) })
        })
	},

	checkUnstoppable: () => {
        it(`Should open products -> Unstoppable and verify "Free 30 Day Trial"`, done => {
            initNightmare()
            .goto(addteqHome)
            .click(productsPageLink)
            .wait(`a[href="/products/unstoppable"]`)
            .click(`a[href="/products/unstoppable"]`)
            .wait('.main-message a')
            .evaluate(() => document.querySelector('.main-message a').getAttribute("href"))
            .end()
            .then(unstoppableMarketplaceURL => {
                expect(unstoppableMarketplaceURL).to.match(/^.*marketplace\.atlassian\.com.*unstoppable.*/)
                done()
            })
            .catch(error => { console.log(error) })
        })		
	},

	checkMscgen: () => {
		it(`Should open products -> Mscgen and verify "Free 30 Day Trial"`, done => {
            initNightmare()
            .goto(addteqHome)
            .click(productsPageLink)
            .wait(`a[href="/products/mscgen"]`)
            .click(`a[href="/products/mscgen"]`)
            .wait('.main-message a')
            .evaluate(() => document.querySelector('.main-message a').getAttribute("href"))
            .end()
            .then(mscgenMarketplaceURL => {
                expect(mscgenMarketplaceURL).to.match(/^.*marketplace\.atlassian\.com.*mscgen.*/)
                done()
            })
            .catch(error => { console.log(error) })
        })
	},

	checkOfficeAdmin: () => {
        it(`Should open products -> Office Admin and verify "Free 30 Day Trial"`, done => {
            initNightmare()
            .goto(addteqHome)
            .click(productsPageLink)
            .wait(`a[href="/products/officeadmin"]`)
            .click(`a[href="/products/officeadmin"]`)
            .wait('.main-message a')
            .evaluate(() => document.querySelector('.main-message a').getAttribute("href"))
            .end()
            .then(officeadminMarketplaceURL => {
                expect(officeadminMarketplaceURL).to.match(/^.*marketplace\.atlassian\.com.*officeadmin.*/)
                done()
            })
            .catch(error => { console.log(error) })
        })		
	},

	checkGraphviz: () => {
		it(`Should open products -> Graphviz and verify "Free 30 Day Trial"`, done => {
            initNightmare()
            .goto(addteqHome)
            .click(productsPageLink)
            .wait(`a[href="/products/graphviz"]`)
            .click(`a[href="/products/graphviz"]`)
            .wait('.main-message a')
            .evaluate(() => document.querySelector('.main-message a').getAttribute("href"))
            .end()
            .then(graphvizMarketplaceURL => {
                expect(graphvizMarketplaceURL).to.match(/^.*marketplace\.atlassian\.com.*graphviz.*/)
                done()
            })
            .catch(error => { console.log(error) })
        })
	},

	checkStix: () => {
		it(`Should open products -> Stix and verify links to appstores`, done => {
            initNightmare()
            .goto(addteqHome)
            .click(productsPageLink)
            .wait(`a[href="/products/stix"]`)
            .click(`a[href="/products/stix"]`)
            .wait('.main-message')
            .evaluate(() => {
                return {
                    iphone: document.querySelector('a[href*=itunes]').getAttribute("href"),
                    android: document.querySelector('a[href*=play]').getAttribute("href")
                }
            })
            .end()
            .then(appStoresLinks => {
                expect(appStoresLinks.iphone).to.not.be.empty
                expect(appStoresLinks.android).to.not.be.empty
                done()
            })
            .catch(error => { console.log(error) })
        })
	}
}