const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('User', {
  name: Sequelize.STRING,
});

module.exports = User;
