/*
* @Author: admin
* @Date:   2018-10-15 18:23:04
* @Last Modified by:   admin
* @Last Modified time: 2018-10-15 19:53:51
*/


$(function(){
	$('.navigat .nav01 ul li').hover(function() {
		$(this).children('.subtwo').stop().fadeIn(300)
	}, function() {
		$(this).children('.subtwo').stop().fadeOut(300)
	});

})