/**
 * Created by jiang on 2017/2/13.
 */
//注册事件处理函数
function addEventListener() {
    if(image.addEventListener){//注册事件处理程序的一种方法
        image.addEventListener("click",hide,false);
    }else {
        image.attachEvent("onclick",hide)
    }
};