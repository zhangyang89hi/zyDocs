// var x = () => {console.log('zyy  babel-node')}
// x()

/*
var eventEmitter = require('events').EventEmitter;
var event = new eventEmitter()
event.on('zy', function() {
    console.log('zy event ')
})
setTimeout(function() {
    event.emit('zy')
}, 3000)

var fs = require('fs')
fs.mkdir('temp/', 0777, function(err) {
    if (err) {
        return console.error(err)
    }
    console.log('创建目录temp/成功')
})
fs.writeFile('temp/a.txt', 'fs.writeFile 写入文件操作', function(err) {
    if (err) {
        return console.error(err)
    }
    console.log('数据写入 temp/a.txt 成功')
    fs.readFile('temp/a.txt', function(err, data) {
        if (err) {
            return console.error(err);
         }
         console.log("读取文件 temp/a.txt : " + data.toString());
    })
})

console.log('准备打开模块！')
var stats = fs.stat('./temp/a.txt', function(err, stats) {
    if (err) {
        return console.error(err)
    }
    console.log(stats)

    console.log('是否文件： ' + stats.isFile())
    console.log('是否文件夹： ' + stats.isDirectory())

})

// fs.unlink('./temp/a.txt', function(err) {
//     if (err) {
//         return console.error(err)
//     }
//     console.log('删除a.txt文件成功')
// })
*/

// var path = require('path')

// var p = path.resolve('root', 'temp' , '../user')
// console.log("path.resolve: " + p)
// console.log("path resolve: " + path.resolve(__filename))
// console.log("path join: " + path.join(__filename))

// console.log("path dirname: " + path.dirname(__filename))
// console.log("path basename: " + path.basename(__filename))
// console.log("path extname: " + path.extname('1.t.exe'))

// console.log("path: " + path.resolve(__dirname))


// var x = "hello, I'm a worker. This is a exercise."
// var y = x.split(' ')
// console.log(y)
var z = []
// z.push(...y)
// console.log(z)

function classTest() {
    return class VersionedArray extends Array {
      constructor () {
        super()
        this.history = [[]];
      }
      commit() {
        this.history.push(this.slice());
      }
      revert() {
        this.splice(0, this.length, ...this.history[this.history.length - 1])
      }
    }
}


// class VersionedArray extends Array {
//     constructor() {
//       super();
//       this.history = [[]];
//     }
//     commit() {
//       this.history.push(this.slice());
//     }
//     revert() {
//       this.splice(0, this.length, ...this.history[this.history.length - 1])
//     }
//   }

// var x = new VersionedArray();
// x.push(1);
// x.push(2);
// console.log(x, '  ', x.history);
// x.commit();
// console.log(x, '  ', x.history)
// x.push(3)
// console.log(x, '  ', x.history)
// x.reverse()
// console.log(x, '  ', x.history)
class arr {
    constructor() {

    }
}
// new Array
class VersionedArray extends arr{
    constructor() {
      super();
      this.history = [[]];
    }
    commits() {
      console.log(this.history)
    }
    reverts() {
      this.splice(0, this.length, ...this.history[this.history.length - 1]);
    }
  }
  
  var x = new VersionedArray();
  
//   x.push(1);
//   x.push(2);
  x // [1, 2]
  x.history.push(1) // [[]]
  
  x.commits();
  x.history // [[], [1, 2]]
  
//   x.push(3);
//   x // [1, 2, 3]
//   x.history // [[], [1, 2]]
  
//   x.revert();
//   x // [1, 2]


async function test1() {
    // const self = this
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.info('Time is out !')
        resolve()
      }, 2000)
    });
    for (var i of [1, 2, 3]) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.info('Time is in ', i)
          resolve()
        }, 2000)
      })
    }
    // var x = [1, 2, 3]

    // [1, 2, 3].forEach(async (element) => {
    //   await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       console.info('Time is in ', element)
    //       resolve()
    //     }, 2000)
    //   })
    // })
    // var arry = [1, 2, 3];
    // var p = arry.map((element) => {
    //     return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       console.info('Time is in ', element)
    //       resolve()
    //     }, 2000)
    //   })
    // })
    // for (let i of p) {
    //   await i
    //   console.log(i)
    // }

    // var p = arry.map((v) => {
    //   self.getData(v)
    // })
    // await Promise.all(p)
    // p.forEach(async function(element) {
    //   await element
    // })
    
    // for (let i of p) {
    //   await i
    // }
    console.log('async over')
  }
  async function test() {
    // const self = this
    var anim = [0, 1, 2]
    var p = Promise.resolve()

    for (var i of anim) {
      p.then(function(val) {
        return new Promise((resolve, reject) => {
          setTimeout(function() {
            console.log('i: ', i)
            resolve()
          }, 2000)
        })
      })
    }
    return p.catch(function(e) {
      
    }).then(function() {
      return 
    })
  }
  function classTest() {
    // class VersionedArray extends Array {
    //   constructor () {
    //     super()
    //     this.history = [[]];
    //   }
    //   commit() {
    //     this.history.push(this.slice());
    //   }
    //   revert() {
    //     this.splice(0, this.length, ...this.history[this.history.length - 1])
    //   }
    // }
    var x = new VersionedArray()
    x.push(1);
    x.push(2);
    console.log(x, '  ', x.history);
    x.commit();
    console.log(x, '  ', x.history)
    x.push(3)
    console.log(x, '  ', x.history)
    x.reverse()
    console.log(x, '  ', x.history)
  }