# omui
omui，一个专注移动web开发的框架。


## 一、基础样式 ##

### 1.文本 ###

### 2.图标 ###

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