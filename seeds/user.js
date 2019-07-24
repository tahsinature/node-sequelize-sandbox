const faker = require('faker');
const { debugDB, } = require('../util/debug');
const models = require('../models');
const { User, } = models;

module.exports = () =>
  new Promise(async (res, rej) => {
    for (const iterator of Array(10)) {
      await User.create({
        name: faker.name.findName(),
      });
    }
    debugDB('10 users created');
    res();
  });
