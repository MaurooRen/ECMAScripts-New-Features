//DEFINING DEFAULT VALUES:
//Before ECMAScriopt 6
function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 21;
    var country = country || 'CO';
    console.log(name, age, country);
}

//ECMAScript 6
function newFunction2(name = 'Oscar', age = 21, country = 'CO') {
    console.log(name, age, country)
}
newFunction2(); //Will take the default values
newFunction2('Mauricio', 23, 'CO');




//TEMPLATE LITERALS:
let hello = "Hello";
let world = "World";

//Before ECMAScript 6
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

//ECMAScript 6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)





//MULTILINE STRING:
//Before ECMAScript 6
let lorem = "Lorem ipsum dolor sit amet, \n"
+ "consectetur adipiscing elit"
console.log(lorem)

//ECMAScript 6
let lorem2 = `Lorem ipsum dolor sit amet,
consectetur
adipiscing
elit`
console.log(lorem2)




// DESESTRUCTURAR
let person = {
    'name': 'Mauricio',
    'age': 23,
    'country': 'CO'
}

//Before ECMAScript 6
console.log(person.name, person.age)

//ECMAScript 6
let { name, age, country } = person
console.log(age, country)




//OPERADOR DE PROPAGACION

let team1 = ['Mauricio', 'Alejandro', 'Andrea'];
let team2 = ['Ashley', 'Alvaro', 'Mellisa'];

let education = ['David', ...team1, ...team2];
console.log(education)



//VAR -> Global Variable
{
    var globalVar = 'Global Var'
}

//LET -> Scope Variable
{
    let globalLet = 'Global Let'
}

console.log(globalVar)
console.log(globalLet) //Not accesible cause Let it's a Scope Variable

//CONST
const a = 'b'
//a = 'c' //Const DO NOT allow to make changes in the variable

console.log(a)




//IMPROVE OBJECTS

let name = 'Oscar'
let age = 32

//ECMAScript 6
// let obt = {
//     name: name,
//     age: age
// }

//ECMAScript 6
let obj2 = { name, age } //name & age came from the top variables with the same varName
console.log(obj2)





//ARROW FUNCTION
const names = [
    { name: 'Santiago', age: 21 }
    { name: 'Sara', age: 19 }
]

//Before ECMAScript 6
let listOfNames = names.map(function(item) {
    console.log(item.name)
})

//ECMAScript 6
let listOfNames2 = names.map(item => {
    console.log(item.name)
})

// const listOfNames3 = (name, age, country) => {
//     ...mi codigo va aqui
// }

// const listOfNames4 = name => {
//     ...mi otro codigo aqui, jeje
// }

const square = num => num * num;






//PROMISES

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Yey!')
        } else {
            reject('Ups! Something go wrong!')
        }
    });
}

helloPromise()
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })





//CLASS
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return valueA + valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(5, 6))




//MODULES
import { aloha } from './module';
aloha();


//GENERATORS
function* AlohisMundis() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatoAlohis = AlohisMundis();
console.log(generatoAlohis.next().value)
console.log(generatoAlohis.next().value)
console.log(generatoAlohis.next().value)