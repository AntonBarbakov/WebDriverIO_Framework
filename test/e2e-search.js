import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import ExchangePage from '../page-objects/pages/ExchangePage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Search', () => {
	it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })
 
	it('Should submit searchbox', () => {
		$('#searchTerm').setValue('bank')
		browser.keys('Enter')
		const resultsTitle = $('h2')
		resultsTitle.waitForExist()
		expect(resultsTitle).toHaveText('Search Results:')
	})
})