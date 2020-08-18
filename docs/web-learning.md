###


### MIME (Multipurpose Internet Mail Extensions) 

> 标准化的方式来表示文档的性质和格式。 它在IETF RFC 6838中进行了定义和标准化。浏览器通常使用MIME类型（而不是文件扩展名）来确定如何处理文档；因此服务器设置正确以将正确的MIME类型附加到响应对象的头部是非常重要的。

type/subtype

| 类型 | 描述 | 典型示例 |
| ---- | --- | ------- |
| text | 表明文件是普通文本，理论上是人类可读 | text/plain, text/html, text/css, text/javascript |
| image | 表明是某种图像。不包括视频，但是动态图（比如动态gif）也使用image类型|image/gif, image/png, image/jpeg, image/bmp, image/webp, image/x-icon, image/vnd.microsoft.icon |
| audio | 表明是某种音频文件|audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav |
| video | 表明是某种视频文件|video/webm, video/ogg |
| application | 表明是某种二进制数据|application/octet-stream, application/pkcs12, application/vnd.mspowerpoint, application/xhtml+xml, application/xml,  application/pdf |


### Data URLs
> data:[<mediatype>][;base64],<data>    即前缀为 data: 协议的的URL，其允许内容创建者向文档中嵌入小文件

* data:,Hello%2C%20World!       简单的 text/plain 类型数据
* data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D     上一条示例的 base64 编码版本
* data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E     一个HTML文档源代码 Hello, World
* data:text/html,<script>alert('hi');</script>    一个会执行 JavaScript alert 的 HTML 文档。注意 script 标签必须封闭。



### ArrayBuffer，Type Array，DataView

* ArrayBuffer
  >表示二进制数据的原始缓冲区，该缓冲区用于存储各种类型化数组的数据。 无法直接读取或写入 ArrayBuffer，但可根据需要将其传递到类型化数组或 DataView 对象 来解释原始缓冲区
```javascript
var buf = new ArrayBuffer(32)
new Int8Array()
new Uint8Array()
new Int16Array()
new Uint16Array()
new Int32Array()
new Uint32Array()
new Float32Array()
new Float64Array()

var buf = new ArrayBuffer(32)
var dv = new DataView(buffer);
```

* Type Array
>



### XMLHttpRequest  XHR2

responseType
请求            响应
text            DOMString
arraybuffer     ArrayBuffer
blob            Blob
document        Document



### passport

```js
const passport = require('koa-passport')
const LocalStrategy = require('passport-local').Strategy
const GitHubStrategy = require('passport-github').Strategy

passport.use('local', localStrategy_config)
passport.use(githubStrategy_config)

var localStrategy_config = new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password',
    passReqToCallback: true
}, async function(ctx, name, password, done) {
    if (true) {
        return done(null, {id: '123', name, password, responseCode: '000000'})
    }
    return done(null, false, {message: '用户名密码错误'})
})
var githubStrategy_config = new GitHubStrategy({
    clientID: '27a7ffea4b4f0e3293a7',
    clientSecret: 'a5e85b4ea701b6f956b2dd6cb5257347677ae249',
    callbackURL: 'http://localhost:3000/auth/github/callback'
}, function(accessToken, refreshToken, profile, cb) {
    cb(null, profile)
})

passport.serializeUser(function(user, done) {
    console.log('In serializeUser')
    return done(null, user)
})
passport.deserializeUser(function(user, done) {
    console.log('In deserializeUser')
    return done(null, user)
})
```

#### OAuth2.0
> OAuth 引入了一个授权层,核心就是向第三方应用颁发令牌

+ 授权码模式（authorization-code）
+ 隐藏式（implicit）
+ 密码式（password）
+ 客户端凭证（client credentials）

#### jwt
> JSON Web Token 跨域认证解决方案
> Header.Payload.Signature  （头部）.（负载）.（签名）
```js
{
    "alg": "HS256", // 签名的算法（algorithm），默认是 HMAC SHA256
    "typ": "JWT" // 令牌（token）的类型（type）
},
{
    iss: '', // (issuer)：签发人
    exp: '', // (expiration time)：过期时间
    sub: '', // (subject)：主题
    aud: '', // (audience)：受众
    nbf: '', // (Not Before)：生效时间
    iat: '', // (Issued At)：签发时间
    jti: ''  // (JWT ID)：编号
}
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
```
JWT放在 Cookie，也可以储存在localStorage
Authorization: Bearer <token>
跨域的时候，JWT 可以放在 POST 请求的数据体里面

### 文件上传 下载 压缩

> ajaxFileUpload

1. 通过接口下载 
2. href = DataURLs 或者 BlogURLs
3. a.download = 
4. form提交直接下载 
5. HTML5 a.download结合blob对象进行下载 



### 复制 粘贴

```Javascript
document.execCommand('copy');
```

1. 
```js
    function copy1()
    {
        var Url2 = document.getElementById("biao1");
        Url2.select();
        document.execCommand("Copy");
    }
    function copy2() {
        var clipBoardContent=this.location.href;
        window.clipboardData.setData("Text",clipBoardContent);
    }

    function copy3(input){
        input.select();
        o_this = input.createTextRange();
        o_this.execCommand("Copy")
    }

    function copy4(target){
        target.value="[IMG]"+myimg.value+"[/ img]";
        target.select();
        o_this = target.createTextRange();
        o_this.execCommand("Copy")
    }

    function copy5(obj)
    {
        var rng = document.body.createTextRange();
        rng.moveToElementText(obj);
        rng.scrollIntoView();
        rng.select();
        rng.execCommand("Copy");
        rng.collapse(false);
        alert("复制成功!");
    }

    function copyToClipboard(txt) {
        if (window.clipboardData) {
            window.clipboardData.clearData();
            clipboardData.setData("Text", txt);
            alert("复制成功！");
        }
    }

    clipboard
```