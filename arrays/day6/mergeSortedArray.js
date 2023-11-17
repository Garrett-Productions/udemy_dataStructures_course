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
// 1st check our worst case, and edge case. Lets ensure we have data in each position, and not just one array or an empty array
// if one of our inputs is empty return the one that has inputs
// 2nd lets create two variables to capture firstly the first indice in each array to make initial comparison
// 3rdly lets create an empty array variable to hold our merged array, and do our if check, whichever is smallest, push to the know array
// 4thly, move our two pointers forward to compare the next two indices

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





// merge already sorted arrays in desceding order, into a fully sorted array
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



function mergeSortedArr(array1, array2){
    // merge already sorted arrays in desceding order, into a fully sorted array
    // base cases to check to ensure the data types are arrays and that we have two parameters to make comparison checks
    // create a const to capture our merged arrays, this will be an empty array to start
    // lastly, lets use a while loop, while our base cases pass run our code, and we will initialize 2 pointers both startinmg at 1
    const mergedArray = []
    let array1position = array1[0];
    let array2position = array2[0];
    let i = 1;
    let j = 1;
    
    if(array1.length === 0){
        return array2 
        // because array 2 is already merged, algo solved
    }
    if(array2.length === 0){
        return array1
    }
    while(array1position || array2position){
        if(!array2position || array1position < array2position){
            mergedArray.push(array1position)
            array1position = array1[i]
            i++
        }else {
            mergedArray.push(array2position)
            array2position = array2[j]
            j++
        }
    }
    console.log("here is my merged Array", mergedArray)
    return mergedArray
}

mergeSortedArr([0,3,4,31,76],[4,6,30,99])