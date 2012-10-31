steal("funcunit", function(){
	module("reachout test", { 
		setup: function(){
			S.open("//reachout/reachout.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})