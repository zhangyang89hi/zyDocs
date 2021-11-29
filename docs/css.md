
>CSS选择器的解析是从右向左解析的。CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 RenderTree。


### Repaint（重绘） Reflow（重排）
重绘是指元素的显示样式发生改变
重排则会影响到元素的布局位置

### CSS选择器

1. - id选择器
2. - 类选择器
3. - 标签
4. - 后代选择器(div p)
5. - 子选择器(div>p)
6. - 相邻选择器(div+p)
7. - 后续兄弟选择器(div~p)
8. - 通配符选择器(*)
9. - 属性选择器（a[rel = "XXX"]）
10. - 伪类选择器(:hover :first-child ···)
11. - 伪元素选择器(:before :after ···)
12. - 分组选择器

> 优先级 !important > 内联style > ID选择器 > 类选择器 > 标签选择器 > 通配符选择器

### 继承
> 可继承的样式：font-size, font-family, color，ul，li，dl，dt，dd；
> 不可继承的样式：border, padding, margin, width, height

### 伪类与伪元素

伪类：伪类基于的是当前元素处于的状态，或者说元素当前所具有的特性，是动态的
> (:link :visited :hover :focus :active :enabled :disabled :checked)
> (:lang :root :valid :invalid)
> (:first-child :last-child :nth-child() :nth-last-child() :only-child）
> (:first-of-type :last-of-type :nth-of-type() :nth-last-of-type() :only-of-type)

伪元素：伪元素基于的是元素中的特定内容，它本身只是基于元素的抽象
> (::first-line  ::first-letter  ::before  ::after  ::placeholder ::selection)

### 媒体查询
@media only screen and (max-device-width:480px) {/css样式/}

### display

value           describe

none            元素会被隐藏，不显示

inline          元素会被设置为内联元素，内部按行从左向右排列（元素前后没有换行符）

block           元素会被设置为块级元素，内部按列从上向下排列（元素前后带有换行符）

inline-block    元素会被设置为行内块级元素，不会独占一行的块级元素

list-item       元素会作为列表显示

table           元素会作为块级表格来显示（类似table），表格前后带有换行符

flex            元素会进入flex布局模式

grid


### 元素的显示与隐藏

display: none
visibility: hidden

1. display: none的元素不占据任何空间，visibility: hidden的元素空间保留；
2. display: none会影响css3的transition过渡效果，visibility: hidden不会；
3. display: none隐藏产生重绘 ( repaint ) 和回流 ( relfow )，visibility: hidden只会触发重绘；（回流重绘知识点参考：真正理解重绘和回流）
4. 株连性：display: none的节点和子孙节点元素全都不可见，visibility: hidden的节点的子孙节点元素可以设置 visibility: visible显示。visibility: hidden属性值具有继承性，所以子孙元素默认继承了hidden而隐藏，但是当子孙元素重置为visibility: visible
   
### position

static      默认值，即没有定位，仍为文档流
inherit     继承父级元素position属性值

relative    相对定位，相对于自身位置进行定位
absolute    绝对定位，相对于position不为static的第一个父级元素进行定位
fixed       固定定位。相对于浏览器窗口进行定位
sticky      

### 浮动float   块状化、BFC、没有margin合并、脱离文档流

浮动布局 - 当元素设置了浮动后，可以向左向右移动，直到它的外边缘碰到包含它的框或者另外一个浮动元素的边框为止


1. clear: both     元素盒子的边不能与前面的浮动元素相邻
clear只能作用于块级元素，并且其并不能解决后面元素可能发生的文字环绕问题
2. 伪元素
```css
#container::after { 
  content: "";
  display: block; 
  clear: both;
}
```
3. 父元素BFC

### BFC (Block Formatting Context, 块级格式上下文)
1. - 根元素 → 根元素（html）就是最大的BFC
2. - position设置为 fixed 或者 absolute
3. - display设置为 inline-block 、table-block 、 table-caption
4. - overflow的值不为visible（默认）
5. - float的值不为none（默认）


### flex 布局
> Flex 容器（flex container），它的所有子元素自动成为容器成员，称为 Flex 项目（flex item）。容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）

容器的属性：
1. flex-direction: row | row-reverse | column | column-reverse; 轴的方向（即项目的排列方向）
2. flex-wrap: nowrap | wrap | wrap-reverse; 如何换行
3. flex-flow: <flex-direction> || <flex-wrap>;
4. justify-content  项目在主轴上的对齐方式
   * flex-start（默认值）：左对齐
   * flex-end：右对齐
   * center： 居中
   * space-between：两端对齐，项目之间的间隔都相等。
   * space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍
5. align-items  项目在交叉轴上的对齐方式
   * flex-start：交叉轴的起点对齐。
   * flex-end：交叉轴的终点对齐。
   * center：交叉轴的中点对齐。
   * baseline: 项目的第一行文字的基线对齐。
   * stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
6. align-content  多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
   * flex-start：与交叉轴的起点对齐。
   * flex-end：与交叉轴的终点对齐。
   * center：与交叉轴的中点对齐。
   * space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
   * space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
   * stretch（默认值）：轴线占满整个交叉轴。

项目的属性：
1. order 定义项目的排列顺序。数值越小，排列越靠前，默认为0。
.item {
  order: <integer>;
}

2. flex  flex-grow, flex-shrink 和 flex-basis的简写，默认值为 0 1 auto
   
3. flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
.item {
  flex-grow: <number>; /* default 0 */
}

4. flex-shrink 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
.item {
  flex-shrink: <number>; /* default 1 */
}

5. flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。它的默认值为auto，即项目的本来大小
.item {
  flex-basis: <length> | auto; /* default auto */
}

6. align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}

