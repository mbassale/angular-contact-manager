var express = require('express');
var router = express.Router();
var slug = require('slug');
var mongoose = require('mongoose');
var db = mongoose.connection;

var Contact = require('../models/contact');

/* Get all contacts */
router.get('/contacts', function (req, res) {
  Contact.find(function (err, contacts) {
    if (err) {
      res.send(err);
    }
    res.json(contacts);
  });
});

router.post('/contacts', function (req, res) {
  var contact = new Contact(); // create a new instance of the Contact model
  contact.name = req.body.name;
  contact.email = req.body.email;
  contact.phone = req.body.phone;
  contact.address = req.body.address;
  contact.website = req.body.website;
  contact.notes = req.body.notes;
  contact.slug = slug(req.body.name);

  // save the contact and check for errors
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

router.put('/contacts/:id', function (req, res) {
  // use our Contact model to find the contact we want
  Contact.findById(req.params.id, function (err, contact) {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    } else {
      contact.name = req.body.name; // update the contacts info
      contact.email = req.body.email;
      contact.phone = req.body.phone;
      contact.address = req.body.address;
      contact.website = req.body.website;
      contact.notes = req.body.notes;
      contact.slug = slug(req.body.name);
      // save the contact
      contact.save(function (err) {
        if (err) {
          res.json({
            success: false,
            message: err
          });
        } else {
          res.json({
            success: true,
            message: 'Contact updated',
            contact: contact
          });
        }
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
      res.json({
        success: true,
        message: 'Contact deleted'
      });
    }
  });
});

module.exports = router;
