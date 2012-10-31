steal("funcunit/qunit", "reachout/fixtures", "reachout/models/brand.js", function(){
	module("Model: Reachout.Models.Brand")
	
	test("findAll", function(){
		expect(4);
		stop();
		Reachout.Models.Brand.findAll({}, function(brands){
			ok(brands)
	        ok(brands.length)
	        ok(brands[0].name)
	        ok(brands[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Reachout.Models.Brand({name: "dry cleaning", description: "take to street corner"}).save(function(brand){
			ok(brand);
	        ok(brand.id);
	        equals(brand.name,"dry cleaning")
	        brand.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Reachout.Models.Brand({name: "cook dinner", description: "chicken"}).
	            save(function(brand){
	            	equals(brand.description,"chicken");
	        		brand.update({description: "steak"},function(brand){
	        			equals(brand.description,"steak");
	        			brand.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Reachout.Models.Brand({name: "mow grass", description: "use riding mower"}).
	            destroy(function(brand){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})