 function printAllNumbersAndThenAllPairSums(numbers){
    console.log("These are my numbers:");
    numbers.forEach(function(number){
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstnumber){
        numbers.forEach(function(secondNumber){
            console.log(firstnumber + secondNumber);
        });
    });
 }
 printAllNumbersAndThenAllPairSums([1,2,3,4,5])