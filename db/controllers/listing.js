const mongoose = require('mongoose');
const { placeSchema } = require('./place.js');

const listingSchema = mongoose.Schema({
  listingID: { type: Number, unique: true },
  listingName: String,
  morePlacesID: [placeSchema], // an array of objects in carousel
});
// 100 unique listings, each rendering a unique carousel
// make moreplacesID an array of objects

const ListingModel = mongoose.model('Listing', listingSchema);

// method to retrieve a listing
const findOne = (id, callback) => {
  ListingModel.find({ listingID: id }).exec(callback);
};

module.exports = {
  ListingModel,
  findOne,
};
