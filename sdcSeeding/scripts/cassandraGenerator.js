const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const listingWriter = fs.createWriteStream('./sdcSeeding/cassandraCsv/listings.csv');
listingWriter.write('listing_it,rank,similar_id,listing_name,picture_url,location_name,liked,score,review_count,room_type,room_name,bed_count,cost_per_night\n', 'utf8');

function generateListings(writer, encoding, callback, ) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      const listing_id = id;
      const rank = parseFloat(((Math.random() * (10 - 1) + 1).toFixed(1)));
      const similar_id = Math.floor(Math.random() * (1000 - 1) + 1);
      const listing_name = faker.lorem.words();
      const picture_url = 'PICTURE URL HERE';
      const location_name = faker.address.streetName();
      const liked = false;
      const score = parseFloat(((Math.random() * (5 - 3) + 3).toFixed(2)));
      const review_count = Math.floor(Math.random() * 200);
      const room_type = faker.commerce.productName();
      const room_name = faker.commerce.productName();
      const bed_count = Math.floor(Math.random() * (10 - 1) + 1);
      const cost_per_night = Math.floor(Math.random() * (500 - 50) + 50);
      const data = `${listing_id},${rank},${similar_id},${listing_id},${picture_url},${location_name},${liked},${score},${review_count},${room_type},${room_name},${bed_count},${cost_per_night}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

const favoritesWriter = fs.createWriteStream('./sdcSeeding/cassandraCsv/favorites.csv');
favoritesWriter.write('user_id,username,favorites\n', 'utf8');

function generateFavorites(writer, encoding, callback) {
  let i = 1000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      var randomNumFavs = Math.floor(Math.random() * 10);
      for (var j = 0; j < randomNumFavs; j++) {
        const user_id = id;
        const username = faker.name.findName();
        const favorites = Math.floor(Math.random() * (1000 - 1) + 1);
        const data = `${user_id},${username},${favorites}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write)
    }
  }
  write();
}

generateListings(listingWriter, 'utf8', () => {
  listingWriter.end();
});

generateFavorites(favoritesWriter, 'utf8', () => {
  favoritesWriter.end();
})