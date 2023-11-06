function firstRecurrChar(array){
    //double for loop, capturing i at 0 index while allowing j to loop. if there is a match at any point return it, maybe i can plug in my time complexity algo to test
    for (i = 0; i < array.length; i++){ // i = array[0]
        for (j = i + 1; j < array.length; j++){ // j = array[1]
            if (array[i] === array[j]){
                return console.log("this is i: ", array[i], "this is j: ", array[j])
            }
        }
    }
    return undefined
}


firstRecurrChar([2,8,3,8,6,5]);