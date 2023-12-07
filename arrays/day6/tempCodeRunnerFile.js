function reverseThis(str){
    //check input
    if(!str || str.length < 2|| typeof str!== 'string'){
        return 'I think we got the wrong data type'
    }
    //create an empty array, loop through my string starting at the end, and append each iteration of my loop to my new array, return it as a string
    const backwards = []
    const totalItems = str.length - 1;
    for (let i = totalItems; i>=0; i--){
        backwards.push(str[i]);
    }
    console.log(backwards)
    //return it as a string
    backwards.join('');
    console.log(backwards)
    return backwards

}

reverseThis('Hi my name is garrett')