function mergeSorteddArray(array1, array2){
    const mergedArray=[]
    let arrayItem1 = array1[0]
    let arrayItem2 = array2[0];
    let i = 1;
    let j = 1; //  we aren't using a for loop here so we initiate our iterators up top

    //edge cases, check inputs and input types
    if(array1.length === 0 ){
        return array2 // because its already merged;
    }
    if(array2.length === 0){
        return array1 // because its already one array that's sorted;
    }
    while(arrayItem1 || arrayItem2){
        if (!arrayItem2 || arrayItem1 < arrayItem2){
            mergedArray.push(arrayItem1)
            arrayItem1 = array1[i] // we are now gonna initialize this pointer at the 2nd value or first index, up above, increasing just as we would in a for loop regularly
            i++
        } else {
            mergedArray.push(arrayItem2)
            arrayItem2 = array2[j]
            j++
        }
    
    }
    console.log("Merged Array", mergedArray)
    const mergedArrayToUse = mergedArray
    return mergedArray
}
mergeSorteddArray([0,3,4,31,76],[4,6,30,99])