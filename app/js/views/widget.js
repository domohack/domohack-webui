define(
["backbone", "underscore"],
function(Backbone, _) {
	
	var WidgetView = Backbone.View.extend({
		el : $("#content"),
		model: false,
		template: _.template($('#widget').html()),
		
		initialize : function() {
			var that = this;
			this.model.get('connectedObject').fetch({
				success: function() {
					that.render();
		        },
			});
		},

		render: function(){
			if ($('body #content').find('#panel-widget-'+this.model.get('connectedObject').get('name')).html()) {
        		alert('Widget '+ this.model.get('connectedObject').get('name')+ ' already exist');
        		return false;
        	}
			this.$el.append(this.template({widget: this.model.get('connectedObject').toJSON()}));
		}

	});
	
	return WidgetView;
});