const {Pool} = require('pg');

const pool = new Pool({
  user: 'jason',
  host: 'localhost',
  database: 'places',
  port: 5432
});

pool.on('error', (err, client) => {
  console.log('Error:', err);
});

module.exports = pool;
