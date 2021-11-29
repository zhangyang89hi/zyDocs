const URL = require('url')
const path = require('path')

const myUrl = URL.parse ('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')
console.log(myUrl)


var buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}
console.log(buf.length)
console.log(buf)
console.log(buf.toString())



console.log(__dirname)
console.log(__filename)

console.log('******')
console.log(path.resolve())
console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.basename(__filename))
console.log('******')
console.log(path.relative('../webpack4/src/index.js', ''))
// console.log(path.relative('../webpack4/src/index.js'))








