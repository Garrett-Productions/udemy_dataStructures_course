Number of Operations in an algo goes like this.. If we loop 8 times, then there are 8 number of operations

As inputs increase thwe # of operations increase with it, in linear time
If the input only has 1 value its taking in and only using 1 loop, or 1 operation, then it'd be O(1) operation

Linear Time = the amount of time it takes for a function to finish, based # of operations in input

Constant Time*** its a flat line, we are grabbing one, like array[0] or array[1], it doesnt matter how many inputs we have we are only finding one


https://www.quora.com/What-is-the-difference-between-big-oh-big-omega-and-big-theta-notations

https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12139614#overview

There are 4 rules to Calculate big O of (n) down to just O(n)

Rules
---------------1. WORST CASE ---------------------

// Rule #1 ---- WORST CASE ---- break;
const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla']

function findNemo(array){
    for(let i = 0; i< array.length; i++){
        console.log("running")
        if(array[i] === 'nemo'){
            console.log("found nemo!");
            break; // allows our algo to stop, time complexity, if you find it, be efficient and break out
        }
    }

    console.log("sup")
}
findNemo(everyone)
// worst case is if nemo is the 10th place, best case is if nemo is 1st, if its 4th then break out




-------------2. Remove Constants ------------------