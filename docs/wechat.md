# 公众号

订阅号  有需要交互内容服务的企业，消息发布一个月只能群发4条消息

服务号  消息内容资讯的发布，订阅号每天都能群发一条消息

企业可以申请2个，一般来说，企业可以申请一个订阅号和一个服务号

申请步骤：

邮箱、管理员信息、申请主体资料、公众号名称、功能介绍等描述信息

1. 一个可收发邮件的邮箱
2. 一个可收发短信的手机号
3. 一个开通微信支付功能的个人微信
4. 个人身份证号
5. 一个未被注册的公众号名字

附：开通认证公众号还需准备以下材料
1. 三百
2. 营业执照/单位证明（公章）
3. 银行卡/对公账户
# 小程序

## 流程
小程序发布审核
1. 发布前需申请外网域名，并在微信web开发者工具里找到项目，设置好服务器的域名。
2. 开发完上传代码后，在微信公众平台—》登录小程序管理后台—》点击开发管理—》点击提交版本审核即可。
3. 审核通过后会有相应提示，接着把审核通过的小程序发布线上。若未审核通过可做相应修改继续提审。
4. 第一次提交小程序审核时，需先上线后端，一般第一次审核时间比较久（3d左右）。

小程序的限制
1. 页面层级跳转：不能超过10层。
2. 用户本地缓存：不能超过10MB。
3. 小程序代码包：不能超过3M，所以部分图片资源需上传CDN。
4. 小程序发布：需提交微信审核通过才可发版。
5. 提交审核前，外网域名需申请（除微信域名之外）。

基础库版本
1. 小程序的能力需要微信客户端来支撑，每一个基础库都只能在对应的客户端版本上运行，高版本的基础库对应的api不支持低版本，所以在使用这些新能力的时候需要做兼容。
2. 由于微信版本和基础库版本不是一一对应关系，且小程序api是基于各个基础库版本进行发布的，所以在测试过程中需要提前获悉当前基础库版本号。
3. 目前可在zeye后台查看基于转转用户使用的基础库、微信版本、手机型号覆盖率等数据。
4. 目前我们主要通过日志的方式自动获取到版本号，可通过两种途径拿到：1.体验版进入首页时通过console查到；2.通过我的功能页面拿到。
5. 微信官方基础库版本查看： https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/version.html

小程序版本管理
1. 小程序有开发版、体验版、线上版。
2. 三者具体区别如下：
权限层：前两者需申请开发者和体验者权限才可使用，后者则面向所有用户。
性能层：开发版和体验版自身带有vConsole性能面板（回归需关闭此功能），而线上版则没有。
代码层：开发人员可同时在多个开发版上开发互不影响；体验版当前只能有一份代码处于审核中，审核通过后可发布上线，也可直接重新提交审核，覆盖原审核版本；线上版本则为所有用户使用的代码版本，该版本代码在新版本代码发布后被覆盖更新。

## 开发

1. 环境
wx.getAccountInfoSync()
设置基础库版本  
```js
// 获取当前帐号信息
const accountInfo = wx.getAccountInfoSync();
// env类型
export const env = accountInfo.miniProgram.envVersion;
const baseApi = {
  // 开发版
  develop: "https://test.domain.cn",
  // 体验版
  trial: "https://test.domain.cn",
  // 正式版
  release: "https://admin.domain.cn"
};
```

利用 request header refer


2. 登录
wx.login() code

openid	微信用户的唯一标识
session_key	会话密钥
unionid	用户在微信开放平台的唯一标识符。本字段在满足一定条件的情况下才返回。

* SessionId

* Cookie
wx.setStorageSync("cookieKey", res.header["Set-Cookie"]);
'Cookie': wx.getStorageSync('cookieKey')

wx.request({
  url: 'test.php', 
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' ,
    'Cookie': wx.getStorageSync('cookieKey')
  },
  success (res) {
    console.log(res.data)
  }
})

x-www-form-urlencoded

Response Headers
Content-Type:application/json;charset=UTF-8
Date:Mon, 02 Apr 2018 16:02:42 GMT
Set-Cookie:JSESSIONID=781C7F500DFA24D663BA243A4D9044BC;path=/yht;HttpOnly

Request Headers
Accept:*/*
Accept-Encoding:gzip, deflate, br
Accept-Language:zh-CN,zh;q=0.8
Cache-Control:no-cache
Connection:keep-alive
Content-Length:564
content-type:application/json
Cookie:JSESSIONID=781C7F500DFA24D663BA243A4D9044BC;path=/yht;HttpOnly

# 公众平台

## JSSDK

配置服务器地址
把MP_verify_m7Qp93BAuIGDWRVO.txt放到服务器域名指向的根目录
请求后台的接口，获取参数
```js

// 页面中引入
<script src='https://res.wx.qq.com/open/js/jweixin-1.0.0.js'></script>

/**
 * @param {jssdk为从后台请求过来的各种信息,包括appId,timestamp,nonceStr,signature} jssdk 
 * 以上4个参数，需要后台在公众号相关平台进行配置，然后得出！前端页面必须放在服务号配置的域名下面才可以保证成功！
 * @param {为js对象格式,options里面包含自定义的title,desc,link,imgUrl} options 
 * 引入jweixin文件后,直接调用该函数，即可实现自定义分享功能
 */
function shareJs(jssdk, options) {
    wx.config({
        debug: false,//是否开启调试功能，这里关闭！
        appId: jssdk.appId,//appid
        timestamp: parseInt(jssdk.timestamp), //时间戳
        nonceStr: jssdk.nonceStr, //生成签名的随机字符串
        signature: jssdk.signature,//签名
        jsApiList: [
            "onMenuShareTimeline",
            "onMenuShareAppMessage"
        ]
    });
    var defaults = {
        title: "分享的标题",
        desc: "分享的描述",
        link: location.href, //分享页面地址,不能为空，这里可以传递参数！！！！！！！
        imgUrl: 'https://tup.iheima.com/sport.png', //分享是封面图片，不能为空
        success: function () { }, //分享成功触发
        cancel: function () { } //分享取消触发，需要时可以调用
    }
    // 合并对象，后面的替代前面的！
    options = Object.assign({}, defaults, options);
    wx.ready(function () {
        var thatopts = options;
        // 分享到朋友圈
        wx.onMenuShareTimeline({
            title: thatopts.title, // 分享标题
            desc: thatopts.desc, // 分享描述
            link: thatopts.link, // 分享链接
            imgUrl: thatopts.imgUrl, // 分享图标
            success: function () {
                // alert("成功");
            },
            cancel: function () {
                // alert("失败")
            }
        });
        // 分享给朋友
        wx.onMenuShareAppMessage({
            title: thatopts.title, // 分享标题
            desc: thatopts.desc, // 分享描述
            link: thatopts.link, // 分享链接
            imgUrl: thatopts.imgUrl, // 分享图标
            success: function () {
                // alert("成功");
            },
            cancel: function () {
                // alert("失败")
            }
        });
    });
```
# 开放平台

# 小游戏

