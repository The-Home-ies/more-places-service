const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const Images = require('./images.js');

const listingWriter = fs.createWriteStream('./sdcSeeding/postgresCsv/listings.csv');
listingWriter.write('id,listing_name,picture_url,location_name,liked,score,review_count,room_type,room_name,bed_count,cost_per_night\n', 'utf8');

function generateListings(writer, encoding, callback, numListings) {
  // let i = 1000;
  let listing_id = 0;
  function write() {
    let ok = true;
    do {
      // i--;
      numListings--;
      listing_id++;
      const id = listing_id;
      const listing_name = faker.lorem.words();
      const picture_url = Images.images[Math.floor(Math.random() * (1000 - 1) + 1)];
      const location_name = faker.address.streetName();
      const liked = false;
      const score = parseFloat(((Math.random() * (5 - 3) + 3).toFixed(2)));
      const review_count = Math.floor(Math.random() * 200);
      const room_type = faker.commerce.productName();
      const room_name = faker.commerce.productName();
      const bed_count = Math.floor(Math.random() * (10 - 1) + 1);
      const cost_per_night = Math.floor(Math.random() * (500 - 50) + 50);
      const data = `${id},${listing_name},${picture_url},${location_name},${liked},${score},${review_count},${room_type},${room_name},${bed_count},${cost_per_night}\n`;
      if (numListings === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (numListings > 0 && ok);
    if (numListings > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

const placesWriter = fs.createWriteStream('./sdcSeeding/postgresCsv/morePlaces.csv')
placesWriter.write('listing_id, suggested_id, ranking\n', 'utf8');

function generateMorePlaces(writer, encoding, callback, numListings) {
  // let i = 1000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      // i--;
      numListings--;
      id++;
      for (var j = 0; j < 12; j++) {
        const listing_id = id;
        const suggested_id = Math.floor(Math.random() * (numListings - 1) + 1);;
        const ranking = parseFloat(((Math.random() * (10 - 1) + 1).toFixed(1)));
        const data = `${listing_id},${suggested_id},${ranking}\n`
        if (numListings === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
    } while (numListings > 0 && ok);
    if (numListings > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

const userWriter = fs.createWriteStream('./sdcSeeding/postgresCsv/users.csv');
userWriter.write('user_id,username,favorites\n', 'utf8')

function generateUsers(writer, encoding, callback, numUsers, numListings) {
  let id = 0;
  function write() {
    let ok = true;
    do {
      numUsers--;
      id++;
      const user_id = id;
      const username = faker.name.findName();
      const favorites = Math.floor(Math.random() * 15);
      const data = `${user_id},${username},${favorites}\n`;
      generateFavorites(id, favorites, numListings);
      if (numUsers === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (numUsers > 0 && ok);
    if (numUsers > 0) {
      writer.once('drain', write)
    }
  }
  write();
}

const favoritesWriter = fs.createWriteStream('./sdcSeeding/postgresCsv/favorites.csv');
favoritesWriter.write('user_id, favorite_id\n', 'utf8');

function generateFavorites(user, numFavorites, numListings) {
  var count = Math.floor(Math.random() * 10);
  for (var i = 0; i < numFavorites; i++) {
    const user_id = user;
    const favorite_id = Math.floor(Math.random() * (numListings - 1) + 1);
    const data = `${user_id},${favorite_id}\n`;
    favoritesWriter.write(data, 'utf8');
  }
}

function generateAll(listings, users) {
  generateListings(listingWriter, 'utf8', () => {
    listingWriter.end();
  }, listings);
  generateMorePlaces(placesWriter, 'utf8', () => {
    placesWriter.end();
  }, listings);
  generateUsers(userWriter, 'utf8', () => {
    userWriter.end();
  }, users, listings)
}

generateAll(1000000, 100000);