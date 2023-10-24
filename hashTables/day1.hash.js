let user = {
    age: 54,
    name:'John',
    magic: true,
    scream: function(){
        console.log('ahhhh!')
    }
}

console.log(user.age) // O(1)
user.spell = "abra kadabra" //O(1)
user.scream(); // O(1)

// this is BigO(n/k) k being the size of our hash table, but since we remove constraints, its just bigO(n)

// With a MAP function, it allows you to save any data type as the key,
// with an object, a key must be a string
// MAP maintains insertion order
const newMap = new Map()

const newSet = Set() // only stores the keys, no values

// Example of a Hash Table 
// with has tables we can set the value of 'grapes' and then 'get' the value of grapes
class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash;
    }
}
const myHashTable = new HashTable(50)
console.log(myHashTable)
myHashTable.set('grapes', 10000)