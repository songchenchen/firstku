/**
 * Created by cc on 2017/4/17.
 */

    window.onload = function(){
    $('.bao').tooltip();
    $('.guang').tooltip();

    banner();

    setWidth();

        //模态框隐藏
        $('.btn-log').click(function(){
            $('.modal').modal('hide');
        });


}

//function banner(){
//    var picBox = document.querySelector(".carousel");
//
//    //给大盒子绑定touch事件
//    //定义变量存数据
//    var startX =0;
//    var moveX = 0;
//    var distanceX = 0;
//
//    picBox.addEventListener('touchstart',function(e){
//        startX= e.targetTouches[0].clientX;//获取起始坐标值
//    })
//    picBox.addEventListener('touchmove',function(e){
//        moveX = e.targetTouches[0].clientX;
//        distanceX =moveX- startX ;      //算出距离差
//    })
//    picBox.addEventListener('touchend',function(){
//        //右侧滑动 上一张
//        if(distanceX>0){
//            console.log('right');
//            $('.carousel').carousel('prev');
//        }
//        //左侧滑动 下一张
//        if(distanceX<0){
//            console.log('left');
//            $('.carousel').carousel('next');
//        }
//        //数据重置
//        startX= 0;
//        moveX=0;
//        distanceX=0;
//    })
//}
function banner(){
    var picBox = document.querySelector('.carousel');

    var startX = 0;
    var moveX =0;
    var distanceX = 0;

    picBox.addEventListener('touchstart',function(e){
        startX = e.targetTouches[0].clientX;
    })

    picBox.addEventListener('touchmove',function(e){
        moveX = e.targetTouches[0].clientX;
        distanceX = moveX-startX;
    })
    picBox.addEventListener('touchend',function(){
        if(distanceX>0){
            $('.carousel').carousel('prev');
        }
        if(distanceX<0){
            $('.carousel').carousel('next');
        }

    })
}


function setWidth(){
    var w=0;
    $('.wjs-tabs li').each(function(index,e){
        w+=$(e).outerWidth(true);
    })
    $('.wjs-tabs').width(w);    //将累加的宽度设置给ul
}


