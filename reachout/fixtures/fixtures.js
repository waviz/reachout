// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("store", 5, function(i, store){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "store "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("brand", 5, function(i, brand){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "brand "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("user", 5, function(i, user){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "user "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})