const faker = require('faker');
const { debugDB, } = require('../util/debug');
const { User, } = require('../models');

const createdUsers = [];

module.exports = () =>
  new Promise(async (res, rej) => {
    for (const iterator of Array(10)) {
      const user = await User.create({
        name: faker.name.findName(),
      });
      createdUsers.push(user);
    }
    debugDB('10 users created');
    res(createdUsers);
  });
