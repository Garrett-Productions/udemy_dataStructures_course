let user = {
    age: 54,
    name:'John',
    magic: true,
    scream: function(){
        console.log('ahhhh!')
    }
}

console.log(user.age)
user.spell = "abra kadabra"
user.scream();

// this is BigO(n/k) k being the size of our hash table, but since we remove constraints, its just bigO(n)