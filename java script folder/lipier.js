/*
//those year that is divisible by 100 , if the year is divisible by 4 then it will be a leep year .
function isLeepYear (year){
    if (year % 100 !== 0 && year % 4 === 0){
        return true ;
    }
    else if (year % 100 === 0 && year % 400 === 0){
        return true 
    }
    else {
        return false;
    }
}
const leep = isLeepYear(2002);
const lep = isLeepYear(2004);
const loep = isLeepYear(2302);
console.log(leep,lep,loep);
*/

//--> *simple logic : year will be a leep year if the year is divisible by 4 

function isleep(years){
    if (years % 4 === 0){
        return true ;
    }
    else{
        return false ;
    }
}
const isp = isleep(2000);
console.log (isp);