require.config({
	paths :{
		'solve_footer_Location' : '../solve_footer_Location'
	},
});

require(['solve_footer_Location'],function(SFL){
	var sfl = new SFL.solveFooterLocation();
})