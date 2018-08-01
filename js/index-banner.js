$(function(){
    let index = 0;//索引
    let imgLength = 2;//图片个数
    let myTimer;//需要停止的时间名称
    //初始化
    function init() {
        $("header .logo .banner a")
          .eq(0)
          .fadeIn()
          .siblings()
          .fadeOut();
    }
    //循环体
    function xunhuan() {
        $("header .logo .banner a")
          .eq(index)
          .fadeIn()
          .siblings()
          .fadeOut();
        if (index == imgLength) {
            index = 0;
        } else {
            index++;
        }
    }
    //开始轮播
    function run() {
        myTimer = setInterval(xunhuan, 3000);
    }
    run();
})