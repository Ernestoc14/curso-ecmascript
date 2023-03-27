//Arrays destructuring
let fruits = ['apple', 'banana', 'orange'];
let [a, b, c] = fruits;
console.log(a, fruits[1], c)

//Objets destructuring
let user = {
    username: 'Ernesto',
    age: 24
}
    let {username, age} = user;
    console.log(username, age)   

//Spread operator
    let person = { name: 'Ernesto', age: 24};
    let country = 'PTY';
                                        // We create a new Object using the spread operator 
                                        // to copy the values of the other objects
    let data = {...person, country};    // ...person = person.name, person.age
    console.log(data)                  

//Rest operator
    function sum(num, ...values) {
        console.log(values)
        console.log(num+values[0])
        return num + values[0]
    }

    sum(1, 2, 3, 4, 5)