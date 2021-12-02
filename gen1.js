function* num(){
    var i=1
    while (i<2)(
        yield i++
    )
}
const gen=num();
console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())