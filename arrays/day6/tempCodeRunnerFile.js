function mergeArrays(array1, array2){
    // merge already sorted arrays in desceding order, into a fully sorted array
    const mergedArray = []// set to empyty initially
    let arrayOnePointer = array1[0]
    let arrayTwoPointer = array2[0]
    let i = 1;
    let j = 1;

    if(array1.length === 0){
        return array2
    }
    if(array2 === 0){
        return array1
    }
    while(arrayOnePointer || arrayTwoPointer){
        if(!arrayTwoPointer || arrayOnePointer < arrayTwoPointer){
            mergedArray.push(arrayOnePointer)
            arrayOnePointer = array1[i] //  we are now gonna initialize this pointer at the 2nd value or first index, up above
            i++
        } else {
            mergedArray.push(arrayTwoPointer)
            arrayTwoPointer = array2[j]
            j++
        }
    }
    // console.log(mergedArray)
    return mergedArray
}

console.log(mergeArrays([0,2,5,35,96],[4,6,30,99]));