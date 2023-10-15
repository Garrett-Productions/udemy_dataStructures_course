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