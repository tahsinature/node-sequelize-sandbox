const faker = require('faker');
const { debugDB, } = require('../util/debug');

const createdPosts = [];

module.exports = users =>
  new Promise(async (res, rej) => {
    for (const user of users) {
      for (const iterator of Array(faker.random.number({ min: 1, max: 3, }))) {
        const post = await user.createPost({
          body: faker.lorem.sentences(faker.random.number({ min: 1, max: 3, })),
        });
        createdPosts.push(post);
      }
    }
    debugDB(`${createdPosts.length} posts created`);
    res(createdPosts);
  });
