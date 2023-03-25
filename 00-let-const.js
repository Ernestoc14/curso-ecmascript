const animal = 'Dog'
//animal = 'Cat'
console.log(animal)

const fruits = () => {
    if (true) {
        var fruits1 = 'apple' //var is global
        let fruits2 = 'kiwi' //let is local
        const fruits3 = 'banana' //const is local
    }
    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
}