

# three

## 几何
### BufferGeometry
BufferGeometry 包含一系列 BufferAttributes, 代表每个顶点所有数据的并行数组(位置，法线，颜色，uv...)
position, normal, color, uv
```js
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(positions), 3));
geometry.setAttribute('normal',new THREE.BufferAttribute(new Float32Array(normals), 3));
geometry.setAttribute('color',new THREE.BufferAttribute(new Float32Array(colors), 3));
geometry.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(uvs), 2));

geometry.setIndex([
   0,  1,  2,   2,  1,  3,  // front
   4,  5,  6,   6,  5,  7,  // right
   8,  9, 10,  10,  9, 11,  // back
  12, 13, 14,  14, 13, 15,  // left
  16, 17, 18,  18, 17, 19,  // top
  20, 21, 22,  22, 21, 23,  // bottom
]);
```

### Geometry

### 高级几何
1. ConvexGeometry 包围一组顶点的最小图形
var geometry = new THREE.ConvexGeometry(points);

2. LatheGeometry 车床模型，通过一条光滑的样条曲线绕一个固定点旋转的模型
var geometry = new THREE.LatheGeometry(points, 12, 0, 2 * Math.PI);
points（构成曲线的点）segments（分段数目）phiStart（开始位置）phiLength（旋转弧度）

3. ExtrudeGeometry 塑性模型，将2D图形拉伸为3D几何模型
```js
var geometry = new THREE ExtrudeGeometry(shapes, options)
amount （拉伸形状的深度）、
curveSegments （曲线上点的个数 曲线分段数）、
steps （用于细分拉伸的样条段数量）、
extrudePath （沿3D样条路径拉伸形状）、

bevelEnabled （打开斜面）、
bevelThickness （在原来的形状里面弄多深的斜面）、
bevelSize （斜面离形状轮廓的距离）、
bevelSegments （斜面层的数量）、

material（前后面的材质索引号）、
extrudeMaterial （拉伸或斜化面的材质索引号）

var options = {
   amount:2, // 拉伸形状的深度
   bevelThickness:2, // 在原来的形状里面弄多深的斜面
   bevelSize:0.5, // 斜面离形状轮廓的距离
   bevelSegments:3, // 斜面层的数量
   bevelEnabled:true, // 打开斜面
   curveSegments:12, // 曲线上点的个数
};
```
4. TubeGeometry 管道模型
var geometry = new THREE.TubeGeometry(new THREE.SplineCurve3(points),64,1,8,false)
path（用THREE.SplineCurve来指定管道应当遵循的路径）、segments（管道分段数）、radius（半径）、radiusSegments（圆周分段数）、closed（头尾是否相连）、debug（调试信息）

5. ParametricGeometry 基于等式的几何体
var geometry = new THREE.ParametricGeometry(radialWave, 120, 120, false)
function（以u,v作为参数，返回vector3对象作为坐标），slices（u值分段），stacks（v值分段），useTris（true：三角面，false：四边形面）

6. 三维字体
var text = new THREE.TextGeometry(text, options)
font（字体）、size （大小）、height （文字厚度）、curveSegments （曲线点数）、bevelEnabled （是否打开斜面）、bevelThickness （文本斜面的深度）、bevelSize （斜面离轮廓的距离）

### 多实例几何体 合并几何体
1. 多实例几何体
同一个Geometry ， 同一个 material ，但可以通过索引轻松控制每一个个体大小、位置等
```js
let insGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
//创建具有多个实例的实例化几何体
let insMesh = new THREE.InstancedMesh(insGeometry, material, total);
//修改位置
let transform = new THREE.Object3D();
for (let index = 0; index < total; index++) {
    transform.position.set(Math.random() * 2000, Math.random() * 2000, Math.random() * 2000);
    transform.scale.set(Math.random() * 50 + 50, Math.random() * 50 + 50, Math.random() * 50 + 50);
    transform.updateMatrix();
    //修改实例化几何体中的单个实例的矩阵以改变大小、方向、位置等
    insMesh.setMatrixAt(index, transform.matrix);
}
scene.add(insMesh);
```

