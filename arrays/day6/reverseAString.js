// We can treat a string just like an array an access it by index, and run built ins like we can on an array

// first check if its a string
// second, create a var as an empty array thats gonna house all my reversed values
// third, create a variable equal to the string minus 1 
// fourth, loop through that string and decrement i every time 
// fifth, in the code block, .push each char or index to our array var.
// sixth, console log our array var for assurance, and return our array as a string by .join
function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "hmm wrong data type, try again";
    }

const backwards = [];
const totalItems = str.length-1;
for(let i = totalItems; i >= 0; i--){
    console.log(str.length)
    console.log(totalItems)
    backwards.push(str[i]);
}
console.log(backwards);
return backwards.join('')
}

reverse("Hi my name is Andrei")
// easy first way
// heres the second with pure built ins

function reverse2(str){
    return str.split('').reverse().join('');
}
console.log(reverse2("Hi my name is Andrei")); 

// now with ES6

const reverse3 = str => [...str].reverse().join('');

console.log(reverse3("Hi my name is Andrei"))

function reversal(str){
    if (!str || str.length < 1 || typeof str !== 'string'){
        return "Wrong Data Type"
    }
    const backwards = []
    // const actualLength = str.length - 1;
    for(let i = str.length; i >= 0; i--){
        // console.log(str[i])
        backwards.push(str[i]);
        // console.log(backwards)
    }
    // console.log(backwards.join(''))
    console.log(backwards)
    return backwards.join('')
    
}
reversal("Hi my name is Andrei")