const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

const secFunc = async () => {
    const some = await fnAsync()
    console.log(some)
}
console.log('Before ')
secFunc()
console.log('After ')