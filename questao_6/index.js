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

(async () => {
    const promisse_1 = await hello()
    const promisse_2 = await world()

    console.log(promisse_1, promisse_2)
    console.log('Success :X')
})()