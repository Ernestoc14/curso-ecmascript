const promise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Yooo')
        }else {
            reject('F')
        }
    })
}

promise()
.then((response) => console.log(response))
.catch((error) => console.log(error))
.finally(() => console.log('Finally'))