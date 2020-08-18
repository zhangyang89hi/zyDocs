


### 

```javascript
<canvas id="tutorial" width="300" height="150">
你的浏览器不支持canvas,请升级你的浏览器
</canvas>


```

* 

```javascript

ctx.fillStyle = color
ctx.strokeStyle = color
ctx.globalAlpha = transparencyValue // 0 ~ 1.0 (1.0)
ctx.globalCompositeOperation = type // source-over(default), source-in, source-out, source-atop, destination-over, destination-in, destination-out, destination-atop, lighter, darken, lighten, xor, copy

ctx.lineWidth = value // (1.0)
ctx.lineCap = type // butt, round, square
ctx.lineJoin = type // round, bevel, miter
ctx.lineDashOffset = value
ctx.setLineDash([20, 5]);  // [实线长度, 间隙长度]
​ctx.getLineDash()

fillRect(x, y, width, height)
strokeRect(x, y, width, height)
clearRect(x, y, widh, height)


beginPath()
moveTo(x, y)
closePath()
stroke()
fill()

arc(x, y, r, startAngle, endAngle, anticlockwise)
arcTo(x1, y1, x2, y2, radius)



ctx.font = value // (10px sans-serif)
ctx.textAlign = value // start, end, left, right, center (start)
ctx.textBaseline = value // top, hanging, middle, alphabetic, ideographic, bottom (alphabetic)
ctx.direction = value // ltr, rtl, inherit (inherit)
fillText(text, x, y [, maxWidth])
strokeText(text, x, y [, maxWidth])

ctx.drawImage(img, x, y)
ctx.drawImage(img, x, y, width, height)
ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

ctx.translate(x, y)
ctx.rotate(angle)
ctx.scale(x, y)
ctx.transform(a, b, c, d, e, f)

ctx.clip()

ctx.save()
ctx.restore()

```