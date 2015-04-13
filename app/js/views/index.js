define(
["backbone", "frontend/collections/connectedObjects", "views/connectedObjectCollection"],
function(Backbone, ConnectedObjectCollection, ConnectedObjectCollectionView) {
	
	var IndexView = Backbone.View.extend({
		el : $(".container"),
		
		render: function(){
			var connectedObjectCollectionView = new ConnectedObjectCollectionView({ collection: new ConnectedObjectCollection() });
		},
		
	});
	
	return IndexView;
});