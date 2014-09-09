import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Step1', {
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

test("The album list is enclosed in a <div> with the class 'album-list'", function() {
  visit('/');

  andThen(function() {
    equal(find('div.album-list').length, 1);
  });
});

test("Each of the four albums should appear on the screen", function() {
  visit('/');

  andThen(function() {
    equal(find('div.album-list div.album').length, 4);
  });
});

