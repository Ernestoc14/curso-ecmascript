const users = { 
        carlos : { age: 25 },
        valeria : { age: 19 }
    }
console.log(users?.patricia?.name || "No existe este dato almacenado") // 25