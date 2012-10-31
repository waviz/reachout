steal('reachout/css/reachout.css', 'reachout/models/models.js','reachout/fixtures/fixtures.js')
.then('jquery/controller', 'jquery/view/ejs','jquery/dom/form_params', 'jquery/controller/view', 'reachout/models', './views/init.ejs')
.then( function($){
/**
 * @class reachout.Brand
 * @parent index
 * @inherits jQuery.Controller
 * Creates brands
 */
$.Controller('Reachout.Brand',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	}
	
});
$(document).ready(function(){
    $("#homepageGridDynamic").reachout_brand();
}); 

});