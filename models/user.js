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

// console.log(
//   db.connections[0].models.user.afterSync('asd', test => {
//     console.log(db.connections[0].models.user.tableName + ' has been synced');
//   })
// );
// User.sync({ force: true, });
