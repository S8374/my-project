/*
*create function that will return only the even numbers
*return the sum of even numbers
*/
function evenNumbersonly(numbers){

    for (const number of numbers){
        if (number % 2 == 0){
            console.log(number);
        }
    }
}
const numbers = [2,2,2,2];
const evenNumbersonly(numbers);