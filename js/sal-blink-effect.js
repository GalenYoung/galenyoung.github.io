define(function(){
	var salBlinkEffect = function(){
		var $class = function(classname){ return document.getElementsByClassName(classname)};
		var $id = function(id){ return document.getElementById(id)};

		var sal_blink_wrap = $class("sal-blink-wrap");
		var sal_blink_eyes = $class("sal-blink-eyes");
		var sal_blink_close = $id("sal-blink-close");
		var sal_blink = $id("sal-blink");

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

	