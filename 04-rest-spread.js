//Arrays destructuring
let fruits = ['apple', 'banana', 'orange'];
let [a, b, c] = fruits;
console.log(a, fruits[1], c)

//Objets destructuring
let user = {
    username: 'Ernesto',
    age: 24,
    country: 'PTY'
    }

    let {username, age, country} = user;
    console.log(username, age, country)
    