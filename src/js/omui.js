/**
 * Created by linxin on 2016/8/19.
 */
var omui = function(){
    this.ext = function(destination,source){
        Object.extend = function() {
            for (var property in source) {
                destination[property] = source[property];
            }
            return destination;
        };
        Object.extend();
    }
};
omui.prototype.poptips = function(tips,offset){
    var defaults = {
        elem: '',
        offset: (offset==='top')?offset:'bottom',
        tips: tips?tips:'提示',
        pop: ''
    };
    if(defaults.offset == 'bottom'){
        defaults.elem = document.querySelector('.om-poptips-btm');
        defaults.pop = 'om-poptips-btm';
    }else{
        defaults.elem = document.querySelector('.om-poptips-top');
        defaults.pop = 'om-poptips-top';
    }
    if(!defaults.elem){
        defaults.elem = document.createElement('div');
        defaults.elem.classList.add(defaults.pop);
        document.body.appendChild(defaults.elem);
    }
    defaults.elem.innerHTML = defaults.tips;
    defaults.elem.classList.add('om-poptips-active');
    setTimeout(function(){
        defaults.elem.classList.remove('om-poptips-active');
    },2000);
};

omui.prototype.tab = function(elem){
        elem = elem?elem:'.om-tab';
    var elems = document.querySelector(elem);
        elems = elems?elems:document.querySelector('.om-tab');
    var nav = elems.querySelectorAll('.om-tab-nav > li'),
        cnt = elems.querySelectorAll('.om-tab-cnt > li'),
        i = 0,
        len = nav.length;
    for(i = 0; i < len; i ++){
        nav[i].index = i;
        nav[i].onclick = function(){
            for(var j = 0; j < len; j ++){
                nav[j].classList.remove('om-tab-active');
                cnt[j].classList.remove('om-tab-active');
            }
            this.classList.add('om-tab-active');
            cnt[this.index].classList.add('om-tab-active');
        };
    }
};

omui.prototype.popupConfirm = function(option){
    var defaults = {
            elem: '.om-popup',
            sure: function(){console.log("执行确定")},
            cancel: function(){console.log("执行取消")},
            show: function(){
                _mask.style.display = "block";
                _popup.style.display = "block";
            },
            hide: function(){
                _mask.style.display = "none";
                _popup.style.display = "none";
            }
        };
    this.ext(defaults,option);
    var _mask = document.querySelector('.om-mask'),
        _popup = document.querySelector(defaults.elem),
        _btn_cancel = _popup.querySelector('.om-popup-btn-cancel'),
        _btn_sure = _popup.querySelector('.om-popup-btn-sure');
    defaults.show();
    _btn_cancel.onclick = function(){
        defaults.cancel();
        defaults.hide();
    };
    _btn_sure.onclick = function(){
        defaults.sure();
        defaults.hide();
    };
};

omui.prototype.popup = function(option){
    var defaults = {
        elem: '.om-popup',
        sure: function(){console.log("执行确定")},
        show: function(){
            _mask.style.display = "block";
            _popup.style.display = "block";
        },
        hide: function(){
            _mask.style.display = "none";
            _popup.style.display = "none";
        }
    };
    this.ext(defaults,option);
    var _mask = document.querySelector('.om-mask'),
        _popup = document.querySelector(defaults.elem),
        _btn_sure = _popup.querySelector('.om-popup-btn-sure');
    defaults.show();
    _btn_sure.onclick = function(){
        defaults.sure();
        defaults.hide();
    };
};

omui.prototype.actionsheet = function(){
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
};

