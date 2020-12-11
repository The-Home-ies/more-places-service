const pool = require('./sdcPool.js');


const getListingById = (id, callback) => {
  pool.connect()
    .then((client) => {
      client.query(`SELECT l.*, m.ranking, m.suggested_id FROM listings l JOIN more_places m ON (l.id = m.listing_id) WHERE id = ${id};`)
        .then(res => {
          console.log('get request');
          callback(null, res.rows)
          client.release();
        })
        .catch(err => {
          console.log(err);
          callback(err);
          client.release();
        })
    })
}

const createListing = (body, callback) => {
  console.log('controller',body)
}

const updateListing = (body, callback) => {
  console.log('want to update listing');
}

const removeListing = (id, callback) => {
  console.log('want to delete ', id);
  pool.connect()
    .then((client) => {
      client.query(``)
        .then (res => {
          console.log('delete request');
          callback(null);
          client.release();
        })
        .catch(err => {
          console.log(err);
          callback(err);
          client.release();
        })
    })
}

module.exports = {
  getListingById,
  createListing,
  updateListing,
  removeListing
}