const { Sequelize, } = require('sequelize');
const dbs = require('../util/database');
const { SequelizeHelper, } = require('sequelize-utility');
const dbHelper = new SequelizeHelper(dbs, Sequelize);

const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(Post);
Post.hasMany(Comment);

// dbHelper.syncAllForce();

module.exports = {
  User,
  Post,
  Comment,
  dbHelper,
};
