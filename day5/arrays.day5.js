const strings = ["a", "b", "c", "d"]

console.log(strings[2]) // hey you stored a DS in memory called strings which is an array. grab the 3rd value or 2nd index from this array

// push 
strings.push('e') // O(1), only 1 operation
console.log(strings)
// because we are just adding to the end, its an O(1) operation, we arent looping, we are just going through it one time.
strings.pop();
console.log(strings)
strings.pop(); //  0(1)
console.log(strings)

strings.unshift('x') // O(n) have to move all values in the array and insert a new [0] value
console.log(strings) // 5 operations to realign indexes

// strings.splice(2, 0, 'x') 
// console.log(strings)
// strings.splice(2,1)
strings.splice(2,2) //  Big O(n/2) or because it stops where it needs to
console.log(strings)
strings.push('c')
strings.push('d')
console.log(strings)
// accessing the array, 0(1), push and pop


// -------------------------Implemeting an Array----------------------------------------------------------- //

