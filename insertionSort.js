

const insertionSort=(array)=>{

    // simple algorithm but has a poor time complexity 
    let valueSwapped = true;
    let iterations = array.length
    while(valueSwapped){
        valueSwapped= false;
        iterations = iterations-1
        for(let i = 0; i<iterations; i++){
            if(array[i]> array[i+1]){
                let temp = array[i]
                array[i]= array[i+1]
                array[i+1] = temp
                valueSwapped = true
            }
        }

    }
    return array
}
console.log(insertionSort([2,7,2,2,4,1]))