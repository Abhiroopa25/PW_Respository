//Named function

//syntax : function functionName(){
//body of the function- all resuseable logics written here}


function greet(lName){

    console.log(`hi,"${lName}".welcome to testleaf `)
    
}
   
greet("Abhi")//caller

//function expression or anonymous
let addNum = function(a,b){
    return a+b;
}
console.log(addNum(1239,9765));

// arrow function
let mulNum=(a,b) => a*b;
console.log(mulNum(2,3)*mulNum(4,3))//caller

//IIFE-immediately invoked function expression
// no caller needed 
;(function(username){
    console.log(`username is entered as,"${username}".welcome to leafcaps `)
})("demosalesmanager")
 
//Callback Function

//user history->actions

function recommendedMovie(){
    console.log("Track's the user history : language, genre, cast,crew")
}

function aiRecommendation(){
    console.log("optimized")
}

function profileLogin(username,history,suggestion){
    console.log(`Welcome,${username} to amazon prime video`)
    history()
    suggestion()
}
profileLogin("abhi",recommendedMovie,aiRecommendation)
//recommendedMovie()//caller
//aiRecommendation()//caller


//Anagram string

let str1="Listen"
let str2="Silent"

str1.toLowerCase()
str2.toLowerCase()
console.log(str1,str2)

