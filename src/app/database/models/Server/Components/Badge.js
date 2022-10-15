const mongoose = require('mongoose');
module.exports = mongoose.model('Badge', new mongoose.Schema({
    id: { type: String },
    badgeId: { type: String }
}));