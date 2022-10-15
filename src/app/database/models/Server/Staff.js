const mongoose = require('mongoose');
module.exports = mongoose.model('Staff', new mongoose.Schema({
    id: { type: String }
}));