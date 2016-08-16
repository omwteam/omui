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
    <p class="om-txt-justify-line">一行两端对齐</p>
	<p class="om-txt-justify">段落两端对齐</p>

文本颜色

	<p class="om-color-default">框架默认颜色</p>
    <p class="om-color-red">红色</p>
    <p class="om-color-blue">链接蓝色</p>
    <p class="om-color-gray">灰色</p>

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

float布局

	<ul class="om-layout-ul-3">
        <li>首页</li>
        <li>购物车</li>
        <li>>用户</li>
    </ul>
	<ul class="om-layout-ul-4">
        <li><img src="../img/grid/x_04.jpg" alt=""/></li>
        <li><img src="../img/grid/x_06.jpg" alt=""/></li>
        <li><img src="../img/grid/x_09.jpg" alt=""/></li>
        <li><img src="../img/grid/x_10.jpg" alt=""/></li>
    </ul>

table-cell布局

	<ul class="om-layout-table">
        <li>首页</li>
        <li>购物车</li>
        <li>>用户</li>
    </ul>
	<ul class="om-layout-table">
        <li><img src="../img/grid/x_04.jpg" alt=""/></li>
        <li><img src="../img/grid/x_06.jpg" alt=""/></li>
        <li><img src="../img/grid/x_09.jpg" alt=""/></li>
        <li><img src="../img/grid/x_10.jpg" alt=""/></li>
    </ul>

### 5.文字截断 ###

单行截断

	<p class="om-ellipsis">这里是一行文字，长度太长的时候就会变成省略号</p>	

多行截断

	<p class="om-ellipsis-two">这里是多行文字，长度太长超过第二行的时候就变成省略号。</p>

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

灰底头部

	<header class="om-header">
        <h1 class="om-header-title">omui框架</h1>
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

纯文字

	<footer class="om-footer">
        <ul class="om-layout-table">
            <li class="om-footer-on"><p>首页</p></li>
            <li><p>分类</p></li>
            <li><p>购物车</p></li>
            <li><p>用户</p></li>
        </ul>
    </footer>

纯图标

	<footer class="om-footer">
        <ul class="om-layout-table">
            <li class="om-footer-on"><i class="iconfont icon-home"></i></li>
            <li><i class="iconfont icon-cate"></i></li>
            <li><i class="iconfont icon-cart"></i></li>
            <li><i class="iconfont icon-user"></i></li>
        </ul>
    </footer>

文字+图标

	<footer class="om-footer">
        <ul class="om-layout-table">
            <li class="om-footer-on">
                <i class="iconfont icon-home"></i>
                <p>首页</p>
            </li>
            <li>
                <i class="iconfont icon-cate"></i>
                <p>分类</p>
            </li>
            <li>
                <i class="iconfont icon-cart"></i>
                <p>购物车</p>
            </li>
            <li>
                <i class="iconfont icon-user"></i>
                <p>用户</p>
            </li>
        </ul>
    </footer>

默认颜色

	<footer class="om-footer om-footer-default">
        <ul class="om-layout-table">
            <li class="om-footer-on">
                <i class="iconfont icon-home"></i>
                <p>首页</p>
            </li>
            <li>
                <i class="iconfont icon-cate"></i>
                <p>分类</p>
            </li>
            <li>
                <i class="iconfont icon-cart"></i>
                <p>购物车</p>
            </li>
            <li>
                <i class="iconfont icon-user"></i>
                <p>用户</p>
            </li>
        </ul>
    </footer>

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

按钮组

	<div class="om-btn-group">
        <button class="om-btn">左边</button>
        <button class="om-btn">中间</button>
        <button class="om-btn">右边</button>
    </div>
    <div class="om-btn-group om-btn-default">
        <button class="om-btn">左边</button>
        <button class="om-btn">右边</button>
    </div>

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

下拉框

	<div class="om-select">
        <select>
            <option value="">--选择姓名--</option>
            <option value="刘德华">刘德华</option>
            <option value="周杰伦">周杰伦</option>
            <option value="林俊杰">林俊杰</option>
        </select>
    </div>

