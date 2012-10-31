steal(
	'reachout/css/reachout.css', 			// application CSS file
	'reachout/models/models.js',		// steals all your models
	'reachout/fixtures/fixtures.js',
	function(){
	  $('#reachout').reachout_brand_data();
});