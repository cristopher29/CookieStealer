import '../img/icon-128.png'
import '../img/icon-34.png'

(function() {

    console.log("Cookie Monster");
    let tabId;

    chrome.tabs.onActivated.addListener(function (tab) {
        tabId = tab.tabId;
        console.log(tabId);
    });

    chrome.webNavigation.onCompleted.addListener(function () {
        chrome.tabs.get(tabId, function (tab) {
            let domain = tab.url.includes("://") ? tab.url.split("://")[1].split("/")[0] : tab.url.split("/")[0];
            if (domain.startsWith("www.")) {
                domain = domain.replace("www.", "");
                console.log(domain);
            }
            chrome.cookies.getAll({domain: domain}, function (cookies) {
               console.log(cookies);
            });
        });
    });
}());
