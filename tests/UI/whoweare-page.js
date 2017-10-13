const whowearePageLink = `a[href='/whoweare']`

module.exports = {
	checkWhoweareContents: () => {
		it('Check that important sections in Whoweare page are shown', done => {
			initNightmare()
            .goto(addteqHome)
            .click(whowearePageLink)
            .wait(".main-message")
            .evaluate(() => {
            	return {
            		about: $('.about h2').text(),
            		leadership: $('.leadership h2').text(),
            		clients: $('.clients h2').text(),
            		leadership: $('.leadership h2').text(),
            		irisfoundation: $('.iris img').attr("src"),
            		jobs: $('.careers .job-holder a').length
            	}
            })
            .end()
            .then(pageSections => {
            	expect(pageSections.about).to.equal("Adding Technology for DevOps")
            	expect(pageSections.leadership).to.equal("Our Leadership")
            	expect(pageSections.clients).to.equal("Clients")
            	expect(pageSections.irisfoundation).to.match(/^.*iris-foundation.jpg/)
            	expect(pageSections.jobs).to.not.equal(0)
            	done()
            })
            .catch(error => { console.error(error) })
		})
	},

	checkJobPageContents: () => {
		it('Check that important sections in a job descripion page are shown', done => {
			initNightmare()
            .goto(addteqHome)
            .click(whowearePageLink)
            .wait(".careers .job-holder a:first-child")
            .click(".careers .job-holder a:first-child")
            .wait(".main-message h2")
            .evaluate(() => {
            	return {
            		applyNowButton: $("button.apply-now").html(),
            		linkUnderWhoWeAre: $(".job-page .external-link").attr("href")
            	}
            })
            .end()
            .then(pageElements => {
            	expect(pageElements.applyNowButton).to.equal("APPLY NOW")
            	expect(pageElements.linkUnderWhoWeAre).to.match(/^.*themuse.*addteq.*/)
            	done()
            })
            .catch(error => { console.error(error) })
		})
	},

	checkJobApplicationForm: () => {
		it('Check the job application form when clicking "Apply now"', done => {
	        // Now click the "Apply now" button and check the form
	        initNightmare()
	        .goto(addteqHome)
	        .click(whowearePageLink)
	        .wait(".careers .job-holder a:first-child")
	        .click(".careers .job-holder a:first-child")
	        .wait(".main-message h2")
	        .click("button.apply-now")
	        .wait(2)
	        .evaluate(() => $("#atlwdg-frame").css("display"))
	        .end()
	        .then(jobApplicationFormDisplayValue => {
	        	expect(jobApplicationFormDisplayValue).to.equal("inline")
	        	done()
	        })
	        .catch(error => { console.error(error) })
	    })
	}
}
