//Declaration & initialization
var course = "Playwright"
//Reinitialization-->Allowed
course="Selenium"
course=98756
//console.log(course)
//Redclaration-->Allowed
var course ="GenAI"
console.log(course)
//Scope Restriction
function getNationality(){//function scope
    var country = "india"
    {//body scope
        var country = "india"
        //console.log(country)

    }console.log(country)//Undefined


}getNationality()
//console.log(country)//ReferenceError: country is not defined

//Hoisting
console.log(firstName)//undefined
var firstName ="Ivy"
