const mongoose = require('mongoose');
module.exports = mongoose.model('Blacklist', new mongoose.Schema({
    id: { type: String },
    type: { type: String },
    sanction: { type: Object, default: { } },
    registeredAt: { type: Date, default: new Date() }
}));