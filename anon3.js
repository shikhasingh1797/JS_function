var max=function(num){
    var a=0
    var i=0
    while(i<num.length){
        if (num[i]>a){
            a=num[i]
        }
        i=i+1
    }
    return a
}
var num=[1,45,7,3,9,23,8]
console.log("Maxium number:",max(num))