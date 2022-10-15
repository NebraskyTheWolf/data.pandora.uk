const mongoose = require('mongoose');
module.exports = mongoose.model('Level', new mongoose.Schema({
    id: { type: String },
    level: { type: Number },
    experiences: { type: Number }
}));