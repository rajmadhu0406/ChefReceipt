
chrome.webRequest.onSendHeaders.addListener(function (e){
    console.log(e);
},{
    urls:["<all_urls>"],
    types: ["xmlhttprequest"]
},["requestHeaders"]);

