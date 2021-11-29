var events = require('events')
var event = new events.EventEmitter()
event.on('node_event', function() {
    console.log('node_event is emit: ')
    console.log(typeof arguments)
    console.log(arguments.length)
    console.log(arguments)
})

setTimeout(function() {
    event.emit('node_event', 'arg1', 'arg2')
}, 2000)

class MyEvents extends events.EventEmitter {

}
myEvent = new MyEvents()
myEvent.on('event', function() {
    console.log('event is happen')
})
myEvent.emit('event')

