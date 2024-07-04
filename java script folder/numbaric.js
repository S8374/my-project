//--------->      heiest scors  . 
function heightscore (scores){
    var max = scores [0];
    for (var x =1 ; x < scores.length ; x++){
        if (max < scores[x]){
            max = scores [x];
        }
    }
    return max ;
}
var scores =[11,23,21,28,4545];
var maxscore = heightscore (scores);
console.log(maxscore);
