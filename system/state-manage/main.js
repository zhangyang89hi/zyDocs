import Store from './store.js'
import { Count, List } from './component.js'

const storeState = new Store({
    state: {
        items: [
            'I made this',
            'Another thing'
        ]
    },
    mutations: {
        addItem: function(state, payload) {
            state.items.push(payload)
            return state
        },
        clearItem: function(state, payload) {
            state.items.splice(payload.index, 1)
            return state
        }
    },
    actions: {
        addItem: function(context, payload) {
            context.commit('addItem', payload)
        },
        clearItem: function(context, payload) {
            context.commit('clearItem', payload)
        }
    }
})

/**
 * 
 */
const formElement = document.querySelector('.js-form')
const inputElement = document.querySelector('#new-item-field')

formElement.addEventListener('submit', function(event) {
    event.preventDefault()
    let value = inputElement.value.trim()
    if (value) {
        storeState.dispatch('addItem', value)
        inputElement.value = ''
        inputElement.focus()
    }
})

const countComponent = new Count({
    store: storeState,
    element: document.querySelector('.js-count')
})
const listComponent = new List({
    store: storeState,
    element: document.querySelector('.js-items')
})
countComponent.render()
listComponent.render()
