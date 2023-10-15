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
        anotherFunction();
        let stranger = true;
        a++;
    }
    return a;
}
funChallenge();