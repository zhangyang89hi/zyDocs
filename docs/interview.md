# 技能
前端工程 模块、测试、打包、发布
前端框架 vue react antdesign
前端组件 
数据结构与算法
web系统


# html
1. defer和async的区别
defer 立即下载，但延迟执行，脚本会被延迟到整个页面都解析完毕后再按照先后顺序运行
async 立即下载，立即执行，并不保证先后顺序，无依赖关系

可以使用async和defer属性来解决JavaScript脚本阻塞问题

1. localstorage、sessionstorage、cookie的区别
+ cookie数据始终在同源的http请求中携带, 即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。
+ 存储大小限制也不同，cookie数据不能超过4K, sessionStorage和localStorage可以达到5M或更大
+ sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始终有效, cookie：只在设置的cookie过期时间之前有效
+ 
3.  cookies和session的区别
a. 存储位置不同:cookie的数据信息存放在客户端浏览器上，session的数据信息存放在服务器上。


# css
## 水平 垂直居中
1. flex
```css
   display: flex; // -webkit-flex
   align-items: center; // flex-start flex-end center space-between space-around
   justify-content: center; // flex-start flex-end center baseline stretch
   flex: flex-grow, flex-shrink  flex-basis; // 默认值为 0 1 auto
```
2. 
vertical-align: middle;
display: inline-block;
display: table-cell
3. 固定定位 负边距/transform
position: absolute;
top: 50%;
left:50%
margin-top: -10px;
margin-left:-15px;
transform: translateY(-50%);
transform: translateX(-50%);
4. 固定定位 自适应边距
position:absolute;
left:0;
right:0;
top:0;
bottom:0;
margin:auto;

## css权重
!important > 内联style > ID选择器 > 类选择器 > 标签选择器 > 通配符选择器

## padding 和 margin 
在padding 和 margin 设置为百分比的时候，这个百分比都是相对于父元素的宽度来取值的

## visibility 和 display 
visibility 设置 hidden 会隐藏元素，但是其位置还存在与页面文档流中，不会被删除，所以会触发浏览器渲染引擎的重绘
display 设置了 none 属性会隐藏元素，且其位置也不会被保留下来，所以会触发浏览器渲染引擎的回流和重绘。
opacity 会将元素设置为透明，但是其位置也在页面文档流中，不会被删除，所以会触发浏览器渲染引擎的重绘

## box-sizing
content-box
border-box

## 伪元素
伪元素设置 margin-top

## BFC 与 IFC
BFC 是块级格式上下文，IFC 是行内格式上下文：
内部的 Box 会水平放置
水平的间距由 margin，padding，border 决定

BFC（Block Formatting Context）格式化上下文，是 Web 页面中盒模型布局的 CSS 渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器

##  VW VH

## 布局

### 两栏布局
1. 左、右float，然后右 margin-left（右边自适应）
2. float + BFC
3. flex

### 三栏布局
1. position: absolute left:0/right:0 + margin-left + margin-right
2. float left/right + margin-left + margin-right
3. flex


## css3动画






# js
## 概念
1. 数据类型
基本类型Number、Boolean、String、null、undefined、symbol
基本数据类型是存放在栈区的
引用类型是同时保存在栈区和堆区中的,栈区保存变量标识符和指向堆内存的地址

引用类型：Object，


对象子类型（Array，Function）


2. 整数
  通过 Number 类型来表示，遵循 IEEE754 标准，通过 64 位来表示一个数字，（1 + 11 + 52），最大安全数字是 Math.pow(2, 53)-1，对于16位十进制。（符号位+指数位+小数部分有效位）

  Bigint没有位数的限制，只能用于表示整数，BigInt 类型的数据必须添加后缀n

3. arguments
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);
// ES2015
const args = Array.from(arguments);
const args = [...arguments];
arguments.callee，指代当前正在执行的函数，通过它可以引用匿名函数自身

4. Object.keys() 返回实例对象自身可枚举属性组成的数组

5. Object.getOwnPropertyNames() 返回实例对象的所有自身属性的属性名，但不包括Symbol值作为名称的属性

属性遍历的次序规则
* 首先遍历所有数值键，按照数值升序排列。
* 其次遍历所有字符串键，按照加入时间升序排列。
* 最后遍历所有 Symbol 键，按照加入时间升序排列。

