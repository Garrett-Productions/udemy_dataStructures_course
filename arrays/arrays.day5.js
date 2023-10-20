const strings = ["a", "b", "c", "d"]
// 4*4 = 16 bytes of storage
// we stored it, lets grab it
console.log(strings[2]) // hey you stored a DS in memory called strings which is an array. grab the 3rd value or 2nd index from this array

// push 
strings.push('e')
console.log(strings)
// because we are just adding to the end, its an O(1) operation, we arent looping, we are just going through it one time.
strings.pop();
console.log(strings)