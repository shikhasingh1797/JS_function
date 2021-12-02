function average(a,b,c){
    var sum=0
    var count=0
    var ave=0
    var store=0
    let n=require("readline-sync")  
    var a=n.questionInt("Enter num1:")
    var b=n.questionInt("Enter num2:")
    var c=n.questionInt("Enter num3:")
    sum=a+b+c
    store=sum
    var i=0
    while(sum>0){
        sum=Math.floor(sum/10)
        count=count+1
        i++
    }
    ave=Math.floor(store/count)
    return ave
    

}
console.log("Average:",average())