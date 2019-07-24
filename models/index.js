const { Sequelize, } = require('sequelize');
const dbs = require('../util/database');
const { SequelizeHelper, } = require('sequelize-utility');
const dbHelper = new SequelizeHelper(dbs, Sequelize);
const User = require('./user');

// db.syncAll();

module.exports = {
  User,
  dbHelper,
};
