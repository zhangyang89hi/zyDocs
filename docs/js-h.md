


## 闭包
1. cashe 缓存
2. 节流






## 模块

### CommonJS

>语法
1. require()
require(): 加载外部模块
require.resolve()：将模块名解析到一个绝对路径
require.main：指向主模块
require.cache：指向所有缓存的模块
require.extensions：根据文件的后缀名，调用不同的执行函数
   
2. module.exports

>特性
1. 所有代码运行在当前模块作用域中，不会污染全局作用域
2. 模块同步加载，根据代码中出现的顺序依次加载
3. 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。

>属性
1. id：当前模块的bi
2. exports：表示当前模块暴露给外部的值
3. parent： 是一个对象，表示调用当前模块的模块
4. children：是一个对象，表示当前模块调用的模块
5. filename：模块的绝对路径
6. paths：从当前文件目录开始查找node_modules目录；然后依次进入父目录，查找父目录下的node_modules目录；依次迭代，直到根目录下的node_modules目录
7. loaded：一个布尔值，表示当前模块是否已经被完全加载

> 运行
1. 路径分析
（1）核心模块，如http、fs、path
（2）以. 或..开始的相对路径文件模块
（3）以/开始的绝对路径文件模块
（4）非路径形式的文件模块
2. 文件定位

3. 编译执行


### ES
> 语法
import

```js
import 'lodash';
import { firstName, lastName, year } from './profile.js';
import * as circle from './circle';
import customName from './export-default';
import _, { each, forEach } from 'lodash';

```

export

```js
export var n = 'Michael';
export function f() {};

var n = 'Michael';
function f() {}
export { f, n };

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

export default function () {
  console.log('foo');
}

```

> 特性
import是静态执行
import语句是 Singleton 模式
export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句


> 模块的继承


> 动态加载
import('./module.js')
  .then(module => {
    module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });

（1）按需加载
（2）条件加载
（3）动态的模块路径





















# algorithm
## 数据结构
### 栈





















### 队列
### 链表
### 集合
### 字典
### 散列

### 树

### 图  

## 算法

### 排序

### 搜索

### 贪心

### 动态规划


# design mode



> 创建型设计模式

## 原型模式

```js
let o = {

}

// Object.create
var f = Object.create(o, {

});

// 构造函数
function F() {}
F.prototype = {

}
var f = new F()

// class
class F {
    constructor() {
        
    }
}
F.prototype = {

}

```

## 单例模式

```js
// 
var Singleton = function (args) {
    /* 私有变量和方法 */
    var privateProperty = 'something private';
    function privateMethod() {
        console.log(privateProperty);
    }
    return {
        publicProperty: 'something public',
        publicMethod: function () {
            privateMethod();
        }
    }
}
var Singleton = (function() {
    var instance
    function init(args) {
        return {
            publicProperty: 'publicProperty',
            publicMethod: function () {
                console.log('publicMethod');
            }
        }
    }
    return {
        getInstance: function(args) {
            if (!instance) {
                instance = init(args)
            }
            return instance
        }
    }
})()

// 重写构造函数
function singleton(args) {
    var instance = this
    this.property = ''
    this.method = function () {
        
    }
    singleton = function () {
        return instance
    }
}

// Proxy 构造函数
function singleton(fn) {
    let instance
    return new Proxy(fn, {
        construct: function (target, args) {
            if (!instance) {
                instance = Reflect.construct(target, args)
            }
            return instance
        }
    })
}
```

## 工厂模式
> 定义一个用于创建对象的接口

1. 对象的构建十分复杂
2. 需要依赖具体环境创建不同实例
3. 处理大量具有相同属性的小对象

```js

var loginType = {
    phone: function(key) {
        this.key = key
        console.log(`phone: ${key}`)
    },
    email: function(key) {
        this.key = key
        console.log(`email: ${key}`)
    },
    id: function(key) {
        this.key = key
        console.log(`id: ${key}`)
    }
}

// 简单工厂
function typeFactory (type) {
    return new loginType(type)
}

// 工厂方法
class Factory {
    static createUser(role, name) {
        if (role === 'user') {
            return new User(name)
        } else if (role === 'admin') {
            return new Admin(name)
        } else if (role === 'superadmin') {
            return new SuperAdmin(name)
        } else {
            throw('role is not exist')
        }
    }
    static createLogin(type) {
        return new loginType(type)
    }
}
class BaseRole {
    constructor(name) {
        this.name = name
    }
}
class User extends BaseRole {
    constructor(name) {
        super(name)
    }
    userAction() {

    }
}
class Admin extends BaseRole {
    constructor(name) {
        super(name)
    }
    adminAction() {

    }
}
class SuperAdmin extends BaseRole {
    constructor(name) {
        super(name)
    }
    superAdmin() {

    }
}
```

> 结构性设计模式

## 代理模式

```js



// ES6 proxy
new Proxy(o, {
    
})
```


## 外观模式
> 为子系统提供一组统一的接口，定义一组高层接口让子系统更易用

```js
var myEvent = {
    // ...
    stop: function (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    // ...
}
```
> 那么何时使用外观模式呢？一般来说分三个阶段：
1. 在设计初期，应该要有意识地将不同的两个层分离，比如经典的三层结构，在数据访问层和业务逻辑层、业务逻辑层和表示层之间建立外观Facade。
2. 在开发阶段，子系统往往因为不断的重构演化而变得越来越复杂，增加外观Facade可以提供一个简单的接口，减少他们之间的依赖。
3. 在维护一个遗留的大型系统时，可能这个系统已经很难维护了，这时候使用外观Facade也是非常合适的，为系系统开发一个外观Facade类，为设计粗糙和高度复杂的遗留代码提供比较清晰的接口，让新系统和Facade对象交互，Facade与遗留代码交互所有的复杂工作。

## 桥接模式


## 组合模式
> 将对象组合成树形结构，以表示“部分-整体”的层次结构

## 享元模式
> 运行共享技术使大量拥有相同内容的小类共享一个类(元类)，节省资源





> 行为型设计模式

## 观察者/发布订阅


```js
function Observer() {
    // this.fns = []
    this.obs = {}
}

Observer.prototype = {
    subscribe(type ,func) {
        if (!this.obs[type]) {
            this.obs[type] = []
        }
        this.obs[type].push(func)
    },
    unSubscribe(type, func) {
        this.obs[type] && this.obs[type].filter(function(f) {
            if (f !== func) return f
        })
    },
    publish (type, o) {
        this.obs[type] && this.obs[type].forEach(function(fn) {
            fn(o)
        })
    }
}
var w = new Observer()
function f1(data) {
    console.log('Robbin: ' + data + ', 赶紧干活了！');
}
function f2(data) {
    console.log('Randall: ' + data + ', 找他加点工资去！');
};
w.subscribe('work',f1)
w.subscribe('money', f2)

w.publish('work', 'Tom回来了！')
w.publish('money', 'Tom回来了！')
```




## 状态模式







# 函数式编程
> 是一种编程范式，它将计算机运算视为数学上的函数计算，并且避免使用程序状态以及易变对象。函数编程语言最重要的基础是λ演算（lambda calculus）。λ演算中最关键的要素就是函数被当作变量处理，能够参与运算。

> 特点
1. 数据不可变性
2. 函数是第一公民
3. 引用透明
4. 尾递归化

> 方法论
1. 映射化简（map & reduce）
2. 管道（pipeline）
3. 递归（recursing）
4. 柯里化（currying）
5. 高阶函数（higher order function）

> 实现
1. 函子Functor
2. of 方法
