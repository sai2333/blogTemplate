$(function() {
    $("header .navigation-two ul li a").hover(function(){
        $(this).addClass('active');
        console.log('ie');
    },function() {
        $(this).removeClass('active');
    })
    //banner
    let index = 0;//索引
    let imgLength = $("main .left-content .banner-box .num li").length;//图片个数
    let myTimer;//需要停止的时间名称
    //初始化
    function init(){
        $("main .left-content .banner-box .banner a").eq(0).fadeIn().siblings().fadeOut();
        $(".banner-box ul li")
          .eq(0)
          .addClass("fade-active")
          .siblings()
          .removeClass('fade-active');
    }
    //循环体
    function xunhuan() {
        $("main .left-content .banner-box .banner a").eq(index).fadeIn().siblings().fadeOut();
        $('.banner-box ul li').eq(index).addClass('fade-active').siblings().removeClass('fade-active');
        if (index == imgLength) {
            index = 0;
        } else {
            index++;
        }
    }
    //开始轮播
    function run(){
        myTimer = setInterval(xunhuan,3000);
    }
    //点击切换轮播
    $('.banner-box ul li').on('click',function(){
        let num = $(this).index();
        console.log(num);
        $(this).addClass('fade-active').siblings().removeClass('fade-active');
        $("main .left-content .banner-box .banner a")
          .eq(num)
          .fadeIn()
          .siblings()
          .fadeOut();
        if (num == imgLength){
            index = 0;
        }else{
            index = num + 1;
        }
    })
    $("main .left-content .banner-box .banner a").mouseenter(function() {
        clearInterval(myTimer);
    })
    $('main .left-content .banner-box .banner a').mouseleave(function() {
        run();
    })
    init();
    run();

    //blog-content去掉默认的上边框
    $("main .left-content .blog-content-box .blog-content").hover(function(){
        $(this).next().css('border','none');
    },function(){
        $(this)
          .next()
          .css("border-top", "1px solid #e6e6e6");
    })
})