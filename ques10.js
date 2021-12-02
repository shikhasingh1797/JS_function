function first(marks){
    var store=stu(marks)
    var i=0
    var count=0
    while(i<store.length){
      if(store[i]>20){
        count=count+1
    }
    i++
}
    return count
}
  function stu(){
    var marks=[23,34,21,12,31,13,16,78]
    return marks
}
console.log(first())