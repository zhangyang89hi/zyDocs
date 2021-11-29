

/**
 * 
 */
class PubSub {
    constructor() {
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

/**
 * 
 */
class Store {
    constructor(params) {
        const self = this
        this.state = {}
        this.actions = {}
        this.mutations = {}
        this.status = 'resting'
        this.events = new PubSub()

        if (params.hasOwnProperty('mutations')) {
            this.mutations = params.mutations
        }
        if (params.hasOwnProperty('actions')) {
            this.actions = params.actions
        }
        this.state = new Proxy((params.state || {}), {
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

export default Store