/**
 * Created by cc on 2017/4/17.
 */

    window.onload = function(){
    $('.bao').tooltip();
    $('.guang').tooltip();

    banner();

    setWidth();

        //ģ̬������
        $('.btn-log').click(function(){
            $('.modal').modal('hide');
        });


}

//function banner(){
//    var picBox = document.querySelector(".carousel");
//
//    //������Ӱ�touch�¼�
//    //�������������
//    var startX =0;
//    var moveX = 0;
//    var distanceX = 0;
//
//    picBox.addEventListener('touchstart',function(e){
//        startX= e.targetTouches[0].clientX;//��ȡ��ʼ����ֵ
//    })
//    picBox.addEventListener('touchmove',function(e){
//        moveX = e.targetTouches[0].clientX;
//        distanceX =moveX- startX ;      //��������
//    })
//    picBox.addEventListener('touchend',function(){
//        //�Ҳ໬�� ��һ��
//        if(distanceX>0){
//            console.log('right');
//            $('.carousel').carousel('prev');
//        }
//        //��໬�� ��һ��
//        if(distanceX<0){
//            console.log('left');
//            $('.carousel').carousel('next');
//        }
//        //��������
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
    $('.wjs-tabs').width(w);    //���ۼӵĿ�����ø�ul
}


