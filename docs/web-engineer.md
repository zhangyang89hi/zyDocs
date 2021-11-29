
### 20210101

1. 元素
文件
动画
图表
表格
文本
表单


### 20200904

1. nodejs
2. Typescript
3. 数据结构算法
4. 设计模式
5. 网络（http）
6. web性能与优化

1. webpack
2. Vue Router Vuex Nuxt vue UI
3. react react UI
4. 小程序

### webLibs
1. $
2. lodash
3. 工具
x-spreadsheet


### 3D
几何算法 shader animate editor 文件格式
SITE BIM GIS GAME VR

1. graphacs
canvas
svg
webgl
webgpu
webassembly

2. 动画

gif,video
js+dom+css动画 [anime.js]
js+svg+css动画 [d3.js]
canvas2d动画 [CreateJs,echarts]
canvas3d动画[threejs]


CreateJS
spriteJs
lottie
vivus

anime.js （15kb左右，github 20k star, 最轻量）
velocity.js (50kb左右，不依赖jq，号称比css动画快)
GreenSock (100kb左右，动画功能齐全，部分插件收费)

3. 游戏

pixi.js 2d
Phaser
Three.js 3d
playcanvas

Layabox
Egret
Cocos2d-X

4. 物理引擎

Physijs物理引擎

5. others
shadowEditor
转场
滤镜特效




### 方向

1. 数据、3D 
2. 物联网 
3. 人工智能 
4. 区块链
   
5.  广告


























### Hybrid

1. React Native
2. Weex
3. Cordova
4. Ionic
5. NativeScript
6. 5+ runtime



### 前端监控

1. window.onerror
```js
    window.onerror= function(a, b, c, d, e) {
        (new Image).src = `/m?p=${location.href}&a=${a}&b=${b}&c=${c}&d=${d}&e=${e.stack}`
    }
    window.onerror = function (message, filename, lineno, colno, error) {
        console.log("出错了！--> %s", error.stack);
    };
```

2. Vue errorHandler
```js
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}

```