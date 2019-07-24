const { Sequelize, } = require('sequelize');

module.exports.sp1 = new Sequelize({
  database: 'sequelize_playground',
  username: 'postgres',
  password: '1234',
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: false,
  },
});

module.exports.sp2 = new Sequelize({
  database: 'sequelize_playground_2',
  username: 'postgres',
  password: '1234',
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: false,
  },
});