2. 合并几何体
不同的 Geometry ，同一个 material 没有索引可以使用，合并后变为一个个体 ，难以单独控制
```js
 let geometries = [];
 let transform = new THREE.Object3D();
 for (let index = 0; index < total; index++) {
     let geometry = new THREE.BoxBufferGeometry(Math.random() * 50 + 50, Math.random() * 50 + 50, Math.random() * 50 + 50);
     transform.position.set(Math.random() * 2000, Math.random() * 2000, Math.random() * 2000);
     transform.updateMatrix();
     geometry.applyMatrix4(transform.matrix);
     geometries.push(geometry);
 }
 let mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries);
 let mergedMesh = new THREE.Mesh(mergedGeometry, material2);
 scene.add(mergedMesh);
```
3.      Instance实例化几何体	Merge合并几何体
Material	   相同	              相同
Geometry	   相同	            ✔不同
单个控制	✔ 使用索引，轻松实现	   难以实现
生成时间	✔ 快速	              缓慢
渲染性能	   较优	            ✔ 更优
内存占用	✔ 极少	              较多

### 几何组合
Three.js的扩展库ThreeBSP提供的函数 intersect（相交）、union（联合）、subtract（相减）
```js
var component1BSP = new.ThreeBSP(component1);
var component2BSP = new.ThreeBSP(component2);

component1BSP.intersect(component2BSP);
component1BSP.union(component2BSP);
component1BSP.subtract(component2BSP);
```

## Material

```js

const material = new THREE.MeshPhongMaterial({
  color: 0xFF0000,    // 红色 (也可以使用CSS的颜色字符串)
  flatShading: true,
});
const material = new THREE.MeshPhongMaterial();
material.color.setHSL(0, 1, .5);  // 红色
material.flatShading = true;

const m1 = new THREE.MeshBasicMaterial({color: 0xFF0000});         // 红色
const m2 = new THREE.MeshBasicMaterial({color: 'red'});            // 红色
const m3 = new THREE.MeshBasicMaterial({color: '#F00'});           // 红色
const m4 = new THREE.MeshBasicMaterial({color: 'rgb(255,0,0)'});   // 红色
const m5 = new THREE.MeshBasicMaterial({color: 'hsl(0,100%,50%)'); // 红色

material.color.set(0x00FFFF);    // 同 CSS的 #RRGGBB 风格
material.color.set(cssString);   // 任何 CSS 颜色字符串, 比如 'purple', '#F32','rgb(255, 127, 64)', 'hsl(180, 50%, 25%)'
material.color.set(someColor)    // 其他一些 THREE.Color
material.color.setHSL(h, s, l)   // 其中 h, s, 和 l 从 0 到 1
material.color.setRGB(r, g, b)   // 其中 r, g, 和 b 从 0 到 1

```


1. MeshBasicMaterial ➡ 不受光照的影响
2. MeshLambertMaterial ➡ 只在顶点计算光照
3. MeshPhongMaterial ➡ 每个像素计算光照, 还支持镜面高光
4. MeshToonMaterial ➡ 
   它不是平滑地着色，而是使用一个渐变图来决定如何着色, 看起来就像卡通一样
5. MeshStandardMaterial ➡ 
   roughness 粗糙度,  metalness 金属度
6. MeshPhysicalMaterial ➡ 
   clearcoat 清漆光亮层的程度
   clearCoatRoughness 光泽层的粗糙程度

7. ShadowMaterial ➡ 获取阴影创建的数据
8. MeshDepthMaterial ➡ 渲染每个像素的深度
9. MeshNormalMaterial ➡ 会显示几何体的法线

10. ShaderMaterial  通过three.js的着色器系统来制作自定义材质
11. RawShaderMaterial   制作完全自定义的着色器

属性: 
1. flatShading: 对象是否使用平面着色，默认为false
2. side: 要显示三角形的哪个面,
   默认值是 THREE.FrontSide,
   其他选项有 THREE.BackSide 和 THREE.DoubleSide（正反两面)
3. shininess: 镜面高光的光泽度, 它的默认值是30
4. needsUpdate