6. 深拷贝
```js
function deepClone(obj) {
    var result = obj instanceof Array ? []:{};

    if (obj === null) return obj;
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    if (typeof obj !== 'object') return obj;

    for (let a in obj) {
        if (obj.hasOwnProperty(a)) {
            result[a] = deepClone(obj[a])
        }
    }
    return result;
}
```
4. new
new 关键字会进行如下的操作:
+ 创建一个空的简单JavaScript对象（即{}）
+ 新对象的__proto__指向构造函数的prototype
+ 将新创建的对象作为constructor的上下文
+ 如果该函数没有返回对象，则返回this

5. 作用域
全局作用域和函数作用域

闭包当前环境中存在指向父级作用域的引用

6. 函数执行上下文
+ 创建AO对象，AO{}
+ 将形参和变量声明 当作AO的属性名，值为undefined
+ 实参形参统一
+ 在函数体里找函数声明 值赋予函数体


7. typeof NaN === 'number'

8. 隐式转换
"+" 操作符，如果有一个为字符串，那么都转化到字符串然后执行字符串拼接
"-" 操作符，转换为数字，相减 (-a, a * 1 a/1) 都能进行隐式强制类型转换
布尔值到数字
1 + true = 2
1 + false = 1
转换为布尔值
for 中第二个
while
if
三元表达式
|| （逻辑或） && （逻辑与）左边的操作数

undefined
null
false
+0, -0, NaN
""
8. let var const
var : 声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined。
let : 只能在块作用域里访问，不能跨块访问，也不能跨函数访问
const : const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改

var允许重复声明变量,let和const在同一作用域不允许重复声明变量
Object.freeze(obj)

```js
for (let i=0;i<5;i++) {
    setTimeout(function() {
        console.log(i)}, 2000)
}

for (let i=0;i<5;i++) {
    setTimeout((function(i) {
        return function() {
            console.log(i)
        }
    })(i), 2000)
}
```
9. 事件循环机制 （Event Loop）

10. class
    static 类函数方法/静态方法
    private 私有方法

11. 箭头函数=>根据外层的作用域来决定 this，且箭头函数的绑定无法被修改（new 也不行）

一个函数内部有两个方法：[[Call]] 和 [[Construct]]，
在通过 new 进行函数调用时，会执行 [[construct]] 方法，创建一个实例对象，然后再执行这个函数体，将函数的 this 绑定在这个实例对象上。
当直接调用时，执行 [[Call]] 方法，直接执行函数体箭头函数没有 [[Construct]] 方法，不能被用作构造函数调用，当使用 new 进行函数调用时会报错。

a. 箭头函数和普通函数的样式不同
b. 箭头函数会绑定其所在上下文的this值
c. 箭头函数不能作为构造函数使用
d. 箭头函数没有自己的argument
e. call、apply、bind 并不会影响其 this 的指向
f. 箭头函数没有原型prototype
g. 箭头函数不能当作 Generator 函数，不能使用 yield 关键字。

12. 继承
```js
function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function () {
  return this.name;
}
// 继承属性，通过借用构造函数调用
function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}
// 继承方法，创建备份
Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.__proto__ = Foo.prototype;
// 必须设置回正确的构造函数，要不然在会发生判断类型出错
Bar.prototype.constructor = Bar;
 // 必须在上一步之后
Bar.prototype.myLabel = function () {
  return this.label;
}
var a = new Bar("a", "obj a");
```

13. promise async await
async await
+ 它做到了真正的串行的同步写法，代码阅读相对容易
+ 无法处理promise返回的reject对象，要借助try...catch...
+ 用 await 可能会导致性能问题，因为 await 会阻塞代码
+ try...catch...内部的变量无法传递给下一个try...catch.
promise
+ 一旦执行，无法中途取消，链式调用多个then中间不能随便跳出来
+ 错误无法在外部被捕捉到，只能在内部进行预判处理，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
+ Promise内部如何执行，监测起来很难，当处于pending状态时，无法得知目前进展到哪一个阶段
## 技巧
1. mask

2. NaN
```js
NaN === NaN // false
typeof NaN // number
Object.is(NaN, NaN) // true
const isNaN = v => v !== v;
```
3. ~2
```
00000010
11111101

```
4. insertAdjacentHTML insertAdjacentElement

5. 

6. will-change 增强页面渲染性能


## 数据结构和算法
1. 数组去重
Array.from(new Set([1, 1, 2, 2]))

2. 数组扁平化
```js
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result = result.concat(arr[i]);
    }
  }
  return result;
}
const a = [1, [2, [3, 4]]];
console.log(flatten(a));
```
3. arguments
... 运算符
Array.from
Array.prototype.slice.apply(arguments)

