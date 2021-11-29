




### Promise
> promise 应用
```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function(value) {
  // success
}, function(error) {
  // failure
});

let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

```
> promise 实现

```js
function myp(fn) {
    let _this = this
    _this.state = 'pending'
    _this.value = undefined
    _this.reason = undefined
    _this.onResolvedCallbacks = []
    _this.onRejectedCallbacks = []
    function resolve(result) {
        _this.state = 'resolved'
        _this.value = result
        _this.onResolvedCallbacks.forEach(function (item) {
            item(result)
        })
    }
    function reject(result) {
        _this.state = 'rejected'
        _this.reason = result
        _this.onRejectedCallbacks.forEach(function (item) {
            item(result)
        })
    }
    try {
        fn(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
myp.prototype.then = function (onFulfilled, onRejected) {
    let promise2
    if (_this.state === 'resolved') {
        promise2 = new myp(function (resolve, reject) {
            try {
                let x = onFulfilled()
                resolve(x)
            } catch (error) {
                reject(error)
            }
        })
    }
    if (_this.state === 'rejected') {
        promise2 = new myp(function (resolve, reject) {
            try {
                let x = onRejected()
                resolve(x)
            } catch (error) {
                reject(error)
            }
        })
    }
    if (_this.state === 'pending') {
        promise2 = new myp(function(resolve, reject) {
            _this.onResolvedCallbacks.push(function() {
                try {
                    var x = onFulfilled(_this.value)
                    resolve(x)
                } catch (error) {
                    reject(error)
                }
            })
            _this.onRejectedCallbacks.push(function() {
                try {
                    var x = onRejected(_this.reason)
                    resolve(x)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }
    return promise2
}
```

### Proxy


```js
var o = new proxy({}, {

})

var obj = new Proxy({}, {
    get: function(target, property, receiver) {
        if (property[0] === '_') {
            throw(`Invalid attempt to get private "${property}"`)
        }
        if (property in target) {
            return target[property]
        } else {
            throw(`${property} is not exist`)
        }
    },
    set: function(target, property, value, receiver) {
        if (property[0] === '_') {
            throw(`Invalid attempt to set private "${property}"`)
        }
        target[property] = value
        return true
    },
    // 拦截 Object.defineProperty()操作
    defineProperty: function(target, property, descriptor) {
        return true
    },
    // 拦截delete操作
    deleteProperty: function(target, property) {
        if (key[0] === '_') {
            throw(`Invalid attempt to delete private "${property}" property`);
        }
        delete target[key];
        return true;
    },
    getOwnPropertyDescriptor: function(target, property) {
        if (property[0] === '_') {
            return;
        }
        return Object.getOwnPropertyDescriptor(target, key);
    },
    // getPrototypeOf 方法用来拦截获取对象原型
    getPrototypeOf: function(target) {

    },
    setPrototypeOf: function(target, proto) {
        throw('Changing the prototype is forbidden');
    },
    // apply 方法拦截函数的调用、call和apply操作。
    apply: function(target, ctx, args) {

    },
    // construct 方法用于拦截new命令， 目标对象必须是函数
    // construct 方法返回的必须是一个对象，否则会报错
    construct: function(target, args) {
        // return Reflect.construct(target, args)
        return new target(...args);
    },
    ownKeys: function(target) {

    }
})
```
