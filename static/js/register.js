$(function(){
	$('input[name=number]').blur(function(){
		val=this.value;

		if(!val.match(/^1[3578]\d{9}$/)){
			$(this).data({'s':0});
			$(this).next().show();
			$(this).next().next().hide();
			
		}else{
			$(this).data({'s':1});
			$(this).next().hide();
			$(this).next().next().show();
			number=this.value;
			$.post('http://api.tp5.com/user/register',{username:number},function(r){
				if(r){
					$('.reajax').show();
					$('.error').hide();
					$('.correct').hide();
				}else{
					$('.reajax').hide();
				}
			})
		}
	})
	$('input[name=password]').blur(function(){
		val=this.value;
		if(val.length<8){
			$(this).data({'s':0});
			$(this).next().show();
			$(this).next().next().hide();
		}else{
			$(this).data({'s':1});
			$(this).next().hide();
			$(this).next().next().show();
		}
	})

	$('input[name=checkbox]').blur(function(){
		if(!this.checked){
			$(this).data({'s':0});
			$(this).next().next().show();
		}else{
			$(this).data({'s':1});
			$(this).next().next().hide();
		}
	})
	$('form').submit(function(){
		
		$('.auth').blur();
		tot=0;
		$('.auth').each(function(){
			tot+=$(this).data('s');
		})
		if(tot!=3){
			return false;
		}
		
	})
})