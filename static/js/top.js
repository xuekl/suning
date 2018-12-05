$(function(){
	// 顶部js效果
	$('.top-content ul .wrapmost').mouseenter(function(){
		$(this).find('a').css({'color':'#f60'})
		$(this).find('i').css({'color':'#f60'})
	})
	$('.top-content ul .wrapmost').mouseleave(function(){
		$(this).find('a').css({'color':'#333'})
		$(this).find('i').css({'color':'#888'})
	})
	$('.mosthave').each(function(){
		if($('.mostlist')){
	 		$(this).hover(function(){
	 			$(this).find('.menu-down').removeClass('glyphicon glyphicon-menu-down')
	 			$(this).find('.menu-down').addClass('glyphicon glyphicon-menu-up')
				$(this).addClass('active')
				$(this).find($('.mostlist')).stop().slideDown(100);
				},function(){
				$(this).find('.menu-down').removeClass('glyphicon glyphicon-menu-up')
				$(this).find('.menu-down').addClass('glyphicon glyphicon-menu-down')
				$(this).removeClass('active')
				$(this).find($('.mostlist')).stop().hide();
			})
		}
	})
})
