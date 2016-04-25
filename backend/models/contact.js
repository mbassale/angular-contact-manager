var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ContactSchema   = new Schema({
    slug: String,
    name: String,
    email: String,
    phone: String,
    address: String,
    website: String,
    notes: String
});

module.exports = mongoose.model('Contact', ContactSchema);