4. 对象数组
```js

```

# complex

## http

301 是永久重定向
302 是临时重定向

1. http https http2
http 明文传输，数据都是未加密的
https 建构在 SSL/TLS 之上的 HTTP 协议, 需要数字证书


2. get post
GET对数据进行查询，POST主要对数据进行增删改
因为get的记录会保存在浏览器，上网日志中，而使用Post，因为数据不会记录存储在浏览器的记录和网址访问记录中，这样会有更大的安全性

3. TCP和UDP
a. TCP 是面向连接的，udp 是无连接的即发送数据前不需要先建立链接
b. TCP 提供可靠的服务。也就是说，通过 TCP 连接传送的数据，无差错，不丢失，不重复，且按序到达; UDP 尽最大努力交付，即不保证可靠交付。
c. TCP 是面向字节流，UDP 面向报文
d. TCP 只能是 1 对 1 的，而UDP 支持 1 对 1,1 对多。
e. TCP 的首部较大为 20 字节，而 UDP 只有 8 字节。
f. TCP 是面向连接的可靠性传输，而 UDP 是不可靠的。

4. WebSocket

相同点
a. 都是一样基于TCP的，都是可靠性传输协议。
b. 都是应用层协议。
不同点
a. WebSocket是双向通信协议，模拟Socket协议，可以双向发送或接受信息。HTTP是单向的。
b. WebSocket是需要握手进行建立连接的。

## https
HTTPS将对称加密与非对称加密结合起来, 在交换密钥环节使用非对称加密方式，之后的建立通信交换报文阶段则使用对称加密方式。

HTTPS的通信步骤如下：
a、客户使用https url访问服务器，则要求web 服务器建立ssl链接。
b、web服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），返回或者说传输给客户端。
c、客户端和web服务器端开始协商SSL链接的安全等级，也就是加密等级。客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。
d、web服务器通过自己的私钥解密出会话密钥。 web服务器通过会话密钥加密与客户端之间的通信。


## http缓存
减少响应延迟
减少网络带宽消耗

请求=>强制缓存=>协商缓存=>资源

1. 强制缓存
Expires：指示响应内容过期的时间，格林威治时间GMT

Cache-Control：更细致的控制缓存的内容
cache-control:max-age=3600, s-maxage=31536000
Public：只要为资源设置了 public，那么它既可以被浏览器缓存，也可以被代理服务器缓存;
Private(默认值)：则该资源只能被浏览器缓存。
no-store：不使用任何缓存，直接向服务器发起请求。
no-cache：绕开浏览器缓存(每次发起请求不会询问浏览器缓存)，而是直接向服务器确认该缓存是够过期。

2. 协商缓存 
协商缓存生效，返回304
协商缓存失效，返回200和请求结果

Last-Modified 服务器资源的最后修改时间
If-Modified-Since 

ETag 标识字符串
If-None-Match 


3. 缓存位置
Memory Cache(内存缓存)

Service Worker(离线缓存)

Disk Cache(磁盘缓存)

Push Cache(推送缓存)

## 浏览器缓存
cookie
1. 兼容所有的浏览器
2. 有存储的大小限制，一般一个源（一个域下）只能存储4KB内容
3. cookie有过期时间(当然我们自己可以手动设置这个时间)
4. 杀毒软件或者浏览器的垃圾清理都可能会把cookie信息强制清除掉
5. 在隐私或者无痕浏览模式下，是不记录cookie的
6. cookie不是严格的本地存储，因为要和服务器之间来回传输

sessionStorage localStorage
1. 不兼容IE8及以下
2. 也有存储的大小限制，一个源下最多只能存储5MB左右
3. localStorage本地永久存储，只要你不手动删除，永远存储在本地；sessionStorage 是临时存储，只对当前会话有效，当浏览器当前标签页关闭则失效
4. 杀毒软件或者浏览器的垃圾清理暂时不会清除
5. 在隐私或者无痕浏览模式下，是记录的
6. 和服务器没有关系

indexDB
1. 键值对储存
2. 异步
3. 支持事务
4. 同源限制
5. 储存空间大 一般来说不少于 250MB
6. 支持二进制储存

兜底数据 在服务器崩溃和网络不可用的时候展示
临时缓存 退出即清理
固定缓存 展示框架这种，可能很长时间不会更新，可用随客户端下发
父子连 页面跳转时有一部分内容不需要重新加载，可用从父菜单带过来
预加载 某些逻辑可用判定用户接下来的操作，那么可用异步加载那些资源
异步加载 先展示框架，然后异步加载内容，避免主线程阻塞