带label下拉框

	<div class="om-select om-select-label">
        <label for="#">姓名</label>
        <select>
            <option value="刘德华">刘德华</option>
            <option value="周杰伦">周杰伦</option>
            <option value="林俊杰">林俊杰</option>
        </select>
    </div>

下拉框组

	<div class="om-select-group om-select-label">
        <label for="#">日期</label>
        <div class="om-select">
            <select>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
            </select>
        </div>
        <div class="om-select">
            <select>
                <option value="05">05</option>
                <option value="06">06</option>
            </select>
        </div>
        <div class="om-select">
            <select>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
        </div>
    </div>

选择框

	<div class="om-checkbox">
        <input type="checkbox" id="checkbox1"/>
        <span class="om-checkbox-icon"><i class="iconfont icon-checkmark-full"></i></span>
        <label for="checkbox1">我同意服务条款</label>
    </div>

单选框

	<div class="om-radio">
        <input type="radio" name="radio" id="radio1" checked/>
        <span class="om-radio-icon"><i></i></span>
        <label for="radio1">我选择第一个</label>
    </div>
    <div class="om-radio">
        <input type="radio" name="radio" id="radio2"/>
        <span class="om-radio-icon"><i></i></span>
        <label for="radio2">我选择第二个</label>
    </div>

### 7.图片 ###

响应式图片 max-width:100%

	<img src="img.jpg" class="om-img"/>

圆角图片

	<img src="img2.jpg" class="om-img-radius"/>
    <img src="img2.jpg" class="om-img-circle"/>

### 8.列表 ###

普通列表

	<ul class="om-list-box">
        <li class="om-list">列表一</li>
        <li class="om-list">列表一</li>
    </ul>

跳转列表

	<ul class="om-list-box om-list-link">
        <li class="om-list">列表二</li>
        <li class="om-list">列表二</li>
    </ul>

双行列表

	<ul class="om-list-box om-list-link">
        <li class="om-list">
            <div class="om-list-title">这里是文章列表的标题，超出会显示省略号</div>
            <div class="om-list-disc">这里是辅助文字描述，超出会显示省略号</div>
        </li>
    </ul>

文章列表

	<ul class="om-list-box om-list-article">
        <li class="om-list">
            <img src="../img/img/img2.jpg" class="om-list-img"/>
            <div class="om-list-title">这里是文章列表的标题，超出会显示省略号</div>
            <div class="om-list-disc">这里是辅助文字描述，超出会显示省略号</div>
        </li>
    </ul>

文章列表带圆角图片

	<ul class="om-list-box om-list-article">
        <li class="om-list">
            <img src="../img/img/img2.jpg" class="om-list-img om-img-circle"/>
            <div class="om-list-title">这里是文章列表的标题，超出会显示省略号</div>
            <div class="om-list-disc">这里是辅助文字描述，超出会显示省略号</div>
        </li>
    </ul>

文章列表带大图

	<ul class="om-list-box om-list-article">
        <li class="om-list om-list-big">
            <img src="../img/img/img.jpg" class="om-list-img"/>
            <div class="om-list-title">这里是文章列表的标题，超出会显示省略号</div>
            <div class="om-list-disc">这里是辅助文字描述，超出会显示省略号</div>
        </li>
    </ul>

### 9.表格 ###

	<table class="om-table">
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
        </tr>
        <tr>
            <td>张三</td>
            <td>22</td>
            <td>男</td>
        </tr>
    </table>

### 10.搜索框 ###

	<div class="om-search om-search-default">
        <span class="om-search-icon"><i class="iconfont icon-search"></i></span>
        <input type="text" class="om-search-input" placeholder="搜索关键词"/>
        <span class="om-search-close"><i class="iconfont icon-close-full"></i></span>
        <a href="javascript:;" class="om-search-btn">搜索</a>
    </div>

### 11.加载中 ###

