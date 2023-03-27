// enhanced object literals

function newUser(name, age, country, uID) {
    return {
        name,
        age,
        country,
        id: uID
        }
}
console.log(newUser("ern",14,"usa", 123))