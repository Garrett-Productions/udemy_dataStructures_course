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

const backwards = []
const totalItems = str.length-1
for(let i = totalItems; i >= 0; i--){
    // console.log(str)
    console.log(totalItems)
    backwards.push(str[i]);
}
console.log(backwards);
return backwards.join('')
}

reverse("Hi my name is Andrei")