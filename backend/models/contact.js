var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ContactSchema   = new Schema({
    slug: String,
    name: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Contact', ContactSchema);
