const {Pool, Client} = require('pg');

const pool = new Pool({
  user: 'jason',
  host: 'localhost',
  database: 'places',
  port: 5432
})

pool.on('error', (err, client) => {
  console.log('Error:', err);
});


const seedListings = `COPY listings FROM '/Users/jason/Desktop/hrsf131/SDC/places-to-stay-service/sdcSeeding/postgresCsv/listings.csv' DELIMITER ',' CSV HEADER;`;
pool.connect()
  .then((client) => {
    console.time('listingTime');
    console.time('morePlacesTime');
    console.time('usersTime');
    console.time('favoritesTime');
    client.query(seedListings)
      .then(res => {
        console.log('Seeded listings');
        client.release();
        console.timeEnd('listingTime');
      })
      .catch(err => {
        console.log(err)
        client.release();
      });
  })
  .catch(err => {
    console.log(err)
  });

const seedMorePlaces = `COPY more_places FROM '/Users/jason/Desktop/hrsf131/SDC/places-to-stay-service/sdcSeeding/postgresCsv/morePlaces.csv' DELIMITER ',' CSV HEADER;`;
pool.connect()
  .then((client) => {
    console.time('moreTime');
    client.query(seedMorePlaces)
      .then(res => {
        console.log('Seeded more places');
        client.release();
        console.timeEnd('morePlacesTime');
      })
      .catch(err => {
        console.log(err);
        client.release();
      });
  })
  .catch(err => {
    console.log(err)
  });

const seedUsers = `COPY users FROM '/Users/jason/Desktop/hrsf131/SDC/places-to-stay-service/sdcSeeding/postgresCsv/users.csv' DELIMITER ',' CSV HEADER;`;
pool.connect()
  .then((client) => {
    client.query(seedUsers)
      .then(res => {
        console.log('Seeded users');
        client.release();
        console.timeEnd('usersTime');
      })
      .catch(err => {
        console.log(err);
        client.release();
      });
  })
  .catch(err => {
    console.log(err)
  });

const seedFavorites = `COPY favorites FROM '/Users/jason/Desktop/hrsf131/SDC/places-to-stay-service/sdcSeeding/postgresCsv/favorites.csv' DELIMITER ',' CSV HEADER;`;
pool.connect()
  .then((client) => {
    client.query(seedFavorites)
      .then(res => {
        console.log('Seeded favorites');
        client.release();
        console.timeEnd('favoritesTime');
      })
      .catch(err => {
        console.log(err);
        client.release();
      });
  })
  .catch(err => {
    console.log(err)
  });