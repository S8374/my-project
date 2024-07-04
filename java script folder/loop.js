const mobile = {
    brand : "iphone",
    price :20000,
    color: "black",
    camara:"xoos",
    isNew:true ,
}
//for of = arrry 
//for in = object
//prop output a variable ar name dakhaba (brand ,price ........)
//for(const prop in mobile)
 //console.log(prop)
//console.log(mobile[prop])
//key
//keys is a array
const keys = Object.keys(mobile);
console.log(keys); //name dakhaba arrayr modda variable ['brand',........ ]

for (const key of keys){
console.log(key);} //VARIABLE NAME SERIALLY ASABA UPOR THA

for (const key of keys){
    console.log(key, mobile[key]);
}
for (const key of keys){
    console.log(key,":",mobile[key])//cotation add hoba
}