// const config = {
//     name: 'ax',
//     url: ''
// }

// var configPromise = Promise.resolve(config);
// console.log(typeof configPromise)
// console.log(configPromise)

// configPromise.then(function(val) {
//     console.log(val)
// }).catch(function(err) {
//     console.log(err)
// })

// process.stdin
// process.stdout
// process.stderr


// function nextNode(node) {
//     if (node.hasChildNodes()) {
//         return node.firstChild
//     } else if (node.nextSibling) {
// 		return node.nextSibling
//     } 
//     while(node.parentNode) {
//         if (node.parentNode.nextSibling) return node.parentNode.nextSibling
//         node = node.parentNode
//     }
//     return null
// }
// function getNodeId(node, id) {
//     if (!node) return null
//     while(node) {
//         if(node.id = id) return node
//         node = nextNode(node)
//     }
//     return null
// }

var o = {
    a: 1,
    b: 2,
    c: 3
}


console.log(typeof o.a)

function proxy(obj, prop) {
    let val= obj[prop];
    console.log('proxy: ', val)
    Object.defineProperty(obj,prop,{
        get:function() {
            val = "x"
            console.log('get: ', val)
            return val;
        },
        set:function(newVal){
            console.log(val)
            val = newVal
        }
    })
}

//  proxy(o, 'a')

class Param {
    constructor(data) {
        this.data = data
        data.a = 'xx'
        this.data.b = 'bb'
        data =null
        console.log(this.data)
    }
}

new Param(o)
console.log('o',o)

function getInfo() {
    console.log('getInfo:')
    console.log(arguments)
    var arr = Array.prototype.slice.call(arguments)
    console.log(arr)
}

getInfo('a','b','c','d','e')


/**
 * 判断数据类型
 */
const isType = function(type) {
    return function(target) {
        return Object.prototype.toString.call(target) === `[object ${type}]`
    }
}
const isArray = isType('Array')

function isType(type, o) {
    if (typeof type !== 'string') {
        throw('type must be string')
    }
    const base = ['string', 'number', 'function', 'undefined', 'object']
    const complex = ['Object', 'Function', 'Array', 'Date', 'RegExp', 'Null', 'ArrayBuffer', 'Blob', 'File']
    if (base.includes(type)) {
        return typeof o === type
    } else if (complex.includes(type)) {
        return Object.prototype.toString.call(o) === `[object ${type}]`
    } else {
        return false
    }
}

/**
 * myMap
 */
var numbers = [1, 3, 5, 7, 9]

numbers.map(function(item, index) {
    return item * 2
})

function myMap(callBack, context) {
    if (typeof callBack !== 'function') {
        throw('first param must be function')
    }
    const result = []
    for (let i=0; i<this.length; i++) {
        if (!this.hasOwnProperty(i)) continue;
        result[i] = callBack.call(context || this, this[i], i, this)
    }
    return result
}

function myMap2(callBack, context) {
    if (typeof callBack !== 'function') {
        throw('first param must be function')
    }
    return this.reduce((pre, curValue, curIndex, arr) => {
        console.log(`${pre} - ${curValue}`)
        pre.push(callBack.call(context || this, curValue, curIndex, arr))
        return pre
    }, [])
}
/**
 * filter
 */

