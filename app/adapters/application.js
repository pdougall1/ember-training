import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // host: 'http://ember-training-api.herokuapp.com'
  host: 'http://localhost:4567'
});
