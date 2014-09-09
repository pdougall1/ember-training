import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TrainingENV.locationType
});

Router.map(function() {
	this.resource('album', { path: '/album/:album_id'});
});

export default Router;
