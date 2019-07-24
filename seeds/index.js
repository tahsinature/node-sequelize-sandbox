const { dbHelper, } = require('../models');

const seedUser = require('./user');

dbHelper.syncAllForce().then(async () => {
  await seedUser();
});
