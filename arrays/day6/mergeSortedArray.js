// merge already sorted arrays in desceding order, into a fully sorted array
function mergeSortedArray(array1, array2){
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
    while(arrayItem1 || arrayItem2){ // while these values exist
        if (!arrayItem2 || arrayItem1 < arrayItem2){ // if the first var is less than
            mergedArray.push(arrayItem1) // push it to the new array instance
            arrayItem1 = array1[i] // we dont need to worry about the value of 0 anymore, so set it equal to the next value in the array
            i++ //  we arent using a for loop so we innitiate i as 1 up topp
        } else {
            mergedArray.push(arrayItem2);
            arrayItem2 = array2[j]
            j++
        }
    }
    console.log(mergedArray)
    return mergedArray;
}

mergeSortedArray([0,3,4,31,76],[4,6,30,99])

// with this algo here is the thought process
// we are merging two already sorted arrays.. and keeping them in sorted order
// lets 1st check our worst case, and edge case. Lets ensure we have data in each position, and not just one array or an empty array
// if one of our inputs is empty return the one that has inputs