(function() {
	define([
		'jquery',
		'underscore',
		'backbone',
		'mustache',
		'views/request.views',
		'views/navBar.views',
	],
   	function($, _, Backbone , Mustache, Request, NavBar) { 
		var Tutorial = Backbone.Model.extend({
			defaults:{
				lang: "EN",
			},
		    	initialize: function(lang){
			//set it to autoload when created
			    this.fetch(lang);
			},
		    	fetch: function(lang){
				$.ajax({
			    		url:lang+"-tutorial.js"
			    		dataType: JSON,
			    
				}).done(function(resp){
					    this.set({data:resp});

				});
			}
		});

		
		return {
			Tutorial : Tutorial,
		}
	}
);

})();

