const { Model, DataTypes, } = require('sequelize');
const { sp1, } = require('../util/database');

class Post extends Model {}

Post.init(
  {
    body: DataTypes.TEXT,
  },
  {
    sequelize: sp1,
    modelName: 'post',
  }
);

module.exports = Post;