function myFilter(fn, context) {
    if (typeof fn !== 'function') {
        throw('first param must be function')
    }
    const result = []
    for (let i=0; i<this.length; i++) {
        if (!this.hasOwnProperty(i)) continue;
        if (fn.call(context||this, this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}

function myFilter2(fn, context) {
    if (typeof fn !== 'function') {
        throw('first param must be function')
    }
    return this.reduce(function(pre, cur, curIndex, arr){
        if (fn.call(context||this, cur, curIndex, arr)) {
            pre.push(cur)
        }
        return pre
    }, [])
}
/**
 * mySome
 */

function mySome(fn, context) {
    if (typeof fn !== 'function') {
        throw('first param must be function')
    }
    for (let i=0; i<this.length; i++) {
        if (!this.hasOwnProperty(i)) continue;
        if (fn.call(context||this, this[i], i, this)) return true;
    }
    return false
}
/**
 * myFlat
 * @param {*} fn 
 * @param {*} context 
 */

function myFlat(depth=1) {
    myFlat = this.myFlat
    let arr = Array.prototype.slice.call(this)
    if (depth===0) return arr
    return arr.reduce(function(pre, cur, curIndex) {
        if (Object.prototype.toString.call(cur) === '[object Array]') {
            return [...pre, ...myFlat.call(cur, depth-1)]
        } else {
            return [...pre, cur]
        }
    }, [])
}


/**
 * myReduce
 * 
 */

function myReduce(fn, initv) {
    let start
    let result
    if (initv == undefined) {
        for (let i=0; i<this.length;i++) {
            if (!this.hasOwnProperty(i)) continue;
            start = i
            result = this[i]
        }
    } else {
        start = 0
        result = initv
    }
    for (let i=start || 0; i< this.length; i++) {
        if (!this.hasOwnProperty(i)) continue;
        result = fn.call(null, result, this[i], i, this)
    }
    return result
}

/**
 *  call bind
 */
Function.prototype.call = function(context, ...args) {
    if (typeof this !== 'function') {
        throw('this must be use by function')
    }
    context = context || window
    let fn = Symbol('fn')
    context[fn] = this
    const res = context[fn](...args)
    delete context[fn]
    return res
}

Function.prototype.apply = function(context, args) {
    if (typeof this !== 'function') {
        throw('this must be use by function')
    }
    context = context || window || global
    let fn = Symbol('fn')
    context[fn] = this
    let res
    if (args) {
        res = context[fn](...args)
    } else {
        res = context[fn]
    }
    delete context[fn]
    return res
}
Function.prototype.bind = function(context, ...args1) {
    if (typeof this !== 'function') {
        throw('bind must be use by a function')
    }
    const fn = this
    const args = [...arguments].slice(1)
    context = context || window || global
    const bound = function(...args2) {
        if (new.target) {
            return new fn(...args1, ...args2)
        } else {
            fn.call(context, ...args1, ...args2)
        }
    }
    if (fn.prototype) {
        bound.prototype = fn.prototype
    }
    const desc = Object.getOwnPropertyDescriptors(fn)
    Object.defineProperties(bound, {
        length: desc.length,
        name: Object.assign(desc.name, {
            value: `bound #{desc.name.value}`
        })
    })
    return bound
}

/**
 * debounce thretolle
 */

function debounce(fn, wait, immediate) {
    let timer = null
    return function (...args) {
        const self = this
        if (!timer) {
            immediate && fn(...args)
            timer = setTimeout(function() {
                !immediate && fn.call(self, ...args)
                timer = null
            }, wait)
        }
    }
}
function debounce(fn, wait, immediate) {
    let timer = null
    return function (...args) {
        const self = this
        if (!timer) {
            immediate && fn(...args)
        }
        timer && clearTimeout(timer)
        timer = setTimeout(function() {
            !immediate && fn.call(self, ...args)
            timer = null
        }, wait)
    }
}

function thr(fn, wait) {
    var time1 = new Date().getTime()
    console.log('time1: ', new Date())
    return function (...args) {
        console.log('time2: ', new Date())
        var time2 = new Date().getTime()
        if (time2 - time1 > wait) {
            time1 = time2
            fn(...args)
        }
    }
}
function thr(fn, wait, immediate) {
    let timer = null
    return function (...args) {
        const self = this
        if (!timer) {
            immediate && fn(...args)
            timer = setTimeout(function() {
                !immediate && fn.call(self, ...args)
                timer = null
            }, wait)
        }
    }
}

/**
 * 
 * @param {*} obj 
 * @param {*} value 
 */
var obj = {
    double: n => n * 2,
    pow: n => n * n,
    reverseInt: n => n.toString().split("").reverse().join("") | 0
}

var pipe = function(obj, value) {
    let funcStack = []
    var oproxy = new Proxy(obj, {
        get: function(target, property) {
            if (property === 'get') {
                return funcStack.reduce(function(pre, cur) {
                    return cur(pre)
                }, value)
            }
            funcStack.push(target.property)
            return oproxy
        }
    })
    return oproxy
}

var obj = {
    double: n => n * 2,
    pow: n => n * n,
    reverseInt: n => n.toString().split("").reverse().join("") | 0
}

var pipe = function(obj, value) {
    let funcStack = []
    var oproxy = new Proxy(obj, {
        get: function(target, property) {
            if (property === 'get') {
                return funcStack.reduce(function(pre, cur) {
                    return cur(pre)
                }, value)
            }
            funcStack.push(target[property])
            return oproxy
        }
    })
    return oproxy
}

