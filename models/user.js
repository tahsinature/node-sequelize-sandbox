const Sequelize = require('sequelize');
const db = require('../util/database');

const User = db.connections[0].define('User', {
  name: Sequelize.STRING,
});

module.exports = User;
