const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
   name: String,
   email: String,
   joinDate: Date,
   gender: String,
   nationality: String,
});

module.exports = mongoose.model('Member', memberSchema);
