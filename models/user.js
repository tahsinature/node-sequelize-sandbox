const { Model, DataTypes, } = require('sequelize');
const { sp1, } = require('../util/database');

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize: sp1,
    modelName: 'user',
  }
);

module.exports = User;
