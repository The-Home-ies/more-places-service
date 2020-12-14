// const pool = require('./sdcPool.js');

const {Pool} = require('pg');

const pool = new Pool({
  user: 'jason',
  host: 'localhost',
  database: 'places',
  port: 5432
});

// pool.on('error', (err, client) => {
//   console.log('Error:', err);
// });


const getListingById = (id, callback) => {
  pool.query(`SELECT l.*, m.ranking FROM listings l LEFT JOIN more_places m ON (l.id = m.suggested_id) WHERE listing_id = ${id};`, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows);
    }
  })
}

const createListing = (body, callback) => {
  pool.connect()
    .then((client) => {
      client.query(`INSERT INTO more_places(listing_id, suggested_id, ranking) VALUES (${body.listing_id}, ${body.suggested_id}, ${body.ranking});`)
        .then(res => {
          callback(null)
          client.release();
        })
        .catch(err => {
          console.log(err);
          callback(err);
          client.release();
        })
    })
    .catch(err => {
      console.log(err);
    })
}

const updateListing = (body, callback) => {
  console.log('want to update listing');
  pool.connect()
    .then((client) => {
      client.query(`UPDATE more_places SET ranking = ${body.ranking} WHERE listing_id = ${body.listing_id} AND suggested_id = ${body.suggested_id};`)
        .then(res => {
          callback(null);
          client.release();
        })
        .catch(err => {
          console.log(err);
          callback(err);
          client.release();
        })
    })
    .catch(err => {
      console.log(err);
    })
}

const removeListing = (body, callback) => {
  pool.connect()
    .then((client) => {
      client.query(`DELETE FROM more_places WHERE listing_id = ${body.listing_id} AND suggested_id = ${body.suggested_id};`)
        .then(res => {
          callback(null);
          client.release();
        })
        .catch(err => {
          console.log(err);
          callback(err);
          client.release();
        })
    })
    .catch(err => {
      console.log(err);
    })
}

module.exports = {
  getListingById,
  createListing,
  updateListing,
  removeListing
}