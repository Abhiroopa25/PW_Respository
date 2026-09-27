let conditionalPromise = new Promise((resolve,reject)=>{
    let num=Math.random()
    if(num>0.5){
        resolve("Resolved successfully")
    }
    else{
        reject("Rejected")
    }
});
conditionalPromise.then((value)=>{console.log(value)}).catch((reason)=>{console.log(reason)})
