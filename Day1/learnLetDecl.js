//Declaration & initialization
let course = "Playwright"

//Reinitialization-->Allowed
course="Selenium"
course=98756
//console.log(course)

//Redclaration-->Not Allowed
//let course ="GenAI"
console.log(course)//SyntaxError: Identifier 'course' has already been declared

//Scope Restriction-->Not Allowed
function getNationality(){//function scope
    //let country = "india"
    {//body scope
        let country="india"
        //console.log(country)

    }console.log(country)//ReferenceError: country is not defined


}getNationality()
//console.log(country)//ReferenceError: country is not defined

//Hoisting
console.log(firstName)//ReferenceError: Cannot access 'firstName' before initialization
let firstName ="Ivy"
