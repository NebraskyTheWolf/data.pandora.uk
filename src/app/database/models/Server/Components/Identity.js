const mongoose = require('mongoose');
module.exports = mongoose.model('Identity', new mongoose.Schema({
    userId: { type: String },
    identity: { type: Object, default: { } },
    status: { type: String, default: 'INVALID_IDENTITY' },
}));