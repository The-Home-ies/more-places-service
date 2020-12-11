const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const Images = require('./images.js');

const listingWriter = fs.createWriteStream('./sdcSeeding/cassandraCsv/listings.csv');
listingWriter.write('listing_id,rank,listing_name,picture_url,score,review_count,room_type,bed_count,cost_per_night\n', 'utf8');

function generateListings(writer, encoding, callback, numListings) {
  let id = 0;
  const total = numListings;
  function write() {
    let ok = true;
    do {
      numListings--;
      id++;
      for (var i = 0; i < 12; i++) {
        const listing_id = id;
        const rank = parseFloat(((Math.random() * (10 - 1) + 1).toFixed(4)));
        const listing_name = faker.lorem.word();
        const picture_url = Images.images[Math.floor(Math.random() * (1000 - 1) + 1)];
        // const location_name = faker.address.streetName();
        // const liked = false;
        const score = parseFloat(((Math.random() * (5 - 3) + 3).toFixed(2)));
        const review_count = Math.floor(Math.random() * 200);
        const room_type = faker.lorem.word();
        // const room_name = faker.commerce.productName();
        const bed_count = Math.floor(Math.random() * (10 - 1) + 1);
        const cost_per_night = Math.floor(Math.random() * (500 - 50) + 50);
        const data = `${listing_id},${rank},${listing_name},${picture_url},${score},${review_count},${room_type},${bed_count},${cost_per_night}\n`;
        generateMorePlaces(id, rank, total)
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

const placesWriter = fs.createWriteStream('./sdcSeeding/cassandraCsv/morePlaces.csv')
placesWriter.write('listing_id,suggested_id,rank\n', 'utf8');

function generateMorePlaces(listing, ranking, numListings) {
    const listing_id = listing;
    const suggested_id = Math.floor(Math.random() * (numListings - 1) + 1);;
    const rank = ranking;
    const data = `${listing_id},${suggested_id},${rank}\n`
    placesWriter.write(data, 'utf8');
}

const favoritesWriter = fs.createWriteStream('./sdcSeeding/cassandraCsv/favorites.csv');
favoritesWriter.write('user_id,username,favorites,favorite_id\n', 'utf8');

function generateUserFavorites(writer, encoding, callback, numUsers, numListings) {
  let id = 0;
  function write() {
    let ok = true;
    do {
      numUsers--;
      id++;
      var randomNumFavs = Math.floor(Math.random() * 15);
      const user_id = id;
      const username = faker.name.findName();
      for (var j = 0; j < randomNumFavs; j++) {
        const favorite_id = Math.floor(Math.random() * (numListings - 1) + 1);
        const data = `${user_id},${username},${randomNumFavs},${favorite_id}\n`;
        if (numUsers === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
    } while (numUsers > 0 && ok);
    if (numUsers> 0) {
      writer.once('drain', write)
    }
  }
  write();
}

function generateAll(listings, users) {
  generateListings(listingWriter, 'utf8', () => {
    listingWriter.end();
  }, listings);
  generateUserFavorites(favoritesWriter, 'utf8', () => {
    favoritesWriter.end();
  }, users, listings);
}

generateAll(10000000, 1000000);