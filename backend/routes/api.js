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

router.post('/contacts', function(req, res) {

        var contact = new Contact();      // create a new instance of the Bear model
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        contact.slug = slug(req.body.name + '<' + req.body.email + '>');

        // save the bear and check for errors
        contact.save(function(err) {
            if (err)
                res.send(err);

            res.json({
              success: true,
              message: 'Contact created',
              contact: contact
            });
        });

    });


module.exports = router;