## texture
纹理贴图种类：
* 凹凸贴图
* 法线贴图
* 固有色贴图
* 高光贴图
环境光遮蔽贴图
透明贴图
自发光贴图


```js
const loader = new THREE.TextureLoader();
 
const material = new THREE.MeshBasicMaterial({
  map: loader.load('resources/images/wall.jpg'),
});
```

1. texture.magFilter
   THREE.NearestFilter 选取最接近的一个像素
   THREE.LinearFilter 选取最近的4个像素
2. texture.minFilter
   THREE.NearestFilter
   THREE.LinearFilter
   THREE.NearestMipmapNearestFilter
   THREE.NearestMipmapLinearFilter
   THREE.LinearMipmapNearestFilter
   THREE.LinearMipmapLinearFilter
3. texture.wrapS 水平包裹
4. texture.wrapT 垂直包裹
   THREE.ClampToEdgeWrapping 每条边上的最后一个像素无限重复
   THREE.RepeatWrapping 纹理重复
   THREE.MirroredRepeatWrapping 每次重复时将进行镜像
5. offset 纹理的偏移
6. center 旋转中心  rotation 旋转角度




## light
1. AmbientLight 
2. HemisphereLight
3. DirectionalLight
4. PointLight
5. SpotLight

## shadow

## post processing
1. 渲染通道
* ShaderPass  使用该通道你可以传入一个自定义的着色器，用来生成高级的、自定义的后期处理通道
* RenderPass  该通道在指定的场景和相机的基础上渲染出一个新的场景
* BloomPass   该通道会使得明亮区域参入较暗的区域。模拟相机照到过多亮光的情形
* DotScreenPass   将一层黑点贴到代表原始图片的屏幕上
* FilmPass    通过扫描线和失真模拟电视屏幕
* MaskPass    在当前图片上贴一层掩膜，后续通道只会影响被贴的区域
* SavePass    执行该通道时，它会将当前渲染步骤的结果复制一份，方便后面使用。
* TexturePass 该通道可以将效果组合器的当前状态保存为一个纹理，然后可以在其他EffectCoposer对象中将该纹理作为输入参数

2. 内置着色器Shader
* CopyShader 该着色器会将效果输出
* AfterimageShader 使运动的模型产生残影，搭配对应通道使用
* DotScreenShader 将原始图像输出为灰度点集
   配置项：scale：点的大小，center：点的偏移量，angle：点的对其方式
* RGBShiftShader 将图像的红绿蓝三种颜色分离
   配置项：amount：颜色深浅度
* DigitalGlitch 使屏幕显示电子脉冲
* FXAAShader 主要用于抗锯齿
   配置项：resolution：分辨率，根据窗口设置大小

* LuminosityHighPassShader 主要用于物体亮度通道实现，搭配对应通道使用
* BokehShader 背景虚化，类似相机变焦，搭配对应通道使用
* HalftoneShader 能在场景中添加rgb三色元素，搭配对应通道使用
* PixelShader 给场景中的物体添加马赛克效果
配置项：resolution：分辨率，pixelSize：像素大小

```js
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new BloomPass(
   1,    // strength
   25,   // kernel size
   4,    // sigma ?
   256,  // blur render target resolution
));
const filmPass = new FilmPass(
   0.35,   // noise intensity
   0.025,  // scanline intensity
   648,    // scanline count
   false,  // grayscale
);
filmPass.renderToScreen = true;
composer.addPass(filmPass);
composer.render(deltaTime);
```


## animate
简单动画
变形动画
骨骼动画
粒子动画

1. Animation Mixer 动画混合器

2. Animation Actions 动画播放器
3. Animation Clips 动画片段
4. Keyframe Tracks 关键帧轨迹
   * name：当前动画的名称；
   * uuid：一个不会重复的 uuid；
   * duration：当前动画一个循环所需要的时间；
   * tracks：轨迹，即当前动画每一次切换动作所需要的数据。

### morphTargets

physicallyCorrectLights
distance
power
decay



