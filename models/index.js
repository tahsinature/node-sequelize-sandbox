const db = require('../util/database');
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// db.syncAll();

module.exports = {
  User,
  Post,
  Comment,
};
