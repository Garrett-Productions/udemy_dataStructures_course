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

function findNemo(array){
    for(let i = 0; i< array.length; i++){
        console.log("running")
        if(array[i] === 'nemo'){
            console.log("found nemo!");
        }
    }

    console.log("Call to find Nemo took " + (t1-t0) + 'milliseconds')
}