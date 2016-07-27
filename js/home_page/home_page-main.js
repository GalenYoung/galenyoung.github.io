require.config({
	paths :{
		'sal-blink-effect' : '../sal-blink-effect',
		'SpringAnimation' :'../SpringAnimation'
	},
	
});

require(['sal-blink-effect'],function(SBE){
	var sbe = new SBE.salBlinkEffect();
})