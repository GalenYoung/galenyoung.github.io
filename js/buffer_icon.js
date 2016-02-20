(function(window,document,undefined){
	var buffer_icon = document.createElement('span') ;
		buffer_icon.className = "buffer-icon" ;
	    buffer_icon.setAttribute("id", "buffer-icon");
		document.body.appendChild(buffer_icon);
		
	var buffer_mask = document.createElement('div');
		buffer_mask.className = "buffer-mask";
		buffer_mask.setAttribute("id", "buffer-mask");
		document.body.appendChild(buffer_mask);
	
	window.onload = function(){
		buffer_icon.style.display = "none";
		buffer_mask.style.display = "none";	
	}
})(window,document)