//OPERADOR DE REPOSO
const obj = {
    name: 'Mauricio',
    age: 23,
    country: 'CO',
}

let { country, ...all } = obj
console.log(country, all)


const obj1 = {
    name: 'Mauricio',
    age: 23,
}

const obj2 = {
    ...obj1,
    country: 'CO',
}

console.log(obj2)