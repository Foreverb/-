document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

//初始化fastclick
window.addEventListener('load', function(){
    FastClick.attach(document.body);
}, false);

//清除默认事件
document.documentElement.addEventListener('click', function(e){
    if( e.touches && e.touches.length > 1 ) {
        e.preventDefault();
    }
}, false);