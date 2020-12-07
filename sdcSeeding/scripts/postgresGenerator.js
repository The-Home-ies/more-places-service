const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

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
      const picture_url = 'PICTURE URL HERE';
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
        const suggested_id = id;
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

function generateUsers(writer, encoding, callback, numUsers) {
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
function generateAll(listings, users) {
  // generateListings(listingWriter, 'utf8', () => {
  //   listingWriter.end();
  // }, listings);
  generateMorePlaces(placesWriter, 'utf8', () => {
    placesWriter.end();
  }, listings);
  generateUsers(userWriter, 'utf8', () => {
    userWriter.end();
  }, users)
}


generateAll(1000, 100)



// var listingWriter = csvWriter();
// var placesWriter = csvWriter();
// var userWriter = csvWriter();
// var favoritesWriter = csvWriter();

// const generateListing = async (numListings) => {
//   listingWriter.pipe(fs.createWriteStream('./sdcSeeding/postgresCsv/listings.csv'));

//   for (var i = 1; i <= numListings; i++) {
//     await listingWriter.write({
//       id: i,
//       listing_name: faker.lorem.words(),
//       picture_url: 'PICTURE URL HERE',
//       location_name: faker.address.streetName(),
//       liked: false,
//       score: parseFloat(((Math.random() * (5 - 3) + 3).toFixed(2))),
//       review_count: Math.floor(Math.random() * 200),
//       room_type: faker.commerce.productName(),
//       room_name: faker.commerce.productName(),
//       bed_count: Math.floor(Math.random() * (6 - 1) + 1),
//       cost_per_night: Math.floor(Math.random() * (500 - 50) + 50)
//     })
//     await generateMorePlaces(i, numListings);
//   }
//   listingWriter.end();
// }

// const generateMorePlaces = async (listing, numListings) => {
//   placesWriter.pipe(fs.createWriteStream('./sdcSeeding/postgresCsv/morePlaces.csv'));
//   // for (var i = 1; i <= numListings; i++) {
//   for (var j = 0; j < 12; j++) {
//     await placesWriter.write({
//       listing_id: listing,
//       similar_id: Math.floor(Math.random() * (numListings - 1) + 1),
//       ranking: Math.floor(Math.random() * (10 - 1) + 1)
//     })
//   }
//   // }
//   placesWriter.end();
// }

// // const generateUsers = (numUsers) => {
// //   userWriter.pipe(fs.createWriteStream('./sdcSeeding/postgresCsv/users.csv'));
// //   for (var i = 1; i <= numUsers; i++) {
// //     const numFavs = Math.floor(Math.random() * (5 - 1) + 1);
// //     userWriter.write({
// //       user_id: i,
// //       username: faker.name.findName(),
// //       favorites: numFavs
// //     })
// //   }
// //   userWriter.end();
// // }


// // const generateFavorites = (numUsers) => {
// //   favoritesWriter.pipe(fs.createWriteStream('./sdcSeeding/postgresCsv/favorites.csv'));
// //   var count = Math.floor(Math.random() * 10);
// //   for (var i = 1; i <= numUsers; i++) {
// //     for (var j = 0; j < count; j++) {
// //       favoritesWriter.write({
// //         user_id: i,
// //         favorite_id: Math.floor(Math.random() * (1000 - 1) + 1)
// //       })
// //     }
// //   }
// // }

// async function generate(numListings, numUsers) {
//   await generateListing(numListings);
//   // generateMorePlaces(numListings);
//   // generateUsers(numUsers);
//   // generateFavorites(numUsers);

// }

// generate(10);