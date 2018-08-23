
$(function() {
	$('.content-middle-up li').mouseenter(function() {
	    var i = $(this).index();
	    $(this).addClass('select').siblings().removeClass('select');
	    $('.con-one').eq(i).show().siblings().hide();
	});
})