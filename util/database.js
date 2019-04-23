const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_playground', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
