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



function myPromise(executor) {
    let _this = this
    _this.state = 'pending'
    _this.value = undefined
    _this.reason = undefined
    _this.onResolvedCallbacks = []
    _this.onRejectedCallbacks = []
    function resolve(result) {
        if (_this.state === 'pending') {
            _this.state = 'resolved'
            _this.value = result
            _this.onResolvedCallbacks.forEach(function(fn) {
                fn(result)
            })
        }
    }
    function reject(result) {
        if (_this.state === 'pending') {
            _this.state = 'rejected'
            _this.reason = result
            _this.onRejectedCallbacks.forEach(function(fn) {
                fn(result)
            })
        }
    }
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function(value) {
        return value
    }
    onRejected = typeof onRejected === 'function' ? onRejected : function(value) {
        return value
    }
    // if (_this.state === 'resolved') {
    //     onFulfilled(_this.value)
    // }
    // if (_this.state === 'rejected') {
    //     onRejected(_this.reason)
    // }
    let promise2;
    if (_this.state === 'resolved') {
        promise2 = new myPromise(function(resolve, reject) {
            setTimeout(function() {
                try {
                    let x = onFulfilled(_this.value)
                    resolvePromise(promise2, x, resolve, reject)
                    // resolve(x)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }
    if (_this.state === 'rejected') {
        promise2 = new myPromise(function(resolve, reject) {
            setTimeout(function() {
                try {
                    let x = onRejected(_this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                    // resolve(x)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }
    if (_this.state === 'pending') {
        promise2 = new myPromise(function(resolve, reject) {
            _this.onResolvedCallbacks.push(function() {
                setTimeout(function() {
                    try {
                        let x = onFulfilled(_this.value)
                        resolvePromise(promise2, x, resolve, reject)
                        // resolve(x)
                    } catch (error) {
                        reject(error)
                    }
                })
            })
            _this.onRejectedCallbacks.push(function() {
                setTimeout(function() {
                    try {
                        let x = onRejected(_this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                        // resolve(x)
                    } catch (error) {
                        reject(error)
                    }
                })
            })
        })
    }
    return promise2

}

