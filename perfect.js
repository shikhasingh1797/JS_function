function perfect(){
    let n=require("readline-sync")  
    var num=n.question("Enter num:")
    var i=1
    var sum=0
    while(i<num){
        if(num%i==0){
            var c=i
            sum=sum+c

        }
        i++
    }
    if (num==sum){
        console.log("Perfect number")
    }
    else{
        console.log("Not perfect")
    }
}
perfect()