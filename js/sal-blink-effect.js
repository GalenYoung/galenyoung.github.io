define(function(){
	// salBlinkEffect module
	var salBlinkEffect = function(){
		//简化 dom
		var $class = function(classname){ return document.getElementsByClassName(classname)};
		var $id = function(id){ return document.getElementById(id)};

		//向页面中追加cartoon的html
		var SBE_html = [
	        '<span class="sal-blink-wrap sal-blink-wrap-top">',
	            '<b class="sal-blink-eyes sal-blink-eye-left" id="sal-blink-eye-left"></b>',
	        '</span>',
	        '<span class="sal-blink-wrap sal-blink-wrap-bottom">',
	            '<b class="sal-blink-eyes sal-blink-eye-right" id="sal-blink-eye-right"></b>',
	        '</span>',
	        '<span class="sal-blink-close" id="sal-blink-close"></span>',
		].join('');
		var SBE = document.createElement('div');
		SBE.setAttribute('class','sal-blink');
		SBE.setAttribute('id','sal-blink');
		SBE.innerHTML = SBE_html;
		document.body.appendChild(SBE);

		//get cartoon's dom
		var sal_blink_wrap = $class("sal-blink-wrap");
		var sal_blink_eyes = $class("sal-blink-eyes");
		var sal_blink_close = $id("sal-blink-close");
		var sal_blink = $id("sal-blink");

		//cartoon's logic
		if(document.documentElement.clientWidth >= 1000){
			sal_blink.style.display = "block";
			onmousemove = function(e){

				var e = e || window.event ;
				var eClientX = e.clientX;
				var eClientY = e.clientY;  

				for(var i = 0 ; i < sal_blink_wrap.length ;i++){
					sal_blink_eyes[i].style.top  = (sal_blink_wrap[0].offsetHeight * e.clientY / window.innerHeight) + "px";
					sal_blink_eyes[i].style.left  = (sal_blink_wrap[0].offsetWidth * e.clientX / window.innerWidth) + "px";
				};
			};

			sal_blink.addEventListener("animationend",function(){
				for(var j = 0; j < sal_blink_eyes.length ; j++){
					sal_blink_eyes[j].style.display = "block";	
				};
			});

			sal_blink_close.onclick = function(){
				sal_blink.style.display = "none";
			};

		}
	};
	
	return {
		salBlinkEffect : salBlinkEffect
	};
});

	