function reversal(str){
    if (!str || str.length < 1 || typeof str !== 'string'){
        return "Wrong Data Type"
    }
    const backwards = []
    // const actualLength = str.length - 1;
    for(let i = str.length; i >= 0; i--){
        // console.log(str[i])
        backwards.push(str[i]);
        // console.log(backwards)
    }
    // console.log(backwards.join(''))
    console.log(backwards)
    return backwards.join('')
    
}
reversal("Hi my name is Andrei")