## 断点续传和多线程下载
HTTP协议的GET方法，支持只请求某个资源的某一部分

206 Partial Content 部分内容响应; 
Range 请求的资源范围;
Content-Range 响应的资源范围;

## 浏览器渲染

DNS 解析 => TCP 链接 => HTTP 请求 => Server 响应回复资源 => 
浏览器解析执行(JS/CSS/HTML) => Render Tree 合成=> 渲染(计算布局/绘制)

1、浏览器的地址栏输入URL并按下回车。
2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
3、DNS解析URL对应的IP。（DNS优化 DNS缓存 DNS负载均衡）
4、根据IP建立TCP连接（三次握手）。
5、HTTP发起请求。
6、服务器处理请求，浏览器接收HTTP响应。
7、渲染页面，构建DOM树。
8、关闭TCP连接（四次挥手）。

浏览器内核拿到内容后，渲染大致分为以下几步：
1. 解析html，构建DOM树；同时下载CSS文件，解析CSS，生成CSS规则树。
2. 合并DOM树和CSS规则树，生成Render树
3. 布局Render树（layout/reflow）,负责各元素的尺寸，位置计算。
4. 绘制render树（paint），绘制页面像素信息。
5. 浏览器会将各个图层的信息发给GPU。GPU会将各个图层合成（composite），显示在屏幕上。

Layout 也称为Reflow 回流
当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时,浏览器重新渲染部分或全部文档的过程称为回流。

Repaint 重绘
当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等）,浏览器会将新样式赋予给元素并重新绘制它,这个过程称为重绘。

什么引起回流：
1. 页面渲染初始化  
2. DOM结构改变，比如删除了某个节点 
3. render树变化，比如减少了padding
4. 窗口resize
5. 最复杂的一种：获取某些属性，引发回流， 很多浏览器会对回流做优化，会等到数量足够时做一次批处理回流， 但是除了render树的直接变化，当获取一些属性时，浏览器为了获得正确的值也会触发回流，这样使得浏览器优化无效

1. css的加载不会阻塞DOM的解析，会阻塞DOM的渲染
2. JS的加载和执行会阻塞DOM的解析和渲染
3. CSS的加载阻塞JS的运行，不阻塞JS的加载
4. 遇到script标签会触发渲染，以便获得最新的样式给JS代码

分析并用 关键资源数 关键字节数 关键路径长度 来描述我们的 CRP 。
最小化关键资源数: 消除它们（内联）、推迟它们的下载（defer）或者使它们异步解析（async）等
优化关键字节数（缩小、压缩）来减少下载时间 。
优化加载剩余关键资源的顺序: 让关键资源（CSS）尽早下载以减少 CRP 长度 。

## 进程 线程
process 进程是 CPU 资源分配的最小单位（是能拥有资源和独立运行的最小单位）。
thread 线程是 CPU 调度的最小单位（是建立在进程基础上的一次程序运行单位）。

Chrome 采用多进程架构,其顶层存在一个 Browser process 用以协调浏览器的其它进程
* 主进程 Browser Process
* 第三方插件进程 Plugin Process
* GPU 进程 GPU Process
* 渲染进程 Renderer Process

渲染进程 (浏览器内核)
1. GUI 渲染线程
* 解析 HTML,CSS,构建DOM树和RenderObject树,布局和绘制等
* 当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时,该线程就会执行
* GUI 渲染线程与 JS 引擎线程是互斥的

2. JS 引擎线程
* JS 引擎线程负责解析 Javascript 脚本，运行代码
* JS 引擎一直等待着任务队列中任务的到来，一个 Tab 页（renderer 进程）
* GUI 渲染线程与 JS 引擎线程是互斥的， JS 执行的时间过长会导致页面渲染加载阻塞

3. 浏览器事件线程 (onclick)
* 归属于浏览器而,用来控制事件循环
* 当JS引擎执行代码块如 setTimeOut 或 鼠标点击、AJAX 异步请求等，会将对应任务添加到事件线程
* 当对应的事件符合触发条件被触发时,该线程会把事件添加到待处理队列的队尾,等待 JS 引擎的处理

4. 定时器触发线程 (setTimeout)
* setInterval 与 setTimeout 所在线程
* 计时完毕后,添加到事件队列中,等待 JS 引擎空闲后执行

