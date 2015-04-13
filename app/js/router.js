define(
["backbone", "views/index"], 
function(Backbone, IndexView) {
	
	var AppRouter = Backbone.Router.extend({
		routes : {
			'*actions' : 'defaultAction',
		}
	});
	
	var initialize = function() {
		var router = new AppRouter();
		
		router.on('route:defaultAction', function() {
			var indexView = new IndexView;
			return indexView.render();
			
		});
		
		Backbone.history.start();
	};
	
	return {
		initialize : initialize
	};
	
});