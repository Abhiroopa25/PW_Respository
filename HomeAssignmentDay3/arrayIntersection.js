function intersection(arr1,arr2){
      let result=[];
      for(let i=0;i<arr1.length;i++){
    
        
            if(arr2.includes(arr1[i]) &&  !result.includes(arr1[i]))
            {
               result.push(arr1[i])
            }
        
      }return result

}console.log(intersection([2,4,5,6],[3,7,5,2]))