//Recibes 2 obj por parametros, debes unir ambos obj 

let json1 = { name: "Mr. Michi", food: "Pescado"};
let json2 = { age: 12, color: "blanco"};

//input solution( {name: "Bigotes", food: "Pollito"})
//output { name: "Bigotes", food: "Pollito", age: 12, color: "blanco"}
function solution(json1 , json2) {
    let union = {...json1, ...json2}
    console.log(union)
}
solution( {name: "Bigotes", food: "Pollito"}, json2)