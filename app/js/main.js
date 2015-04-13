require.config({
	paths: {
		'jquery': 'frontend/libs/jquery',
		'underscore': 'frontend/libs/underscore',
		'backbone': 'frontend/libs/backbone',
		'bootstrap': 'frontend/libs/bootstrap',
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ["underscore", "jquery"],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: ["jquery"]
		}
	}
});

var collectionConnectedObjectsUrl = "/list.json";
var modelConnectedObjectUrl = "/get.json";

require(
["app"], 
function(App) {
	
	App.initialize();
	
	console.log('All is OK');
	
});
