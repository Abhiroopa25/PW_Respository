function factorial(n){
  let results=1
 if(n<0){
    console.log("Negative number")
 }   
 else{
    for(let i=2;i<=n;i++)
    {
      
        results =results*i
        
    }console.log(results)
}
 
}factorial(-5)