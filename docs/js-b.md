---
title: js-b
---


### 数据类型
1. number
2. boolean
3. string
4. undefined
5. null
6. object

```js
var toString = Object.prototype.toString;
toString.call(obj) = "[object Object]"
toString.call(Array) = "[object Array]"
toString.call(Date) = "[object Date]"
toString.call(RegExp) = "[object RegExp]"
toString.call(func) = "[object Function]"
toString.call(null) = "[object Null]"

toString.call(ArrayBuffer) = "[object ArrayBuffer]"
toString.call(File) = "[object File]"
toString.call(Blob) = "[object Blob]"

```


## 对象

### 概念、定义

+ 静态属性和静态方法 类属性、类方法
+ 私有属性和私有方法
+ 公有属性和公有方法 
+ 原型属性和原型方法
+ 实例属性、实例方法


```js
    for (var key in myObject)
    {
        if（myObject.hasOwnProperty(key)){
　　　　    console.log(key);
　　    }
    }

    for(let v of obj) {
        console.log(v);
    }

    Object.keys(myObject)
```


方法	适用范围	描述
for..in	数组，对象	获取可枚举的实例和原型属性名
Object.keys()	数组，对象	返回可枚举的实例属性名组成的数组
Object.getPropertyNames()	数组，对象	返回除原型属性以外的所有属性（包括不可枚举的属性）名组成的数组
for..of	可迭代对象(Array, Map, Set, arguments等)	返回属性值


### 原型和原型链
一. 概念
+ 通过构造函数，new出的对象，新对象的__proto__指向构造函数的prototype
+ 所有函数的__proto__ 指上Function()的prototype
+ 非构造函数new出的对象({} new Object() 的prototype)的__proto__指向Object的prototype
+ Object的prototype的__proto__指向null
二. 原型链


### call apply bind

+ apply 、 call 、bind 三者都是用来改变函数的this对象的指向的;
+ apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文;
+ apply 、 call 、bind 三者都可以利用后续参数传参;
+ bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用;

--------------------- 
> bind语法：func.bind(thisArg[, arg1[, arg2[, ...]]])

thisArg：当绑定函数被调用时，该参数会作为原函数运行时的this指向。当使用new 操作符调用绑定函数时，该参数无效。
arg1, arg2, ... 当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。

>call语法：fun.call(thisArg, arg1, arg2, ...)

thisArg：在fun函数运行时指定的this值。需要注意的是，指定的this值并不一定是该函数执行时真正的this值，如果这个函数处于非严格模式下，则指定为null和undefined的this值会自动指向全局对象(浏览器中就是window对象)，同时值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象。
arg1, arg2, ... 指定的参数列表。

>apply语法：fun.apply(thisArg, [argsArray])

thisArg： 在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象。
argsArray: 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。如果该参数的值为null 或 undefined，则表示不需要传入任何参数。从ECMAScript5 开始可以使用类数组对象。

```js

Function.prototype.call = function(thisArg, args) {
    // this指向调用call的对象
    if (typeof this !== 'function') { // 调用call的若不是函数则报错
        throw new TypeError('Error')
    }
    thisArg = thisArg || window
    thisArg.fn = this   // 将调用call函数的对象添加到thisArg的属性中
    const result = thisArg.fn(...[...arguments].slice(1)) // 执行该属性
    delete thisArg.fn   // 删除该属性
    return result
}

Function.prototype.apply = function(thisArg, args) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    thisArg = thisArg || window
    thisArg.fn = this
    let result
    if(args) {
        result = thisArg.fn(...args)
    } else {
        result = thisArg.fn()
    }
    delete thisArg.fn
    return result
}

Function.prototype.bind = function(thisArg) {
    if(typeof this !== 'function') {
        throw new TypeError(this + 'must be a function');
    }
    // 存储函数本身
    const _this  = this;
    // 去除thisArg的其他参数 转成数组
    const args = [...arguments].slice(1)
    // 返回一个函数
    const bound = function() {
        // 可能返回了一个构造函数，我们可以 new F()，所以需要判断
        if (this instanceof bound) {
            return new _this(...args, ...arguments)
        }
        // apply修改this指向，把两个函数的参数合并传给thisArg函数，并执行thisArg函数，返回执行结果
        return _this.apply(thisArg, args.concat(...arguments))
    }
    return bound
}

```


### 封装

1. 
```js
// 
function Person (name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}
Person.prototype = {
    constructor:Person,
    sayHello:function(){
        console.log('hello');
    }
}
```
```js
//
function Person (info){
    this._init_(info);
}
Person.prototype = {
    constructor : Person,
    _init_ : function(info) {
        this.name = info.name;
        this.age = info.age;
        this.sex = info.sex;
    }
    sayHello:function(){
        console.log('hello');
    }
}
```
```js
var Person = function(info){
    return new Person.fn.init(info);
}
Person.fn = Person.prototype = {
    constructor: Person,
    init:function(info){
        this.name = info.name;
        this.sayHello = function(){
            this.makeArray();
        }
    }
    makeArray:function(){
        console.log(this.name);
    }
}
Person.fn.init.prototype = Person.fn;
```
```js
var Person = (function(window) {
        var Person = function(name) {
            return new Person.fn.init(name);
        }
        Person.fn = Person.prototype = {
            constructor: Person,
            init: function(name) {
                this.name = name;
                this.sayHello = function() {
                    this.makeArray();
                }
            },
            makeArray: function() {
                console.log(this.name);
            }
        }
        Person.fn.init.prototype = Person.fn;
 
        return Person;
    })(window);
```
```js
var Person = (function(window){
    //静态私有属性方法
    var home = "China";
    function sayHome(name){
        console.log(name + "'s home in " + home);
    }
    //构造函数
    function _person(name, age){
        var _this = this;
        if(_this instanceof _person){
            //公有属性, 方法
            _this.name = name;
            _this.getHome = function(){
                //内部访问私有属性，方法
                sayHome(_this.name);
            };
            //构造器
            _this.setAge = function(age){
                _this.age = age + 12;
            }(age);
        }else{
            return new _person(name, age);
        }
    }
    //静态共有属性方法
    _person.prototype = {
        constructor: _person,
        drink: "water",
        sayWord: function(){
            console.log("ys is a boy");
        }
    }
    return _person;
})(window)
```


