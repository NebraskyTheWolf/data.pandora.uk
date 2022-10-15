const mongoose = require('mongoose');
module.exports = mongoose.model('Record', new mongoose.Schema({
    id: { type: String },
    caseId: { type: String },

    documents: { type: Object, default: [] },
    case: {
        author: { type: String },
        reason: { type: String },
        type: { type: String },
        platform: { type: String }
    },
    registeredAt: { type: Date, default: new Date() }
}));