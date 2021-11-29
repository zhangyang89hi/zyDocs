// function testTable(target) {
//     target.sname = 'xxx'
// }
// @testTable
// class tableS {

// }

// function testTableX(sname) {
//     return function(target) {
//         target.sname = sname
//     }
// }


// @testTableX('pingan')
// class testTablePA {

// }
// console.log(testTablePA.sname)

// @testTableX('pufa')
// class testTablePF {

// }
// console.log(testTablePF.sname)






// // @transfCar
// class Car {
//     @consoleLog
//     run() {
//         console.log('this is a car')
//     }
// }

// function transfCar(target, value, descriptor) {
//     return class Bike {
//         run() {
//             console.log('this is a bike')
//         }
//     }
// }
// function consoleLog(target, value, descriptor) {
//     console.log(new Date())
//     const oldValue = descriptor.value
//     descriptor.value = function() {
//         return oldValue.apply(this, arguments)
//     }
//     return descriptor
// }

// new Car().run()


// class Fib {
//     fib(n) {
//         if (n === 1) return 1
//         if (n === 2) return 2
//         return this.fib(n-1) + this.fib(n-2)
//     }
// }

// const fibonacci = (function () {
//     const cache = {}
//     function fib(n) {
//         if (n === 1) {
//             return 1
//         }
//         if (n === 2) return 1
//         if (cache[n]) return cache[n]
//         const result = fib(n-1) + fib(n-2)
//         cache[n] = result
//         console.log(n, ' ', result)
//         return result
//     }
//     return fib
// })()

// console.log('fibonacci', fibonacci(100))


function log(target, name, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function() {
        console.log(`calling ${name} with`, arguments)
        return oldValue.apply(this, arguments)
    }
    return descriptor
}

function _debounce(func, wait, immediate) {
    var timer = null
    return function() {
        const self = this
        const args = arguments
        if (!timer) {
            immediate && func.apply(self, args)
            timer = setTimeout(()=> {
                timer = null
                !immediate && func.apply(self, args)
            }, wait)
        }
    }
}
function debounce(wait, immediate) {
    return function(target, name, descriptor) {
        var oldValue = descriptor.value
        descriptor.value = _debounce(oldValue, wait, immediate)
        return descriptor
    }
}
function timeConsum(target, name, descriptor) {
    var oldValue = descriptor.value
    descriptor.value = function() {
        // var startTime = Date.now()
        // console.time()
        return oldValue.apply(this, arguments)
        // var endTime = Date.now()
        // console.log('time consuming: ', endTime-startTime)
        // console.timeEnd()
    }
    return descriptor
}
function mixin(mixins) {
    return function(target) {
        for (mx of mixins) {
            var desc = Object.getOwnPropertyDescriptors(mx)
            var keys = Object.getOwnPropertyNames(mx)
            for (key of keys) {
                if (!target.hasOwnProperty(key)) {
                    Object.defineProperty(target.protoType, key, desc[key])
                }
            }
        }
    }
}


class Math {
    constructor() {
        this.content = ''
        this.cache = {}
    }
    @log
    add(a, b) {
      return a + b;
    }
    @debounce(5000, false)
    say(content) {
        this.content = content
        console.log(`say time ${this.content} after...`)
    }
    @timeConsum
    fib(n) {
        if (n === 1) {
            return 1
        }
        if (n === 2) return 1
        if (this.cache[n]) return this.cache[n]
        const result = this.fib(n-1) + this.fib(n-2)
        this.cache[n] = result
        console.log(n, ' ', result)
        return result
    }

}
const m = new Math()
m.add(100, 200)
// setInterval(() => {
//     m.say('hh')
// }, 1000);
m.fib(10)