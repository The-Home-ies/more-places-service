const express = require('express');
const listingController = require('../../db/sdcDb/sdcController.js');

// create a route handler
const router = express.Router();

router.route('/api/:id/places')
  .get((req, res) => {
    const { id } = req.params;
    listingController.getListingById(id, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    })
  });

router.route('/api/listing/places')
  .post((req, res) => {
    console.log('post request')
    const body = req.body;
    listingController.createListing(body, (err) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
  })

router.route('/api/listing/places')
  .put((req, res) => {
    console.log('time to update');
    // const { id } = req.params;
    // console.log(id)
    const body = req.body;
    listingController.updateListing(body, (err) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
  })

router.route('/api/listing/places')
  .delete((req, res) => {
    console.log('time to delete');
    const body = req.body
    listingController.removeListing(body, (err) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
  })

module.exports = router;
