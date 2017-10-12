const blogPageLink = `a[href='/blog']`

module.exports = {
	checkAllTab: () => {
		it('Should have All tab active by default', done => {
			initNightmare()
            .goto(addteqHome)
            .click(blogPageLink)
            .wait("#all-tab")
            .evaluate(() => document.querySelector('#all-tab').classList.contains("active"))
            .end()
            .then(tabIsActive => {
            	expect(tabIsActive).to.be.true
            	done()
            })
		})
	}
}