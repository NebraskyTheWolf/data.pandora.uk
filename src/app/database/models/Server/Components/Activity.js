const mongoose = require('mongoose');
module.exports = mongoose.model('Activity', new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    status: { type: String },
    priority: { type: String },
    createdAt: { type: Date, default: new Date() }
}));