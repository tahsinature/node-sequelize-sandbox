const models = require('../models');
const { User, } = models;
const dataGen = require('../util/dataGen');
const schema = {
  name: '{{name.lastName}}',
};
const data = dataGen.generateFromSchema(schema, 10);

User.bulkCreate(data)
  .then(() => {
    console.log(`${data.length} Users created`);
  })
  .catch(err => {
    console.log(err.message);
  });
