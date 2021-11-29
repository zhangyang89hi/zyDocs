
# webgl

<!-- # webgl -->

## 基础

### program（着色程序）一对组合方法
* 顶点着色器
  计算顶点的位置
* 片断着色器
  计算出当前绘制图元中每个像素的颜色值

>WebGL API都是关于如何设置这些成对方法的状态值以及运行它们
>gl.drawArrays 或 gl.drawElements 运行一个着色方法对，使得你的着色器对能够在GPU上运行

### 
1. Attributes（属性）和缓冲
   属性用来指明怎么从缓冲中获取所需数据并将它提供给顶点着色器
   buffer（缓冲）：缓冲是发送到GPU的一些二进制数据序列，通常情况下缓冲数据包括位置，法向量，纹理坐标，顶点颜色值等。 你可以存储任何数据。
2. Uniforms（全局变量）：全局变量在着色程序运行前赋值，在运行过程中全局有效。
3. Textures（纹理）：纹理是一个数据序列，可以在着色程序运行中随意读取其中的数据。大多数情况我们不会自己写材质，就直接用纹理了。
4. Varyings（可变量）：可变量是一种顶点着色器给片断着色器传值的方式，依照渲染的图元是点， 线还是三角形，顶点着色器中设置的可变量会在片断着色器运行中获取不同的插值。




## GLSL (GL着色语言)
### 数据类型
> 变量

| 数据类型 | 描述 |
|:--------:|:--------:|
| void | 空类型 |
| bool | true 或 false |
| int | 整型,16位的有符号的整数 |
| float | 浮点型 |
| vec2/3/4 | 2/3/4 float 向量 |
| bvec2/3/4 | 2/3/4 bool 向量 |
| ivec2/3/4 | 2/3/4 int 向量 |
| mat2 | 2×2的浮点数矩阵 |
| mat3 | 3×3的浮点数矩阵 |
| mat4x4 | 4×4的浮点矩阵 |
| mat2x3 | 2列3行的浮点矩阵 |
| mat2x4 | 2列4行的浮点矩阵 |
| mat3x2 | 3列2行的浮点矩阵 |
| mat3x4 | 3列4行的浮点矩阵 |
| mat4x2 | 4列2行的浮点矩阵 |
| mat4x3 | 4列3行的浮点矩阵 |
| sampler1D | 一维纹理句柄 |
| sampler2D | 二维纹理句柄 |
| sampler3D | 三维纹理句柄 |
| samplerCube | cube map纹理句柄 |
| sampler1DShadow | 一维深度纹理句柄 |
| sampler2DShadow | 二维深度纹理句柄 |

> 结构体
```c
struct dirlight{
  vec3 direction;
  vec3 color;
};
// =为结构体赋值
// ==，!=来判断两个结构体是否相等
// GLSL的结构体不支持嵌套定义
```

> 数组

GLSL中只可以使用一维的数组，数组的类型可以是一切基本类型或者结构体。
```c
vec4 lightPositions[8];
vec4 lightPos[] = lightPositions;
const int numSurfaces = 5;
surface myFiveSurfaces[numSurfaces];
float[5] values;
lightPositions.length();
```

> 变量修饰符

| 修饰符 | 描述 |
|:--------:|:--------:|
| const | 只读变量 |
| attribute | 只读的顶点数据，只用在顶点着色器中，全局变量 |
| uniform | 一致变量，顶点着色器和片段着色器之间是共享，由着色器外部初始化，全局变量 |
| varying | 顶点着色器的输出，作为片段着色器的只读输入数据，全局变量 |
| centorid varying | 多重采样时，在光栅化的图形内部进行求值 |
| invariant |  |
| in | 函数的输入参数 |
| out | 函数的输出参数 |
| inout | 输入、输出参数 |

### 内置变量

顶点着色器：

| 变量名称 | 类型 | 描述 |
|:--------:|:--------:|:--------:|
| gl_Color | vec4 | 表示顶点的主颜色-输入属性 |
| gl_SecondaryColor | vec4 | 表示顶点的辅助颜色-输入属性|
| gl_Normal | vec3 | 表示顶点的法线值-输入属性 |
| gl_Vertex | vec4 | 表示物体空间的顶点位置-输入属性 |
| gl_MultiTexCoordn | vec4 | 表示顶点的第n个纹理的坐标-输入属性 |
| gl_FogCoord | float | 表示顶点的雾坐标-输入属性 |
| gl_Position | vec4 | 变换后的顶点的位置-输出属性 |
| gl_ClipVertex | vec4 | 用于用户裁剪平面的裁剪-输出坐标 |
| gl_PointSize | float | 点的大小 |
| gl_FrontColor | vec4 | 正面的主颜色的varying输出 |
| gl_BackColor | vec4 | 背面主颜色的varying输出 |
| gl_FrontSecondaryColor | vec4 | 正面的辅助颜色的varying输出 |
| gl_BackSecondaryColor | vec4 | 背面的辅助颜色的varying输出 |
| gl_FogFragCoord | float | 雾坐标的varying输出 |

