var nav=(num)=>{
    var i=1
    while (i<=num){
        if (i%3==0 && i%7==0){
            console.log(i,"Navgurukul")
        }
        else if(i%7==0){
            console.log(i,"gurukul")
        }
        else if(i%3==0){
            console.log(i,"nav")
        }
        i++
    }
    }
nav(25)   