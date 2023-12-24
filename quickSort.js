const quickSort =(array)=>{
        if(array.length  <=1){
            return array
        }else{
            // lets find the pivot. we are using the last value as the pivot 
            let pivot = array[array.length-1]
            let leftArray = []
            let rightArray = []

            // push all the values into left if they are less than the pivot and right if vice versa 
            for(let i = 0; i<array.length-1;i++){
                if(array[i]<= pivot){
                    leftArray.push(array[i])
                }else{
                    rightArray.push(array[i]);
                }
            }
            // keep calling array till we have the array of length of 0
            if(leftArray.length!=0){
               leftArray =  quickSort(leftArray)
            }
            if(rightArray.length!=0){
               rightArray = quickSort(rightArray)
            }
            // by the time we reach here all the values should be sorted so concat them 
            leftArray =  leftArray.concat(pivot)
            leftArray=leftArray.concat(rightArray)
            return leftArray
        }
}
console.log(quickSort([2,1,7,6,3,10,8]))
