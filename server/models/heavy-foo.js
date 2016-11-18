var faker = require('faker');
var props = require('json-api-mock-server/lib/store/props');
var attr = props.attr;
var one = props.one;
var between = require('json-api-mock-server/lib/utils/between');

module.exports = {
  name: attr('string', { defaultValue: function() { return faker.lorem.words(between(3, 7)); }}),
  description: attr('string', { defaultValue: function() { return faker.lorem.sentences(between(3, 7)); }}),
  heavy: one('heavy', { inverse: 'heavyFoos', defaultValue: false }),
  foo: one('foo', { inverse: 'heavyFoo', defaultValue: true })
};
