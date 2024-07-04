/*
 1 - function takes an array as parameter
-give me the avarage of the odd numbers is the array
2 -  put odd number in array
*/
//1
/*
function addavareg (numbers){
    for(const number of numbers){
        if (number % 2 === 1){
            console.log(number);
        }
    }
    

}
const numbers = [212,22,33,901,301];
const avg = addavareg(numbers);
*/

// 2
function addavareg2 (numbers){
    const odds = [];
    for (const number of numbers){
        if (number % 2 === 1){
            odds.push(number);
        }
        
    }
    //console.log(odds);
    let sum = 0;
    for (const number of odds){
        sum =sum + number ;
    }
    const count = odds.length;
    console.log(sum, count);
}
const numbers = [122,21,2,1,91,33,72,81];
const num = addavareg2(numbers);