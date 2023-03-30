function* iterate(array) {
    for (let value of array) {
        yield value; // yield is a keyword that returns a value and pauses the function
                    // value changes on each iteration
    }
}

const it = iterate([1, 2, 3]);
console.log(it.next().value);  // 1
console.log(it.next().value);  // 2