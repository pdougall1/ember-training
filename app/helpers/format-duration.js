import Ember from 'ember';

function formatDuration(seconds) {
  var minutes = Math.floor(seconds/60);
  var remainingSeconds = seconds % 60;

  var result = '';
  if (remainingSeconds < 10) {
    result = "0";
  }

  result += String(remainingSeconds);

  result = minutes + ":" + result;

  return seconds;
}

export { formatDuration };

export default Ember.Handlebars.makeBoundHelper(formatDuration);
