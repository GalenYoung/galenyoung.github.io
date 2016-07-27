require.config({
	paths :{
		'sal-blink-effect' : '../sal-blink-effect',
		'solve_footer_Location' : '../solve_footer_Location',
	},
	
});

require(['sal-blink-effect'],function(SBE){
	var sbe = new SBE.salBlinkEffect();
});
require(['solve_footer_Location'],function(SFL){
	var sfl = new SFL.solveFooterLocation();
})