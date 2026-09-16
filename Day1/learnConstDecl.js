//Declaration & initialization
const course = "Playwright"

//Reinitialization-->Not Allowed
/*course="Selenium"
course=98756*/
//console.log(course)//TypeError: Assignment to constant variable.

//Redclaration-->Not Allowed
//const course ="GenAI"
console.log(course)//SyntaxError: Identifier 'course' has already been declared

//Scope Restriction-->Not Allowed
function getNationality(){//function scope
   const country = "india"
    {//body scope
         //const country = "india"
        //console.log(country)

    }//console.log(country)//ReferenceError: Cannot access 'firstName' before initialization


}getNationality()
console.log(country)//ReferenceError: country is not defined

//Hoisting
console.log(firstName)//ReferenceError: Cannot access 'firstName' before initialization
const firstName ="Ivy"
