async function test1() {
    try {
        // const self = this
        console.log('test1 is start')
        true && await new Promise((resolve, reject) => {
            console.info('Time is out !')
            throw new Error('Time is error')
            // setTimeout(() => {
            //     console.info('Time is out !')
            //     throw new Error('Time is error')
            //     resolve()
            //     // reject('xxxxx')
            // }, 3000)
        }).catch(err => {
            console.log('Promise catch: ', err)
        })
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.info('Time is in 555')
                resolve()
            }, 5555)
        })
    } catch (error) {
        console.log('something is error!')
        console.log(error)
    }
    console.log('test1 is over')
}

async function test2() {
    for (var i of [1, 2, 3]) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.info('Time is in ', i)
                resolve()
            }, 3000)
        })
    }
    console.log('test2 is over')
}
async function test() {
    // await Promise.all([test2(), test1()])
    test2()
    test1()
    // var x = test2()
    // var y = test1()
    // await x
    // await y
    console.log('all is over')
}

// test()
test1()