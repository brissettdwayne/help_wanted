var mongoose = require('mongoose');

var postingSchema = mongoose.Schema({
  name: {type: String, required: true},
  option: {type: String, required: true},
  contactInfo: {type: String, required: true},
  skills: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model('Posting', postingSchema);
