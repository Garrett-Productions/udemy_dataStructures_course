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

function printFirstItemThenFirstHalfThenSayHi100Times(items){
    console.log(items[0])// O(n)

    var middleIndex = Math.floor(items.length / 2);
    console.log("Middle index is here>", middleIndex)
    var index = 0;

    while (index <middleIndex){ // half of whatever items are
        console.log(items[index]); // n / 2
        index++;
    }

    for (var i = 0; i < 100; i++){
        console.log("Hi") // no matter the input array, + 100
    }
}
// Big O = O(1 + N/2 + 101)
//O = 0(n/2 + 1)
// 0= 0(n + 1)
// 0(n)
// basically because all constants are damn near insignificant, the speed will hardly differ



-----------------3. Different terms for inputs -----------


When we see loops that are nested, we dont use addition to get 0(N), we use multiplication

O(n * 2) or O(N^2)
QUADRAtic time because we have more than 2 elements
O(N^2) is horrible, a lot of interview questions ask how to make these better

Nested means we multiply

-------------------4. Drop nondominant terms --------

We Have now talked about: Constant Time, Linear Time, and Quadratic Time
Constant = O(1)
Linear = 0(n)
quadratic = 0(n^2)

Data Structures + Algorithms = Program