/*
* @Author: admin
* @Date:   2018-10-08 10:43:15
* @Last Modified by:   admin
* @Last Modified time: 2018-10-22 21:02:38
*/

$(function(){
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

	//导航二
	$('.a-nav .a-head .a-menu .menu li').click(function(event) {
		$(this).children('.sub').slideToggle(300);
		$(this).css('background', 'transparent');
	});
})