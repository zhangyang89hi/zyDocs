import Store from './store.js';

class Components {
    constructor(props={}) {
        this.render = this.render || function() {}
        if (props.store instanceof Store) {
            console.log(`${props.element} store subscribe`)
            props.store.events.subscribe('stateChange', () => {
                this.render()
            })
        }
        if (props.element) {
            this.element = props.element
        }
    }
}

class Count extends Components {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        console.log('Count render')
        let suffix = this.props.store.state.items.length !== 1 ? 's' : ''
        let emoji = this.props.store.state.items.length > 0 ? '🙌' : '😢'
        console.log(`Count: ${this.props.store.state.items.length}`)
        this.element.innerHTML = `
        <small>You've done</small>
        <span>${this.props.store.state.items.length}</span>
        <small>thing${suffix} today ${emoji}</small>
        `
    }
}

class List extends Components {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        console.log('List render')
        console.log(`List ${this.props.store.state.items}`)
        if(this.props.store.state.items.length === 0) {
            this.element.innerHTML = `<p class="no-items">You've done nothing yet 😢</p>`;
            return;
        }
        let innerHTML = ''
        this.props.store.state.items.forEach(function(item) {
            innerHTML += `
            <li>${item}<button aria-label="Delete this item">×</button></li>
            `
        })
        innerHTML = '<ul class="app__items">' + innerHTML + '</ul>'
        this.element.innerHTML = innerHTML
        this.element.querySelectorAll('button').forEach((button, index) => {
            button.addEventListener('click', () => {
                this.props.store.dispatch('clearItem', { index })
            })
        })
    }
}
export {
    Count,
    List
}