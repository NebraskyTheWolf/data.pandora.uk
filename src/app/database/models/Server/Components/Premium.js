const mongoose = require('mongoose');
module.exports = mongoose.model('Premium', new mongoose.Schema({
    id: { type: String },
    tier: { type: String }
}));