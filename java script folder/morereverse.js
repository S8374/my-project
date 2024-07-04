const number = [ 1 ,2, 3, 4,5,6]
//console.log(number)
//number.reverse();  //orginal arry kaw change korA FALA .
//console.log(number) //-->[6,5,4,3,2,1]

//const reversed = number.reverse();
//console.log(reversed)

//const rev_number =[];
//for (num of number){
   // console.log(num)
    //rev_number.push(num)
    //rev_number.unshift(num)
//}
//console.log(rev_number)

//another way 

const revere = [];
for (let i=0 ; i<number.length; i++){
    const now = number[i];
    revere.unshift(now);
}


//another way
const rev_rev_number =[];
for (let i = number.length -1 ; i>=0 ; i--){
    const num = number[i];
    console.log(num);
    rev_rev_number.push(num);
}
console.log(rev_rev_number);