### 继承

> 构造函数

> 原型继承

> 拷贝继承


### Object

Object

+ Object.create(proto,[propertiesobject])
+ Object.assign(target, …sources)
+ Object.defineProperty(obj, prop, descriptor)
+ Object.defineProperties(obj, props)
+ Object.setPrototypeOf(obj, prototype)
+ 
+ Object.keys(obj)
+ Object.values(obj)
+ Object.entries(obj)
+ 
+ Object.getPrototypeOf(object) // 获取实例的原型对象
+ Object.getOwnPropertyNames(obj)
+ Object.getOwnPropertySymbols(obj)
+ Object.getOwnPropertyDescriptor(obj, prop)
+ Object.getOwnPropertyDescriptors(obj)
+ 
+ Object.freeze(obj)
+ Object.seal(obj)
+ Object.preventExtensions(obj)
+ 
+ isPrototypeOf()
+ Object.is(value1, value2)  // 判断两个值是否是同一个值
+ Object.isExtensible(obj)  //
+ Object.isFrozen(obj)
+ Object.isSealed(obj)

Object.prototype

+ Object.prototype.writable
+ Object.prototype.enumerable
+ Object.prototype.configurable
+ Object.prototype.constructor
+ 
+ Object.prototype.hasOwnProperty()
+ Object.prototype.isPrototypeOf()
+ Object.prototype.propertyIsEnumerable()
+ Object.prototype.toString()
+ Object.prototype.watch()
+ Object.prototype.unwatch()
+ Object.prototype.valueOf()


    
in
instanceof
isPrototypeOf()
hasOwnProperty()
getOwnPropertyNames()

> Object.defineProperty(obj, prop, descriptor)
```js
    var obj = {};
    Object.defineProperty(obj,"test",{
        value: 任意类型的值,
        writable: true | false
        configurable: true | false,
        enumerable: true | false,
    });
    Object.defineProperty(obj,"newKey",{
        get:function (){} | undefined,
        set:function (value){} | undefined
        configurable: true | false
        enumerable: true | false
    });
```


### Function

Function.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null

### js特殊对象



#### 数组
```js
    array.forEach(function(currentValue, index, arr) {

    }, thisValue)

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(`obj.${prop} = ${obj[prop]}`);
        } 
    }

    for(let v of arr) {
        console.log(v);
    }

```


#### DOM 对象

##### Dom节点操作方法

+ document.getElementById()
+ document.getElementsByTagName()
+ document.getElementsByName()
+ document.getElementsByClassName()

+ document.querySelector('')
+ document.querySelectorAll('')
+ document.body.matchesSelector()

bool = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)

#### FormData

```js
var formData = new FormData();
var formData = new window.FormData()
formData.append("username", "Groucho");
formData.append("accountnum", 123456); //数字123456会被立即转换成字符串 "123456"
formData.append("userfile", fileInputElement.files[0]);
formData.append('userfile', document.querySelector('input[type=file]').files[0])
var content = '<a id="a"><b id="b">hey!</b></a>'; // 新文件的正文...
var blob = new Blob([content], { type: "text/xml"});
formData.append("webmasterfile", blob);

headers: {
'Content-Type': 'multipart/form-data'
}

```

#### 文件

```js
var fr = new FileReader()
fr.readAsDataURL(file1) 
fr.onloadend = function(e) {
    console.log(e.target)
    console.log(fr.result)
}
readAsArrayBuffer()
readAsBinaryString()
readAsDataURL()
readAsText()
onabort	中断
onerror	出错
onloadstart	开始
onprogress	正在读取
onload	成功读取
onloadend	读取完成，无论成功失败
```

#### Blob对象

`Blob(blobParts[, options])`
blobParts：数组类型，数组中的每一项连接起来构成Blob对象的数据，数组中的每项元素可以是ArrayBuffer, ArrayBufferView, Blob, DOMString

Blob.size 只读  Blob 对象中所包含数据的大小（字节）
Blob.type 只读  一个字符串，表明该Blob对象所包含数据的MIME类型。如果类型未知，则该值为空字符串。

Blob.slice([start,[ end ,[contentType]]])
返回一个新的 Blob对象，包含了源 Blob对象中指定范围内的数据。

```js
var typedArray = GetTheTypedArraySomehow();
var blob = new Blob([typedArray], {type: "application/octet-binary"});// 传入一个合适的MIME类型
var url = URL.createObjectURL(blob);
// 会产生一个类似blob:d3958f5c-0777-0845-9dcf-2cb28783acaf 这样的URL字符串
// 你可以像使用一个普通URL那样使用它，比如用在img.src上。


var reader = new FileReader();
reader.addEventListener("loadend", function() {
   // reader.result 包含转化为类型数组的blob
});
reader.readAsArrayBuffer(blob);
```

#### 



#### 
Notification