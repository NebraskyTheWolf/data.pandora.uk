const mongoose = require('mongoose');
module.exports = mongoose.model('Member', new mongoose.Schema({
    memberId: { type: String },
    memberName: { type: String },
    memberIcon: { type: String }
}));