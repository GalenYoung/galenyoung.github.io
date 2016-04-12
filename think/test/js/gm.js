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
	
	//logic
	
})(window,document);