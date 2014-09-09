import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Step2', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /', function() {
  visit('/');

  andThen(function() {
    equal(currentPath(), 'index');
  });
});



test("Each album should have an image with its src attribute bound to the model's artwork property", function() {

  var images = [
    "assets/images/the-morning-after.jpg",
    "assets/images/dusk-to-dawn.jpg",
    "assets/images/the-heist.jpg",
    "assets/images/some-nights.jpg"
  ];

  visit('/');

  andThen(function() {
    Ember.$('.album img').each(function (i, el) { 
      notEqual( images.indexOf($(el).attr('src')), -1);
    });
  });



});
