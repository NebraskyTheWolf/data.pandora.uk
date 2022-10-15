const mongoose = require('mongoose');
module.exports = mongoose.model('Developer', new mongoose.Schema({
    id: { type: String }
}));