页面加载

	<div class="om-load-mark">
        <div class="om-loading">
            <div class="om-loading-line om-loading-line-0"></div>
            <div class="om-loading-line om-loading-line-1"></div>
            <div class="om-loading-line om-loading-line-2"></div>
            <div class="om-loading-line om-loading-line-3"></div>
            <div class="om-loading-line om-loading-line-4"></div>
            <div class="om-loading-line om-loading-line-5"></div>
            <div class="om-loading-line om-loading-line-6"></div>
            <div class="om-loading-line om-loading-line-7"></div>
            <div class="om-loading-line om-loading-line-8"></div>
            <div class="om-loading-line om-loading-line-9"></div>
            <div class="om-loading-line om-loading-line-10"></div>
            <div class="om-loading-line om-loading-line-11"></div>
        </div>
        <div class="om-load-content">正在加载</div>
    </div>

列表加载

	<div class="om-list-load">
        <div class="om-list-loading"></div>
        正在加载...
    </div>

## 三、JS组件 ##

### 1.弹窗 ###

	/*html*/
	<div class="om-popup" id="sure">
        <div class="om-popup-title">温馨提示</div>
        <div class="om-popup-cont">确定要执行此操作吗？</div>
        <div class="om-popup-btn-div om-popup-btn-two">
            <a href="javascript:;" class="om-popup-btn-cancel">取 消</a>
            <a href="javascript:;" class="om-popup-btn-sure">确 定</a>
        </div>
    </div>
    <div class="om-popup" id="tips">
        <div class="om-popup-title">温馨提示</div>
        <div class="om-popup-cont">已经执行完毕</div>
        <div class="om-popup-btn-div">
            <a href="javascript:;" class="om-popup-btn-sure">确 定</a>
        </div>
    </div>

	/*js*/
	<script>
	    function popup(elem){
	        var _popup_id = elem.getAttribute('data-id'),
	            _mask = document.querySelector('.om-mask'),
	            _popup = document.getElementById(_popup_id),
	            _btn_cancel = _popup.querySelector('.om-popup-btn-cancel'),
	            _btn_sure = _popup.querySelector('.om-popup-btn-sure');
	        _mask.style.display = "block";
	        _popup.style.display = "block";
	        if(_btn_cancel){
	            _btn_cancel.onclick = function(){
	                _mask.style.display = "none";
	                _popup.style.display = "none";
	                alert("你选择了取消！")
	            };
	        }
	        _btn_sure.onclick = function(){
	            _mask.style.display = "none";
	            _popup.style.display = "none";
	            alert("你选择了确定！")
	        };
	    }
	</script>

### 2.菜单actionsheet ###

	/*html*/
	<div class="om-actionsheet">
        <ul class="om-actionsheet-cnt">
            <li class="om-actionsheet-header">分享到其他平台</li>
            <li>朋友圈</li>
            <li>qq好友</li>
            <li>新浪微博</li>
        </ul>
        <a href="#" class="om-actionsheet-cancel">取 消</a>
    </div>
	
	/*js*/
	<script>
	    function actionsheet(){
	        var _sheet = document.querySelector('.om-actionsheet'),
	            _mask = document.querySelector('.om-mask'),
	            _cancel = document.querySelector('.om-actionsheet-cancel');
	        _mask.style.display = "block";
	        _sheet.classList.add('om-actionsheet-active');
	        _cancel.onclick = function(){
	            _sheet.classList.remove('om-actionsheet-active');
	            setTimeout(function(){
	                _mask.style.display = "none";
	            },200)
	        }
	    }
	</script>

### 3.浮层提示框 ###
	
	/*html*/
	<div class="om-poptips-top">这里是顶部提示</div>
    <div class="om-poptips-btm">这里是底部提示</div>

	/*js*/
	<script>
	    function poptipsTop(tips){
	        var _poptop = document.querySelector('.om-poptips-top');
	        poptipsCnt(_poptop,'om-poptips-top',tips);
	    }
	    function poptipsBtm(tips){
	        var _popbtm = document.querySelector('.om-poptips-btm');
	        poptipsCnt(_popbtm,'om-poptips-btm',tips);
	    }
	    function poptipsCnt(elem,pop,tips){
	        if(!elem){
	            elem = document.createElement('div');
	            elem.class = pop;
	            body.appendChild(elem);
	        }
	        elem.innerHTML = tips;
	        elem.classList.add('om-poptips-active');
	        setTimeout(function(){
	            elem.classList.remove('om-poptips-active');
	        },2000);
	    }
	</script>