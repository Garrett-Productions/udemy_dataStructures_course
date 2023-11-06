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
console.log(firstRecurringChar([2,5,3,8,6,5]));
// if i = 0 and i is less than 6 increase i, j = 1 and j will increase if its less than 6.
// first iteration: its kinda like a sliding mirror, we capture i at the 0 index while j loops through the whole array
// if the 0 index in the array which is captured at i does not equal any values of j then i will increase.

//In this approach we have two iterators, we initialize both next to one another



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