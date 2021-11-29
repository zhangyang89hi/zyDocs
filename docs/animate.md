
# web动效

## 动图、视频
## CSS动效
1. transition
2. animation
3. motion-path

## js
FLIP
## canvas
## svg

## 路径动效

分层运动
## webgl

## 动效原理
## lib
1. Animate.css 

2. AnimeJS

3. TweenJS

4. Bounce.js

5. SVG.js

6. Lottie

# createjs

## EaselJS – [类图](../pictures/EaselJS.png)

1. DisplayObject 基类
2. Container 
3. Stage
4. Bitmap 图片
const bitmap = new createjs.Bitmap("./images/bg1.jpg");
bitmap.alpha = 0.6 // 透明度
bitmap.cursor = 'help'
bitmap.shadow = new createjs.Shadow("#97c89e", 20, 10, 20);

//遮罩图形
let shape = new createjs.Shape();
shape.graphics.beginFill('#000').drawCircle(0, 0, 100);
shape.x = 500;          // 圆心X坐标
shape.y = 100;          // 圆心Y坐标
bitmap.mask = shape;   //给图片bg添加遮罩

5. Text 文本
6. DOMElement DOM 元素
7. Sprite 帧动画
8. Shape 图形 Graphics 描述图形

let g1 = new createjs.Graphics();
    // 画线
    g1.setStrokeStyle(10).beginStroke("#d23c4f").moveTo(400,10).lineTo(600,100)
    // 画圆
    g1.setStrokeStyle(1);         // 描边
    g1.beginStroke("#000000");    // 描边颜色
    g1.beginFill("red");          // 图形填充
    g1.drawCircle(0,0,100); 
    // 矩形
    let g2 = new createjs.Graphics().beginStroke("red").beginFill("blue").drawRect(150, 0, 200, 100);


9.  Filter 和 Shadow 滤镜分支

### Text
```js

var text = new createjs.Text("Hello World", "bold 86px Arial", "#ff7700");

var text = new createjs.Text();
text.text = "Hello World!";
text.font = "bold 96px Dorsa";
text.color = "#000000";
text.lineHeight = 15;
text.textAlign = 'center';
text.textBaseline = 'top';

```
### Ticker
Ticker - createjs 的静态接口
createjs.Ticker.setFPS(40);
createjs.Ticker.framerate = 40;
createjs.Ticker.interval = 25;
createjs.Ticker.timingMode 
RAF_SYNCHED - 结合了 setTimeout 和 RAF 
RAF - 使用 RAF, 忽略帧速率
TIMEOUT - setTimeout

createjs.Ticker.paused = true;
createjs.Ticker.setPaused(true);
createjs.Ticker.getPaused();

stage.update(event) 方法的时候，每一个 stage 的 children 都会触发它本身暴露的 tick 事件

createjs.Ticker.getMeasuredFPS() 获取到过去一秒钟的平均帧率
createjs.Ticker.getMeasuredTickTime()  tick 循环的平均时间

```js 

createjs.Ticker.on('tick', function(event) {
    // 500 表示位移速度为: 500px/s, delta: 每帧的时间间隔
    circle.x += 500 * event.delta / 1000;
    stage.update(event);
});

```
### 坐标 事件

circle.hitTest(stage.mouseX, stage.mouseY);

globalToLocal - objA.globalToLocal(stage.mouseX, stage.mouseY)
localToLocal - objA.localToLocal(posX, posY, objB)

> 事件
circle.addEventListener('click', function () { alert('circle clicked') }, useCapture);
circle.on(type, listener, scope, once, data, useCapture);
createjs.Touch.enable(stage); // 移动端点击事件

事件类型: 
click, dblclick,
mousedown, pressmove, pressup,
mouseover, mouseout, rollover, rollout

stage.enableMouseOver(frequency);

hitArea


## TweenJS – 

```js

createjs.Tween.get(circle, { loop: true})
    .wait(100)
    .to({x:300,y:0},1000,createjs.Ease.circOut)
    .to({x:300,y:300},1000,createjs.Ease.circOut)
    .to({x:0,y:300},1000,createjs.Ease.circOut)
    .to({x:0, y:0}, 1000,createjs.Ease.circOut)
    .call(onAnimationCompleteFn)

```





# tween
weenjs 是一个简单的补间动画库，支持数字、对象的属性和 CSS 样式属性的赋值
tweenjs 以平滑的方式修改元素的属性值，需要传递给 tween 要修改的值、动画结束时的最终值和动画花费时间（duration）
## 用法
```js
var position = { x: 0, y: 0 }
var tween = new TWEEN.Tween(position)
tween.to({x: 300, y: 300 }, 3000)
tween.easing(TWEEN.Easing.Quadratic.Out)
tween.onUpdate(function(){
    console.log(this.x);
    box.style.setProperty('transform', 'translate(' + position.x + 'px, '+ position.y + 'px)');
})
tween.start();
animate();
function animate(){
    requestAnimationFrame(animate);
    TWEEN.update();
}


var tween = new TWEEN.Tween({position})
.delay(100)
.to({x: 300, y: 300 }, 3000)
.onStart(function(){

})
.onUpdate(function(){

})
.onComplete(function(){

})
.onStop(function(){

})
.start();


tween.easing(TWEEN.Easing.easing函数.easing类型)

tweenA.chain(tweenB);
tweenB.chain(tweenA);

tween.repeat(Infinity); // repeats forever

```


## 控制

Tween.start ===> 动画开始
Tween.stop ===> 动画结束
TWEEN.update ===> 动画更新
TWEEN.chain ===> 制作多个动画
TWEEN.repeat ===> 制作循环动画
TWEEN.delay ===> 动画延迟

回调
onStart ==> tween 动画开始前的回调函数
onStop ==> tween 动画结束后的回调函数
onUpdate ==> 在 tween 动画每次更新后执行
onComplete ==> 在 tween 动画全部结束后执行
## 缓动（easing）函数
Linear ==> 线性匀速运动效果
Quadratic ==> 二次方的缓动（t^2）
Cubic ==> 三次方的缓动（）
Quartic ==> 四次方的缓动（）
Quintic ==> 五次方的缓动
Sinusoidal ==> 正弦曲线的缓动（）
Exponential ==> 指数曲线的缓动（）
Circular ==> 圆形曲线的缓动（）
Elastic ==> 指数衰减的正弦曲线缓动（）
Back ==> 超过范围的三次方的缓动
Bounce ==> 指数衰减的反弹缓动

## 全局
TWEEN.update(time)
TWEEN.getAll()
TWEEN.removeAll()
TWEEN.add(tween)
TWEEN.remove(tween)

## 缓动（easing）类型
easeIn（In） ==> 加速，先慢后快
easeOut（Out） ==> 减速，先快后慢
easeInOut（InOut） ==> 前半段加速，后半段减速


# PIXI

Application是pixi提供的一个工具方法，它能自动创建renderer，ticker 和container

pixi有几个重要的Class:

Container (舞台，场景)
Renderer (渲染器)
Loader （资源加载器)
Sprite (精灵)
Ticker (计时器)






















## SoundJS –   
## PreloadJS – 

