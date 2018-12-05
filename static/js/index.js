$(function(){
	//关闭广告
	$('.adv span').click(function(){
		$('.adv').css({'display':'none'})
	})
	//search
	// $('.textsearch').bind('input click',function(){
		
	// 	$('search0').show();
	// })

	$('.textsearch').bind('input propertychange',function(){
		val=$(this).val();
		$('.showsearch').show();
		// if(val){
		// 	$.post('search.php',{val,val},function(r){
		//  	if(r){
		//  		$('.showsearch').html(r);
		//  	}
		//  })
		// }		 
	})
	$('.textsearch').blur(function(){
		$('.showsearch').slideUp(300);
	})

	//左侧滚动监听实现
	$('.side .side-left').fadeOut(1000);
	$('.side .side-left ul li').hover(function(){
		$(this).addClass('active')
	},function(){
		$(this).removeClass('active')
	})
	$('.side .side-left ul li').each(function(){
		$(this).click(function(){				
			f=$(this).attr('name');
			t=$('#'+f).offset().top-100;
			$(window).scrollTop(t);
		})
		
	})
	$('.side .side-left .toTop').click(function(){
		$(window).scrollTop(0);
		$('.side .side-left').hide();
	})
	//左侧滚动监听
	$(window).scroll(function(){
		st=$(window).scrollTop()
		mt = $('.topic .stickCtrl').first().offset().top-200;
		$('.topic .stickCtrl').each(function(){
			ot=$(this).offset().top-200;
			ID = $(this).attr('id');
			if(st<mt){
				$('.side-left').hide()
			}
			if(st>=ot){
				$('.side-left').show();
				$('.side-left ul li').removeClass('yellow')
				$('.side-left ul li[name='+ID+']').addClass('yellow')
			}
			
		})
	})
	//右侧固定侧边栏实现
	$('.side-right ul li').each(function(){
		$(this).hover(function(){
			$(this).addClass('yellow')
			$(this).find('div').stop().show(300).animate({'width':50},300)
			$(this).find('.bar').stop().show().animate({'width':100},300)
			$(this).find('span').stop().show()
			$(this).find('.QRcode').stop().show().animate({'width':160},300)
		},function(){
			$(this).removeClass('yellow')
			$(this).find('div').stop().animate({'width':0},300)
			$(this).find('.bar').stop().animate({'width':0},300)	
			$(this).find('.slide').stop().hide(300)
			$(this).find('.QRcode').stop().animate({'width':0},300)

		})
	})
	$('side-right .toTop').click(function(){
		$(window).scrollTop(0);
	})
	//show-list展开
	$('.ppt-left .nav-bar').hover(function(){
		$('.ppt-left .list-show').stop().slideDown(700)
	},function(){
		$('.ppt-left .list-show').stop().slideUp(700)
	})
	//second-show展开
	$('.ppt-left .list-show ul .listbg').hover(function(){
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
	// 幻灯片的实现
	// $(function(){
	// 	function tostart(){
	// 		timer=setInterval(function(){
	// 		index++
	// 		if(index==6){
	// 			index=0
	// 		}
	// 		$('.light p').eq(index).addClass('active')
	// 		$('.light p').not($('.light p').eq(index)).removeClass('active')
	// 		$('.ppt-imgs ul li').eq(index).fadeIn(1500)
	// 	    $('.ppt-imgs ul li').not($('.ppt-imgs ul li').eq(index)).fadeOut(1500)
	// 	},3000)
	// 	}
	// 	tostart();
	// 	//底部跑马灯
	// 	$('.light p').click(function(){
	// 	$(this).addClass('active')
	// 	$('.light p').not($(this)).removeClass('active')
	// 	idx=$(this).index()
	// 	$('.ppt-imgs ul li').eq(idx).fadeIn()
	// 	$('.ppt-imgs ul li').not($('.ppt-imgs ul li').eq(idx)).fadeOut()
	// })
		$('.ppt-content').hover(function(){
			// clearInterval(timer)
			$('.ppt-content .arrow').show();
		},function(){
			// tostart();
			$('.ppt-content .arrow').hide();
		})
	// 	//左右导航键
	// 	var index=0
	// 	$('.ppt-content .arrow-left').click(function(){		
	// 	if(index==0){
	// 		index=6;
	// 	}
	// 	index--
	// 	$('.light p').eq(index).addClass('active')
	// 	$('.light p').not($('.light p').eq(index)).removeClass('active')
	// 	$('.ppt-imgs ul li').eq(index).stop().fadeIn()
	// 	$('.ppt-imgs ul li').not($('.ppt-imgs ul li').eq(index)).stop().fadeOut()
	// 	})
	// 	$('.ppt-content .arrow-right').click(function(){	
	// 	index++;
	// 	if(index==6){
	// 		index=0
	// 	}
	// 	$('.light p').eq(index).addClass('active')
	// 	$('.light p').not($('.light p').eq(index)).removeClass('active')
	// 	$('.ppt-imgs ul li').eq(index).stop().fadeIn()
	// 	$('.ppt-imgs ul li').not($('.ppt-imgs ul li').eq(index)).stop().fadeOut()
	// 	})			
	// })
	//a链接移入字体变色
	$('.ppt .nav-main').find('a').hover(function(){
		$(this).addClass('Yellow')
	},function(){
		$(this).removeClass('Yellow')
	})
	$('.ppt .ppt-left').find('a').hover(function(){
		$(this).addClass('Yellow')
	},function(){
		$(this).removeClass('Yellow')
	})
	$('.ppt .ppt-side ul li').find('a').hover(function(){
		$(this).addClass('Yellow')
	},function(){
		$(this).removeClass('Yellow')
	})
})