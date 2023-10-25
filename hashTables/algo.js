// first recurring character

// we can brute force something with a nested for loop
//Given an array = [2,1,7,4,3,2]:
// it should return 2

function firstRecurringChar(input){
    for(let i = 0; i <input.length; i++){
        for(let j = i+1; j <input.length; j++){
            if(input[i] === input[j]){
                return input[i];
            }
        }
    }
    return undefined
} // O(n^2) because we are brute forcing
console.log(firstRecurringChar([5,4,3]));