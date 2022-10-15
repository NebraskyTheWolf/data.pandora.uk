const mongoose = require('mongoose');
module.exports = mongoose.model('Application', new mongoose.Schema({
    appName: { type: String },
    appDescription: { type: String },
    appEnabled: { type: Boolean },
    appToken: { type: String }
}));