## particle
1. Points粒子
```js
// 
const geo = new THREE.Geometry();
const material = new THREE.PointsMaterial({ 
   size: 4, sizeAttenuation: true, 
   color: 0xffffff, transparent: true, 
   opacity: 1, 
   map: mapDot 
});
material.vertexColors = THREE.VertexColors;
const particles = new THREE.Points(geo, material);

// 
const geo = new THREE.Geometry();
const material = new THREE.PointCloudMaterial({
   size: size,
   transparent: transparent,
   opacity: opacity,
   vertexColors: vertexColors,
   sizeAttenuation: sizeAttenuation,
   color: color
})
const cloud = new THREE.PointCloud(geo, material)

new THREE.Geometry();
new THREE.ParticleBasicMaterial({
   size:4, vertexColors:true, color: 0xffffff
});
new THREE.Particle()

// ParticleSystem
new THREE.Geometry();
new THREE.ParticleSystemMaterial()
new THREE.ParticleSystem(geo, material);
```

2. Sprite粒子

## physics
AmmoJS
physi.js
Cannon.js
## 格式
1. STL
   只能描述三维物体的几何信息
2. obj
   包括三个子文件  .obj、.mtl、.jpg
3. glTF
4. fbx
5. abc
   CG动效交换格式
6. bvh 
   动作捕捉通用格式 
### obj
- 只支持模型三角面数据和材质信息，无动画功能支持；
- 其中几何信息由.obj文件提供，材质信息由.mtl文件定义；
- 文件以行为单位表示一条数据，可以根据行开头的字符判断后续的内容；
- 其中 # 字符表示注释行

> OBJ 文件格式

```sh
# obj对应的材质文件
mtllib testvt.mtl
# 组名称
g default
# o 对象名称(Object name)
o testvt.obj
# 顶点
v -0.5 -0.5 0.1
v -0.5 -0.5 -0.1
v 0 0.5 0.1
v 0 0.5 -0.1
v 0.5 -0.5 0.1
v 0.5 -0.5 -0.1
# 纹理坐标
vt 0 1
vt 1 1
vt 0.5 0
# 顶点法线
vn 0 0 1
vn 0 0 -1
# 当前图元所用材质
usemtl Default
# s Smooth shading across polygons is enabled by smoothing groups.
# Smooth shading can be disabled as well.
s off
# 面通过顶点、纹理及法向的索引来定义，v1/vt1/vn1 v2/vt2/vn2 v3/vt3/vn3(索引起始于1)
f 1/1/1 5/2/1 3/3/1
f 6/2/2 2/1/2 4/3/2
```

> MTL 文件格式

```sh
# 定义一个名为 'xxx'的材质
newmtl xxx
# 环境光（ambient color）Ka
Ka 0 0 0
# 漫反射光（diffuse color）Kd
Kd 0.784314 0.784314 0.784314
# 镜面光（specular color）Ks
Ks 0 0 0
# 放射光（emissive color）Ke
Ke 0 0 0

# 反射指数 定义了反射高光度。该值越高则高光越密集，一般取值范围在0~1000。
Ns 400
# 材质的光密度，折射值 0.001~10。为1.0时，光在通过物体的时候不发生弯曲。玻璃的折射率为1.5。
Ni 1
# 滤光透射率，透射滤波
Tf 1 1 1
# 渐隐指数描述 参数factor表示物体融入背景的数量，取值范围为0.0~1.0，取值为1.0表示完全不透明，取值为0.0时表示完全透明。
d 1
# 材质的锐度（sharpness）
sharpness 
#refl: 材质的反射属性
refl

# illum 照明度（illumination）后面可接0~10范围内的数字参数
illum
# 环境光颜色纹理
map_Ka test_ka.bmp
# 漫反射颜色纹理
map_Kd test_kd.bmp
# 镜面光颜色纹理
map_Ks test_ks.bmp
# 凹凸贴图
map_bump lenna_bump.tga
# alpha通道纹理贴图
map_d lenna_alpha.tga

```

### glTF
> 标准
1. glTF采用右手坐标系
2. 长度单位是米
3. 角度单位为弧度
4. 正向旋转为逆时针
5. 颜色采用sRGB格式
   
