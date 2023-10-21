Sometimes called list, organize items sequentically,
Built ins are: Lookup O(1), push O(1), insert O(n), delete O(n)

Arrays are ment if you need to store data and iterate over it step by step, lookup and access with arrays in constant time, push is also fast but insert and delete are linear time

const strings = ["a", "b", "c", "d"]
    4*4 = 16 bytes of storage
    we stored it, lets grab it

const stringsExShow = 

['x', 'a', 'b', 'c', 'd']; 
0    1    2    3    4

strings.unshift('x') // O(n) have to move all values in the array and insert a new [0] value
console.log(strings) // 5 operations to realign indexes

// perhaps arrays aren't the best data structure to use if you're gonna need to add items to the beginning of the array

//What about adding to the middle of the array?
//What about Splice?

strings.splice() takes in an index to start, 2nd param is the amount of indexes to delete, 3rd potential param is the optional param, of adding a value, ex) ['x']