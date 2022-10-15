const mongoose = require('mongoose');
module.exports = mongoose.model('History', new mongoose.Schema({
    id: { type: String },
    data: { type: Object, default: [] },
    registeredAt: { type: Date, default: new Date() }
}));