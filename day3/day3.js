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
    let a = 10; // 0(1)
    a = 50 + 3; // 0(1)
    for(let i = 0; i < input.length; i++){
        anotherFunction(); // we dont know this, its called based on how big our input is
        let stranger = true; // runs based on input, or, 0(n)
        a++; // 53 becomes 54. it runs 0(n)
    }
    return a; //runs once, 0(1)
}
// 3 steps + 0(n) + 0(n) + 0(n)
3 + 
funChallenge();