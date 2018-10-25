/*
* @Author: admin
* @Date:   2018-10-16 19:02:34
* @Last Modified by:   admin
* @Last Modified time: 2018-10-22 19:31:57
*/


$(function(){
	//导航
	$('.nav01 .right .lan').hover(function() {
		$('.nav01 .right .lan .sub').css('display', 'block');
		$('.nav01 .right .lan .sub').animate({'right': '10px'}, 500);
	}, function() {
		$('.nav01 .right .lan .sub').css('display', '');
		$('.nav01 .right .lan .sub').animate({'right': ''}, 100);
	});
	$('.nav01 .right .lan .sub li a').hover(function() {
		$(this).css('font-size', '14px');
	}, function() {
		$(this).css('font-size', '');
	});

	$('.nav02 .right .lan').click(function(event) {
		$(this).children('.sub').slideToggle(500);
	});


	//表格
	$('#form01 .email .email01').focus(function(event) {
		$(this).css('border-color', '#00ff00');
	});
	$('#form01 .email .email01').blur(function(event) {
		$(this).css('border-color', '');
	});
	$('#form01 .pass .pass01').focus(function(event) {
		$(this).css('border-color', '#00ff00');
	});
	$('#form01 .pass .pass01').blur(function(event) {
		$(this).css('border-color', '');
	});



	//眼睛
	$('.bd #form01 .pass .eye').hover(function() {
		$('.bd #form01 .pass .eye .eye01').css('display', 'none');
		$('.bd #form01 .pass .eye .eye02').css('display', 'block');
	}, function() {
		$('.bd #form01 .pass .eye .eye01').css('display', 'block');
		$('.bd #form01 .pass .eye .eye02').css('display', 'none');
	});


	//密码显示与隐藏
	$('.bd #form01 .pass .eye').mousedown(function(event) {
		$('#form01 .pass .pass01').attr('type', 'text');
	});
	$('.bd #form01 .pass .eye').mouseup(function(event) {
		$('#form01 .pass .pass01').attr('type', 'password');
	});
})