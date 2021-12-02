function multiple(a,b){
    let n=require("readline-sync")  
    var num=n.questionInt("Enter num1:")
    var i=1
    while (i<=num){
        if (i%a==0){
            console.log(i)

        }
        if (i%b==0){
            console.log(i)
        }
        i=i+1
    }

}
multiple(3,5)