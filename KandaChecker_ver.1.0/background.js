// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.sendMessage(tab.id,"CHECK");
//     console.log("仕事はしてんねん");
//   });

var act = 0;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if (message != "ON") {
    return;
  }
  act=1;
  console.log(act);
})

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(act==1){
    if (changeInfo.status !== "complete") {
      return;
    }
    const message = { type: "CHECK" };
    console.log("仕事はしてる");
    chrome.tabs.sendMessage(tabId, message, null);
    act=0;
  }
});