function newUser(name , age , country) {
    var name = name || 'John';
    var age = age || 18;
    var country = country || 'US';
    console.log(name, age, country);
    }

//OR

function newUser(name = 'John', age = 18, country = 'USA') {
    console.log(name, age, country);
}

newUser()
newUser('Ernesto', 24, 'PTY')