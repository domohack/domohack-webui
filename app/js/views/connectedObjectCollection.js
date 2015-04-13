define(
["backbone", "underscore", "views/connectedObject", "frontend/models/widget", "views/widget"],
function(Backbone, _, ConnectedObjectView, WidgetModel, WidgetView) {
	
	var ConnectedObjectCollectionView = Backbone.View.extend({
		el : $(".container"),
		collection: false,
		template: _.template($('#connectedObjectCollection').html()),
		
		initialize : function() {
			var that = this;
			this.collection.fetch({
				success: function() {
					that.render();
		        },
			});
		},
		
		events: {
			'click button#addWidget': 'addItem',
		},
		
		render: function(){
			var dataConnectedObjectView = "";
		      this.collection.each(function(connectedObject){
		          var connectedObjectView = new ConnectedObjectView({ model: connectedObject });
		          dataConnectedObjectView += connectedObjectView.renderToOptionList();
		      }, this);
		      this.$el.append(this.template({datasOption: dataConnectedObjectView}));
		},
		
		addItem: function(){
	    	var connectedObjectId = $(this.el).find("#select-connectedObjectCollection").val();
			if (connectedObjectId == "") {
				alert('Choose a connected object');
				return false;
			}
			var widget = new WidgetModel({ connectedObject : this.collection.findWhere({ id: connectedObjectId }) });
			var widgetView = new WidgetView({ model: widget });
        },	
		

	});
	
	return ConnectedObjectCollectionView;
});