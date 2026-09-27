function fetchDataFromDatabase(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const data =true
           console.log("Fetching data from database...")
            if(data===true){
               resolve("Data fetched successfully!")
            }
            else{
                reject("Data not found!")
            }

        },3000)
    })

    
        
    
}fetchDataFromDatabase().then((value)=>{console.log(value)}).catch((error)=>{console.log(error)}).finally(()=>{console.log("Completed!!!")})