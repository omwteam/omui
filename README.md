# omui
omui，一个专注移动web开发的框架。


## 一、基础样式 ##

### 1.文本 ###

文本大小

	<h1>h1,18px</h1>
    <h2>h2,17px</h2>
    <h3>h3,16px</h3>
    <h4>h4,15px</h4>
    <h5>h5,14px</h5>
    <h6>h6,12px</h6>

文本对齐

	<p class="om-txt-left">左对齐</p>
    <p class="om-txt-right">右对齐</p>
    <p class="om-txt-center">居中对齐</p>
    <p class="om-txt-justify">两端对齐</p>

### 2.图标 ###

	//关闭
	<i class="iconfont icon-close"></i>
    <i class="iconfont icon-close-full"></i>
	//心
    <i class="iconfont icon-heart"></i>
    <i class="iconfont icon-heart-full"></i>
	//位置
    <i class="iconfont icon-position"></i>
    <i class="iconfont icon-position-full"></i>
	//星形
    <i class="iconfont icon-star"></i>
    <i class="iconfont icon-star-full"></i>
	//主页
    <i class="iconfont icon-home"></i>
    <i class="iconfont icon-home-full"></i>
	//购物车
    <i class="iconfont icon-cart"></i>
    <i class="iconfont icon-cart-full"></i>
	//用户
    <i class="iconfont icon-user"></i>
    <i class="iconfont icon-user-full"></i>
	//更多
    <i class="iconfont icon-more"></i>
    <i class="iconfont icon-more-vertical"></i>
	//分享
    <i class="iconfont icon-share"></i>
    <i class="iconfont icon-share-full"></i>
	//评论
    <i class="iconfont icon-comment"></i>
    <i class="iconfont icon-comments"></i>
	//左右
    <i class="iconfont icon-left"></i>
    <i class="iconfont icon-right"></i>
	//火
    <i class="iconfont icon-hot"></i>
	//邮件
    <i class="iconfont icon-email"></i>
	//眼睛
    <i class="iconfont icon-eye"></i>
    <i class="iconfont icon-eye-full"></i>
    <i class="iconfont icon-eye-hidden"></i>
	//摇一摇
    <i class="iconfont icon-swing"></i>
	//关机
    <i class="iconfont icon-shut-down"></i>
	//电话本
    <i class="iconfont icon-phone-book"></i>
	//删除
    <i class="iconfont icon-delete"></i>
	//编辑
    <i class="iconfont icon-edit"></i>
	//设置
    <i class="iconfont icon-setting"></i>
	//标签
    <i class="iconfont icon-tags"></i>
	//更换
    <i class="iconfont icon-change"></i>
	//密码
    <i class="iconfont icon-password"></i>
	//关闭-大
    <i class="iconfont icon-close-big"></i>
	//时间
    <i class="iconfont icon-time"></i>
	//扫描
    <i class="iconfont icon-scan"></i>
	//表单
    <i class="iconfont icon-form"></i>
	//提醒
    <i class="iconfont icon-horn"></i>
	//搜索
    <i class="iconfont icon-search"></i>
	//图片
    <i class="iconfont icon-picture-copy"></i>
	//刷新
    <i class="iconfont icon-refurbish"></i>

### 3.网格 ###

默认

	<div class="om-grid-row">
        <div class="om-grid-col-50">1</div>
        <div class="om-grid-col-50">2</div>
    </div>

网格内容居中

	<div class="om-grid-row om-grid-center">
        <div class="om-grid-col-25">1</div>
        <div class="om-grid-col-25">2</div>
        <div class="om-grid-col-25">3</div>
        <div class="om-grid-col-25">4</div>
    </div>

其他网格类名

	.om-grid-col-10
	.om-grid-col-20
	.om-grid-col-25
	.om-grid-col-33
	.om-grid-col-50
	.om-grid-col-66
	.om-grid-col-75
	.om-grid-col-80
	.om-grid-col-90

