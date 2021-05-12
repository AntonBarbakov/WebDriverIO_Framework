import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import ExchangePage from '../page-objects/pages/ExchangePage'
import Navbar from '../page-objects/components/Navbar'

it('Should log into application', () => {
    App.openLoginPage()
    LoginPage.login('username', 'password')
    Navbar.insideNavbarIsVisible()
})

it('Should submit feedback form', () => {
    $('#name').setValue('Name')
    $('#email').setValue('test@test.com')
    $('#subject').setValue('Subjects')
    $('#comment').setValue('Just a message!')
    $('input[type="submit"]').click()
    expect(browser).toHaveUrl(
        'http://zero.webappsecurity.com/sendFeedback.html'
    )
})