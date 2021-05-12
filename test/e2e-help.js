import App from '../test/page-objects/App'
import LoginPage from '../test/page-objects/pages/LoginPage'
import Navbar from '../test/page-objects/components/Navbar'
import HelpPage from '../test/page-objects/pages/HelpPage'

describe('E2E Tests - Pay', () => {
	it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Should load help content', ()=>{
        Navbar.clickSettings()
        Navbar.clickHelp()
        const title = HelpPage.title
        expect(title).toHaveText('How do I log into my account?')
        HelpPage.clickOnTransferFunds()
        expect(title).toHaveText('How do I transfer funds?')
        HelpPage.clickOnPayBills()
        expect(title).toHaveText('How do I pay bills?')
    })

});   