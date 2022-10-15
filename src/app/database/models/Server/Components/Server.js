const mongoose = require('mongoose');
module.exports = mongoose.model('Server', new mongoose.Schema({
    id: { type: String },
    guildId: { type: String },
    joinedAt: { type: Date, default: new Date() }
}));