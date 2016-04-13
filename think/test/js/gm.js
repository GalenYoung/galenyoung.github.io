;(function(window,document,undefined){
	var $tag = function(tagname,parentSelector){
		parentSelector === undefined ? parentSelector = document : parentSelector;
		return parentSelector.getElementsByTagName(tagname);
	};
	var $class = function(classname,parentSelector){
		parentSelector === undefined ? parentSelector = document : parentSelector;
		return parentSelector.getElementsByClassName(classname);
	};
	var $id = function(id,parentSelector){
		parentSelector === undefined ? parentSelector = document : parentSelector;
		return parentSelector.getElementById(id);
	};

	//get Dom
	wrap = $class("wrap");
	//logic
	for(let i = 0 ; i < wrap.length ; i++){
		wrap[i].style.height = wrap[i].offsetWidth/3 + "px";
		$tag("a",wrap[i])[0].style.lineHeight = wrap[i].offsetHeight + "px";
	}
	
})(window,document);