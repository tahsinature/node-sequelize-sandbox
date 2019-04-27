const faker = require('faker');

exports.generateFromSchema = (schema, min = 1, max) => {
  max = max || min;
  return Array.from({ length: faker.random.number({ min, max, }), }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      entity[key] = faker.fake(schema[key]);
      return entity;
    }, {})
  );
};
