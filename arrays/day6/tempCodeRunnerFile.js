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