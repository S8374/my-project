//for a given string tell me whether it ha even number of characters or not

function evenSizestring (str){
     const size = str.length;
     //console.log(size);
     if (size % 2 === 0){
       // console.log("even size");
        return true ;
     }
    else{
        //console.log("odd size");
        return false;
    }
}
const ooo = evenSizestring("sabbir") ;
//console.log(ooo);


//-->
function numberOfLength(number){
    const len = number.length;
    return len;
}
const nu =  numberOfLength([122232222,32332,3,233,243232,2,232223,23232,23,2323232,23,23,232,323232,23232,233,232,344,344343,43,43,434,343,434,33,43,43,4,34,3,43]);
//console.log(nu);