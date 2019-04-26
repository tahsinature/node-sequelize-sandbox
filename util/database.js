const Sequelize = require('sequelize');
let connections = [];

const connection1 = new Sequelize('sequelize_playground', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: false,
  },
});
connections.push(connection1);

const connection2 = new Sequelize('sequelize_playground_2', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: false,
  },
});
connections.push(connection2);

const db = {
  connections,
  establishConnections() {
    const self = this;
    return new Promise(function(resolve, reject) {
      let activeConnection = 0;
      self.connections.forEach(connection =>
        connection
          .authenticate()
          .then(() => {
            console.log('Connected to Database: ' + connection.config.database);
            activeConnection = activeConnection + 1;
            if (activeConnection === connections.length) {
              resolve('Successfully Connected to All DB...');
            }
          })
          .catch(err => {
            reject(new Error(err.message));
          })
      );
    });
  },
  resetTable(table) {
    table
      .sync({ force: true, })
      .then(() => {
        console.log(table.name + ' has been restored...');
      })
      .catch(err => {
        throw err;
      });
  },
  resetMultipleTable() {
    console.log('Feature Coming Soon');
  },
  sync(connection) {
    connection
      .sync()
      .then(() => {
        console.log(connection.config.database + ' synced...');
      })
      .catch(err => {
        throw err;
      });
  },
  syncAll() {
    let syncedConnection = 0;
    this.connections.forEach(connection =>
      connection
        .sync()
        .then(() => {
          syncedConnection = syncedConnection + 1;
          if (syncedConnection === connections.length) {
            console.log('All DB synced...');
          }
        })
        .catch(err => {
          throw err;
        })
    );
  },
  syncForce(connection) {
    connection
      .sync({ force: true, })
      .then(() => {
        console.log(connection.config.database + ' synced forcefully...');
      })
      .catch(err => {
        throw err;
      });
  },
  syncAllForce() {
    let syncedConnection = 0;
    this.connections.forEach(connection =>
      connection
        .sync({ force: true, })
        .then(() => {
          syncedConnection = syncedConnection + 1;
          if (syncedConnection === connections.length) {
            console.log('All DB synced Forcefully...');
          }
        })
        .catch(err => {
          throw err;
        })
    );
  },
  dropTablesFromConnection(connection) {
    connection
      .drop()
      .then(() => {
        console.log(`All created tables has been removed from Database: ${connection.config.database}...`);
      })
      .catch(err => {
        throw err;
      });
  },
  dropTablesFromAllConnections() {
    let droppedConnection = 0;
    this.connections.forEach(connection => {
      connection
        .drop()
        .then(() => {
          droppedConnection = droppedConnection + 1;
          if (droppedConnection === this.connections.length) console.log(`All created tables has been removed from All Database (${this.connections.length})...`);
        })
        .catch(err => {
          throw err;
        });
    });
  },
};

module.exports = db;
