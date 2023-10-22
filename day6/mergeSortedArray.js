// merge arrays with values in descending order

function mergeSortedArray(array1, array2){
    const mergedArray=[]
    let arrayItem1 = array1[0]
    let arrayItem2 = array2[0];
    let i = 1;
    let j = 1; //  we aren't using a for loop here so we initiate our iterators up top

    //esdge cases, check inputs and input types
    if(array1.length === 0 ){
        return array2 // because its already merged;
    }
    if(array2.length === 0){
        return array1 // because its already merged;
    }
    while(arrayItem1 || arrayItem2){ // while these values exist
        if (!arrayItem2 || arrayItem1 < arrayItem2){ // if the first var is less than
            mergedArray.push(arrayItem1) // push it to the new array instance
            arrayItem1 = array1[i] // we dont need to worry about the value of 0 anymore, so set it equal to the next value in the array
            i++ 
        } //  we arent using a for loop so we innitiate i as 1 up top
        else {
            mergedArray.push(arrayItem2);
            arrayItem2 = array2[j]
            j++
        }
    }
    return mergedArray;
}

console.log(mergeSortedArray([0,3,23,10],[2,98,3,2]))