steal('jquery/model', function(){

/**
 * @class Reachout.Models.Brand
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend brand services.  
 */
$.Model('Reachout.Models.Brand',
/* @Static */
{
	findAll: "/brands.json",
  	findOne : "/brands/{id}.json", 
  	create : "/brands.json",
 	update : "/brands/{id}.json",
  	destroy : "/brands/{id}.json"
},
/* @Prototype */
{});

})