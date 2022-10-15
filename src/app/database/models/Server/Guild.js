const mongoose = require('mongoose');
module.exports = mongoose.model('Guild', new mongoose.Schema({
    guildId: { type: String },
    ownerId: { type: String },
    guildName: { type: String },
    guildIcon: { type: String },
    guildDescription: { type: String },
    guildType: { type: String, default: 'SFW' },
    guildCountry: { type: String }
}));