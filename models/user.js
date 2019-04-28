const { Model, DataTypes, } = require('sequelize');
const db = require('../util/database');

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize: db.connections.sp1,
    modelName: 'user',
  }
);

module.exports = User;
