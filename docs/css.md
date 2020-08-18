



## 选择器


div p   后代选择器
div>p   子选择器
div+p   相邻兄弟选择器
div~p   后续兄弟选择器




#### pointer-events

1. 阻止用户的点击动作产生任何效果
2. 阻止缺省鼠标指针的显示
3. 阻止CSS里的hover和active状态的变化触发事件
4. 阻止JavaScript点击动作触发的事件


#### 垂直居中
1. flex
2. top: 50%;
    margin-top: -10px;
    transform: translateY(-50%);
3. 空元素 伪元素:before
4.  display: inline-block;
    vertical-align: middle;
5.  display: table-cell;
	vertical-align: middle;


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