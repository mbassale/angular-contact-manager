var express = require('express');
var router = express.Router();
var slug = require('slug');
var mongoose = require('mongoose');
var db = mongoose.connection;

var Contact = require('../models/contact');

/* test api response */
router.get('/contacts', function (req, res) {
  Contact.find(function (err, contacts) {
    if (err) {
      res.send(err);
    }
    res.json(contacts);
  });
});

router.post('/contacts', function (req, res) {
  var contact = new Contact(); // create a new instance of the Bear model
  contact.name = req.body.name;
  contact.email = req.body.email;
  contact.phone = req.body.phone;
  contact.slug = slug(req.body.name);

  // save the bear and check for errors
  contact.save(function (err) {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    } else {
      res.json({
        success: true,
        message: 'Contact created',
        contact: contact
      });
    }
  });
});

router.delete('/contacts/:id', function (req, res) {
  Contact.remove({_id: req.params.id }, function (err, bear) {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    } else {
      res.json({ message: 'Successfully deleted' });
    }
  });
});

module.exports = router;
