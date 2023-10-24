class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % // this gives us a random num between 0-65,000 for every char in our string, times it by itself, and then runs a modulo to keep it within the length
            this.data.length
            console.log(hash)
            console.log(key.charCodeAt())
        }
        return hash;
    }
}
const myHashTable = new HashTable(50)
console.log(myHashTable)
myHashTable._hash('grapes');