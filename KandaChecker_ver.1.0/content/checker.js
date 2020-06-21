chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.type == "CHECK") {
		hogehoge();
	}
});

function hogehoge(){
    try{
        $("body").each(function(){
            var value = $(this).html();
            console.log("……かんだ？");
            
            if(!value) {
                console.log("神田じゃない");
                return true;
            }
            
            if(value.indexOf('かんだ') == -1) {
                return true;
            }
            
            $(this).html(value + '…かんだ？');
            chrome.runtime.sendMessage({ value: 'https://www.youtube.com/embed/MOQFaH3MMOc?autoplay=1&rel=0&controls=0&start=20' , type: "KANDA" });
            console.log("神田ァ！！");
        });
    }
    catch(e){
        if(e!="Uncaught TypeError" || e!="TypeError"){
            console.log(e);
            return true;
        }
    }
}