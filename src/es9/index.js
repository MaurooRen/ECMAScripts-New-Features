//OPERADOR DE REPOSO
const obj = {
    name: 'Mauricio',
    age: 23,
    country: 'CO',
}

let { country, ...all } = obj
console.log(country, all)