/*
* @Author: admin
* @Date:   2018-10-08 15:27:51
* @Last Modified by:   admin
* @Last Modified time: 2018-10-22 21:02:46
*/

$(function(){
	//头部导航
	$('.g-nav .g-head .g-menu .menu li .g-twomenu li').hover(function() {
		$(this).children('.g-threemenu').stop().slideDown();
	}, function() {
		$(this).children('.g-threemenu').stop().slideUp();
	});
	$('.g-nav .g-head .g-menu .menu li').hover(function() {
		$(this).children('.g-twomenu').stop().fadeIn(500)
	}, function() {
		$(this).children('.g-twomenu').stop().fadeOut(500)
	});
	$('.a-nav .a-head .a-menu .menu li').click(function(event) {
		$(this).children('.sub').slideToggle(300);
		$(this).css('background', 'transparent');
	});


	//导航二
	$('.m-nav .m-menu ul li').click(function(event) {
		$(this).addClass('line').siblings().removeClass('line')
	});


	$(window).scroll(function(event) {
		if($(window).scrollTop()>=800){
			$('.g-nav').css('display', 'none');
			$('.m-nav').addClass('navbar-fixed-top');
		}else{
			$('.g-nav').css('display', 'block');
			$('.m-nav').removeClass('navbar-fixed-top');
		}
	});
})