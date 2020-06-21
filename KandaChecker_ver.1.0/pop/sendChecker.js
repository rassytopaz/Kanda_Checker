// chrome.tabs.query({'active': true}, function(tabs) {
//     chrome.runtime.sendMessage(tabs[0].id, "CHECK", null);
//   });

// chrome.runtime.sendMessage("めっせぇじ", function (response){
// 	console.log("受け取ったデータ：", response)
// })

// chrome.tabs.query({},function(tabs){
//     //$('#tabnum').text('現在開いているタブの数は['+tabs.length+']個です')
//     //chrome.runtime.sendMessage(tabs[0].id, "CHECK", null);
//     chrome.tabs.sendMessage(tabs[0].id,"CHECK",null);
//   });

// console.log("仕事しよ");

chrome.runtime.sendMessage("ON");