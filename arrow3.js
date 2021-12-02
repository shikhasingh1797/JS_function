var prime = (num) => {
    var i = 1
    var count = 0
    while (i < num){
        if(num%i==0){
            count=count+1
        }
        i++
    }
    if(count==1){
        console.log("Prime number")
    }
    else{
        console.log("Not prime number")
    }
}
prime(23)