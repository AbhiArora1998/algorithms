


const merge=(leftA, rightA)=>{
    let sortedArray = []
    
    while(leftA.length && rightA.length){
        if(leftA[0]<= rightA[0]){
            sortedArray.push(leftA.shift())
        }else{
            sortedArray.push(rightA.shift())
        }
    }
    return [...sortedArray,...leftA,...rightA]
}

const mergeSort = (array)=>{
    // first step is to break the array into array with length 1. So only single element in them 
    if(array.length<2){
        return array
    }
        let middle  = Math.floor((array.length)/2)
       const leftArrayArray =array.slice(0,middle)
       const rightArray = array.slice(middle)   
       return merge(mergeSort(leftArrayArray),mergeSort(rightArray))
}
console.log(mergeSort([9,-2,10,8,4,1]))