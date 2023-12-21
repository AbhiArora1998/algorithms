

const bubbleSort=(array)=>{

    // simple algorithm but has a poor time complexity 
    let valueSwapped = true;
    
    while(valueSwapped){
        valueSwapped= false;

        for(let i = 0; i<array.length-1; i++){
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
console.log(bubbleSort([2,7,2,2,4,1]))