片段着色器：

| 变量名称 | 类型 | 描述 |
|:--------:|:--------:|:--------:|
| gl_Color | vec4 | 包含主颜色的插值-只读输入 |
| gl_SecondaryColor | vec4 | 包含辅助颜色的插值-只读输入 |
| gl_TexCoord[] | vec4 | 包含纹理坐标数组的插值只读输入 |
| gl_FogFragCoord | float | 包含雾坐标的插值只读输入 |
| gl_FragCoord | vec4 | 只读输入，窗口的x,y,z和1/w |
| gl_FrontFacing | bool | 只读输入，如果是窗口正面图元的一部分，则这个值为true |
| gl_PointCoord | vec2 | 点精灵的二维空间坐标范围在(0.0, 0.0)到(1.0, 1.0)之间，仅用于点图元和点精灵开启的情况下 |
| gl_FragData[] | vec4 | 使用glDrawBuffers输出的数据数组。不能与gl_FragColor结合使用。 |
| gl_FragColor | vec4 | 输出的颜色用于随后的像素操作 |
| gl_FragDepth | float | 输出的深度用于随后的像素操作 |

> 构造函数：

构造函数可以用于初始化包含多个成员的变量，包括数组和结构体。构造函数也可以用在表达式中。

```c
vec3 myNormal = vec3(1.0, 1.0, 1.0);
greenTint = myColor + vec3(0.0, 1.0, 0.0);
ivec4 myColor = ivec4(255);
vec4 color = vec4(1.0, vec2(0.0, 1.0), 1.0);
vec3 v = vec3(1.0, 10.0, 1.0);
vec3 v1 = vec3(v);
vec2 fv = vec2(5.0, 6.0);
float f = float(fv); //用x值2.5构造，y值被舍弃

mat2 matrix1 = mat2(1.0, 0.0, 0.0, 1.0);
mat2 matrix2 = mat2(vec2(1.0, 0.0), vec2(0.0, 1.0));
mat2 matrix3 = mat2(1.0); 
mat2 matrix4 = mat2(mat4(2.0)); //会取 4×4矩阵左上角的2×2矩阵。
```
* 构造函数可以用于标量数据类型的转换
* 数组的初始化，可以在构造函数中传入值来初始化数组中对应的每一个值。
* 构造函数也可以对结构体进行初始化。其中顺序和类型要一一对应。
```c
float f = 1.7;
int I = int(f); // I = 1

ivec2 position[3] = ivec2[3]((0,0), (1,1), (2,2));
ivec2 pos2[3] = ivec2[]((3,3), (2,1), (3,1));

struct surface {
   int  index;
   vec3 color;  float rotate;
};
surface mySurface = surface(3, vec3(red, green, blue), 0.5);
```
> 成分选择

* 向量中单独的成分可以通过{x,y,z,w},{r,g,b,a}或者{s,t,p,q}的记法来表示。这些不同的记法用于顶点，颜色，纹理坐标。其中{s,t,p,q}中的p替换了纹理的r坐标，因为与颜色r重复了。
* 使用下标来访问向量或矩阵中的元素，在矩阵中，可以通过一维的下标来获得该列的向量(OpenGL的矩阵是列主顺序的)。二维的小标来获得向量中的元素。

vec4 v;
v.x 和 v.s 以及 v.r ， v[0] 表达的是同一个分量
v.y 和 v.t 以及 v.g ， v[1] 表达的是同一个分量
v.z 和 v.p 以及 v.b ， v[2] 表达的是同一个分量
v.w 和 v.q 以及 v.a ， v[3] 表达的是同一个分量

```c
vec3 myVec = {0.5, 0.35, 0.7};
float r = myVec.r;
float myYz = myVec.yz;

//调换顺序
vec3 yxz = myVec.yxz;
//重复其中的值
vec4 mySSTT = myVec.sstt;

vec4 myColor = {0.0, 1.0, 2.0, 1.0};
myColor.x = -1.0;
myColor.yz = vec2(3.0, 5.0);
myColor.wx = vec2(1.0, 3.0);

float myY = myVec[1];

mat3 myMat = mat3(1.0);
vec3 myVec = myMat[0]; // 获得第一列向量    1.0, 0.0, 0.0
float f = myMat[0][0]; // 第一列的第一个向量。
```

### 函数

每个shader中必须有一个main函数。main函数中的void参数是可选的，但返回值是void时必须的。

