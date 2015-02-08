var knex = require('knex');

module.exports = Client;

var db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://localhost:5151/nodelytics-API'
});

db.schema.hasTable('client').then(function(exists) {
  if (!exists) {
    db.schema.createTable('client', function(server) {
      server.string('url', 255);
      server.string('method', 255);
      server.timestamp('requestTime');
      server.bigInteger('duration');
      server.string('ip');
      server.string('body');
      server.string('query');
    }).then(function() {
      console.log('Created new client table');
    });
  }
});

var Client = bookshelf(db).Model.extend({
  tableName: 'client',
  hasTimestamps: true
});