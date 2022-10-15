const mongoose = require('mongoose');
module.exports = mongoose.model('Audit', new mongoose.Schema({
    id: { type: String },
    data: { type: Object, default: [] },
    registeredAt: { type: Date, default: new Date() }
}));