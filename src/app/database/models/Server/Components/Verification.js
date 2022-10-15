const mongoose = require('mongoose');
module.exports = mongoose.model('Verification', new mongoose.Schema({
    id: { type: String },
    guildId: { type: String },
    statusCode: { type: String },
    isVerified: { type: Boolean }
}));