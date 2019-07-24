const { dbHelper, } = require('../models');

const seedUser = require('./user');
const seedPost = require('./post');
const seedComment = require('./comment');

dbHelper.syncAllForce().then(async () => {
  const users = await seedUser();
  const posts = await seedPost(users);
  await seedComment(posts);
});
