

## 安装

全局安装typescript
npm install typescript -g
tsc --version



## types 类型声明 TypeScript Declaration
### 基础
d.ts 声明文件
/// <reference path="./jQuery.d.ts" />
tsc --declaration my-file.ts

npm install --save @types/lodash
```js
import * as _ from "lodash";
_.padStart("Hello TypeScript!", 20, " ");
```
How can I contribute?
Microsoft/types-publisher工具


### 语法格式
```ts
// 全局函数
declare function greet(greeting: string): void;

// 全局对象
declare namespace myLib {
    function makeGreeting(s: string): string;
    let numberOfGreetings: number;
}

// 函数重载
declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];

// 类
declare class Greeter {
    constructor(greeting: string);
    greeting: string;
}
// 接口
interface GreetingSettings {
    greeting: string;
    duration?: number;
    color?: string;
}
declare function greet(setting: GreetingSettings): void;

// 类型别名
type GreetingLike = string | (() => string) | MyGreeter;
declare function greet(g: GreetingLike): void;

// 类型“模块”
declare namespace GreetingLib {
    interface LogOptions {
        verbose?: boolean;
    }
    interface AlertOptions {
        modal: boolean;
        title?: string;
        color?: string;
    }
}

```
### 规范
* 用基础类型（number, string, boolean, object），不要用包装类型（Number, String, Boolean, Object）

* 不要出现未使用的泛型参数，会导致类型无法正确推断

* 无返回值的callback参数返回类型用void，不要用any

* callback的可选参数没必要在类型上标出来，因为callback允许少传/不传参数

* 函数重载需要注意声明顺序，应该从特殊到一般自上而下排列（例如any会短路其它重载声明，类似于模式匹配的机制）

* 能用可选参数（如two?: string）描述的就别用函数重载了

* 能用组合类型（如b: number|string）描述的就别用函数重载了


## 类型，值和命名空间

```ts
// 类型
type sn = number | string; // 类型别名

class C { } // 类

enum E { A, B, C } // 枚举

interface I { x: number[]; } // 接口

import * as m from 'someModule'; // 类型引用


// 值
let, const, var // 变量
enum // 枚举
class // 类
function // 函数
namespace, module // 模块
import // 值引用

// 命名空间可以用来组织类型

```

