define(
["backbone", "underscore"],
function(Backbone, _) {
	
	var ConnectedObjectView = Backbone.View.extend({
		template: _.template($('#connectedObject').html()),

		renderToOptionList: function(){
			return this.template(this.model.toJSON());
		}

	});
	
	return ConnectedObjectView;
});