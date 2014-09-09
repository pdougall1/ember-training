import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Step3', {
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


test("Explicit albums should have a warning about their contents", function() {
  visit('/');

  andThen(function() {
    // equal(Ember.$('p.album-name:contains("The Morning After") ~ p.song-count:not(:has(span.explicit))').text(), "");
    // equal(Ember.$('p.album-name:contains("Dusk to Dawn") ~ p.song-count:not(:has(span.explicit))').text(), "");
    equal(Ember.$('p.album-name:contains("The Heist") ~ p.song-count span.explicit').text(), "EXPLICIT");
    equal(Ember.$('p.album-name:contains("Some Nights") ~ p.song-count span.explicit').text(), "EXPLICIT");
  });

});