5. http 异步线程
* 在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求。
* 检测到状态变更时,如果设置有回调函数,异步线程就产生状态变更事件，将这个回调再放入事件队列中
## 事件循环

1. Event Loop

点击#inner，其执行顺序一定是：click -> promise -> observer -> click -> promise -> observer -> animationFrame -> animationFrame -> timeout -> timeout
```js
const $inner = document.querySelector('#inner')
const $outer = document.querySelector('#outer')

function handler () {
  console.log('click') // 直接输出

  Promise.resolve().then(_ => console.log('promise')) // 注册微任务

  setTimeout(_ => console.log('timeout')) // 注册宏任务

  requestAnimationFrame(_ => console.log('animationFrame')) // 注册宏任务

  $outer.setAttribute('data-random', Math.random()) // DOM属性修改，触发微任务
}

new MutationObserver(_ => {
  console.log('observer')
}).observe($outer, {
  attributes: true
})

$inner.addEventListener('click', handler)
$outer.addEventListener('click', handler)

```
2. 微任务和宏任务
宏任务: I/O, setTimeout, setInterval, requestAnimationFrame  setImmediate
微任务: Promise.then catch finally, MutationObserver  process.nextTick
区别: 
微任务和宏任务皆为异步任务，它们都属于一个队列，主要区别在于他们的执行顺序，Event Loop的走向和取值
执行顺序: 同步任务->微任务->宏任务
```js
setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
  Promise.resolve().then(_ => {
    console.log('before timeout')
  }).then(_ => {
    Promise.resolve().then(_ => {
      console.log('also before timeout')
    })
  })
})

```


## 流程优化

1. 串行优化
* HTTP请求		
压缩请求数量；压缩请求头；压缩请求体  复用tcp链接   增加跨域请求
* Server响应
懒加载；动态引入	压缩JS文件;压缩CSS文件;压缩图片...  客户端缓存；服务端缓存	负载均衡
* DOM、CSS
减少DOM层级 CSS选择器优化
* JS解析、执行
js代码优化  worker
* Layout(Reflow)，Paint(Repaint)
减少次数	减少涉及范围  复合图层	CSS属性优化；硬件加速

2. 并行优化
JS 文件的下载和 HTML 解析可以并行执行，async 或 defer 属性
JS 引擎是单线程的，但 work 线程可与其并行运行

## 性能调优
> 性能指标
综合渲染性能：chrome timeline
网络性能：chrome network
JS算法性能：jspref

> 优化工具
Lighthouse: 快速获得一份专业页面性能报告，获取性能存在的问题；
Performance: 定量分析每个过程具体时耗，有助于发现可优化阶段、衡量优化效果。
Benchmark

网络优化（对加载时所消耗的网络资源优化），
代码优化（资源加载完后，脚本解释执行的速度），
框架优化（选择性能较好的框架）

## 网络优化
请求数量上限：

请求速度优化：
1、使用CDN，可以加速资源的请求速度

加载时间分配：
1、核心资源预加载
2、大体积资源按需加载（Webpack拆包）

减少加载体积：
1、压缩图片
2、压缩HTML、CSS、JS代码
3、开启网络压缩，如：GZIP

减少加载次数
1、制作精灵图
2、将小图片转换为base64字符串
3、使用浏览器缓存
4、使用前端缓存，如: LocalStorage、Cookie、SessionStorage等
5、减少重定向请求，比如：nginx反向代理的重定向
6、避免使用服务端字体

## html优化

## css优化

1、避免使用css的@import
2、避免使用通配符
3、避免使用!impotant
4、优化css reset，项目中不会用到这么多reset

1、可以使用transform开启图形加速
2、用translate取代left，可以避免页面重排

1、选择器嵌套尽量不要超过三层
2、id选择器尽量不要嵌套
3、使用继承

## js 优化

慎用全局变量
缓存全局变量
通过原型新增方法
避开闭包陷阱
选择最优的循环方法
节点添加优化
克隆优化节点操作
直接量替换 new Object

运行速度
1、如果没有兼容问题，尽量使用原生方法
2、根据兼容浏览器的最低版本，考虑是否使用polyfill
3、switch语句相对if，可以较快通过将case语句按照最可能到最不可能的顺序进行组织
4、位运算较快。当进行数字运算时，位运算操作要比任何布尔运算或者算数运算快
5、巧用||和想·
6、使用加号拼接是最快的，其次是String()、.toString()、new String()
7、需要使用定时器时，用setTimeout取代setInterval，setInterval会一直占用内存
8、制作JS动画时，使用requestAnimationFrame取代setTimeout和setInterval

