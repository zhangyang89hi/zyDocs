const fs = require('fs')
const child_process = require('child_process')

// for (var i = 0; i < 3; i++) {
//     var workProcess = child_process.exec('node childProcess.js ' + i, function(error, stdout, stderr) {
//         if (error) {
//             console.log(error.stack);
//             console.log('Error code: '+error.code);
//             console.log('Signal received: '+error.signal);
//         }
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//         console.log('***********************')
//     })
//     workProcess.on('exit', function(code) {
//         console.log('childProcess is out code:' + code)
//     })
// }

// for (let i of [1, 2, 3]) {
//     let workProcess = child_process.spawn('node', ['childProcess.js', i])
//     workProcess.stderr.on('data', function(data) {
//         console.log('stderr: ' + data)
//     })
//     workProcess.stdout.on('data', function(data) {
//         console.log('stdout: ' + data)
//     })
//     workProcess.on('close', function(code) {
//         console.log('childProcess is close: ', code)
//     })
// }

for(let i=0; i<3; i++) {
    let worker_process = child_process.fork("childProcess.js", [i]);    
    worker_process.on('message', function(message) {
        console.log('parent process get a message: ' + message)
    })
    worker_process.send('hello, child process')
    worker_process.on('close', function (code) {
       console.log('子进程已退出，退出码 ' + code);
    });
 }

// var cp = child_process.exec('ls -a', {maxBuffer: 1}, function(error, stdout, stderr) {
//     if (error) {
//         console.log('error.stack: ' + error.stack)
//         console.log('error.code: ' + error.code)
//     }
//     console.log('stdout: ' + stdout)
//     console.log('stderr: ' + stderr)
// })