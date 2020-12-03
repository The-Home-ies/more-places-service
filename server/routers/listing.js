const express = require('express');
const listingController = require('../../db/controllers/listing.js');

// create a route handler
const router = express.Router();

router.route('/api/:id/places')
  .get((req, res) => {
    const { id } = req.params;
    listingController.findOne(id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/api/places/add')
  .post((req, res) => {
    // const { id } = req.params;
    listingController.create(req.body, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/api/:id/places/delete')
  .delete((req, res) => {
    const { id } = req.params;
    listingController.deleteOne(id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(data);
      }
    });
  });

module.exports = router;
