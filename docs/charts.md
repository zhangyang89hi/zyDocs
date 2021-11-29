

# SVG(Scalable Vector Graphics)

可缩放矢量图形
```js
<div class="svg-wrap">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
     <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
  </svg>
</div>

```
## svg 属性

1. viewport
由 width、height 属性声明,浏览器默认给定宽高为 300px * 150px
2. viewbox
x, y, width, height
3. preserveAspectRatio
xMid xMin xMax 和 YMid YMin YMax, 


## 基本元素

1. 矩形，rx，ry定义圆角
<rect x="10" y="10" width="100" height="100" rx="5" ry="5" fill="yellow"></rect>

2. 圆 cx cy 定义圆心
<circle cx="50" cy="50" r="40" fill="yellow"></circle>

3. 椭圆 rx ry 定义长轴半径、短轴半径
<ellipse cx="50" cy="50" rx="40" ry="20" fill="yellow"></ellipse>

4. 线段
<line x1="10" y1="10" x2="90" y2="90" stroke="yellow"></line>

5. 折线 点与点之间用空格隔开
<polyline points="50,10 80,90 10,30 90,30 20,90" stroke="#fb3" fill="transparent"></polyline>

5. 多边形
<polygon points="50,10 80,90 10,30 90,30 20,90" stroke="#fb3" fill="transparent"></polygon>

6. 路径，可以绘制上述所有图形 d属性定义路径的具体形式
<path d="M10,10 C40,5 40,140 100,100" stroke="#fb3" stroke-width="4px"></path>

7. 文字 dx dy是相对起点坐标的偏移量，rotate指定单个文字的旋转
<text x="10" y="10" dx="10" dy="10" textLength="100" rotate="20">示例文字</text>



## html 使用方法
1. img
   <img src="./test.svg" style="display:block;width:330px;height:240px" />
2. iframe
   <iframe src="./test.svg" style="display:block;width:330px;height:240px;border:none;" ></iframe>
3. embed
   <embed src="./test.svg" style="display:block;width:330px;height:240px" />
4. object
   <object type="image/svg+xml" data="./test.svg" style="display:block;width:330px;height:240px" >
      <param name="src" value="./test.svg" >
   </object>
5. background
   <div style="display:block;width:330px;height:240px;background: url(./test.svg) no-repeat;background-size: 100%;" ></div>


## lib

SVG.js
snap.svg.js
d3.js






























# 地图 BMap










# ec

## 概念
1. series
   一组数值以及他们映射成的图
   （series.type）至少有：line（折线图）、bar（柱状图）、pie（饼图）、scatter（散点图）、graph（关系图）、tree（树图）、...
2. component
   xAxis（直角坐标系 X 轴）、yAxis（直角坐标系 Y 轴）、grid（直角坐标系底板）、angleAxis（极坐标系角度轴）、radiusAxis（极坐标系半径轴）、polar（极坐标系底板）、geo（地理坐标系）、dataZoom（数据区缩放组件）、visualMap（视觉映射组件）、tooltip（提示框组件）、toolbox（工具栏组件）、series（系列）、...
3. option
   option 描述 `数据`、`数据如何映射成图形`、`交互行为` 等。

4. dataset
   单独的数据集声明
   
```js
// option 是个大的 JavaScript 对象。
var option = {
    // option 每个属性是一类组件。
    legend: {...},
    grid: {...},
    tooltip: {...},
    toolbox: {...},
    dataZoom: {...},
    visualMap: {...},
    // 如果有多个同类组件，那么就是个数组。例如这里有三个 X 轴。
    xAxis: [
        // 数组每项表示一个组件实例，用 type 描述“子类型”。
        {type: 'category', ...},
        {type: 'category', ...},
        {type: 'value', ...}
    ],
    yAxis: [{...}, {...}],
    // 这里有多个系列，也是构成一个数组。
    series: [
        // 每个系列，也有 type 描述“子类型”，即“图表类型”。
        {type: 'line', data: [['AA', 332], ['CC', 124], ['FF', 412], ... ]},
        {type: 'line', data: [2231, 1234, 552, ... ]},
        {type: 'line', data: [[4, 51], [8, 12], ... ]}
    }]
};

// 调用 setOption 将 option 输入 echarts，然后 echarts 渲染图表。
chart.setOption(option);

```
