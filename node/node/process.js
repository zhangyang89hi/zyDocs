const path = require('path')

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

console.log('process.cwd')
console.log(process.cwd())

console.log('resolve path: \n', path.resolve('a'))
console.log('__dirname path: \n', __dirname)

console.log('__filename path: \n', __filename)



// process.stdout.write('process is a var of node')

// process.stdin.setEncoding('utf8');

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
console.log('process is over')
