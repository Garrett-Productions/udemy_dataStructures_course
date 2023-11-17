function recurringCharacter(array){
    // Return the first character we see twice
    // we can brute force this with a nested for loop
    // we can have two pointers that make comparisons towards one another, and if they equal one another, return the int's
    for(let i = 0; i < array.length; i++){
        for (let j=i+1; j < array.length; j++){
            if(array[i] === array[j]){
                return console.log("Array of i is:", array[i], "Array of j is:", array[j])
            }
        }
    }
}

console.log(recurringCharacter([2,8,3,8,6,5]))