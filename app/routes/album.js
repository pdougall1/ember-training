import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    play: function(song) {
      this.controllerFor('nowPlaying').set('model', song);
    }
  }

});
