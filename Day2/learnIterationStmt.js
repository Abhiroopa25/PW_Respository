//print odd numbers from 11 to 20

for(i=11;i<=20;i++){
    if(i%2!=0){
     console.log(i)
    }
   
    
}
/*//while
while (i <= 10) {
    console.log(i)
    i++ // if i++ is missing or not changing i then infinite loop is executed
}

// do while

do {
    console.log(i);
    i++
} while (i <= 10)
*/

//  Functional Requirement:
//  A player must complete at least 2 rounds and at most 5 rounds.
//  If the player is unhealthy, the game stops right after 2 rounds. 
//  If the player is healthy, the game continues up to 5 rounds.

let isHealthy = false
const maxGoal = 5
const minGoal = 2
for (let round = 1; round <= maxGoal; round++) {
    // condition 1: ifHealty ,maxGoal
    // condition 2 : minGoal
    /*if (isHealthy && round > minGoal) {
        break
    }*/
    if(isHealthy!=true && round > minGoal)
    {
        break
    }
    
    console.log("round no :" + round + " completed");
}