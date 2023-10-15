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

findNemo(largestArray)
findNemo(largeArray)
// When we are talking about big(0), and scalability of code, we simply mean when we grow bigger and bigger with our input
// how much does our algorithm slow down? The less it slows down the better our algorithm is.
// Play around with the variables above to plug them into to the function call and check out your CPU's run time
// Using JS built ins, array.fill() and performance.now()