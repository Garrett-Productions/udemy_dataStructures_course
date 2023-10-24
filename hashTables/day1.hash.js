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