let companyName="Testleaf"

console.log(companyName.includes("Testleaf"))
console.log(companyName.length)
console.log(companyName.indexOf('l'))
console.log(companyName.charAt(6))
console.log(companyName.lastIndexOf('e'))
console.log(companyName.slice(3,-2))


for(let i=0;i<companyName.length;i++){
    console.log(companyName.charAt(i).toUpperCase())
}

let course=("Selenium Selenium Selenium")
console.log(course)
let alter = course.replace("Selenium","Playwright")
console.log(alter)
let alt=course.replaceAll("Selenium","Playwright")
console.log(alt)
let test = "hello world how are you"
console.log(test.split(","))

for(let i=companyName.length-1;i>=0;i--){
    console.log(companyName.charAt(i).toUpperCase())
}
