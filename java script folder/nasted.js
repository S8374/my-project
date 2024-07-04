const collage = {
    name : " gmmsc",
    class : [ "10" , "11","12"],
    events : ["21 february", "boi mela"],
    unique :{
        color : " blue",
        result : {
            gpa : 5 ,
            merit : "top",
        }
    }
}
//console.log(collage.unique.color)
//change merit/change output
collage.unique.result.merit = "top to last"
//.
console.log(collage.unique.result.merit)
//.change events/change output under arrys
collage.events[0]="Joy bangla"
console.log(collage.events[0])
//delate |
delete collage.gpa
console.log(collage)

