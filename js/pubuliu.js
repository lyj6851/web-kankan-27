
// 固定列，流式布局
$(function(){
	//获得container对象
	var oContainer = $('#container');
	var iWidth = 200;//图片的宽
	var iSpace = 10;//图片间距
	var iOuterWidth = iWidth + iSpace;//每张图片的实际宽
	var sUrl = 'http://www.wookmark.com/api/json/popular?callback=?';//请求地址
	var iCells = 0;//初始化列数,根据屏幕宽度计算出列数;
    var arrT = [];//行高度
	var arrL = [];//列数组(列左起始坐标)



	//初始化列数
	function setCell(){
		//获取可视窗的宽度,除每张图片的宽度,得到列数
		iCells = Math.floor($(window).innerWidth() / iOuterWidth);
		if(iCells<3){
			iCells = 3;
		}else if(iCells>6){
			iCells = 6;
		}

		//给可视区初始化区域大小
		oContainer.css('width',iWidth*iCells - 10) ;
	}
	setCell();
	//窗口调整时重新计算列数
	$(window).resize(function(){
		setCell();
	});
	for (var i=0; i<iCells; i++) {
		arrT[i] = 0;
		arrL[i] = iOuterWidth * i;
	}
	console.log(iCells);
	console.log(arrL);
	console.log(arrT);
})