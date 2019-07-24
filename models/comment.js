const { Model, DataTypes, } = require('sequelize');
const { sp1, } = require('../util/database');

class Comment extends Model {}

Comment.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize: sp1,
    modelName: 'comment',
  }
);

module.exports = Comment;
