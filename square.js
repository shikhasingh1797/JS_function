function square(){
    let n=require("readline-sync")  
    var num=n.questionInt("Enter num1:")
    var dic={}
    var i=1
    while(i<=num){
        dic[i]=i*i
        i++
    }
    return dic
}
console.log(square())