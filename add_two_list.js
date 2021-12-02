function add_list(list1,list2){
    var i=0
    var sum=0
    while (i<list1.length){
        sum=list1[i]+list2[i]
        console.log(sum)
        i++
    }
}
add_list([50,60,10],[10,20,13])