> 材质
glTF数据格式直接支持 metallic-roughness

baseColor
metallic
roughness

diffuse纹理——漫反射：
normal纹理——法线：
gloss纹理——光泽：
environment纹理——环境：
emissive纹理——发光：用于描述3D对象表面发出的光的颜色。
occlusion纹理——遮挡：用于模拟3D对象遮挡产生的效果。

> UV纹理空间[0,1]
> 纹理寻址模式: 
+ wrap, 
+ mirror, 
+ clamp, 
+ border
> 纹素密度-纹素与像素的比
> 多级渐远纹理（mipmap）
> 纹理过滤（texture filtering）
+ 最邻近（nearest）
+ 双线性（bilinear）
+ 三线性（trilinear）
+ 各项异性（anisotropic）

```json
{
   "asset": {
      "version": "2.0",
      "generator": "@",
      "copyright": "2017 (c) Khronos Group"
   },
   "extensionsUsed": [
      "KHR_materials_common",
      "VENDOR_physics"
   ],
   "extensionsRequired": [
      "WEB3D_quantized_attributes"
   ],
   "scene": 0,
   "scenes": [
      {
         "nodes": [0, 1]
      }
   ],
   "nodes": [
      {
         "name": "Car",
         "children": [1, 2],
         "mesh": 0,
         "camera": 0,
         "matrix": [],
      },
      {
         "name": "wheel_1",
         "mesh": 1,
         "skin" : 0,
         "translation": [ 10.0, 20.0, 30.0 ],
         "rotation": [ 0.259, 0.0, 0.0, 0.966 ],
         "scale": [ 2.0, 1.0, 0.5 ],
      },
      {
         "name": "wheel_1",
         "mesh": 2,
         "articulated": [],
         "skinned": []
      },
      {
         "name": "wheel_2"
      }
   ],
   "cameras": [],
   "skin": [{
      "inverseBindMatrices" : 4,
      "joints" : [ 1, 2 ] // 关节点node对象的索引
   }],
   "animations": [{
      "samplers" : [{
         "input" : 2,
         "interpolation" : "LINEAR",
         "output" : 3
      }, {
         "input":4,
         "interpolation":"LINEAR",
         "output":5
      }],
      "channels" : [{
         "sampler" : 0,
         "target" : {
            "node" : 0,
            "path" : "rotation"
         }
      },{
         "sampler":0,
         "target":{
            "node":0,
            "path":"weights"
         }
      }]
   }],
   "meshes": [
      {
         "name": "CAR_03_1_World ap_0",
         "primitives": [{
            "attributes": {
               "POSITION": 1,
               "NORMAL": 2,
               "TANGENT": 4,
               "TEXCOORD_0" : 3,

               "JOINTS_0" : 2,
               "WEIGHTS_0" : 3
            },
            "mode": 4,
            "indices":0,
            "material": 0,
         }],
         "weights":[
            0.5,
            0.5
         ]
      }
   ],
   "accessors": [
      {
         "bufferView": 0,
         "byteOffset": 0,
         "componentType": 5123,
         "count": 3,
         "type": "SCALAR",
         "max": [ 2 ],
         "min": [ 0 ]
      },
      {
         "bufferView": 1,
         "byteOffset": 0,
         "componentType": 5126,
         "count": 3,
         "type": "VEC3",
         "max": [ 1.0, 1.0, 1.0 ],
         "min": [ 0.0, 0.0, 0.0 ]
      }
   ],
   "buffers": [
      {
         "uri": "path-to.bin",
         "type": "arraybuffer",
         "byteLength": 1024
      }
   ],
   "bufferViews": [
      {
         "buffer": 0,
         "byteOffset": 0,
         "byteLength": 512,
         "target": 34963
      },
      {
         "buffer": 0,
         "byteOffset": 8,
         "byteLength": 36,
         "target": 34962
      }
   ],
   "materials": [
      {
         "name": "World_ap",
         "pbrMetallicRoughness": {
            "baseColorFactor": [ 1.000, 0.766, 0.336, 1.0 ],
            "metallicFactor": 0.5,
            "roughnessFactor": 0.1
         }
      },
      {
         "name": "World_ap.8",
         "doubleSided": true,
         "pbrMetallicRoughness": {
            "baseColorFactor": [1,1,1,1],
            "baseColorTexture": {
               "index" : 0,
               "texCoord": 2
            },
            "metallicFactor": 0.5,
            "roughnessFactor": 0.1
         }
      }
   ],
   "textures": [{
      "sampler": 0,
      "source": 0
   },
   {
      "sampler": 0,
      "source": 1
   }],
   "samplers": [{
      "magFilter": 9729,
      "minFilter": 9987,
      "wrapS": 33648,
      "wrapT": 33648
   },{
      "magFilter": 9729,
      "minFilter": 9987,
      "wrapS": 10497,
      "wrapT": 10497
   }],
   "images": [
      { "uri": "testTexture.png" }
   ]
}
```
> 二进制格式glb
+ MIME类型为model/gltf-binary
+ 二进制glTF为小端存储
+ 文件前12字节为Header，包含：magic、version、length
+ Header后为chunk，每个chunk的结构为：chunkLength、chunkType、chunkData








