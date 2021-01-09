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



const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Yey!')
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('This is the end')) //This property allow us to execute code one the entire execution has end