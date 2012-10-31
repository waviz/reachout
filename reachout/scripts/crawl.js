// load('reachout/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("reachout/reachout.html","reachout/out")
});
