

### meta
> 
1. <!DOCTYPE html> <!-- 使用 HTML5 doctype，不区分大小写 --> 
2. < lang="zh-cmn-Hans zh-cmn-Hans-CN zh-cmn-Hant-TW zh-cmn-Hans-SG"> <!-- lang 属性写法 -->
3. <meta charset='utf-8'> <!-- 声明文档使用的字符编码 -->
4. <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /> <!-- 优先使用 IE 最新版本和 Chrome -->
5. <meta name="description" content="不超过150个字符" /> <!-- 页面描述 -->
6. <meta name="keywords" content=""/> <!-- 页面关键词 -->
7. <meta name="author" content="name, email@gmail.com" /> <!-- 网页作者 -->
8. <meta name="robots" content="index,follow" /> <!-- 搜索引擎抓取 -->
9. <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0" />
   
>
1. 

### width & height

window.innerHeight - 浏览器窗口的内部高度(包括滚动条)
window.innerWidth - 浏览器窗口的内部宽度(包括滚动条)
window.outerHeight
window.outerWidth

window.scroolX - window水平方向上已滚动的距离,一般用 window.pageXOffset代替
window.scroolY - window垂直方向上已滚动的距离,一般用 window.pageYOffset代替

window.screen.height
window.screen.width
window.screen.availWidth - 可用的屏幕宽度
window.screen.availHeight - 可用的屏幕高度
window.screenLeft   window.screenX
window.screenTop    window.screenY

document.documentElement.clientHeight
document.documentElement.clientWidth
document.body.clientHeight
document.body.clientWidth

element.clientHeight - 可视区高度，不包括border的高度,如果底部有滚动条也不包括滚动条的高度
element.clientWidth - 可视区宽度，不包括border的宽度,如果有滚动条也不包括滚动条的宽度
element.offsetHeight - 表示自身高度，包括border的值，如果底部有滚动条包括滚动条的高度
element.offsetWidth - 表示自身高度，包括border的值，如果有滚动条包括滚动条的宽度
element.scrollHeight - 返回元素的整体高度
element.scrollWidth - 返回元素的整体宽度

element.clientTop
element.clientLeft
element.offsetTop - 返回元素相对于父对象的垂直偏移位置。
element.offsetLeft - 返回元素相对于父对象的的水平偏移位置。
element.scrollTop - 返回元素上边缘与视图之间的距离。
element.scrollLeft - 返回元素左边缘与视图之间的距离。

element.getBoundingClientRect()
element.getClientRects()

(element.clientHeight + element.scrollTop)-  element.scrollHeight <= 0

###
```js
        

```

### 

```javascript
<form name="form1" action="">
    <input type="text" name="yourname" size="30" maxlength="20" readonly value="">
    <input type="password" name="yourpwd" size="20" maxlength="15" value="">
    <input type="file" name="yourfile" size="30">

    a:<input type="checkbox" name="checkit1" value="a" checked><br>
    b:<input type="checkbox" name="checkit2" value="b"><br>
    c:<input type="checkbox" name="checkit3" value="c"><br>

    a:<input type="radio" name="checkit" value="a" checked><br>
    b:<input type="radio" name="checkit" value="b"><br>
    c:<input type="radio" name="checkit" value="c"><br>
    <input type="hidden" name="yourhiddeninfo" value="cnbruce.com">
    <input type="button" name="yourhiddeninfo" value="Go" onclick="">
    <input type="submit" value="提交">
    <input type="reset" value="重置">
</form>

```