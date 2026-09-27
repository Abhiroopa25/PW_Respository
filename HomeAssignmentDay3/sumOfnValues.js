function cumulative(n){
    let sum =0;
    for(let i=1;i<=n;i++)
    {
        console.log(i ,"+", sum ,"=", (sum+i))
        sum=sum+i
    }console.log(sum)
}cumulative(5)