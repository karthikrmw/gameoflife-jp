const servicesPageLink = `a[href='/services']`

module.exports = {
	checkDevopsSection: () => {
		it(`Should check scroll to Devops is set, and section exists`, done => {
			initNightmare()
			.goto(addteqHome)
            .click(servicesPageLink)
            .wait('a[href="#devops"]')
            .evaluate(() => {
            	return {
            		scrollLink: document.querySelector('a[href="#devops"]').getAttribute("href"),
            		sectionContents: document.querySelector('#devops').innerHTML
            	}
            })
            .end()
            .then(devopsElements => {
           		expect(devopsElements.scrollLink).to.not.equal("")
            	expect(devopsElements.sectionID).to.not.equal("")
            	done()
            })
            .catch(error => { console.error(error) })
		})
	},

	checkWCASection: () => {
		it(`Should check scroll to WCA is set, and section exists`, done => {
			initNightmare()
			.goto(addteqHome)
            .click(servicesPageLink)
            .wait('a[href="#wca"]')
            .evaluate(() => {
            	return {
            		scrollLink: document.querySelector('a[href="#wca"]').getAttribute("href"),
            		sectionContents: document.querySelector('#wca').innerHTML
            	}
            })
            .end()
            .then(wcaElements => {
            	expect(wcaElements.scrollLink).to.not.equal("")
            	expect(wcaElements.sectionID).to.not.equal("")
            	done()
            })
            .catch(error => { console.error(error) })
		})
	},

	checkCustomAddonSection: () => {
		it(`Should check scroll to CustomAddon is set, and section exists`, done => {
			initNightmare()
			.goto(addteqHome)
            .click(servicesPageLink)
            .wait('a[href="#cad"]')
            .evaluate(() => {
            	return {
            		scrollLink: document.querySelector('a[href="#cad"]').getAttribute("href"),
            		sectionContents: document.querySelector('#cad').innerHTML
            	}
            })
            .end()
            .then(cadElements => {
            	expect(cadElements.scrollLink).to.not.equal("")
            	expect(cadElements.sectionID).to.not.equal("")
            	done()
            })
            .catch(error => { console.error(error) })
		})
	},

	checkTrainingSection: () => {
		it(`Should check scroll to Training is set, and section exists`, done => {
			initNightmare()
			.goto(addteqHome)
            .click(servicesPageLink)
            .wait('a[href="#training"]')
            .evaluate(() => {
            	return {
            		scrollLink: document.querySelector('a[href="#training"]').getAttribute("href"),
            		sectionContents: document.querySelector('#training').innerHTML
            	}
            })
            .end()
            .then(trainingElements => {
            	expect(trainingElements.scrollLink).to.not.equal("")
            	expect(trainingElements.sectionID).to.not.equal("")
            	done()
            })
            .catch(error => { console.error(error) })
		})
	},

	checkTechSupportSection: () => {
		it(`Should check scroll to Tech Support is set, and section exists`, done => {
			initNightmare()
			.goto(addteqHome)
            .click(servicesPageLink)
            .wait('a[href="#ats"]')
            .evaluate(() => {
            	return {
            		scrollLink: document.querySelector('a[href="#ats"]').getAttribute("href"),
            		sectionContents: document.querySelector('#ats').innerHTML
            	}
            })
            .end()
            .then(atsElements => {
            	expect(atsElements.scrollLink).to.not.equal("")
            	expect(atsElements.sectionID).to.not.equal("")
            	done()
            })
            .catch(error => { console.error(error) })
		})
	},

	checkDevopsInfographicLink: () => {
		it(`Should check if download PDF of Devops infographic correctly shows the Subscribe popup `, done => {
			initNightmare()
			.goto(addteqHome)
            .click(servicesPageLink)
            .wait('a[href="/services/infographic.html"]')
            .click('a[href="/services/infographic.html"]')
            .wait('.main-message')
            .click('.download button')
            .wait(2000)
            .evaluate(() => document.querySelector("#subscribe-modal").style.display)
            .end()
            .then(subscribeFormIsVisible => {
            	expect(subscribeFormIsVisible).to.equal("block")
            	done()
            })
            .catch(error => { console.error(error) })
		})
	}
}