const express = require('express');
const listingController = require('../../db/sdcDb/sdcController.js');

// create a route handler
const router = express.Router();

router.route('/api/listing/:id/places')
  .get((req, res) => {
    const { id } = req.params;
    listingController.getListingById(id, (err, data) => {
      if (err) {
        console.log(err);
        res.status(404);
      } else {
        res.status(200).json(data);
      }
    })
  });

router.route('/api/listing/:id/places')
  .post((req, res) => {
    console.log('post request')
    const body = req.body;
    listingController.createListing(body, (err) => {
      if (err) {
        console.log(err);
        res.status(404);
      } else {
        res.status(200);
      }
    })
  })

router.route('/api/listing/:id/places')
  .put((req, res) => {
    console.log('time to update');
    const { id } = req.params;
    listingController.updateListing(id, (err) => {
      if (err) {
        console.log(err);
        res.status(404);
      } else {
        res.status(200);
      }
    })
  })

router.route('/api/listing/:id/places')
  .delete((req, res) => {
    console.log('time to delete');
    const {id} = req.params;
    listingController.removeListing(id, (err) => {
      if (err) {
        console.log(err);
        res.status(404);
      } else {
        res.status(200);
      }
    })
  })

module.exports = router;
