import DS from 'ember-data';

export default DS.Model.extend({
	artwork: DS.attr('string'),
	name: DS.attr('string'),
	artist: DS.attr('string'),
	isExplicit: DS.attr('boolean'),
	songs: DS.hasMany('song', { async: true }),

  totalDuration: function() {
    return this.get('songs').reduce(function(sum, song) {
      return sum + song.get('duration');
    }, 0);
  }.property('songs.@each.duration')


});
