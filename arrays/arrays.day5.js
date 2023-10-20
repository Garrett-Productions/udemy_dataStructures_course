const strings = ["a", "b", "c", "d"]
// 4*4 = 16 bytes of storage
// we stored it, lets grab it
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

const stringsExShow = 
['x', 'a', 'b', 'c', 'd']; 
//0    1    2    3    4

// perhaps arrays aren't the best data structure to use if you're gonna need to add items to the beginning of the array

//What about adding to the middle of the array?
//What about Splice?

strings.splice() 
// splice takes a start number, or index of the array, the 2nd param is how many values to delete from there,
// the 3rd value is the value to add to the array

// when hovering over
// (method) Array<string>.splice(start: number, deleteCount?: number | undefined): string[] (+1 overload)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @returns — An array containing the elements that were deleted.

