
// 观察者
function Observer() {
    // this.fns = []
    this.obs = {}
}

Observer.prototype = {
    subscribe(type ,func) {
        if (!this.obs[type]) {
            this.obs[type] = []
        }
        this.obs[type].push(func)
    },
    unSubscribe(type, func) {
        this.obs[type] && this.obs[type].filter(function(f) {
            if (f !== func) return f
        })
    },
    publish (type, o) {
        this.obs[type] && this.obs[type].forEach(function(fn) {
            fn(o)
        })
    }
}


var w = new Observer()
function f1(data) {
    console.log('Robbin: ' + data + ', 赶紧干活了！');
}
function f2(data) {
    console.log('Randall: ' + data + ', 找他加点工资去！');
};
w.subscribe('work',f1)
w.subscribe('money', f2)

w.publish('work', 'Tom回来了！')
w.publish('money', 'Tom回来了！')



function op2() {
    class Dep {
        constructor(data) {
            this.sub = []
            this.data = data
        }
        addDepend() {
            this.sub.push(Dep.subcb)
        }
        notify() {
            for (let sub of this.sub) {
                sub(this.data)
            }
        }
     }
     Dep.target = null
     Dep.subcb = null
    
     class Watcher {
        constructor(vm, key, cb) {
           Dep.target = 1
           Dep.subcb = cb
           console.log(vm.$data[key])
           Dep.target = null
           Dep.subcb = null
        }
       //  addDep() {
       //  }
       //  update() {
       //  }
    }
    
    class Wue {
        constructor(data = {}) {
            let vm = this
            vm.$data = {}
            for ( let d in data) {
                let dep = new Dep(vm.$data)
                let v = vm.$data[d] || data[d]
                Object.defineProperty(vm.$data, d, {
                    get() {
                        if (Dep.target) {
                            dep.addDepend()
                        }
                        return v
                    },
                    set(newVal) {
                        if (v === newVal) return
                        v = newVal
                        dep.notify()
                    }
                })
                // vm.$data[d].dep = new Dep(vm.$data)
            }
            vm.$watch = function (key, cb) {
                new Watcher(vm, key, cb)
            }
        }
    }
    
    var w = new Wue({
        work: {
            value:'Tom回来了！'
        },
        money: {
            value: 'Tom回来了！'
        }
    })
    w.$watch('work', function(data) {
        console.log('Robbin: ' + data['work'] + ', 赶紧干活了！')
    })
    w.$watch('money', function(data) {
        console.log('Robbin: ' + data['money'] + ', 找他加点工资去！')
    })
    // w.$data.work.dep.notify()
    // w.$data.money.dep.notify()
    w.$data.money = 'Tom发财了'
    w.$data.work = 'Tom生气了'
}


function op3() {
    class Dep {
        constructor(vm) {
            this.vm = vm
            this.sub = []
        }
        addDepend() {
            this.sub.push(Dep.subcb)
        }
        notify() {
            for (let sub of this.sub) {
                sub(this.vm.$data)
            }
        }
     }
     Dep.target = null
     Dep.subcb = null
    
     class Watcher {
        constructor(vm, key, cb) {
           Dep.target = 1
           Dep.subcb = cb
           console.log(vm.$data[key])
           Dep.target = null
           Dep.subcb = null
        }
       //  addDep() {
       //  }
       //  update() {
       //  }
    }
    
    class Wue {
        constructor(data = {}) {
            let vm = this
            vm.$data = {}
            vm.dep = {}
            for ( let d in data) {
                vm.dep[d] = new Dep(vm)
            }
            vm.$data = new Proxy(data, {
                get(target, key, receiver) {
                    if (Dep.target) {
                        vm.dep[key].addDepend()
                    }
                    return Reflect.get(target, key, receiver)
                },
                set(target, key, value, receiver) {
                    vm.dep[key].notify()
                    return Reflect.set(target, key, value, receiver)
                }
            })
            vm.$watch = function (key, cb) {
                new Watcher(vm, key, cb)
            }
        }
    }
    
    var w = new Wue({
        work: 'Tom回来了！',
        money: 'Tom回来了！'
    })
    w.$watch('work', function(data) {
        console.log('Robbin: ' + data['work'] + ', 赶紧干活了！')
    })
    w.$watch('money', function(data) {
        console.log('Robbin: ' + data['money'] + ', 找他加点工资去！')
    })
    // w.$data.work.dep.notify()
    // w.$data.money.dep.notify()
    w.$data.money = 'Tom发财了'
    w.$data.work = 'Tom生气了'
}
op3()


// 
function op4() {
    class PubSub {
        constructor(data) {
            this.events = {}
        }
        subscribe(event, callBack) {
            if (!this.events[event]) {
                this.events[event] = []
            }
            return this.events[event].push(callBack)
        }
        publish(event, data={}) {
            if (!this.events[event]) {
                this.events[event] = []
            }
            return this.events[event].map(callBack => callBack(data))
        }
    }

    class Store {
        constructor(params) {
            const self = this
            this.state = {}
            this.actions = {}
            this.mutations = {}
            this.status = 'resting'
            this.events = new PubSub()

            if (params.hasOwnProperty('actions')) {
                this.actions = params.actions
            }
            if (params.hasOwnProperty('mutations')) {
                this.mutations = params.mutations
            }
            this.state = new Proxy((params.state || {}), {
                get: function(target, key, receiver) {

                },
                set: function(target, key, value, receiver) {
                    target[key] = value
                    console.log(`stateChange: ${key} - ${value}`)
                    self.events.publish('stateChange', self.state)
                    self.status = 'resting'
                    if (self.state !== 'mutation') {
                        console.warn(`You should use a mutation to set ${key}`)
                    }
                    return true
                }
            })
        }
        dispatch(actionKey, payload) {
            if (typeof this.actions[actionKey] !== 'function') {
                console.error(`Action ${actionKey} does not exit`)
                return false
            }
            console.groupCollapsed(`ACTION: ${actionKey}`)
            this.status = 'action'
            this.actions[actionKey](this, payload)
            console.groupEnd()
            return true
        }
        commit(mutationKey, payload) {
            if (typeof this.mutations[mutationKey] !== 'function') {
                console.error(`Mutation ${mutationKey} does not exit`)
                return false
            }
            this.status = 'mutation'
            let newState = this.mutations[mutationKey](this.state, payload)
            this.state = Object.assign(this.state, newState)
            return true
        }
    }
}
 /**
  * 
  */

  var state = {
    ReadyState: '',
    DownloadingState: '',
    DownloadPausedState: '',
    DownloadedState: '',
    DownloadFailedState: ''
  }

/**
 * 
 */

class Observer {
    constructor() {
        this.obs = {}
    }
    subscribe(type, fn) {
        if (!this.obs[type]) {
            this.obs[type] = []
        }
        this.obs[type].push(fn)
    }
    unSubscribe(type, func) {
        this.obs[type] && this.obs[type].filter(function(fn) {
            if (fn !== func) return fn
        })
    }
    publish(type, param) {
        this.obs[type] && this.obs[type].forEach(function(fn) {
            fn(param)
        })
    }
}


