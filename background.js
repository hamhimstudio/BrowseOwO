browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {

        browser.tabs.executeScript(tabId, {
            file: 'Owoifier.js'
        });
    }
});