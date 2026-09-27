//Anagram string

/*let str1="Conversation"
let str2="Vers aton ionc"*/

let str1 = "Hello"
let str2="world"

function anagramStr(){   
str1=str1.toLowerCase()
str2=str2.toLowerCase()

str1=str1.replace(/[^a-z]/g,"")
str2=str2.replace(/[^a-z]/g,"")

//console.log(str1)
//console.log(str2)

if(str1.length !== str2.length){
    return false
}

let result1 = str1.split("").sort().join("")
console.log(result1)

let result2 = str2.split("").sort().join("")
console.log(result2)

return result1 === result2

} 

console.log(anagramStr())