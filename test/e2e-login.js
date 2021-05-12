import App from '../test/page-objects/App'
import LoginPage from '../test/page-objects/pages/LoginPage'
import Navbar from '../test/page-objects/components/Navbar'

describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        App.openHomePage()
        Navbar.clickSignIn()
        LoginPage.pauseLong()
        LoginPage.formIsVisible()
        LoginPage.fillForm('invalid username', 'invalid password')
        LoginPage.submitForm()
        const message = LoginPage.error
        expect(message).toHaveText('Login and/or password are wrong.')
    })
 
    it('Should login with valid credentials', () => {
        App.openHomePage()
        Navbar.clickSignIn()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username', 'password')
        LoginPage.submitForm()
        Navbar.insideNavbarIsVisible()
    })
 
    it('Should logout from app', () => {
        App.logout()
        Navbar.signInButtonIsVisible()
    })
})