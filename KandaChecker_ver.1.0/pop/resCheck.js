chrome.runtime.onMessage.addListener(function (message) {
    if(message.type=="KANDA"){
        document.getElementById("reload").innerHTML = "";
        var v = document.getElementById('mov');
        v.src = message.value;
        v.width="560";
        v.height="315";
    }
});