变量优化
1、避免全局查找，可以将需要访问的属性用变量保存
2、使用变量比使用对象属性和数组元素要快
3、对于包含大量数据而不需要操作的对象，可以使用Object.freeze冻结对象，加快运行速度

减少无用操作
1、使用节流、防抖
2、使用事件委托取代大量事件的绑定
3、若需要对DOM进行大量操作，可以使用Fragment减少操作次数

减少未使用代码
1、进行tree-shaking，删减未使用的代码

算法优化
1、添加key值，最大效益的使用虚拟DOM，减少Diff时间
2、使用benchmark测试不同算法的性能，择优
## 框架优化
1. split chunks
新的 chunk 是否被共享或者是来自 node_modules 的模块
新的 chunk 体积在压缩之前是否大于 30kb
按需加载 chunk 的并发请求数量小于等于 5 个
页面初始加载时的并发请求数量小于等于 3 个

2. SSR服务端渲染

## vue react
框架：
a. 使用框架工具写项目，在浏览器中代码依然是原生的HTML CSS JS。而框架帮开发者做了很多事情，开发者只关注业务逻辑就可以,极大的加快了开发速度
b. 组件化: 其中以 React 的组件化最为彻底,甚至可以到函数级别的原子组件,高度的组件化可以是我们的工程易于维护、易于组合拓展
c. 天然分层，代码解耦更易于读写。

区别：
+ react整体是函数式的思想，把组件设计成纯组件，状态和逻辑通过参数传入，所以在react中，是单向数据流；
+ vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom。
## 跨域
同源策略：协议+域名+端口

跨域限制：Ajax 通信，Cookie，LocalStorage，IndexDB，DOM 的操作

跨域场景：1.跨域服务器资源请求 2.跨域 frame 进行通信

跨域解决方法：
1. CORS跨域资源共享
允许浏览器向非同源服务器，发出 Ajax 请求
后端开启 Access-Control-Allow-Origin 为*或对应的 origin就可以实现跨域

CORS 请求分成两类：简单请求和非简单请求
Access-Control-Allow-Origin
Access-Control-Request-Method
Access-Control-Request-Headers
Access-Control-Allow-Credentials
Access-Control-Expose-Headers
Access-Control-Max-Age

2. JSONP（JSON with padding）
动态创建<script>标签向服务器发送 GET 请求，服务器收到请求后将数据放在一个指定名字的回调函数中并传送回来

3. 代理
接受客户端请求
将请求转发给服务器
拿到服务器响应数据
将响应转发给客户端

4. postMessage 可以跨域操作的 window 属性
otherWindow.postMessage(message, targetOrigin, [transfer]);

页面和其打开的新窗口的数据传递
多窗口之间消息传递
页面与嵌套的 iframe 消息传递
上面三个场景的跨域数据传递

5. WebSocket

## 登录、权限、安全
## fetch,Ajax,axios
Ajax XMLHttpRequest
axios 基于Promise 用于浏览器和 nodejs 的 HTTP 客户端
fetch Fetch被称为下一代Ajax技术,采用Promise方式来处理数据

# 前端工程化
## webpack
1. wepack中loader和plugin
loader 转换器 处理不同的文件，诸如编译、转换器压缩等，最终一起打包到指定的文件中
plugin 扩展器 可以监听在webpack运行的生命周期中广播的事件，在合适的时机通过webpack提供的API改变输出结果

# vue
1. MVVM是Model-View-ViewModel
ViewModel是View和Model层的桥梁，数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据
2. 响应式
2.0 Object.defineProperty 依赖收集(收集当前组件的watcher)如果属性发生变化会通知相关依赖进行更新操作(发布订阅)
3.0 Proxy 可以直接监听对象和数组的变化

3. 生命周期
加载渲染过程的: 
    父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
子组件更新过程: 
　　父beforeUpdate->子beforeUpdate->子updated->父updated
父组件更新过程
　　父beforeUpdate->父updated
销毁过程
　　父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
4. 模板
parse : 解析模板字符串生成 AST语法树
optimize : 优化语法树，主要时标记静态节点，提高更新页面的性能
codegen : 生成js代码，主要是render函数和staticRenderFns函数

5. 优点
* 保证性能下限： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
* 无需手动操作 DOM： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
* 跨平台： 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。

## vue优化
1. Vue 代码层面的优化；
v-if 是真正的条件渲染
v-show 基于CSS 的 display 属性进行切换

computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存
watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；

数值计算，并且依赖于其它数据时，应该使用 computed
数据变化时执行异步或开销较大的操作时，应该使用 watch

v-for 比 v-if 优先级高

Object.freeze 方法来冻结一个对象

组件销毁时手动移除

vue-lazyload图片资源懒加载

路由懒加载

借助 babel-plugin-component ，然后可以只引入需要的组件

优化无限列表性能 vue-virtual-scroll-list 和 vue-virtual-scroller

SSR 更好的 SEO, 首屏加载更快

预渲染 prerender-spa-plugin

2. webpack 配置层面的优化；

url-loader 中设置 limit 大小来对图片处理
image-webpack-loader 对图片进行压缩
减少 ES6 转为 ES5 的冗余代码 babel-plugin-transform-runtime
optimization splitChunks

SourceMap 
开发环境推荐：cheap-module-eval-source-map
生产环境推荐：cheap-module-source-map

3. Web 技术层面的优化。
开启 gzip 压缩
浏览器缓存 强制缓存，对比缓存
CDN 的使用
Chrome Performance 查找性能瓶颈

## vuex 管理页面的数据状态、提供统一数据操作

state <--- mutaion <--- action
              commit <--- dispatch

state、mutations、actions
getters

1. State、 Getter、 Mutation 、 Action、 Module
2. getters则是借助vue的计算属性computed实现数据实时监听
3. getters
* getters 可以对State进行计算操作，它就是Store的计算属性
* 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
* 如果一个状态只在一个组件内使用，是可以不用getters
4. Action 与 mutation
Action 提交的是 mutation，而不是直接变更状态
Action 可以包含任意异步操作

## vue-router

# canvas echarts

# webgl three 
## 优化
1. 共用几何体和材质
```js

```
2. 删除模型时，将材质和几何体从内存中清除
```js
//删除group
function deleteGroup(name) {
  let group = scene.getObjectByName(name);
  if (!group) return;
  //删除掉所有的模型组内的mesh
  group.traverse(function (item) {
    if (item instanceof THREE.Mesh) {
      item.geometry.dispose(); //删除几何体
      item.material.dispose(); //删除材质
    }
  });
  scene.remove(group);
}
```
3. 使用merge方法合并不需要单独操作的模型
```js
//合并模型，则使用merge方法合并
var geometry = new THREE.Geometry();
//merge方法将两个几何体对象或者Object3D里面的几何体对象合并,(使用对象的变换)将几何体的顶点,面,UV分别合并.
for(var i=0; i<20000; i++){
    var cube = addCube(); //创建了一个随机位置的几何体模型
    cube.updateMatrix(); //手动更新模型的矩阵
    geometry.merge(cube.geometry, cube.matrix); //将几何体合并
}

```
4. 循环渲染中避免使用更新
```js
// 几何体：
geometry.verticesNeedUpdate = true; //顶点发生了修改
geometry.elementsNeedUpdate = true; //面发生了修改
geometry.morphTargetsNeedUpdate = true; //变形目标发生了修改
geometry.uvsNeedUpdate = true; //uv映射发生了修改
geometry.normalsNeedUpdate = true; //法向发生了修改
geometry.colorsNeedUpdate = true; //顶点颜色发生的修改
// 材质
material.needsUpdate = true
// 纹理
texture.needsUpdate = true;
```
5. 按需渲染 合理执行渲染方法render()
```js
var renderEnabled;
function animate() {
  if (renderEnabled) {
      renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);
}

//调用一次可以渲染三秒
let timeOut = null;
function timeRender() {
//设置为可渲染状态
  renderEnabled = true;
  //清除上次的延迟器
  if (timeOut) {
    clearTimeout(timeOut);
  }
  timeOut = setTimeout(function () {
    renderEnabled = false;
  }, 3000);
}

scene.add(mesh);
timeRender();

controls.addEventListener('change', function(){
  timeRender();
});

//每次材质和纹理更新，触发重新渲染
THREE.DefaultLoadingManager.onLoad = function () {
	timeRender();
};
```
6. 多细节层次
根据场景不同，可以把同一个模型进行分级

# node
JavaScript 的执行是单线程的,  但Javascript 的宿主环境，无论是 Node 还是浏览器都是多线程
const cpus = require('os').cpus();
## node
Node.js 是 Javascript 在服务端的运行环境，构建在 chrome 的 V8 引擎之上，基于事件驱动、非阻塞I/O模型，充分利用操作系统提供的异步 I/O 进行多任务的执行，适合于 I/O 密集型的应用场景，因为异步，程序无需阻塞等待结果返回，而是基于回调通知的机制，原本同步模式等待的时间，则可以用来处理其它任务

