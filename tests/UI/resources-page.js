const resourcesPageLink = `a[href="/resources"]`

module.exports = {
	checkResourcesPage: () => {
		it('Should open the Resources page first', done => {
            initNightmare()
            .goto(addteqHome)
            .click(resourcesPageLink)
            .wait('.main-message')
            .evaluate(() => document.querySelector('.main-message .text-center h2').innerHTML)
            .end()
            .then(resourcesText => {
                expect(resourcesText).to.equal('Resources')
                done()
            })
            .catch(error => { console.log(error) })
        })
	},

	checkDevopsPage: () => {
		it('Should open the DevOps page', done => {
            initNightmare()
            .goto(addteqHome)
            .click(resourcesPageLink)
            .wait('a[href="/services/infographic.html"]')
            .click('a[href="/services/infographic.html"]')
            .wait('.main-message')
            .evaluate(() => document.querySelector('.main-message .col-xs-12 h1').innerHTML)
            .end()
            .then(devopsText => {
                expect(devopsText).to.equal("<strong>Continuous</strong> Everything")
                done()
            })
            .catch(error => { console.log(error) })
        })
	},

	checkBlogPage: () => {
		it('Should open the Blog page', done => {
            initNightmare()
            .goto(addteqHome)
            .click(resourcesPageLink)
            .wait('a[href="/blog"] img')
            .click('a[href="/blog"] img')
            .wait('.main-message')
            .evaluate(() => document.querySelector(".main-message a").getAttribute("href"))
            .end()
            .then(featuredBlogLink => {
                expect(featuredBlogLink).to.match(/^\/blog\/.*/)
                done()
            })
            .catch(error => { console.log(error) })
        })
	},

	checkAtlassianPartnerPage: () => {
		it('Should open the Atlassian Partner page', done => {
            initNightmare()
            .goto(addteqHome)
            .click(resourcesPageLink)
            .wait('a[href="/services/atlassian"]')
            .click('a[href="/services/atlassian"]')
            .wait('.main-message')
            .evaluate(() => document.querySelector('.main-message .text-center h2').innerHTML)
            .end()
            .then(atlassianPartnerText => {
                expect(atlassianPartnerText).to.equal("Atlassian EXPERTS")
                done()
            })
            .catch(error => { console.log(error) })
        })
	}
}