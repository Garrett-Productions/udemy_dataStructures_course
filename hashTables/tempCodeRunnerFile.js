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
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
        return this.data
    }
    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket)
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1] // return the value if the key matches
                }
            }
        } // if there are no collisions it'll be O(1)
        return undefined
    }
}
const myHashTable = new HashTable(50)
console.log(myHashTable)
myHashTable._hash('grapes');
// myHashTable.set('grapes', 100000)
console.log(myHashTable)