单进程 + 单线程
多进程 + 单线程

## 进程和线程
进程：Process是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位
线程：操作系统能够进行运算调度的最小单位，被包含于进程之中

1. Node.js 虽然是单线程模型，但是其基于事件驱动、异步非阻塞模式
2. 当你的项目中需要有大量计算，CPU 耗时的操作时候，要注意考虑开启多进程来完成了
3. Node.js 开发过程中，错误会引起整个应用退出，应用的健壮性值得考验，尤其是错误的异常抛出，以及进程守护是必须要做的
4. 单线程无法利用多核CPU，但是后来Node.js 提供的API以及一些第三方工具相应都得到了解决


## Process
Node.js 中的进程 Process 是一个全局对象

* process.env：环境变量，例如通过  process.env.NODE_ENV 获取不同环境项目配置信息
* process.nextTick：这个在谈及 Event Loop 时经常为会提到
* process.pid：获取当前进程id
* process.ppid：当前进程对应的父进程
* process.cwd()：获取当前进程工作目录，
* process.platform：获取当前进程运行的操作系统平台
* process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值
* 进程事件：process.on(‘uncaughtException’, cb) 捕获异常信息、process.on(‘exit’, cb）进程推出监听
* 三个标准流：process.stdout 标准输出、process.stdin 标准输入、process.stderr 标准错误输出
process.title 指定进程名称，有的时候需要给进程指定一个名称

## child_process
1. child_process.spawn(command[, args][, options])
使用给定的 command 衍生一个新进程，并带上 args 中的命令行参数。

2. child_process.exec(command[, options][, callback])
* command 是一个 shell 命令的字符串，包含了命令的参数
* 可以使用 callback；
* 衍生一个 shell 然后在该 shell 中执行 command，command 一般是 shell 内置的 命令，如 ls,cat 等，也可以是shell脚本组成的文件，如 start.sh 等

3. child_process.execFile(file[, args][, options][, callback])
* 与 exec 的不同是，命令的参数不能放在第一个参数，只能作为第二个参数传递；
* 默认情况下不会衍生 shell，指定的可执行 file 直接作为新进程衍生，使其比 child_process.exec() 稍微更高效
* file 是要运行的可执行文件的名称或路径，如 node.exe，不能是 start.js 这种脚本文件。

4. child_process.fork(modulePath[, args][, options])
* 该接口专门用于衍生新的 Node.js 进程
* modulePath 是要在node子进程中运行的模块，由于是 node.js 的进程，所以可以是start.js文件
* 无回调，参数要以第二个参数传入
* 返回的子进程将内置一个额外的ipc通信通道，允许消息在父进程和子进程之间来回传递。

## cluster模块
cluster模块调用fork方法来创建子进程
cluster模块采用的是经典的主从模型
Cluster会创建一个master，然后根据你指定的数量复制出多个子进程，
cluster.isMaster属性可以判断当前进程是master还是worker(工作进程)

## 进程守护
pm2 指定生产环境启动一个名为 test 的 node 服务
pm2 start app.js --env production --name test

pm2 stop Name/processID 停止某个服务，通过服务名称或者服务进程ID
pm2 delete Name/processID 删除某个服务，通过服务名称或者服务进程ID
pm2 logs [Name] 查看日志，如果添加服务名称，则指定查看某个服务的日志，不加则查看所有日志
pm2 start app.js -i 0 集群 -i 参数cluster_mode 4 工作线程的数量
pm2 reload Name 
pm2 restart Name 
pm2 show Name 查看服务详情
pm2 list 查看pm2中所有项目
pm2 monit用monit可以打开实时监视器去查看资源占用情况

## linux进程操作
ps aux | grep server
kill -l [PID]
kill -9 [PID]
killall httpd


# 小程序

1、生命周期函数
onLoad——页面加载，调一次
onShow——页面显示，每次打开页面都调用
onReady——初次渲染完成，调一次
onHide——页面隐藏，当navigateTo或底部tab切换时调用
onUnload——页面卸载，当redirectTo或navigateBack时调用

# 个人问题

解决了什么，成就
page show 页面返回的问题
页面缓存问题
兼容性问题

遇到的问题、难点

最大的优点和缺点