* GLSL中的函数必须是在全局范围定义和声明。
* 不能在函数定义中声明或定义函数。
* 函数必须有返回类型，参数是可选的。参数的修饰符(in, out, inout, const等）是可选的。
* 结构体和数组也可以作为函数的参数。如果是数组作为函数的参数，则必须制定其大小。在调用传参时，只传数组名就可以了。
* GLSL的函数是支持重载的。函数可以同名但其参数类型或者参数个数不同即可。
```c
//函数声明
vec4 sumVectors(int sumSize, vec4 v[10]);
void main()
{
    vec4 myColors[10];
    //函数调用void main(void)
    vec4 sumColor = sumVectors(5, myColors);
}

//函数定义
vec4 sumVectors(int sumSize, vec4 v[10])
{
    int i = 0;
    vec4 sum = vec4(0.0);
    for(; i < sumSize; ++i)
    {
        sum += v[i]; 
    }
    return sum;
}

// 函数重载
float sum(float a, float b)
{
    return a + b;
}
vec3 sum(vec3 v1, vec3 v2)
{
    return v1 + v2;
}
```

> 内置函数

1. void glVertex3fv(Glfloat *vertex)
2. 前缀 gl,glu,glut ---- 该函数属于哪个函数库
3. 后缀. 2, 3, 4 -----参数的维度，. b, s, l, f, d, ub, us, ui------参数的数据类型，. v ---- 以数组方式传递参数

## gl-api


gl.drawArrays(mode, offset, vertexCount);
gl.drawElements(mode, vertexCount, type, offset);


## shader

### 基础概念

> 变量
gl_PointSize
gl_Position
gl_FragColor

> main

```c
// vertexShaderSource
void main() {
  // 像素大小
  gl_PointSize = 20.0;
  // 顶点位置
  gl_Position = vec4(0.0,0.0,0.0,1.0);
}

// fragShaderSource
void main() {
  // 定义片元颜色
  gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}

gl.POINTS: 画单独的点。
gl.LINES: 在一对顶点之间画一条线.
gl.LINE_STRIP: 画一条直线到下一个顶点。
gl.LINE_LOOP: 绘制一条直线到下一个顶点，并将最后一个顶点返回到第一个顶点.

gl.TRIANGLES: 为一组三个顶点绘制一个三角形.
gl.TRIANGLE_STRIP: 一些列条带状的三角形，三个点构成第一个三角形
gl.TRIANGLE_FAN: 一些列条带状的三角形，前三个点构成一个三角形,接下来的一个点和前一个三角形的最后一条边组成三角形


gl.drawArrays(mode, offset, vertexCount);
gl.drawElements(mode, vertexCount, type, offset);

```

着色器获取数据:
1. 属性（Attributes）和缓冲
   缓冲: 发送到GPU的一些二进制数据序列，通常包括位置，法向量，纹理坐标，顶点颜色值等
   属性: 用来指明怎么从缓冲中获取所需数据并将它提供给顶点着色器
2. 全局变量（Uniforms）
   全局变量在着色程序运行前赋值，在运行过程中全局有效。
3. 纹理（Textures）
   纹理是一个数据序列，可以在着色程序运行中随意读取其中的数据。
4. 可变量（Varyings）
   可变量是一种顶点着色器给片断着色器传值的方式，依照渲染的图元是点、线还是三角形，顶点着色器中设置的可变量会在片断着色器运行中获取不同的插值。


gl.frontFace(gl.CCW); // 正面逆时针顺序绘制

gl.enable(gl.CULL_FACE);// CULL意为“剔除”

gl.cullFace(gl.BACK); // 剔除背面三角形


```js
// 使用CSS调整画布尺寸
webglUtils.resizeCanvasToDisplaySize(gl.canvas);
// -1 -> +1 分别对应到x轴的 0 -> gl.canvas.width 和y轴的 0 -> gl.canvas.height
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

// 清空画布
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

var positionBuffer = gl.createBuffer(); // 创建一个缓冲
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // 绑定点指向该数据源
// 三个二维点坐标
var positions = [
  0, 0,
  0, 0.5,
  0.7, 0,
];
// 将数据复制到GPU的positionBuffer对象上
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

// 告诉它用我们之前写好的着色程序（一个着色器对）
gl.useProgram(program);

// 将绑定点绑定到缓冲数据（positionBuffer）
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
// 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)
var size = 2;          // 每次迭代运行提取两个单位数据
var type = gl.FLOAT;   // 每个单位的数据类型是32位浮点型
var normalize = false; // 不需要归一化数据
var stride = 0;        // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）
                       // 每次迭代运行运动多少内存到下一个数据开始点
var offset = 0;        // 从缓冲起始位置开始读取
gl.vertexAttribPointer(
    positionAttributeLocation, size, type, normalize, stride, offset)
// 
gl.enableVertexAttribArray(positionAttributeLocation);

var primitiveType = gl.TRIANGLES;
var offset = 0;
var count = 3;
gl.drawArrays(primitiveType, offset, count);

```


```js

// vertexShaderSource
void main() {
  // 像素大小
  gl_PointSize = 20.0;
  // 顶点位置
  gl_Position = vec4(0.0,0.0,0.0,1.0);
}

// fragShaderSource
void main() {
  // 定义片元颜色
  gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}

gl.drawArrays(gl.LINE_LOOP,0,4);

POINTS
LINE_LOOP
LINE_STRIP
TRIANGLES

WebGL坐标系-1.0~1.0区间对应的是canvas画布的四个边界
```
### 顶点着色 片段着色

> 顶点着色器需要的数据，可以通过以下三种方式获得:
1. Attributes 属性 (从缓冲中获取的数据)
2. Uniforms 全局变量 (在一次绘制中对所有顶点保持一致值)
3. Textures 纹理 (从像素或纹理元素中获取的数据)


> 片断着色器所需的数据，可以通过以下三种方式获取:
1. Uniforms 全局变量 (values that stay the same for every pixel of a single draw call)
2. Textures 纹理 (data from pixels/texels)
3. Varyings 可变量 (data passed from the vertex shader and interpolated)


> 纹理
```js
// 着色器中获取纹理信息
precision mediump float;
uniform sampler2D u_texture; // 创建一个sampler2D类型全局变量
void main() {
   vec2 texcoord = vec2(0.5, 0.5)  // 获取纹理中心的值
   gl_FragColor = texture2D(u_texture, texcoord);
}

// 创建纹理数据
var tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
var level = 0;
var width = 2;
var height = 1;
var data = new Uint8Array([
   255, 0, 0, 255,   // 一个红色的像素
   0, 255, 0, 255,   // 一个绿色的像素
]);
gl.texImage2D(gl.TEXTURE_2D, level, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);

// 绑定到一个纹理单元上
var unit = 5;  // 挑选一个纹理单元
gl.activeTexture(gl.TEXTURE0 + unit);
gl.bindTexture(gl.TEXTURE_2D, tex);

var someSamplerLoc = gl.getUniformLocation(someProgram, "u_texture");
gl.uniform1i(someSamplerLoc, unit);
```

> Varyings 可变量
顶点着色器给片断着色器传值的方式



## 坐标 投影

ortho 正交投影

[
  2/r-l, 0, 0, 0,
  0, 2/t-b, 0, 0,
  0, 0, 2/f-n, 0,
  -(r+l)/(r-l), -(t+b)/(t-b), -(f+n)/(f-n), 1
]


perspective 透视投影

fovy, tan fovy = h/n
aspect=w/h, 
near, 
far

[
  2n/r-l, 0, 0, 0,
  0, 2n/t-b, 0, 0,
  -(r+l)/(r-l), -(t+b)/(t-b), f+n/f-n, -1,
  0, 0, -2f*n/(f-n), 0
]

[
  2n/w 0, 0, 0,
  0, 2n/h, 0, 0,
  0, 0, f+n/f-n, -1,
  0, 0, -2f*n/(f-n), 0
]

f = tan fovy/2

[
  f/aspect, 0, 0, 0,
  0, f, 0, 0,
  0, 0, f+n/f-n, -1,
  0, 0, -2f*n/(f-n), 0
]

## 光源

## shader
1. lowp：低精度
2. vec3、vec2：三个浮点数、两个浮点数【可以简单理解位三维向量和二维向量】
3. mod：求余数
4. abs：返回参数的绝对值
5. dot：点乘
6. fract：取浮点数的小数部分
7. length：返回向量的模长
8. iTime：是自动输入的、以秒为单位的时间变量，可以参与构造噪声
9. iResolution：长宽尺寸
10. fragCoord：片元的实际屏幕像素坐标
11. step(a,b)：表示如果a>b，返回0；否则返回1


类型	                描述
void	                表示一个空值
bool	                接受true或false
int	                  这是一个有符号整数数据类型
float	                这是一个浮点标量数据类型
vec2, vec3, vec4	    正分量浮点矢量
bvec2, bvec3, bvec4	  布尔矢量
ivec2, ivec3, ivec4	  有符号整数矢量
mat2, mat3, mat4	    2x2, 3x3, 4x4 浮点矩阵
sampler2D	            访问2D纹理
samplerCube	          访问立方体映射纹理


顶点着色器默认精度
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;

片元着色器默认精度
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;

## gl调试



