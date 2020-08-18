// async function test1() {
//     // const self = this
//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.info('Time is out !')
//             resolve()
//         }, 3000)
//     });
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.info('Time is in 555')
//             resolve()
//         }, 5555)
//     })
//     console.log('test1 is over')
// }

// async function test2() {
//     for (var i of [1, 2, 3]) {
//         await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.info('Time is in ', i)
//                 resolve()
//             }, 3000)
//         })
//     }
//     console.log('test2 is over')
// }
// async function test() {
//     // await Promise.all([test2(), test1()])
//     test2()
//     test1()
//     // var x = test2()
//     // var y = test1()
//     // await x
//     // await y
//     console.log('all is over')
// }

// test()


async function t1() {
    var s = await new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('timeout 1 is over ')
            resolve(1)
        }, 3000)
    })
    console.log('function t1 is over')
    return 6
}


async function t2() {
    var s = await new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('timeout 2 is over ')
            resolve(2)
        }, 5000)
    })
    console.log('function t2 is over')
    return 6
}

async function test() {
    // await Promise.all([t1(), t2()])
    // console.log('t1', t1())
    // console.log('t2', t2())
    var x = await t1()
    var y = await t2()
    console.log(x)
    console.log(y)
    console.log('all is over test')
}

test()

