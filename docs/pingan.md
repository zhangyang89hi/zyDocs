

### 渠道

新一贷  KB0023  KB0024

channelTypeNo = '53' // 线上化
channelTypeNo = '67' // 半线上化

03-外包用户

01-中介用户
02-中介内测
002-中介管理人员

04-证券业务人员
004-证券管理人员
48-
ZQ-

05-信用卡
005-信用卡管理人员
37-
XYK-信用卡

07-坐销
007-坐销管理人员

SZS-银银合作申请
010-众包用户

```js
      compressImg(base64Image, zoom) {
        return new Promise((resolve, reject) => {
          if (!base64Image) {
            reject() 
          }
          var image = new Image();
          image.src = 'data:image/jpg;base64,' + base64Image;
          image.onload = function() {
            var w = image.width / zoom;
            var h = image.height / zoom;
            // var cw = document.createElement('canvas');
            var crw = document.createElement('canvas');
            crw.width = w;
            crw.height = h;
            var ctxr = crw.getContext('2d');
            //
            ctxr.clearRect(0, 0, crw.width, crw.height);
            ctxr.drawImage(image, 0, 0, crw.width, crw.height);
            //
            var imageType = 'image/jpeg';
            resolve(crw.toDataURL(imageType).slice(23));
            // callback && typeof callback === 'function' && callback(crw.toDataURL(imageType))
          }
        })
      },
```

---

### 设置 aladdin.header

```js
    aladdin.on('onBackPress', function(message) {
        if (message) {
            // 物理返回键自定义回调事件
            aladdin.navigator.back()
            bow.navigator.back()
            self.back()
        }
    })

    aladdin.on('pageDidBack', function (message) {
        aladdin.aike_pad.trackPageStart('消金 -- 场景贷 -- 贷款申请表')            
        if (AladdinUtils.LoginJudgeUtil()) {
            return
        }
        self.initParam()
    })
    aladdin.aike_pad.trackPageStart('消金 -- 场景贷 -- 贷款申请表')            
    
```

```js
    AladdinUtils.Storage.set('headerConfig', {
        title: 'title',
        leftText: '返回',
        leftButtonVisible: true,    
        leftBtnClick: function() {
            aladdin.aike_pad.trackPageEnd('消金 -- 场景贷 -- 贷款申请表')
            bow.talkingData.trackEvent({
                eventId: '消金 -- 场景贷 -- 贷款申请表 -- 返回',
                eventLabel: '消金 -- 场景贷 -- 贷款申请表 --返回'
            })
            aladdin.navigator.back()
            bow.navigator.back()
            self.back()
        }，
        rightText: '保存',
        rightButtonVisible: true
        rightBtnClick: function() {
            aladdin.aike_pad.trackPageEnd('消金 -- 场景贷 -- 贷款申请表')
            bow.talkingData.trackEvent({
                eventId: '消金 -- 场景贷 -- 贷款申请表 -- 返回',
                eventLabel: '消金 -- 场景贷 -- 贷款申请表 --返回'
            })
        }
    })

    aladdin.env.isHybrid && aladdin.header.config({
        title: title,
        leftButtonText: '',
        leftButtonVisible: true,
        leftButtonIcon: '',
        leftButtonCallback: function() {
            aladdin.aike_pad.trackPageEnd('消金 -- 场景贷 -- 贷款申请表')
            aladdin.navigator.back()
            bow.navigator.back()
            self.back() 
        },
        rightButtonText: '编辑',
        rightButtonVisible: true,
        rightButtonIcon: '',
        rightButtonCallback: function() {
            aladdin.aike_pad.trackPageEnd('消金 -- 场景贷 -- 贷款申请表')            
        }
    }, function(err) {
        if (err) {
        aladdin.toast.show({
            message: 'exception'
        })
        }
    })

```
### 图片 二维码
> 图片
```
    data:image/png;base64,
    <img :src="'data:image/png;base64,'+imageBase64" alt="" style="border: 1px solid #d9d9d9;">
```

> 水印
```
      AladdinUtils.runBKAWaterMark()
```

> 二维码
```
    // 二维码绘图
    creatUrl(shortUrl) {
        const self = this
        self.imgShow = true
        // 获取屏幕的宽度
        var clientWidth = document.documentElement.clientWidth
        // 根据设计图中的canvas画布的占比进行设置
        var canvasWidth = Math.floor(clientWidth * 200 / 400)
        $('canvas').remove()
        $('.tdCodePhoto').qrcode({
            width: canvasWidth,
            height: canvasWidth,
            text: shortUrl
        })
        if (self.tabQD) {
            self.managerShow = true
        } else {
            self.managerShow = false
            self.selectedManagerName = ''
            self.selectedManagerUm = ''
        }
    }

```
###

### 埋点 加载
> 埋点
```
    aladdin.aike_pad.trackPageStart('消金 -- 场景贷 -- 场景贷客户口袋申请')    
    aladdin.aike_pad.trackPageEnd('消金 -- 场景贷 -- 场景贷客户口袋申请')    
    
    bow.talkingData.trackEvent({
        eventId: '消金 -- 新一贷无纸化 -- 选择方案 -- 选择授权方式',
        eventLabel: '消金 -- 新一贷无纸化 -- 选择方案 -- 选择授权方式'
    })
    
```

> 加载
```
    bow.loading.start()
    bow.loading.stop()


    import scroller from 'components/scroller'
    
    <scroller ref="scroller" lock-x use-pullup use-pulldown height="200px" 
    @pulldown:loading="refresh" @pullup:loading="loadMore">
        <div>
            <p v-for="i in 30">第{{i}}行</p>
        </div>
    </scroller>

    loadNumbers: function(val) {
        console.log('loadNumbers changed !')
        this.$refs.loadScroller.pullupEnable(this.$refs.loadScroller.uuid)        
        this.$nextTick(() => {
          this.$refs.loadScroller.reset({ top: 0 })
        })
    }

```

###  设置 aladdin弹框  alert confirm 

```
    aladdin.toast.show({
        message: 'exception'
    })

    AladdinUtils.showToast({
    message: 'msg',
    duration: 1500
    }, function() {

    })
```

```
    AladdinUtils.confirmDialog({
        message: '是否确定删除',
        rightButtonText: '删除',
        rightButtonCallback: function() {
        self.deletePhoto(fileId, function() {
            deleteCallback()
            aladdin.env.isHybrid && aladdin.header.config({
            title: '上传材料(选填)',
            leftButtonIcon: '/hloan/common/imgs/icon-back-blue.png',
            leftButtonVisible: true,
            leftButtonText: '',
            leftButtonCallback: function() {
                aladdin.navigator.back()
            },
            rightButtonVisible: false
            })
        })
        },
        leftButtonCallback: function() {
        self.previewPhoto(photo, title, fileId, deleteCallback)
        }
    })

    AladdinUtils.alertDialog({
        title: '温馨提示',
        message: resp.responseMsg || '系统异常，请稍后再试',
        buttonCallback: function() {
            bow.navigator.back()
        }
    })
```