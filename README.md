# omui
omui，一个专注移动web开发的框架。
##  ##

## 一、基础样式 ##

### 1.文本 ###

### 2.图标 ###

### 3.网格 ###

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