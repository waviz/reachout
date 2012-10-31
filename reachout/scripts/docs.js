//js reachout/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('reachout/reachout.html', {
		markdown : ['reachout']
	});
});