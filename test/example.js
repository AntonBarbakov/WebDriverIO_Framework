import { tablet, mobile, desktop } from './TestLib/devices'
import { short, medium , long } from './TestLib/timeouts'

const lib = require('./TestLib/TestLib')

lib.Case('First Steps with WebDriverIO', ()=>{
    lib.Step('Load Example Website', ()=>{
        lib.Open('http://www.example.com')
        // lib.WaitInSeconds(3)
        const link = $('a')
        link.waitForExist()
        expect(browser).toHaveUrl('http://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')
    })

    it('H1 should be visible', ()=>{
        const h1 = $('h1')
        expect(h1).toBeVisible() 
    })

    it('P should be visible', ()=>{
        const p = $('p')
        expect(p).toBeVisible() 
    })

    it('Cheack Link value', ()=>{
        const link = $('a')
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })

    it('Get Element Test', ()=>{
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText(text)
        expect(element).toHaveText('Example Domain')
    })

    it('Assert Attribute', ()=>{
        browser.url('https://www.youtube.com/')
        const logoID = $('#logo-icon')
        logoID.waitForExist()
        expect(logoID).toHaveAttrContaining('class', 'style-scope ytd-topbar-logo-renderer')
    })

    it('Assert Value',()=>{
        const input = $('input')
        input.waitForExist()
        expect(input).toHaveAttrContaining('id', 'search')
        expect(input).toHaveAttrContaining('placeholder' , 'Search')
    })

    it('Save Screenshot', ()=>{
        // browser.saveScreenshot('YouTube.png')
    })

    it('Change Browser Viewport', ()=>{
        browser.setWindowSize(1920, 1080)
        browser.pause(medium)
    })

    it ('Set Mobile View', ()=>{
        browser.setWindowSize(...mobile)
        browser.pause(short)
    })
    
    it ('Set Tablet View', ()=>{
        browser.setWindowSize(...tablet)
        browser.pause(short)
    })
    
    it ('Set Desktop View', ()=>{
        browser.setWindowSize(...desktop)
        browser.pause(short)
    })
})

