steal("funcunit/qunit", "reachout/fixtures", "reachout/models/store.js", function(){
	module("Model: Reachout.Models.Store")
	
	test("findAll", function(){
		expect(4);
		stop();
		Reachout.Models.Store.findAll({}, function(stores){
			ok(stores)
	        ok(stores.length)
	        ok(stores[0].name)
	        ok(stores[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Reachout.Models.Store({name: "dry cleaning", description: "take to street corner"}).save(function(store){
			ok(store);
	        ok(store.id);
	        equals(store.name,"dry cleaning")
	        store.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Reachout.Models.Store({name: "cook dinner", description: "chicken"}).
	            save(function(store){
	            	equals(store.description,"chicken");
	        		store.update({description: "steak"},function(store){
	        			equals(store.description,"steak");
	        			store.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Reachout.Models.Store({name: "mow grass", description: "use riding mower"}).
	            destroy(function(store){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})