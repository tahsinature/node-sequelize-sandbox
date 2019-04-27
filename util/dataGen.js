const faker = require('faker');

exports.generateFromSchema = (schema, min = 1, max) => {
  max = max || min;
  const data = [];

  // return Array.from({ length: faker.random.number({ min, max, }), }).map(() =>
  //   Object.keys(schema).reduce((entity, key) => {
  //     entity[key] = faker.fake(schema[key]);
  //     return entity;
  //   }, {})
  // );
};

// const clientsSchema = {
//   id: faker.random.number(),
//   name: '{{company.companyName}} {{company.companySuffix}}',
//   address: '{{address.streetAddress}}',
//   phone: '{{phone.phoneNumber}}',
//   email: '{{internet.email}}',
//   test: '{{random.boolean}}',
// };
// console.log(this.generateFromSchema(clientsSchema, 20));
// faker.random.boolean
exports.foo = () => {
  const data = [];
  for (i = 0; i < 10; i++) {
    data.push({ ran: faker.random.number(), });
  }
  return data;
};
