chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return { cancel: true}},
    {urls:defaultFilters},
    ["blocking"]
)
defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://*.partner.googleadservices.com/*",
    "*://*.google-analytics.com/*",
    "*://*.adbrite.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.exponential.com/*",
    "*://*.quantsetve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
]