(function(window,document,undefined){
	var spring_animation = document.createElement("springAnimation");
	spring_animation.innerHTML = "Wecome to Sunbeam!";
	document.body.appendChild(spring_animation);

	setTimeout(function(){
		spring_animation.style.display = "none";
	},5000);
})(window,document);