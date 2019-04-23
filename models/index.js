const sequelize = require('../util/database');

const User = require('./user');

// Either pass nothing (Just DB SYNC) or Pass => true/false (determine if it should force All Table) || tableName (Will Force single Table)
syncDB(true);

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
}

module.exports = {
  User,
};
