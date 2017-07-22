$(function(){
		var bgbox_width = $(".bgbox").width();//获取鼠标范围宽度
		var bgbox_height = $(".bgbox").height();//获取鼠标范围高度
		var ltbox_width = $(".lt-img").width();//获取小图最外盒子宽度
		var ltbox_height = $(".lt-img").height();//获取小图最外盒子高度
		var lf_off = $(".lt-img").offset().left;//获取小图距浏览器左边界距离
		var t_off = $(".lt-img").offset().top;//获取小图距浏览器上边界距离
		$(".lg-img").css({"left":lf_off+ltbox_width});
		$(".lg-img").css({"top":t_off});
		$(".lt-img img").width(ltbox_width);
		$(".lt-img img").height(ltbox_height);
		$(".lt-img").mousemove(function(){//鼠标移入小图触发函数
			$(".bgbox").css("display","block")
			$(".lg-img").css({"display":"block"})
			$(".lt-img").mousemove(function(e){//鼠标移动触发函数
				e = e || window.event;
				mouseX = e.clientX;//鼠标X轴位置
				mouseY = e.clientY;//鼠标Y轴位置
				$(".bgbox").css({"left":mouseX-(bgbox_width/2)-lf_off+"px","top":mouseY-(bgbox_height/2)-t_off+"px"});
				if(mouseX>=ltbox_width-(bgbox_width/2)+lf_off){
					$(".bgbox").css({"left":ltbox_width-bgbox_width+"px"});
				}else if(mouseX<=bgbox_width/2+lf_off){
					$(".bgbox").css({"left":0+"px"})
				}
				if(mouseY>=ltbox_height-(bgbox_height/2)+t_off){
					$(".bgbox").css({"top":ltbox_height-bgbox_height+"px"});
				}else if(mouseY<=bgbox_height/2+t_off){
					$(".bgbox").css({"top":0+"px"})
				}
				var lg_img_w = $(".lg-img").width();
				var lg_img_h = $(".lg-img").height();
				var w_bei = ($(".lg-img img").width()-lg_img_w)/(ltbox_width-bgbox_width);
				var h_bei = ($(".lg-img img").height()-lg_img_h)/(ltbox_height-bgbox_height);
				var lg_width = $(".lg-img img").width();
				var lg_height = $(".lg-img img").height();


				$(".lg-img img").css({"left":-(mouseX-lf_off-(bgbox_width/2))*w_bei,"top":-(mouseY-t_off-(bgbox_height/2))*h_bei})
				if(mouseX-lf_off<=bgbox_width/2){
					$(".lg-img img").css({"left":0+"px"})
				}else if(mouseX-lf_off>=ltbox_width-(bgbox_width/2)){
					$(".lg-img img").css({"left":-(lg_width-lg_img_w)+"px"})
				}
				if(mouseY-t_off<=bgbox_height/2){
					$(".lg-img img").css({"top":0+"px"})
				}else if(mouseY-t_off>=ltbox_height-(bgbox_height/2)){
					$(".lg-img img").css({"top":-(lg_height-lg_img_h)+"px"})
				}
			})
			
		})
		$(".lt-img").mouseout(function(){
			$(".bgbox").css({"display":"none"});
			$(".lg-img").css({"display":"none"})	
		})
	})
