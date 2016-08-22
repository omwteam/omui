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
        offset: offset?offset:'bottom',
        tips: tips,
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
        body.appendChild(defaults.elem);
    }
    defaults.elem.innerHTML = defaults.tips;
    defaults.elem.classList.add('om-poptips-active');
    setTimeout(function(){
        defaults.elem.classList.remove('om-poptips-active');
    },2000);
};

omui.prototype.tab = function(){
    var nav = document.querySelectorAll('.om-tab-nav > li'),
        cnt = document.querySelectorAll('.om-tab-cnt > li'),
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

var om = new omui();