const models = require('../models');
const { User, } = models;
const faker = require('faker');
const dataGen = require('../util/dataGen');

const schema = {
  name: faker.name.lastName(),
};
const data = dataGen.generateFromSchema(schema, 9);

console.log(data);
