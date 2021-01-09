let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat())


let array2 = [1,2,3,4,5]
console.log(array2.flatMap(value => [value, value * 2]))


//Delete spaces at the beginning
let hello = '                  hello world'
console.log(hello)
console.log(hello.trimStart())

//Delete spaces at the end
let hello2 = 'hello world        '
console.log(hello2)
console.log(hello2.trimEnd())





try {

} catch {
    error
}



let entries = [["name", "Mauricio"], ["age", 23]];
console.log(Object.fromEntries(entries))



let mySymbol = 'My Simbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)