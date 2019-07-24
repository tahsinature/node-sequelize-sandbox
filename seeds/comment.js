const faker = require('faker');
const { debugDB, } = require('../util/debug');

const createdComments = [];

module.exports = posts =>
  new Promise(async (res, rej) => {
    for (const post of posts) {
      for (const iterator of Array(faker.random.number({ min: 1, max: 3, }))) {
        const comment = await post.createComment({
          body: faker.lorem.sentences(faker.random.number({ min: 1, max: 3, })),
        });
        createdComments.push(comment);
      }
    }
    debugDB(`${createdComments.length} comments created`);
    res(createdComments);
  });
