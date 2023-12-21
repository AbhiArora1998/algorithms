const binarySearchTree=(array, value)=>{
    if(array.length === 0) {
        return -1}
    else {
        let midValue =  Math.floor(array.length/2);
            if(array[midValue] === value){
                return midValue 
            }
            // edge case when it goes right and only one value is left
            if(array.length === 1){
                    if(array[0] === value){
                        return 1
                    }else{
                        return -1
                    }
            }
          if(value<array[midValue]){
                let     leftValue =  binarySearchTree(array.slice(0,midValue),value)
            return leftValue
          }else {
           let rightValue=  binarySearchTree(array.slice(midValue,array.length),value)
           if(rightValue === -1){
            return -1
           }
           return midValue+rightValue
          }
          
    }
}
console.log(binarySearchTree([2,3,5,7,8,10,11,12,18],4))