omui.prototype.sidebar = function(option){
    var _offset = (option==='right')?option:'left',
        _sidebar = document.querySelector('.om-sidebar-'+_offset),
        _mask = document.querySelector('.om-mask');

    _sidebar.classList.add('om-sidebar-active');
    _mask.style.display = "block";
    _mask.onclick = function(){
        _sidebar.classList.remove('om-sidebar-active');
        setTimeout(function(){
            _mask.style.display = "none";
        },300)
    }
};
omui.prototype.slider = function(options){
    return new sliderFunc(options);
};
var sliderFunc = function(options) {
    this.wrap = document.querySelector(options.elem);
    this.wrapWidth = this.wrap.offsetWidth;
    this.wrapInner = this.wrap.getElementsByTagName('ul')[0];
    this.lists = this.wrap.getElementsByTagName('li');
    this.listLength = this.lists.length;
    var defaults = {
        loop: false, //无缝循环
        autoPlay: false, //自动轮播
        autoTime:5000, //自动轮播时间间隔
        speed: 300,//动画过渡时间
        pagination:true, //状态点
        title:false
    };
    this.ops = options || {};
    for (var i in defaults) {
        if (typeof options[i] === 'undefined') {
            options[i] = defaults[i];
        } else if (typeof options[i] === 'object') {
            for (var deepDef in defaults[i]) {
                if (typeof options[i][j] === 'undefined') {
                    options[i][j] = defaults[i][j];
                }
            }
        }
    }
    this.init();
    this.bindEvent();
};
sliderFunc.prototype.init = function() {
    this.wrapWidth = this.wrap.offsetWidth;
    this.wrapInner.style.width = this.wrapWidth + 'px';
    this.wrapInner.style.height = this.lists[0].querySelector('img').height + 'px';
    this.index = 0;
    //初始化lists值
    for (var i = 0; i < this.listLength; i++) {
        this.lists[i].style.webkitTransform = 'translate3d(' + i * this.wrapWidth + 'px,0,0)';
    }

    if(this.ops.pagination){
        this.createBullet();
    }
    if (this.ops.loop) {
        this.copyLists();
        this.index = 1;
        this.listLength = this.wrapInner.getElementsByTagName('li').length;
    }
    //自动轮播
    if (this.ops.autoPlay) {
        this.autoPlay();
    }
    //窗口大小初始化方法
    var _this=this,resizeTimer = null;
    window.onresize = function(){
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            _this.resizeInit();
        },300);
    };
};
sliderFunc.prototype.resizeInit = function(){
    this.wrapWidth = this.wrap.offsetWidth;
    this.wrapInner.style.width = this.wrapWidth + 'px';
    this.wrapInner.style.height = this.lists[0].querySelector('img').height + 'px';
    for (var i = 0; i < this.listLength; i++) {
        this.lists[i].style.width=this.wrapWidth+'px';
        if(this.index>i){
            this.Transform3d(this.lists[i],-this.wrapWidth,false);
        }else if(this.index<i){
            this.Transform3d(this.lists[i],this.wrapWidth,false);
        }
    }
};
//copy首尾lists
sliderFunc.prototype.copyLists = function(){
    var lastLi = document.createElement('li'),
        fastLi = document.createElement('li');
    lastLi.className = 'om-slider';
    lastLi.style.cssText = this.wrapWidth + 'px';
    lastLi.style.webkitTransform = 'translate3d(-' + this.wrapWidth + 'px,0,0)';
    lastLi.innerHTML = this.lists[this.listLength - 1].innerHTML;
    fastLi.className = 'om-slider';
    fastLi.style.cssText = this.wrapWidth + 'px';
    fastLi.style.webkitTransform = 'translate3d(' + this.listLength * this.wrapWidth + 'px,0,0)';
    fastLi.innerHTML = this.lists[0].innerHTML;
    this.wrapInner.insertBefore(lastLi, this.wrapInner.firstChild);
    this.wrapInner.appendChild(fastLi);
};
//创建状态点列表
sliderFunc.prototype.createBullet = function(){
    pagination = document.createElement('div');
    pagination.className='om-pagination';
    for(var i=0;i<this.listLength;i++){
        span = document.createElement('span');
        if(this.index==i){
            span.className='active';
        }
        pagination.appendChild(span);
    }
    this.wrap.appendChild(pagination);
    this.bulletLists=pagination.getElementsByTagName('span');
    this.bllength=this.bulletLists.length;
    if(this.ops.title){
        pagination.style.bottom = 'inherit';
        pagination.style.top = '10px';
        for (i = 0; i < this.listLength; i++) {
            this.lists[i].querySelector('.om-slider-title').style.display = 'block';
        }
    }
};
sliderFunc.prototype.autoPlay = function(){
    var _this=this;
    clearInterval(_this.timer);
    _this.timer = setInterval(function() {
        _this.move('+1');
    }, _this.ops.autoTime);
};
sliderFunc.prototype.stopPlay = function(){
    clearInterval(this.timer);
};
sliderFunc.prototype.Transform3d=function(elm,x,m){
    if(!elm){
        throw new Error('未指定动画元素！');
    }else{
        elm.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
    }
    if(m){
        elm.style.webkitTransition = this.ops.speed + 'ms ease-out';
    }else{
        elm.style.webkitTransition = 'none';
    }
};
sliderFunc.prototype.loopSetting = function(n) {
    var _this = this;
    switch (n) {
        case 0:
            setTimeout(function() {
                mindex = _this.listLength - 2;
                _this.index = mindex;
                _this.Transform3d(_this.lists[0],-_this.wrapWidth,false);
                _this.Transform3d(_this.lists[mindex],0,false);
                _this.Transform3d(_this.lists[mindex + 1],_this.wrapWidth,false);
                _this.Transform3d(_this.lists[mindex - 1],-_this.wrapWidth,false);
                for (var i = mindex - 1; i > 0; i--) {
                    _this.Transform3d(_this.lists[i],-_this.wrapWidth,false);
                }
            }, _this.ops.speed);
            break;
        case _this.listLength - 1:
            setTimeout(function() {
                mindex = 1;
                _this.index = mindex;
                _this.Transform3d(_this.lists[mindex],0,false);
                _this.Transform3d(_this.lists[mindex+1],_this.wrapWidth,false);
                _this.Transform3d(_this.lists[mindex-1],-_this.wrapWidth,false);
                _this.Transform3d(_this.lists[_this.listLength - 1],_this.wrapWidth,false);
                for (var i = mindex + 1; i < _this.listLength - 1; i++) {
                    _this.Transform3d(_this.lists[i],_this.wrapWidth,false);
                }
            }, _this.ops.speed);
            break;
    }
};
sliderFunc.prototype.move = function(m) {
    var mindex;
    if (typeof m == 'number') {
        mindex = this.index;
    } else if (typeof m == 'string') {
        mindex = this.index + m * 1;
    }
    if (mindex > this.listLength - 1) {
        mindex = this.listLength - 1;
    } else if (mindex < 0) {
        mindex = 0;
    }
    //状态点列表切换方法
    if(this.ops.pagination){
        for(var i=0;i<this.bllength;i++){
            if(i==mindex-1){
                this.bulletLists[i].setAttribute('class','active');
            }else{
                this.bulletLists[i].setAttribute('class','');
                if(mindex>this.bllength){
                    this.bulletLists[0].setAttribute('class','active');
                }else if(mindex==0){
                    this.bulletLists[this.bllength-1].setAttribute('class','active');
                }
            }
        }
    }
    this.index = mindex;
    this.lists[mindex] && (this.Transform3d(this.lists[mindex],0,true));
    this.lists[mindex + 1] && (this.Transform3d(this.lists[mindex+1],this.wrapWidth,true));
    this.lists[mindex - 1] && (this.Transform3d(this.lists[mindex-1],-this.wrapWidth,true));
    //无缝循环设置
    if (this.ops.loop) {
        this.loopSetting(this.index);
    }
};
sliderFunc.prototype.bindEvent = function() {
    var _this = this;
    var moveWidth = this.wrapWidth / 3;
    var touchstart = function(e) {
        _this.startX = e.touches[0].pageX;
        //初始化移动的距离
        _this.offsetX = 0;
        _this.startTime = new Date() * 1;
        _this.stopPlay();
    };
    var touchmove = function(e) {
        e.preventDefault();
        _this.offsetX = e.touches[0].pageX - _this.startX;
        var i = _this.index - 1;
        var m = i + 3;
        for (i; i < m; i++) {
            _this.lists[i] && (_this.Transform3d(_this.lists[i],(i - _this.index) * _this.wrapWidth + _this.offsetX,false));
        }
    };
    var touchend = function(e) {
        var endTime = new Date() * 1;
        if (endTime - _this.startTime > 700) {
            if (_this.offsetX >= moveWidth) {
                _this.move('-1');
            } else if (_this.offsetX < -moveWidth) {
                _this.move('+1');
            } else {
                _this.move('0');
            }
        } else {
            if (_this.offsetX >= 60) {
                _this.move('-1');
            } else if (_this.offsetX < -60) {
                _this.move('+1');
            } else {
                _this.move('0');
            }
        }
        _this.autoPlay();
    };
    _this.wrap.addEventListener('touchstart', touchstart, false);
    _this.wrap.addEventListener('touchmove', touchmove, false);
    _this.wrap.addEventListener('touchend', touchend, false);
};

var om = new omui();