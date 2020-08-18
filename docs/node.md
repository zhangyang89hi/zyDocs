

### npm

```javascript
 npm init
 npm -v
 X.Y.Z  ^ ~    x *
 npm bugs 模块名
 npm repo 模块名
 npm docs 模块名
 npm home 模块名

 npm install 模块名 -g
 npm install 模块名
 npm install 模块1 模块2 模块3 
 npm install 模块名 --save-dev
 npm install 模块名 --save
 npm install 模块名@version
 npm install 模块名@latest

 npm update 模块名
 npm update 模块名 @版本号

 npm uninstall 模块名

 //查看项目中模块所在的目录
 npm root
 //查看全局安装的模块所在目录
 npm root -g

 npm view 模块名
 npm view 模块名 version
 npm view 模块名 versions

 npm list --depth=0 --global
 //当然我们也可以限制输入的模块层级，例如
 npm list --depth=0
 npm list 模块名 version
 npm list 模块名

```
### npx

### pm2

  npm install -g pm2
  pm2 save
  pm2 update
  pm2 start app.js –watch
> 参数说明： 
–watch：监听应用目录的变化，一旦发生变化，自动重启。如果要精确监听、不见听的目录，最好通过配置文件。
-i –instances：启用多少个实例可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目。
–ignore-watch：排除监听的目录/文件，可以是特定的文件名，也可以是正则。比如–ignore-watch=”test node_modules “some scripts”“
-n –name：应用的名称。查看应用信息的时候可以用到
-o –output ：标准输出日志文件的路径
-e –error ：错误输出日志文件的路径

  pm2 restart app.js
  pm2 restart all
  pm2 reload all
  pm2 monit
  pm2 stop app_name|app_id
  pm2 stop all
  pm2 delete app_name|app_id
  pm2 delete all
  pm2 list
  pm2 describe app_name|app_id
  pm2 logs
  pm2 web
  pm2 startup

  pm2 start apps.json
```json
{
  "apps": [
    {
      "name": "website",
      "script": "./bin/app.js",
      "cwd": "./",
      "watch": [
        "bin",
        "config",
        "routes",
        "views"
      ],
      "error_file": "./logs/website-err.log",
      "out_file": "./logs/website-out.log",
      "log_date_format": "YYYY-MM-DD HH:mm Z"
    }
  ]
}
```
### 文件

### 网络

### 日志 异常

### 测试

### child_process

### node 异步并发


```javascript
const proxy = new EventProxy();
const crypto = require('crypto');

var status = "ready";
var select = function(callback) {
    proxy.once("selected",callback);
    if(status == "ready") {
        status = "pending";
        db.select("SQL", function(results) {
            proxy.emit("selected",results);
            status = "ready";
        });
    }
}

// 已封装 并发
function concurrent(promiseFn) {
  return function (...params) {
    var key = crypto.createHash('md5').update(JSON.stringify(params)).digest("hex"); // 用参数作为键, 因为每个参数的调用结果返回都不一样, 所以应当不同的请求
    var keyObj = promiseFn[key] = promiseFn[key] || {status: 'ready', proxy: new proxy()};

    // 加状态锁和once事件机制, 避免并发访问重复调用
    if (keyObj.status === 'ready') {
      keyObj.status = 'pending';
      promiseFn.apply(null, params).then(result => {
        keyObj.proxy.emit('finish', result);
        delete keyObj.status;
      }).catch(err => {
        keyObj.proxy.emit('error', err);
      })
    }

    return new Promise((resolve, reject) => {
      keyObj.proxy.once('finish', result => {
        delete keyObj.proxy;
        delete promiseFn[key];
        resolve(result);
      });
      keyObj.proxy.once('error', err => {
        delete keyObj.proxy;
        delete promiseFn[key];
        reject(err);
      });
    });
  }
}
function getDataFromRemoteServer(param) {
  // 以下模拟远程服务执行
  return new Promise(resolve => {
    console.log('call getDataFromRemoteServer');
    setTimeout(() => {
      resolve(`Receive param: ${param}`);
    }, 1000);
  })
}

var $getDataFromRemoteServer = concurrent(getDataFromRemoteServer);
$getDataFromRemoteServer('daniel').then(data => console.log(data));

```
