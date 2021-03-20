"use strict";

function Open (url) {
    browser.url(url)
}

function Step (describe , func) {
    it(describe , func);
}

function WaitInSeconds (sec) {
    browser.pause(sec*1000)
}

function Case (desc, func) {
    describe(desc , func)
}

module.exports = {
    Step,
    WaitInSeconds,
    Open,
}
