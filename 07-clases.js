/*  
// declarando
class User {}

// Crear una instancia
// const newUser = new User()

class user {
    //metodos
    greeting(){
        return 'Hello'
    }
}
const ern = new user()
console.log(ern.greeting())

const dev = new user()
console.log(dev.greeting())

// constructor
class usere {
    constructor(){
        console.log('new user')
    }
    greeting(){
        return 'Hello'
    }
}
const erne = new usere()

// this
// Referencia al elemento padre que lo contiene
class user{
    constructor(name){
        this.name = name
    }
    //metodos
    speak(){
        return "Hello"
    }
    greetinger(){
        return `Hello, my name is ${this.name}`
    }
}
const ella = new user('Ella')
console.log(ella.greetinger())
*/

// setters and getters
class user {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    //metodos
    speak(){
        return "Hello"
    }
    greetinger(){
        return `Hello, my name is ${this.name}`
    }
    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n
    }
}

const dev = new user('David', 14)
console.log(dev.uAge)
console.log(dev.uAge = 15)