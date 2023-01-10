let whitelist, blacklist, urla, urlb;
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    url = tabs[0].url;
});
chrome.storage.sync.get(whitelist, (i) => {
    whitelist = i.whitelist;
});
chrome.storage.sync.get(blacklist, (i) => {
    blacklist = i.blacklist;
});
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const container = document.querySelector(".container");
btn1.addEventListener("click", () => {
    for (let i = 0; i < blacklist.length; i++) {
        if (blacklist[i] == url) {
            urla = true;
        }
    }
    if (!urla) {
        blacklist.push(url);
    }
    chrome.storage.sync.set({
        whitelist: whitelist,
        blacklist: blacklist
    });
    urla = false;
});

btn2.addEventListener("click", () => {
    for (let i = 0; i < whitelist.length; i++) {
        if (whitelist[i] === url) {
            urlb = true;
        }
    }
    for (let i = 0; i < blacklist.length; i++) {
        if (blacklist[i] === url) {
            urla = true;
        }
    }
    if (!urlb) {
        whitelist.push(url);
    }
    if (urla) {
        delete blacklist[blacklist.indexOf(url)];
    }
    chrome.storage.sync.set({
        whitelist: whitelist,
        blacklist: blacklist
    });
    urla = false;
    urlb = false;
});