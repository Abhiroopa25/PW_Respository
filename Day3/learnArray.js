
let courseName = "Cypress,Playwright,Selenium,QTP,Tosca"
/*let courseList = courseName.split(" ")
console.log(courseList)
//push()- add element at the last
courseList.push("Rest assured")
//unshift
courseList.unshift("Postman")
console.log(courseList)
console.log(courseList.slice(1,4))
console.log(courseList.splice(2,1,"Appium"))
courseList.sort()
//for each
courseList.forEach(course =>console.log(course))

let list = ["Abhi",1007,true]

console.log(list.concat(courseList))

let firstName ="Abhiroopa"
let orderLiterals =firstName.split("").sort().join("")
console.log(orderLiterals)*/

let courseList=courseName.split(",")
console.log(courseList)
console.log(courseList.slice(1,4))
courseList.splice(2,1,"Appium")
console.log(courseList)
courseList.sort()
//for each
courseList.forEach(course =>console.log(course))