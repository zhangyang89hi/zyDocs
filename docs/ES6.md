




### Promise

```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function(value) {
  // success
}, function(error) {
  // failure
});



let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

```

### 函数式编程
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