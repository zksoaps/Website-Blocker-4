let whitelist, blacklist, x, url, id, ta;
try {
    chrome.storage.sync.get(["whitelist"], (a) => {
        whitelist = a.whitelist;
    });
    console.log(a.whitelist.length);
} catch (exception) {
    whitelist = ["cusd", "infinitecampus", "slides.google.com", "khanacademy.org", "brainpop.com", "bim.easyaccessmaterials", "code.org", "w3schools", 
    "wikipedia.org", "stackoverflow", "clever.com", "quizlet.com", "blooket", "quizz", "kahoot.it", "scratch.mit.edu", "gimkit", ".edu", ".gov", "google.com"]; 
    x = exception;
}
try {
    chrome.storage.sync.get(["blacklist"], (a) => {
        blacklist = a.blacklist;
    });
    console.log(a.blacklist.length);
} catch {
    blacklist = ["scratch.mit.edu"];
}
chrome.storage.sync.set({
    whitelist: whitelist,
    blacklist: blacklist
})
const sendMessage = (bool) => {
    chrome.tabs.sendMessage(id, {
        block: bool
    })
}
const checkBlock = () => {
    for (let i = l = 0; i < whitelist.length; i++) {
        if (url && (url.toString().includes(whitelist[i]) && !(url.toString().includes(blacklist[i < blacklist.length ? i : blacklist.length - 1])))) {
            sendMessage(false);
        } else if (url && (url.toString().includes(blacklist[i < blacklist.length ? i : blacklist.length - 1]))) {
            sendMessage(true);
        } else {
            l++
        }
        if (l == whitelist.length) {
            sendMessage(true);
        }
    }
}
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab != undefined && tab != null) {
        ta = tab
    }
    id = tabId;
    if (ta.title != "You're not being productive >:(") {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            url = tabs[0].url;
        })
        checkBlock();
    }
});
chrome.storage.onChanged.addListener((changes, namespace) => {
    try {
        blacklist = changes.blacklist.newValue;
    } catch (error) {
    }
    try {
        whitelist = changes.whitelist.newValue;
    } catch (error) {
    }
    checkBlock();
})
