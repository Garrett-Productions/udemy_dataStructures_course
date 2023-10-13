const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla']
const largeArray = new Array(100).fill('nemo')
const largerArray = new Array(1000).fill('nemo')
const evenLargerArray = new Array(1000).fill('nemo')
const largestArray = new Array(100000).fill('nemo')

function findNemo(array){
    let t0 = performance.now();
    for(let i = 0; i< array.length; i++){
        if(array[i] === 'nemo'){
            console.log("found nemo!");
        }
    }
    let t1 = performance.now();
    console.log("Call to find Nemo took " + (t1-t0) + 'milliseconds')
}

findNemo(largestArray)