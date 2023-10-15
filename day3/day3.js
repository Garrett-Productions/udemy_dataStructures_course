// Linear Time = the amount of time it takes for a function to finish, based # of operations in input

//ES5
// function compressAllBoxes(boxes){
//     boxes.forEach(com(item){
//         console.log(item);
//     });
// }

// compressAllBoxes(5)

//ES6
const compressAllBoxes = boxes => {
    boxes.forEach(box => console.log(box));
}

var box = compressAllBoxes(5);
console.log(box)

function funChallenge(input){
    let a = 10; // 0(1) one step
    a = 50 + 3; // 0(1) two step
    for(let i = 0; i < input.length; i++){
        anotherFunction(); // we dont know this, its called based on how big our input is
        let stranger = true; // runs based on input, or, 0(n)
        a++; // 53 becomes 54. it runs 0(n)
    }
    return a; //runs once, 0(1) 3 step
}
// 3 steps + 0(n) + 0(n) + 0(n) + 0(n)
// Big O(3 + 4n)

//This is BigO Above!
// funChallenge();

// 2nd example 

function anotherFunChallenge(input){
    let a = 5; // O(1)
    let b = 10;// 0(1)
    let c = 50;// 0(1)
    for(let i = 0; i < input; i++){
        let x = i + 1;// O(N)
        let y = i + 2;// 0(N)
        let z = i + 3;// O(N)
    }
    for (let j = 0; j < input.length; j++){
        let p = j * 2;// 0(N)
        let q = j * 2;// 0(N)
    }
    let whoAmI = "I Don't Know";// O(1)
}
// Big O 0f 4 + n(5 times)
// Big 0(4 + 5n)

//----------------------------------------------
//     RULE BOOK


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


// RULE #2, REMOVE CONSTANTS -----

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



// function compressAllBoxes(boxes, boxes2) => {
//     boxes.forEach(fucntion(boxes) {
//         console.log(boxes);
//     });
//     boxes2.forEach(function(boxes){
//         console.log(boxes);
//     });
// }

// log all pairs of array

const theseBoxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            console.log(array[i], array[j])
        }
    }
}
logAllPairsOfArray(theseBoxes)

// O(n * 2) or O(N^2)
// QUADRAtic time because we have more than 2 elements
// O(N^2) is horrible, a lot of interview questions ask how to make these better


// ------------ RULE #4 -------------
 function printAllNumbersAndThenAllPairSums(numbers){
    console.log("These are my numbers:");
    numbers.forEach(function(number){
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstnumber){
        numbers.forEach(function(secondNumber){
            console.log(firstnumber + secondNumber);
        });
    });
 }
 printAllNumbersAndThenAllPairSums([1,2,3,4,5])

 //O(n^2)

 //--------------------------------------------------------------------

 // Space Complexity 

function booooo(n){
    for (let i = 0; i < n.length; i++){
        console.log("boooooo!");
    }
}
booooo([1,2,3,4,5]) //O(1)

function arrayOfHiNTimes(n){
    let hiArray = []
    for(let i = 0; i<n; i++) {
        hiArray[i] = "hi" ;
    }
    return hiArray;
}
console.log(arrayOfHiNTimes(6))

// Space complexity, adding additional memory that you need to use, sometimes, and sometiumes there isnt.. 
// Sometimes you have to knopw if you want to optimize for time complexity or space complexity 

const array = ['hi', 'hi', 'hiasefdai']
console.log(array[0])
console.log(array[array.length-1])