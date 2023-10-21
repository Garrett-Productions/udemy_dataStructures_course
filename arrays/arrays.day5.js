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

const strings = ["a", "b", "c", "d"]
console.log(strings)
// strings.splice()
// strings.splice(2, 0, 'x') 
// console.log(strings)
// strings.splice(2,1)
strings.splice(2,2) //  Big O(n/2) or because it stops where it needs to
console.log(strings)
strings.push('c')
strings.push('d')
console.log(strings)
// splice takes a start number, or index of the array, the 2nd param is how many values to delete from there,
// the 3rd value is the value to add to the array

// when hovering over

// (method) Array<string>.splice(start: number, deleteCount?: number | undefined): string[] (+1 overload)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @returns — An array containing the elements that were deleted.



// accessing the array, 0(1), piush and pop
// splice, shifting and deleting, is O(n) might not be the fastest when it comes to arrays.

// But their are 2 types of arrays