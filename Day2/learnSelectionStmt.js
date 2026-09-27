/*use case : Amazon prime
//  // rule 1 : if user click the button video should play
//  // rule 2 : if user is not a prime user, then user should navigate to subscription page 
// // Business validation : check the user profile for the subscription status. 
let isPrime = true // false 
 if (isPrime === true) 
{ 
    console.log("Watch : video start to play, in the amazon player"); 
    }
else { console.log("User will redirected to Subscription Page"); } 
// //use case : Income Tax filing application 
// // rule 1 : If an individual's income is less than 3 LPA, exempted from tax 
// // rule 2 : If an individual's income is more than 3 LPA or equal to 3LPA, But less than 10 LPA --> 10 % tax slab 
// // rule 3 : If an individual's income is more than 10 LPA or equal to 10 LPA --> 30 % tax slab
// 
 // Business validation : check the user income for select the income slab based on it. 
let checkIncome = 10 
 if(checkIncome<3)
 { console.log("The user is exempted for the tax or tax free") 
     }
  else if(checkIncome>=3 && checkIncome<10 )
    { 
        console.log("The user has to pay 10% of the tax from the income which is filled")
     }
   else
    { 
        console.log("The user has to pay 30% of the tax from the income which is filled")
     } */


     // ATM Withdrawal
     //if withdrawal amt is equal or less than balance amount withdraw successful
     //if withdrawal amt is more than balance amount insufficient balance
       let balanceAmt = 6000
       let withdraw = 2000
       if(withdraw<=balanceAmt)
       {
        console.log("Withdrawal Successful!!")
       }

       else 
       {
        console.log("Insufficient Balance")
       }
    // Electricity Bill
    //if unit is less than 100, it is free
    //if unit is more than or equal to 100 but less than 200, 2rs per unit 
    //if unit is more than or equal to 200, 5rs per unit

    let checkUnit = 150
    if(checkUnit < 100){
        console.log("The service is free!!")
    }
    else if(checkUnit >=100 && checkUnit <200){
        console.log("The user is charged rs 4 per unit")
    }
    else
    {
        console.log("The user is charged rs 5 per unit")
    }


 // // SWITCH CASE 
 let operators ="Modulus" 
 let a=8
 let b=5
  switch (operators) 
     { 
        case "Addition": 
        console.log(a+b)
    break; 
        case "Subtraction": 
        console.log(a-b) 
    break; 
        case "Division":
        console.log(a/b)
    break;
    default: 
        console.log("Invalid operator"); 
    break; }

