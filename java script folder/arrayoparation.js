// objective : write a function to give me the sum of all number in array .
/*
step-1 : declare a function 
step-2 : call check wether the function i called properly
step-3 : set a parameter (s)
step-4 : pas the parameter(s), check wether parameter i passed in proper format
*/

function sumOfNumbers(numbers){
    let sum = 0;
    for (const number 0f numbers){
        console.log(number);
        sum = sum + number ;
    }
    return sum ;
}
const num = [1,2,3,6];
const sum = sumOfNumbers(num);
console.log(sum);