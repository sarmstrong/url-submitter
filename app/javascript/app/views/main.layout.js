define(["marionette" , "backbone" , "tpl!app/templates/layout.tpl" , "app/views/url.form.view"  , 'app/views/growls.view'], function(Marionette , Backbone , layoutTemplate , URLFormView , GrowlsView) { 

	var Layout = Backbone.Marionette.Layout.extend({

		template : layoutTemplate , 

		initialize : function(options) {

			this.endPoints = options.endPoints; 

		} , 

		regions : {

			"form" : "#urlForm" , 

			"growls" : "#growls"

		} , 

		onRender : function() { 

			this.form.show(new URLFormView({endPoints : this.endPoints}));

			this.growls.show(new GrowlsView({url  : this.endPoints.growls})); 
		}

	}); 

	return Layout;

}); 