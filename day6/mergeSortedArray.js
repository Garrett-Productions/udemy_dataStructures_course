// merge arrays with values in descending order

function mergeSortedArray(array1, array2){
    const mergedArray=[]
    let arrayItem1 = array1[0]
    let arrayItem2 = array2[0];
    let i = 1;

    //esdge cases, check inputs and input types
    if(array1.length === 0 ){
        return array2 // because its already merged;
    }
    if(array2.length === 0){
        return array1 // because its already merged;
    }
    while(arrayItem1 || arrayItem2){ // while these values exist
        if (arrayItem1 < arrayItem2){ // if the first var is less than
            mergedArray.push(arrayItem1) // push it to the new array instance
            arrayItem1 = array1[i+1] // set array1Item that was the o index, the first index, or i_1
        } //  we innitiate i up top as one, because thats the second index in the array
    }
}