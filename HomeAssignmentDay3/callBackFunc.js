let browser ="chrome"
 function checkBrowserVersion(){
    setTimeout(function(){
        callBack(browser)
    },2000)
    
    }
    function callBack(browser){
        console.log(browser)
 }checkBrowserVersion(callBack)