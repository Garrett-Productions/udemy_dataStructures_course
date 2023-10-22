class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data(index)
    }
    push(item){
        this.data[this.length] = item;
        this.length++
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length-1]; // delete the value of the index
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item
    }
    shiftItems(index){
        for (let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
            // so, an array of [0,1], becomes, [1], the first indeice gets replaced by the 2nd
        }
        this.length[this.length-1]
    }
}

const newArray = new MyArray();
newArray.push("Hey Garrett");
newArray.push("What's up!");
console.log(newArray);
newArray.pop()
console.log(newArray);
newArray.delete(1)
console.log(newArray);