### grid 布局



#### vertical-align和line-height(font-size)

```css
/* 关键字值 */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <长度> 值 */
vertical-align: 10em;
vertical-align: 4px;

/* <百分比> 值 */
vertical-align: 10%;

/* 全局值 */
vertical-align: inherit;
vertical-align: initial;
vertical-align: unset;

```


#### 居中
水平居中



垂直居中

1. vertical-align: middle;
display: inline-block;
display: table-cell;

2. position: absolute;
top: 50%;
margin-top: -10px;
transform: translateY(-50%);
```css
div {
  position: absolute;
  top: 50%;
  left: 50%;
  /* margin-top: -100px;
  margin-left: -200px; */
  transform: translate(-50%, -50%);
}
```
3. 空元素 伪元素:before
   
4. flex

```css
div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
```



#### pointer-events

1. 阻止用户的点击动作产生任何效果
2. 阻止缺省鼠标指针的显示
3. 阻止CSS里的hover和active状态的变化触发事件
4. 阻止JavaScript点击动作触发的事件


#### triangle

```css
    .triangle {
        position: relative;
        width: 100px;
        height: 100px;
        border: 1px solid #000;
        margin: 50px;
    }
    .triangle::before {
        position: absolute;
        content: '';
        top: -20px;
        left: 20px;
        /* border-top: 20px solid rgb(22, 233, 163); */
        border-bottom: 20px solid rgb(0, 0, 0);
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
    }
    .triangle::after {
        position: absolute;
        content: '';
        top: -18px;
        left: 20px;
        /* border-top: 18px solid rgb(255, 255, 255); */
        border-bottom: 20px solid rgb(255, 255, 255);
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
    }

    .triangle {
        position: relative;
        width: 100px;
        height: 100px;
        border: 1px solid #000;
        margin: 50px;
    }
    .triangle::before {
        position: absolute;
        content: '';
        top: -40px;
        left: 40px;
        border-width: 20px;
        border-style: solid;
        border-color: transparent transparent #000 transparent;
    }
    .triangle::after {
        position: absolute;
        content: '';
        top: -38px;
        left: 40px; 
        border-width: 20px;
        border-style: solid;
        border-color: transparent transparent #fff transparent;
    }

```
### CSS 变量


```css
body {
  --foo: #7F583F;
  --bar: #F7EFD2;
}
div {
  color: var(--foo, #7F583F);
  text-decoration-color: var(--bar);

  --gap: 20;
  margin-top: calc(var(--gap) * 1px);

  --foo: 20px;
  font-size: var(--foo);
}

@media screen and (min-width: 768px) {
  body {
    --primary:  #F7EFD2;
    --secondary: #7F583F;
  }
}

@supports ( (--a: 0)) {
  /* supported */
}
@supports ( not (--a: 0)) {
  /* not supported */
}
```

```js
if (window.CSS && window.CSS.supports && window.CSS.supports('--a', 0)) {
  /* supported */
} else {
  /* not supported */
}
```

### CSS初始化


### JS 操作 CSS 

1. style
```js
const el = document.createElement('div')
el.style.backgroundColor = 'red'
el.style.cssText = 'background-color: red'
el.setAttribute('style', 'background-color: red')
```

2. className
```js
el.className = "class-one class-two";
el.setAttribute("class", "class-one class-two");
```

3. classList
```js
el.classList
el.classList.contains
el.classList.add
el.classList.remove

```

4. document.styleSheets
```js
// CSSStyleSheet
[{
  title: null,
  disabled: false,
  type: "text/css",
  href: "css/style.css",
  cssRules: [], 
  rules: (...),
  media: MediaList {length: 0, mediaText: ""},
  ownerNode: link,
  ownerRule: null,
  parentStyleSheet: null,
}]
insertRule()	在当前样式表的 cssRules 对象插入CSS规则。
deleteRule()	在当前样式表删除 cssRules 对象的CSS规则。

// CSSStyleRule
{
  type: '', // 0-6的数字，表示规则的类型
  cssText: '', // 返回一个字符串，表示的是当前规则的内容
  parentStyleSheet: '', // 返回所在的CSSStyleRule对象
  parentRule: '', // 如果规则位于另一规则中，该属性引用另一个CSSRule对象
  selectorText: '', // 返回此规则的选择器
  style: '' // 返回一个CSSStyleDeclaration对象
}
```
5. window.getComputedStyle(el)


```js
function addClass(name, style) {
  let styleSheet
  for (let sheet of document.styleSheets) {
    if (sheet.CSSInJS) {
      styleSheet = sheet
      break
    }
  }
  if (!styleSheet) {
    const styleCss = document.createElement('style')
    document.head.appendChild(styleCss)
    styleSheet = styleCss.sheet
    styleSheet.CSSInJS = true
  }
  styleSheet.insertRule(`.${name}{${style}}`)
}
function converStyle(options={}) {
  const keys = Object.keys(options)
  let result = ''
  keys.forEach(key => {
    result += `${key}:${options[key]};`
  })
  return result
}
document.querySelector('h4').classList.add('red')
addClass('red', converStyle({
  color: 'red',
  'background-color': 'aliceblue'
}))

```