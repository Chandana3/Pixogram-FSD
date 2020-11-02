const mongoose = require('mongoose');
const Blockedusers = mongoose.model('Blockedusers', new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },

    blockedUserId: {
        type: String,
        required: true,
    }

}));

exports.Blockedusers = Blockedusers;
