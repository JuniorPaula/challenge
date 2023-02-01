function hello() {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve('hello')
        }, 1000)

    })

}

function world() {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve('word :D')
        }, 2000)

    })
}

hello().then(data => {
    world().then(value => { 
        console.log(data, value)
        console.log('Success :X')
    })
})