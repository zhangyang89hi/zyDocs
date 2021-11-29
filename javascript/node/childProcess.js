console.log('process:  ' + process.argv + ' is running')
console.log(`child process pid is ${process.pid}`);

process.on('message', function(message) {
    console.log('child process get a message: ' + message)
    process.send('hello, parent process')
})