## gui control
```js
// setup the control gui
var controls = new function () {
   this.scanlinesCount = 256;
   this.grayscale = false;
   this.scanlinesIntensity = 0.3;
   this.noiseIntensity = 0.8;
   this.updateEffectFilm = function () {
      effectFilm.uniforms.grayscale.value = controls.grayscale;
      effectFilm.uniforms.nIntensity.value = controls.noiseIntensity;
      effectFilm.uniforms.sIntensity.value = controls.scanlinesIntensity;
      effectFilm.uniforms.sCount.value = controls.scanlinesCount;
   };
};
var gui = new dat.GUI();
gui.add(controls, "scanlinesIntensity", 0, 1).onChange(controls.updateEffectFilm);
gui.add(controls, "noiseIntensity", 0, 3).onChange(controls.updateEffectFilm);
gui.add(controls, "grayscale").onChange(controls.updateEffectFilm);
gui.add(controls, "scanlinesCount", 0, 2048).step(1).onChange(controls.updateEffectFilm);
```

## editor

## 调试、优化

优化流程：
1. 加载性能优化
模型压缩 gzip gltf draco
贴图压缩
流式加载
使用缓存 cdn 文件服务，浏览器文件缓存、indexeddb 前端缓存等
2. 渲染帧率优化
减少 DrawCall 
视椎体剔除，背面剔除、遮挡剔除
合并几何体，多实例几何体
多细节层次 Level of Details
3. 内存管理优化
及时正确销毁对象，释放JS内存
4. 交互操作优化
射线拾取
gpu 拾取
八叉树优化

优化方法：
1. 压缩/解压缩
2. 共用几何体和材质
3. 合并几何体
4. 保持纹理文件较低的分辨率
5. 使用normalMaps
6. 正确使用材质
MeshBasicMaterial< MeshLambertMaterial< MeshPhongMaterial< MeshStandardMaterial< MeshPhysicalMaterial
7. 光源
8. 按需渲染
9. 正确删除数据

```js
function clearScene() {
	// 从scene中删除模型并释放内存
	if(myObjects.length > 0){		
		for(var i = 0; i< myObjects.length; i++){
			var currObj = myObjects[i];
			
			// 判断类型
			if(currObj instanceof THREE.Scene){
				var children = currObj.children;
				for(var i = 0; i< children.length; i++){
					deleteGroup(children[i]);
				}	
			}else{				
				deleteGroup(currObj);
			}
			scene.remove(currObj);
		}
	}
}

// 删除group，释放内存
function deleteGroup(group) {
	//console.log(group);
    if (!group) return;
    // 删除掉所有的模型组内的mesh
    group.traverse(function (item) {
        if (item instanceof THREE.Mesh) {
            item.geometry.dispose(); // 删除几何体
            item.material.dispose(); // 删除材质
        }
    });
}
```


## resource
> lib:
GIS
AR.js
A-Frame
React VR

> 网站:
sketchfab