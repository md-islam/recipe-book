import './Recipe.html';


Template.Recipe.helpers({
	updateRecipeId: function() {
		console.log("updateRecipeId clicked");
		return this._id;
	}
});

Template.Recipe.events({
	'click .toggle-menu': function(){
		console.log("ADD TO MENU button clicked");
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash' : function(){
		console.log(this);
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil' : function(){
		Session.set('editMode', !Session.get('editMode'));
	}
});