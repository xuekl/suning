$(function(){
	//show-list展开
$('.nav-bar').hover(function(){
		$('.nav-bar .list-show').stop().slideDown(700)
	},function(){
		$('.nav-bar .list-show').stop().slideUp(700)
	})
	//second-show展开
	$('.nav-bar .list-show ul .listbg').hover(function(){
		$(this).css({'background':'#fff'});
		$(this).find('a').css({'color':'#333'})
		$(this).find('.second-show').stop().show();
	},function(){
		$(this).css({'background':''});
		$(this).find('a').css({'color':'#fff'})
		$(this).find('.second-show').stop().hide();
	})
	$('.ppt-side ul li').hover(function(){
		$(this).css({'background':'#fff'})
		$(this).find('a').css({'color':'#333'})
		$(this).find('.main-show').show()
	},function(){
		$(this).css({'background':'#333'})
		$(this).find('a').css({'color':'#fff'})
		$(this).find('.main-show').hide()
	})
})
