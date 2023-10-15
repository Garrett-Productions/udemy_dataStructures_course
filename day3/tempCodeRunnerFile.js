const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla']

function findNemo(array){
    for(let i = 0; i< array.length; i++){
        console.log("running")
        if(array[i] === 'nemo'){
            console.log("found nemo!");
        }
    }

    console.log("sup")
}
findNemo(everyone)