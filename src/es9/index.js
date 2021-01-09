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
            // ? resolve('Yey!')
            ? setTimeout(() => resolve('Yey! after some time'), 3000)
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('This is the end')) //This property allow us to execute code one the entire execution has end




    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2018-04-20')
    const year = match[1]
    const month = match[2]
    const day = match[3]

    console.log(year, month, day)