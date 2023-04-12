const user = { name: 'John', age: 30 , city: 'New York'};
const { age, ...rest } = user;
//Destructuring the user objects
// age will get the value of the age property
// rest will get the rest of the properties in an Object
console.log(age); // age: 30 
console.log(rest); // { name: 'John', city: 'New York' }
console.log(user)