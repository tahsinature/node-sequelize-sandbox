const { Model, DataTypes, } = require('sequelize');
const { sp1, } = require('../util/database');

class Comment extends Model {}

Comment.init(
  {
    body: DataTypes.TEXT,
  },
  {
    sequelize: sp1,
    modelName: 'comment',
  }
);

module.exports = Comment;
