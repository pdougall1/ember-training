import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Step4', {
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


// this will be tested with real user interaction

// test("When navigating to /album/1, the album with ID of 1 is displayed", function() {
//   navigateTo('/album/1', function() {
//     equal(find('div.album-info').length, 1);
//   });
// });
