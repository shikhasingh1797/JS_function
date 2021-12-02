var speed_checker=function(){
    let n=require("readline-sync")  
    var speed=n.questionInt("Enter num1:")
    if(speed<=70){
        console.log("Okk")
    }
    else if(speed>70){
        var sub=speed-70
        var point=Math.floor(sub/5)
        if (point>=12){
            console.log("You got point:",point)
            console.log("License suspended")
        }
        else{
            console.log("You got point:",point)
        }
    }
}
speed_checker()