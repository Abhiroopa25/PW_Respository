function fibonacci(n){
    let a =0
    let b=1

    if(n<0){
        console.log("Negative number")
    }
    else{
        for(let i=0;i<=n;i++){
            console.log(a)
         let results=a+b
            a=b
            b=results
        }
    }


}fibonacci(7)