function* num(){
    let i=0
    yield 1;
    yield 2;
    yield 3;
    yield 4
    yield 5
}
const gen=num();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())