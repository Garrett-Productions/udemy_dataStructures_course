const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla']
const largeArray = new Array(100).fill('nemo')
const largerArray = new Array(1000).fill('nemo')
const evenLargerArray = new Array(10000).fill('nemo')
const largestArray = new Array(100000).fill('nemo') // big 0(n)

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

findNemo(everyone)
findNemo(largeArray)

const findNemo2 = array => {
    array.forEach(fish => {
        if(fish === 'nemo') {
            console.log("Found Nemo")
        }
    })
}

const findNemo3 = array => {
    for (let fish of array) {
        if(fish === 'nemo'){
            console.log("Found Nemo")
        }
    }
}

findNemo2(everyone)
findNemo3(everyone)