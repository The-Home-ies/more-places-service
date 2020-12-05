const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

var listingWriter = csvWriter();
var placesWriter = csvWriter();
var userWriter = csvWriter();
var favoritesWriter = csvWriter();

const generateListing = (numListings) => {
  listingWriter.pipe(fs.createWriteStream('./sdcSeeding/postgresCsv/listings.csv'));

  for (var i = 1; i <= numListings; i++) {
    listingWriter.write({
      id: i,
      listing_name: faker.lorem.words(),
      picture_url: 'PICTURE URL HERE',
      location_name: faker.address.streetName(),
      liked: false,
      score: parseFloat(((Math.random() * (5 - 3) + 3).toFixed(2))),
      review_count: Math.floor(Math.random() * 200),
      room_type: faker.commerce.productName(),
      room_name: faker.commerce.productName(),
      bed_count: Math.floor(Math.random() * (6 - 1) + 1),
      cost_per_night: Math.floor(Math.random() * (500 - 50) + 50)
    })
    // generateMorePlaces(i);
  }
  listingWriter.end();
}

const generateMorePlaces = (numListings) => {
  placesWriter.pipe(fs.createWriteStream('./sdcSeeding/postgresCsv/morePlaces.csv'));
  for (var i = 1; i <= numListings; i++) {
    for (var j = 0; j < 12; j++) {
      placesWriter.write({
        listing_id: i,
        similar_id: i,
        ranking: Math.floor(Math.random() * (10 - 1) + 1)
      })
    }
  }
  placesWriter.end();
}

const generateUsers = (numUsers) => {
  userWriter.pipe(fs.createWriteStream('./sdcSeeding/postgresCsv/users.csv'));
  for (var i = 1; i <= numUsers; i++) {
    const numFavs = Math.floor(Math.random() * (5 - 1) + 1);
    userWriter.write({
      user_id: i,
      username: faker.name.findName(),
      favorites: numFavs
    })
  }
  userWriter.end();
}


const generateFavorites = (numUsers) => {
  favoritesWriter.pipe(fs.createWriteStream('./sdcSeeding/postgresCsv/favorites.csv'));
  var count = Math.floor(Math.random() * 10);
  for (var i = 1; i <= numUsers; i++) {
    for (var j = 0; j < count; j++) {
      favoritesWriter.write({
        user_id: i,
        favorite_id: Math.floor(Math.random() * (1000 - 1) + 1)
      })
    }
  }
}

async function generate(numListings) {
  var numUsers = Math.floor(Math.random() * (numListings - (numListings / 2)) + (numListings / 2));
  generateListing(numListings);
  generateMorePlaces(numListings);
  generateUsers(numUsers);
  generateFavorites(numUsers);

}

generate(1000);