
$(function(){
	var timer = '';//定时器
	var i = 10;
	var y = 0;
	var tao_timer = '';

	//获取到搜索框
	$('.search_text').focus(function(){
		$(this).addClass('blue');
		// $(this).attr('placeholder','');
	})
	//input表单失去焦点
	$('.search_text').blur(function(){
		$(this).removeClass('blue');
	})

	//头部右侧菜单隐藏盒子效果
	$('.user_r').hover(function(){
			$('.hidden_r').show();
		},
		function(){
			$('.hidden_r').hide();
		})
	//中间隐藏盒子文字样式
	$('.hidden_m_top span').mouseover(function(){
		$('.hidden_m_top span').removeClass('span_style');
		$(this).addClass('span_style');
	})
	//中间隐藏盒子tab切换效果
	$('span.history').mouseover(function(){
		$('.history_box').show();
	})
	$('span.update').mouseover(function(){
		$('.history_box').hide();
		$('.user_m .hidden_m').show();
	})
	// $('span.history').hover(function(){
	// 	$('.history_box').show();
	// },function(){
	// 	$('.history_box').hide();
	// })
	$('.user_m').hover(function(){
			$('.hidden_m').show();
		},
		function(){
			$('.hidden_m').hide();
		})

	//轮换版
    $('.smal_pic li').mouseover(function(){
		clearInterval(timer);
		var backImg = $(this).find('img').attr('backImg');
		var backColor = $(this).find('img').attr('backColor');
		var background = 'url(' + backImg + ') ' + 'no-repeat center ' + backColor;
		$('#focus_background').css({background : background});
		$(this).addClass('hover').siblings().removeClass('hover');
		i = $(this).index();
		$('.focus_title a').eq(i).show().siblings('a').hide();
	})

	// 移出小图片开启定时器
	$('.smal_pic li').mouseout(function(){
		timer = setInterval(move,1000);
	})

	timer = setInterval(move,1000);
	//轮换版动画
	function move(){
		if(i>11){
			i=0;
		}
		var backImg = $('.smal_pic li').eq(i).find('img').attr('backImg');
		var backColor =$('.smal_pic li').eq(i).find('img').attr('backColor');
		//组合背景属性
		var background = 'url('+backImg+') no-repeat center '+ backColor;
		$('#focus_background').css({background:background});
		$('.focus_title a').eq(i).show().siblings().hide();
		$('.smal_pic li').eq(i).addClass('hover').siblings().removeClass('hover');
		i++;
		}

	//轮换版右侧全部分类鼠标样式
	$('.title a').mouseover(function(){
			var cur = $(this).index();
			$(this).addClass('rank_hover').siblings().removeClass('rank_hover');
			$('.focusrank .content ul').eq(cur).show().siblings().hide();
		});
	

	//alert(num);
	//图片公共样式
	$('a.pic').hover(function(){
		$(this).addClass('apic_hover');
	},function(){
		$(this).removeClass('apic_hover');
	})

	//左边公共的tab切换效果
	$('.tabbox a').mouseover(function(){
		$(this).addClass('hot_style').siblings().removeClass('hot_style');
		var i=$(this).index();
		$(this).parents('.hot_l_title').siblings('ul').eq(i).show().siblings('ul').hide();
	})

	//今日热播右边的tab切换效果
	$('.tab_right a.tab').mouseover(function(){
		$(this).addClass('a_r_tab').siblings().removeClass('a_r_tab');
		var i = $(this).index();
		$('.hot_right ul').eq(i).show().siblings('ul').hide();
	})

	//电视剧区域右边tab切换效果
	//当鼠标移动到li上时,给li添加class=.tv_r_tab 同级的取消
	$('ul.tab_box li').mouseover(function(){
		$(this).addClass('tv_r_tab').siblings('li').removeClass('tv_r_tab');
		var i=$(this).index();
		$('.tv_right div.list').eq(i).show().siblings('div.list').hide();
		$('.tv_right ul.tagbox').eq(i).show().siblings('ul.tagbox').hide();
	})






})