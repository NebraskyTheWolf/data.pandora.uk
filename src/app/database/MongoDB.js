const mongoose = require('mongoose');

const appSchema = require('./models/Security/Application');
const developerSchema = require('./models/Security/Admin/Developer');
const historySchema = require('./models/Security/Admin/Log/History');
const accessAuditSchema = require('./models/Security/Admin/Log/Audit');

const guildSchema = require('./models/Server/Guild');
const staffSchema = require('./models/Server/Staff');
const memberSchema = require('./models/Server/Member');
const configSchema = require('./models/Server/Configuration');
const levelSchema = require('./models/Server/Components/Level');
const badgeSchema = require('./models/Server/Components/Badge');
const serverSchema = require('./models/Server/Components/Server');
const recordSchema = require('./models/Server/Components/Record');
const premiumSchema = require('./models/Server/Components/Premium');
const activitySchema = require('./models/Server/Components/Activity');
const identitySchema = require('./models/Server/Components/Identity');
const blacklistSchema = require('./models/Server/Components/Blacklist');
const verificationSchema = require('./models/Server/Components/Verification');

module.exports.fetchApplication = async function ( token ) {
   return await appSchema.findOne({ appToken: token });
}

module.exports.fetchDeveloper = async function ( id ) {
    return await developerSchema.findOne({ id: id });
}

module.exports.fetchHistory = async function ( id ) {
    return await historySchema.findOne({ id: id });
}

module.exports.fetchAudit = async function ( id ) {
    return await accessAuditSchema.findOne({ id: id });
}

