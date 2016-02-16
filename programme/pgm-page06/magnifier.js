;(function(window,document,undefined){
			var $ = function(id){ return document.getElementById(id) };
			var magnifier = $("sal-magnifier");
			var move_box = $("sal-moveBox");
			var mask = $("sal-mask");
			var bigImg_wrap = $("sal-bigImg-wrap");
			var bigImg = bigImg_wrap.getElementsByTagName("img")[0];

			mask.onmouseover = function(){
				move_box.style.display = "block";
				bigImg_wrap.style.display = "block";
				mask.style.cursor = "move";
			};
			mask.onmouseout = function(){
				move_box.style.display = "none";
				bigImg_wrap.style.display = "none";
			};
			mask.onmousemove = function(e){
				var e = e ||window.event;
				var left = e.clientX - magnifier.offsetLeft - move_box.offsetWidth / 2 ;
				var top = e.clientY - magnifier.offsetTop - move_box.offsetHeight / 2;
				if(left<0){
					left= 0
				}else if(left > mask.offsetWidth - move_box.offsetWidth ){
					left = mask.offsetWidth - move_box.offsetWidth;
				}
				if(top<0){
					top = 0
				}else if(top > mask.offsetHeight -move_box.offsetHeight){
					top = mask.offsetHeight -move_box.offsetHeight;
				}
				move_box.style.left = left +"px";
				move_box.style.top  = top +"px";
				var percentX = left / (mask.offsetWidth - move_box.offsetWidth);
				var percentY = top /( mask.offsetHeight- move_box.offsetHeight);
				bigImg.style.left = percentX * (bigImg_wrap.offsetWidth - bigImg.offsetWidth) + "px";
				bigImg.style.top =  percentY *( bigImg_wrap.offsetHeight - bigImg.offsetHeight)+ "px";
				bigImg.style.maxWidth = "400px"
				console.log("bigImg.offsetWidth "+bigImg.offsetWidth);			
			};
		})(window,document)