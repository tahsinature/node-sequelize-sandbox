const sequelize = require('../util/database');

const User = require('./user');

// Either pass nothing (Just DB SYNC) or Pass => true/false (determine if it should force All Table) || tableName (Will Force single Table)
// 'flash'
// true
// tableName
syncDB('flash');

//
//
//
//
//
//
//
// Util Functions

function syncDB() {
  if (arguments.length > 1) throw new Error('Can\t Pass two arguments into Database Synchronization');
  const arg = arguments[0];
  let force;
  if (arg === 'flash') return flashDB();
  if (arguments.length < 1 || typeof arg === 'boolean') {
    force = arg;
    return syncParentDB();
  }
  const table = arguments[0];
  table.sync({ force: true, }).then(() => {
    console.log(`Table: ${table.name} synced forcefully...`);
  });

  function syncParentDB() {
    sequelize
      .sync({
        force,
      })
      .then(() => {
        console.log(`${sequelize.config.database} Synced` + (force ? ' Forcefully...' : '...'));
      });
  }

  function flashDB() {
    sequelize
      .drop()
      .then(() => {
        console.log('Databse Flashed: All tables removeed!');
      })
      .catch(err => {
        console.log(err.message);
      });
  }
}

module.exports = {
  User,
};
