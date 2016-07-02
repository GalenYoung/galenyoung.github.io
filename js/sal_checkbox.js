;(function($,window,document,undefined){
    "use strict";
    if(!$) { return console.warn('页面没有正确引入jQuery'); };  
	/**
	 * [sal_checkbox 插件名字]
	 * @param  {[obj]} options [用户自定义参数，接受俩个属性：
		* 'level'
			* 值 - 其值可以是数字或者字符串
				* 默认值为 1 - 其直接父元素(如果值为2，则为其直接父元素的直接父元素)
			* 含义- 指定要添加样式到第几个父元素上，
		* 'class'
			* 要给父元素添加的类名
			* 默认为空字符串
			* 可以添加多个类名，使用空格分隔即可
		 ]
	 * @return {this}         [返回选择器自身]
	 */
	$.fn.sal_checkbox = function(options){
		/**
		 * [check_arr 将选择器转化为数组]
		 * @type {[array]}
		 */
		var check_arr = $(this).toArray();
		/**
		 * [check_all 默认数组中第一个值为全选框，获取其dom]
		 * @type {[dom]}
		 */
		var check_all = $(check_arr.shift());
		/**
		 * [check_box 获取除全选框外的其它选框的dom]
		 * @type {[dom]}
		 */
		var check_box = $(check_arr);
		/**
		 * [count 设置的计数器，用来计算当点击选框时，共有多少个选框是选中状态，如果都为选中状态，则勾选全选选框]
		 * @type {Number}
		 */
		var count     = 0 ;
		/**
		 * [set_level 用来计算父元素的层级]
		 * @type {String}
		 */
		var set_level = '';
		/**
		 * [defaults 默认参数]
		 * @type {Object}
		 */
		var defaults = {
			'level' : 1 ,
			'class' : ''
		}
		/**
		 * [settings 将用户定义参数和默认参数都赋给settings对象]
		 * @type {[obj]}
		 */
		var settings = $.extend({},defaults,options);
		/**
		 * 根据设置的level数值循环给set_level拼接对应的 .parent()个数，从而获取其指定的对应层级的父元素
		 */
		for(var a = 0 ; a < parseInt(settings.level) ; a++){
			set_level += '.parent()' ;
		};
		/**
		 * 选框点击触发事件
		 */
		check_box.click(function(){
			/**
			 * 触发点击事件的元素是否为选中状态？如果为选中状态，则添加样式，否则移除样式
			 */
			$(this).prop('checked') ? eval('$(this)' + set_level + '.addClass(settings.class)') : eval('$(this)' + set_level + '.removeClass(settings.class)') ;
			/**
			 * for循环计算此时有多少个选框是选中状态
			 */
			for(var b = 0; b < check_box.length ; b++){
				if(check_box.eq(b).prop('checked') ){
					count++;
				};
			};
			/**
			 * 判断如果选框此时是否全为选中状态
			 	* 如果是就勾选全选按钮并给其指定的父元素添加指定样式
			 	* 如果并没有全部选中，则全选按钮不能为选中状态，其父元素也要移除其指定的样式
			 */
			if(count === check_box.length){
				check_all.prop('checked','true');
				eval('check_all' + set_level + '.addClass(settings.class)');
			}else{
				check_all.removeAttr('checked');
				eval('check_all' + set_level + '.removeClass(settings.class)');
			}
			/**
			 * [count 清空count的值，以免累加]
			 * @type {Number}
			 */
			count = 0 ;
		});
		/**
		 * 全选点击触发事件
		 */
		check_all.click(function(){
			/**
			 * 判断全选选框是否为选中状态
			 	* 如果为选中状态，则所有选框都为选中状态，并添加指定样式
			 	* 如果为未选中状态，则移除所有选框的选中状态，并移除指定样式
			 */
			if (check_all.prop('checked') !== false) {
				check_box.each(function(){
					$(this).prop('checked',true);
	                eval('$(this)' + set_level + '.addClass(settings.class)');
	                eval('check_all' + set_level + '.addClass(settings.class)');
				});
			}else{
				check_box.each(function(){
					$(this).removeAttr('checked');
					eval('$(this)' + set_level + '.removeClass(settings.class)');
					eval('check_all' + set_level + '.removeClass(settings.class)');

				})
			};
		});
		return this;
	}
})(jQuery,window,document)