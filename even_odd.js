function add_list(list1,list2){
    var i=0
    var sum=0
    while (i<list1.length){
        sum=list1[i]+list2[i]
        if (sum%2==0){
            console.log("Dono even hai")
        }
        else{
            console.log("Dono even nhi hai")
        }
        i++
    }
}
add_list([50,60,10],[10,20,13])