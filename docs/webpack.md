
### plugins

uglifyjs-webpack-plugin
webpack-parallel-uglify-plugin
optimize-css-assets-webpack-plugin

### jquery 打包 编写LIbrary

1. 使用expose-loader
```js
    require("expose-loader?$!jquery");
    rules: [
        //暴露$和jQuery到全局
        {
            test: require.resolve('jquery'), //require.resolve 用来获取模块的绝对路径
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            }, {
                loader: 'expose-loader',
                options: '$'
            }]
        }
    ]
```
2. libraryTarget

```js
output: {
 path: './dist',
 filename: '[name].dist.js',
 library: 'name',
 libraryTarget: commonjs2 
 // var (默认值，发布为全局变量)commonjs commonjs2 amd umd
 targetExport: 'default' // umd
},
externals: { // 如果用到额外的第三方库，为了防止第三方库被打包自己的库，可以使用此字段
    vue: {...},
    react: {...},
    lodash: {
        commonjs: 'lodash',
        amd: 'lodash',
        root: '_' // 指向全局变量
    }
}
require('imports-loader?$=jquery!./bdui/plugins/core');
require('imports-loader?$=jquery!./bdui/plugins/inject');
require('imports-loader?$=jquery!./bdui/plugins/bdAccordion');
require('imports-loader?$=jquery!./bdui/plugins/bdButton');

```
3. externals



### 代码分离 按需加载

1. 入口起点：使用 entry 配置手动地分离代码。
2. 防止重复：使用 SplitChunksPlugin 去重和分离 chunk。
3. 动态导入：通过模块中的内联函数调用来分离代码。

全局
路由
实例

```js
1.  require.ensure（['']， callback，chunkName）
    require.ensure(
        dependencies: String[],
        callback: function(require),
        errorCallback: function(error),
        chunkName: String
    )
    require.ensure(['b'], function(require) {
        var c = require('c');
        // Do something special...
    });
------
vue

{
    path: '/promisedemo',
    name: 'PromiseDemo',
    component: resolve => require(['../components/PromiseDemo'], resolve)
}

// r: resolve
const list = r => require.ensure([], () => r(require('../components/list/list')),'list')
const demo = resolve => require.ensure([], () => resolve(require('../components/PromiseDemo')),'demo')
const hello = resolve => require.ensure([], () => resolve(require('../components/Hello')),'demo')

const router = new Router({
    routes: [
    {
        path: '/list/blog',
        name: 'blog',
        component: list
    },
    {
        path: '/promisedemo',
        name: 'PromiseDemo',
        component: demo
    },
    {
        path: '/hello',
        name: 'Hello',
        // component: Hello
        component: hello
    }]
})
------
2.  import(
        /* webpackChunkName: async-chunk-name */
        /* webpackMode: lazy */
        modulename
    )
    import(/* webpackChunkName: "lodash" */ 'lodash').then(() => {

    })

------
vue

// 下面2行代码，没有指定webpackChunkName，每个组件打包成一个js文件。
const ImportFuncDemo1 = () => import('../components/ImportFuncDemo1')
const ImportFuncDemo2 = () => import('../components/ImportFuncDemo2')
// 下面2行代码，指定了相同的webpackChunkName，会合并打包成一个js文件。
const ImportFuncDemo = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../components/ImportFuncDemo')
const ImportFuncDemo2 = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../components/ImportFuncDemo2')

export default new Router({
    routes: [
        {
            path: '/importfuncdemo1',
            name: 'ImportFuncDemo1',
            component: ImportFuncDemo1
        },
        {
            path: '/importfuncdemo2',
            name: 'ImportFuncDemo2',
            component: ImportFuncDemo2
        }
    ]
})


require.ensure([], function(require) {
  var foo = require("./module")
})
import("./module").then(module => {
    return module.default
}).catch(err => {
    console.log("Chunk loading failed")
})


require.ensure(['lodash'], function() {
    var _ = require('lodash')
}, 'vendor')
import(/* webpackChunkName:'vendor' */'lodash').then(function(lodash) {
    console.log(lodash)
})

```



### plugins

### loaders