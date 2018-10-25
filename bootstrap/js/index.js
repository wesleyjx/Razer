/*
* @Author: admin
* @Date:   2018-09-27 15:34:29
* @Last Modified by:   admin
* @Last Modified time: 2018-10-22 21:01:43
*/

$(function(){
	//导航一
	$('.g-nav .g-head .g-menu .menu li .g-twomenu li').hover(function() {
		$(this).children('.g-threemenu').stop().slideDown();
		$(this).css('background', 'transparent');
	}, function() {
		$(this).children('.g-threemenu').stop().slideUp();
		$(this).css('background', '');
	});
	$('.g-nav .g-head .g-menu .menu li').hover(function() {
		$(this).children('.g-twomenu').stop().fadeIn(500)
	}, function() {
		$(this).children('.g-twomenu').stop().fadeOut(500)
	});

	//导航二
	$('.a-nav .a-head .a-menu .menu li').click(function(event) {
		$(this).children('.sub').slideToggle(300);
		$(this).css('background', 'transparent');
	});
})