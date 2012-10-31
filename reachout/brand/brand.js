steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'reachout/models' )
	.then('./views/init.ejs', function($){

/**
 * @class reachout.Brand
 * @parent index
 * @inherits jQuery.Controller
 * Creates brands
 */
$.Controller('reachout.Brand',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	}
	
});

});