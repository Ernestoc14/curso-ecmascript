const promise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Yooo')
        }else {
            reject('F')
        }
    })
}

promise()
.then((response) => console.log(response))
.catch((error) => console.log(error))