const cp = require('child_process')
const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if (cluster.isMaster) {
    let counterReqs = 0;
    console.log(`主进程 ${process.pid} 正在进行`)
    setInterval(function() {
        console.log(`counterReq: ${counterReqs}`)
    }, 1000)
    function messageHandler(msg) {
        if (msg.cmd && msg.cmd === 'notifyRequest') {
            counterReqs += 1;
        }
    }
    for (let i=0; i < numCPUs; i++) {
        cluster.fork()
    }
    for (const i in cluster.workers) {
        cluster.workers[i].on('message', messageHandler)
    }
    cluster.on('exit', () => {
        console.log(`主进程 ${process.pid} 已退出`)
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end('你好，世界')
        process.send({ cmd: 'notifyRequest' })
    }).listen(8000)
    console.log(`工作进程${process.pid}已启动`)
}
