const http = require('http')

console.log('process is running ...');
console.log(process.platform)
console.log(process.arch)
console.log(process.pid)
// console.log(process.versions)

// console.log(process.env)
console.log(process.argv0)
process.argv.forEach( (value, index, arr) => {
    console.log(`${index}: ${value}`);
});
console.log(process.execPath)
console.log(process.execArgv)


process.stdout.write('process is a var of node')

process.stdin.setEncoding('utf8');

// console.log(process.stdin)
// console.log(process.stdout)

// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`数据: ${chunk}`);
//   }
// });
// process.stdin.on('end', () => {
//   process.stdout.write('结束');
// });

process.on('exit', function(code) {
    console.log('退出码为：', code)
})

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('你好，世界')
}).listen(8001);
http.Server((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(8000);

console.log('process is over')
