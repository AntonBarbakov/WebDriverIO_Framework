const lib = require('./TestLib/TestLib')

lib.Case('First Steps with WebDriverIO', ()=>{
    lib.Step('Load Example Website', ()=>{
        lib.Open('http://www.example.com')
        lib.WaitInSeconds(5)
    })
})

describe ('Second Example', ()=> {
    it('Load YouTube website', ()=>{
        browser.url('https://youtube.com')
        browser.pause(10000)
    })
})
