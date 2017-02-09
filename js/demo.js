$(function(){
	//获取图片li
	var imgUl=$('#box ul li');
	
	var numOl=$('#box ol li');
	// alert(numOl);
	numOl.click(function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		imgUl.eq($(this).index()).show().siblings('li').hide();

	})

	// for(var i=0;i<imgUl.length;i++){
	// 	var k=i;
	// 	numOl.eq(i).click(function(){
			
	// 		for(var j=0;j<numOl.length;j++){
	// 			numOl.eq(j).removeClass('active');
	// 			imgUl.eq(j).removeClass('show');
	// 		}
	// 		$(this).addClass('active');
			
	// 		imgUl.eq($(this).index()).addClass('show');
	// 	})
	// }
})