等宽高网格

	<div class="om-grid-row om-grid-center">
        <div class="om-grid-col-50 om-grid-equal-50">50</div>
        <div class="om-grid-col-25 om-grid-equal-25">25</div>
        <div class="om-grid-col-25 om-grid-equal-25">25</div>
        <div class="om-grid-col-25 om-grid-equal-25">25</div>
        <div class="om-grid-col-25 om-grid-equal-25">25</div>
    </div>

其他等宽高网格类名

	.om-grid-equal-25
	.om-grid-equal-33
	.om-grid-equal-50
	.om-grid-equal-66

### 4.布局 ###

### 5.文字截断 ###

## 二、UI组件 ##

### 1.头部导航 ###

默认头部

	<header class="om-header om-header-default">
        <a href="" class="om-header-left">
            <i class="iconfont icon-left"></i>
        </a>
        <h1 class="om-header-title">omui框架</h1>
        <a href="" class="om-header-right">
            <i class="iconfont icon-home"></i>
        </a>
    </header>

图标+文字

	<header class="om-header om-header-default">
        <a href="javascript:location.back(-1)" class="om-header-left">
            <i class="iconfont icon-left"></i><span class="om-header-nav-btn">返回</span>
        </a>
        <h1 class="om-header-title">omui框架</h1>
        <a href="" class="om-header-right">
            <i class="iconfont icon-home"></i><span class="om-header-nav-btn">首页</span>
        </a>
    </header>

头部固定

	<header class="om-header om-header-default om-header-fixed">
        <a href="" class="om-header-left">
            <i class="iconfont icon-left"></i>
        </a>
        <h1 class="om-header-title">omui框架</h1>
        <a href="" class="om-header-right">
            <i class="iconfont icon-home"></i>
        </a>
    </header>

### 2.底部导航 ###

### 3.标签 ###

大标签

	<span class="om-tags">刘德华</span>
    <span class="om-tags">周杰伦</span>

小标签

	<span class="om-tags-s">打球</span>
    <span class="om-tags-s">唱歌</span>

### 4.红点 ###

小红点

	<span class="om-reddot-s">刘德华</span>

带数字红点

	<span class="om-reddot-num">10</span>
    
红点在前

	<span class="om-reddot-before">10</span>

### 5.按钮 ###

小按钮

	<button class="om-btn-s">确定</button>
    <button class="om-btn-s om-btn-default">确定</button>
    <button class="om-btn-s om-btn-gray">取消</button>

普通按钮

	<button class="om-btn">确定</button>
    <button class="om-btn om-btn-default">确定</button>
    <button class="om-btn om-btn-gray">取消</button>

大按钮

	<button class="om-btn-b">确 定</button>
    <button class="om-btn-b om-btn-default">确 定</button>
    <button class="om-btn-b om-btn-gray">取消</button>

### 6.表单 ###

带label输入框

	<div class="om-form om-form-label">
        <label for="#">手机号</label>
        <input type="text" class="om-form-input" value="13790461104"/>
    </div>

带关闭按钮输入框

	<div class="om-form">
        <input type="text" class="om-form-input" placeholder="请输入手机号"/>
        <i class="iconfont icon-close-full"></i>
    </div>

带获取验证码按钮

	<div class="om-form om-form-captcha">
        <input type="text" class="om-form-input" placeholder="请输入验证码"/>
        <i class="iconfont icon-close-full"></i>
        <button class="om-btn-captcha">获取验证码</button>
    </div>

带边框和默认图标

	<div class="om-form om-form-border">
        <i class="iconfont icon-user-full"></i>
        <input type="text" class="om-form-input" placeholder="请输入用户名"/>
    </div>
	<div class="om-form om-form-border">
        <i class="iconfont icon-password"></i>
        <input type="password" class="om-form-input" placeholder="请输入密码"/>
    </div>